t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  r = t(481060),
  a = t(528027),
  o = t(686807),
  u = t(113318),
  c = t(240233);

function d(e) {
  let {
    benefit: n,
    guildId: t
  } = e, l = (0, u.Z)(t, n.ref_id), d = (0, i.jsx)(a.Z, {
    guildId: t,
    emojiId: n.emoji_id,
    emojiName: n.emoji_name
  }), _ = null != l ? (0, i.jsx)(r.Clickable, {
    className: c.__invalid_channelLink,
    onClick: l.navigateToChannel,
    "aria-label": l.ariaLabel,
    role: "link",
    children: (0, i.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: s()(c.name, c.linkedName),
      children: (0, o.Z)(n)
    })
  }) : (0, i.jsx)(r.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: c.name,
    children: (0, o.Z)(n)
  });
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [_, (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n.description
      })]
    }), (0, i.jsx)("div", {
      className: c.emojiContainer,
      children: d
    })]
  })
}