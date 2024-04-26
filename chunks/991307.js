"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var l = a("735250");
a("470079");
var d = a("442837"),
  u = a("481060"),
  n = a("668781"),
  s = a("846027"),
  i = a("763296"),
  o = a("131951"),
  r = a("19780"),
  f = a("914010"),
  c = a("594174"),
  M = a("759231"),
  E = a("626135"),
  m = a("981631"),
  g = a("65154"),
  I = a("689938"),
  S = a("991565");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.MediaEngineContextTypes.DEFAULT,
    a = (0, d.useStateFromStores)([c.default], () => {
      var t;
      return (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    _ = (0, d.useStateFromStores)([i.default], () => i.default.isLocalSoundboardMuted(e)),
    {
      muted: T,
      deafened: A = !1,
      localVideoDisabled: C = !1,
      localVideoAutoDisabled: N = !1
    } = (0, d.useStateFromStoresObject)([o.default], () => a ? {
      muted: o.default.isSelfMute(t),
      deafened: o.default.isSelfDeaf(t)
    } : {
      muted: o.default.isLocalMute(e, t),
      localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
    }, [a, t, e]),
    x = o.default.supports(g.Features.DISABLE_VIDEO) && !a ? (0, l.jsx)(u.MenuCheckboxItem, {
      id: "disable-video",
      label: I.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (N) {
          n.default.show({
            title: I.default.Messages.UNSTABLE_CONNECTION,
            body: I.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: I.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: I.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => s.default.setDisableLocalVideo(e, m.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let a = C ? m.VideoToggleState.MANUAL_ENABLED : m.VideoToggleState.DISABLED;
        s.default.setDisableLocalVideo(e, a, t)
      },
      checked: C,
      subtext: N ? (0, l.jsxs)("div", {
        className: S.videoPaused,
        children: [(0, l.jsx)(M.default, {
          width: 12,
          className: S.warningCircle
        }), I.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    b = a ? null : (0, l.jsx)(u.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: I.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let a = r.default.getRTCConnection();
        E.default.track(m.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: f.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == a ? void 0 : a.getMediaSessionId(),
          parent_media_session_id: null == a ? void 0 : a.parentMediaSessionId,
          mute_soundboard: !_
        }), s.default.toggleLocalSoundboardMute(e, t)
      },
      checked: _
    }, "soundboard-sound-mute");
  return a ? [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: I.default.Messages.SOUND_MUTE,
    action: () => s.default.toggleSelfMute({
      context: t
    }),
    checked: T
  }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
    id: "deafen",
    label: I.default.Messages.DEAFEN,
    action: () => s.default.toggleSelfDeaf({
      context: t
    }),
    checked: A
  }, "self-deafen"), x] : [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: I.default.Messages.SOUND_MUTE,
    action: () => s.default.toggleLocalMute(e, t),
    checked: T
  }, "self-mute"), b, x]
}