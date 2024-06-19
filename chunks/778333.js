n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(493683),
  r = n(447543),
  o = n(598077),
  c = n(314897),
  u = n(592125),
  d = n(699516),
  E = n(197409),
  _ = n(51144),
  I = n(981631),
  T = n(689938),
  N = n(637091);

function m(e) {
  var t;
  let {
    invite: n,
    getAcceptInviteContext: m
  } = e, h = (0, l.e7)([c.default], () => c.default.getId()), C = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === h, S = n.state === I.r2o.ACCEPTING, A = (0, l.e7)([d.Z], () => {
    var e;
    return null != n.inviter && d.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
  }), p = i.useCallback(() => {
    null != n.inviter && null != u.Z.getDMFromUserId(n.inviter.id) && a.Z.openPrivateChannel([n.inviter.id])
  }, [n.inviter]), g = i.useCallback(() => {
    let e = m("Invite Button Embed");
    r.Z.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n.code, m]);
  if (null == n.inviter) return null;
  let f = A ? p : g,
    O = T.Z.Messages.INVITE_BUTTON_ADD_FRIEND,
    R = E.Z.Button.Colors.GREEN;
  A ? (O = T.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS, R = E.Z.Button.Colors.PRIMARY) : C && (O = T.Z.Messages.INVITE_BUTTON_ADD_FRIEND, R = E.Z.Button.Colors.PRIMARY);
  let M = C ? T.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : T.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
    x = null != n.inviter ? "".concat(n.inviter.username) : "",
    v = null != n.inviter ? _.ZP.getUserTag(n.inviter) : "";
  return (0, s.jsxs)(E.Z, {
    children: [(0, s.jsx)(E.Z.Header, {
      text: M
    }), (0, s.jsxs)(E.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: N.headerLine,
        children: [(0, s.jsx)(E.Z.Icon, {
          user: new o.Z(n.inviter),
          onClick: A ? f : void 0
        }), (0, s.jsx)(E.Z.Info, {
          title: x,
          onClick: A ? f : void 0,
          children: v
        })]
      }), (0, s.jsx)(E.Z.Button, {
        onClick: f,
        submitting: S,
        isDisabled: C,
        color: R,
        children: O
      })]
    })]
  })
}