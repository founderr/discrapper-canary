"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return P
  },
  Wildcards: function() {
    return D
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
  S = n("214715"),
  h = n("550271"),
  A = n("937111"),
  m = n("703656"),
  N = n("271383"),
  p = n("594174"),
  O = n("778045"),
  C = n("524989"),
  R = n("981631"),
  g = n("308083"),
  L = n("689938"),
  v = n("449729");

function D(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== g.EMPTY_WILDCARD).join(", "), a = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), l = (0, E.getAccessibleClanColor)(n, a.hex()), u = r.useRef(null), [d, _] = r.useState(!1);
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
      className: v.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: s,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: d,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: c,
        className: v.wildCardText,
        ref: u,
        children: s
      })
    })]
  })
}

function M(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: v.cardContentDescriptionSection,
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: v.cardContentDescriptionSection,
    children: (0, i.jsx)(o.Text, {
      className: v.cardContentDescriptionCollapsed,
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
    traitsToHighlight: n
  } = e, s = r.useMemo(() => null == n ? new Set : new Set(n), [n]), l = r.useCallback(e => (0, i.jsx)(S.default, {
    className: a()(v.thinTrait, {
      [v.selectedTrait]: s.has(e)
    }),
    text: e,
    selected: s.has(e)
  }, e), [s]), u = r.useCallback(e => (0, i.jsx)(o.Tooltip, {
    text: (0, i.jsx)("div", {
      className: v.overflowTooltip,
      children: e.map(e => (0, i.jsx)(S.default, {
        text: e,
        className: v.thinTrait
      }, e))
    }),
    "aria-label": "overflow",
    children: t => (0, i.jsx)("div", {
      ...t,
      children: (0, i.jsx)(S.default, {
        text: L.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: e.length
        }),
        className: v.thinTrait
      })
    })
  }), []);
  return (0, i.jsx)(C.default, {
    items: t,
    renderItem: l,
    renderOverflow: u,
    maxLines: 2,
    className: v.traitsContainer,
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
    showBrandingFooter: S = !1,
    bannerUrl: A,
    onlyAnimateIconOnHover: m = !1
  } = e, {
    tag: N,
    badge: p,
    branding: {
      primaryColor: C,
      secondaryColor: R
    },
    bannerHash: P
  } = n, U = (0, d.default)(n.games), b = (0, T.default)("clan_discovery_card"), [G, w] = r.useState(!1), k = r.useCallback(() => {
    w(!0)
  }, []), B = r.useCallback(() => {
    w(!1)
  }, []), V = L.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), x = null != A ? A : (0, I.getClanBannerUrl)(n.id, P), F = null == s && null == x ? {
    background: "linear-gradient(90deg, ".concat(C, ", ").concat(R, ")")
  } : void 0, H = null != s ? s : null != x ? (0, i.jsx)("img", {
    alt: L.default.Messages.CLAN_LOOK_BANNER,
    src: x,
    className: v.bannerImage
  }) : null, Y = r.useMemo(() => (0, g.getSortedTraits)(n.traits, _), [n.traits, _]);
  return (0, i.jsxs)("div", {
    className: a()(v.card, E, {
      [v.cardStaticHeight]: !l
    }),
    onMouseEnter: k,
    onMouseLeave: B,
    children: [(0, i.jsx)("div", {
      className: v.cardBrandingHeader,
      style: F,
      children: H
    }), (0, i.jsxs)("div", {
      className: v.cardContent,
      children: [(0, i.jsxs)("div", {
        className: v.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: v.cardNameAndTagWrapper,
          children: [(0, i.jsx)(f.ClanGuildIconSimple, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 64,
            className: v.clanIcon,
            animate: !m || G
          }), (0, i.jsx)("div", {
            className: v.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: L.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !u && b,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: v.clanTagChiplet,
                children: [(0, i.jsx)(h.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: p.badgeKind,
                  primaryTintColor: p.primaryColor,
                  secondaryTintColor: p.secondaryColor
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
          className: v.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: v.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": L.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: v.clanInfoItem,
            children: null !== (t = (0, g.getPlaystyleTitle)(n.playstyle)) && void 0 !== t ? t : L.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(D, {
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
      className: v.cardFooter,
      children: [(0, i.jsx)("div", {
        className: v.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: v.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: V
          })
        })
      }), (0, i.jsx)("div", {
        className: v.cardFooterGames,
        children: (0, i.jsx)(O.default, {
          games: U,
          prioritizedGameIds: c
        })
      })]
    }), S && (0, i.jsx)("div", {
      className: v.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(R, ")")
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
  } = a, f = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), S = (0, l.useStateFromStores)([N.default], () => N.default.isMember(d.id, null == f ? void 0 : f.id), [d, f]), h = r.useCallback(() => {
    let e = null != A.default.getRequest(d.id);
    if ((0, _.trackClanDiscoveryCardClicked)({
        guildId: d.id,
        isMember: S,
        hasJoinRequest: e,
        affinity: E,
        index: I
      }), S) {
      (0, m.transitionToGuild)(d.id);
      return
    }
    if (e) {
      (0, m.transitionTo)(R.Routes.GUILD_MEMBER_VERIFICATION(d.id));
      return
    }(0, c.openClanApplyFlow)(d.id, d, {
      source: T,
      location: R.AnalyticsLocations.CLAN_DISCOVERY_CARD
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
    onClick: h,
    className: v.clickableCard,
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