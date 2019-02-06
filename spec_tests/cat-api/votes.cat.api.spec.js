const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('Votes route', ()=>{
    var vote_id = 47127;

    it('should create a vote for selected image', (done) =>{

        mocks.use(['createVote']);

        request.post('/v1/votes')
        .send({
            "image_id": "asf2",
            "value": 1
        })
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(typeof(res.body.id)).toBe("number");
            done();
        });
    });

    it('should return votes created by user', (done) =>{

        mocks.use(['listAllVotes']);

        request.get('/v1/votes')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
            done();
        });
    });

    it('should return vote specified', (done) =>{

        mocks.use(['getSpecificVote']);

        request.get('/v1/votes/47127')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(vote_id);
            done();
        });
    });

    it('should delete specified vote', (done) =>{

        mocks.use(['deleteVote']);

        request.delete('/v1/votes/47127')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            done();
        });
    });

});
