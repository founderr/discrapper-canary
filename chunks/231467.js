"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryCardView: function() {
    return p
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("149020"),
  i = a("781511"),
  r = a("981500"),
  o = a("481060"),
  u = a("442837"),
  d = a("835473"),
  c = a("550271"),
  f = a("854698"),
  E = a("703656"),
  h = a("271383"),
  _ = a("594174"),
  C = a("308083"),
  m = a("689938"),
  S = a("563560");

function p(e) {
  let {
    clan: t,
    affinity: a
  } = e, {
    tag: s,
    badge: u,
    branding: {
      primaryColor: E,
      secondaryColor: h
    }
  } = t, _ = (0, d.default)(t.games), p = (0, n.jsx)(o.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: S.playstyle,
    color: "none",
    children: (0, C.getPlaystyleTitle)(t.playstyle)
  }), I = m.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, n.jsxs)("div", {
    className: S.card,
    children: [(0, n.jsx)("div", {
      className: S.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(h, ")")
      },
      children: (0, n.jsx)(c.ClanBadge, {
        width: 32,
        height: 32,
        className: S.clanBadge,
        badge: u.badgeKind,
        primaryTintColor: u.primaryColor,
        secondaryTintColor: u.secondaryColor
      })
    }), (0, n.jsxs)("div", {
      className: S.cardContent,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsxs)("div", {
          className: S.cardNameAndTagWrapper,
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: t.name
          }), (0, n.jsxs)("div", {
            className: S.clanTagChiplet,
            children: [(0, n.jsx)(c.ClanBadge, {
              width: 16,
              height: 16,
              badge: u.badgeKind,
              primaryTintColor: u.primaryColor,
              secondaryTintColor: u.secondaryColor
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/bold",
              color: "text-primary",
              children: s
            })]
          })]
        }), (0, n.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [p, " \xb7 ".concat(I)]
        })]
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, n.jsx)("div", {
        className: S.primetimeContainer,
        children: t.primetime.map((e, t) => (0, n.jsxs)("div", {
          className: S.primetime,
          children: [(0, n.jsx)(l.GameControllerIcon, {
            className: S.primetimeIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: (0, f.getRRule)(e).toText()
          })]
        }, "".concat(e.start, "-").concat(t)))
      }), (0, n.jsx)("div", {
        className: S.traitsContainer,
        children: t.traits.map(e => (0, n.jsx)("div", {
          className: S.trait,
          children: (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, n.jsxs)("div", {
      className: S.cardFooter,
      children: [(0, n.jsxs)("div", {
        className: S.cardFooterInfo,
        children: [(0, n.jsxs)("div", {
          className: S.cardFooterLocation,
          children: [(0, n.jsx)(i.GlobeEarthIcon, {
            className: S.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, n.jsxs)("div", {
          className: S.cardFooterLanguage,
          children: [(0, n.jsx)(r.LanguageIcon, {
            className: S.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, n.jsx)("div", {
        className: S.cardFooterGames,
        children: _.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, n.jsx)("div", {
            className: S.cardFooterGame,
            children: (0, n.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, n.jsx)("div", {
      className: S.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(E, ", ").concat(h, ")")
      },
      children: (0, n.jsx)(o.Text, {
        variant: "text-xxs/normal",
        children: a
      })
    })]
  })
}
t.default = function(e) {
  let {
    clan: t,
    affinity: l
  } = e, i = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), r = (0, u.useStateFromStores)([h.default], () => h.default.isMember(t.id, null == i ? void 0 : i.id), [t, i]), d = s.useCallback(() => {
    if (r) {
      (0, E.transitionToGuild)(t.id);
      return
    }(0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("81319")]).then(a.bind(a, "767593"));
      return a => (0, n.jsx)(e, {
        ...a,
        clan: t
      })
    })
  }, [t, r]);
  return (0, n.jsx)(o.Clickable, {
    onClick: d,
    className: S.clickableCard,
    children: (0, n.jsx)(p, {
      clan: t,
      affinity: l
    })
  })
}