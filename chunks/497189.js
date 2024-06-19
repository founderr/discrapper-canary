n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(920906),
  o = n(143927),
  c = n(442837),
  u = n(481060),
  d = n(749210),
  E = n(607070),
  h = n(100527),
  _ = n(931240),
  I = n(970606),
  m = n(963202),
  g = n(650461),
  p = n(353093),
  T = n(603839),
  N = n(430824),
  S = n(725568),
  C = n(231467),
  A = n(207796),
  f = n(316553),
  Z = n(273254),
  v = n(559469),
  L = n(308083),
  O = n(689938),
  R = n(605767),
  x = n(345480),
  M = n(236613);
let P = {
  mass: 1,
  tension: 600,
  friction: 60
};

function D(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)(r.animated.div, {
    className: R.clanEnvelope,
    children: [(0, i.jsx)("div", {
      className: R.clanEnvelopeTop,
      children: (0, i.jsx)("img", {
        src: M,
        alt: ""
      })
    }), t, (0, i.jsx)("div", {
      className: R.clanEnvelopeBottom,
      children: (0, i.jsx)("img", {
        src: x,
        alt: ""
      })
    })]
  })
}

function b(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, i.jsxs)("div", {
    className: R.upsellDetail,
    children: [(0, i.jsx)(n, {
      size: "md",
      color: "currentColor",
      className: R.upsellIcon
    }), (0, i.jsx)(u.Text, {
      className: R.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function y(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: l,
    onButtonClick: r,
    buttonText: c,
    hasCompletedUpsell: d,
    isBrowseButtonVisible: E
  } = e, h = (0, A.GN)(e => e.setUserUpsellScreen, o.Z), _ = (0, A.GN)(e => e.started, o.Z), I = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), m = s.useCallback(() => {
    (0, A.fH)(A.v0.DISCOVERY)
  }, []), g = s.useCallback(() => {
    (0, A.fH)(A.v0.GET_STARTED), h(A.o2.USER_ONBOARDING)
  }, [h]), p = l.length > 1;
  return (0, i.jsxs)(i.Fragment, {
    children: [d ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(u.Heading, {
        className: R.upsellTitle,
        variant: "heading-xxl/semibold",
        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }), (0, i.jsx)(u.Heading, {
        className: R.upsellSubtitle,
        variant: "heading-md/medium",
        color: "header-secondary",
        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(u.Heading, {
        className: R.upsellTitle,
        variant: "heading-xxl/semibold",
        children: [O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, i.jsx)("br", {}), O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
      }), (0, i.jsxs)("div", {
        className: R.upsellDetails,
        children: [(0, i.jsx)(b, {
          icon: u.CompassIcon,
          text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
        }), (0, i.jsx)(b, {
          icon: u.CircleCheckIcon,
          text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
        }), (0, i.jsx)(b, {
          icon: u.GroupIcon,
          text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: R.upsellButton,
      children: [p && (0, i.jsx)(u.SearchableSelect, {
        className: R.upsellSelect,
        value: t,
        options: I,
        onChange: n
      }), !d && (0, i.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.ButtonSizes.LARGE,
        color: u.ButtonColors.BRAND,
        className: a()(R.reserveButton, {
          [R.buttonWithSelect]: p
        }),
        onClick: r,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: c
        })
      }), p && E && (0, i.jsx)("div", {
        className: R.spacer,
        children: "\xb7"
      }), E && (0, i.jsx)(u.Button, {
        look: u.ButtonLooks.OUTLINED,
        color: u.ButtonColors.PRIMARY,
        className: R.browseButton,
        onClick: g,
        children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
      })]
    }), _ && (0, i.jsx)("div", {
      className: R.upsellStaticHeader,
      children: (0, i.jsx)("div", {
        className: R.upsellBackButton,
        children: (0, i.jsx)(u.Clickable, {
          onClick: m,
          "aria-label": O.Z.Messages.BACK,
          children: (0, i.jsx)(u.ArrowLargeLeftIcon, {})
        })
      })
    })]
  })
}
t.Z = s.memo(function(e) {
  let {
    eligibleGuilds: t,
    eligibleGuildsIncludingConverted: n,
    selectedGame: l,
    isBrowseButtonVisible: a
  } = e, o = 0 === t.length, [x, M] = s.useState(() => {
    let e = new Set(g.ZP.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return o ? n[0].id : t[0].id
  });
  s.useEffect(() => {
    !o && (0, I.TE)({
      guildId: x,
      location: h.Z.CLAN_DISCOVERY
    })
  }, [o, x]);
  let b = (0, c.e7)([N.Z], () => N.Z.getGuild(x)),
    j = (0, c.e7)([g.ZP], () => null != x ? g.ZP.getStateForGuild(x).progress : null),
    U = (0, f.J)({
      selectedGame: l
    }),
    {
      defaultGameId: G
    } = (0, m.St)({
      guild: b,
      location: "ClanDiscoveryAdminUpsell",
      includeConverted: !1
    });
  s.useEffect(() => {
    let e = G === L.nJ ? A.hz.VALORANT : G === L.xn ? A.hz.GENSHIN : void 0;
    null != e && U !== G && A.GN.getState().setGame(e)
  }, [G, U]);
  let w = s.useCallback(() => {
      !o && ((0, I._9)({
        guildId: x,
        location: h.Z.CLAN_DISCOVERY
      }), (0, S.q4)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, i.jsx)(T.Z, {
          onClose: t,
          guildId: x
        })
      }, {
        layerKey: L.Pv
      }))
    }, [o, x]),
    k = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
    B = (0, Z.L)({
      guild: b,
      selectedGame: l
    }),
    H = (0, v.n)(U),
    [V, F] = s.useState(!0),
    Y = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      delay: 400,
      config: {
        duration: 0
      }
    }),
    z = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(324px, -56px) rotate(8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: P,
      delay: 400
    }),
    W = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(176px, -24px) rotate(4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: P,
      delay: 350
    }),
    K = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-176px, -24px) rotate(-4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: P,
      delay: 350
    }),
    q = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-324px, -56px) rotate(-8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: P,
      delay: 400
    }),
    Q = (0, r.useSpring)({
      from: k ? {
        transform: "scale(1)",
        opacity: 0
      } : {
        transform: "scale(0.9)",
        opacity: 0
      },
      to: {
        transform: "scale(1)",
        opacity: 1
      },
      config: P,
      delay: 200
    }),
    X = (0, r.useSpring)({
      from: k ? {
        transform: "translateY(0px)"
      } : {
        transform: "translateY(240px)"
      },
      to: {
        transform: "translateY(0px)"
      },
      config: P,
      delay: 250,
      onRest: () => F(!1)
    }),
    J = s.useMemo(() => null == j ? O.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : O.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [j]),
    $ = s.useCallback(async () => {
      await (0, _.Zx)(x), d.Z.transitionToGuildSync("936317138904440892")
    }, [x]),
    ee = s.useCallback(e => (0, i.jsx)(u.Clickable, {
      tag: "span",
      className: R.joinWFSLink,
      onClick: $,
      "aria-label": O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
      children: (0, i.jsx)(u.Text, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-brand",
        children: e
      })
    }), [$]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: R.cardsContainer,
      children: [(0, i.jsx)(r.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...z,
          ...Y
        },
        children: (0, i.jsx)(C.xV, {
          clan: H[0],
          className: R.clanCardOuterLeft
        })
      }), (0, i.jsx)(r.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...W,
          ...Y
        },
        children: (0, i.jsx)(C.xV, {
          clan: H[1],
          className: R.clanCardInnerLeft
        })
      }), null != B && (0, i.jsx)(r.animated.div, {
        className: R.clanEnvelope,
        style: Q,
        children: (0, i.jsx)(D, {
          children: (0, i.jsx)("div", {
            className: R.clanCardCenterContainer,
            style: {
              overflow: V ? "hidden" : "visible"
            },
            children: (0, i.jsx)(r.animated.div, {
              style: X,
              children: (0, i.jsx)(C.xV, {
                clan: B,
                className: R.clanCardCenter,
                bannerUrl: (0, p.pY)(H[4].id, H[4].bannerHash)
              })
            })
          })
        })
      }), (0, i.jsx)(r.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...K,
          ...Y
        },
        children: (0, i.jsx)(C.xV, {
          clan: H[2],
          className: R.clanCardInnerRight
        })
      }), (0, i.jsx)(r.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...q,
          ...Y
        },
        children: (0, i.jsx)(C.xV, {
          clan: H[3],
          className: R.clanCardOuterRight
        })
      })]
    }), (0, i.jsx)("div", {
      className: R.upsellCtaContainer,
      children: (0, i.jsx)(y, {
        selectedGuildId: x,
        setSelectedGuildId: M,
        eligibleGuilds: t,
        onButtonClick: w,
        buttonText: J,
        hasCompletedUpsell: o,
        isBrowseButtonVisible: a
      })
    }), (0, i.jsx)("div", {
      className: R.joinWFSContainer,
      children: (0, i.jsx)("div", {
        className: R.joinWFS,
        children: (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: ee
          })
        })
      })
    })]
  })
})