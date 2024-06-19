t(627341);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(278074),
  o = t(481060),
  c = t(100527),
  E = t(906732),
  d = t(626135),
  _ = t(335131),
  T = t(410154),
  S = t(981631),
  u = t(474936),
  I = t(689938),
  N = t(21011),
  A = t(786792);
let C = e => {
    let {
      artSrc: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: N.artContainer,
        "aria-hidden": !0,
        role: "presentation",
        children: (0, n.jsx)("img", {
          src: s,
          className: N.art,
          alt: " "
        })
      }), (0, n.jsxs)("div", {
        className: N.mainColumn,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          color: "always-white",
          className: N.title,
          children: I.Z.Messages.COLLECTIBLES_BANNER_TITLE_2024
        }), (0, n.jsx)(o.Text, {
          className: N.__invalid_textBody,
          variant: "text-sm/normal",
          color: "always-white",
          children: I.Z.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
        })]
      })]
    })
  },
  O = e => {
    let {
      variation: s
    } = e;
    return (0, r.EQ)(s).with(T.C5.GALAXY, () => (0, n.jsx)(C, {
      artSrc: t(161594)
    })).otherwise(() => (0, n.jsx)(C, {
      artSrc: t(353437)
    }))
  };
s.Z = () => {
  let {
    analyticsLocations: e
  } = (0, E.ZP)(c.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), s = i.useRef(null), t = (0, T.ZP)("CollectiblesUpsellBanner");
  return i.useEffect(() => {
    d.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: u.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: e
    })
  }, [e]), (0, n.jsxs)("div", {
    ref: s,
    className: l()(N.container),
    style: {
      backgroundImage: "url(".concat(A, ")")
    },
    children: [(0, n.jsx)(O, {
      variation: t
    }), (0, n.jsx)(o.Button, {
      onClick: () => {
        (0, _.mK)({
          analyticsLocations: e,
          analyticsSource: c.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      },
      className: N.ctaButton,
      color: o.Button.Colors.BRAND_INVERTED,
      children: (0, r.EQ)(t).with(T.C5.WINTER_2023_DROP, () => I.Z.Messages.CHECK_IT_OUT).otherwise(() => I.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
    })]
  })
}