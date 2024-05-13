"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("493683"),
  s = l("740492"),
  r = l("314897"),
  i = l("592125"),
  o = l("699516"),
  f = l("944486"),
  c = l("981631"),
  E = l("689938");

function m(e, t) {
  let m = r.default.getId(),
    M = t === c.AppContext.POPOUT,
    S = (0, n.useStateFromStores)([f.default, i.default], () => f.default.getVoiceChannelId() === i.default.getDMFromUserId(e.id)),
    _ = (0, n.useStateFromStores)([o.default], () => o.default.isBlocked(e.id));
  if (m === e.id || M || S || e.bot) return null;
  let g = () => d.default.openPrivateChannel(e.id, !0),
    I = !s.default.disableCallUserConfirmationPrompt;
  return (0, a.jsx)(u.MenuItem, {
    id: "call",
    label: E.default.Messages.CALL,
    action: I ? () => {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("27157")]).then(l.bind(l, "736454"));
        return t => (0, a.jsx)(e, {
          onSubmit: g,
          ...t
        })
      })
    } : g,
    disabled: _
  })
}