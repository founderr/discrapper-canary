t.d(n, {
  U4: function() {
    return i
  },
  cG: function() {
    return L
  },
  kA: function() {
    return j
  },
  qR: function() {
    return O
  }
}), t(411104);
var i, l, a = t(735250),
  r = t(470079),
  s = t(120356),
  o = t.n(s),
  c = t(481060),
  u = t(542094),
  d = t(778569),
  m = t(182906),
  p = t(367907),
  h = t(220082),
  N = t(318661),
  _ = t(792125),
  E = t(541099),
  C = t(783097),
  A = t(695676),
  f = t(176412),
  x = t(753972),
  v = t(981631),
  I = t(231338),
  g = t(689938),
  P = t(599632);

function T(e) {
  let {
    application: n,
    look: t = "large_banner",
    isPartner: i,
    onClick: l,
    bannerImageStyle: s,
    children: u
  } = e, {
    iconURL: d,
    name: m,
    description: p
  } = r.useMemo(() => (0, C.sl)(n, {
    botIconFirst: !0
  }), [n]), N = (0, h.ZP)(d, "");
  return "icon" === t ? (0, a.jsx)(c.Clickable, {
    className: o()(P.container, P.iconCard),
    onClick: l,
    children: null != d && (0, a.jsx)(x.Z, {
      src: d,
      className: P.iconCard,
      "aria-hidden": !0
    })
  }) : (0, a.jsxs)(c.Clickable, {
    className: P.container,
    onClick: l,
    children: [(0, a.jsxs)("div", {
      className: o()(P.bannerImageContainer, {
        [P.mediumBanner]: "medium_banner" === t,
        [P.largeBanner]: "large_banner" === t
      }),
      children: [(0, a.jsx)("span", {
        className: s,
        children: (0, a.jsx)(M, {
          application: n,
          fallbackColor: N
        })
      }), i && (0, a.jsx)("div", {
        className: P.partnerLabelWrapper,
        children: (0, a.jsx)(c.Text, {
          className: (0, _.Q)(I.BR.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: g.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }), "large_banner" === t || "medium_banner" === t ? (0, a.jsx)("div", {
        className: P.bannerImageChildContainer,
        children: u
      }) : null]
    }), (0, a.jsxs)("div", {
      className: P.appDetailsContainer,
      children: [null != d && (0, a.jsx)(x.Z, {
        src: d,
        className: P.icon,
        "aria-hidden": !0
      }), (0, a.jsxs)("div", {
        className: P.appDetails,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: m
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: p
        })]
      })]
    })]
  })
}

function M(e) {
  let {
    application: n,
    fallbackColor: t
  } = e;
  if ((0, C.BQ)(n)) {
    if ((0, C.ye)({
        application: n
      })) return (0, a.jsx)(S, {
      application: n
    });
    if (null != n.bot) return (0, a.jsx)(R, {
      bot: n.bot
    })
  }
  return (0, a.jsx)("div", {
    className: P.bannerImage,
    style: {
      backgroundColor: t
    }
  })
}

function S(e) {
  let {
    application: n
  } = e, t = (0, d.Z)({
    applicationId: n.id,
    size: 600,
    names: ["embedded_cover"]
  });
  return (0, a.jsx)(m.Z, {
    imageBackground: t,
    applicationName: n.name,
    imageClassName: P.bannerImage,
    imageNotFoundClassName: P.bannerImage
  })
}

function R(e) {
  let {
    bot: n
  } = e, t = (0, N.ZP)(n.id), i = r.useMemo(() => null == t ? void 0 : t.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [t]);
  return (0, a.jsx)("img", {
    src: i,
    alt: "",
    className: P.bannerImage
  })
}

function L(e) {
  let {
    application: n,
    sectionName: t,
    resultsPosition: i,
    query: l,
    installOnDemand: a
  } = e, {
    pushHistory: s
  } = (0, A.hH)();
  return r.useCallback(e => {
    e.stopPropagation(), (0, p.yw)(v.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: n.id,
      section_name: t,
      search_results_position: i,
      source: E.Z.entrypoint(),
      location,
      query: l
    }), s({
      type: A.gc.APPLICATION,
      application: n,
      installOnDemand: a,
      sectionName: t
    })
  }, [n, a, s, l, i, t])
}

function j(e) {
  let n = L(e);
  return (0, a.jsx)(T, {
    ...e,
    onClick: n
  })
}

function O(e) {
  let {
    channel: n,
    application: t,
    location: i,
    sectionName: l,
    ...r
  } = e;
  if (!(0, C.BQ)(t)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let {
    onActivityItemSelected: s,
    activityAction: o,
    buttonColor: d,
    buttonText: m
  } = (0, f.P)(n, t, i, l);
  return o === u.JS.START ? (0, a.jsx)(T, {
    ...r,
    application: t,
    onClick: s
  }) : (0, a.jsx)(T, {
    ...r,
    application: t,
    onClick: e => {
      e.stopPropagation()
    },
    bannerImageStyle: P.darkenBannerImage,
    children: (0, a.jsx)("div", {
      className: P.voiceLauncherAppCardContainer,
      children: (0, a.jsx)(c.Button, {
        className: P.voiceLauncherAppCardButton,
        type: "submit",
        size: c.Button.Sizes.LARGE,
        color: d,
        disabled: !1,
        onClick: s,
        children: m
      })
    })
  })
}(l = i || (i = {})).ICON = "icon", l.NO_BANNER = "no_banner", l.MEDIUM_BANNER = "medium_banner", l.LARGE_BANNER = "large_banner"