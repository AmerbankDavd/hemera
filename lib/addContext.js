/*!
 * hemera
 * Copyright(c) 2016 Dustin Deus (deusdustin@gmail.com)
 * MIT Licensed
 */

'use strict'

const Util = require('./util')

/**
 * 
 * 
 * @class AddContext
 */
class AddContext {

  /**
   * 
   * 
   * @static
   * @param {any} ctx
   * 
   * @memberOf AddContext
   */
  static init(ctx) {

      ctx.delegationData = {}
      ctx.delegationData.response$ = {}
      ctx.delegationData.response$.startTime = Util.nowHrTime()

    }
    /**
     * 
     * 
     * @static
     * @param {any} ctx
     * @param {any} msg
     * 
     * @memberOf AddContext
     */
  static before(ctx, msg) {

    //Pass metadata to response
    let result = msg.pattern
    result.meta$ = msg.meta$
    result.request$ = msg.request$

    //Pass parent id from previous request
    ctx.parentId$ = msg.request$.id

    //Append to response
    ctx.delegationData.meta$ = msg.meta$ || {}
    ctx.delegationData.request$ = msg.request$

    return result
  }
  static after() {

  }

}

module.exports = AddContext