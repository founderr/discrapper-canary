"use strict";
s.r(t), s.d(t, {
  default: function() {
    return K
  }
}), s("47120"), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("392711"),
  i = s("718017"),
  r = s("895070"),
  o = s("322282"),
  d = s("790472"),
  u = s("442837"),
  c = s("846519"),
  S = s("730592"),
  E = s("481060"),
  T = s("607070"),
  f = s("100527"),
  m = s("906732"),
  _ = s("776980"),
  g = s("386346"),
  h = s("641826"),
  I = s("875667"),
  N = s("266983"),
  p = s("601469"),
  C = s("488269"),
  A = s("837060"),
  O = s("635869"),
  x = s("451478"),
  R = s("976644"),
  M = s("147507"),
  v = s("626135"),
  D = s("70956"),
  L = s("981631"),
  P = s("232700"),
  j = s("689938"),
  b = s("344979");
let U = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"];

function y(e) {
  let {
    disable: t
  } = e, [s, r] = n.useState({
    x: (0, h.randomBetween)(200, 232),
    y: (0, h.randomBetween)(48, 80)
  }), [o, d] = n.useState(l.sample(U)), [u] = n.useState(new c.Timeout), [S, E] = (0, i.useSpring)(() => ({
    rotation: 0,
    size: 0,
    opacity: 0,
    config: i.config.stiff
  }));
  return (n.useEffect(() => {
    let e = () => {
      !t && u.start((0, h.randomBetween)(1e3, 5e3), () => {
        r({
          x: (0, h.randomBetween)(200, 232),
          y: (0, h.randomBetween)(48, 80)
        }), d(l.sample(U)), E({
          rotation: (0, h.randomBetween)(-180, 180),
          size: (0, h.randomBetween)(.5, 1.5),
          opacity: 1
        }).then(() => {
          E({
            rotation: (0, h.randomBetween)(-180, 180),
            size: 0,
            opacity: 0
          }).then(() => {
            e()
          })
        })
      })
    };
    return e(), () => u.stop()
  }, [t, E, u]), t) ? null : (0, a.jsx)(i.animated.svg, {
    style: {
      top: s.y,
      left: s.x,
      opacity: S.opacity,
      transform: (0, i.to)([S.rotation, S.size], (e, t) => "rotate(".concat(e, "deg) scale(").concat(t, ")"))
    },
    className: b.boxSparkle,
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("path", {
      d: "M1.76995 4.96651L0.189928 9.06651C0.181907 9.08331 0.179304 9.10217 0.182451 9.12051C0.185598 9.13886 0.194346 9.15577 0.207506 9.16893C0.220666 9.18209 0.237594 9.19085 0.255937 9.194C0.274281 9.19715 0.293129 9.19453 0.309923 9.18651L4.40993 7.60651H4.47994L8.57994 9.18651C8.59674 9.19453 8.61561 9.19715 8.63396 9.194C8.6523 9.19085 8.6692 9.18209 8.68236 9.16893C8.69552 9.15577 8.70427 9.13886 8.70741 9.12051C8.71056 9.10217 8.70796 9.08331 8.69994 9.06651L7.11995 4.96651V4.8965L8.69994 0.796508C8.70796 0.779713 8.71056 0.76085 8.70741 0.742507C8.70427 0.724163 8.69552 0.707236 8.68236 0.694075C8.6692 0.680915 8.6523 0.672168 8.63396 0.669021C8.61561 0.665873 8.59674 0.668492 8.57994 0.676513L4.47994 2.2565C4.46886 2.26117 4.45696 2.26359 4.44493 2.26359C4.43291 2.26359 4.42101 2.26117 4.40993 2.2565L0.309923 0.676513C0.293129 0.668492 0.274281 0.665873 0.255937 0.669021C0.237594 0.672168 0.220666 0.680915 0.207506 0.694075C0.194346 0.707236 0.185598 0.724163 0.182451 0.742507C0.179304 0.76085 0.181907 0.779713 0.189928 0.796508L1.76995 4.8965C1.77462 4.90758 1.77703 4.91948 1.77703 4.9315C1.77703 4.94353 1.77462 4.95543 1.76995 4.96651Z",
      fill: o
    })
  })
}

