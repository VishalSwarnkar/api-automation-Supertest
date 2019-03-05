const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks'),
Joi = require('joi');

jest.setTimeout(10000);

describe('Schema validation', ()=>{

    it('Should schema have right set of data types in all cat breeds entpoint', (done) =>{

      mocks.use(['listAllCatBreeds']);

      const schema = Joi.object().keys({
        origin: Joi.string().regex(/'United States'/),
        id: Joi.number().integer()
      });

      request.get('/v1/breeds')
      .set("X-Api-Key", config.get("app.api-key"))
      .end( (err, res) =>{
          if(err) done.fail(err);
          expect(res.status).toBe(200);
          expect(Joi.validate(res.body, schema)).toBeTruthy();
          done();
      });
    });

    it('Should schema have right set of data types in categories', (done) => {

      mocks.use(['listAllCategories']);

      const schema = Joi.object().keys([{
        id: Joi.number().integer().required(),
        name: Joi.string().required()
      }]);

      request.get('/v1/categories')
      .set("X-Api-Key", config.get("app.api-key"))
      .end( (err, res) =>{
          if(err) done.fail(err);
          expect(res.status).toBe(200);
          expect(Joi.validate(res.body, schema)).toBeTruthy();
          done();
      });
    });

    it('Should schema have right set of data types in favourite endpoint', (done) => {

      mocks.use(['listAllFavourities']);

      const schema = Joi.object().keys([{
        id: Joi.number().required(),
        user_id: Joi.string().alphanum().required(),
        image_id: Joi.string().alphanum().required(),
          sub_id: Joi.string().regex(/^\w+-[0-9]{4}$/),
        created_at: Joi.date().timestamp(),
        image:
        {
          id: Joi.string().alphanum(),
          url: Joi.string().uri()
        }
      }]);

      request.get('/v1/favourites')
      .set("X-Api-Key", config.get("app.api-key"))
      .end( (err, res) =>{
          if(err) done.fail(err);
          expect(res.status).toBe(200);
          expect(Joi.validate(res.body, schema)).toBeTruthy();
          done();
      });

    })

});
