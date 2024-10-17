s.d(n, {
    P: function () {
        return u;
    }
});
var t = s(735250);
s(470079);
var l = s(481060),
    i = s(609194),
    r = s(669079),
    a = s(987209),
    c = s(689938),
    o = s(473156);
function u(e) {
    let { giftMessage: n = c.Z.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
        { isGift: s, giftRecipient: u } = (0, a.wD)();
    return !s || (0, r.pO)(u)
        ? null
        : (0, t.jsx)(i.Z, {
              className: o.paymentNote,
              iconSize: i.Z.Sizes.SMALL,
              icon: l.GiftIcon,
              color: null == n ? i.Z.Colors.PRIMARY : i.Z.Colors.SECONDARY,
              children: n
          });
}
