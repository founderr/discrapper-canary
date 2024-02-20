"use strict";
let r, s;
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("70102");
var o = n("697218"),
  a = n("615931");
let l = () => {
  throw Error("updateModal has not been implemented.")
};
{
  let e = n("670924");
  r = e.showModal, l = e.updateModalProps, s = n("551042").closeModal
}

function u(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: o,
    modalProps: a = {},
    hooks: {
      onEarlyClose: u
    } = {}
  } = e;
  if (null == r) {
    null == u || u();
    return
  }
  let d = r(f, c, a);

  function c() {
    null == u || u()
  }

  function _(e) {
    s(d), n(e)
  }

  function E(e) {
    s(d), o(e)
  }

  function f(e) {
    return l(d, f, c, {
      ...a,
      isLoading: !0
    }), i({
      promiseFn: t,
      resolve: _,
      reject: E,
      code: e,
      mfaCodeHandler: A,
      isModalOpen: !0
    })
  }

  function A(e) {
    let {
      res: t
    } = e;
    l(d, f, c, {
      ...a,
      error: t.body.message
    })
  }
}

function i(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: r,
    code: s,
    mfaCodeHandler: o = u,
    isModalOpen: a = !1,
    ...l
  } = e;
  return t(null != s ? {
    code: s
  } : {}).then(n, e => {
    var s, u;
    if (s = e, u = a, s.body && 60008 === s.body.code || u && 429 === s.status) return o({
      promiseFn: t,
      resolve: n,
      reject: r,
      res: e,
      ...l
    });
    r(e)
  })
}

function d(e, t) {
  var n, r;
  let {
    checkEnabled: s = null !== (r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
    ...l
  } = null != t ? t : {};
  return new Promise((t, n) => {
    ((0, a.resolveThunk)(s) ? u : i)({
      promiseFn: e,
      resolve: t,
      reject: n,
      ...l
    })
  })
}