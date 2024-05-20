"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return y
  },
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
  S = n("550271"),
  h = n("937111"),
  A = n("703656"),
  m = n("271383"),
  N = n("594174"),
  p = n("768581"),
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
    trait: t,
    isHighlighted: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: a()(r, v.trait, {
      [v.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
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
  } = e, l = r.useMemo(() => new Set(n), [n]);
  return s ? (0, i.jsx)("div", {
    className: v.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(M, {
      className: a,
      trait: e,
      isHighlighted: l.has(e)
    }, e))
  }) : (0, i.jsx)(C.default, {
    items: t,
    renderItem: e => (0, i.jsx)(M, {
      trait: e,
      isHighlighted: l.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
      text: (0, i.jsx)("div", {
        className: v.overflowTooltip,
        children: e.map(e => (0, i.jsx)("div", {
          className: v.trait,
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
        className: v.trait,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: L.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: v.traitsContainer
  })
}

function P(e) {
  var t, n;
  let {
    clan: r,
    bannerComponent: s,
    expanded: l,
    isMember: u,
    traitsToHighlight: _,
    prioritizedGameIds: c,
    className: E,
    showBrandingFooter: h = !1,
    bannerUrl: A
  } = e, {
    tag: m,
    badge: N,
    branding: {
      primaryColor: C,
      secondaryColor: R
    },
    bannerHash: M
  } = r, P = (0, d.default)(r.games), U = (0, T.default)("clan_discovery_card"), b = L.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), G = null !== (t = p.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, w = null != A ? A : (0, I.getClanBannerUrl)(r.id, M), k = null == s && null == w ? {
    background: "linear-gradient(90deg, ".concat(C, ", ").concat(R, ")")
  } : void 0, B = null != s ? s : null != w ? (0, i.jsx)("img", {
    alt: L.default.Messages.CLAN_LOOK_BANNER,
    src: w,
    className: v.bannerImage
  }) : null;
  return (0, i.jsxs)("div", {
    className: a()(v.card, E),
    children: [(0, i.jsx)("div", {
      className: v.cardBrandingHeader,
      style: k,
      children: B
    }), (0, i.jsxs)("div", {
      className: v.cardContent,
      children: [(0, i.jsxs)("div", {
        className: v.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: v.cardNameAndTagWrapper,
          children: [(0, i.jsx)(f.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: G,
            iconSize: 64,
            className: v.clanIcon
          }), (0, i.jsx)("div", {
            className: v.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: L.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !u && U,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: v.clanTagChiplet,
                children: [(0, i.jsx)(S.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: N.badgeKind,
                  primaryTintColor: N.primaryColor,
                  secondaryTintColor: N.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: m
                })]
              })
            })
          })]
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: r.name
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
            children: null !== (n = (0, g.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : L.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(D, {
            wildcardDescriptors: r.wildcardDescriptors,
            primaryColor: r.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)("div", {
        className: v.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(y, {
        traits: (0, g.getSortedTraits)(r.traits, _),
        expanded: l,
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
            children: b
          })
        })
      }), (0, i.jsx)("div", {
        className: v.cardFooterGames,
        children: (0, i.jsx)(O.default, {
          games: P,
          prioritizedGameIds: c
        })
      })]
    }), h && (0, i.jsx)("div", {
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
      (0, A.transitionTo)(R.Routes.GUILD_MEMBER_VERIFICATION(d.id));
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
    onClick: p,
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