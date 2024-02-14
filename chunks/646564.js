"use strict";
var n = e("644367");

function i(t) {
  if (t) return function(t) {
    for (var r in i.prototype) Object.prototype.hasOwnProperty.call(i.prototype, r) && (t[r] = i.prototype[r]);
    return t
  }(t)
}
t.exports = i;
i.prototype.get = function(t) {
  return this.header[t.toLowerCase()]
}, i.prototype._setHeaderProperties = function(t) {
  var r = t["content-type"] || "";
  this.type = n.type(r);
  var e = n.params(r);
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (this[i] = e[i]);
  this.links = {};
  try {
    t.link && (this.links = n.parseLinks(t.link))
  } catch (t) {}
}, i.prototype._setStatusProperties = function(t) {
  var r = t / 100 | 0;
  this.statusCode = t, this.status = this.statusCode, this.statusType = r, this.info = 1 === r, this.ok = 2 === r, this.redirect = 3 === r, this.clientError = 4 === r, this.serverError = 5 === r, this.error = (4 === r || 5 === r) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
}