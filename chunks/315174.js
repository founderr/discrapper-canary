n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(920906),
  o = n(873546),
  u = n(481060),
  c = n(666188),
  d = n(695346),
  h = n(768581),
  g = n(358555),
  p = n(981631),
  m = n(647086),
  C = n(689938),
  E = n(92617);

function f(e) {
  var t;
  let {
    guild: n,
    controller: i,
    guildBanner: s,
    animate: u
  } = e, {
    value: c
  } = i.springs, g = d.QK.getSetting();
  return (0, l.jsx)(a.animated.div, {
    className: E.animatedContainer,
    style: {
      opacity: c,
      transform: c.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, l.jsx)(a.animated.div, {
      className: r()(E.bannerImage, {
        [E.bannerImgFullWidth]: o.tq
      }),
      style: {
        transform: c.to(e => g ? "translateY(".concat((1 - e) * 60, "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, l.jsx)("img", {
        className: r()(E.bannerImg, {
          [E.bannerImgFullWidth]: o.tq
        }),
        src: null !== (t = h.ZP.getGuildBannerURL({
          id: n.id,
          banner: s
        }, u)) && void 0 !== t ? t : "",
        alt: "",
        height: 135,
        width: 240,
        "aria-hidden": !0
      })
    })
  })
}

function _(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: s
  } = e, {
    value: o
  } = n.springs, c = t.hasFeature(p.oNc.DISCOVERABLE), d = (0, l.jsx)("div", {
    className: E.communityInfo,
    children: c && (0, l.jsx)(u.Tooltip, {
      text: C.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
      position: "right",
      children: e => (0, l.jsxs)("div", {
        className: E.communityInfoPill,
        ...e,
        children: [(0, l.jsx)(u.GlobeEarthIcon, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: E.communityIcon
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: C.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
        })]
      })
    })
  });
  return s ? (0, l.jsx)("div", {
    className: r()(E.communityInfoContainer, E.hasSubheader),
    children: d
  }) : (0, l.jsx)(a.animated.div, {
    className: E.communityInfoContainer,
    style: i ? {
      opacity: o
    } : {
      height: o.to(e => "".concat(20 * e, "px"))
    },
    children: d
  })
}

function I() {
  return (0, l.jsx)(u.StarIcon, {
    size: "custom",
    color: "currentColor",
    className: E.favoritesIcon,
    height: 20,
    width: 20
  })
}
t.ZP = i.memo(function(e) {
  var t;
  let {
    bannerVisible: n,
    controller: s,
    className: a,
    onClick: N,
    onContextMenu: Z,
    onMouseDown: S,
    disableBannerAnimation: x,
    "aria-expanded": T,
    "aria-controls": L,
    guild: v,
    guildBanner: A,
    animationOverlayHeight: M,
    children: R,
    headerClassName: O,
    communityInfoVisible: P,
    hasSubheader: j
  } = e, b = v.hasFeature(p.oNc.ANIMATED_BANNER), D = (0, c.Z)(v), y = !D && v.hasCommunityInfoSubheader(), U = (0, h.xR)(A) && b && !x, [G, w] = i.useState(!1), k = i.useRef(), B = i.useRef(null), V = i.useRef(), H = d.QK.getSetting();
  i.useEffect(() => {
    if (U && n && !k.current && H) return w(!0), V.current = setTimeout(() => {
      w(!1)
    }, 5e3), () => {
      clearTimeout(V.current)
    }
  }, [U, n, H]), i.useEffect(() => {
    k.current = n
  }, [n]);
  let F = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      ref: B,
      className: r()(a, {
        [E.container]: !0,
        [E.clickable]: null != N,
        [E.selected]: null != N && T,
        [E.hasBanner]: F(),
        [E.bannerVisible]: n,
        [E.communityInfoVisible]: !D && P || j && y
      }),
      onMouseDown: S,
      onContextMenu: Z,
      onClick: N,
      children: [(0, l.jsxs)("header", {
        className: r()(E.header, O, {
          [E.themedHeaderMobile]: o.tq
        }),
        children: [(0, l.jsxs)("div", {
          className: r()(E.headerContent, E.primaryInfo),
          children: [(0, l.jsx)(g.Z, {
            guild: v,
            isBannerVisible: n
          }), v.id === m._ && (0, l.jsx)(I, {}), (0, l.jsx)(u.Heading, {
            variant: "text-md/semibold",
            lineClamp: 1,
            className: E.name,
            children: v.toString()
          }), null != N && (0, l.jsx)(u.Clickable, {
            className: E.headerButton,
            "aria-controls": L,
            "aria-expanded": T,
            focusProps: {
              ringTarget: B,
              offset: 4
            },
            onClick: N,
            onContextMenu: Z,
            "aria-label": C.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
              guildName: null !== (t = null == v ? void 0 : v.toString()) && void 0 !== t ? t : ""
            })
          }), (0, l.jsx)("div", {
            className: E.headerChildren,
            children: R
          })]
        }), y && (0, l.jsx)(_, {
          guild: v,
          controller: s,
          hasBanner: null != A,
          hasSubheader: null != j && j
        })]
      }), null != A ? (0, l.jsx)(f, {
        guild: v,
        controller: s,
        guildBanner: A,
        animate: G
      }) : null]
    }), U && F() ? (0, l.jsx)("div", {
      className: E.animatedBannerHoverLayer,
      onMouseEnter: () => {
        w(!0), clearTimeout(V.current)
      },
      onMouseLeave: () => w(!1),
      style: {
        height: M
      }
    }) : null]
  })
})