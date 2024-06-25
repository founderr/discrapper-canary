n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(528027),
  o = n(686807),
  c = n(113318),
  u = n(240233);

function d(e) {
  let {
    benefit: t,
    guildId: n
  } = e, i = (0, c.Z)(n, t.ref_id), d = (0, s.jsx)(r.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), E = null != i ? (0, s.jsx)(a.Clickable, {
    className: u.__invalid_channelLink,
    onClick: i.navigateToChannel,
    "aria-label": i.ariaLabel,
    role: "link",
    children: (0, s.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: l()(u.name, u.linkedName),
      children: (0, o.Z)(t)
    })
  }) : (0, s.jsx)(a.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: u.name,
    children: (0, o.Z)(t)
  });
  return (0, s.jsxs)("div", {
    className: u.container,
    children: [(0, s.jsxs)("div", {
      className: u.infoContainer,
      children: [E, (0, s.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, s.jsx)("div", {
      className: u.emojiContainer,
      children: d
    })]
  })
}