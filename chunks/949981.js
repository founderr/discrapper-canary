n.d(t, {
  Z: function() {
    return N
  }
}), n(724458), n(653041);
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(442837),
  r = n(131704),
  o = n(592125),
  c = n(594174),
  u = n(197409),
  d = n(823379),
  E = n(358595),
  _ = n(981631),
  I = n(689938),
  T = n(637091);

function N(e) {
  let t, {
      invite: n,
      author: i,
      currentUserId: N,
      onTransitionToInviteChannel: m,
      onAcceptInstantInvite: h
    } = e,
    C = N === i.id,
    S = n.state === _.r2o.ACCEPTING,
    A = (0, a.e7)([o.Z], () => null != n.channel ? o.Z.getChannel(n.channel.id) : null, [n]);
  l()(null == A || A.isPrivate(), "must be a private channel");
  let p = null != A;
  if (null == A) {
    if (null == n.channel) return (0, s.jsx)(E.Z, {});
    A = (0, r.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = A.recipients.reduce((e, t) => {
      let n = c.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = c.default.getCurrentUser();
    p && null != e && t.push(e)
  }
  let g = A.name;
  (null == g || "" === g) && (g = t.length > 0 ? t.filter(d.lm).map(e => e.username).join(", ") : I.Z.Messages.UNNAMED);
  let f = p ? m : h,
    O = I.Z.Messages.JOIN_GUILD,
    R = u.Z.Button.Colors.GREEN;
  p && (O = I.Z.Messages.JOINED_GUILD, R = u.Z.Button.Colors.PRIMARY);
  let M = I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return C && (M = I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, s.jsxs)(u.Z, {
    children: [(0, s.jsx)(u.Z.Header, {
      text: M
    }), (0, s.jsxs)(u.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: T.headerLine,
        children: [(0, s.jsx)(u.Z.Icon, {
          channel: A,
          onClick: p ? f : void 0
        }), (0, s.jsx)(u.Z.Info, {
          title: g,
          onClick: p ? f : void 0,
          children: (0, s.jsx)(u.Z.Data, {
            members: t.length
          })
        })]
      }), (0, s.jsx)(u.Z.Button, {
        onClick: f,
        submitting: S,
        isDisabled: p,
        color: R,
        children: O
      })]
    })]
  })
}