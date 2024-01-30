"use strict";
n.r(t), n.d(t, {
  useClydeProfilesEnabled: function() {
    return c
  },
  useClydeEnabled: function() {
    return d
  },
  getClydeEnabled: function() {
    return p
  },
  getClydeExperimentEnabled: function() {
    return h
  },
  canUseCustomClydeProfiles: function() {
    return m
  }
}), n("884691"), n("446674");
var l = n("305961"),
  r = n("957255"),
  a = n("772051"),
  i = n("254927"),
  u = n("49111"),
  o = n("724210");

function s(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    i = a.default.useExperiment({
      guildId: r,
      location: l
    }, {
      autoTrackExposure: n
    }).experimentState;
  return i
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = s(e, t, n);
  return l === a.ClydeExperimentState.ClydeProfiles
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = s(e, n);
  return f(l, e, t)
}

function f(e, t, n) {
  if (null == t) {
    if (null != n && n.isPrivate()) {
      if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
      let e = (0, i.isClydeEnabledinGdms)();
      if (!e) return !1;
      let t = l.default.getGuildIds().some(e => h(l.default.getGuild(e)));
      return t
    }
    return !1
  }
  return null != e && e !== a.ClydeExperimentState.None && r.default.can(u.Permissions.USE_CLYDE_AI, n)
}

function p(e, t) {
  var n;
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
    i = a.default.getCurrentConfig({
      guildId: r,
      location: "1e9ccc_2"
    }, {
      autoTrackExposure: l
    }).experimentState;
  return f(i, e, t)
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = g(e, t);
  return n !== a.ClydeExperimentState.None
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return g(e, t) === a.ClydeExperimentState.ClydeProfiles
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  let n = e.id;
  return a.default.getCurrentConfig({
    guildId: n,
    location: "1e9ccc_4"
  }, {
    autoTrackExposure: t
  }).experimentState
}