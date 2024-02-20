"use strict";
E.r(_), E.d(_, {
  default: function() {
    return d
  },
  setRequestPatch: function() {
    return M
  },
  setAwaitOnline: function() {
    return G
  }
}), E("222007"), E("424973");
var t = E("726581"),
  o = E.n(t),
  I = E("981980");
E("704744");
var T = E("811022"),
  r = E("644642"),
  a = E("486196"),
  n = E("614247"),
  i = E("446825").Buffer;
let A = new T.default("HTTPUtils"),
  s = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

function R(e, _, E, t, T) {
  var r, A, N, O, L;
  let l = o[e](_.url);
  if (null != _.onRequestCreated && _.onRequestCreated(l), null != _.query) {
    let e = _.query;
    if ("object" == typeof e) {
      let _ = {
        ...e
      };
      Object.keys(_).map(e => {
        null == _[e] && delete _[e]
      }), e = _
    }
    l.query(e)
  }
  if (_.body && l.send(_.body), null != _.headers && l.set(_.headers), null != _.reason && l.set("X-Audit-Log-Reason", encodeURIComponent(_.reason)), null === (r = _.attachments) || void 0 === r || r.forEach(e => {
      l.attach(e.name, e.file, e.filename)
    }), null === (A = _.fields) || void 0 === A || A.forEach(e => {
      l.field(e.name, e.value)
    }), null != _.context) {
    let e = function(e) {
      try {
        return i.from(JSON.stringify(e)).toString("base64")
      } catch (e) {
        return null
      }
    }(_.context);
    null != e && l.set("X-Context-Properties", e)
  }
  null != _.retried && 0 !== _.retried && l.set("X-Failed-Requests", "".concat(_.retried)), null != _.timeout && 0 !== _.timeout && l.timeout(_.timeout), _.binary && l.responseType("blob"), null != _.onRequestProgress && l.on("progress", e => {
    var E;
    null === (E = _.onRequestProgress) || void 0 === E || E.call(_, e)
  });
  let D = () => {
    _.backoff = null != _.backoff ? _.backoff : new I.default, _.retried = (null != _.retried ? _.retried : 0) + 1, _.backoff.fail(() => P(_.url).then(() => R(e, _, E, t, T)))
  };
  null == U || null === (N = U.prepareRequest) || void 0 === N || N.call(U, l), l.ok(e => null != e.status), l.then(o => {
    var I, r, i;
    if (null != _.retries && _.retries-- > 0 && s.has(o.status)) return D();
    let A = {
      ok: o.ok,
      headers: o.headers,
      body: o.body,
      text: o.text,
      status: o.status
    };
    S(_, A);
    let N = !1,
      O = (o, I) => {
        let r = {
          ..._,
          headers: {
            ..._.headers,
            ...o
          },
          interceptResponse: I
        };
        N = !0, R(e, r, E, t, T)
      },
      L = e => {
        !N && (t(e), null == T || T({
          ok: !1,
          hasErr: !0,
          err: e
        }))
      };
    if ((null == _ ? void 0 : null === (I = _.interceptResponse) || void 0 === I ? void 0 : I.call(_, o, O, L)) !== !0) {
      if ((null == U ? void 0 : null === (r = U.interceptResponse) || void 0 === r ? void 0 : r.call(U, o, O, L)) !== !0) {
        if (o.ok) E(A);
        else {
          if (_.oldFormErrors && (null == A ? void 0 : null === (i = A.body) || void 0 === i ? void 0 : i.code) === a.INVALID_FORM_BODY_ERROR_CODE) {
            let {
              errors: e
            } = A.body;
            null != e && (A.body = (0, n.default)(e))
          }
          t(A)
        }
        null != T && T({
          hasErr: !1,
          ...A
        })
      }
    }
  }, e => {
    null != _.retries && _.retries-- > 0 && "ABORTED" !== e.code ? D() : (S(_), t(e), null != T && T({
      ok: !1,
      hasErr: !0,
      err: e
    }))
  }), (null === (O = _.signal) || void 0 === O ? void 0 : O.aborted) ? l.abort() : null === (L = _.signal) || void 0 === L || L.addEventListener("abort", () => l.abort(), {
    once: !0
  })
}
let N = new Map;

function O(e) {
  let _ = N.get(e);
  if (null == _) {
    A.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
    return
  }
  let E = _.queue.shift();
  if (null == E) {
    A.verbose("rateLimitExpirationHandler: removing key for", e), N.delete(e);
    return
  }
  A.verbose("rateLimitExpirationHandler: moving to next record for ", e), E()
}

function S(e, _) {
  let E = N.get(e.url);
  if (null != _ && 429 === _.status) {
    var t, o;
    let I = (null === (t = _.body) || void 0 === t ? void 0 : t.retry_after) || 5,
      T = Date.now() + 1e3 * I;
    if (null != E) {
      if (E.retryAfterTimestamp < T) A.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(E.timeoutId);
      else {
        A.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
        return
      }
    }
    A.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(I, " seconds"));
    let r = setTimeout(() => O(e.url), 1e3 * I);
    N.set(e.url, {
      queue: null !== (o = null == E ? void 0 : E.queue) && void 0 !== o ? o : [],
      retryAfterTimestamp: T,
      timeoutId: r
    })
  } else null != E && E.retryAfterTimestamp < Date.now() && (A.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), O(e.url))
}

function L(e, _, E) {
  return new Promise((t, o) => {
    "string" == typeof _ && (_ = {
      url: _
    });
    let I = N.get(_.url);
    null != I ? (A.verbose("makeRequest: queueing request for ", _.url), I.queue.push(R.bind(null, e, _, t, o, E))) : R(e, _, t, o, E)
  })
}
let l = L.bind(null, "get"),
  D = L.bind(null, "post"),
  C = L.bind(null, "put"),
  c = L.bind(null, "patch"),
  u = L.bind(null, "del");
if (E.g.isServerRendering) {
  let e = (e, _) => Promise.resolve({
    ok: !0,
    status: 200,
    headers: {},
    body: null,
    text: ""
  });
  l = e, D = e, C = e, c = e, u = e
}
var d = {
  get: l,
  post: D,
  put: C,
  patch: c,
  delete: u,
  V6OrEarlierAPIError: r.default,
  V8APIError: a.default,
  getAPIBaseURL() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
  }
};
let U = null;

function M(e) {
  U = e
}
let P = () => Promise.resolve();

function G(e) {
  P = e
}