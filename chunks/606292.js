"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return l
  },
  openAvatarDecorationModal: function() {
    return s
  }
});
var u = n("37983");
n("884691");
var r = n("77078"),
  a = n("393414");
n("103603");
var i = n("573135"),
  o = n("49111");

function l(e) {
  return "number" != typeof e ? (0, r.getAvatarSize)(e) * i.DECORATION_TO_AVATAR_RATIO : e * i.DECORATION_TO_AVATAR_RATIO
}
let s = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: i,
    isTryItOutFlow: l
  } = e;
  (0, r.openModalLazy)(async () => {
    (0, a.getHistory)().location.pathname === o.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.transitionTo)(o.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, u.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: i,
      isTryItOutFlow: l
    })
  }, {})
}