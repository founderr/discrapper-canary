"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("144144"),
  i = n("314897"),
  r = n("944486"),
  o = n("197409"),
  u = n("585483"),
  d = n("51144"),
  c = n("981631"),
  E = n("689938"),
  f = n("798719");

function _(e) {
  let t, n, _, {
      author: T,
      banned: I
    } = e,
    m = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
    N = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId()),
    p = d.default.useName(T),
    S = m === T.id;
  return S ? (t = E.default.Messages.INVITE_BUTTON_INVALID_OWNER, _ = E.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (_ = E.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, I ? t = E.default.Messages.INSTANT_INVITE_BANNED_INFO : null != p ? (t = E.default.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
    username: p
  }), n = (0, s.jsx)(o.default.Button, {
    onClick: function() {
      let {
        id: e
      } = T, t = "@".concat(d.default.getUserTag(T, {
        decoration: "never"
      }));
      u.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != N && l.default.startTyping(N)
    },
    children: E.default.Messages.MENTION
  })) : t = E.default.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, s.jsxs)(o.default, {
    children: [(0, s.jsx)(o.default.Header, {
      text: _
    }), (0, s.jsxs)(o.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: f.headerLine,
        children: [(0, s.jsx)(o.default.Icon, {
          expired: !0
        }), (0, s.jsx)(o.default.Info, {
          expired: !0,
          title: E.default.Messages.INVITE_BUTTON_INVALID,
          children: t
        })]
      }), n]
    })]
  })
}