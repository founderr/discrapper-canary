"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return o
  },
  openAvatarDecorationModal: function() {
    return s
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  a = n("393414");
n("103603");
var u = n("573135"),
  l = n("49111");

function o(e) {
  return "number" != typeof e ? (0, i.getAvatarSize)(e) * u.DECORATION_TO_AVATAR_RATIO : e * u.DECORATION_TO_AVATAR_RATIO
}
let s = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: u,
    isTryItOutFlow: o
  } = e;
  (0, i.openModalLazy)(async () => {
    (0, a.getHistory)().location.pathname === l.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.transitionTo)(l.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, r.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: u,
      isTryItOutFlow: o
    })
  }, {})
}