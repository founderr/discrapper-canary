"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("257182"),
  o = n("481060"),
  u = n("63063"),
  d = n("981631"),
  c = n("689938"),
  f = n("432406");

function E(e) {
  let {
    children: t
  } = e, n = s.useCallback(() => {
    window.open(u.default.getArticleURL(d.HelpdeskArticles.QUESTS_LEARN_MORE))
  }, []);
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("div", {
      className: i()(f.image)
    }), (0, a.jsx)("div", {
      className: i()(f.gradient)
    }), (0, a.jsx)("div", {
      className: f.contents,
      children: (0, a.jsxs)("div", {
        className: f.textContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "eyebrow",
          color: "text-brand",
          className: f.eyebrow,
          children: c.default.Messages.QUESTS_HOME_HERO_EYEBROW
        }), (0, a.jsx)(o.Heading, {
          variant: "display-md",
          color: "always-white",
          className: f.header,
          children: c.default.Messages.QUESTS_HOME_HERO_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: c.default.Messages.QUESTS_HOME_HERO_DESCRIPTION
        }), (0, a.jsxs)(o.Button, {
          size: "medium",
          className: f.button,
          onClick: n,
          innerClassName: f.innerButton,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            className: f.externalLinkText,
            children: c.default.Messages.LEARN_MORE
          }), (0, a.jsx)(r.LinkExternalSmallIcon, {
            className: f.icon,
            color: "var(--white-500)"
          })]
        })]
      })
    }), t]
  })
}