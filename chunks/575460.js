t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  s = t(259580),
  r = t(528027),
  a = t(686807),
  o = t(113318),
  u = t(121834);

function c(e) {
  let {
    benefit: n,
    guildId: t,
    onClick: c
  } = e, d = (0, o.Z)(t, n.ref_id), _ = (0, i.jsx)(r.Z, {
    guildId: t,
    emojiId: n.emoji_id,
    emojiName: n.emoji_name
  });
  return (0, i.jsxs)(l.Clickable, {
    className: u.container,
    onClick: () => {
      null == d || d.navigateToChannel(), c()
    },
    "aria-label": null == d ? void 0 : d.ariaLabel,
    role: "link",
    children: [(0, i.jsx)("div", {
      className: u.emojiContainer,
      children: _
    }), (0, i.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: u.name,
        children: (0, a.Z)(n)
      }), (0, i.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n.description
      })]
    }), (0, i.jsx)(s.Z, {
      direction: s.Z.Directions.RIGHT,
      className: u.caret
    })]
  })
}