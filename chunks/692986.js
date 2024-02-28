"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  u = n("77078"),
  i = n("404118"),
  d = n("629109"),
  s = n("235004"),
  r = n("42887"),
  o = n("945956"),
  c = n("162771"),
  f = n("697218"),
  S = n("423487"),
  E = n("599110"),
  _ = n("49111"),
  p = n("353927"),
  g = n("782340"),
  T = n("622393");

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT,
    n = (0, a.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    A = (0, a.useStateFromStores)([s.default], () => s.default.isLocalSoundboardMuted(e)),
    {
      muted: I,
      deafened: C = !1,
      localVideoDisabled: h = !1,
      localVideoAutoDisabled: m = !1
    } = (0, a.useStateFromStoresObject)([r.default], () => n ? {
      muted: r.default.isSelfMute(t),
      deafened: r.default.isSelfDeaf(t)
    } : {
      muted: r.default.isLocalMute(e, t),
      localVideoDisabled: r.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: r.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    N = r.default.supports(p.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(u.MenuCheckboxItem, {
      id: "disable-video",
      label: g.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (m) {
          i.default.show({
            title: g.default.Messages.UNSTABLE_CONNECTION,
            body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => d.default.setDisableLocalVideo(e, _.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = h ? _.VideoToggleState.MANUAL_ENABLED : _.VideoToggleState.DISABLED;
        d.default.setDisableLocalVideo(e, n, t)
      },
      checked: h,
      subtext: m ? (0, l.jsxs)("div", {
        className: T.videoPaused,
        children: [(0, l.jsx)(S.default, {
          width: 12,
          className: T.warningCircle
        }), g.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    O = n ? null : (0, l.jsx)(u.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: g.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = o.default.getRTCConnection();
        E.default.track(_.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !A
        }), d.default.toggleLocalSoundboardMute(e, t)
      },
      checked: A
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleSelfMute({
      context: t
    }),
    checked: I
  }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
    id: "deafen",
    label: g.default.Messages.DEAFEN,
    action: () => d.default.toggleSelfDeaf({
      context: t
    }),
    checked: C
  }, "self-deafen"), N] : [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleLocalMute(e, t),
    checked: I
  }, "self-mute"), O, N]
}