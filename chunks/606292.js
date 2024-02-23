"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return s
  },
  openAvatarDecorationModal: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  r = n("393414");
n("103603");
var i = n("573135"),
  u = n("49111");

function s(e) {
  return "number" != typeof e ? (0, l.getAvatarSize)(e) * i.DECORATION_TO_AVATAR_RATIO : e * i.DECORATION_TO_AVATAR_RATIO
}
let o = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: i,
    isTryItOutFlow: s,
    guild: o
  } = e;
  (0, l.openModalLazy)(async () => {
    (0, r.getHistory)().location.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, r.transitionTo)(u.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, a.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: i,
      isTryItOutFlow: s,
      guild: o
    })
  }, {})
}