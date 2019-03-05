const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks')

jest.setTimeout(10000);

describe('Breeds route', ()=>{

    response_limit = 2;
    page_limit = 1;

    it('should return all breeds with 200 status code', (done) =>{

        mocks.use(['listAllCatBreeds']);

        request.get('/v1/breeds')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            done();
        });
    });

    it('should return specified limit of data in response body', (done) =>{

        mocks.use(['limitedBreeds']);

        request.get('/v1/breeds?limit=' + response_limit + '&page=' + page_limit)
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            done();
        });
    });

});
