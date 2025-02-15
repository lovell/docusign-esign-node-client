/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConnectUserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectUserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.IntegratedConnectUserInfoList = factory(root.Docusign.ApiClient, root.Docusign.ConnectUserInfo);
  }
}(this, function(ApiClient, ConnectUserInfo) {
  'use strict';


  /**
   * The IntegratedConnectUserInfoList model module.
   * @module model/IntegratedConnectUserInfoList
   */

  /**
   * Constructs a new <code>IntegratedConnectUserInfoList</code>.
   * @alias module:model/IntegratedConnectUserInfoList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IntegratedConnectUserInfoList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegratedConnectUserInfoList} obj Optional instance to populate.
   * @return {module:model/IntegratedConnectUserInfoList} The populated <code>IntegratedConnectUserInfoList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'String');
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [ConnectUserInfo]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * 
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * 
   * @member {String} previousUri
   */
  exports.prototype['previousUri'] = undefined;
  /**
   * 
   * @member {String} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * 
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * 
   * @member {String} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectUserInfo>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


