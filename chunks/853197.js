n.d(t, {
  A5: function() {
    return E
  },
  BS: function() {
    return g
  },
  EW: function() {
    return p
  },
  FL: function() {
    return S
  },
  R9: function() {
    return T
  },
  Tn: function() {
    return C
  },
  Un: function() {
    return R
  },
  Xt: function() {
    return N
  },
  YK: function() {
    return m
  },
  hM: function() {
    return A
  },
  j7: function() {
    return _
  },
  wj: function() {
    return I
  },
  x8: function() {
    return f
  }
});
var s = n(913527),
  i = n.n(s),
  l = n(594190),
  a = n(695346),
  r = n(77498),
  o = n(70956),
  c = n(346114),
  u = n(702512),
  d = n(689938);

function E(e) {
  let t = g(e);
  return null == t ? null : _(t)
}

function _(e) {
  if (e.dropsQuestId === u.oL) return c.a;
  return null
}

function I(e, t) {
  if (null == e) return !1;
  let n = r.Z.getGameByName(e);
  return !!(null != n && t.some(e => {
    var t;
    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
  })) || !1
}

function T() {
  return Math.floor(Date.now() / 1e3) - u.kS
}

function m(e, t, n) {
  var s, i, l, a;
  if (null == g(e)) return !1;
  let r = (s = t, i = u.RN[e], null !== (l = s.find(e => I(e.name, i))) && void 0 !== l ? l : null);
  if (null != r) {
    ;
    let e = null !== (a = null == r ? void 0 : r.lastLaunched) && void 0 !== a ? a : 0;
    return n <= r.lastFocused || n * o.Z.Millis.SECOND <= e
  }
  return !1
}

function N(e) {
  return m(e, l.ZP.getGamesSeen(!1), T())
}

function h(e, t) {
  let {
    endDate: n
  } = e, s = i()(), l = i()(n, u.fS), a = i()(s.clone().add(e.dropsNoticeBannerDurationDays, "days").format(u.fS)), r = l.isSameOrBefore(a), o = l.isBefore(s, "minute");
  return r && (t && !o || !t && o)
}

function C(e) {
  var t;
  let n = g(e);
  if (null == n || !(null === (t = E(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    }).dropsEnabled)) return !1;
  let s = a.bh.getSetting(),
    i = h(n, !0);
  return !s && i
}

function S(e) {
  var t, n;
  let s = g(e);
  if (null == s || !(null === (n = E(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
      location: "2"
    }, {
      autoTrackExposure: !1
    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
  let i = a.bh.getSetting(),
    l = h(s, !1);
  return A(s) && !i && l
}

function A(e) {
  let {
    endDate: t
  } = e, n = i()(t, "YYYY-MM-DD HH:mm");
  return i()() > n
}

function g(e) {
  return u.Zv[e]
}

function p(e) {
  return Object.values(u.Zv).find(t => t.dropsQuestId === e)
}

function f(e) {
  return Object.keys(u.Zv).find(t => u.Zv[t].dropsQuestId === e)
}

function R(e) {
  switch (e) {
    case "SWITCH":
      return d.Z.Messages.DROPS_PLATFORM_SWITCH;
    case "PC":
      return d.Z.Messages.DROPS_PLATFORM_PC;
    case "PLAYSTATION":
      return d.Z.Messages.DROPS_PLATFORM_PLAYSTATION;
    case "XBOX":
      return d.Z.Messages.DROPS_PLATFORM_XBOX;
    default:
      return ""
  }
}