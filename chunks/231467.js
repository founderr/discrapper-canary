"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryCardView: function() {
    return _
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("149020"),
  i = a("781511"),
  r = a("981500"),
  o = a("481060"),
  u = a("835473"),
  d = a("550271"),
  c = a("854698"),
  f = a("308083"),
  E = a("689938"),
  h = a("563560");

function _(e) {
  let {
    clan: t,
    affinity: a
  } = e, {
    tag: s,
    badge: _,
    branding: {
      primaryColor: C,
      secondaryColor: m
    }
  } = t, S = (0, u.default)(t.games), p = (0, n.jsx)(o.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: h.playstyle,
    color: "none",
    children: (0, f.getPlaystyleTitle)(t.playstyle)
  }), I = E.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, n.jsxs)("div", {
    className: h.card,
    children: [(0, n.jsx)("div", {
      className: h.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(m, ")")
      },
      children: (0, n.jsx)(d.ClanBadge, {
        width: 32,
        height: 32,
        className: h.clanBadge,
        badge: _.badgeKind,
        primaryTintColor: _.primaryColor,
        secondaryTintColor: _.secondaryColor
      })
    }), (0, n.jsxs)("div", {
      className: h.cardContent,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsxs)("div", {
          className: h.cardNameAndTagWrapper,
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: t.name
          }), (0, n.jsxs)("div", {
            className: h.clanTagChiplet,
            children: [(0, n.jsx)(d.ClanBadge, {
              width: 16,
              height: 16,
              badge: _.badgeKind,
              primaryTintColor: _.primaryColor,
              secondaryTintColor: _.secondaryColor
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
        className: h.primetimeContainer,
        children: t.primetime.map(e => (0, n.jsxs)("div", {
          className: h.primetime,
          children: [(0, n.jsx)(l.GameControllerIcon, {
            className: h.primetimeIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: (0, c.getRRule)(e).toText()
          })]
        }, e.start))
      }), (0, n.jsx)("div", {
        className: h.traitsContainer,
        children: t.traits.map(e => (0, n.jsx)("div", {
          className: h.trait,
          children: (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, n.jsxs)("div", {
      className: h.cardFooter,
      children: [(0, n.jsxs)("div", {
        className: h.cardFooterInfo,
        children: [(0, n.jsxs)("div", {
          className: h.cardFooterLocation,
          children: [(0, n.jsx)(i.GlobeEarthIcon, {
            className: h.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, n.jsxs)("div", {
          className: h.cardFooterLanguage,
          children: [(0, n.jsx)(r.LanguageIcon, {
            className: h.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, n.jsx)("div", {
        className: h.cardFooterGames,
        children: S.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, n.jsx)("div", {
            className: h.cardFooterGame,
            children: (0, n.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, n.jsx)("div", {
      className: h.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(m, ")")
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
  } = e, i = s.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("81319")]).then(a.bind(a, "767593"));
      return a => (0, n.jsx)(e, {
        ...a,
        clan: t
      })
    })
  }, [t]);
  return (0, n.jsx)(o.Clickable, {
    onClick: i,
    className: h.clickableCard,
    children: (0, n.jsx)(_, {
      clan: t,
      affinity: l
    })
  })
}