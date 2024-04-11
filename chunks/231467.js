"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardView: function() {
    return h
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("149020"),
  i = n("781511"),
  r = n("981500"),
  o = n("481060"),
  u = n("835473"),
  d = n("854698"),
  c = n("308083"),
  f = n("689938"),
  E = n("563560");

function h(e) {
  let {
    clan: t,
    affinity: n
  } = e, {
    branding: {
      primaryColor: s
    }
  } = t, h = (0, u.default)(t.games), _ = (0, a.jsx)(o.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: E.playstyle,
    color: "none",
    children: (0, c.getPlaystyleTitle)(t.playstyle)
  }), C = f.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, a.jsxs)("div", {
    className: E.card,
    children: [(0, a.jsx)("div", {
      className: E.cardBrandingHeader,
      style: {
        background: s
      }
    }), (0, a.jsxs)("div", {
      className: E.cardContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: t.name
        }), (0, a.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [_, " \xb7 ".concat(C)]
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, a.jsx)("div", {
        className: E.primetimeContainer,
        children: t.primetime.map(e => (0, a.jsxs)("div", {
          className: E.primetime,
          children: [(0, a.jsx)(l.GameControllerIcon, {
            className: E.primetimeIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: (0, d.getRRule)(e).toText()
          })]
        }, e.start))
      }), (0, a.jsx)("div", {
        className: E.traitsContainer,
        children: t.traits.map(e => (0, a.jsx)("div", {
          className: E.trait,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, a.jsxs)("div", {
      className: E.cardFooter,
      children: [(0, a.jsxs)("div", {
        className: E.cardFooterInfo,
        children: [(0, a.jsxs)("div", {
          className: E.cardFooterLocation,
          children: [(0, a.jsx)(i.GlobeEarthIcon, {
            className: E.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, a.jsxs)("div", {
          className: E.cardFooterLanguage,
          children: [(0, a.jsx)(r.LanguageIcon, {
            className: E.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, a.jsx)("div", {
        className: E.cardFooterGames,
        children: h.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, a.jsx)("div", {
            className: E.cardFooterGame,
            children: (0, a.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, a.jsx)("div", {
      className: E.cardBrandingFooter,
      style: {
        background: s
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
    className: E.clickableCard,
    children: (0, a.jsx)(h, {
      clan: t,
      affinity: l
    })
  })
}