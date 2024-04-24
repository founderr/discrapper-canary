"use strict";
a.r(v), a.d(v, {
  ClanDiscoveryCardView: function() {
    return C
  }
});
var t = a("735250"),
  l = a("470079"),
  e = a("120356"),
  i = a.n(e),
  s = a("298433"),
  n = a("481060"),
  r = a("442837"),
  d = a("835473"),
  M = a("728257"),
  Z = a("114487"),
  H = a("550271"),
  V = a("703656"),
  f = a("271383"),
  o = a("594174"),
  c = a("768581"),
  x = a("524989"),
  p = a("308083"),
  u = a("689938"),
  j = a("563560");

function m(h) {
  let {
    clan: v
  } = h, {
    wildcardDescriptors: a,
    branding: {
      primaryColor: l
    }
  } = v, e = a.filter(h => h !== p.EMPTY_WILDCARD).join(", "), s = (0, M.useColorIsLowContrastAgainstClientBackground)(l);
  return (0, t.jsx)("div", {
    className: j.wildcards,
    children: (0, t.jsx)(n.Text, {
      variant: "text-xs/semibold",
      style: s ? {} : {
        color: l
      },
      lineClamp: 1,
      className: i()({
        [j.wildcardsOverride]: s
      }),
      children: e
    })
  })
}

function g(h) {
  let {
    traits: v,
    traitsToHighlight: a,
    expanded: l
  } = h;
  return l ? (0, t.jsx)("div", {
    className: j.expandedTraitsContainer,
    children: v.map(h => (0, t.jsx)("div", {
      className: i()(j.trait, {
        [j.highlightedTrait]: (null != a ? a : []).includes(h)
      }),
      children: (0, t.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: h
      })
    }, h))
  }) : (0, t.jsx)(x.default, {
    items: v,
    renderItem: h => (0, t.jsx)("div", {
      className: i()(j.trait, {
        [j.highlightedTrait]: (null != a ? a : []).includes(h)
      }),
      children: (0, t.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: h
      })
    }, h),
    renderOverflow: h => (0, t.jsx)(n.Tooltip, {
      text: (0, t.jsx)("div", {
        className: j.overflowTooltip,
        children: h.map(h => (0, t.jsx)("div", {
          className: j.trait,
          children: h
        }, h))
      }),
      "aria-label": "overflow",
      children: v => (0, t.jsx)("div", {
        ...v,
        className: j.trait,
        children: (0, t.jsx)(n.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: u.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: h.length
          })
        })
      })
    }),
    maxLines: 2,
    className: j.traitsContainer
  })
}

function C(h) {
  var v, a;
  let {
    clan: l,
    expanded: e,
    affinity: r,
    isMember: M,
    traitsToHighlight: V,
    className: f
  } = h, {
    tag: o,
    badge: x,
    branding: {
      primaryColor: C,
      secondaryColor: w
    }
  } = l, b = (0, d.default)(l.games), T = u.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: l.memberCount
  }), B = null !== (v = c.default.getGuildIconURL({
    id: l.id,
    icon: l.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== v ? v : void 0;
  return (0, t.jsxs)("div", {
    className: i()(j.card, f),
    children: [(0, t.jsx)("div", {
      className: j.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(w, ")")
      },
      children: (0, t.jsx)(H.ClanBadge, {
        width: 32,
        height: 32,
        className: j.clanBadge,
        badge: x.badgeKind,
        primaryTintColor: x.primaryColor,
        secondaryTintColor: x.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: j.cardContent,
      children: [(0, t.jsxs)("div", {
        className: j.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: j.cardNameAndTagWrapper,
          children: [(0, t.jsx)(Z.ClanGuildIconSimple, {
            guildName: l.name,
            guildIconURL: B,
            iconSize: 64,
            className: j.clanIcon
          }), (0, t.jsx)("div", {
            className: j.clanTagChipletWrapper,
            children: (0, t.jsx)(n.Tooltip, {
              text: u.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              children: h => (0, t.jsxs)("div", {
                ...h,
                className: j.clanTagChiplet,
                children: [(0, t.jsx)(H.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: x.badgeKind,
                  primaryTintColor: x.primaryColor,
                  secondaryTintColor: x.secondaryColor
                }), (0, t.jsx)(n.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: o
                })]
              })
            })
          })]
        }), (0, t.jsx)(n.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: l.name
        }), (0, t.jsxs)("div", {
          className: j.clanInfoRow,
          children: [(0, t.jsx)(n.Text, {
            variant: "text-xxs/normal",
            className: j.clanInfoItem,
            children: (0, t.jsx)("span", {
              role: "img",
              "aria-label": u.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, t.jsx)(n.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: j.clanInfoItem,
            children: null !== (a = (0, p.getPlaystyleTitle)(l.playstyle)) && void 0 !== a ? a : u.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, t.jsx)(n.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: j.clanInfoItem,
            children: "\xb7"
          }), (0, t.jsx)(m, {
            clan: l
          })]
        })]
      }), (0, t.jsx)("div", {
        className: j.cardContentDescriptionSection,
        children: (0, t.jsx)(n.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: l.description
        })
      }), (0, t.jsx)(g, {
        traits: (0, p.getSortedTraits)(l.traits, V),
        expanded: e,
        traitsToHighlight: V
      })]
    }), (0, t.jsxs)("div", {
      className: j.cardFooter,
      children: [(0, t.jsx)("div", {
        className: j.cardFooterInfo,
        children: (0, t.jsxs)("div", {
          className: j.cardFooterMembers,
          children: [(0, t.jsx)(s.GroupIcon, {
            className: j.cardFooterMembersIcon,
            color: "currentColor"
          }), (0, t.jsx)(n.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: T
          })]
        })
      }), (0, t.jsx)("div", {
        className: j.cardFooterGames,
        children: b.map(h => {
          if (null == h) return null;
          let v = h.getIconURL(24);
          return null == v ? null : (0, t.jsx)(n.Tooltip, {
            text: h.name,
            position: "bottom",
            children: a => (0, t.jsx)("div", {
              ...a,
              className: j.cardFooterGame,
              children: (0, t.jsx)("img", {
                src: v,
                alt: h.name,
                className: j.cardFooterGameImg
              })
            })
          }, h.id)
        })
      })]
    }), null != r ? (0, t.jsxs)("div", {
      className: j.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(w, ")")
      },
      children: [(0, t.jsx)(n.Text, {
        variant: "text-xxs/normal",
        children: r
      }), (0, t.jsx)(n.Text, {
        variant: "text-xxs/normal",
        children: M ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
v.default = function(h) {
  let {
    clan: v
  } = h, e = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), i = (0, r.useStateFromStores)([f.default], () => f.default.isMember(v.id, null == e ? void 0 : e.id), [v, e]), s = l.useCallback(() => {
    if (i) {
      (0, V.transitionToGuild)(v.id);
      return
    }(0, n.openModalLazy)(async () => {
      let {
        default: h
      } = await Promise.all([a.e("99387"), a.e("81319")]).then(a.bind(a, "767593"));
      return a => (0, t.jsx)(h, {
        ...a,
        clan: v
      })
    })
  }, [v, i]);
  return (0, t.jsx)(n.Clickable, {
    onClick: s,
    className: j.clickableCard,
    children: (0, t.jsx)(C, {
      ...h,
      isMember: i
    })
  })
}