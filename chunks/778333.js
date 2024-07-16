n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(493683),
  l = n(447543),
  o = n(955415),
  c = n(598077),
  d = n(314897),
  u = n(592125),
  _ = n(699516),
  E = n(51144),
  I = n(981631),
  m = n(689938),
  T = n(182578);

function h(e) {
  var t;
  let {
invite: n,
getAcceptInviteContext: h
  } = e, N = (0, s.e7)([d.default], () => d.default.getId()), f = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === N, p = n.state === I.r2o.ACCEPTING, C = (0, s.e7)([_.Z], () => {
var e;
return null != n.inviter && _.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
  }), g = a.useCallback(() => {
null != n.inviter && null != u.Z.getDMFromUserId(n.inviter.id) && r.Z.openPrivateChannel([n.inviter.id]);
  }, [n.inviter]), S = a.useCallback(() => {
let e = h('Invite Button Embed');
l.Z.acceptInviteAndTransitionToInviteChannel({
  inviteKey: n.code,
  context: e
});
  }, [
n.code,
h
  ]);
  if (null == n.inviter)
return null;
  let A = C ? g : S,
R = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND,
O = o.Z.Button.Colors.GREEN;
  C ? (R = m.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS, O = o.Z.Button.Colors.PRIMARY) : f && (R = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND, O = o.Z.Button.Colors.PRIMARY);
  let x = f ? m.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : m.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
M = null != n.inviter ? ''.concat(n.inviter.username) : '',
v = null != n.inviter ? E.ZP.getUserTag(n.inviter) : '';
  return (0, i.jsxs)(o.Z, {
children: [
  (0, i.jsx)(o.Z.Header, {
    text: x
  }),
  (0, i.jsxs)(o.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: T.headerLine,
        children: [
          (0, i.jsx)(o.Z.Icon, {
            user: new c.Z(n.inviter),
            onClick: C ? A : void 0
          }),
          (0, i.jsx)(o.Z.Info, {
            title: M,
            onClick: C ? A : void 0,
            children: v
          })
        ]
      }),
      (0, i.jsx)(o.Z.Button, {
        onClick: A,
        submitting: p,
        isDisabled: f,
        color: O,
        children: R
      })
    ]
  })
]
  });
}