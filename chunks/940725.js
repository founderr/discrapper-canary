"use strict";
n.r(t), n.d(t, {
  useShouldShowUserClanTagUpsell: function() {
    return o
  }
}), n("47120");
var a = n("442837"),
  l = n("430824"),
  s = n("594174"),
  i = n("963202"),
  r = n("353093");

function o(e) {
  let t = (0, i.useIsInUserClanExperiment)(),
    n = (0, a.useStateFromStores)([s.default, l.default], () => (function(e) {
      let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, l.default];
      if (null == e) return !1;
      let a = n.getGuild(e);
      if (null == a || !(0, r.isGuildAClan)(a) || null == a.clan) return !1;
      let i = t.getCurrentUser();
      if (null == i) return !1;
      if (null == i.clan) return !0;
      let {
        identityGuildId: o,
        identityEnabled: u
      } = i.clan;
      return null != o && null == u ? e === o : null == o && null == u || !1
    })(e, [s.default, l.default]), [e]);
  return t && n
}