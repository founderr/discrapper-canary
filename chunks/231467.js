"use strict";
n.d(t, {
  cS: function() {
    return P
  },
  xV: function() {
    return G
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(442837),
  u = n(239091),
  _ = n(835473),
  c = n(970606),
  d = n(905362),
  E = n(603368),
  I = n(353093),
  T = n(169559),
  h = n(114487),
  f = n(214715),
  S = n(550271),
  A = n(246364),
  N = n(937111),
  m = n(703656),
  O = n(271383),
  R = n(594174),
  p = n(806519),
  g = n(778045),
  C = n(355932),
  v = n(981631),
  L = n(308083),
  D = n(689938),
  M = n(438222);

function P(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== L.U6).join(", "), o = (0, a.useToken)(a.tokens.colors.BACKGROUND_FLOATING), l = (0, E.pX)(n, o.hex()), u = r.useRef(null), [_, c] = r.useState(!1);
  if (r.useEffect(() => {
      let e = u.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && c(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let d = null != l ? {
    color: l.css()
  } : void 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: M.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(a.Tooltip, {
      text: s,
      color: a.Tooltip.Colors.PRIMARY,
      shouldShow: _,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: d,
        className: M.wildCardText,
        ref: u,
        children: s
      })
    })]
  })
}

function y(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: M.cardContentDescriptionSection,
    children: (0, i.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: M.cardContentDescriptionSection,
    children: (0, i.jsx)(a.Text, {
      className: M.cardContentDescriptionCollapsed,
      variant: "text-xs/normal",
      color: "text-muted",
      lineClamp: 4,
      children: t
    })
  })
}

function U(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e, s = r.useMemo(() => null == n ? new Set : new Set(n), [n]), a = r.useCallback(e => (0, i.jsx)(f.Z, {
    className: o()(M.thinTrait, {
      [M.selectedTrait]: s.has(e)
    }),
    text: e,
    selected: s.has(e)
  }, e), [s]);
  return (0, i.jsx)(C.Z, {
    className: M.traitsContainer,
    items: t,
    renderItem: a,
    maxLines: 2,
    itemGapPx: 4
  })
}

function b(e) {
  let {
    hasPendingJoinRequest: t,
    atMaxMemberCapacity: n,
    isGuildMember: r
  } = e;
  if (t) return (0, i.jsxs)("div", {
    className: M.headerBadge,
    children: [(0, i.jsx)(a.HourglassIcon, {
      size: "xxs"
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: D.Z.Messages.CLAN_CARD_BADGE_APPLIED
    })]
  });
  if (r) return (0, i.jsxs)("div", {
    className: M.headerBadge,
    children: [(0, i.jsx)(a.CircleCheckIcon, {
      size: "xxs",
      color: a.tokens.colors.STATUS_POSITIVE
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: D.Z.Messages.JOINED_GUILD
    })]
  });
  if (n) return (0, i.jsxs)("div", {
    className: M.headerBadge,
    children: [(0, i.jsx)(a.LockIcon, {
      size: "xxs"
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: D.Z.Messages.FULL
    })]
  });
  return null
}

