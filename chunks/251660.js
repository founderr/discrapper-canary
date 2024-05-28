"use strict";
n.r(t), n.d(t, {
  SendGiftToUser: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  s = n("700582"),
  a = n("51144"),
  r = n("689938"),
  u = n("717604");
let o = e => {
  let {
    giftRecipient: t
  } = e;
  return null == t ? null : (0, i.jsxs)("div", {
    className: u.content,
    children: [(0, i.jsx)(l.FormTitle, {
      children: r.default.Messages.FORM_LABEL_SEND_TO
    }), (0, i.jsxs)("div", {
      className: u.giftRecipientInfo,
      children: [(0, i.jsx)(s.default, {
        user: t,
        className: u.__invalid_giftRecipient,
        size: l.AvatarSizes.SIZE_20
      }), (0, i.jsx)(l.Heading, {
        className: u.giftRecipientName,
        variant: "text-md/normal",
        children: a.default.getName(t)
      }), (0, i.jsx)(l.Heading, {
        className: u.giftRecipientTag,
        variant: "text-md/normal",
        children: a.default.getUserTag(t)
      })]
    })]
  })
}