"use strict";
let r;
"undefined" != typeof window ? r = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), r = void 0) : r = self;
let i = n("606419"),
  a = n("164390"),
  o = n("339768"),
  s = n("624188"),
  {
    isObject: u,
    mixin: c,
    hasOwn: l
  } = n("172680"),
  d = n("382447"),
  f = n("660039");

function p() {}
e.exports = function(e, n) {
  return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
};
let h = t = e.exports;
t.Request = y, h.getXHR = () => {
  if (r.XMLHttpRequest) return new r.XMLHttpRequest;
  throw Error("Browser-only version of superagent could not find XHR")
};
let m = "".trim ? e => e.trim() : e => e.replace(/(^\s*|\s*$)/g, "");

function g(e) {
  if (!u(e)) return e;
  let t = [];
  for (let n in e) l(e, n) && function e(t, n, r) {
    if (void 0 !== r) {
      if (null === r) {
        t.push(encodeURI(n));
        return
      }
      if (Array.isArray(r))
        for (let i of r) e(t, n, i);
      else if (u(r))
        for (let i in r) l(r, i) && e(t, `${n}[${i}]`, r[i]);
      else t.push(encodeURI(n) + "=" + encodeURIComponent(r))
    }
  }(t, n, e[n]);
  return t.join("&")
}

function _(e) {
  let t, n;
  let r = {},
    i = e.split("&");
  for (let e = 0, a = i.length; e < a; ++e) - 1 === (n = (t = i[e]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
  return r
}
h.serializeObject = g, h.parseString = _, h.types = {
  html: "text/html",
  json: "application/json",
  xml: "text/xml",
  urlencoded: "application/x-www-form-urlencoded",
  form: "application/x-www-form-urlencoded",
  "form-data": "application/x-www-form-urlencoded"
}, h.serialize = {
  "application/x-www-form-urlencoded": o.stringify,
  "application/json": a
}, h.parse = {
  "application/x-www-form-urlencoded": _,
  "application/json": JSON.parse
};

function b(e) {
  return /[/+]json($|[^-\w])/i.test(e)
}

function v(e) {
  this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
  let {
    status: t
  } = this.xhr;
  1223 === t && (t = 204), this._setStatusProperties(t), this.headers = function(e) {
    let t, n, r, i;
    let a = e.split(/\r?\n/),
      o = {};
    for (let e = 0, s = a.length; e < s; ++e) - 1 !== (t = (n = a[e]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = m(n.slice(t + 1)), o[r] = i);
    return o
  }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
}

function y(e, t) {
  let n = this;
  this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", () => {
    let e, t = null,
      r = null;
    try {
      r = new v(n)
    } catch (e) {
      return (t = Error("Parser is unable to parse the response")).parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
    }
    n.emit("response", r);
    try {
      !n._isResponseOK(r) && (e = Error(r.statusText || r.text || "Unsuccessful HTTP response"))
    } catch (t) {
      e = t
    }
    e ? (e.original = t, e.response = r, e.status = e.status || r.status, n.callback(e, r)) : n.callback(null, r)
  })
}
for (let e of (c(v.prototype, d.prototype), v.prototype._parseBody = function(e) {
    let t = h.parse[this.type];
    return this.req._parser ? this.req._parser(this, e) : (!t && b(this.type) && (t = h.parse["application/json"]), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null)
  }, v.prototype.toError = function() {
    let {
      req: e
    } = this, {
      method: t
    } = e, {
      url: n
    } = e, r = Error(`cannot ${t} ${n} (${this.status})`);
    return r.status = this.status, r.method = t, r.url = n, r
  }, h.Response = v, i(y.prototype), c(y.prototype, s.prototype), y.prototype.type = function(e) {
    return this.set("Content-Type", h.types[e] || e), this
  }, y.prototype.accept = function(e) {
    return this.set("Accept", h.types[e] || e), this
  }, y.prototype.auth = function(e, t, n) {
    1 == arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), !n && (n = {
      type: "function" == typeof btoa ? "basic" : "auto"
    });
    let r = n.encoder ? n.encoder : e => {
      if ("function" == typeof btoa) return btoa(e);
      throw Error("Cannot use basic auth, btoa is not a function")
    };
    return this._auth(e, t, n, r)
  }, y.prototype.query = function(e) {
    return "string" != typeof e && (e = g(e)), e && this._query.push(e), this
  }, y.prototype.attach = function(e, t, n) {
    if (t) {
      if (this._data) throw Error("superagent can't mix .send() and .attach()");
      this._getFormData().append(e, t, n || t.name)
    }
    return this
  }, y.prototype._getFormData = function() {
    return !this._formData && (this._formData = new r.FormData), this._formData
  }, y.prototype.callback = function(e, t) {
    if (this._shouldRetry(e, t)) return this._retry();
    let n = this._callback;
    this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
  }, y.prototype.crossDomainError = function() {
    let e = Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
  }, y.prototype.agent = function() {
    return console.warn("This is not supported in browser version of superagent"), this
  }, y.prototype.ca = y.prototype.agent, y.prototype.buffer = y.prototype.ca, y.prototype.write = () => {
    throw Error("Streaming is not supported in browser version of superagent")
  }, y.prototype.pipe = y.prototype.write, y.prototype._isHost = function(e) {
    return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
  }, y.prototype.end = function(e) {
    this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || p, this._finalizeQueryString(), this._end()
  }, y.prototype._setUploadTimeout = function() {
    let e = this;
    this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(() => {
      e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT")
    }, this._uploadTimeout))
  }, y.prototype._end = function() {
    if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
    let e = this;
    this.xhr = h.getXHR();
    let {
      xhr: t
    } = this, n = this._formData || this._data;
    this._setTimeouts(), t.addEventListener("readystatechange", () => {
      let n;
      let {
        readyState: r
      } = t;
      if (r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === r) {
        try {
          n = t.status
        } catch (e) {
          n = 0
        }
        if (!n) {
          if (e.timedout || e._aborted) return;
          return e.crossDomainError()
        }
        e.emit("end")
      }
    });
    let r = (t, n) => {
      n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), n.direction = t, e.emit("progress", n)
    };
    if (this.hasListeners("progress")) try {
      t.addEventListener("progress", r.bind(null, "download")), t.upload && t.upload.addEventListener("progress", r.bind(null, "upload"))
    } catch (e) {}
    t.upload && this._setUploadTimeout();
    try {
      this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
    } catch (e) {
      return this.callback(e)
    }
    if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
      let e = this._header["content-type"],
        t = this._serializer || h.serialize[e ? e.split(";")[0] : ""];
      !t && b(e) && (t = h.serialize["application/json"]), t && (n = t(n))
    }
    for (let e in this.header) null !== this.header[e] && l(this.header, e) && t.setRequestHeader(e, this.header[e]);
    this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 === n ? null : n)
  }, h.agent = () => new f, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"])) f.prototype[e.toLowerCase()] = function(t, n) {
  let r = new h.Request(e, t);
  return this._setDefaults(r), n && r.end(n), r
};

function E(e, t, n) {
  let r = h("DELETE", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}
f.prototype.del = f.prototype.delete, h.get = (e, t, n) => {
  let r = h("GET", e);
  return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
}, h.head = (e, t, n) => {
  let r = h("HEAD", e);
  return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
}, h.options = (e, t, n) => {
  let r = h("OPTIONS", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, h.del = E, h.delete = E, h.patch = (e, t, n) => {
  let r = h("PATCH", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, h.post = (e, t, n) => {
  let r = h("POST", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, h.put = (e, t, n) => {
  let r = h("PUT", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}