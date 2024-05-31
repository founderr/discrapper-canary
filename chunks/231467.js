"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return k
  },
  Wildcards: function() {
    return U
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("903788"),
  l = n("310665"),
  u = n("194565"),
  d = n("481060"),
  _ = n("442837"),
  c = n("239091"),
  E = n("835473"),
  I = n("970606"),
  T = n("905362"),
  f = n("603368"),
  S = n("353093"),
  h = n("169559"),
  A = n("114487"),
  m = n("214715"),
  N = n("550271"),
  p = n("246364"),
  O = n("937111"),
  C = n("703656"),
  R = n("271383"),
  g = n("594174"),
  L = n("778045"),
  v = n("355932"),
  D = n("981631"),
  M = n("308083"),
  y = n("689938"),
  P = n("449729");

function U(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== M.EMPTY_WILDCARD).join(", "), a = (0, d.useToken)(d.tokens.colors.BACKGROUND_FLOATING), o = (0, f.getAccessibleClanColor)(n, a.hex()), l = r.useRef(null), [u, _] = r.useState(!1);
  if (r.useEffect(() => {
      let e = l.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && _(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let c = null != o ? {
    color: o.css()
  } : void 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: P.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(d.Tooltip, {
      text: s,
      color: d.Tooltip.Colors.PRIMARY,
      shouldShow: u,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: c,
        className: P.wildCardText,
        ref: l,
        children: s
      })
    })]
  })
}

function b(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: P.cardContentDescriptionSection,
    children: (0, i.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: P.cardContentDescriptionSection,
    children: (0, i.jsx)(d.Text, {
      className: P.cardContentDescriptionCollapsed,
      variant: "text-xs/normal",
      color: "text-muted",
      lineClamp: 4,
      children: t
    })
  })
}

function G(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e, s = r.useMemo(() => null == n ? new Set : new Set(n), [n]), o = r.useCallback(e => (0, i.jsx)(m.default, {
    className: a()(P.thinTrait, {
      [P.selectedTrait]: s.has(e)
    }),
    text: e,
    selected: s.has(e)
  }, e), [s]);
  return (0, i.jsx)(v.default, {
    className: P.traitsContainer,
    items: t,
    renderItem: o,
    maxLines: 2,
    itemGapPx: 4
  })
}

function w(e) {
  let {
    hasPendingJoinRequest: t,
    atMaxMemberCapacity: n,
    isGuildMember: r
  } = e;
  if (t) return (0, i.jsxs)("div", {
    className: P.headerBadge,
    children: [(0, i.jsx)(l.HourglassIcon, {
      width: 12,
      height: 12
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.default.Messages.CLAN_CARD_BADGE_APPLIED
    })]
  });
  if (r) return (0, i.jsxs)("div", {
    className: P.headerBadge,
    children: [(0, i.jsx)(o.CircleCheckIcon, {
      width: 12,
      height: 12,
      color: d.tokens.colors.STATUS_POSITIVE
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.default.Messages.JOINED_GUILD
    })]
  });
  if (n) return (0, i.jsxs)("div", {
    className: P.headerBadge,
    children: [(0, i.jsx)(u.LockIcon, {
      width: 12,
      height: 12
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.default.Messages.FULL
    })]
  });
  return null
}

