"use strict";
l.r(a), l.d(a, {
  ClanDiscoveryCardView: function() {
    return E
  }
});
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("298433"),
  d = l("481060"),
  c = l("442837"),
  o = l("835473"),
  x = l("728257"),
  h = l("114487"),
  V = l("550271"),
  H = l("703656"),
  u = l("271383"),
  f = l("594174"),
  m = l("768581"),
  p = l("524989"),
  j = l("308083"),
  g = l("689938"),
  C = l("563560");

function v(e) {
  let {
    clan: a
  } = e, {
    wildcardDescriptors: l,
    branding: {
      primaryColor: i
    }
  } = a, n = l.filter(e => e !== j.EMPTY_WILDCARD).join(", "), r = (0, x.useColorIsLowContrastAgainstClientBackground)(i);
  return (0, t.jsx)("div", {
    className: C.wildcards,
    children: (0, t.jsx)(d.Text, {
      variant: "text-xs/semibold",
      style: r ? {} : {
        color: i
      },
      lineClamp: 1,
      className: s()({
        [C.wildcardsOverride]: r
      }),
      children: n
    })
  })
}

function M(e) {
  let {
    traits: a,
    traitsToHighlight: l,
    expanded: i
  } = e;
  return i ? (0, t.jsx)("div", {
    className: C.expandedTraitsContainer,
    children: a.map(e => (0, t.jsx)("div", {
      className: s()(C.trait, {
        [C.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e))
  }) : (0, t.jsx)(p.default, {
    items: a,
    renderItem: e => (0, t.jsx)("div", {
      className: s()(C.trait, {
        [C.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e),
    renderOverflow: e => (0, t.jsx)(d.Tooltip, {
      text: (0, t.jsx)("div", {
        className: C.overflowTooltip,
        children: e.map(e => (0, t.jsx)("div", {
          className: C.trait,
          children: e
        }, e))
      }),
      "aria-label": "overflow",
      children: a => (0, t.jsx)("div", {
        ...a,
        className: C.trait,
        children: (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: g.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: C.traitsContainer
  })
}

function E(e) {
  var a, l;
  let {
    clan: i,
    expanded: n,
    affinity: c,
    isMember: x,
    traitsToHighlight: H,
    className: u
  } = e, {
    tag: f,
    badge: p,
    branding: {
      primaryColor: E,
      secondaryColor: N
    }
  } = i, F = (0, o.default)(i.games), Z = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), _ = null !== (a = m.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: s()(C.card, u),
    children: [(0, t.jsx)("div", {
      className: C.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(N, ")")
      },
      children: (0, t.jsx)(V.ClanBadge, {
        width: 32,
        height: 32,
        className: C.clanBadge,
        badge: p.badgeKind,
        primaryTintColor: p.primaryColor,
        secondaryTintColor: p.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: C.cardContent,
      children: [(0, t.jsxs)("div", {
        className: C.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: C.cardNameAndTagWrapper,
          children: [(0, t.jsx)(h.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: _,
            iconSize: 64,
            className: C.clanIcon
          }), (0, t.jsx)("div", {
            className: C.clanTagChipletWrapper,
            children: (0, t.jsx)(d.Tooltip, {
              text: g.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              children: e => (0, t.jsxs)("div", {
                ...e,
                className: C.clanTagChiplet,
                children: [(0, t.jsx)(V.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: p.badgeKind,
                  primaryTintColor: p.primaryColor,
                  secondaryTintColor: p.secondaryColor
                }), (0, t.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: f
                })]
              })
            })
          })]
        }), (0, t.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: i.name
        }), (0, t.jsxs)("div", {
          className: C.clanInfoRow,
          children: [(0, t.jsx)(d.Text, {
            variant: "text-xxs/normal",
            className: C.clanInfoItem,
            children: (0, t.jsx)("span", {
              role: "img",
              "aria-label": g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: C.clanInfoItem,
            children: null !== (l = (0, j.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: C.clanInfoItem,
            children: "\xb7"
          }), (0, t.jsx)(v, {
            clan: i
          })]
        })]
      }), (0, t.jsx)("div", {
        className: C.cardContentDescriptionSection,
        children: (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(M, {
        traits: (0, j.getSortedTraits)(i.traits, H),
        expanded: n,
        traitsToHighlight: H
      })]
    }), (0, t.jsxs)("div", {
      className: C.cardFooter,
      children: [(0, t.jsx)("div", {
        className: C.cardFooterInfo,
        children: (0, t.jsxs)("div", {
          className: C.cardFooterMembers,
          children: [(0, t.jsx)(r.GroupIcon, {
            className: C.cardFooterMembersIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Z
          })]
        })
      }), (0, t.jsx)("div", {
        className: C.cardFooterGames,
        children: F.map(e => {
          if (null == e) return null;
          let a = e.getIconURL(24);
          return null == a ? null : (0, t.jsx)(d.Tooltip, {
            text: e.name,
            position: "bottom",
            children: l => (0, t.jsx)("div", {
              ...l,
              className: C.cardFooterGame,
              children: (0, t.jsx)("img", {
                src: a,
                alt: e.name,
                className: C.cardFooterGameImg
              })
            })
          }, e.id)
        })
      })]
    }), null != c ? (0, t.jsxs)("div", {
      className: C.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(N, ")")
      },
      children: [(0, t.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: c
      }), (0, t.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: x ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
a.default = function(e) {
  let {
    clan: a
  } = e, n = (0, c.useStateFromStores)([f.default], () => f.default.getCurrentUser()), s = (0, c.useStateFromStores)([u.default], () => u.default.isMember(a.id, null == n ? void 0 : n.id), [a, n]), r = i.useCallback(() => {
    if (s) {
      (0, H.transitionToGuild)(a.id);
      return
    }(0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("81319")]).then(l.bind(l, "767593"));
      return l => (0, t.jsx)(e, {
        ...l,
        clan: a
      })
    })
  }, [a, s]);
  return (0, t.jsx)(d.Clickable, {
    onClick: r,
    className: C.clickableCard,
    children: (0, t.jsx)(E, {
      ...e,
      isMember: s
    })
  })
}