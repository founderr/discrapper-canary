"use strict";

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}
e("222007"), e("854508"), e("70102"), e("274635");
var i = e("102321");

function o(t) {
  if (t) return function(t) {
    for (var r in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, r) && (t[r] = o.prototype[r]);
    return t
  }(t)
}
t.exports = o;
o.prototype.clearTimeout = function() {
  return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
}, o.prototype.parse = function(t) {
  return this._parser = t, this
}, o.prototype.responseType = function(t) {
  return this._responseType = t, this
}, o.prototype.serialize = function(t) {
  return this._serializer = t, this
}, o.prototype.timeout = function(t) {
  if (!t || "object" !== n(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) switch (r) {
      case "deadline":
        this._timeout = t.deadline;
        break;
      case "response":
        this._responseTimeout = t.response;
        break;
      case "upload":
        this._uploadTimeout = t.upload;
        break;
      default:
        console.warn("Unknown timeout option", r)
    }
  return this
}, o.prototype.retry = function(t, r) {
  return (0 == arguments.length || !0 === t) && (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = r, this
};
var u = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
o.prototype._shouldRetry = function(t, r) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
  if (this._retryCallback) try {
    var e = this._retryCallback(t, r);
    if (!0 === e) return !0;
    if (!1 === e) return !1
  } catch (t) {
    console.error(t)
  }
  return !!r && !!r.status && !!(r.status >= 500) && 501 !== r.status || !!t && (!!t.code && -1 !== u.indexOf(t.code) || !!t.timeout && "ECONNABORTED" === t.code || !!t.crossDomain) || !1
}, o.prototype._retry = function() {
  return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
}, o.prototype.then = function(t, r) {
  var e = this;
  if (!this._fullfilledPromise) {
    var n = this;
    this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(t, r) {
      n.on("abort", function() {
        var t = Error("Aborted");
        t.code = "ABORTED", t.status = e.status, t.method = e.method, t.url = e.url, r(t)
      }), n.end(function(e, n) {
        e ? r(e) : t(n)
      })
    })
  }
  return this._fullfilledPromise.then(t, r)
}, o.prototype.catch = function(t) {
  return this.then(void 0, t)
}, o.prototype.use = function(t) {
  return t(this), this
}, o.prototype.ok = function(t) {
  if ("function" != typeof t) throw Error("Callback required");
  return this._okCallback = t, this
}, o.prototype._isResponseOK = function(t) {
  return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
}, o.prototype.get = function(t) {
  return this._header[t.toLowerCase()]
}, o.prototype.getHeader = o.prototype.get, o.prototype.set = function(t, r) {
  if (i(t)) {
    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && this.set(e, t[e]);
    return this
  }
  return this._header[t.toLowerCase()] = r, this.header[t] = r, this
}, o.prototype.unset = function(t) {
  return delete this._header[t.toLowerCase()], delete this.header[t], this
}, o.prototype.field = function(t, r) {
  if (null == t) throw Error(".field(name, val) name can not be empty");
  if (this._data) throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  if (i(t)) {
    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && this.field(e, t[e]);
    return this
  }
  if (Array.isArray(r)) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && this.field(t, r[n]);
    return this
  }
  if (null == r) throw Error(".field(name, val) val can not be empty");
  return "boolean" == typeof r && (r = String(r)), this._getFormData().append(t, r), this
}, o.prototype.abort = function() {
  return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
}, o.prototype._auth = function(t, r, e, n) {
  switch (e.type) {
    case "basic":
      this.set("Authorization", "Basic ".concat(n("".concat(t, ":").concat(r))));
      break;
    case "auto":
      this.username = t, this.password = r;
      break;
    case "bearer":
      this.set("Authorization", "Bearer ".concat(t))
  }
  return this
}, o.prototype.withCredentials = function(t) {
  return void 0 === t && (t = !0), this._withCredentials = t, this
}, o.prototype.redirects = function(t) {
  return this._maxRedirects = t, this
}, o.prototype.maxResponseSize = function(t) {
  if ("number" != typeof t) throw TypeError("Invalid argument");
  return this._maxResponseSize = t, this
}, o.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  }
}, o.prototype.send = function(t) {
  var r = i(t),
    e = this._header["content-type"];
  if (this._formData) throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  if (r && !this._data) Array.isArray(t) ? this._data = [] : !this._isHost(t) && (this._data = {});
  else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
  if (r && i(this._data))
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (this._data[n] = t[n]);
  else "string" == typeof t ? (!e && this.type("form"), "application/x-www-form-urlencoded" === (e = this._header["content-type"]) ? this._data = this._data ? "".concat(this._data, "&").concat(t) : t : this._data = (this._data || "") + t) : this._data = t;
  return !r || this._isHost(t) ? this : (!e && this.type("json"), this)
}, o.prototype.sortQuery = function(t) {
  return this._sort = void 0 === t || t, this
}, o.prototype._finalizeQueryString = function() {
  var t = this._query.join("&");
  if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
    var r = this.url.indexOf("?");
    if (r >= 0) {
      var e = this.url.substring(r + 1).split("&");
      "function" == typeof this._sort ? e.sort(this._sort) : e.sort(), this.url = this.url.substring(0, r) + "?" + e.join("&")
    }
  }
}, o.prototype._appendQueryString = function() {
  console.warn("Unsupported")
}, o.prototype._timeoutError = function(t, r, e) {
  if (!this._aborted) {
    var n = Error("".concat(t + r, "ms exceeded"));
    n.timeout = r, n.code = "ECONNABORTED", n.errno = e, this.timedout = !0, this.abort(), this.callback(n)
  }
}, o.prototype._setTimeouts = function() {
  var t = this;
  this._timeout && !this._timer && (this._timer = setTimeout(function() {
    t._timeoutError("Timeout of ", t._timeout, "ETIME")
  }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
    t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
  }, this._responseTimeout))
}