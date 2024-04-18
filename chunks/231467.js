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
  r = l("149020"),
  d = l("298433"),
  c = l("481060"),
  o = l("442837"),
  h = l("835473"),
  x = l("114487"),
  V = l("550271"),
  H = l("703656"),
  u = l("271383"),
  f = l("594174"),
  p = l("768581"),
  m = l("524989"),
  j = l("308083"),
  g = l("689938"),
  C = l("563560");

function v(e) {
  var a, l;
  let {
    clan: i,
    affinity: n,
    isMember: o,
    traitsToHighlight: H
  } = e, {
    tag: u,
    badge: f,
    branding: {
      primaryColor: v,
      secondaryColor: M
    }
  } = i, E = (0, h.default)(i.games), F = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), Z = null !== (a = p.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: C.card,
    children: [(0, t.jsx)("div", {
      className: C.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(v, ", ").concat(M, ")")
      },
      children: (0, t.jsx)(V.ClanBadge, {
        width: 32,
        height: 32,
        className: C.clanBadge,
        badge: f.badgeKind,
        primaryTintColor: f.primaryColor,
        secondaryTintColor: f.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: C.cardContent,
      children: [(0, t.jsxs)("div", {
        className: C.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: C.cardNameAndTagWrapper,
          children: [(0, t.jsx)(x.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: Z,
            iconSize: 64,
            className: C.clanIcon
          }), (0, t.jsx)("div", {
            className: C.clanTagChipletWrapper,
            children: (0, t.jsxs)("div", {
              className: C.clanTagChiplet,
              children: [(0, t.jsx)(V.ClanBadge, {
                width: 16,
                height: 16,
                badge: f.badgeKind,
                primaryTintColor: f.primaryColor,
                secondaryTintColor: f.secondaryColor
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: u
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
          }), " ".concat(null !== (l = (0, j.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE, " \xb7 ").concat(F)]
        })]
      }), (0, t.jsx)("div", {
        className: C.cardContentDescriptionSection,
        children: (0, t.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(m.default, {
        items: (0, j.getSortedTraits)(i.traits, H),
        renderItem: e => (0, t.jsx)("div", {
          className: s()(C.trait, {
            [C.highlightedTrait]: (null != H ? H : []).includes(e)
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
            children: F
          })]
        })]
      }), (0, t.jsx)("div", {
        className: C.cardFooterGames,
        children: E.map(e => {
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
    }), null != n ? (0, t.jsxs)("div", {
      className: C.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(v, ", ").concat(M, ")")
      },
      children: [(0, t.jsx)(c.Text, {
        variant: "text-xxs/normal",
        children: n
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
  } = e, n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), s = (0, o.useStateFromStores)([u.default], () => u.default.isMember(a.id, null == n ? void 0 : n.id), [a, n]), r = i.useCallback(() => {
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
    children: (0, t.jsx)(v, {
      ...e,
      isMember: s
    })
  })
}