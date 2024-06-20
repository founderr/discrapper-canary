"use strict";
n.d(t, {
  U4: function() {
    return i
  },
  kA: function() {
    return v
  },
  qR: function() {
    return L
  }
}), n(411104);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(481060),
  _ = n(542094),
  c = n(778569),
  d = n(182906),
  E = n(220082),
  I = n(318661),
  T = n(792125),
  h = n(783097),
  S = n(695676),
  f = n(176412),
  N = n(753972),
  A = n(231338),
  m = n(689938),
  O = n(599632);

function R(e) {
  let {
    application: t,
    look: n = "large_banner",
    isPartner: i,
    onClick: r,
    bannerImageStyle: a,
    children: _
  } = e, {
    iconURL: c,
    name: d,
    description: I
  } = o.useMemo(() => (0, h.sl)(t, {
    botIconFirst: !0
  }), [t]), S = (0, E.ZP)(c, "");
  return (0, s.jsxs)(u.Clickable, {
    className: O.container,
    onClick: r,
    children: [(0, s.jsxs)("div", {
      className: l()(O.bannerImageContainer, {
        [O.mediumBanner]: "medium_banner" === n,
        [O.largeBanner]: "large_banner" === n
      }),
      children: [(0, s.jsx)("span", {
        className: a,
        children: (0, s.jsx)(p, {
          application: t,
          fallbackColor: S
        })
      }), i && (0, s.jsx)("div", {
        className: O.partnerLabelWrapper,
        children: (0, s.jsx)(u.Text, {
          className: (0, T.Q)(A.BR.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: m.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }), "large_banner" === n || "medium_banner" === n ? (0, s.jsx)("div", {
        className: O.bannerImageChildContainer,
        children: _
      }) : null]
    }), (0, s.jsxs)("div", {
      className: O.appDetailsContainer,
      children: [null != c && (0, s.jsx)(N.Z, {
        src: c,
        className: O.icon,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: O.appDetails,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: d
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: I
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
  if ((0, h.BQ)(t)) {
    if ((0, h.ye)({
        application: t
      })) return (0, s.jsx)(g, {
      application: t
    });
    if (null != t.bot) return (0, s.jsx)(C, {
      bot: t.bot
    })
  }
  return (0, s.jsx)("div", {
    className: O.bannerImage,
    style: {
      backgroundColor: n
    }
  })
}

function g(e) {
  let {
    application: t
  } = e, n = (0, c.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  });
  return (0, s.jsx)(d.Z, {
    imageBackground: n,
    applicationName: t.name,
    imageClassName: O.bannerImage,
    imageNotFoundClassName: O.bannerImage
  })
}

function C(e) {
  let {
    bot: t
  } = e, n = (0, I.ZP)(t.id), i = o.useMemo(() => null == n ? void 0 : n.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [n]);
  return (0, s.jsx)("img", {
    src: i,
    alt: "",
    className: O.bannerImage
  })
}

function v(e) {
  let {
    pushHistory: t
  } = (0, S.hH)();
  return (0, s.jsx)(R, {
    ...e,
    onClick: n => {
      n.stopPropagation(), t({
        type: S.gc.APPLICATION,
        application: e.application
      })
    }
  })
}

function L(e) {
  let {
    channel: t,
    application: n,
    sectionName: i,
    ...r
  } = e;
  if (!(0, h.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let {
    onActivityItemSelected: o,
    activityAction: a,
    buttonColor: l,
    buttonText: c
  } = (0, f.P)(t, n, i);
  return a === _.JS.START ? (0, s.jsx)(R, {
    ...r,
    application: n,
    onClick: o
  }) : (0, s.jsx)(R, {
    ...r,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    bannerImageStyle: O.darkenBannerImage,
    children: (0, s.jsx)("div", {
      className: O.voiceLauncherAppCardContainer,
      children: (0, s.jsx)(u.Button, {
        className: O.voiceLauncherAppCardButton,
        type: "submit",
        size: u.Button.Sizes.LARGE,
        color: l,
        disabled: !1,
        onClick: o,
        children: c
      })
    })
  })
}(r = i || (i = {})).NO_BANNER = "no_banner", r.MEDIUM_BANNER = "medium_banner", r.LARGE_BANNER = "large_banner"