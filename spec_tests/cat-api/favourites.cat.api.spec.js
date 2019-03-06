const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks'),
api_key = global.APIKEY;

describe('Favourites route', ()=>{
    var image_id = 833;

    it('should return 200 status code', (done) =>{

        mocks.use(['listAllFavourities']);

        request.get('/v1/favourites')
        .set("X-Api-Key", api_key)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            done();
        });
    });

    it('should save an image as favourite and get the saved Id', (done) =>{

        mocks.use(['saveFavouriteImage']);

        request.post('/v1/favourites')
        .send({
            "image_id": "asf2",
        })
        .set("X-Api-Key", api_key)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(typeof(res.body.id)).toBe("number");
            expect(res.body.message).toBe("SUCCESS");

            image_id = res.body.id;
            done();
        });
    });

    it('should return all favourites', (done) =>{

        mocks.use(['listAllFavourities']);

        request.get('/v1/favourites')
        .set("X-Api-Key", api_key)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
            done();
        });
    });

    it('should return specified favourite image', (done) =>{

        mocks.use(['getSpecificImage']);

        request.get('/v1/favourites/' + image_id)
        .set("X-Api-Key", api_key)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(image_id);
            done();
        });
    });

    it('should delete specified favourite image', (done) =>{

        mocks.use(['deleteSpecificImage']);

        request.delete('/v1/favourites/' + image_id)
        .set("X-Api-Key", api_key)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            done();
        });
    });
});
