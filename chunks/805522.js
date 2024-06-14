"use strict";
n.r(t);
var i, r, s = n("735250"),
  a = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("481060"),
  d = n("778569"),
  _ = n("182906"),
  c = n("220082"),
  E = n("318661"),
  I = n("768581"),
  T = n("792125"),
  f = n("783097"),
  S = n("753972"),
  h = n("231338"),
  A = n("689938"),
  m = n("573214");

function N(e) {
  let {
    application: t,
    look: n = "large_banner",
    isPartner: i,
    onClick: r
  } = e, o = a.useMemo(() => I.default.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    botIconFirst: !0
  }), [t]), d = (0, c.default)(o, "");
  return (0, s.jsxs)(u.Clickable, {
    className: m.container,
    onClick: r,
    children: [(0, s.jsxs)("div", {
      className: l()(m.bannerImageContainer, {
        [m.mediumBanner]: "medium_banner" === n,
        [m.largeBanner]: "large_banner" === n
      }),
      children: [(0, s.jsx)(p, {
        application: t,
        fallbackColor: d
      }), i && (0, s.jsx)("div", {
        className: m.partnerLabelWrapper,
        children: (0, s.jsx)(u.Text, {
          className: (0, T.getThemeClass)(h.ThemeTypes.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: A.default.Messages.APP_DIRECTORY_PARTNER
        })
      })]
    }), (0, s.jsxs)("div", {
      className: m.appDetailsContainer,
      children: [null != o && (0, s.jsx)(S.default, {
        src: o,
        className: m.icon,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: m.appDetails,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: t.name
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: t.description
        })]
      })]
    })]
  })
}

function p(e) {
  let {
    application: t,
    fallbackColor: n
  } = e;
  return (0, f.isEmbeddedApp)({
    application: t
  }) ? (0, s.jsx)(O, {
    application: t
  }) : null != t.bot ? (0, s.jsx)(C, {
    bot: t.bot
  }) : (0, s.jsx)("div", {
    className: m.bannerImage,
    style: {
      backgroundColor: n
    }
  })
}

function O(e) {
  let {
    application: t
  } = e, n = (0, d.default)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  });
  return (0, s.jsx)(_.default, {
    imageBackground: n,
    applicationName: t.name,
    imageClassName: m.bannerImage,
    imageNotFoundClassName: m.bannerImage
  })
}

function C(e) {
  let {
    bot: t
  } = e, n = (0, E.default)(t.id), i = a.useMemo(() => null == n ? void 0 : n.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [n]);
  return (0, s.jsx)("img", {
    src: i,
    alt: "",
    className: m.bannerImage
  })
}(i = r || (r = {})).NO_BANNER = "no_banner", i.MEDIUM_BANNER = "medium_banner", i.LARGE_BANNER = "large_banner", t.default = N, N.Looks = r