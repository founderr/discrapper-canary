i.d(n, {
  Z: function() {
return I;
  }
});
var t = i(735250);
i(470079);
var l = i(442837),
  s = i(481060),
  o = i(668781),
  a = i(846027),
  u = i(763296),
  d = i(131951),
  r = i(19780),
  c = i(914010),
  Z = i(594174),
  M = i(626135),
  E = i(981631),
  f = i(65154),
  _ = i(689938),
  A = i(480881);

function I(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
i = (0, l.e7)([Z.default], () => {
  var n;
  return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
}),
I = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
{
  muted: N,
  deafened: g = !1,
  localVideoDisabled: v = !1,
  localVideoAutoDisabled: b = !1
} = (0, l.cj)([d.Z], () => i ? {
  muted: d.Z.isSelfMute(n),
  deafened: d.Z.isSelfDeaf(n)
} : {
  muted: d.Z.isLocalMute(e, n),
  localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
  localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n)
}, [
  i,
  n,
  e
]),
m = d.Z.supports(f.AN.DISABLE_VIDEO) && !i ? (0, t.jsx)(s.MenuCheckboxItem, {
  id: 'disable-video',
  label: _.Z.Messages.DISABLE_VIDEO,
  action: () => {
    if (b) {
      o.Z.show({
        title: _.Z.Messages.UNSTABLE_CONNECTION,
        body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
        confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
        cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
        onConfirm: () => a.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
      });
      return;
    }
    let i = v ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
    a.Z.setDisableLocalVideo(e, i, n);
  },
  checked: v,
  subtext: b ? (0, t.jsxs)('div', {
    className: A.videoPaused,
    children: [
      (0, t.jsx)(s.CircleExclamationPointIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 12,
        className: A.warningCircle
      }),
      _.Z.Messages.UNSTABLE_CONNECTION
    ]
  }) : null
}, 'disable-video') : null,
p = i ? null : (0, t.jsx)(s.MenuCheckboxItem, {
  id: 'soundboard-sound-mute',
  label: _.Z.Messages.MUTE_SOUNDBOARD,
  action: () => {
    let i = r.Z.getRTCConnection();
    M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
      guild_id: c.Z.getGuildId(),
      target_user_id: e,
      media_session_id: null == i ? void 0 : i.getMediaSessionId(),
      parent_media_session_id: null == i ? void 0 : i.parentMediaSessionId,
      mute_soundboard: !I
    }), a.Z.toggleLocalSoundboardMute(e, n);
  },
  checked: I
}, 'soundboard-sound-mute');
  return i ? [
(0, t.jsx)(s.MenuCheckboxItem, {
  id: 'mute',
  label: _.Z.Messages.SOUND_MUTE,
  action: () => a.Z.toggleSelfMute({
    context: n
  }),
  checked: N
}, 'self-mute'),
(0, t.jsx)(s.MenuCheckboxItem, {
  id: 'deafen',
  label: _.Z.Messages.DEAFEN,
  action: () => a.Z.toggleSelfDeaf({
    context: n
  }),
  checked: g
}, 'self-deafen'),
m
  ] : [
(0, t.jsx)(s.MenuCheckboxItem, {
  id: 'mute',
  label: _.Z.Messages.SOUND_MUTE,
  action: () => a.Z.toggleLocalMute(e, n),
  checked: N
}, 'self-mute'),
p,
m
  ];
}