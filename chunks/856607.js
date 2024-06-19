t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(37234),
  l = t(703656),
  r = t(981631),
  o = t(689938),
  c = t(833863),
  E = t(322221);

function d() {
  return (0, n.jsxs)("div", {
    className: c.emptyState,
    children: [(0, n.jsx)("img", {
      src: E,
      alt: "",
      className: c.image
    }), (0, n.jsx)(i.Heading, {
      className: c.topSpacing,
      variant: "heading-lg/extrabold",
      children: o.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_TITLE
    }), (0, n.jsx)(i.Text, {
      className: c.topSpacing,
      variant: "text-md/normal",
      children: o.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_DESCRIPTION
    }), (0, n.jsx)(i.Button, {
      className: c.topSpacing,
      onClick: () => {
        (0, l.uL)(r.Z5c.GUILD_DISCOVERY), a.xf()
      },
      children: o.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_CTA
    })]
  })
}