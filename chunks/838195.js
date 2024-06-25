n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(522474),
  a = n(981631);

function r(e) {
  let {
    applicationId: t,
    channelId: r,
    mediaUrl: o
  } = e, c = l.Z.getWindowOpen(a.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("4530")]).then(n.bind(n, 899201));
    return n => (0, s.jsx)(e, {
      applicationId: t,
      channelId: r,
      mediaUrl: o,
      ...n
    })
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: c
  })
}