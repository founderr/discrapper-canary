"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("724458"), n("653041");
var s = n("735250");
n("470079");
var l = n("512722"),
  a = n.n(l),
  i = n("442837"),
  r = n("131704"),
  o = n("592125"),
  u = n("594174"),
  d = n("197409"),
  c = n("823379"),
  f = n("358595"),
  E = n("981631"),
  _ = n("689938"),
  m = n("558338");

function T(e) {
  let t, {
      invite: n,
      author: l,
      currentUserId: T,
      onTransitionToInviteChannel: I,
      onAcceptInstantInvite: p
    } = e,
    h = T === l.id,
    N = n.state === E.InviteStates.ACCEPTING,
    S = (0, i.useStateFromStores)([o.default], () => null != n.channel ? o.default.getChannel(n.channel.id) : null, [n]);
  a()(null == S || S.isPrivate(), "must be a private channel");
  let C = null != S;
  if (null == S) {
    if (null == n.channel) return (0, s.jsx)(f.default, {});
    S = (0, r.createChannelRecordFromInvite)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = S.recipients.reduce((e, t) => {
      let n = u.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = u.default.getCurrentUser();
    C && null != e && t.push(e)
  }
  let A = S.name;
  (null == A || "" === A) && (A = t.length > 0 ? t.filter(c.isNotNullish).map(e => e.username).join(", ") : _.default.Messages.UNNAMED);
  let g = C ? I : p,
    M = _.default.Messages.JOIN_GUILD,
    R = d.default.Button.Colors.GREEN;
  C && (M = _.default.Messages.JOINED_GUILD, R = d.default.Button.Colors.PRIMARY);
  let v = _.default.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return h && (v = _.default.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, s.jsxs)(d.default, {
    children: [(0, s.jsx)(d.default.Header, {
      text: v
    }), (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          channel: S,
          onClick: C ? g : void 0
        }), (0, s.jsx)(d.default.Info, {
          title: A,
          onClick: C ? g : void 0,
          children: (0, s.jsx)(d.default.Data, {
            members: t.length
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: g,
        submitting: N,
        isDisabled: C,
        color: R,
        children: M
      })]
    })]
  })
}