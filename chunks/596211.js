"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  r = n("406877");

function i(e) {
  let {
    guildId: t,
    productId: n,
    attachmentId: i,
    ...l
  } = e, {
    isLoading: u,
    downloadAttachment: o
  } = (0, r.default)(t, n);
  return (0, s.jsx)(a.Button, {
    ...l,
    submitting: u,
    onClick: function() {
      o(i)
    }
  })
}