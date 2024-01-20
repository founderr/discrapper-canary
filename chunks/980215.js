"use strict";
n.r(t), n.d(t, {
  useClydeProfilesEnabled: function() {
    return d
  },
  useClydeEnabled: function() {
    return c
  },
  getClydeEnabled: function() {
    return _
  },
  getClydeExperimentEnabled: function() {
    return h
  },
  canUseCustomClydeProfiles: function() {
    return g
  }
}), n("884691"), n("446674");
var i = n("305961"),
  s = n("957255"),
  r = n("772051"),
  a = n("254927"),
  o = n("49111"),
  l = n("724210");

function u(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
    s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    a = r.default.useExperiment({
      guildId: s,
      location: i
    }, {
      autoTrackExposure: n
    }).experimentState;
  return a
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    i = u(e, t, n);
  return i === r.ClydeExperimentState.ClydeProfiles
}

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = u(e, n);
  return f(i, e, t)
}

function f(e, t, n) {
  if (null == t) {
    if (null != n && n.isPrivate()) {
      if (n.hasFlag(l.ChannelFlags.CLYDE_AI)) return !0;
      let e = (0, a.isClydeEnabledinGdms)();
      if (!e) return !1;
      let t = i.default.getGuildIds().some(e => h(i.default.getGuild(e)));
      return t
    }
    return !1
  }
  return null != e && e !== r.ClydeExperimentState.None && s.default.can(o.Permissions.USE_CLYDE_AI, n)
}

function _(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
    a = r.default.getCurrentConfig({
      guildId: s,
      location: "1e9ccc_2"
    }, {
      autoTrackExposure: i
    }).experimentState;
  return f(a, e, t)
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = m(e, t);
  return n !== r.ClydeExperimentState.None
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return m(e, t) === r.ClydeExperimentState.ClydeProfiles
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  let n = e.id;
  return r.default.getCurrentConfig({
    guildId: n,
    location: "1e9ccc_4"
  }, {
    autoTrackExposure: t
  }).experimentState
}