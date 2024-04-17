"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("493683"),
  r = n("447543"),
  o = n("598077"),
  u = n("314897"),
  d = n("592125"),
  c = n("699516"),
  E = n("197409"),
  f = n("51144"),
  _ = n("981631"),
  T = n("689938"),
  I = n("558338");

function m(e) {
  var t;
  let {
    invite: n,
    getAcceptInviteContext: m
  } = e, N = (0, l.useStateFromStores)([u.default], () => u.default.getId()), p = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === N, S = n.state === _.InviteStates.ACCEPTING, C = (0, l.useStateFromStores)([c.default], () => {
    var e;
    return null != n.inviter && c.default.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
  }), A = a.useCallback(() => {
    null != n.inviter && null != d.default.getDMFromUserId(n.inviter.id) && i.default.openPrivateChannel([n.inviter.id])
  }, [n.inviter]), h = a.useCallback(() => {
    let e = m("Invite Button Embed");
    r.default.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n.code, m]);
  if (null == n.inviter) return null;
  let g = C ? A : h,
    M = T.default.Messages.INVITE_BUTTON_ADD_FRIEND,
    O = E.default.Button.Colors.GREEN;
  C ? (M = T.default.Messages.INVITE_BUTTON_ALREADY_FRIENDS, O = E.default.Button.Colors.PRIMARY) : p && (M = T.default.Messages.INVITE_BUTTON_ADD_FRIEND, O = E.default.Button.Colors.PRIMARY);
  let R = p ? T.default.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : T.default.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
    v = null != n.inviter ? "".concat(n.inviter.username) : "",
    L = null != n.inviter ? f.default.getUserTag(n.inviter) : "";
  return (0, s.jsxs)(E.default, {
    children: [(0, s.jsx)(E.default.Header, {
      text: R
    }), (0, s.jsxs)(E.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: I.headerLine,
        children: [(0, s.jsx)(E.default.Icon, {
          user: new o.default(n.inviter),
          onClick: C ? g : void 0
        }), (0, s.jsx)(E.default.Info, {
          title: v,
          onClick: C ? g : void 0,
          children: L
        })]
      }), (0, s.jsx)(E.default.Button, {
        onClick: g,
        submitting: S,
        isDisabled: p,
        color: O,
        children: M
      })]
    })]
  })
}