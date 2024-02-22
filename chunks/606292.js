"use strict";
r.r(t), r.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return u
  },
  openAvatarDecorationModal: function() {
    return s
  }
});
var a = r("37983");
r("884691");
var n = r("77078"),
  i = r("393414");
r("103603");
var l = r("573135"),
  o = r("49111");

function u(e) {
  return "number" != typeof e ? (0, n.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
}
let s = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: l,
    isTryItOutFlow: u,
    guild: s
  } = e;
  (0, n.openModalLazy)(async () => {
    (0, i.getHistory)().location.pathname === o.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, i.transitionTo)(o.Routes.APP);
    let {
      default: e
    } = await r.el("791050").then(r.bind(r, "791050"));
    return r => (0, a.jsx)(e, {
      ...r,
      analyticsLocations: t,
      initialSelectedDecoration: l,
      isTryItOutFlow: u,
      guild: s
    })
  }, {})
}