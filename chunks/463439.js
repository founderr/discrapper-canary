n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var s, o, r = n(735250),
  a = n(470079),
  i = n(481060),
  c = n(442837),
  u = n(194359),
  E = n(782568),
  N = n(726521),
  l = n(485664),
  T = n(699516),
  I = n(863653),
  _ = n(473092),
  A = n(941362),
  d = n(850165),
  R = n(134612),
  O = n(981631),
  C = n(689938),
  S = n(917475),
  P = n(149355);

function h(e) {
  let {
senderId: t,
channelId: n,
hasReported: s,
onReport: o,
trackAnalyticsEvent: h
  } = e, f = (0, c.e7)([T.Z], () => T.Z.isBlocked(t)), [M, g] = a.useState(f), p = (0, l.o)(), b = (0, I.zF)('ic-take-action-web'), [m, x] = a.useState(!1), L = (0, A.q)(n), Z = a.useMemo(() => p ? 0 : b ? 2 : 1, [
p,
b
  ]), v = () => {
g(!0), u.Z.addRelationship({
  userId: t,
  context: {
    location: R.DL
  },
  type: O.OGo.BLOCKED
}), h(_.NM.USER_TAKEOVER_MODAL_BLOCK);
  }, B = () => {
g(!1), u.Z.unblockUser(t, {
  location: R.DL
}), h(_.NM.USER_TAKEOVER_MODAL_UNBLOCK);
  }, D = async () => {
if (null != L)
  x(!0), await (0, N.J7)(L, () => {
    (0, i.showToast)((0, i.createToast)(C.Z.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, i.ToastType.SUCCESS)), o();
  }, () => {
    (0, i.showToast)((0, i.createToast)(C.Z.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, i.ToastType.FAILURE));
  }), x(!1), h(_.NM.USER_TAKEOVER_MODAL_REPORT);
  }, j = e => {
0 === e ? ((0, E.Z)(R.EI), h(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === e ? ((0, E.Z)(R.$l), h(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, E.Z)(R.n4), h(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
  }, V = a.useMemo(() => {
switch (Z) {
  case 0:
    return C.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL;
  case 2:
    return C.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE;
  default:
    return C.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE;
}
  }, [Z]);
  return (0, r.jsx)(d.Z, {
heroImageSrc: P,
heroImageAlt: C.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
header: C.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
description: C.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
children: (0, r.jsxs)('div', {
  className: S.buttonContainer,
  children: [
    (0, r.jsxs)(i.Button, {
      color: i.Button.Colors.BRAND,
      size: i.Button.Sizes.LARGE,
      className: S.button,
      innerClassName: S.buttonInner,
      onClick: () => {
        M ? B() : v();
      },
      children: [
        (0, r.jsx)(i.CircleXIcon, {
          size: 'custom',
          height: 20,
          width: 20,
          color: i.tokens.colors.WHITE,
          className: S.buttonIcon
        }),
        M ? C.Z.Messages.UNBLOCK : C.Z.Messages.BLOCK
      ]
    }),
    (0, r.jsxs)(i.Button, {
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.LARGE,
      className: S.button,
      innerClassName: S.buttonInner,
      onClick: D,
      submitting: m,
      disabled: s,
      children: [
        (0, r.jsx)(i.FlagIcon, {
          size: 'custom',
          height: 20,
          width: 20,
          color: i.tokens.colors.WHITE,
          className: S.buttonIcon
        }),
        s ? C.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : C.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT
      ]
    }),
    (0, r.jsxs)(i.Button, {
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.LARGE,
      className: S.button,
      innerClassName: S.buttonInner,
      onClick: () => j(Z),
      children: [
        (0, r.jsx)(i.ChatIcon, {
          size: 'custom',
          height: 20,
          width: 20,
          color: i.tokens.colors.WHITE,
          className: S.buttonIcon
        }),
        V
      ]
    })
  ]
})
  });
}
(o = s || (s = {}))[o.CTL = 0] = 'CTL', o[o.NO_FILTR = 1] = 'NO_FILTR', o[o.THROUGHLINE = 2] = 'THROUGHLINE';