"use strict";

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}
e("222007"), e("854508"), e("70102"), e("781738"), e("424973"), e("101997"), "undefined" != typeof window ? i = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), i = void 0) : i = self;
var i, o = e("58732"),
  u = e("92400"),
  a = e("105555"),
  f = e("102321"),
  s = e("646564"),
  c = e("567173");

function l() {}
t.exports = function(t, e) {
  return "function" == typeof e ? new r.Request("GET", t).end(e) : 1 == arguments.length ? new r.Request("GET", t) : new r.Request(t, e)
};
var h = r = t.exports;
r.Request = Request, h.getXHR = function() {
  if (i.XMLHttpRequest && (!i.location || "file:" !== i.location.protocol || !i.ActiveXObject)) return new XMLHttpRequest;
  try {
    return new ActiveXObject("Microsoft.XMLHTTP")
  } catch (t) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
  } catch (t) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
  } catch (t) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP")
  } catch (t) {}
  throw Error("Browser-only version of superagent could not find XHR")
};
var p = "".trim ? function(t) {
  return t.trim()
} : function(t) {
  return t.replace(/(^\s*|\s*$)/g, "")
};

function v(t) {
  if (!f(t)) return t;
  var r = [];
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && function t(r, e, n) {
    if (void 0 !== n) {
      if (null === n) {
        r.push(encodeURIComponent(e));
        return
      }
      if (Array.isArray(n)) n.forEach(function(n) {
        t(r, e, n)
      });
      else if (f(n))
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t(r, "".concat(e, "[").concat(i, "]"), n[i]);
      else r.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
    }
  }(r, e, t[e]);
  return r.join("&")
}

function d(t) {
  for (var r, e, n = {}, i = t.split("&"), o = 0, u = i.length; o < u; ++o) - 1 === (e = (r = i[o]).indexOf("=")) ? n[decodeURIComponent(r)] = "" : n[decodeURIComponent(r.slice(0, e))] = decodeURIComponent(r.slice(e + 1));
  return n
}
h.serializeObject = v, h.parseString = d, h.types = {
  html: "text/html",
  json: "application/json",
  xml: "text/xml",
  urlencoded: "application/x-www-form-urlencoded",
  form: "application/x-www-form-urlencoded",
  "form-data": "application/x-www-form-urlencoded"
}, h.serialize = {
  "application/x-www-form-urlencoded": v,
  "application/json": u
}, h.parse = {
  "application/x-www-form-urlencoded": d,
  "application/json": JSON.parse
};

function g(t) {
  return /[/+]json($|[^-\w])/.test(t)
}

function Response(t) {
  this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
  var r = this.xhr.status;
  1223 === r && (r = 204), this._setStatusProperties(r), this.headers = function(t) {
    for (var r, e, n, i, o = t.split(/\r?\n/), u = {}, a = 0, f = o.length; a < f; ++a) - 1 !== (r = (e = o[a]).indexOf(":")) && (n = e.slice(0, r).toLowerCase(), i = p(e.slice(r + 1)), u[n] = i);
    return u
  }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
}

function Request(t, r) {
  var e = this;
  this._query = this._query || [], this.method = t, this.url = r, this.header = {}, this._header = {}, this.on("end", function() {
    var t, r = null,
      n = null;
    try {
      n = new Response(e)
    } catch (t) {
      return (r = Error("Parser is unable to parse the response")).parse = !0, r.original = t, e.xhr ? (r.rawResponse = void 0 === e.xhr.responseType ? e.xhr.responseText : e.xhr.response, r.status = e.xhr.status ? e.xhr.status : null, r.statusCode = r.status) : (r.rawResponse = null, r.status = null), e.callback(r)
    }
    e.emit("response", n);
    try {
      !e._isResponseOK(n) && (t = Error(n.statusText || "Unsuccessful HTTP response"))
    } catch (r) {
      t = r
    }
    t ? (t.original = r, t.response = n, t.status = n.status, e.callback(t, n)) : e.callback(null, n)
  })
}

