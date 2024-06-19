n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(144144),
  a = n(314897),
  r = n(944486),
  o = n(197409),
  c = n(585483),
  u = n(51144),
  d = n(981631),
  E = n(689938),
  _ = n(637091);

function I(e) {
  let t, n, I, {
      author: T,
      banned: N
    } = e,
    m = (0, i.e7)([a.default], () => a.default.getId()),
    h = (0, i.e7)([r.Z], () => r.Z.getChannelId()),
    C = u.ZP.useName(T),
    S = m === T.id;
  return S ? (t = E.Z.Messages.INVITE_BUTTON_INVALID_OWNER, I = E.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (I = E.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, N ? t = E.Z.Messages.INSTANT_INVITE_BANNED_INFO : null != C ? (t = E.Z.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
    username: C
  }), n = (0, s.jsx)(o.Z.Button, {
    onClick: function() {
      let {
        id: e
      } = T, t = "@".concat(u.ZP.getUserTag(T, {
        decoration: "never"
      }));
      c.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != h && l.Z.startTyping(h)
    },
    children: E.Z.Messages.MENTION
  })) : t = E.Z.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, s.jsxs)(o.Z, {
    children: [(0, s.jsx)(o.Z.Header, {
      text: I
    }), (0, s.jsxs)(o.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: _.headerLine,
        children: [(0, s.jsx)(o.Z.Icon, {
          expired: !0
        }), (0, s.jsx)(o.Z.Info, {
          expired: !0,
          title: E.Z.Messages.INVITE_BUTTON_INVALID,
          children: t
        })]
      }), n]
    })]
  })
}