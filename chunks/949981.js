"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("724458"), n("653041");
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("442837"),
  r = n("131704"),
  o = n("592125"),
  u = n("594174"),
  d = n("197409"),
  c = n("823379"),
  E = n("358595"),
  f = n("981631"),
  _ = n("689938"),
  T = n("798719");

function m(e) {
  let t, {
      invite: n,
      author: a,
      currentUserId: m,
      onTransitionToInviteChannel: I,
      onAcceptInstantInvite: N
    } = e,
    p = m === a.id,
    S = n.state === f.InviteStates.ACCEPTING,
    C = (0, i.useStateFromStores)([o.default], () => null != n.channel ? o.default.getChannel(n.channel.id) : null, [n]);
  l()(null == C || C.isPrivate(), "must be a private channel");
  let A = null != C;
  if (null == C) {
    if (null == n.channel) return (0, s.jsx)(E.default, {});
    C = (0, r.createChannelRecordFromInvite)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = C.recipients.reduce((e, t) => {
      let n = u.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = u.default.getCurrentUser();
    A && null != e && t.push(e)
  }
  let h = C.name;
  (null == h || "" === h) && (h = t.length > 0 ? t.filter(c.isNotNullish).map(e => e.username).join(", ") : _.default.Messages.UNNAMED);
  let g = A ? I : N,
    M = _.default.Messages.JOIN_GUILD,
    O = d.default.Button.Colors.GREEN;
  A && (M = _.default.Messages.JOINED_GUILD, O = d.default.Button.Colors.PRIMARY);
  let R = _.default.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return p && (R = _.default.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, s.jsxs)(d.default, {
    children: [(0, s.jsx)(d.default.Header, {
      text: R
    }), (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: T.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          channel: C,
          onClick: A ? g : void 0
        }), (0, s.jsx)(d.default.Info, {
          title: h,
          onClick: A ? g : void 0,
          children: (0, s.jsx)(d.default.Data, {
            members: t.length
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: g,
        submitting: S,
        isDisabled: A,
        color: O,
        children: M
      })]
    })]
  })
}