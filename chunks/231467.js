"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("149020"),
  l = n("781511"),
  i = n("981500"),
  r = n("481060"),
  o = n("835473"),
  u = n("308083"),
  d = n("689938"),
  c = n("563560");
t.default = function(e) {
  let {
    clan: t
  } = e, {
    branding: {
      primaryColor: n
    }
  } = t, f = (0, o.default)(t.games), E = (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    tag: "span",
    className: c.playstyle,
    color: "none",
    children: (0, u.getPlaystyleTitle)(t.playstyle)
  }), h = d.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: t.memberCount
  });
  return (0, a.jsxs)("div", {
    className: c.card,
    children: [(0, a.jsx)("div", {
      className: c.cardBrandingHeader,
      style: {
        background: n
      }
    }), (0, a.jsxs)("div", {
      className: c.cardContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: t.name
        }), (0, a.jsxs)(r.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [E, " \xb7 ".concat(h)]
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, a.jsxs)("div", {
        className: c.primetimeContainer,
        children: [(0, a.jsx)(s.GameControllerIcon, {
          className: c.primetimeIcon,
          color: "currentColor"
        }), (0, a.jsxs)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Weekends,", " ", (0, a.jsxs)(r.Text, {
            variant: "text-xs/medium",
            tag: "span",
            color: "text-primary",
            children: [t.primetime.start - 12, "PM - ", t.primetime.end - 12, "PM"]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: c.traitsContainer,
        children: t.traits.map(e => (0, a.jsx)("div", {
          className: c.trait,
          children: (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, a.jsxs)("div", {
      className: c.cardFooter,
      children: [(0, a.jsxs)("div", {
        className: c.cardFooterInfo,
        children: [(0, a.jsxs)("div", {
          className: c.cardFooterLocation,
          children: [(0, a.jsx)(l.GlobeEarthIcon, {
            className: c.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, a.jsxs)("div", {
          className: c.cardFooterLanguage,
          children: [(0, a.jsx)(i.LanguageIcon, {
            className: c.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, a.jsx)("div", {
        className: c.cardFooterGames,
        children: f.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, a.jsx)("div", {
            className: c.cardFooterGame,
            children: (0, a.jsx)("img", {
              src: t,
              alt: e.name
            })
          }, e.id)
        })
      })]
    }), (0, a.jsx)("div", {
      className: c.cardBrandingFooter,
      style: {
        background: n
      }
    })]
  })
}