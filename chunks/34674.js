"use strict";
n.d(t, {
  $_: function() {
    return S
  },
  KQ: function() {
    return T
  },
  MU: function() {
    return c
  },
  m0: function() {
    return I
  },
  rf: function() {
    return f
  },
  tu: function() {
    return h
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(315314);
var i = n(860911),
  r = n(477690),
  s = n(481060),
  o = n(134432),
  a = n(703656),
  l = n(768581),
  u = n(981631),
  _ = n(689938);
let c = 0,
  {
    API_ENDPOINT: d,
    CDN_HOST: E
  } = window.GLOBAL_ENV;

function I(e) {
  return e.id === c
}

function T() {
  return {
    id: c,
    name: _.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
  }
}

function h(e) {
  switch (e.id) {
    case 0:
      return s.GlobeEarthIcon;
    case 4:
      return s.TvIcon;
    case 5:
      return s.AnalyticsIcon;
    case 6:
      return s.GameControllerIcon;
    case 8:
      break;
    case 9:
      return s.FriendsIcon;
    case 10:
      return s.WrenchIcon
  }
  return s.AsteriskIcon
}

function S(e) {
  let {
    itemId: t,
    hash: n
  } = e, i = new URLSearchParams({
    size: (0, o.oO)(parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, o.x_)()).toString()
  }).toString(), s = l.$k ? "webp" : "png";
  return null != E ? "".concat(location.protocol, "//").concat(E, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(s, "?").concat(i) : "".concat(location.protocol).concat(d).concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s), "?").concat(i)
}

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in e) {
    let i = e[n];
    t.searchParams.set(n, i)
  }
  let n = t.pathname + t.search,
    r = (0, i.U)(n, !1);
  (0, a.uL)(r)
}