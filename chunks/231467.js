"use strict";
l.r(a), l.d(a, {
  ClanDiscoveryCardView: function() {
    return F
  }
});
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("298433"),
  d = l("780384"),
  c = l("481060"),
  o = l("442837"),
  h = l("866442"),
  x = l("410030"),
  V = l("835473"),
  H = l("114487"),
  u = l("550271"),
  m = l("703656"),
  f = l("271383"),
  p = l("594174"),
  j = l("768581"),
  g = l("524989"),
  C = l("308083"),
  v = l("689938"),
  M = l("563560");

function E(e) {
  let {
    clan: a
  } = e, l = (0, x.useTheme)(), {
    wildcardDescriptors: i,
    branding: {
      primaryColor: n
    }
  } = a, {
    l: r
  } = (0, h.isValidHex)(n) ? (0, h.int2hslRaw)((0, h.hex2int)(n)) : {
    l: 0
  }, o = i.filter(e => e !== C.EMPTY_WILDCARD).join(", ");
  if (!(0, h.isValidHex)(n)) return null;
  let V = (0, d.isThemeDark)(l) && r < 30 || !(0, d.isThemeDark)(l) && r > 65;
  return (0, t.jsx)("div", {
    className: M.wildcards,
    children: (0, t.jsx)(c.Text, {
      variant: "text-xs/semibold",
      style: V ? {} : {
        color: n
      },
      lineClamp: 1,
      className: s()({
        [M.wildcardsOverride]: V
      }),
      children: o
    })
  })
}

function N(e) {
  let {
    traits: a,
    traitsToHighlight: l,
    expanded: i
  } = e;
  return i ? (0, t.jsx)("div", {
    className: M.expandedTraitsContainer,
    children: a.map(e => (0, t.jsx)("div", {
      className: s()(M.trait, {
        [M.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e))
  }) : (0, t.jsx)(g.default, {
    items: a,
    renderItem: e => (0, t.jsx)("div", {
      className: s()(M.trait, {
        [M.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e),
    renderOverflow: e => (0, t.jsx)(c.Tooltip, {
      text: (0, t.jsx)("div", {
        className: M.overflowTooltip,
        children: e.map(e => (0, t.jsx)("div", {
          className: M.trait,
          children: e
        }, e))
      }),
      "aria-label": "overflow",
      children: a => (0, t.jsx)("div", {
        ...a,
        className: M.trait,
        children: (0, t.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: v.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: M.traitsContainer
  })
}

function F(e) {
  var a, l;
  let {
    clan: i,
    expanded: n,
    affinity: d,
    isMember: o,
    traitsToHighlight: h,
    className: x
  } = e, {
    tag: m,
    badge: f,
    branding: {
      primaryColor: p,
      secondaryColor: g
    }
  } = i, F = (0, V.default)(i.games), Z = v.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), w = null !== (a = j.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: s()(M.card, x),
    children: [(0, t.jsx)("div", {
      className: M.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(p, ", ").concat(g, ")")
      },
      children: (0, t.jsx)(u.ClanBadge, {
        width: 32,
        height: 32,
        className: M.clanBadge,
        badge: f.badgeKind,
        primaryTintColor: f.primaryColor,
        secondaryTintColor: f.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: M.cardContent,
      children: [(0, t.jsxs)("div", {
        className: M.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: M.cardNameAndTagWrapper,
          children: [(0, t.jsx)(H.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: w,
            iconSize: 64,
            className: M.clanIcon
          }), (0, t.jsx)("div", {
            className: M.clanTagChipletWrapper,
            children: (0, t.jsxs)("div", {
              className: M.clanTagChiplet,
              children: [(0, t.jsx)(u.ClanBadge, {
                width: 16,
                height: 16,
                badge: f.badgeKind,
                primaryTintColor: f.primaryColor,
                secondaryTintColor: f.secondaryColor
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: m
              })]
            })
          })]
        }), (0, t.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: i.name
        }), (0, t.jsxs)("div", {
          className: M.clanInfoRow,
          children: [(0, t.jsx)(c.Text, {
            variant: "text-xxs/normal",
            className: M.clanInfoItem,
            children: (0, t.jsx)("span", {
              role: "img",
              "aria-label": v.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, t.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: M.clanInfoItem,
            children: null !== (l = (0, C.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : v.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, t.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: M.clanInfoItem,
            children: "\xb7"
          }), (0, t.jsx)(E, {
            clan: i
          })]
        })]
      }), (0, t.jsx)("div", {
        className: M.cardContentDescriptionSection,
        children: (0, t.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(N, {
        traits: (0, C.getSortedTraits)(i.traits, h),
        expanded: n,
        traitsToHighlight: h
      })]
    }), (0, t.jsxs)("div", {
      className: M.cardFooter,
      children: [(0, t.jsx)("div", {
        className: M.cardFooterInfo,
        children: (0, t.jsxs)("div", {
          className: M.cardFooterMembers,
          children: [(0, t.jsx)(r.GroupIcon, {
            className: M.cardFooterMembersIcon,
            color: "currentColor"
          }), (0, t.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Z
          })]
        })
      }), (0, t.jsx)("div", {
        className: M.cardFooterGames,
        children: F.map(e => {
          if (null == e) return null;
          let a = e.getIconURL(24);
          return null == a ? null : (0, t.jsx)(c.Tooltip, {
            text: e.name,
            position: "bottom",
            children: l => (0, t.jsx)("div", {
              ...l,
              className: M.cardFooterGame,
              children: (0, t.jsx)("img", {
                src: a,
                alt: e.name,
                className: M.cardFooterGameImg
              })
            })
          }, e.id)
        })
      })]
    }), null != d ? (0, t.jsxs)("div", {
      className: M.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(p, ", ").concat(g, ")")
      },
      children: [(0, t.jsx)(c.Text, {
        variant: "text-xxs/normal",
        children: d
      }), (0, t.jsx)(c.Text, {
        variant: "text-xxs/normal",
        children: o ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
a.default = function(e) {
  let {
    clan: a
  } = e, n = (0, o.useStateFromStores)([p.default], () => p.default.getCurrentUser()), s = (0, o.useStateFromStores)([f.default], () => f.default.isMember(a.id, null == n ? void 0 : n.id), [a, n]), r = i.useCallback(() => {
    if (s) {
      (0, m.transitionToGuild)(a.id);
      return
    }(0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("81319")]).then(l.bind(l, "767593"));
      return l => (0, t.jsx)(e, {
        ...l,
        clan: a
      })
    })
  }, [a, s]);
  return (0, t.jsx)(c.Clickable, {
    onClick: r,
    className: M.clickableCard,
    children: (0, t.jsx)(F, {
      ...e,
      isMember: s
    })
  })
}