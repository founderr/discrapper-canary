"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("404118"),
  d = n("629109"),
  r = n("235004"),
  s = n("42887"),
  o = n("945956"),
  c = n("162771"),
  f = n("697218"),
  E = n("423487"),
  S = n("599110"),
  _ = n("49111"),
  A = n("353927"),
  p = n("782340"),
  g = n("622393");

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.MediaEngineContextTypes.DEFAULT,
    n = (0, l.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    T = (0, l.useStateFromStores)([r.default], () => r.default.isLocalSoundboardMuted(e)),
    {
      muted: I,
      deafened: C = !1,
      localVideoDisabled: m = !1,
      localVideoAutoDisabled: N = !1
    } = (0, l.useStateFromStoresObject)([s.default], () => n ? {
      muted: s.default.isSelfMute(t),
      deafened: s.default.isSelfDeaf(t)
    } : {
      muted: s.default.isLocalMute(e, t),
      localVideoDisabled: s.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: s.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    h = s.default.supports(A.Features.DISABLE_VIDEO) && !n ? (0, a.jsx)(u.MenuCheckboxItem, {
      id: "disable-video",
      label: p.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (N) {
          i.default.show({
            title: p.default.Messages.UNSTABLE_CONNECTION,
            body: p.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: p.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: p.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => d.default.setDisableLocalVideo(e, _.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = m ? _.VideoToggleState.MANUAL_ENABLED : _.VideoToggleState.DISABLED;
        d.default.setDisableLocalVideo(e, n, t)
      },
      checked: m,
      subtext: N ? (0, a.jsxs)("div", {
        className: g.videoPaused,
        children: [(0, a.jsx)(E.default, {
          width: 12,
          className: g.warningCircle
        }), p.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    M = n ? null : (0, a.jsx)(u.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: p.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = o.default.getRTCConnection();
        S.default.track(_.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !T
        }), d.default.toggleLocalSoundboardMute(e, t)
      },
      checked: T
    }, "soundboard-sound-mute");
  return n ? [(0, a.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: p.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleSelfMute({
      context: t
    }),
    checked: I
  }, "self-mute"), (0, a.jsx)(u.MenuCheckboxItem, {
    id: "deafen",
    label: p.default.Messages.DEAFEN,
    action: () => d.default.toggleSelfDeaf({
      context: t
    }),
    checked: C
  }, "self-deafen"), h] : [(0, a.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: p.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleLocalMute(e, t),
    checked: I
  }, "self-mute"), M, h]
}