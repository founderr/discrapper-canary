n.d(t, {
  C: function() {
return E;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(359110),
  l = n(6025),
  o = n(433355),
  c = n(26373),
  d = n(486622),
  u = n(376191),
  _ = n(689938),
  h = n(762125);

function E(e) {
  let {
active: t,
user: n,
channel: E
  } = e, I = (0, c.K)(), m = s.useCallback(() => {
(0, a.showToast)((0, a.createToast)(_.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, a.ToastType.FAILURE));
  }, []), g = s.useCallback(() => {
l.Z.closeChannelSidebar(o.uZ);
  }, []), p = s.useCallback(() => {
l.Z.closeChannelSidebar(o.uZ), I && (0, r.Kh)(E.id);
  }, [
E.id,
I
  ]), {
acceptMessageRequest: T,
rejectMessageRequest: f,
isAcceptLoading: S,
isRejectLoading: C,
isUserProfileLoading: N,
isOptimisticAccepted: A,
isOptimisticRejected: v
  } = (0, d.m)({
user: n,
onAcceptSuccess: p,
onRejectSuccess: g,
onError: m
  }), Z = S || C || N || A || v;
  return (0, i.jsxs)('div', {
className: h.container,
children: [
  (0, i.jsx)(u.Z, {
    channel: E,
    otherUser: n,
    active: t
  }),
  (0, i.jsxs)('div', {
    className: h.actions,
    children: [
      (0, i.jsx)(a.Button, {
        className: h.button,
        color: a.ButtonColors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), f(E.id);
        },
        disabled: Z,
        submitting: C || v,
        children: _.Z.Messages.MESSAGE_REQUEST_IGNORE
      }),
      (0, i.jsx)(a.Button, {
        className: h.button,
        color: a.ButtonColors.BRAND,
        size: a.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), T(E.id);
        },
        disabled: Z,
        submitting: S || N || A,
        children: _.Z.Messages.MESSAGE_REQUEST_ACCEPT
      })
    ]
  })
]
  });
}