function B() {
  let e = (0, u.useStateFromStores)([x.default], () => x.default.isFocused()),
    t = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion),
    [l, i] = n.useState(0),
    r = -1 === l;
  return (0, a.jsxs)(E.Clickable, {
    className: b.headerContainer,
    children: [(0, a.jsx)(O.default, {
      className: b.headerBackground,
      pageMultiplier: 10
    }), (0, a.jsx)(A.default, {
      className: b.headerBrand,
      clickAreaClassName: b.headerBrandBoxClickArea,
      boxClassName: b.headerBrandBox,
      onBoxClick: r ? void 0 : () => {
        v.default.track(L.AnalyticEvents.EASTER_EGG_INTERACTED, {
          type: "packages_header_click",
          position: l
        }), l > 0 && (l + 1) % 5 == 0 ? i(-1) : i(l + 1)
      }
    }), (0, a.jsx)(y, {
      disable: t
    }), (0, a.jsx)("div", {
      className: b.headerCTA,
      children: (0, a.jsxs)(R.default, {
        className: b.headerButton,
        innerClassName: b.innerButton,
        pauseAnimation: !e || t,
        onClick: e => {
          (0, E.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("58955")]).then(s.bind(s, "31088"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          }), e.stopPropagation()
        },
        size: E.ButtonSizes.SMALL,
        color: E.ButtonColors.CUSTOM,
        children: [(0, a.jsx)(N.default, {
          className: b.buttonIcon,
          color: E.tokens.colors.WHITE
        }), j.default.Messages.USER_SETTINGS_PACKAGES_HEADER_CTA]
      })
    }), r ? (0, a.jsx)("div", {
      className: b.headerEasterEgg,
      children: (0, a.jsx)(M.EasterEggAnimation, {
        position: M.EasterEggPosition.BOTTOM_LEFT,
        onAnimationComplete: () => {
          i(0)
        },
        size: 120
      })
    }) : null]
  })
}

function F(e) {
  let {
    icon: t,
    text: s,
    count: n,
    fetchState: l
  } = e;
  return (0, a.jsxs)("div", {
    className: b.stat,
    children: [(0, a.jsx)(t, {
      color: E.tokens.colors.TEXT_MUTED
    }), (0, a.jsx)(E.Text, {
      className: b.statText,
      variant: "text-xs/bold",
      color: "text-muted",
      children: s
    }), (0, a.jsx)(E.Text, {
      variant: "text-lg/bold",
      color: "text-primary",
      children: l === g.FetchState.FETCHED ? n.toLocaleString() : (0, a.jsx)(E.Spinner, {})
    })]
  })
}
let G = D.default.Millis.SECOND,
  k = 2 * D.default.Millis.SECOND;

function H() {
  let e = (0, P.getLootboxes)(),
    [t, s, l, i, r, S, E] = (0, u.useStateFromStoresArray)([g.default], () => [g.default.userDataFetchState, g.default.globalOpenedCountFetchState, g.default.openedItems, g.default.globalOpenedCount, g.default.lastGlobalOpenedCount, g.default.globalOpenedCountFetchTime, g.default.nextGlobalOpenedCountFetchTime]),
    T = n.useMemo(() => Object.values(l).reduce((e, t) => e + t, 0), [l]),
    [f] = n.useState(() => new c.Timeout),
    [m, _] = n.useState(0),
    p = Math.floor((0, I.default)(r, i, m));
  return n.useEffect(() => {
    _(0)
  }, [i, r]), n.useEffect(() => (f.start((0, h.randomBetween)(G, k), () => {
    if (m < 1) {
      let e = E - S,
        t = Math.max(0, E - Date.now());
      _(Math.min(t / e, 1))
    }
  }), () => f.stop()), [r, i, S, f, m, E]), (0, a.jsxs)("div", {
    className: b.stats,
    children: [(0, a.jsx)(F, {
      icon: N.default,
      text: j.default.Messages.PACKAGES_PACKAGES_OPENED,
      count: T,
      fetchState: t
    }), (0, a.jsx)(F, {
      icon: d.TicketIcon,
      text: j.default.Messages.PACKAGES_UNIQUE_PACKAGES_OPENED,
      count: j.default.Messages.PACKAGES_OPENED_OUT_OF.format({
        count: Object.keys(l).filter(e => l[e] > 0).length,
        total: Object.keys(e).length
      }),
      fetchState: t
    }), (0, a.jsx)(F, {
      icon: o.GlobeEarthIcon,
      text: j.default.Messages.PACKAGES_GLOBAL_PACKAGES_OPENED,
      count: p,
      fetchState: s
    })]
  })
}

