s(47120);
var i = s(735250),
  n = s(470079),
  l = s(120356),
  a = s.n(l),
  r = s(447452),
  o = s(802433),
  d = s(680295),
  u = s(895173),
  c = s(241822),
  p = s(500215);
t.Z = e => {
  let {
    profileEffectId: t,
    isHovering: s,
    forCollectedModal: l = !1,
    isPurchased: h,
    removeSetHeight: f = !1
  } = e, {
    updatedOnAllSurfaces: m
  } = (0, r.t)({
    location: "ProfileEffectShopPreview"
  }), g = l ? 250 : .1, [I, Z] = n.useState(!0);
  return (n.useEffect(() => {
    if (!0 !== l) Z(!1);
    else {
      let e = setTimeout(() => {
        Z(!1)
      }, g);
      return () => {
        clearTimeout(e)
      }
    }
  }, [g, l]), null != t) ? (0, i.jsxs)("div", {
    className: a()(u.previewContainer, {
      [u.previewContainerAnimation]: l,
      [u.previewContainerSetHeight]: !f
    }),
    children: [(0, i.jsx)("img", {
      src: m ? p : c,
      alt: " ",
      className: l ? u.previewForCollected : u.preview,
      "aria-hidden": !0
    }), !I && (0, i.jsx)("div", {
      className: h ? u.purchasedEffect : void 0,
      children: (0, i.jsx)(d.Z, {
        profileEffectId: t,
        useThumbnail: !0,
        autoPlay: l,
        restartMethod: o.j.FromStart,
        resetOnHover: !0,
        isHovering: s,
        introDelay: g,
        useOpacityOnHover: !1,
        shopPreview: !0
      })
    })]
  }) : null
}