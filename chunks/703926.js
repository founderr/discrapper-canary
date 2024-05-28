"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return _
  }
});
var i = n("735250"),
  l = n("470079"),
  s = n("481060"),
  a = n("474936"),
  r = n("42603"),
  u = n("426831"),
  o = n("257510"),
  c = n("74838"),
  d = n("720834"),
  m = n("385925"),
  p = n("588921"),
  f = n("718720"),
  S = n("721513");
let I = {
    [a.PremiumGiftStyles.STANDARD_BOX]: m,
    [a.PremiumGiftStyles.CAKE]: p,
    [a.PremiumGiftStyles.CHEST]: f,
    [a.PremiumGiftStyles.COFFEE]: S,
    [a.PremiumGiftStyles.SNOWGLOBE]: "",
    [a.PremiumGiftStyles.BOX]: "",
    [a.PremiumGiftStyles.CUP]: "",
    [a.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [a.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [a.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [a.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  _ = l.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: l,
      setSelectedGiftStyle: a,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, i.jsx)(s.Clickable, {
      innerRef: t,
      onClick: () => a(l),
      onFocus: u,
      onBlur: o,
      children: (0, i.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: I[l],
        className: n ? r.customGiftBoxHighlighted : r.customGiftBox
      })
    })
  })