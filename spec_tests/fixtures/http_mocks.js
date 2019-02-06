'use-strict';

const nock = require('nock');
const mockHost = "http://api.example.com"
const mocks = {

	/*
	 * users
	 */
	getUsers() {
		return nock(mockHost)
			.get('/users')
			.reply(200, {
				source: [
					{
						id: 1,
						email: 'sample@example.com'
					},
					{
						id: 2,
						email: 'second@example.com'
					}
				]
			});
	},

	getUser1() {
		return nock(mockHost)
			.get('/users/1')
			.reply(200, {
				id: 1,
				email: 'joe.schmoe@example.com'
			});
	},

	createUser() {
		return nock(mockHost)
			.post('/users', {
				email: 'user@example.com',
				password: 'password'
			})
			.reply(201, {
				id: 2,
				email: 'user@example.com'
			});
	},

	/**
	* cat breeds
	*/

	listAllCatBreeds() {
		return nock(mockHost).defaultReplyHeaders({
			'X-Powered-By': 'Rails',
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '67',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '1ms'
		}).get('/v1/breeds')
			.reply(200, {
				"alt_names": "",
				"experimental": 0,
				"hairless": 0,
				"hypoallergenic": 0,
				"id": "abys",
				"life_span": "14 - 15",
				"name": "Abyssinian",
				"natural": 1,
				"origin": "Egypt",
				"rare": 0,
				"reference_image_id": null,
				"rex": 0,
				"short_legs": 0,
				"suppressed_tail": 0,
				"temperament": "Active, Energetic, Independent, Intelligent, Gentle",
				"weight_imperial": "7  -  10",
				"wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
			})
	},

	listAllCategories() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Fri, 07 Dec 2018 03:57:28 GMT',
			'content-type': 'application/json; charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '7',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'cache-control': 'public, max-age=12800',
			'x-response-time': '0ms'
		})
			.get('/v1/categories')
			.reply(200,
				[{ id: 5, name: 'boxes' },
				{ id: 15, name: 'clothes' },
				{ id: 1, name: 'hats' },
				{ id: 14, name: 'sinks' },
				{ id: 2, name: 'space' },
				{ id: 4, name: 'sunglasses' },
				{ id: 7, name: 'ties' }]
			)
	},
	
	listAllFavourities() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Fri, 07 Dec 2018 04:08:48 GMT',
			'content-type': 'application/json; charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '8',
			'pagination-page': '0',
			'pagination-limit': '100',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '11ms'
		})
			.get('/v1/favourites')
			.reply(200,
				[{
					id: 4096,
					user_id: 'h5lses',
					image_id: '9ccXTANkb',
					sub_id: 'user-1234',
					created_at: '2018-12-06T10:14:35.000Z',
					image:
					{
						id: '9ccXTANkb',
						url: 'https://cdn2.thecatapi.com/images/9ccXTANkb.jpg'
					}
				},
				{
					id: 4098,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:47:12.000Z',
					image: {}
				},
				{
					id: 4099,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:49:41.000Z',
					image: {}
				},
				{
					id: 4100,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:50:37.000Z',
					image: {}
				},
				{
					id: 4101,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:51:24.000Z',
					image: {}
				},
				{
					id: 4102,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:52:00.000Z',
					image: {}
				},
				{
					id: 4103,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:53:03.000Z',
					image: {}
				},
				{
					id: 4104,
					user_id: 'h5lses',
					image_id: 'asf2',
					sub_id: null,
					created_at: '2018-12-06T12:54:30.000Z',
					image: {}
				}]
			)
	},

	limitedCategories() {
		return nock(mockHost)
			.get('/v1/categories?limit=2&page=1')
			.reply(200, [
				{ 
					id: 1, 
					name: 'hats' 
				}, 
				{ 
					id: 14, 
					name: 'sinks' 
				}
			])
	},

	limitedBreeds() {
		return nock(mockHost).defaultReplyHeaders({
			'X-Powered-By': 'Rails',
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '67',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '1ms'
		}).get('/v1/breeds?limit=2&page=1')
			.reply(200, [
				{
					"adaptability": 5,
					"affection_level": 5,
					"alt_names": "",
					"child_friendly": 4,
					"country_code": "US",
					"description": "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
					"dog_friendly": 5,
					"energy_level": 3,
					"experimental": 0,
					"grooming": 1,
					"hairless": 0,
					"health_issues": 1,
					"hypoallergenic": 0,
					"id": "abob",
					"intelligence": 5,
					"life_span": "11 - 15",
					"name": "American Bobtail",
					"natural": 0,
					"origin": "United States",
					"rare": 0,
					"rex": 0,
					"shedding_level": 3,
					"short_legs": 0,
					"social_needs": 3,
					"stranger_friendly": 3,
					"suppressed_tail": 1,
					"temperament": "Intelligent, Interactive, Lively, Playful, Sensitive",
					"vocalisation": 3,
					"weight_imperial": "7 - 16",
					"wikipedia_url": "https://en.wikipedia.org/wiki/American_Bobtail"
				},
				{
					"adaptability": 5,
					"affection_level": 5,
					"alt_names": "",
					"child_friendly": 4,
					"country_code": "US",
					"description": "Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.",
					"dog_friendly": 5,
					"energy_level": 3,
					"experimental": 0,
					"grooming": 2,
					"hairless": 0,
					"health_issues": 1,
					"hypoallergenic": 0,
					"id": "acur",
					"intelligence": 3,
					"life_span": "12 - 16",
					"name": "American Curl",
					"natural": 0,
					"origin": "United States",
					"rare": 0,
					"rex": 0,
					"shedding_level": 3,
					"short_legs": 0,
					"social_needs": 3,
					"stranger_friendly": 3,
					"suppressed_tail": 0,
					"temperament": "Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social",
					"vocalisation": 3,
					"weight_imperial": "5 - 10",
					"wikipedia_url": "https://en.wikipedia.org/wiki/American_Curl"
				}
			])
	},

	listAllVotes() {
		return nock(mockHost).defaultReplyHeaders({
			'X-Powered-By': 'Rails',
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '67',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '1ms'
		}).get('/v1/votes')
			.reply(200, [
				{
					"country_code": null,
					"created_at": "2018-12-06T10:38:51.000Z",
					"id": 47127,
					"image_id": "asf2",
					"sub_id": null,
					"value": 1
				},
				{
					"country_code": null,
					"created_at": "2018-12-06T10:41:29.000Z",
					"id": 47128,
					"image_id": "asf2",
					"sub_id": null,
					"value": 1
				}
			])
	},

	getSpecificVote() {
		return nock(mockHost).defaultReplyHeaders({
			'X-Powered-By': 'Rails',
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '67',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '1ms'
		}).get('/v1/votes/47127')
			.reply(200, {
					"country_code": null,
					"created_at": "2018-12-06T10:38:51.000Z",
					"id": 47127,
					"image_id": "asf2",
					"sub_id": null,
					"value": 1
			})
	},

	createVote() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'connection': 'keep-alive',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'x-response-time': '1ms'
		}).post('/v1/votes')
			.reply(200, {
				"id": 52526,
				"message": "SUCCESS"
			})
	},

	deleteVote() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'connection': 'keep-alive',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'x-response-time': '1ms'
		}).delete('/v1/votes/47127')
			.reply(200, {
				"message": "SUCCESS"
			})
	},

	getSpecificImage() {
		return nock(mockHost).defaultReplyHeaders({
			'X-Powered-By': 'Rails',
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'transfer-encoding': 'chunked',
			'connection': 'close',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'pagination-count': '67',
			'pagination-page': '0',
			'pagination-limit': '1000',
			'access-control-expose-headers': 'Pagination-Count, Pagination-Page, Pagination-Limit',
			'x-response-time': '1ms'
		}).get('/v1/favourites/833')
			.reply(200, {
				"id": 833,
				"image_id": "1ud",
				"sub_id": "",
				"user_id": "4"
			})
	},

	saveFavouriteImage() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'connection': 'keep-alive',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'x-response-time': '1ms'
		}).post('/v1/favourites')
			.reply(200, {
				"id": 833,
				"message": "SUCCESS"
			})
	},

	deleteSpecificImage() {
		return nock(mockHost).defaultReplyHeaders({
			'date': 'Thu, 06 Dec 2018 09:26:41 GMT',
			'content-type': 'application/json charset=utf-8',
			'connection': 'keep-alive',
			'server': 'nginx/1.12.1',
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'vary': 'Origin',
			'x-response-time': '1ms'
		}).delete('/v1/favourites/833')
			.reply(200, {
				"message": "SUCCESS"
			})
	},

	/**
	 * Errors
	 */

	timeout() {
		return nock(mockHost)
			.get('/timeout')
			.delay(500)
			.reply(200, {
				timout: 2000
			});
	},

	postError() {
		return nock(mockHost)
			.post('/error')
			.reply(400, {
				result: 'error'
			});
	},

	invalidJSON() {
		return nock(mockHost)
			.get('/res/invalid')
			.reply(200, '{"aaa":}', {
				'Content-Type': 'application/json'
			});
	},

	invalidRoute() {
		return nock(mockHost)
			.get('/invalid')
			.reply(404, '{"message":"Page not found"}', {
				'Content-Type': 'application/json'
			});
	}
};

module.exports.use = function (mocksRequested, callback) {
	mocksRequested.forEach(function (mockName) {
		if (typeof mocks[mockName] === 'undefined') {
			throw new Error("Mock '" + mockName + "' is not defined in 'mocks' object. Unknown mock requested.");
		}

		var result = mocks[mockName].call(this);


		if (callback) {
			//console.log(result);
			callback.call(this, result);
		}
	});
};
