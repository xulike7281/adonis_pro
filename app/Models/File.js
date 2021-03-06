'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const filesize = use('filesize')

class File extends Model {
  getSize (size) {
    return filesize(size)
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = File
