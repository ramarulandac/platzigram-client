'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    //  default options --> routes name on pro environment
    this.options = options || {
      endpoint: {
        pictures: 'http://api.platzigram.com/picture',
        users: 'http://api.platzigram.com/user',
        auth: 'http://api.platzigram.com/auth'
      }
    }
  }
//  getPicture
  getPicture (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

//  getPicture
  savePicture (picture, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.pictures}/`,
      body: picture,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  likePicture (id, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.pictures}/${id}/like`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  listPictures (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/list`,
      json: true

    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  listPicturesByTag (tag, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/tag/${tag}`,
      json: true

    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveUser (user, callback) {
    console.log(`${this.options.endpoints.users}/`)
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/`,
      body: user,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getUser (userName, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/${userName}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  auth (userName, password, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.auth}/`,
      body: {
        username: userName,
        password: password
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
}

module.exports = Client
