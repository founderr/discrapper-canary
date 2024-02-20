"use strict";
let i, r;
n.r(t), n.d(t, {
  OVERLAY_VERSION: function() {
    return a
  },
  OVERLAY_DEFAULT_RESOLUTION: function() {
    return o
  },
  OVERLAY_MIN_RESOLUTION: function() {
    return l
  },
  OVERLAY_LAYOUT_ID: function() {
    return u
  },
  DEV_PID: function() {
    return c
  },
  getPID: function() {
    return p
  },
  setPID: function() {
    return h
  },
  getRPCAuthToken: function() {
    return f
  },
  validResolution: function() {
    return E
  },
  setOutOfProcessSupport: function() {
    return _
  },
  supportsOutOfProcess: function() {
    return m
  },
  isOutOfProcess: function() {
    return S
  }
}), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("121338");
var s = n("773336");
n("49111");
let a = 2,
  o = {
    width: 3840,
    height: 2160
  },
  l = {
    width: 768,
    height: 432
  },
  u = "overlay_default",
  c = -2,
  d = !1;

function p() {
  var e;
  if (void 0 !== i) return i;
  let t = new URLSearchParams(window.location.search),
    n = null !== (e = t.get("pid")) && void 0 !== e ? e : "",
    r = parseInt(n, 10);
  return isNaN(r) && (r = -1), i = r
}

function h(e) {
  S() && (i = e)
}

function f() {
  let e = new URLSearchParams(window.location.search);
  return e.get("rpc_auth_token")
}

function E(e) {
  return !s.isPlatformEmbedded || e.width >= l.width && e.height >= l.height
}

function _(e) {
  d = e
}

function m() {
  return d
}

function S() {
  var e;
  if (void 0 !== r) return r;
  let t = new URLSearchParams(window.location.search);
  return r = (null !== (e = t.get("oop")) && void 0 !== e ? e : "") === "true"
}