n.d(t, {
  Z: function() {
return I;
  }
});
var s = n(735250);
n(470079);
var o = n(481060),
  r = n(442837),
  a = n(594174),
  i = n(51144),
  c = n(473092),
  u = n(955708),
  E = n(850165),
  N = n(689938),
  l = n(927838),
  T = n(282668);

function I(e) {
  let {
senderId: t,
trackAnalyticsEvent: n,
onNavigate: I
  } = e, _ = (0, r.e7)([a.default], () => {
let e = a.default.getUser(t);
return i.ZP.getName(e);
  });
  return (0, s.jsx)(E.Z, {
header: N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
description: N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
  username: _
}),
heroImageSrc: T,
heroImageAlt: N.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
children: (0, s.jsxs)('div', {
  className: l.buttonContainer,
  children: [
    (0, s.jsx)(o.Button, {
      color: o.Button.Colors.BRAND,
      size: o.Button.Sizes.LARGE,
      className: l.button,
      onClick: () => {
        I(u.InappropriateConversationModalSlideKeys.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
      },
      children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
    }),
    (0, s.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.LARGE,
      className: l.button,
      onClick: () => {
        I(u.InappropriateConversationModalSlideKeys.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
      },
      children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
    })
  ]
})
  });
}