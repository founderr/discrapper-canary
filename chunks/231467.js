"use strict";
l.r(e), l.d(e, {
  ClanDiscoveryCardView: function() {
    return m
  }
});
var t = l("735250"),
  n = l("470079"),
  i = l("149020"),
  s = l("781511"),
  r = l("981500"),
  d = l("481060"),
  c = l("442837"),
  o = l("835473"),
  H = l("550271"),
  V = l("854698"),
  x = l("703656"),
  h = l("271383"),
  f = l("594174"),
  j = l("308083"),
  u = l("689938"),
  p = l("563560");

function m(a) {
  let {
    clan: e,
    affinity: l
  } = a, {
    tag: n,
    badge: c,
    branding: {
      primaryColor: x,
      secondaryColor: h
    }
  } = e, f = (0, o.default)(e.games), m = (0, t.jsx)(d.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: p.playstyle,
    color: "none",
    children: (0, j.getPlaystyleTitle)(e.playstyle)
  }), g = u.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: e.memberCount
  });
  return (0, t.jsxs)("div", {
    className: p.card,
    children: [(0, t.jsx)("div", {
      className: p.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(x, ", ").concat(h, ")")
      },
      children: (0, t.jsx)(H.ClanBadge, {
        width: 32,
        height: 32,
        className: p.clanBadge,
        badge: c.badgeKind,
        primaryTintColor: c.primaryColor,
        secondaryTintColor: c.secondaryColor
      })
    }), (0, t.jsxs)("div", {
      className: p.cardContent,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsxs)("div", {
          className: p.cardNameAndTagWrapper,
          children: [(0, t.jsx)(d.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: e.name
          }), (0, t.jsxs)("div", {
            className: p.clanTagChiplet,
            children: [(0, t.jsx)(H.ClanBadge, {
              width: 16,
              height: 16,
              badge: c.badgeKind,
              primaryTintColor: c.primaryColor,
              secondaryTintColor: c.secondaryColor
            }), (0, t.jsx)(d.Text, {
              variant: "text-xs/bold",
              color: "text-primary",
              children: n
            })]
          })]
        }), (0, t.jsxs)(d.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [m, " \xb7 ".concat(g)]
        })]
      }), (0, t.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: e.description
      }), (0, t.jsx)("div", {
        className: p.primetimeContainer,
        children: e.primetime.map((a, e) => (0, t.jsxs)("div", {
          className: p.primetime,
          children: [(0, t.jsx)(i.GameControllerIcon, {
            className: p.primetimeIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: (0, V.getRRule)(a).toText()
          })]
        }, "".concat(a.start, "-").concat(e)))
      }), (0, t.jsx)("div", {
        className: p.traitsContainer,
        children: e.traits.map(a => (0, t.jsx)("div", {
          className: p.trait,
          children: (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: a
          })
        }, a))
      })]
    }), (0, t.jsxs)("div", {
      className: p.cardFooter,
      children: [(0, t.jsxs)("div", {
        className: p.cardFooterInfo,
        children: [(0, t.jsxs)("div", {
          className: p.cardFooterLocation,
          children: [(0, t.jsx)(s.GlobeEarthIcon, {
            className: p.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: e.location
          })]
        }), (0, t.jsxs)("div", {
          className: p.cardFooterLanguage,
          children: [(0, t.jsx)(r.LanguageIcon, {
            className: p.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: e.language
          })]
        })]
      }), (0, t.jsx)("div", {
        className: p.cardFooterGames,
        children: f.map(a => {
          if (null == a) return null;
          let e = a.getIconURL(24);
          return null == e ? null : (0, t.jsx)("div", {
            className: p.cardFooterGame,
            children: (0, t.jsx)("img", {
              src: e,
              alt: a.name
            })
          }, a.id)
        })
      })]
    }), (0, t.jsx)("div", {
      className: p.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(x, ", ").concat(h, ")")
      },
      children: (0, t.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: l
      })
    })]
  })
}
e.default = function(a) {
  let {
    clan: e,
    affinity: i
  } = a, s = (0, c.useStateFromStores)([f.default], () => f.default.getCurrentUser()), r = (0, c.useStateFromStores)([h.default], () => h.default.isMember(e.id, null == s ? void 0 : s.id), [e, s]), o = n.useCallback(() => {
    if (r) {
      (0, x.transitionToGuild)(e.id);
      return
    }(0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([l.e("99387"), l.e("81319")]).then(l.bind(l, "767593"));
      return l => (0, t.jsx)(a, {
        ...l,
        clan: e
      })
    })
  }, [e, r]);
  return (0, t.jsx)(d.Clickable, {
    onClick: o,
    className: p.clickableCard,
    children: (0, t.jsx)(m, {
      clan: e,
      affinity: i
    })
  })
}