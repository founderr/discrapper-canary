t.d(n, {
  Z: function() {
    return m
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  a = t(481060),
  s = t(668781),
  o = t(846027),
  d = t(763296),
  u = t(131951),
  r = t(19780),
  c = t(914010),
  Z = t(594174),
  M = t(626135),
  E = t(981631),
  f = t(65154),
  I = t(689938),
  g = t(555057);

function m(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
    t = (0, l.e7)([Z.default], () => {
      var n;
      return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
    }),
    m = (0, l.e7)([d.Z], () => d.Z.isLocalSoundboardMuted(e)),
    {
      muted: _,
      deafened: N = !1,
      localVideoDisabled: C = !1,
      localVideoAutoDisabled: A = !1
    } = (0, l.cj)([u.Z], () => t ? {
      muted: u.Z.isSelfMute(n),
      deafened: u.Z.isSelfDeaf(n)
    } : {
      muted: u.Z.isLocalMute(e, n),
      localVideoDisabled: u.Z.isLocalVideoDisabled(e, n),
      localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, n)
    }, [t, n, e]),
    b = u.Z.supports(f.AN.DISABLE_VIDEO) && !t ? (0, i.jsx)(a.MenuCheckboxItem, {
      id: "disable-video",
      label: I.Z.Messages.DISABLE_VIDEO,
      action: () => {
        if (A) {
          s.Z.show({
            title: I.Z.Messages.UNSTABLE_CONNECTION,
            body: I.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: I.Z.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: I.Z.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => o.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
          });
          return
        }
        let t = C ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
        o.Z.setDisableLocalVideo(e, t, n)
      },
      checked: C,
      subtext: A ? (0, i.jsxs)("div", {
        className: g.videoPaused,
        children: [(0, i.jsx)(a.CircleExclamationPointIcon, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: g.warningCircle
        }), I.Z.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    T = t ? null : (0, i.jsx)(a.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: I.Z.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let t = r.Z.getRTCConnection();
        M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.Z.getGuildId(),
          target_user_id: e,
          media_session_id: null == t ? void 0 : t.getMediaSessionId(),
          parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
          mute_soundboard: !m
        }), o.Z.toggleLocalSoundboardMute(e, n)
      },
      checked: m
    }, "soundboard-sound-mute");
  return t ? [(0, i.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: I.Z.Messages.SOUND_MUTE,
    action: () => o.Z.toggleSelfMute({
      context: n
    }),
    checked: _
  }, "self-mute"), (0, i.jsx)(a.MenuCheckboxItem, {
    id: "deafen",
    label: I.Z.Messages.DEAFEN,
    action: () => o.Z.toggleSelfDeaf({
      context: n
    }),
    checked: N
  }, "self-deafen"), b] : [(0, i.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: I.Z.Messages.SOUND_MUTE,
    action: () => o.Z.toggleLocalMute(e, n),
    checked: _
  }, "self-mute"), T, b]
}