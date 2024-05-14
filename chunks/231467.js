"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return M
  },
  ClanDiscoveryCardView: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("442837"),
  u = n("835473"),
  d = n("970606"),
  _ = n("905362"),
  c = n("603368"),
  E = n("353093"),
  I = n("169559"),
  T = n("114487"),
  f = n("550271"),
  S = n("175557"),
  h = n("937111"),
  A = n("703656"),
  m = n("271383"),
  N = n("594174"),
  p = n("768581"),
  O = n("524989"),
  C = n("981631"),
  R = n("308083"),
  g = n("689938"),
  L = n("449729");

function v(e) {
  let {
    clan: t
  } = e, {
    wildcardDescriptors: n,
    branding: {
      primaryColor: a
    }
  } = t, s = n.filter(e => e !== R.EMPTY_WILDCARD).join(", "), l = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), u = (0, c.getAccessibleClanColor)(a, l.hex()), d = r.useRef(null), [_, E] = r.useState(!1);
  if (r.useEffect(() => {
      let e = d.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let I = null != u ? {
    color: u.css()
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
      shouldShow: _,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: I,
        className: L.wildCardText,
        ref: d,
        children: s
      })
    })]
  })
}

function D(e) {
  let {
    trait: t,
    isHighlighted: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(L.trait, {
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
    traits: t,
    traitsToHighlight: n,
    expanded: a
  } = e, s = r.useMemo(() => new Set(n), [n]);
  return a ? (0, i.jsx)("div", {
    className: L.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(D, {
      trait: e,
      isHighlighted: s.has(e)
    }, e))
  }) : (0, i.jsx)(O.default, {
    items: t,
    renderItem: e => (0, i.jsx)(D, {
      trait: e,
      isHighlighted: s.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
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
    }),
    maxLines: 2,
    className: L.traitsContainer
  })
}

function y(e) {
  let {
    games: t
  } = e, n = t.filter(e => null != e && null != e.icon), a = n.slice(0, 3), s = r.useMemo(() => {
    let e = n[3];
    if (null == e) return null;
    let t = e.getIconURL(24);
    if (null == t) return null;
    if (n.length > 4) {
      let r = n.slice(3).map(e => e.name),
        a = (0, E.formatSelectionList)(r);
      return (0, i.jsx)(o.Tooltip, {
        text: a,
        position: "bottom",
        children: n => (0, i.jsxs)("div", {
          ...n,
          className: L.cardFooterGame,
          children: [(0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: L.cardFooterGameImg
          }), (0, i.jsx)("div", {
            className: L.cardFooterOtherCount,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/medium",
              color: "always-white",
              children: "+".concat(r.length)
            })
          })]
        })
      })
    }
    return (0, i.jsx)(o.Tooltip, {
      text: e.name,
      position: "bottom",
      children: n => (0, i.jsx)("div", {
        ...n,
        className: L.cardFooterGame,
        children: (0, i.jsx)("img", {
          src: t,
          alt: e.name,
          className: L.cardFooterGameImg
        })
      })
    })
  }, [n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [a.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsx)(o.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: L.cardFooterGame,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: L.cardFooterGameImg
          })
        })
      }, e.id)
    }), s]
  })
}

function P(e) {
  var t, n;
  let {
    clan: r,
    bannerComponent: a,
    expanded: l,
    isMember: d,
    traitsToHighlight: _,
    className: c,
    showBrandingFooter: h = !1,
    renderBannerFromRaw: A = !1
  } = e, {
    tag: m,
    badge: N,
    branding: {
      primaryColor: O,
      secondaryColor: C
    },
    bannerHash: D
  } = r, P = (0, u.default)(r.games), U = (0, I.default)("clan_discovery_card"), b = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), G = null !== (t = p.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, w = (0, E.getClanBannerUrl)(r.id, D), B = null == a && null == w ? {
    background: "linear-gradient(90deg, ".concat(O, ", ").concat(C, ")")
  } : void 0, k = A ? (0, i.jsx)(S.default, {
    banner: r.banner,
    primaryTintColor: r.branding.primaryColor,
    secondaryTintColor: r.branding.secondaryColor,
    className: L.clanBannerPreview
  }) : null != a ? a : null != w ? (0, i.jsx)("img", {
    alt: g.default.Messages.CLAN_LOOK_BANNER,
    src: w,
    className: L.bannerImage
  }) : null;
  return (0, i.jsxs)("div", {
    className: s()(L.card, c),
    children: [(0, i.jsx)("div", {
      className: L.cardBrandingHeader,
      style: B,
      children: k
    }), (0, i.jsxs)("div", {
      className: L.cardContent,
      children: [(0, i.jsxs)("div", {
        className: L.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: L.cardNameAndTagWrapper,
          children: [(0, i.jsx)(T.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: G,
            iconSize: 64,
            className: L.clanIcon
          }), (0, i.jsx)("div", {
            className: L.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: g.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d && U,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: L.clanTagChiplet,
                children: [(0, i.jsx)(f.ClanBadge, {
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
            children: null !== (n = (0, R.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(v, {
            clan: r
          })]
        })]
      }), (0, i.jsx)("div", {
        className: L.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(M, {
        traits: (0, R.getSortedTraits)(r.traits, _),
        expanded: l,
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
            children: b
          })
        })
      }), (0, i.jsx)("div", {
        className: L.cardFooterGames,
        children: (0, i.jsx)(y, {
          games: P
        })
      })]
    }), h && (0, i.jsx)("div", {
      className: L.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(O, ", ").concat(C, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    style: t,
    ...n
  } = e, {
    clan: a,
    affinity: s,
    index: u,
    source: c
  } = n, E = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), I = (0, l.useStateFromStores)([m.default], () => m.default.isMember(a.id, null == E ? void 0 : E.id), [a, E]), T = r.useCallback(() => {
    let e = null != h.default.getRequest(a.id);
    if ((0, d.trackClanDiscoveryCardClicked)({
        guildId: a.id,
        isMember: I,
        hasJoinRequest: e,
        affinity: s,
        index: u
      }), I) {
      (0, A.transitionToGuild)(a.id);
      return
    }
    if (e) {
      (0, A.transitionTo)(C.Routes.GUILD_MEMBER_VERIFICATION(a.id));
      return
    }(0, _.openClanApplyFlow)(a.id, a, {
      source: c,
      location: C.AnalyticsLocations.CLAN_DISCOVERY_CARD
    })
  }, [a, I, s, u, c]);
  return (0, i.jsx)(o.Clickable, {
    onClick: T,
    className: L.clickableCard,
    style: t,
    children: (0, i.jsx)(P, {
      ...n,
      isMember: I,
      showBrandingFooter: !0
    })
  })
}