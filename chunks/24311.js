t.d(n, {
  Z: function() {
    return M
  }
});
var l = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  r = t(493683),
  u = t(740492),
  s = t(314897),
  d = t(592125),
  o = t(699516),
  c = t(944486),
  Z = t(981631),
  E = t(689938);

function M(e, n) {
  let M = s.default.getId(),
    f = n === Z.IlC.POPOUT,
    _ = (0, i.e7)([c.Z, d.Z], () => c.Z.getVoiceChannelId() === d.Z.getDMFromUserId(e.id)),
    g = (0, i.e7)([o.Z], () => o.Z.isBlocked(e.id));
  if (M === e.id || f || _ || e.bot) return null;
  let I = () => r.Z.openPrivateChannel(e.id, !0),
    m = !u.ZP.disableCallUserConfirmationPrompt;
  return (0, l.jsx)(a.MenuItem, {
    id: "call",
    label: E.Z.Messages.CALL,
    action: m ? () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e("27157").then(t.bind(t, 736454));
        return n => (0, l.jsx)(e, {
          onSubmit: I,
          ...n
        })
      })
    } : I,
    disabled: g
  })
}