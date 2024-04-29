"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("409700"),
  o = a("230711"),
  u = a("446753"),
  d = a("981631"),
  c = a("921944"),
  f = a("689938"),
  E = a("801317");

function h(e) {
  let {
    className: t,
    markAsDismissed: a
  } = e;
  return (0, n.jsxs)(u.default, {
    className: l()(E.card, t),
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: E.header,
      children: f.default.Messages.NOW_PLAYING_GDPR_HEADER
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: f.default.Messages.NOW_PLAYING_GDPR_BODY.format({
        onPrivacyClick: () => o.default.open(d.UserSettingsSections.PRIVACY_AND_SAFETY)
      })
    }), (0, n.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, n.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, r.setConsents)([d.Consents.PERSONALIZATION], []),
        children: f.default.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
      }), (0, n.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: () => a(c.ContentDismissActionType.DISMISS),
        look: i.Button.Looks.LINK,
        children: f.default.Messages.NO_THANKS
      })]
    })]
  })
}