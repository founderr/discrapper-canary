"use strict";
n.r(t), n.d(t, {
  showTakeoverModal: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("892974"),
  s = n("761771");

function r(e) {
  (0, s.isEligibleForInappropriateConversationWarning)({
    location: "takeover-modal"
  }) && (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("33320").then(n.bind(n, "33320"));
    return n => (0, i.jsx)(t, {
      ...e,
      modalProps: n
    })
  }, {
    backdropStyle: l.BackdropStyles.BLUR
  })
}