n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(481060),
  r = n(409700),
  o = n(230711),
  c = n(446753),
  u = n(981631),
  d = n(921944),
  E = n(689938),
  h = n(196873);

function _(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, i.jsxs)(c.Z, {
    className: l()(h.card, t),
    children: [(0, i.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      className: h.header,
      children: E.Z.Messages.NOW_PLAYING_GDPR_HEADER
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: E.Z.Messages.NOW_PLAYING_GDPR_BODY.format({
        onPrivacyClick: () => o.Z.open(u.oAB.PRIVACY_AND_SAFETY)
      })
    }), (0, i.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, i.jsx)(a.Button, {
        size: a.Button.Sizes.SMALL,
        onClick: () => (0, r.g)([u.pjP.PERSONALIZATION], []),
        children: E.Z.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
      }), (0, i.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        onClick: () => n(d.L.DISMISS),
        look: a.Button.Looks.LINK,
        children: E.Z.Messages.NO_THANKS
      })]
    })]
  })
}