n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(259580),
  a = n(528027),
  r = n(686807),
  o = n(113318),
  c = n(121834);

function u(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: u
  } = e, d = (0, o.Z)(n, t.ref_id), E = (0, s.jsx)(a.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, s.jsxs)(i.Clickable, {
    className: c.container,
    onClick: () => {
      null == d || d.navigateToChannel(), u()
    },
    "aria-label": null == d ? void 0 : d.ariaLabel,
    role: "link",
    children: [(0, s.jsx)("div", {
      className: c.emojiContainer,
      children: E
    }), (0, s.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: c.name,
        children: (0, r.Z)(t)
      }), (0, s.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, s.jsx)(l.Z, {
      direction: l.Z.Directions.RIGHT,
      className: c.caret
    })]
  })
}