function w() {
  let [e, t] = n.useState(!1), [l, i] = (0, u.useStateFromStoresArray)([g.default], () => [g.default.openedItems, g.default.redeemedPrize]), r = (0, P.getLootboxes)(), o = n.useMemo(() => Object.keys(l).length === Object.keys(r).length && !Object.values(l).some(e => 0 === e), [l, r]), d = async () => {
    t(!0);
    try {
      await (0, _.redeemPrize)()
    } finally {
      t(!1)
    }(0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("65907")]).then(s.bind(s, "283054"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  };
  return !i && o ? (0, a.jsxs)("div", {
    className: b.banner,
    children: [(0, a.jsx)(E.Text, {
      variant: "text-sm/bold",
      color: "always-white",
      children: j.default.Messages.USER_SETTINGS_PACKAGE_BANNER_DEFAULT
    }), (0, a.jsxs)(E.Button, {
      className: b.headerButton,
      innerClassName: b.innerButton,
      onClick: d,
      size: E.ButtonSizes.SMALL,
      color: E.ButtonColors.CUSTOM,
      submitting: e,
      children: [(0, a.jsx)(S.GiftIcon, {
        className: b.buttonIcon,
        color: E.tokens.colors.WHITE
      }), j.default.Messages.USER_SETTINGS_PACKAGE_BANNER_CTA]
    })]
  }) : null
}

function V() {
  let [e, t] = (0, u.useStateFromStoresArray)([g.default], () => [g.default.openedItems, g.default.userDataFetchState]), s = (0, P.getLootboxes)(), n = t === g.FetchState.FETCHED ? (0, a.jsx)("div", {
    className: b.inventoryItems,
    children: Object.keys(s).map((t, n) => {
      var l;
      let i = s[t];
      return (0, a.jsx)(C.default, {
        image: i.image,
        name: i.name,
        sound: i.sound,
        openedCount: null !== (l = null == e ? void 0 : e[t]) && void 0 !== l ? l : 0,
        index: n
      }, t)
    })
  }) : (0, a.jsx)(E.Spinner, {});
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.Heading, {
      variant: "heading-md/semibold",
      className: b.inventoryHeader,
      children: [j.default.Messages.USER_SETTINGS_PACKAGES_MAILBOX_HEADER, (0, a.jsx)(p.default, {
        className: b.inventoryHelpIcon
      })]
    }), (0, a.jsx)("div", {
      className: b.inventoryContainer,
      children: n
    })]
  })
}

function Y() {
  return (0, a.jsxs)("div", {
    className: b.footer,
    children: [(0, a.jsx)(r.ClipsIcon, {}), (0, a.jsx)(E.Text, {
      variant: "text-xs/bold",
      color: "text-muted",
      children: j.default.Messages.PACKAGES_FOOTER_NOTE.format({
        url: P.LOOTBOX_VIDEO_URL
      })
    })]
  })
}

function K() {
  let {
    analyticsLocations: e
  } = (0, m.default)(f.default.PACKAGES), t = (0, u.useStateFromStores)([g.default], () => g.default.nextGlobalOpenedCountFetchTime), [s] = n.useState(() => new c.Timeout);
  return n.useEffect(() => {
    (0, _.fetchUserLootboxData)()
  }, []), n.useEffect(() => {
    let e = Math.max(0, t - Date.now());
    return s.start(e, _.fetchCountStat), () => s.stop()
  }, [t, s]), (0, a.jsxs)(m.AnalyticsLocationProvider, {
    value: e,
    children: [(0, a.jsx)(B, {}), (0, a.jsx)(H, {}), (0, a.jsx)(w, {}), (0, a.jsx)(V, {}), (0, a.jsx)(Y, {})]
  })
}