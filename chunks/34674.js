"use strict";
n.r(t), n.d(t, {
  ALL_CATEGORY_ID: function() {
    return S
  },
  getAllCategory: function() {
    return N
  },
  getCategoryIcon: function() {
    return p
  },
  getCollectionItemAssetUrl: function() {
    return O
  },
  isAllCategory: function() {
    return m
  },
  redirectToLogin: function() {
    return C
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("315314");
var i = n("860911"),
  r = n("477690"),
  s = n("134432"),
  a = n("703656"),
  o = n("619271"),
  l = n("634127"),
  u = n("988951"),
  d = n("275756"),
  _ = n("752916"),
  c = n("199202"),
  E = n("541541"),
  I = n("768581"),
  T = n("981631"),
  f = n("689938");
let S = 0,
  {
    API_ENDPOINT: h,
    CDN_HOST: A
  } = window.GLOBAL_ENV;

function m(e) {
  return e.id === S
}

function N() {
  return {
    id: S,
    name: f.default.Messages.APP_DIRECTORY_ALL_CATEGORY
  }
}

function p(e) {
  switch (e.id) {
    case 0:
      return _.default;
    case 4:
      return c.default;
    case 5:
      return d.default;
    case 6:
      return o.default;
    case 8:
      break;
    case 9:
      return u.default;
    case 10:
      return E.default
  }
  return l.default
}

function O(e) {
  let {
    itemId: t,
    hash: n
  } = e, i = (0, s.getBestMediaProxySize)(parseFloat(r.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, s.getDevicePixelRatio)()).toString(), a = new URLSearchParams({
    size: i
  }).toString(), o = I.SUPPORTS_WEBP ? "webp" : "png";
  return null != A ? "".concat(location.protocol, "//").concat(A, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(o, "?").concat(a) : "".concat(location.protocol).concat(h).concat(T.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o), "?").concat(a)
}

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in e) {
    let i = e[n];
    t.searchParams.set(n, i)
  }
  let n = t.pathname + t.search,
    r = (0, i.getLoginPath)(n, !1);
  (0, a.transitionTo)(r)
}