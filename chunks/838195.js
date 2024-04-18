"use strict";
a.r(t), a.d(t, {
  openActivityShareMomentModal: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("522474"),
  i = a("981631");

function r(e) {
  let {
    applicationId: t,
    channelId: r,
    mediaUrl: o
  } = e, u = l.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("99387"), a.e("4530")]).then(a.bind(a, "899201"));
    return a => (0, n.jsx)(e, {
      applicationId: t,
      channelId: r,
      mediaUrl: o,
      ...a
    })
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: u
  })
}