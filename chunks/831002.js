n.d(t, {
  Z: function() {
    return Z
  }
});
var l = n(735250);
n(470079);
var i = n(512722),
  s = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(40851),
  c = n(358221),
  u = n(431368),
  d = n(167675),
  h = n(418469),
  m = n(673539),
  E = n(218035),
  p = n(775666),
  g = n(423589),
  f = n(592125),
  C = n(496675),
  _ = n(881824),
  I = n(146085),
  x = n(427679),
  T = n(354459),
  N = n(689938);

function Z(e) {
  let {
    channelId: t,
    closePopout: n,
    appContext: i,
    onSelect: Z
  } = e, S = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipant(t)), v = (null == S ? void 0 : S.type) === T.fO.STREAM ? S.stream : null, A = (0, m.Z)(t);
  return (0, l.jsxs)(r.Menu, {
    navId: "stage-channel-call-overflow-popout",
    onClose: n,
    "aria-label": N.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
    onSelect: Z,
    children: [function(e) {
      let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
        n = (0, a.e7)([C.Z], () => C.Z.can(I.yP, t)),
        i = (0, a.e7)([x.Z], () => x.Z.getStageInstanceByChannel(e), [e]),
        s = (0, o.bp)(),
        c = () => null != t && (0, _.T)(t, s);
      return (null == t ? void 0 : t.isGuildStageVoice()) && n ? null != i ? (0, l.jsx)(r.MenuItem, {
        id: "edit-stage",
        label: N.Z.Messages.EDIT_STAGE_SUBTITLE,
        action: c
      }) : (0, l.jsx)(r.MenuItem, {
        id: "start-stage",
        label: N.Z.Messages.STAGE_CHANNEL_START_TITLE,
        action: c
      }) : null
    }(t), function(e) {
      let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]);
      s()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
      let n = (0, g.Mn)("StageChannelCallOverflowMenu"),
        l = (0, p.ZP)(t),
        i = (0, E.Z)(t);
      return n ? l : i
    }(t), (0, d.Z)(), (0, u.Z)(t), A, (0, h.Z)(v, i)]
  })
}