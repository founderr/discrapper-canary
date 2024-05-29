"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  f = n("197409"),
  E = n("51144"),
  _ = n("981631"),
  m = n("689938"),
  T = n("798719");

function I(e) {
  var t;
  let {
    invite: n,
    getAcceptInviteContext: I
  } = e, p = (0, l.useStateFromStores)([u.default], () => u.default.getId()), h = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === p, N = n.state === _.InviteStates.ACCEPTING, S = (0, l.useStateFromStores)([c.default], () => {
    var e;
    return null != n.inviter && c.default.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
  }), C = a.useCallback(() => {
    null != n.inviter && null != d.default.getDMFromUserId(n.inviter.id) && i.default.openPrivateChannel([n.inviter.id])
  }, [n.inviter]), g = a.useCallback(() => {
    let e = I("Invite Button Embed");
    r.default.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n.code, I]);
  if (null == n.inviter) return null;
  let A = S ? C : g,
    M = m.default.Messages.INVITE_BUTTON_ADD_FRIEND,
    v = f.default.Button.Colors.GREEN;
  S ? (M = m.default.Messages.INVITE_BUTTON_ALREADY_FRIENDS, v = f.default.Button.Colors.PRIMARY) : h && (M = m.default.Messages.INVITE_BUTTON_ADD_FRIEND, v = f.default.Button.Colors.PRIMARY);
  let R = h ? m.default.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : m.default.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
    O = null != n.inviter ? "".concat(n.inviter.username) : "",
    x = null != n.inviter ? E.default.getUserTag(n.inviter) : "";
  return (0, s.jsxs)(f.default, {
    children: [(0, s.jsx)(f.default.Header, {
      text: R
    }), (0, s.jsxs)(f.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: T.headerLine,
        children: [(0, s.jsx)(f.default.Icon, {
          user: new o.default(n.inviter),
          onClick: S ? A : void 0
        }), (0, s.jsx)(f.default.Info, {
          title: O,
          onClick: S ? A : void 0,
          children: x
        })]
      }), (0, s.jsx)(f.default.Button, {
        onClick: A,
        submitting: N,
        isDisabled: h,
        color: v,
        children: M
      })]
    })]
  })
}