function y(t, r, e) {
  var n = h("DELETE", t);
  return "function" == typeof r && (e = r, r = null), r && n.send(r), e && n.end(e), n
}
s(Response.prototype), Response.prototype._parseBody = function(t) {
  var r = h.parse[this.type];
  return this.req._parser ? this.req._parser(this, t) : (!r && g(this.type) && (r = h.parse["application/json"]), r && t && (t.length > 0 || t instanceof Object) ? r(t) : null)
}, Response.prototype.toError = function() {
  var t = this.req,
    r = t.method,
    e = t.url,
    n = Error("cannot ".concat(r, " ").concat(e, " (").concat(this.status, ")"));
  return n.status = this.status, n.method = r, n.url = e, n
}, h.Response = Response, o(Request.prototype), a(Request.prototype), Request.prototype.type = function(t) {
  return this.set("Content-Type", h.types[t] || t), this
}, Request.prototype.accept = function(t) {
  return this.set("Accept", h.types[t] || t), this
}, Request.prototype.auth = function(t, r, e) {
  return 1 == arguments.length && (r = ""), "object" === n(r) && null !== r && (e = r, r = ""), !e && (e = {
    type: "function" == typeof btoa ? "basic" : "auto"
  }), this._auth(t, r, e, function(t) {
    if ("function" == typeof btoa) return btoa(t);
    throw Error("Cannot use basic auth, btoa is not a function")
  })
}, Request.prototype.query = function(t) {
  return "string" != typeof t && (t = v(t)), t && this._query.push(t), this
}, Request.prototype.attach = function(t, r, e) {
  if (r) {
    if (this._data) throw Error("superagent can't mix .send() and .attach()");
    this._getFormData().append(t, r, e || r.name)
  }
  return this
}, Request.prototype._getFormData = function() {
  return !this._formData && (this._formData = new i.FormData), this._formData
}, Request.prototype.callback = function(t, r) {
  if (this._shouldRetry(t, r)) return this._retry();
  var e = this._callback;
  this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), e(t, r)
}, Request.prototype.crossDomainError = function() {
  var t = Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
  t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
}, Request.prototype.agent = function() {
  return console.warn("This is not supported in browser version of superagent"), this
}, Request.prototype.buffer = Request.prototype.ca, Request.prototype.ca = Request.prototype.agent, Request.prototype.write = function() {
  throw Error("Streaming is not supported in browser version of superagent")
}, Request.prototype.pipe = Request.prototype.write, Request.prototype._isHost = function(t) {
  return t && "object" === n(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
}, Request.prototype.end = function(t) {
  this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || l, this._finalizeQueryString(), this._end()
}, Request.prototype._setUploadTimeout = function() {
  var t = this;
  this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function() {
    t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
  }, this._uploadTimeout))
}, Request.prototype._end = function() {
  if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
  var t = this;
  this.xhr = h.getXHR();
  var r = this.xhr,
    e = this._formData || this._data;
  this._setTimeouts(), r.onreadystatechange = function() {
    var e, n = r.readyState;
    if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === n) {
      try {
        e = r.status
      } catch (t) {
        e = 0
      }
      if (!e) {
        if (t.timedout || t._aborted) return;
        return t.crossDomainError()
      }
      t.emit("end")
    }
  };
  var n = function(r, e) {
    e.total > 0 && (e.percent = e.loaded / e.total * 100, 100 === e.percent && clearTimeout(t._uploadTimeoutTimer)), e.direction = r, t.emit("progress", e)
  };
  if (this.hasListeners("progress")) try {
    r.addEventListener("progress", n.bind(null, "download")), r.upload && r.upload.addEventListener("progress", n.bind(null, "upload"))
  } catch (t) {}
  r.upload && this._setUploadTimeout();
  try {
    this.username && this.password ? r.open(this.method, this.url, !0, this.username, this.password) : r.open(this.method, this.url, !0)
  } catch (t) {
    return this.callback(t)
  }
  if (this._withCredentials && (r.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof e && !this._isHost(e)) {
    var i = this._header["content-type"],
      o = this._serializer || h.serialize[i ? i.split(";")[0] : ""];
    !o && g(i) && (o = h.serialize["application/json"]), o && (e = o(e))
  }
  for (var u in this.header) null !== this.header[u] && Object.prototype.hasOwnProperty.call(this.header, u) && r.setRequestHeader(u, this.header[u]);
  this._responseType && (r.responseType = this._responseType), this.emit("request", this), r.send(void 0 === e ? null : e)
}, h.agent = function() {
  return new c
}, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
  c.prototype[t.toLowerCase()] = function(r, e) {
    var n = new h.Request(t, r);
    return this._setDefaults(n), e && n.end(e), n
  }
}), c.prototype.del = c.prototype.delete, h.get = function(t, r, e) {
  var n = h("GET", t);
  return "function" == typeof r && (e = r, r = null), r && n.query(r), e && n.end(e), n
}, h.head = function(t, r, e) {
  var n = h("HEAD", t);
  return "function" == typeof r && (e = r, r = null), r && n.query(r), e && n.end(e), n
}, h.options = function(t, r, e) {
  var n = h("OPTIONS", t);
  return "function" == typeof r && (e = r, r = null), r && n.send(r), e && n.end(e), n
}, h.del = y, h.delete = y, h.patch = function(t, r, e) {
  var n = h("PATCH", t);
  return "function" == typeof r && (e = r, r = null), r && n.send(r), e && n.end(e), n
}, h.post = function(t, r, e) {
  var n = h("POST", t);
  return "function" == typeof r && (e = r, r = null), r && n.send(r), e && n.end(e), n
}, h.put = function(t, r, e) {
  var n = h("PUT", t);
  return "function" == typeof r && (e = r, r = null), r && n.send(r), e && n.end(e), n
}