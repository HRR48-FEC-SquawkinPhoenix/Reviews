//const jest = require('jest');
const axios = require('axios');

describe('server testing', () => {
  
  test('expect true to be true sanity check', () => {
    return expect(true).toBe(true);
  })

  test('expect first get request to return with a 200 status code', () => {
    return axios.get('http://localhost:3002/')
      .then(response => {
        return expect(response.status).toBe(200);
      })
      .catch(err => {
        throw err;
      });
  });

  test('expect to be able to get a 200 status on fetching all reviews', () => {
    return axios.get(`http://localhost:3002/api/allReviews`)      
      .then(response => {
        return expect(response.status).toBe(200);
      })
      .catch(err => {
        throw err;
      })
  })
  //will take this test out once we have more relevant data 
  test('expect to get a review with all properties', () => {    
    let expected = {
      __v: expect.any(Number),
      _id: expect.any(String),
      author: expect.any(String),
      purchasedItem: expect.any(String),
      imageUrl: expect.any(String),
      reviewBody: expect.any(String),
      helpful: expect.any(Number),
      stars: expect.any(Number),
      date: expect.any(String)
    }
    return axios.get('http://localhost:3002/api/allReviews')
      .then(response => {
        return expect(response.data[0]).toMatchObject(expected);
      })
      .catch(err => {
        throw err
      })
  })

  test('expect to be able to fetch a review by Id', () => {
    let expected = {
      __v: expect.any(Number),
      _id: "5f722c4cbe45671dc32d43f7",
      author: "Vincent Mann",
      purchasedItem: "Generic Cotton Table",
      imageUrl: "http://placeimg.com/640/480",
      reviewBody: "Use the online XSS driver, then you can program the back-end card!",
      helpful: 452,
      stars: 0,
      date: "2020-08-20T05:39:51.520Z"

    }
    return axios.get('http://localhost:3002/api/allReviews/5f722c4cbe45671dc32d43f7')
      .then(response => {
        return expect(response.data[0]).toMatchObject(expected)
      })
      .catch(err => {
        throw err
      })
  })



});
