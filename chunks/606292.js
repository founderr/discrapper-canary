"use strict";
n.r(e), n.d(e, {
  getDecorationSizeForAvatarSize: function() {
    return s
  },
  openAvatarDecorationModal: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  u = n("393414");
n("103603");
var o = n("573135"),
  a = n("49111");

function s(t) {
  return "number" != typeof t ? (0, i.getAvatarSize)(t) * o.DECORATION_TO_AVATAR_RATIO : t * o.DECORATION_TO_AVATAR_RATIO
}
let l = t => {
  let {
    analyticsLocations: e,
    initialSelectedDecoration: o,
    isTryItOutFlow: s
  } = t;
  (0, i.openModalLazy)(async () => {
    (0, u.getHistory)().location.pathname === a.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, u.transitionTo)(a.Routes.APP);
    let {
      default: t
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, r.jsx)(t, {
      ...n,
      analyticsLocations: e,
      initialSelectedDecoration: o,
      isTryItOutFlow: s
    })
  }, {})
}