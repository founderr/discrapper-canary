"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return D
  },
  ClanDiscoveryCardView: function() {
    return y
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
  S = n("937111"),
  h = n("703656"),
  A = n("271383"),
  m = n("594174"),
  N = n("768581"),
  p = n("524989"),
  O = n("981631"),
  C = n("308083"),
  R = n("689938"),
  g = n("449729");

function L(e) {
  let {
    clan: t
  } = e, {
    wildcardDescriptors: n,
    branding: {
      primaryColor: a
    }
  } = t, s = n.filter(e => e !== C.EMPTY_WILDCARD).join(", "), l = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), u = (0, c.getAccessibleClanColor)(a, l.hex()), d = r.useRef(null), [_, E] = r.useState(!1);
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
      className: g.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: s,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: _,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: I,
        className: g.wildCardText,
        ref: d,
        children: s
      })
    })]
  })
}

function v(e) {
  let {
    trait: t,
    isHighlighted: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(g.trait, {
      [g.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
      children: t
    })
  })
}

function D(e) {
  let {
    traits: t,
    traitsToHighlight: n,
    expanded: a
  } = e, s = r.useMemo(() => new Set(n), [n]);
  return a ? (0, i.jsx)("div", {
    className: g.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(v, {
      trait: e,
      isHighlighted: s.has(e)
    }, e))
  }) : (0, i.jsx)(p.default, {
    items: t,
    renderItem: e => (0, i.jsx)(v, {
      trait: e,
      isHighlighted: s.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
      text: (0, i.jsx)("div", {
        className: g.overflowTooltip,
        children: e.map(e => (0, i.jsx)("div", {
          className: g.trait,
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
        className: g.trait,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: R.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: g.traitsContainer
  })
}

function M(e) {
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
          className: g.cardFooterGame,
          children: [(0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: g.cardFooterGameImg
          }), (0, i.jsx)("div", {
            className: g.cardFooterOtherCount,
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
        className: g.cardFooterGame,
        children: (0, i.jsx)("img", {
          src: t,
          alt: e.name,
          className: g.cardFooterGameImg
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
          className: g.cardFooterGame,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: g.cardFooterGameImg
          })
        })
      }, e.id)
    }), s]
  })
}

function y(e) {
  var t, n;
  let {
    clan: r,
    bannerComponent: a,
    expanded: l,
    isMember: d,
    traitsToHighlight: _,
    className: c,
    showBrandingFooter: S = !1
  } = e, {
    tag: h,
    badge: A,
    branding: {
      primaryColor: m,
      secondaryColor: p
    },
    bannerHash: O
  } = r, v = (0, u.default)(r.games), y = (0, I.default)("clan_discovery_card"), P = R.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), U = null !== (t = N.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, b = (0, E.getClanBannerUrl)(r.id, O), G = null == a && null == b ? {
    background: "linear-gradient(90deg, ".concat(m, ", ").concat(p, ")")
  } : void 0;
  return (0, i.jsxs)("div", {
    className: s()(g.card, c),
    children: [(0, i.jsx)("div", {
      className: g.cardBrandingHeader,
      style: G,
      children: null != a ? a : null != b ? (0, i.jsx)("img", {
        alt: R.default.Messages.CLAN_LOOK_BANNER,
        src: b,
        className: g.bannerImage
      }) : null
    }), (0, i.jsxs)("div", {
      className: g.cardContent,
      children: [(0, i.jsxs)("div", {
        className: g.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: g.cardNameAndTagWrapper,
          children: [(0, i.jsx)(T.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: U,
            iconSize: 64,
            className: g.clanIcon
          }), (0, i.jsx)("div", {
            className: g.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: R.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d && y,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: g.clanTagChiplet,
                children: [(0, i.jsx)(f.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: A.badgeKind,
                  primaryTintColor: A.primaryColor,
                  secondaryTintColor: A.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: h
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
          className: g.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: g.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": R.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: g.clanInfoItem,
            children: null !== (n = (0, C.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : R.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(L, {
            clan: r
          })]
        })]
      }), (0, i.jsx)("div", {
        className: g.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(D, {
        traits: (0, C.getSortedTraits)(r.traits, _),
        expanded: l,
        traitsToHighlight: _
      })]
    }), (0, i.jsxs)("div", {
      className: g.cardFooter,
      children: [(0, i.jsx)("div", {
        className: g.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: g.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: P
          })
        })
      }), (0, i.jsx)("div", {
        className: g.cardFooterGames,
        children: (0, i.jsx)(M, {
          games: v
        })
      })]
    }), S && (0, i.jsx)("div", {
      className: g.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(m, ", ").concat(p, ")")
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
  } = n, E = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), I = (0, l.useStateFromStores)([A.default], () => A.default.isMember(a.id, null == E ? void 0 : E.id), [a, E]), T = r.useCallback(() => {
    let e = null != S.default.getRequest(a.id);
    if ((0, d.trackClanDiscoveryCardClicked)({
        guildId: a.id,
        isMember: I,
        hasJoinRequest: e,
        affinity: s,
        index: u
      }), I) {
      (0, h.transitionToGuild)(a.id);
      return
    }
    if (e) {
      (0, h.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(a.id));
      return
    }(0, _.openClanApplyFlow)(a.id, a, {
      source: c,
      location: O.AnalyticsLocations.CLAN_DISCOVERY_CARD
    })
  }, [a, I, s, u, c]);
  return (0, i.jsx)(o.Clickable, {
    onClick: T,
    className: g.clickableCard,
    style: t,
    children: (0, i.jsx)(y, {
      ...n,
      isMember: I,
      showBrandingFooter: !0
    })
  })
}