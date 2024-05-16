"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return D
  },
  ClanDiscoveryCardView: function() {
    return y
  }
}), n("47120"), n("733860");
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
    games: t,
    prioritizedGameIds: n
  } = e, a = t.filter(e => null != e && null != e.icon);
  if (null != n && n.size > 0) {
    for (let e = 0; e < a.length; e++)
      if (n.has(a[e].id)) {
        let t = a.splice(e, 1)[0];
        a.unshift(t)
      }
  }
  let s = a.slice(0, 3),
    l = r.useMemo(() => {
      let e = a[3];
      if (null == e) return null;
      let t = e.getIconURL(24);
      if (null == t) return null;
      if (a.length > 4) {
        let n = a.slice(3).map(e => e.name),
          r = (0, E.formatSelectionList)(n);
        return (0, i.jsx)(o.Tooltip, {
          text: r,
          position: "bottom",
          children: r => (0, i.jsxs)("div", {
            ...r,
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
                children: "+".concat(n.length)
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
    }, [a]);
  return (0, i.jsxs)(i.Fragment, {
    children: [s.map(e => {
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
    }), l]
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
    prioritizedGameIds: c,
    className: S,
    showBrandingFooter: h = !1,
    bannerUrl: A
  } = e, {
    tag: m,
    badge: p,
    branding: {
      primaryColor: O,
      secondaryColor: v
    },
    bannerHash: y
  } = r, P = (0, u.default)(r.games), U = (0, I.default)("clan_discovery_card"), b = R.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), G = null !== (t = N.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, w = null != A ? A : (0, E.getClanBannerUrl)(r.id, y), k = null == a && null == w ? {
    background: "linear-gradient(90deg, ".concat(O, ", ").concat(v, ")")
  } : void 0, B = null != a ? a : null != w ? (0, i.jsx)("img", {
    alt: R.default.Messages.CLAN_LOOK_BANNER,
    src: w,
    className: g.bannerImage
  }) : null;
  return (0, i.jsxs)("div", {
    className: s()(g.card, S),
    children: [(0, i.jsx)("div", {
      className: g.cardBrandingHeader,
      style: k,
      children: B
    }), (0, i.jsxs)("div", {
      className: g.cardContent,
      children: [(0, i.jsxs)("div", {
        className: g.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: g.cardNameAndTagWrapper,
          children: [(0, i.jsx)(T.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: G,
            iconSize: 64,
            className: g.clanIcon
          }), (0, i.jsx)("div", {
            className: g.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: R.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d && U,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: g.clanTagChiplet,
                children: [(0, i.jsx)(f.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: p.badgeKind,
                  primaryTintColor: p.primaryColor,
                  secondaryTintColor: p.secondaryColor
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
            children: b
          })
        })
      }), (0, i.jsx)("div", {
        className: g.cardFooterGames,
        children: (0, i.jsx)(M, {
          games: P,
          prioritizedGameIds: c
        })
      })]
    }), h && (0, i.jsx)("div", {
      className: g.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(O, ", ").concat(v, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    style: t,
    prioritizedGameIds: n,
    ...a
  } = e, {
    clan: s,
    affinity: u,
    index: c,
    source: E
  } = a, I = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), T = (0, l.useStateFromStores)([A.default], () => A.default.isMember(s.id, null == I ? void 0 : I.id), [s, I]), f = r.useCallback(() => {
    let e = null != S.default.getRequest(s.id);
    if ((0, d.trackClanDiscoveryCardClicked)({
        guildId: s.id,
        isMember: T,
        hasJoinRequest: e,
        affinity: u,
        index: c
      }), T) {
      (0, h.transitionToGuild)(s.id);
      return
    }
    if (e) {
      (0, h.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(s.id));
      return
    }(0, _.openClanApplyFlow)(s.id, s, {
      source: E,
      location: O.AnalyticsLocations.CLAN_DISCOVERY_CARD
    }, n)
  }, [s, T, u, c, E, n]);
  return (0, i.jsx)(o.Clickable, {
    onClick: f,
    className: g.clickableCard,
    style: t,
    children: (0, i.jsx)(y, {
      ...a,
      isMember: T,
      prioritizedGameIds: n,
      showBrandingFooter: !0
    })
  })
}