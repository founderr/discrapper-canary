"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  l = s("120356"),
  n = s.n(l),
  r = s("802433"),
  o = s("680295"),
  d = s("461229"),
  u = s("241822");
t.default = e => {
  let {
    profileEffectId: t,
    isHovering: s,
    forCollectedModal: l = !1,
    isPurchased: c,
    removeSetHeight: f = !1
  } = e, p = l ? 250 : .1, [h, m] = i.useState(!0);
  return (i.useEffect(() => {
    if (!0 !== l) m(!1);
    else {
      let e = setTimeout(() => {
        m(!1)
      }, p);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, l]), null != t) ? (0, a.jsxs)("div", {
    className: n()(d.previewContainer, {
      [d.previewContainerAnimation]: l,
      [d.previewContainerSetHeight]: !f
    }),
    children: [(0, a.jsx)("img", {
      src: u,
      alt: " ",
      className: l ? d.previewForCollected : d.preview,
      "aria-hidden": !0
    }), !h && (0, a.jsx)("div", {
      className: c ? d.purchasedEffect : void 0,
      children: (0, a.jsx)(o.default, {
        profileEffectId: t,
        useThumbnail: !0,
        autoPlay: l,
        restartMethod: r.RestartMethod.FromStart,
        resetOnHover: !0,
        isHovering: s,
        introDelay: p,
        useOpacityOnHover: !1,
        shopPreview: !0
      })
    })]
  }) : null
}