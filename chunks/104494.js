"use strict";
n.d(t, {
  Ng: function() {
    return E
  },
  Wp: function() {
    return c
  },
  kA: function() {
    return _
  },
  z1: function() {
    return I
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(846519),
  o = n(594174),
  a = n(295226),
  l = n(74538),
  u = n(474936);

function _(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function c(e, t) {
  var n;
  return null != e && new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.GP[e].skuId)).has(t)
}

function d(e, t) {
  let n = (0, r.e7)([a.Z], () => a.Z.getUserDiscountOffer(e)),
    [u, c] = i.useState(_(n)),
    d = (0, r.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser()));
  return i.useEffect(() => {
    if (null == n || null == n.expires_at) return;
    let e = new s.V7,
      t = () => {
        let i = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
        null == e || e.start(i, () => {
          !u && _(n) ? c(!0) : t()
        })
      };
    return t(), () => e.stop()
  }, [u, n]), u || d && !t ? null : n
}

function E() {
  var e, t;
  let n = d(u.hs),
    i = d(u.RU),
    r = d(u.rB),
    s = d(u.ih);
  return null !== (t = null !== (e = null != n ? n : i) && void 0 !== e ? e : r) && void 0 !== t ? t : s
}

function I() {
  let e = d(u.Nl, !0),
    t = d(u.gW, !0);
  return null != e ? e : t
}