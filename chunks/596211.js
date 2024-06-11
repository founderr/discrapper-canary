"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("406877");

function l(e) {
  let {
    guildId: t,
    productId: s,
    attachmentId: l,
    ...u
  } = e, {
    isLoading: i,
    downloadAttachment: o
  } = (0, r.default)(t, s);
  return (0, a.jsx)(n.Button, {
    ...u,
    submitting: i,
    onClick: function() {
      o(l)
    }
  })
}