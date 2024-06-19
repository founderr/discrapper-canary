t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(993413),
  r = t(496675),
  o = t(52597),
  c = t(981631),
  E = t(689938),
  d = t(946269);

function _(e) {
  let {
    errors: s,
    pendingNick: t,
    currentNick: _,
    username: T,
    guild: S
  } = e, u = null != t ? t : _, I = (0, i.e7)([r.Z], () => r.Z.can(c.Plq.CHANGE_NICKNAME, S) || r.Z.can(c.Plq.MANAGE_NICKNAMES, S));
  return (0, n.jsxs)(l.Z, {
    title: E.Z.Messages.SERVER_NICKNAME,
    errors: s,
    children: [(0, n.jsx)(a.TextInput, {
      value: null != u ? u : "",
      placeholder: T,
      maxLength: c.l$U,
      onChange: function(e) {
        (0, o.wi)(e, _)
      },
      disabled: !I
    }), !I && (0, n.jsx)(a.FormText, {
      className: d.nicknameDisabled,
      type: a.FormText.Types.DESCRIPTION,
      children: E.Z.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
    })]
  })
}