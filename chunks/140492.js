"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120"), n("733860");
var i = n("718528"),
  o = n("859802"),
  l = n("931261"),
  a = n("355298"),
  u = n("333984"),
  s = n("905423"),
  d = n("695346"),
  r = n("283595"),
  E = n("923834"),
  c = n("55589"),
  _ = n("823379"),
  A = n("475468"),
  C = n("981631"),
  T = n("176505");
let S = () => {
  let e = a.default.getMessageRequestsCount() > 0 || u.default.getSpamChannelsCount() > 0;
  return [C.Routes.FRIENDS, r.default.hasLibraryApplication() && !d.DisableGamesTab.getSetting() ? C.Routes.APPLICATION_LIBRARY : null, C.Routes.APPLICATION_STORE, e ? C.Routes.MESSAGE_REQUESTS : null, C.Routes.COLLECTIBLES_SHOP, d.FamilyCenterEnabled.getSetting() ? C.Routes.FAMILY_CENTER : null].filter(_.isNotNullish)
};

function I(e, t) {
  (0, A.transitionToChannel)(e, t)
}

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = s.default.getState().guildId;
  null == t ? ! function(e) {
    var t;
    let {
      channelId: n,
      path: i,
      basePath: o
    } = s.default.getState(), l = c.default.getPrivateChannelIds(), a = __OVERLAY__ ? l : [...S(), ...l];
    let u = (null == n ? (t = null != i ? i : o, S().findIndex(e => t.startsWith(e))) : null != n ? a.indexOf(n) : 0) + e;
    u >= a.length ? u = 0 : u < 0 && (u = a.length - 1);
    let d = a[u];
    S().includes(d) ? ! function(e) {
      let t = E.default.getCurrentRoute();
      e === C.Routes.APPLICATION_STORE && null != t ? (0, A.transitionToPage)(t) : (0, A.transitionToPage)(e)
    }(d) : I(C.ME, d)
  }(e) : ! function(e, t) {
    var n, a;
    let u = s.default.getState().channelId,
      d = (0, i.default)(t).map(e => e.id);
    ((0, o.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)) && d.unshift(T.StaticChannelRoute.GUILD_HOME);
    let r = (n = (null != u ? d.indexOf(u) : -1) + e, a = d.length, n < 0 ? a - 1 : n >= a ? 0 : n);
    I(t, d[r])
  }(e, t)
}