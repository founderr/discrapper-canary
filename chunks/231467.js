"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return B
  },
  Wildcards: function() {
    return b
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
  L = n("806519"),
  v = n("778045"),
  D = n("355932"),
  M = n("981631"),
  y = n("308083"),
  P = n("689938"),
  U = n("449729");

function b(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== y.EMPTY_WILDCARD).join(", "), a = (0, d.useToken)(d.tokens.colors.BACKGROUND_FLOATING), o = (0, f.getAccessibleClanColor)(n, a.hex()), l = r.useRef(null), [u, _] = r.useState(!1);
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
      className: U.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(d.Tooltip, {
      text: s,
      color: d.Tooltip.Colors.PRIMARY,
      shouldShow: u,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: c,
        className: U.wildCardText,
        ref: l,
        children: s
      })
    })]
  })
}

function G(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: U.cardContentDescriptionSection,
    children: (0, i.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: U.cardContentDescriptionSection,
    children: (0, i.jsx)(d.Text, {
      className: U.cardContentDescriptionCollapsed,
      variant: "text-xs/normal",
      color: "text-muted",
      lineClamp: 4,
      children: t
    })
  })
}

function w(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e, s = r.useMemo(() => null == n ? new Set : new Set(n), [n]), o = r.useCallback(e => (0, i.jsx)(m.default, {
    className: a()(U.thinTrait, {
      [U.selectedTrait]: s.has(e)
    }),
    text: e,
    selected: s.has(e)
  }, e), [s]);
  return (0, i.jsx)(D.default, {
    className: U.traitsContainer,
    items: t,
    renderItem: o,
    maxLines: 2,
    itemGapPx: 4
  })
}

function k(e) {
  let {
    hasPendingJoinRequest: t,
    atMaxMemberCapacity: n,
    isGuildMember: r
  } = e;
  if (t) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(l.HourglassIcon, {
      width: 12,
      height: 12
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: P.default.Messages.CLAN_CARD_BADGE_APPLIED
    })]
  });
  if (r) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(o.CircleCheckIcon, {
      width: 12,
      height: 12,
      color: d.tokens.colors.STATUS_POSITIVE
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: P.default.Messages.JOINED_GUILD
    })]
  });
  if (n) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(u.LockIcon, {
      width: 12,
      height: 12
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: P.default.Messages.FULL
    })]
  });
  return null
}

function B(e) {
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
    bannerHash: D
  } = n, M = (0, E.default)(n.games), B = (0, h.default)("clan_discovery_card"), [V, x] = r.useState(!1), F = r.useRef(null), [H, Y] = r.useState(!1), j = r.useCallback(() => {
    x(!0)
  }, []), W = r.useCallback(() => {
    x(!1)
  }, []), K = P.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), z = null != T ? T : (0, S.getClanBannerUrl)(n.id, D), Z = null == s && null == z ? {
    background: "linear-gradient(90deg, ".concat(R, ", ").concat(g, ")")
  } : void 0, Q = null != s ? s : null != z ? (0, i.jsx)("img", {
    alt: P.default.Messages.CLAN_LOOK_BANNER,
    src: z,
    className: U.bannerImage
  }) : null, X = r.useMemo(() => (0, y.getSortedTraits)(n.traits, u), [n.traits, u]);
  return r.useEffect(() => {
    let e = F.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && Y(e.offsetWidth < e.scrollWidth)
  }, []), (0, i.jsxs)("div", {
    className: a()(U.card, c, {
      [U.cardStaticHeight]: !o
    }),
    onMouseEnter: j,
    onMouseLeave: W,
    children: [(0, i.jsxs)("div", {
      className: U.cardBrandingHeader,
      style: Z,
      children: [Q, (0, i.jsx)(k, {
        hasPendingJoinRequest: m,
        atMaxMemberCapacity: p,
        isGuildMember: l
      })]
    }), (0, i.jsxs)("div", {
      className: U.cardContent,
      children: [(0, i.jsxs)("div", {
        className: U.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: U.cardNameAndTagWrapper,
          children: [(0, i.jsx)(L.default, {
            mask: L.MaskIDs.CLAN_ICON,
            width: 70,
            height: 70,
            className: U.clanIconMask,
            children: (0, i.jsx)("div", {
              className: U.clanIconInner,
              children: (0, i.jsx)(A.ClanGuildIconSimple, {
                guildId: n.id,
                guildName: n.name,
                guildIcon: n.icon,
                iconSize: 64,
                animate: !f || V
              })
            })
          }), (0, i.jsx)("div", {
            className: U.clanTagChipletWrapper,
            children: (0, i.jsx)(d.Tooltip, {
              text: P.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !l && B,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: U.clanTagChiplet,
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
            shouldShow: H,
            children: e => (0, i.jsx)("span", {
              ...e,
              ref: F,
              className: U.nameText,
              children: n.name
            })
          })
        }), (0, i.jsxs)("div", {
          className: U.clanInfoRow,
          children: [(0, i.jsx)(d.Text, {
            variant: "text-xxs/normal",
            className: U.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": P.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: U.clanInfoItem,
            children: null !== (t = (0, y.getPlaystyleTitle)(n.playstyle)) && void 0 !== t ? t : P.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(b, {
            wildcardDescriptors: n.wildcardDescriptors,
            primaryColor: n.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)(G, {
        description: n.description,
        expanded: o
      }), (0, i.jsx)(w, {
        traits: X,
        traitsToHighlight: u
      })]
    }), (0, i.jsxs)("div", {
      className: U.cardFooter,
      children: [(0, i.jsx)("div", {
        className: U.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: U.cardFooterMembers,
          children: (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: K
          })
        })
      }), (0, i.jsx)("div", {
        className: U.cardFooterGames,
        children: (0, i.jsx)(v.default, {
          games: M,
          prioritizedGameIds: _
        })
      })]
    }), I && (0, i.jsx)("div", {
      className: U.cardBrandingFooter,
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
  }), A = o.memberCount >= y.MAX_CLAN_MEMBERS, m = r.useCallback(() => {
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
      (0, C.transitionTo)(M.Routes.GUILD_MEMBER_VERIFICATION(o.id));
      return
    }(0, T.openClanApplyFlow)(o.id, o, {
      source: E,
      location: M.AnalyticsLocations.CLAN_DISCOVERY_CARD
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
    className: U.clickableCard,
    style: t,
    onContextMenu: N,
    children: (0, i.jsx)(B, {
      ...a,
      isMember: S,
      prioritizedGameIds: s,
      showBrandingFooter: !0,
      hasPendingJoinRequest: h,
      atMaxMemberCapacity: A
    })
  })
}