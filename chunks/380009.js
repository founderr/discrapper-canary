n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var s = n(434404),
  l = n(970731),
  a = n(981631),
  r = n(689938),
  o = n(490808),
  c = n(687351);

function u(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, i.jsx)(l.ZP, {
    header: r.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_TITLE,
    content: r.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_DESCRIPTION,
    asset: (0, i.jsx)("div", {
      className: o.image,
      children: (0, i.jsx)("img", {
        alt: "",
        src: c
      })
    }),
    buttonCTA: r.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_ACCEPT,
    onClick: e => {
      var n;
      n = t, s.Z.open(n.id, a.pNK.DISCOVERY_LANDING_PAGE)
    },
    secondaryButtonCTA: r.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_DISMISS,
    onSecondaryClick: () => {},
    markAsDismissed: n
  })
}