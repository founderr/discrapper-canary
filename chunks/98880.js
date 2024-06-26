"use strict";
n.d(t, {
  U4: function() {
    return i
  },
  cG: function() {
    return M
  },
  kA: function() {
    return P
  },
  qR: function() {
    return y
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
  E = n(367907),
  I = n(220082),
  T = n(318661),
  h = n(792125),
  f = n(541099),
  S = n(783097),
  N = n(695676),
  A = n(176412),
  m = n(753972),
  O = n(981631),
  p = n(231338),
  R = n(689938),
  g = n(599632);

function C(e) {
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
    description: E
  } = o.useMemo(() => (0, S.sl)(t, {
    botIconFirst: !0
  }), [t]), T = (0, I.ZP)(c, "");
  return "icon" === n ? (0, s.jsx)(u.Clickable, {
    className: l()(g.container, g.iconCard),
    onClick: r,
    children: null != c && (0, s.jsx)(m.Z, {
      src: c,
      className: g.iconCard,
      "aria-hidden": !0
    })
  }) : (0, s.jsxs)(u.Clickable, {
    className: g.container,
    onClick: r,
    children: [(0, s.jsxs)("div", {
      className: l()(g.bannerImageContainer, {
        [g.mediumBanner]: "medium_banner" === n,
        [g.largeBanner]: "large_banner" === n
      }),
      children: [(0, s.jsx)("span", {
        className: a,
        children: (0, s.jsx)(v, {
          application: t,
          fallbackColor: T
        })
      }), i && (0, s.jsx)("div", {
        className: g.partnerLabelWrapper,
        children: (0, s.jsx)(u.Text, {
          className: (0, h.Q)(p.BR.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: R.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }), "large_banner" === n || "medium_banner" === n ? (0, s.jsx)("div", {
        className: g.bannerImageChildContainer,
        children: _
      }) : null]
    }), (0, s.jsxs)("div", {
      className: g.appDetailsContainer,
      children: [null != c && (0, s.jsx)(m.Z, {
        src: c,
        className: g.icon,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: g.appDetails,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: d
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: E
        })]
      })]
    })]
  })
}

function v(e) {
  let {
    application: t,
    fallbackColor: n
  } = e;
  if ((0, S.BQ)(t)) {
    if ((0, S.ye)({
        application: t
      })) return (0, s.jsx)(L, {
      application: t
    });
    if (null != t.bot) return (0, s.jsx)(D, {
      bot: t.bot
    })
  }
  return (0, s.jsx)("div", {
    className: g.bannerImage,
    style: {
      backgroundColor: n
    }
  })
}

function L(e) {
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
    imageClassName: g.bannerImage,
    imageNotFoundClassName: g.bannerImage
  })
}

function D(e) {
  let {
    bot: t
  } = e, n = (0, T.ZP)(t.id), i = o.useMemo(() => null == n ? void 0 : n.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [n]);
  return (0, s.jsx)("img", {
    src: i,
    alt: "",
    className: g.bannerImage
  })
}

function M(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: i,
    query: r,
    installOnDemand: s
  } = e, {
    pushHistory: a
  } = (0, N.hH)();
  return o.useCallback(e => {
    e.stopPropagation(), (0, E.yw)(O.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: t.id,
      section_name: n,
      search_results_position: i,
      source: f.Z.entrypoint(),
      location,
      query: r
    }), a({
      type: N.gc.APPLICATION,
      application: t,
      installOnDemand: s,
      sectionName: n
    })
  }, [t, s, a, r, i, n])
}

function P(e) {
  let t = M(e);
  return (0, s.jsx)(C, {
    ...e,
    onClick: t
  })
}

function y(e) {
  let {
    channel: t,
    application: n,
    location: i,
    sectionName: r,
    ...o
  } = e;
  if (!(0, S.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let {
    onActivityItemSelected: a,
    activityAction: l,
    buttonColor: c,
    buttonText: d
  } = (0, A.P)(t, n, i, r);
  return l === _.JS.START ? (0, s.jsx)(C, {
    ...o,
    application: n,
    onClick: a
  }) : (0, s.jsx)(C, {
    ...o,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    bannerImageStyle: g.darkenBannerImage,
    children: (0, s.jsx)("div", {
      className: g.voiceLauncherAppCardContainer,
      children: (0, s.jsx)(u.Button, {
        className: g.voiceLauncherAppCardButton,
        type: "submit",
        size: u.Button.Sizes.LARGE,
        color: c,
        disabled: !1,
        onClick: a,
        children: d
      })
    })
  })
}(r = i || (i = {})).ICON = "icon", r.NO_BANNER = "no_banner", r.MEDIUM_BANNER = "medium_banner", r.LARGE_BANNER = "large_banner"