"use strict";
n.r(t), n.d(t, {
  _transformMetadataToCamelCase: function() {
    return function e(t) {
      return null == t ? t : Object.keys(t).reduce((n, _) => {
        let u = (0, o.camelCase)(_);
        return "object" != typeof t[_] || Array.isArray(t[_]) ? n[u] = t[_] : n[u] = e(t[_]), n
      }, {})
    }
  },
  _transformMetadataToSnakeCase: function() {
    return function e(t) {
      return null == t ? t : Object.keys(t).reduce((n, _) => {
        let u = (0, o.snakeCase)(_);
        return "object" != typeof t[_] || Array.isArray(t[_]) ? n[u] = t[_] : n[u] = e(t[_]), n[u] = t[_], n
      }, {})
    }
  }
}), n("724458");
var o = n("392711")