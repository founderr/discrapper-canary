"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("406877");

function i(e) {
  let {
    guildId: t,
    productId: n,
    attachmentId: i,
    ...r
  } = e, {
    isLoading: o,
    downloadAttachment: u
  } = (0, l.default)(t, n);
  return (0, s.jsx)(a.Button, {
    ...r,
    submitting: o,
    onClick: function() {
      u(i)
    }
  })
}