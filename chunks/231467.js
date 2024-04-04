"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("149020"),
  l = n("781511"),
  i = n("981500"),
  r = n("481060"),
  o = n("442837"),
  u = n("812206"),
  d = n("563560");
t.default = function(e) {
  let {
    clan: t
  } = e, {
    branding: {
      primaryColor: n
    }
  } = t, c = (0, o.useStateFromStoresArray)([u.default], () => t.games.map(e => u.default.getApplication(e)));
  return (0, a.jsxs)("div", {
    className: d.card,
    children: [(0, a.jsx)("div", {
      className: d.cardBrandingHeader,
      style: {
        background: n
      }
    }), (0, a.jsxs)("div", {
      className: d.cardContent,
      children: [(0, a.jsxs)("div", {
        className: d.__invalid_cardHeader,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: t.name
        }), (0, a.jsxs)(r.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: [(0, a.jsx)(r.Text, {
            variant: "text-xs/medium",
            tag: "span",
            className: d.playstyle,
            color: "none",
            children: t.playstyle
          }), " ", "\xb7 ", t.memberCount, " members"]
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t.description
      }), (0, a.jsxs)("div", {
        className: d.primetimeContainer,
        children: [(0, a.jsx)(s.GameControllerIcon, {
          className: d.primetimeIcon,
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
        className: d.traitsContainer,
        children: t.traits.map(e => (0, a.jsx)("div", {
          className: d.trait,
          children: (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: e
          })
        }, e))
      })]
    }), (0, a.jsxs)("div", {
      className: d.cardFooter,
      children: [(0, a.jsxs)("div", {
        className: d.cardFooterInfo,
        children: [(0, a.jsxs)("div", {
          className: d.cardFooterLocation,
          children: [(0, a.jsx)(l.GlobeEarthIcon, {
            className: d.cardFooterLocationIcon,
            color: "currentColor"
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.location
          })]
        }), (0, a.jsxs)("div", {
          className: d.cardFooterLanguage,
          children: [(0, a.jsx)(i.LanguageIcon, {
            className: d.cardFooterLanguageIcon,
            color: "currentColor"
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.language
          })]
        })]
      }), (0, a.jsx)("div", {
        className: d.__invalid_cardFooterGames,
        children: c.map(e => {
          if (null == e) return null;
          let t = e.getIconURL(24);
          return null == t ? null : (0, a.jsx)("div", {
            className: d.__invalid_cardFooterGame,
            children: (0, a.jsx)("img", {
              src: t,
              alt: e.name,
              className: d.__invalid_cardFooterGameIcon
            })
          }, e.id)
        })
      })]
    }), (0, a.jsx)("div", {
      className: d.cardBrandingFooter,
      style: {
        background: n
      }
    })]
  })
}