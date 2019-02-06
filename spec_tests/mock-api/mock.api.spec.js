var file = require('fs'),
	superTest = require('supertest'),
	config = require('config'),
	request = superTest(global.ENV),
	mocks = require('../fixtures/http_mocks');


describe('JEST Demo', ()=>{
	console.log(config.get("app.baseurl"));

	test('It should get 200 status code', (done) =>{

		mocks.use(['getUsers'])

		request.get('/users')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(200);
			done();
		});
	});

	test('It should return 404 error', (done) =>{

		mocks.use(['invalidRoute'])

		request.get('/invalid')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(404);
			done();
		});
	});

	test('It should return data', (done)=>{

		mocks.use(['getUser1'])

		request.get('/users/1')
		.end( (err, res)=>{
			if(err) done.fail(err);
			expect(res.text.length).toBeGreaterThan(0);
			done();
		});
	});

	it('expect body content must match string', (done)=>{
		mocks.use(['getUser1'])

		request.get('/users/1')
	      .expect('json', {
	        id: 1,
	        email: 'joe.schmoe@example.com'
	      })
	      done();
	})

	it('expectHeader should match regardless of case', (done)=>{
    mocks.use(['getUser1']);

    request.get('/users/1')
      .expect('header', 'conTent-tYpe', 'application/json')
      done();
  });

	it('expectHeader should not match with bad regex', (done)=>{
    mocks.use(['getUser1']);

    request.get('/users/1')
			.expect('header','Content-Type', /jsonx/)
			done();
  });

	it('should output invalid body and reason in error message', (done)=>{
    mocks.use(['invalidJSON']);

      request.get('/res/invalid')
      .then(function (res) {
        fail('this function will never be called.');
      })
      .catch(function (err) {
        expect(err.message).toMatch(/^Invalid json response /);
        expect(err.message).toMatch(/body: '.*'/);
        expect(err.message).toMatch(/reason: '.+'/);
      })
      done();
  });

	it('should support JSON natively', (done)=>{
    mocks.use(['createUser']);

    request.post('/users', {
      body: {
        email: 'user@example.com',
        password: 'password'
      }
    }).expect('status', 201)

		done();
  });
});
