n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(63063),
  c = n(981631),
  u = n(689938),
  d = n(214003);

function E(e) {
  let {
    children: t
  } = e, n = s.useCallback(() => {
    window.open(o.Z.getArticleURL(c.BhN.QUESTS_LEARN_MORE))
  }, []);
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)("div", {
      className: a()(d.image)
    }), (0, i.jsx)("div", {
      className: a()(d.leftToRightGradient)
    }), (0, i.jsx)("div", {
      className: a()(d.gradient)
    }), (0, i.jsx)("div", {
      className: d.contents,
      children: (0, i.jsxs)("div", {
        className: d.textContainer,
        children: [(0, i.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-brand",
          className: d.eyebrow,
          children: u.Z.Messages.QUESTS_HOME_HERO_EYEBROW
        }), (0, i.jsx)(r.Heading, {
          variant: "display-md",
          color: "always-white",
          className: d.header,
          children: u.Z.Messages.QUESTS_HOME_HERO_TITLE
        }), (0, i.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: u.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION
        }), (0, i.jsxs)(r.Button, {
          size: "medium",
          className: d.button,
          onClick: n,
          innerClassName: d.innerButton,
          children: [(0, i.jsx)(r.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            className: d.externalLinkText,
            children: u.Z.Messages.LEARN_MORE
          }), (0, i.jsx)(r.LinkExternalSmallIcon, {
            className: d.icon,
            color: "var(--white-500)"
          })]
        })]
      })
    }), t]
  })
}