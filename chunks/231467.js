"use strict";
l.r(a), l.d(a, {
  ClanDiscoveryCardView: function() {
    return M
  }
});
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("149020"),
  d = l("298433"),
  c = l("481060"),
  o = l("442837"),
  h = l("835473"),
  x = l("114487"),
  V = l("550271"),
  H = l("703656"),
  u = l("271383"),
  p = l("594174"),
  m = l("768581"),
  f = l("524989"),
  j = l("308083"),
  g = l("689938"),
  C = l("563560");

function v(e) {
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
      children: (0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        lineClamp: 1,
        children: e
      })
    }, e))
  }) : (0, t.jsx)(f.default, {
    items: a,
    renderItem: e => (0, t.jsx)("div", {
      className: s()(C.trait, {
        [C.highlightedTrait]: (null != l ? l : []).includes(e)
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
        children: (0, t.jsx)(c.Text, {
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

function M(e) {
  var a, l;
  let {
    clan: i,
    expanded: n,
    affinity: o,
    isMember: H,
    traitsToHighlight: u,
    className: p
  } = e, {
    tag: f,
    badge: M,
    branding: {
      primaryColor: E,
      secondaryColor: F
    }
  } = i, Z = (0, h.default)(i.games), N = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), S = null !== (a = m.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: s()(C.card, p),
    children: [(0, t.jsx)("div", {
      className: C.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(F, ")")
      },
      children: (0, t.jsx)(V.ClanBadge, {
        width: 32,
        height: 32,
        className: C.clanBadge,
        badge: M.badgeKind,
        primaryTintColor: M.primaryColor,
        secondaryTintColor: M.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: C.cardContent,
      children: [(0, t.jsxs)("div", {
        className: C.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: C.cardNameAndTagWrapper,
          children: [(0, t.jsx)(x.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: S,
            iconSize: 64,
            className: C.clanIcon
          }), (0, t.jsx)("div", {
            className: C.clanTagChipletWrapper,
            children: (0, t.jsxs)("div", {
              className: C.clanTagChiplet,
              children: [(0, t.jsx)(V.ClanBadge, {
                width: 16,
                height: 16,
                badge: M.badgeKind,
                primaryTintColor: M.primaryColor,
                secondaryTintColor: M.secondaryColor
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: f
              })]
            })
          })]
        }), (0, t.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: i.name
        }), (0, t.jsxs)(c.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [(0, t.jsx)(c.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            children: (0, t.jsx)("span", {
              role: "img",
              "aria-label": g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), " ".concat(null !== (l = (0, j.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE, " \xb7 ").concat(N)]
        })]
      }), (0, t.jsx)("div", {
        className: C.cardContentDescriptionSection,
        children: (0, t.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(v, {
        traits: (0, j.getSortedTraits)(i.traits, u),
        expanded: n,
        traitsToHighlight: u
      })]
    }), (0, t.jsxs)("div", {
      className: C.cardFooter,
      children: [(0, t.jsxs)("div", {
        className: C.cardFooterInfo,
        children: [(0, t.jsxs)("div", {
          className: C.cardFooterLocation,
          children: [(0, t.jsx)(r.GameControllerIcon, {
            className: C.primetimeIcon,
            color: "currentColor"
          }), (0, t.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: "Fri, Sat Evenings"
          })]
        }), (0, t.jsxs)("div", {
          className: C.cardFooterLanguage,
          children: [(0, t.jsx)(d.GroupIcon, {
            className: C.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, t.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: N
          })]
        })]
      }), (0, t.jsx)("div", {
        className: C.cardFooterGames,
        children: Z.map(e => {
          if (null == e) return null;
          let a = e.getIconURL(24);
          return null == a ? null : (0, t.jsx)(c.Tooltip, {
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
    }), null != o ? (0, t.jsxs)("div", {
      className: C.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(F, ")")
      },
      children: [(0, t.jsx)(c.Text, {
        variant: "text-xxs/normal",
        children: o
      }), (0, t.jsx)(c.Text, {
        variant: "text-xxs/normal",
        children: H ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
a.default = function(e) {
  let {
    clan: a
  } = e, n = (0, o.useStateFromStores)([p.default], () => p.default.getCurrentUser()), s = (0, o.useStateFromStores)([u.default], () => u.default.isMember(a.id, null == n ? void 0 : n.id), [a, n]), r = i.useCallback(() => {
    if (s) {
      (0, H.transitionToGuild)(a.id);
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
    className: C.clickableCard,
    children: (0, t.jsx)(M, {
      ...e,
      isMember: s
    })
  })
}