"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return E
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("149020"),
  i = n("781511"),
  r = n("981500"),
  o = n("481060"),
  u = n("835473"),
  d = n("308083"),
  c = n("689938"),
  f = n("563560");

function E(e) {
  let {
    clan: t
  } = e, {
    branding: {
      primaryColor: n
    }
  } = t, s = (0, u.default)(t.games), E = (0, a.jsx)(o.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: f.playstyle,
    color: "none",
    children: (0, d.getPlaystyleTitle)(t.playstyle)
  }), h = c.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, a.jsxs)("div", {
    className: f.card,
    children: [(0, a.jsx)("div", {
      className: f.cardBrandingHeader,
      style: {
        background: n
      }
    }), (0, a.jsxs)("div", {
      className: f.cardContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: t.name
        }), (0, a.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [E, " \xb7 ".concat(h)]
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, a.jsxs)("div", {
        className: f.primetimeContainer,
        children: [(0, a.jsx)(l.GameControllerIcon, {
          className: f.primetimeIcon,
          color: "currentColor"
        }), (0, a.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Weekends,", " ", (0, a.jsxs)(o.Text, {
            variant: "text-xs/medium",
            tag: "span",
            color: "text-primary",
            children: [t.primetime.start - 12, "PM - ", t.primetime.end - 12, "PM"]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: f.traitsContainer,
        children: t.traits.map(e => (0, a.jsx)("div", {
          className: f.trait,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, a.jsxs)("div", {
      className: f.cardFooter,
      children: [(0, a.jsxs)("div", {
        className: f.cardFooterInfo,
        children: [(0, a.jsxs)("div", {
          className: f.cardFooterLocation,
          children: [(0, a.jsx)(i.GlobeEarthIcon, {
            className: f.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, a.jsxs)("div", {
          className: f.cardFooterLanguage,
          children: [(0, a.jsx)(r.LanguageIcon, {
            className: f.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, a.jsx)("div", {
        className: f.cardFooterGames,
        children: s.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, a.jsx)("div", {
            className: f.cardFooterGame,
            children: (0, a.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, a.jsx)("div", {
      className: f.cardBrandingFooter,
      style: {
        background: n
      }
    })]
  })
}
t.default = function(e) {
  let {
    clan: t
  } = e, l = s.useCallback(() => {
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
    onClick: l,
    className: f.clickableCard,
    children: (0, a.jsx)(E, {
      clan: t
    })
  })
}