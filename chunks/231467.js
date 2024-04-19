"use strict";
l.r(a), l.d(a, {
  ClanDiscoveryCardView: function() {
    return v
  }
});
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  d = l("298433"),
  r = l("481060"),
  c = l("442837"),
  o = l("835473"),
  h = l("114487"),
  x = l("550271"),
  V = l("703656"),
  H = l("271383"),
  u = l("594174"),
  p = l("768581"),
  f = l("524989"),
  m = l("308083"),
  j = l("689938"),
  g = l("563560");

function C(e) {
  let {
    traits: a,
    traitsToHighlight: l,
    expanded: i
  } = e;
  return i ? (0, t.jsx)("div", {
    className: g.expandedTraitsContainer,
    children: a.map(e => (0, t.jsx)("div", {
      className: s()(g.trait, {
        [g.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e))
  }) : (0, t.jsx)(f.default, {
    items: a,
    renderItem: e => (0, t.jsx)("div", {
      className: s()(g.trait, {
        [g.highlightedTrait]: (null != l ? l : []).includes(e)
      }),
      children: (0, t.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e),
    renderOverflow: e => (0, t.jsx)(r.Tooltip, {
      text: (0, t.jsx)("div", {
        className: g.overflowTooltip,
        children: e.map(e => (0, t.jsx)("div", {
          className: g.trait,
          children: e
        }, e))
      }),
      "aria-label": "overflow",
      children: a => (0, t.jsx)("div", {
        ...a,
        className: g.trait,
        children: (0, t.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: j.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: g.traitsContainer
  })
}

function v(e) {
  var a, l;
  let {
    clan: i,
    expanded: n,
    affinity: c,
    isMember: V,
    traitsToHighlight: H,
    className: u
  } = e, {
    tag: f,
    badge: v,
    branding: {
      primaryColor: M,
      secondaryColor: E
    }
  } = i, F = (0, o.default)(i.games), Z = j.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), N = null !== (a = p.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: s()(g.card, u),
    children: [(0, t.jsx)("div", {
      className: g.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(M, ", ").concat(E, ")")
      },
      children: (0, t.jsx)(x.ClanBadge, {
        width: 32,
        height: 32,
        className: g.clanBadge,
        badge: v.badgeKind,
        primaryTintColor: v.primaryColor,
        secondaryTintColor: v.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: g.cardContent,
      children: [(0, t.jsxs)("div", {
        className: g.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: g.cardNameAndTagWrapper,
          children: [(0, t.jsx)(h.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: N,
            iconSize: 64,
            className: g.clanIcon
          }), (0, t.jsx)("div", {
            className: g.clanTagChipletWrapper,
            children: (0, t.jsxs)("div", {
              className: g.clanTagChiplet,
              children: [(0, t.jsx)(x.ClanBadge, {
                width: 16,
                height: 16,
                badge: v.badgeKind,
                primaryTintColor: v.primaryColor,
                secondaryTintColor: v.secondaryColor
              }), (0, t.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: f
              })]
            })
          })]
        }), (0, t.jsx)(r.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: i.name
        }), (0, t.jsxs)(r.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [(0, t.jsx)(r.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            children: (0, t.jsx)("span", {
              role: "img",
              "aria-label": j.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), " ".concat(null !== (l = (0, m.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : j.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE, " \xb7 ").concat(Z)]
        })]
      }), (0, t.jsx)("div", {
        className: g.cardContentDescriptionSection,
        children: (0, t.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(C, {
        traits: (0, m.getSortedTraits)(i.traits, H),
        expanded: n,
        traitsToHighlight: H
      })]
    }), (0, t.jsxs)("div", {
      className: g.cardFooter,
      children: [(0, t.jsx)("div", {
        className: g.cardFooterInfo,
        children: (0, t.jsxs)("div", {
          className: g.cardFooterMembers,
          children: [(0, t.jsx)(d.GroupIcon, {
            className: g.cardFooterMembersIcon,
            color: "currentColor"
          }), (0, t.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Z
          })]
        })
      }), (0, t.jsx)("div", {
        className: g.cardFooterGames,
        children: F.map(e => {
          if (null == e) return null;
          let a = e.getIconURL(24);
          return null == a ? null : (0, t.jsx)(r.Tooltip, {
            text: e.name,
            position: "bottom",
            children: l => (0, t.jsx)("div", {
              ...l,
              className: g.cardFooterGame,
              children: (0, t.jsx)("img", {
                src: a,
                alt: e.name,
                className: g.cardFooterGameImg
              })
            })
          }, e.id)
        })
      })]
    }), null != c ? (0, t.jsxs)("div", {
      className: g.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(M, ", ").concat(E, ")")
      },
      children: [(0, t.jsx)(r.Text, {
        variant: "text-xxs/normal",
        children: c
      }), (0, t.jsx)(r.Text, {
        variant: "text-xxs/normal",
        children: V ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
a.default = function(e) {
  let {
    clan: a
  } = e, n = (0, c.useStateFromStores)([u.default], () => u.default.getCurrentUser()), s = (0, c.useStateFromStores)([H.default], () => H.default.isMember(a.id, null == n ? void 0 : n.id), [a, n]), d = i.useCallback(() => {
    if (s) {
      (0, V.transitionToGuild)(a.id);
      return
    }(0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("81319")]).then(l.bind(l, "767593"));
      return l => (0, t.jsx)(e, {
        ...l,
        clan: a
      })
    })
  }, [a, s]);
  return (0, t.jsx)(r.Clickable, {
    onClick: d,
    className: g.clickableCard,
    children: (0, t.jsx)(v, {
      ...e,
      isMember: s
    })
  })
}