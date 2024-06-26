n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(920906),
  o = n(873546),
  c = n(481060),
  u = n(666188),
  d = n(695346),
  h = n(768581),
  p = n(358555),
  _ = n(981631),
  f = n(647086),
  g = n(689938),
  m = n(92617);

function C(e) {
  var t;
  let {
    guild: n,
    controller: l,
    guildBanner: r,
    animate: c
  } = e, {
    value: u
  } = l.springs, p = d.QK.getSetting();
  return (0, i.jsx)(s.animated.div, {
    className: m.animatedContainer,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, i.jsx)(s.animated.div, {
      className: a()(m.bannerImage, {
        [m.bannerImgFullWidth]: o.tq
      }),
      style: {
        transform: u.to(e => p ? "translateY(".concat((1 - e) * 60, "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, i.jsx)("img", {
        className: a()(m.bannerImg, {
          [m.bannerImgFullWidth]: o.tq
        }),
        src: null !== (t = h.ZP.getGuildBannerURL({
          id: n.id,
          banner: r
        }, c)) && void 0 !== t ? t : "",
        alt: "",
        height: 135,
        width: 240,
        "aria-hidden": !0
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: l,
    hasSubheader: r
  } = e, {
    value: o
  } = n.springs, u = t.hasFeature(_.oNc.DISCOVERABLE), d = (0, i.jsx)("div", {
    className: m.communityInfo,
    children: u && (0, i.jsx)(c.Tooltip, {
      text: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
      position: "right",
      children: e => (0, i.jsxs)("div", {
        className: m.communityInfoPill,
        ...e,
        children: [(0, i.jsx)(c.GlobeEarthIcon, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: m.communityIcon
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
        })]
      })
    })
  });
  return r ? (0, i.jsx)("div", {
    className: a()(m.communityInfoContainer, m.hasSubheader),
    children: d
  }) : (0, i.jsx)(s.animated.div, {
    className: m.communityInfoContainer,
    style: l ? {
      opacity: o
    } : {
      height: o.to(e => "".concat(20 * e, "px"))
    },
    children: d
  })
}

function E() {
  return (0, i.jsx)(c.StarIcon, {
    size: "custom",
    color: "currentColor",
    className: m.favoritesIcon,
    height: 20,
    width: 20
  })
}
t.ZP = l.memo(function(e) {
  var t;
  let {
    bannerVisible: n,
    controller: r,
    className: s,
    onClick: N,
    onContextMenu: x,
    onMouseDown: S,
    disableBannerAnimation: Z,
    "aria-expanded": v,
    "aria-controls": T,
    guild: L,
    guildBanner: A,
    animationOverlayHeight: b,
    children: M,
    headerClassName: R,
    communityInfoVisible: y,
    hasSubheader: O
  } = e, P = L.hasFeature(_.oNc.ANIMATED_BANNER), j = (0, u.Z)(L), D = !j && L.hasCommunityInfoSubheader(), U = (0, h.xR)(A) && P && !Z, [G, w] = l.useState(!1), k = l.useRef(), B = l.useRef(null), V = l.useRef(), H = d.QK.getSetting();
  l.useEffect(() => {
    if (U && n && !k.current && H) return w(!0), V.current = setTimeout(() => {
      w(!1)
    }, 5e3), () => {
      clearTimeout(V.current)
    }
  }, [U, n, H]), l.useEffect(() => {
    k.current = n
  }, [n]);
  let F = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      ref: B,
      className: a()(s, {
        [m.container]: !0,
        [m.clickable]: null != N,
        [m.selected]: null != N && v,
        [m.hasBanner]: F(),
        [m.bannerVisible]: n,
        [m.communityInfoVisible]: !j && y || O && D
      }),
      onMouseDown: S,
      onContextMenu: x,
      onClick: N,
      children: [(0, i.jsxs)("header", {
        className: a()(m.header, R, {
          [m.themedHeaderMobile]: o.tq
        }),
        children: [(0, i.jsxs)("div", {
          className: a()(m.headerContent, m.primaryInfo),
          children: [(0, i.jsx)(p.Z, {
            guild: L,
            isBannerVisible: n
          }), L.id === f._ && (0, i.jsx)(E, {}), (0, i.jsx)(c.Heading, {
            variant: "text-md/semibold",
            lineClamp: 1,
            className: m.name,
            children: L.toString()
          }), null != N && (0, i.jsx)(c.Clickable, {
            className: m.headerButton,
            "aria-controls": T,
            "aria-expanded": v,
            focusProps: {
              ringTarget: B,
              offset: 4
            },
            onClick: N,
            onContextMenu: x,
            "aria-label": g.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
              guildName: null !== (t = null == L ? void 0 : L.toString()) && void 0 !== t ? t : ""
            })
          }), (0, i.jsx)("div", {
            className: m.headerChildren,
            children: M
          })]
        }), D && (0, i.jsx)(I, {
          guild: L,
          controller: r,
          hasBanner: null != A,
          hasSubheader: null != O && O
        })]
      }), null != A ? (0, i.jsx)(C, {
        guild: L,
        controller: r,
        guildBanner: A,
        animate: G
      }) : null]
    }), U && F() ? (0, i.jsx)("div", {
      className: m.animatedBannerHoverLayer,
      onMouseEnter: () => {
        w(!0), clearTimeout(V.current)
      },
      onMouseLeave: () => w(!1),
      style: {
        height: b
      }
    }) : null]
  })
})