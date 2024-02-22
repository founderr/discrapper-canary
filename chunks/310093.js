"use strict";
n.r(t), n.d(t, {
  GiftNote: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("812952"),
  a = n("978679"),
  l = n("659632"),
  s = n("635357"),
  u = n("782340"),
  o = n("771776");

function c(e) {
  let {
    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
  } = e, {
    isGift: n,
    giftRecipient: c
  } = (0, s.useGiftContext)();
  return !n || (0, l.shouldShowCustomGiftExperience)(c) ? null : (0, i.jsx)(r.default, {
    className: o.paymentNote,
    iconSize: r.default.Sizes.SMALL,
    icon: a.default,
    color: null == t ? r.default.Colors.PRIMARY : r.default.Colors.SECONDARY,
    children: t
  })
}