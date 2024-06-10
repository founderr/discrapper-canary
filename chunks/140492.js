"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120"), n("733860");
var i = n("718528"),
  o = n("931261"),
  l = n("355298"),
  a = n("333984"),
  u = n("905423"),
  s = n("695346"),
  d = n("283595"),
  r = n("923834"),
  E = n("55589"),
  c = n("823379"),
  _ = n("475468"),
  A = n("981631"),
  C = n("176505");
let T = () => {
  let e = l.default.getMessageRequestsCount() > 0 || a.default.getSpamChannelsCount() > 0;
  return [A.Routes.FRIENDS, d.default.hasLibraryApplication() && !s.DisableGamesTab.getSetting() ? A.Routes.APPLICATION_LIBRARY : null, A.Routes.APPLICATION_STORE, e ? A.Routes.MESSAGE_REQUESTS : null, A.Routes.COLLECTIBLES_SHOP, s.FamilyCenterEnabled.getSetting() ? A.Routes.FAMILY_CENTER : null].filter(c.isNotNullish)
};

function S(e, t) {
  (0, _.transitionToChannel)(e, t)
}

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = u.default.getState().guildId;
  null == t ? ! function(e) {
    var t;
    let {
      channelId: n,
      path: i,
      basePath: o
    } = u.default.getState(), l = E.default.getPrivateChannelIds(), a = __OVERLAY__ ? l : [...T(), ...l];
    let s = (null == n ? (t = null != i ? i : o, T().findIndex(e => t.startsWith(e))) : null != n ? a.indexOf(n) : 0) + e;
    s >= a.length ? s = 0 : s < 0 && (s = a.length - 1);
    let d = a[s];
    T().includes(d) ? ! function(e) {
      let t = r.default.getCurrentRoute();
      e === A.Routes.APPLICATION_STORE && null != t ? (0, _.transitionToPage)(t) : (0, _.transitionToPage)(e)
    }(d) : S(A.ME, d)
  }(e) : ! function(e, t) {
    var n, l;
    let a = u.default.getState().channelId,
      s = (0, i.default)(t).map(e => e.id);
    (0, o.canSeeOnboardingHome)(t) && s.unshift(C.StaticChannelRoute.GUILD_HOME);
    let d = (n = (null != a ? s.indexOf(a) : -1) + e, l = s.length, n < 0 ? l - 1 : n >= l ? 0 : n);
    S(t, s[d])
  }(e, t)
}