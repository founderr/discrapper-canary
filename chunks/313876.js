n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(314897),
  a = n(197409),
  r = n(782605),
  o = n(689938);

function c(e) {
  var t, n;
  let {
    author: c,
    inviteError: u
  } = e, d = (0, i.e7)([l.default], () => l.default.getId()) === c.id ? o.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, E = (0, r.l)(null == u ? void 0 : u.code);
  return (0, s.jsxs)(a.Z, {
    children: [(0, s.jsx)(a.Z.Header, {
      text: d
    }), (0, s.jsxs)(a.Z.Body, {
      children: [(0, s.jsx)(a.Z.Icon, {
        expired: !0
      }), (0, s.jsx)(a.Z.Info, {
        expired: !0,
        title: null !== (t = null == E ? void 0 : E.title) && void 0 !== t ? t : o.Z.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == E ? void 0 : E.description) && void 0 !== n ? n : null == u ? void 0 : u.message
      })]
    })]
  })
}