function G(e) {
  var t;
  let {
    clan: n,
    bannerComponent: s,
    expanded: l,
    isMember: u = !1,
    traitsToHighlight: c,
    prioritizedGameIds: d,
    className: E,
    showBrandingFooter: f = !1,
    bannerUrl: A,
    onlyAnimateIconOnHover: N = !1,
    hasPendingJoinRequest: m = !1,
    atMaxMemberCapacity: O = !1
  } = e, {
    tag: R,
    badge: C,
    branding: {
      primaryColor: v,
      secondaryColor: G
    },
    bannerHash: w
  } = n, B = (0, _.Z)(n.games), x = (0, T.Z)("clan_discovery_card"), [k, V] = r.useState(!1), Z = r.useRef(null), [H, F] = r.useState(!1), Y = r.useCallback(() => {
    V(!0)
  }, []), j = r.useCallback(() => {
    V(!1)
  }, []), W = D.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), K = null != A ? A : (0, I.pY)(n.id, w), z = null == s && null == K ? {
    background: "linear-gradient(90deg, ".concat(v, ", ").concat(G, ")")
  } : void 0, q = null != s ? s : null != K ? (0, i.jsx)("img", {
    alt: D.Z.Messages.CLAN_LOOK_BANNER,
    src: K,
    className: M.bannerImage
  }) : null, X = r.useMemo(() => (0, L.HR)(n.traits, c), [n.traits, c]);
  return r.useEffect(() => {
    let e = Z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && F(e.offsetWidth < e.scrollWidth)
  }, []), (0, i.jsxs)("div", {
    className: o()(M.card, E, {
      [M.cardStaticHeight]: !l
    }),
    onMouseEnter: Y,
    onMouseLeave: j,
    children: [(0, i.jsxs)("div", {
      className: M.cardBrandingHeader,
      style: z,
      children: [q, (0, i.jsx)(b, {
        hasPendingJoinRequest: m,
        atMaxMemberCapacity: O,
        isGuildMember: u
      })]
    }), (0, i.jsxs)("div", {
      className: M.cardContent,
      children: [(0, i.jsxs)("div", {
        className: M.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: M.cardNameAndTagWrapper,
          children: [(0, i.jsx)(p.ZP, {
            mask: p.QS.CLAN_ICON,
            width: 70,
            height: 70,
            className: M.clanIconMask,
            children: (0, i.jsx)("div", {
              className: M.clanIconInner,
              children: (0, i.jsx)(h.b, {
                guildId: n.id,
                guildName: n.name,
                guildIcon: n.icon,
                iconSize: 64,
                animate: !N || k
              })
            })
          }), (0, i.jsx)("div", {
            className: M.clanTagChipletWrapper,
            children: (0, i.jsx)(a.Tooltip, {
              text: D.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !u && x,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: M.clanTagChiplet,
                children: [(0, i.jsx)(S.A, {
                  width: 16,
                  height: 16,
                  badge: C.badgeKind,
                  primaryTintColor: C.primaryColor,
                  secondaryTintColor: C.secondaryColor
                }), (0, i.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: R
                })]
              })
            })
          })]
        }), (0, i.jsx)(a.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: (0, i.jsx)(a.Tooltip, {
            text: n.name,
            color: a.Tooltip.Colors.PRIMARY,
            shouldShow: H,
            children: e => (0, i.jsx)("span", {
              ...e,
              ref: Z,
              className: M.nameText,
              children: n.name
            })
          })
        }), (0, i.jsxs)("div", {
          className: M.clanInfoRow,
          children: [(0, i.jsx)(a.Text, {
            variant: "text-xxs/normal",
            className: M.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": D.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: M.clanInfoItem,
            children: null !== (t = (0, L.mv)(n.playstyle)) && void 0 !== t ? t : D.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(P, {
            wildcardDescriptors: n.wildcardDescriptors,
            primaryColor: n.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)(y, {
        description: n.description,
        expanded: l
      }), (0, i.jsx)(U, {
        traits: X,
        traitsToHighlight: c
      })]
    }), (0, i.jsxs)("div", {
      className: M.cardFooter,
      children: [(0, i.jsx)("div", {
        className: M.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: M.cardFooterMembers,
          children: (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: W
          })
        })
      }), (0, i.jsx)("div", {
        className: M.cardFooterGames,
        children: (0, i.jsx)(g.Z, {
          games: B,
          prioritizedGameIds: d
        })
      })]
    }), f && (0, i.jsx)("div", {
      className: M.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(v, ", ").concat(G, ")")
      }
    })]
  })
}
t.ZP = 12633 == n.j ? function(e) {
  let {
    style: t,
    prioritizedGameIds: s,
    ...o
  } = e, {
    clan: _,
    affinity: E,
    index: I,
    source: T
  } = o, h = (0, l.e7)([R.default], () => R.default.getCurrentUser()), f = (0, l.e7)([O.ZP], () => O.ZP.isMember(_.id, null == h ? void 0 : h.id), [_, h]), S = (0, l.e7)([N.Z], () => {
    var e;
    return (null === (e = N.Z.getRequest(_.id)) || void 0 === e ? void 0 : e.applicationStatus) === A.wB.SUBMITTED
  }), p = _.memberCount >= L.Du, g = r.useCallback(() => {
    let e = null != N.Z.getRequest(_.id);
    if ((0, c.EK)({
        guildId: _.id,
        isMember: f,
        hasJoinRequest: e,
        affinity: E,
        index: I
      }), f) {
      (0, m.XU)(_.id);
      return
    }
    if (e) {
      (0, m.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(_.id));
      return
    }(0, d.q)(_.id, _, {
      source: T,
      location: v.Sbl.CLAN_DISCOVERY_CARD
    }, s)
  }, [_, f, E, I, T, s]), C = r.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5577").then(n.bind(n, 955120));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: _.id
      })
    })
  }, [_.id]);
  return (0, i.jsx)(a.Clickable, {
    onClick: g,
    className: M.clickableCard,
    style: t,
    onContextMenu: C,
    children: (0, i.jsx)(G, {
      ...o,
      isMember: f,
      prioritizedGameIds: s,
      showBrandingFooter: !0,
      hasPendingJoinRequest: S,
      atMaxMemberCapacity: p
    })
  })
} : null