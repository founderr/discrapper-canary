"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return v
  },
  ClanDiscoveryCardView: function() {
    return M
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
  c = n("676327"),
  E = n("353093"),
  I = n("114487"),
  T = n("550271"),
  f = n("937111"),
  S = n("703656"),
  h = n("271383"),
  A = n("594174"),
  m = n("768581"),
  N = n("524989"),
  p = n("981631"),
  O = n("308083"),
  C = n("689938"),
  R = n("228706");

function g(e) {
  let {
    clan: t
  } = e, {
    wildcardDescriptors: n,
    branding: {
      primaryColor: a
    }
  } = t, s = n.filter(e => e !== O.EMPTY_WILDCARD).join(", "), l = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), u = (0, c.getAccessibleClanColor)(a, l.hex()), d = r.useRef(null), [_, E] = r.useState(!1);
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
      className: R.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: s,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: _,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: I,
        className: R.wildCardText,
        ref: d,
        children: s
      })
    })]
  })
}

function L(e) {
  let {
    trait: t,
    isHighlighted: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(R.trait, {
      [R.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
      children: t
    })
  })
}

function v(e) {
  let {
    traits: t,
    traitsToHighlight: n,
    expanded: a
  } = e, s = r.useMemo(() => new Set(n), [n]);
  return a ? (0, i.jsx)("div", {
    className: R.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(L, {
      trait: e,
      isHighlighted: s.has(e)
    }, e))
  }) : (0, i.jsx)(N.default, {
    items: t,
    renderItem: e => (0, i.jsx)(L, {
      trait: e,
      isHighlighted: s.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
      text: (0, i.jsx)("div", {
        className: R.overflowTooltip,
        children: e.map(e => (0, i.jsx)("div", {
          className: R.trait,
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
        className: R.trait,
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
    className: R.traitsContainer
  })
}

function D(e) {
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
          className: R.cardFooterGame,
          children: [(0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: R.cardFooterGameImg
          }), (0, i.jsx)("div", {
            className: R.cardFooterOtherCount,
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
        className: R.cardFooterGame,
        children: (0, i.jsx)("img", {
          src: t,
          alt: e.name,
          className: R.cardFooterGameImg
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
          className: R.cardFooterGame,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: R.cardFooterGameImg
          })
        })
      }, e.id)
    }), s]
  })
}

function M(e) {
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
      secondaryColor: N
    },
    bannerHash: p
  } = r, L = (0, u.default)(r.games), M = C.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), y = null !== (t = m.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, P = (0, E.getClanBannerUrl)(r.id, p);
  return (0, i.jsxs)("div", {
    className: s()(R.card, c),
    children: [(0, i.jsx)("div", {
      className: R.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(N, ")")
      },
      children: null != a ? a : null != P ? (0, i.jsx)("img", {
        alt: C.default.Messages.CLAN_LOOK_BANNER,
        src: P,
        className: R.bannerImage
      }) : null
    }), (0, i.jsxs)("div", {
      className: R.cardContent,
      children: [(0, i.jsxs)("div", {
        className: R.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: R.cardNameAndTagWrapper,
          children: [(0, i.jsx)(I.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: y,
            iconSize: 64,
            className: R.clanIcon
          }), (0, i.jsx)("div", {
            className: R.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: C.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: R.clanTagChiplet,
                children: [(0, i.jsx)(T.ClanBadge, {
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
          className: R.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: R.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: R.clanInfoItem,
            children: null !== (n = (0, O.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : C.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(g, {
            clan: r
          })]
        })]
      }), (0, i.jsx)("div", {
        className: R.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(v, {
        traits: (0, O.getSortedTraits)(r.traits, _),
        expanded: l,
        traitsToHighlight: _
      })]
    }), (0, i.jsxs)("div", {
      className: R.cardFooter,
      children: [(0, i.jsx)("div", {
        className: R.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: R.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: M
          })
        })
      }), (0, i.jsx)("div", {
        className: R.cardFooterGames,
        children: (0, i.jsx)(D, {
          games: L
        })
      })]
    }), f && (0, i.jsx)("div", {
      className: R.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(N, ")")
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
  } = e, u = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), c = (0, l.useStateFromStores)([h.default], () => h.default.isMember(t.id, null == u ? void 0 : u.id), [t, u]), E = r.useCallback(() => {
    let e = null != f.default.getRequest(t.id);
    if ((0, d.trackClanDiscoveryCardClicked)({
        guildId: t.id,
        isMember: c,
        hasJoinRequest: e,
        affinity: n,
        index: a
      }), c) {
      (0, S.transitionToGuild)(t.id);
      return
    }
    if (e) {
      (0, S.transitionTo)(p.Routes.GUILD_MEMBER_VERIFICATION(t.id));
      return
    }(0, _.openClanApplyFlow)(t.id, t, {
      source: s,
      location: p.AnalyticsLocations.CLAN_DISCOVERY_CARD
    })
  }, [t, c, n, a, s]);
  return (0, i.jsx)(o.Clickable, {
    onClick: E,
    className: R.clickableCard,
    children: (0, i.jsx)(M, {
      ...e,
      isMember: c,
      showBrandingFooter: !0
    })
  })
}