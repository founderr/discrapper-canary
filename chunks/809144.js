"use strict";
n.r(t), n.d(t, {
  GiftNote: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var l = n("609194"),
  s = n("559629"),
  a = n("669079"),
  r = n("987209"),
  u = n("689938"),
  o = n("565631");

function c(e) {
  let {
    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
  } = e, {
    isGift: n,
    giftRecipient: c
  } = (0, r.useGiftContext)();
  return !n || (0, a.shouldShowCustomGiftExperience)(c) ? null : (0, i.jsx)(l.default, {
    className: o.paymentNote,
    iconSize: l.default.Sizes.SMALL,
    icon: s.default,
    color: null == t ? l.default.Colors.PRIMARY : l.default.Colors.SECONDARY,
    children: t
  })
}