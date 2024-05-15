"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
});
var a = i("735250");
i("470079");
var n = i("442837"),
  l = i("481060"),
  d = i("493683"),
  u = i("740492"),
  s = i("314897"),
  o = i("592125"),
  r = i("699516"),
  c = i("944486"),
  f = i("981631"),
  I = i("689938");

function p(e, t) {
  let p = s.default.getId(),
    A = t === f.AppContext.POPOUT,
    T = (0, n.useStateFromStores)([c.default, o.default], () => c.default.getVoiceChannelId() === o.default.getDMFromUserId(e.id)),
    S = (0, n.useStateFromStores)([r.default], () => r.default.isBlocked(e.id));
  if (p === e.id || A || T || e.bot) return null;
  let _ = () => d.default.openPrivateChannel(e.id, !0),
    y = !u.default.disableCallUserConfirmationPrompt;
  return (0, a.jsx)(l.MenuItem, {
    id: "call",
    label: I.default.Messages.CALL,
    action: y ? () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("27157")]).then(i.bind(i, "736454"));
        return t => (0, a.jsx)(e, {
          onSubmit: _,
          ...t
        })
      })
    } : _,
    disabled: S
  })
}