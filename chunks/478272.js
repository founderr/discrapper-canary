"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var i = a("37983");
a("884691");
var s = a("77078"),
  r = a("974889"),
  n = a("954016"),
  l = a("49111");

function o(e) {
  let {
    channel: t,
    guildId: o,
    locationObject: d,
    openInPopout: c,
    initialSelectedApplicationId: u,
    initialSlide: h = n.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: f = !1,
    analyticsLocations: p
  } = e;
  c && (0, r.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let _ = c ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  return (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("605455").then(a.bind(a, "605455"));
    return a => (0, i.jsx)(e, {
      ...a,
      channel: t,
      guildId: o,
      locationObject: d,
      initialSlide: h,
      initialSelectedApplicationId: u,
      enableSelectedTextChannelInvite: f,
      analyticsLocations: p
    })
  }, {
    modalKey: n.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: _
  })
}