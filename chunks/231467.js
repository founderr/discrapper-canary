"use strict";
l.r(a), l.d(a, {
  ClanDiscoveryCardView: function() {
    return g
  }
});
var t = l("735250"),
  i = l("470079"),
  n = l("149020"),
  s = l("298433"),
  d = l("481060"),
  r = l("442837"),
  c = l("835473"),
  o = l("114487"),
  V = l("550271"),
  h = l("703656"),
  H = l("271383"),
  x = l("594174"),
  u = l("768581"),
  f = l("524989"),
  p = l("308083"),
  j = l("689938"),
  m = l("563560");

function g(e) {
  var a, l;
  let {
    clan: i,
    affinity: r,
    isMember: h
  } = e, {
    tag: H,
    badge: x,
    branding: {
      primaryColor: g,
      secondaryColor: C
    }
  } = i, v = (0, c.default)(i.games), M = j.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: i.memberCount
  }), F = null !== (a = u.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== a ? a : void 0;
  return (0, t.jsxs)("div", {
    className: m.card,
    children: [(0, t.jsx)("div", {
      className: m.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(g, ", ").concat(C, ")")
      },
      children: (0, t.jsx)(V.ClanBadge, {
        width: 32,
        height: 32,
        className: m.clanBadge,
        badge: x.badgeKind,
        primaryTintColor: x.primaryColor,
        secondaryTintColor: x.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: m.cardContent,
      children: [(0, t.jsxs)("div", {
        className: m.cardContentTitleSection,
        children: [(0, t.jsxs)("div", {
          className: m.cardNameAndTagWrapper,
          children: [(0, t.jsx)(o.ClanGuildIconSimple, {
            guildName: i.name,
            guildIconURL: F,
            iconSize: 64,
            className: m.clanIcon
          }), (0, t.jsx)("div", {
            className: m.clanTagChipletWrapper,
            children: (0, t.jsxs)("div", {
              className: m.clanTagChiplet,
              children: [(0, t.jsx)(V.ClanBadge, {
                width: 16,
                height: 16,
                badge: x.badgeKind,
                primaryTintColor: x.primaryColor,
                secondaryTintColor: x.secondaryColor
              }), (0, t.jsx)(d.Text, {
                variant: "text-xs/bold",
                color: "text-primary",
                children: H
              })]
            })
          })]
        }), (0, t.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: i.name
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: "\uD83C\uDFAE ".concat(null !== (l = (0, p.getPlaystyleTitle)(i.playstyle)) && void 0 !== l ? l : j.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE, " \xb7 ").concat(M)
        })]
      }), (0, t.jsx)("div", {
        className: m.cardContentDescriptionSection,
        children: (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i.description
        })
      }), (0, t.jsx)(f.default, {
        items: i.traits,
        renderItem: e => (0, t.jsx)("div", {
          className: m.trait,
          children: (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            lineClamp: 1,
            children: e
          })
        }, e),
        renderOverflow: e => (0, t.jsx)(d.Tooltip, {
          text: e.join(", "),
          children: a => (0, t.jsx)("div", {
            ...a,
            className: m.trait,
            children: (0, t.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-normal",
              children: j.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
                count: e.length
              })
            })
          })
        }),
        maxLines: 2,
        className: m.traitsContainer
      })]
    }), (0, t.jsxs)("div", {
      className: m.cardFooter,
      children: [(0, t.jsxs)("div", {
        className: m.cardFooterInfo,
        children: [(0, t.jsxs)("div", {
          className: m.cardFooterLocation,
          children: [(0, t.jsx)(n.GameControllerIcon, {
            className: m.primetimeIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: "Fri, Sat Evenings"
          })]
        }), (0, t.jsxs)("div", {
          className: m.cardFooterLanguage,
          children: [(0, t.jsx)(s.GroupIcon, {
            className: m.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: M
          })]
        })]
      }), (0, t.jsx)("div", {
        className: m.cardFooterGames,
        children: v.map(e => {
          if (null == e) return null;
          let a = e.getIconURL(24);
          return null == a ? null : (0, t.jsx)(d.Tooltip, {
            text: e.name,
            children: l => (0, t.jsx)("div", {
              ...l,
              className: m.cardFooterGame,
              children: (0, t.jsx)("img", {
                src: a,
                alt: e.name,
                className: m.cardFooterGameImg
              })
            })
          }, e.id)
        })
      })]
    }), null != r ? (0, t.jsxs)("div", {
      className: m.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(g, ", ").concat(C, ")")
      },
      children: [(0, t.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: r
      }), (0, t.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: h ? ", Joined" : ", Not Joined"
      })]
    }) : null]
  })
}
a.default = function(e) {
  let {
    clan: a,
    affinity: n
  } = e, s = (0, r.useStateFromStores)([x.default], () => x.default.getCurrentUser()), c = (0, r.useStateFromStores)([H.default], () => H.default.isMember(a.id, null == s ? void 0 : s.id), [a, s]), o = i.useCallback(() => {
    if (c) {
      (0, h.transitionToGuild)(a.id);
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
  }, [a, c]);
  return (0, t.jsx)(d.Clickable, {
    onClick: o,
    className: m.clickableCard,
    children: (0, t.jsx)(g, {
      clan: a,
      affinity: n,
      isMember: c
    })
  })
}