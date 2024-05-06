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
  d = n("905362"),
  _ = n("676327"),
  c = n("353093"),
  E = n("114487"),
  I = n("550271"),
  T = n("175557"),
  f = n("937111"),
  S = n("703656"),
  h = n("271383"),
  A = n("594174"),
  m = n("626135"),
  N = n("768581"),
  p = n("524989"),
  O = n("981631"),
  R = n("308083"),
  C = n("689938"),
  g = n("228706");

function L(e) {
  let {
    clan: t
  } = e, {
    wildcardDescriptors: n,
    branding: {
      primaryColor: a
    }
  } = t, s = n.filter(e => e !== R.EMPTY_WILDCARD).join(", "), l = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), u = (0, _.getAccessibleClanColor)(a, l.hex()), d = r.useRef(null), [c, E] = r.useState(!1);
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
      shouldShow: c,
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
          children: C.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
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
        a = (0, c.formatSelectionList)(r);
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
    showBrandingFooter: f = !1
  } = e, {
    tag: S,
    badge: h,
    branding: {
      primaryColor: A,
      secondaryColor: m
    },
    banner: p
  } = r, O = (0, u.default)(r.games), v = C.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), y = null !== (t = N.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0;
  return (0, i.jsxs)("div", {
    className: s()(g.card, c),
    children: [(0, i.jsx)("div", {
      className: g.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(m, ")")
      },
      children: null != a ? a : (0, i.jsx)(T.default, {
        banner: p,
        primaryTintColor: A,
        secondaryTintColor: m
      })
    }), (0, i.jsxs)("div", {
      className: g.cardContent,
      children: [(0, i.jsxs)("div", {
        className: g.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: g.cardNameAndTagWrapper,
          children: [(0, i.jsx)(E.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: y,
            iconSize: 64,
            className: g.clanIcon
          }), (0, i.jsx)("div", {
            className: g.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: C.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: g.clanTagChiplet,
                children: [(0, i.jsx)(I.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: h.badgeKind,
                  primaryTintColor: h.primaryColor,
                  secondaryTintColor: h.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: S
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
              "aria-label": C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: g.clanInfoItem,
            children: null !== (n = (0, R.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : C.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
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
        traits: (0, R.getSortedTraits)(r.traits, _),
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
            children: v
          })
        })
      }), (0, i.jsx)("div", {
        className: g.cardFooterGames,
        children: (0, i.jsx)(M, {
          games: O
        })
      })]
    }), f && (0, i.jsx)("div", {
      className: g.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(m, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    clan: t,
    affinity: n,
    index: a,
    source: s
  } = e, u = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), _ = (0, l.useStateFromStores)([h.default], () => h.default.isMember(t.id, null == u ? void 0 : u.id), [t, u]), c = r.useCallback(() => {
    let e = null != f.default.getRequest(t.id);
    if (m.default.track(O.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
        guild_id: t.id,
        is_member: _,
        has_join_request: e,
        affinity: n,
        index: a
      }), _) {
      (0, S.transitionToGuild)(t.id);
      return
    }
    if (e) {
      (0, S.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(t.id));
      return
    }(0, d.openClanApplyFlow)(t.id, t, {
      source: s,
      location: O.AnalyticsLocations.CLAN_DISCOVERY_CARD
    })
  }, [t, _, n, a, s]);
  return (0, i.jsx)(o.Clickable, {
    onClick: c,
    className: g.clickableCard,
    children: (0, i.jsx)(y, {
      ...e,
      isMember: _,
      showBrandingFooter: !0
    })
  })
}