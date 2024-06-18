"use strict";
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(481060),
  _ = n(778569),
  c = n(182906),
  d = n(220082),
  E = n(318661),
  I = n(792125),
  T = n(783097),
  h = n(753972),
  S = n(231338),
  f = n(689938),
  N = n(741382);

function A(e) {
  let {
    application: t,
    look: n = "large_banner",
    isPartner: i,
    onClick: r
  } = e, {
    iconURL: a,
    name: _,
    description: c
  } = o.useMemo(() => (0, T.sl)(t, {
    botIconFirst: !0
  }), [t]), E = (0, d.ZP)(a, "");
  return (0, s.jsxs)(u.Clickable, {
    className: N.container,
    onClick: r,
    children: [(0, s.jsxs)("div", {
      className: l()(N.bannerImageContainer, {
        [N.mediumBanner]: "medium_banner" === n,
        [N.largeBanner]: "large_banner" === n
      }),
      children: [(0, s.jsx)(m, {
        application: t,
        fallbackColor: E
      }), i && (0, s.jsx)("div", {
        className: N.partnerLabelWrapper,
        children: (0, s.jsx)(u.Text, {
          className: (0, I.Q)(S.BR.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: f.Z.Messages.APP_DIRECTORY_PARTNER
        })
      })]
    }), (0, s.jsxs)("div", {
      className: N.appDetailsContainer,
      children: [null != a && (0, s.jsx)(h.Z, {
        src: a,
        className: N.icon,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: N.appDetails,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: _
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: c
        })]
      })]
    })]
  })
}

function m(e) {
  let {
    application: t,
    fallbackColor: n
  } = e;
  if ((0, T.BQ)(t)) {
    if ((0, T.ye)({
        application: t
      })) return (0, s.jsx)(O, {
      application: t
    });
    if (null != t.bot) return (0, s.jsx)(R, {
      bot: t.bot
    })
  }
  return (0, s.jsx)("div", {
    className: N.bannerImage,
    style: {
      backgroundColor: n
    }
  })
}

function O(e) {
  let {
    application: t
  } = e, n = (0, _.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  });
  return (0, s.jsx)(c.Z, {
    imageBackground: n,
    applicationName: t.name,
    imageClassName: N.bannerImage,
    imageNotFoundClassName: N.bannerImage
  })
}

function R(e) {
  let {
    bot: t
  } = e, n = (0, E.ZP)(t.id), i = o.useMemo(() => null == n ? void 0 : n.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [n]);
  return (0, s.jsx)("img", {
    src: i,
    alt: "",
    className: N.bannerImage
  })
}(i = r || (r = {})).NO_BANNER = "no_banner", i.MEDIUM_BANNER = "medium_banner", i.LARGE_BANNER = "large_banner", t.Z = A, A.Looks = r