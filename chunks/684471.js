t.d(n, {
  Z: function() {
    return T
  }
});
var s = t(735250);
t(470079);
var o = t(481060),
  r = t(442837),
  a = t(594174),
  i = t(51144),
  c = t(473092),
  E = t(955708),
  N = t(850165),
  l = t(689938),
  u = t(897583),
  I = t(282668);

function T(e) {
  let {
    senderId: n,
    trackAnalyticsEvent: t,
    onNavigate: T
  } = e, A = (0, r.e7)([a.default], () => {
    let e = a.default.getUser(n);
    return i.ZP.getName(e)
  });
  return (0, s.jsx)(N.Z, {
    header: l.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
    description: l.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
      username: A
    }),
    heroImageSrc: I,
    heroImageAlt: l.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
    children: (0, s.jsxs)("div", {
      className: u.buttonContainer,
      children: [(0, s.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.LARGE,
        className: u.button,
        onClick: () => {
          T(E.InappropriateConversationModalSlideKeys.TAKE_ACTION), t(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        },
        children: l.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
      }), (0, s.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.LARGE,
        className: u.button,
        onClick: () => {
          T(E.InappropriateConversationModalSlideKeys.SAFETY_TIPS), t(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        },
        children: l.Z.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
      })]
    })
  })
}