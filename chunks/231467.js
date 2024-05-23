"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return y
  },
  ClanDiscoveryCardView: function() {
    return P
  },
  Wildcards: function() {
    return v
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("442837"),
  u = n("239091"),
  d = n("835473"),
  _ = n("970606"),
  c = n("905362"),
  E = n("603368"),
  I = n("353093"),
  T = n("169559"),
  f = n("114487"),
  S = n("550271"),
  h = n("937111"),
  A = n("703656"),
  m = n("271383"),
  N = n("594174"),
  p = n("778045"),
  O = n("524989"),
  C = n("981631"),
  R = n("308083"),
  g = n("689938"),
  L = n("449729");

function v(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== R.EMPTY_WILDCARD).join(", "), a = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), l = (0, E.getAccessibleClanColor)(n, a.hex()), u = r.useRef(null), [d, _] = r.useState(!1);
  if (r.useEffect(() => {
      let e = u.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && _(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let c = null != l ? {
    color: l.css()
  } : void 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: L.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: s,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: d,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: c,
        className: L.wildCardText,
        ref: u,
        children: s
      })
    })]
  })
}

function D(e) {
  let {
    trait: t,
    isHighlighted: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: a()(r, L.trait, {
      [L.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
      children: t
    })
  })
}

function M(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: L.cardContentDescriptionSection,
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: L.cardContentDescriptionSection,
    children: (0, i.jsx)(o.Text, {
      className: L.cardContentDescriptionCollapsed,
      variant: "text-xs/normal",
      color: "text-muted",
      lineClamp: 4,
      children: t
    })
  })
}

function y(e) {
  let {
    traits: t,
    traitsToHighlight: n,
    expanded: s,
    traitClassName: a
  } = e, l = r.useMemo(() => new Set(n), [n]), u = r.useCallback(e => (0, i.jsx)(D, {
    trait: e,
    isHighlighted: l.has(e)
  }, e), [l]), d = r.useCallback(e => (0, i.jsx)(o.Tooltip, {
    text: (0, i.jsx)("div", {
      className: L.overflowTooltip,
      children: e.map(e => (0, i.jsx)("div", {
        className: L.trait,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          lineClamp: 1,
          children: e
        })
      }, e))
    }),
    "aria-label": "overflow",
    children: t => (0, i.jsx)("div", {
      ...t,
      className: L.trait,
      children: (0, i.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: g.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: e.length
        })
      })
    })
  }), []);
  return s ? (0, i.jsx)("div", {
    className: L.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(D, {
      className: a,
      trait: e,
      isHighlighted: l.has(e)
    }, e))
  }) : (0, i.jsx)(O.default, {
    items: t,
    renderItem: u,
    renderOverflow: d,
    maxLines: 2,
    className: L.traitsContainer,
    spacing: 4
  })
}

function P(e) {
  var t;
  let {
    clan: n,
    bannerComponent: s,
    expanded: l,
    isMember: u,
    traitsToHighlight: _,
    prioritizedGameIds: c,
    className: E,
    showBrandingFooter: h = !1,
    bannerUrl: A,
    onlyAnimateIconOnHover: m = !1
  } = e, {
    tag: N,
    badge: O,
    branding: {
      primaryColor: C,
      secondaryColor: D
    },
    bannerHash: P
  } = n, U = (0, d.default)(n.games), b = (0, T.default)("clan_discovery_card"), [G, w] = r.useState(!1), k = r.useCallback(() => {
    w(!0)
  }, []), B = r.useCallback(() => {
    w(!1)
  }, []), V = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), x = null != A ? A : (0, I.getClanBannerUrl)(n.id, P), F = null == s && null == x ? {
    background: "linear-gradient(90deg, ".concat(C, ", ").concat(D, ")")
  } : void 0, H = null != s ? s : null != x ? (0, i.jsx)("img", {
    alt: g.default.Messages.CLAN_LOOK_BANNER,
    src: x,
    className: L.bannerImage
  }) : null, Y = r.useMemo(() => (0, R.getSortedTraits)(n.traits, _), [n.traits, _]);
  return (0, i.jsxs)("div", {
    className: a()(L.card, E, {
      [L.cardStaticHeight]: !l
    }),
    onMouseEnter: k,
    onMouseLeave: B,
    children: [(0, i.jsx)("div", {
      className: L.cardBrandingHeader,
      style: F,
      children: H
    }), (0, i.jsxs)("div", {
      className: L.cardContent,
      children: [(0, i.jsxs)("div", {
        className: L.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: L.cardNameAndTagWrapper,
          children: [(0, i.jsx)(f.ClanGuildIconSimple, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 64,
            className: L.clanIcon,
            animate: !m || G
          }), (0, i.jsx)("div", {
            className: L.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: g.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !u && b,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: L.clanTagChiplet,
                children: [(0, i.jsx)(S.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: O.badgeKind,
                  primaryTintColor: O.primaryColor,
                  secondaryTintColor: O.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: N
                })]
              })
            })
          })]
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: n.name
        }), (0, i.jsxs)("div", {
          className: L.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: L.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: L.clanInfoItem,
            children: null !== (t = (0, R.getPlaystyleTitle)(n.playstyle)) && void 0 !== t ? t : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(v, {
            wildcardDescriptors: n.wildcardDescriptors,
            primaryColor: n.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)(M, {
        description: n.description,
        expanded: l
      }), (0, i.jsx)(y, {
        traits: Y,
        traitsToHighlight: _
      })]
    }), (0, i.jsxs)("div", {
      className: L.cardFooter,
      children: [(0, i.jsx)("div", {
        className: L.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: L.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: V
          })
        })
      }), (0, i.jsx)("div", {
        className: L.cardFooterGames,
        children: (0, i.jsx)(p.default, {
          games: U,
          prioritizedGameIds: c
        })
      })]
    }), h && (0, i.jsx)("div", {
      className: L.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(D, ")")
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
    clan: d,
    affinity: E,
    index: I,
    source: T
  } = a, f = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), S = (0, l.useStateFromStores)([m.default], () => m.default.isMember(d.id, null == f ? void 0 : f.id), [d, f]), p = r.useCallback(() => {
    let e = null != h.default.getRequest(d.id);
    if ((0, _.trackClanDiscoveryCardClicked)({
        guildId: d.id,
        isMember: S,
        hasJoinRequest: e,
        affinity: E,
        index: I
      }), S) {
      (0, A.transitionToGuild)(d.id);
      return
    }
    if (e) {
      (0, A.transitionTo)(C.Routes.GUILD_MEMBER_VERIFICATION(d.id));
      return
    }(0, c.openClanApplyFlow)(d.id, d, {
      source: T,
      location: C.AnalyticsLocations.CLAN_DISCOVERY_CARD
    }, s)
  }, [d, S, E, I, T, s]), O = r.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("5577").then(n.bind(n, "955120"));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: d.id
      })
    })
  }, [d.id]);
  return (0, i.jsx)(o.Clickable, {
    onClick: p,
    className: L.clickableCard,
    style: t,
    onContextMenu: O,
    children: (0, i.jsx)(P, {
      ...a,
      isMember: S,
      prioritizedGameIds: s,
      showBrandingFooter: !0
    })
  })
}