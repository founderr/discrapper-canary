"use strict";
s.r(t), s("47120");
var i = s("735250"),
  a = s("470079"),
  l = s("120356"),
  n = s.n(l),
  r = s("447452"),
  o = s("802433"),
  d = s("680295"),
  u = s("942023"),
  c = s("241822"),
  f = s("500215");
t.default = e => {
  let {
    profileEffectId: t,
    isHovering: s,
    forCollectedModal: l = !1,
    isPurchased: p,
    removeSetHeight: h = !1
  } = e, {
    updatedOnAllSurfaces: m
  } = (0, r.useSimplifiedProfileExperiment)({
    location: "ProfileEffectShopPreview"
  }), g = l ? 250 : .1, [S, C] = a.useState(!0);
  return (a.useEffect(() => {
    if (!0 !== l) C(!1);
    else {
      let e = setTimeout(() => {
        C(!1)
      }, g);
      return () => {
        clearTimeout(e)
      }
    }
  }, [g, l]), null != t) ? (0, i.jsxs)("div", {
    className: n()(u.previewContainer, {
      [u.previewContainerAnimation]: l,
      [u.previewContainerSetHeight]: !h
    }),
    children: [(0, i.jsx)("img", {
      src: m ? f : c,
      alt: " ",
      className: l ? u.previewForCollected : u.preview,
      "aria-hidden": !0
    }), !S && (0, i.jsx)("div", {
      className: p ? u.purchasedEffect : void 0,
      children: (0, i.jsx)(d.default, {
        profileEffectId: t,
        useThumbnail: !0,
        autoPlay: l,
        restartMethod: o.RestartMethod.FromStart,
        resetOnHover: !0,
        isHovering: s,
        introDelay: g,
        useOpacityOnHover: !1,
        shopPreview: !0
      })
    })]
  }) : null
}