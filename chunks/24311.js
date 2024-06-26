"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(493683),
  a = n(740492),
  l = n(314897),
  u = n(592125),
  _ = n(699516),
  c = n(944486),
  d = n(981631),
  E = n(689938);

function I(e) {
  let {
    user: t,
    context: I,
    label: T,
    joinCallVideo: h,
    id: f,
    onCall: S
  } = e, N = l.default.getId(), A = I === d.IlC.POPOUT, m = (0, r.e7)([c.Z, u.Z], () => c.Z.getVoiceChannelId() === u.Z.getDMFromUserId(t.id)), O = (0, r.e7)([_.Z], () => _.Z.isBlocked(t.id));
  if (N === t.id || A || m || t.bot) return null;
  let p = () => {
      null == S || S(), o.Z.openPrivateChannel(t.id, !0, h)
    },
    R = !a.ZP.disableCallUserConfirmationPrompt;
  return (0, i.jsx)(s.MenuItem, {
    id: null != f ? f : "call",
    label: null != T ? T : E.Z.Messages.CALL,
    action: R ? () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("27157").then(n.bind(n, 736454));
        return t => (0, i.jsx)(e, {
          onSubmit: p,
          ...t
        })
      })
    } : p,
    disabled: O
  })
}