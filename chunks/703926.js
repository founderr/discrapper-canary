"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return I
  }
});
var i = n("735250"),
  s = n("470079"),
  a = n("481060"),
  r = n("474936"),
  l = n("164389"),
  u = n("426831"),
  o = n("257510"),
  c = n("74838"),
  d = n("720834"),
  m = n("385925"),
  f = n("588921"),
  p = n("718720"),
  S = n("721513");
let _ = {
    [r.PremiumGiftStyles.STANDARD_BOX]: m,
    [r.PremiumGiftStyles.CAKE]: f,
    [r.PremiumGiftStyles.CHEST]: p,
    [r.PremiumGiftStyles.COFFEE]: S,
    [r.PremiumGiftStyles.SNOWGLOBE]: "",
    [r.PremiumGiftStyles.BOX]: "",
    [r.PremiumGiftStyles.CUP]: "",
    [r.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [r.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [r.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [r.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  I = s.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: s,
      setSelectedGiftStyle: r,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, i.jsx)(a.Clickable, {
      innerRef: t,
      onClick: () => r(s),
      onFocus: u,
      onBlur: o,
      children: (0, i.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: _[s],
        className: n ? l.customGiftBoxHighlighted : l.customGiftBox
      })
    })
  })