function k(e) {
  var t;
  let {
    clan: n,
    bannerComponent: s,
    expanded: o,
    isMember: l = !1,
    traitsToHighlight: u,
    prioritizedGameIds: _,
    className: c,
    showBrandingFooter: I = !1,
    bannerUrl: T,
    onlyAnimateIconOnHover: f = !1,
    hasPendingJoinRequest: m = !1,
    atMaxMemberCapacity: p = !1
  } = e, {
    tag: O,
    badge: C,
    branding: {
      primaryColor: R,
      secondaryColor: g
    },
    bannerHash: v
  } = n, D = (0, E.default)(n.games), k = (0, h.default)("clan_discovery_card"), [B, V] = r.useState(!1), x = r.useRef(null), [F, H] = r.useState(!1), Y = r.useCallback(() => {
    V(!0)
  }, []), j = r.useCallback(() => {
    V(!1)
  }, []), W = y.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), K = null != T ? T : (0, S.getClanBannerUrl)(n.id, v), z = null == s && null == K ? {
    background: "linear-gradient(90deg, ".concat(R, ", ").concat(g, ")")
  } : void 0, Z = null != s ? s : null != K ? (0, i.jsx)("img", {
    alt: y.default.Messages.CLAN_LOOK_BANNER,
    src: K,
    className: P.bannerImage
  }) : null, X = r.useMemo(() => (0, M.getSortedTraits)(n.traits, u), [n.traits, u]);
  return r.useEffect(() => {
    let e = x.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && H(e.offsetWidth < e.scrollWidth)
  }, []), (0, i.jsxs)("div", {
    className: a()(P.card, c, {
      [P.cardStaticHeight]: !o
    }),
    onMouseEnter: Y,
    onMouseLeave: j,
    children: [(0, i.jsxs)("div", {
      className: P.cardBrandingHeader,
      style: z,
      children: [Z, (0, i.jsx)(w, {
        hasPendingJoinRequest: m,
        atMaxMemberCapacity: p,
        isGuildMember: l
      })]
    }), (0, i.jsxs)("div", {
      className: P.cardContent,
      children: [(0, i.jsxs)("div", {
        className: P.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: P.cardNameAndTagWrapper,
          children: [(0, i.jsx)(A.ClanGuildIconSimple, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 64,
            className: P.clanIcon,
            animate: !f || B
          }), (0, i.jsx)("div", {
            className: P.clanTagChipletWrapper,
            children: (0, i.jsx)(d.Tooltip, {
              text: y.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !l && k,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: P.clanTagChiplet,
                children: [(0, i.jsx)(N.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: C.badgeKind,
                  primaryTintColor: C.primaryColor,
                  secondaryTintColor: C.secondaryColor
                }), (0, i.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: O
                })]
              })
            })
          })]
        }), (0, i.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: (0, i.jsx)(d.Tooltip, {
            text: n.name,
            color: d.Tooltip.Colors.PRIMARY,
            shouldShow: F,
            children: e => (0, i.jsx)("span", {
              ...e,
              ref: x,
              className: P.nameText,
              children: n.name
            })
          })
        }), (0, i.jsxs)("div", {
          className: P.clanInfoRow,
          children: [(0, i.jsx)(d.Text, {
            variant: "text-xxs/normal",
            className: P.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": y.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: P.clanInfoItem,
            children: null !== (t = (0, M.getPlaystyleTitle)(n.playstyle)) && void 0 !== t ? t : y.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(U, {
            wildcardDescriptors: n.wildcardDescriptors,
            primaryColor: n.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)(b, {
        description: n.description,
        expanded: o
      }), (0, i.jsx)(G, {
        traits: X,
        traitsToHighlight: u
      })]
    }), (0, i.jsxs)("div", {
      className: P.cardFooter,
      children: [(0, i.jsx)("div", {
        className: P.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: P.cardFooterMembers,
          children: (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: W
          })
        })
      }), (0, i.jsx)("div", {
        className: P.cardFooterGames,
        children: (0, i.jsx)(L.default, {
          games: D,
          prioritizedGameIds: _
        })
      })]
    }), I && (0, i.jsx)("div", {
      className: P.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(R, ", ").concat(g, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    style: t,
    prioritizedGameIds: s,
    ...a
  } = e, {
    clan: o,
    affinity: l,
    index: u,
    source: E
  } = a, f = (0, _.useStateFromStores)([g.default], () => g.default.getCurrentUser()), S = (0, _.useStateFromStores)([R.default], () => R.default.isMember(o.id, null == f ? void 0 : f.id), [o, f]), h = (0, _.useStateFromStores)([O.default], () => {
    var e;
    return (null === (e = O.default.getRequest(o.id)) || void 0 === e ? void 0 : e.applicationStatus) === p.GuildJoinRequestApplicationStatuses.SUBMITTED
  }), A = o.memberCount >= M.MAX_CLAN_MEMBERS, m = r.useCallback(() => {
    let e = null != O.default.getRequest(o.id);
    if ((0, I.trackClanDiscoveryCardClicked)({
        guildId: o.id,
        isMember: S,
        hasJoinRequest: e,
        affinity: l,
        index: u
      }), S) {
      (0, C.transitionToGuild)(o.id);
      return
    }
    if (e) {
      (0, C.transitionTo)(D.Routes.GUILD_MEMBER_VERIFICATION(o.id));
      return
    }(0, T.openClanApplyFlow)(o.id, o, {
      source: E,
      location: D.AnalyticsLocations.CLAN_DISCOVERY_CARD
    }, s)
  }, [o, S, l, u, E, s]), N = r.useCallback(e => {
    (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("5577").then(n.bind(n, "955120"));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: o.id
      })
    })
  }, [o.id]);
  return (0, i.jsx)(d.Clickable, {
    onClick: m,
    className: P.clickableCard,
    style: t,
    onContextMenu: N,
    children: (0, i.jsx)(k, {
      ...a,
      isMember: S,
      prioritizedGameIds: s,
      showBrandingFooter: !0,
      hasPendingJoinRequest: h,
      atMaxMemberCapacity: A
    })
  })
}