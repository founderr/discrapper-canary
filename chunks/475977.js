var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(100527),
  c = t(906732),
  E = t(626135),
  d = t(335131),
  _ = t(410154),
  T = t(302800),
  S = t(981631),
  u = t(474936),
  I = t(689938),
  N = t(21011),
  A = t(353437),
  C = t(786792);
let O = e => {
  var s, t, i, a, o;
  let {
    displayOptions: c,
    marketingVariant: E
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: N.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, n.jsx)("img", {
        src: null !== (i = null == c ? void 0 : c.artSrc) && void 0 !== i ? i : A,
        className: l()(N.art, {
          [N.tideArt]: null != E && E === _.C5.TIDE
        }),
        alt: ""
      })
    }), (0, n.jsxs)("div", {
      className: N.mainColumn,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: N.title,
        children: null !== (a = null == c ? void 0 : null === (s = c.title) || void 0 === s ? void 0 : s.call(c)) && void 0 !== a ? a : I.Z.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: null !== (o = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.call(c)) && void 0 !== o ? o : I.Z.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  })
};
s.Z = () => {
  var e;
  let {
    analyticsLocations: s
  } = (0, c.ZP)(o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = i.useRef(null), a = (0, _.ZP)("CollectiblesUpsellBanner"), A = T.GX[a];
  return i.useEffect(() => {
    E.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: u.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: s
    })
  }, [s]), (0, n.jsxs)("div", {
    ref: t,
    className: l()(N.container),
    style: {
      backgroundImage: "url(".concat(null !== (e = null == A ? void 0 : A.backgroundSrc) && void 0 !== e ? e : C, ")")
    },
    children: [(0, n.jsx)(O, {
      displayOptions: A,
      marketingVariant: a
    }), (0, n.jsx)(r.Button, {
      onClick: () => {
        (0, d.mK)({
          analyticsLocations: s,
          analyticsSource: o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      },
      className: N.ctaButton,
      color: r.Button.Colors.BRAND_INVERTED,
      children: I.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
    })]
  })
}