const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks'),
helper = require('../common/helper');

describe('Categories route', ()=>{

    var expectedData = [{ id: 5, name: 'boxes' },
    { id: 15, name: 'clothes' },
    { id: 1, name: 'hats' },
    { id: 14, name: 'sinks' },
    { id: 2, name: 'space' },
    { id: 4, name: 'sunglasses' },
    { id: 7, name: 'ties' }];

    it('should return 200 status code', (done) =>{

        mocks.use(['listAllCategories']);

        request.get('/v1/categories')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect()
            done();
        });
    });

    it('should return specified limit of data in response body', (done) =>{

        mocks.use(['limitedCategories']);

        request.get('/v1/categories?limit=2&page=1')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.length).toEqual(2);
            done();
        });
    });

    it('should return correct body', (done) => {

      mocks.use(['listAllCategories']);

      request.get('/v1/categories')
      .set("X-Api-Key", config.get("app.api-key"))
      .end( (err, res) => {
        if(err) done.fail(err);
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body).toEqual(expectedData);
        expect(helper.dataFromEach(expectedData, "name")).toEqual(helper.dataFromEach(res.body, "name"));
        done();
      });
    });

});
