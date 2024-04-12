"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("149020"),
  i = n("781511"),
  r = n("981500"),
  o = n("481060"),
  u = n("835473"),
  d = n("550271"),
  c = n("854698"),
  f = n("308083"),
  E = n("689938"),
  h = n("563560");

function _(e) {
  let {
    clan: t,
    affinity: n
  } = e, {
    tag: s,
    badge: _,
    branding: {
      primaryColor: C,
      secondaryColor: m
    }
  } = t, S = (0, u.default)(t.games), I = (0, a.jsx)(o.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: h.playstyle,
    color: "none",
    children: (0, f.getPlaystyleTitle)(t.playstyle)
  }), T = E.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, a.jsxs)("div", {
    className: h.card,
    children: [(0, a.jsx)("div", {
      className: h.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(m, ")")
      },
      children: (0, a.jsx)(d.ClanBadge, {
        width: 32,
        height: 32,
        className: h.clanBadge,
        badge: _.badgeKind,
        primaryTintColor: _.primaryColor,
        secondaryTintColor: _.secondaryColor
      })
    }), (0, a.jsxs)("div", {
      className: h.cardContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: h.cardNameAndTagWrapper,
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: t.name
          }), (0, a.jsxs)("div", {
            className: h.clanTagChiplet,
            children: [(0, a.jsx)(d.ClanBadge, {
              width: 16,
              height: 16,
              badge: _.badgeKind,
              primaryTintColor: _.primaryColor,
              secondaryTintColor: _.secondaryColor
            }), (0, a.jsx)(o.Text, {
              variant: "text-xs/bold",
              color: "text-primary",
              children: s
            })]
          })]
        }), (0, a.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [I, " \xb7 ".concat(T)]
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, a.jsx)("div", {
        className: h.primetimeContainer,
        children: t.primetime.map(e => (0, a.jsxs)("div", {
          className: h.primetime,
          children: [(0, a.jsx)(l.GameControllerIcon, {
            className: h.primetimeIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: (0, c.getRRule)(e).toText()
          })]
        }, e.start))
      }), (0, a.jsx)("div", {
        className: h.traitsContainer,
        children: t.traits.map(e => (0, a.jsx)("div", {
          className: h.trait,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, a.jsxs)("div", {
      className: h.cardFooter,
      children: [(0, a.jsxs)("div", {
        className: h.cardFooterInfo,
        children: [(0, a.jsxs)("div", {
          className: h.cardFooterLocation,
          children: [(0, a.jsx)(i.GlobeEarthIcon, {
            className: h.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, a.jsxs)("div", {
          className: h.cardFooterLanguage,
          children: [(0, a.jsx)(r.LanguageIcon, {
            className: h.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, a.jsx)("div", {
        className: h.cardFooterGames,
        children: S.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, a.jsx)("div", {
            className: h.cardFooterGame,
            children: (0, a.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, a.jsx)("div", {
      className: h.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(m, ")")
      },
      children: (0, a.jsx)(o.Text, {
        variant: "text-xxs/normal",
        children: n
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
      } = await Promise.all([n.e("99387"), n.e("81319")]).then(n.bind(n, "767593"));
      return n => (0, a.jsx)(e, {
        ...n,
        clan: t
      })
    })
  }, [t]);
  return (0, a.jsx)(o.Clickable, {
    onClick: i,
    className: h.clickableCard,
    children: (0, a.jsx)(_, {
      clan: t,
      affinity: l
    })
  })
}