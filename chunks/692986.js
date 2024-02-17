"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("404118"),
  r = n("629109"),
  d = n("235004"),
  o = n("42887"),
  s = n("945956"),
  c = n("162771"),
  f = n("697218"),
  E = n("423487"),
  _ = n("599110"),
  S = n("49111"),
  T = n("353927"),
  A = n("782340"),
  p = n("622393");

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT,
    n = (0, a.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    I = (0, a.useStateFromStores)([d.default], () => d.default.isLocalSoundboardMuted(e)),
    {
      muted: N,
      deafened: C = !1,
      localVideoDisabled: g = !1,
      localVideoAutoDisabled: O = !1
    } = (0, a.useStateFromStoresObject)([o.default], () => n ? {
      muted: o.default.isSelfMute(t),
      deafened: o.default.isSelfDeaf(t)
    } : {
      muted: o.default.isLocalMute(e, t),
      localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    R = o.default.supports(T.Features.DISABLE_VIDEO) && !n ? (0, u.jsx)(i.MenuCheckboxItem, {
      id: "disable-video",
      label: A.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (O) {
          l.default.show({
            title: A.default.Messages.UNSTABLE_CONNECTION,
            body: A.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: A.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: A.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => r.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = g ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
        r.default.setDisableLocalVideo(e, n, t)
      },
      checked: g,
      subtext: O ? (0, u.jsxs)("div", {
        className: p.videoPaused,
        children: [(0, u.jsx)(E.default, {
          width: 12,
          className: p.warningCircle
        }), A.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    h = n ? null : (0, u.jsx)(i.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: A.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = s.default.getRTCConnection();
        _.default.track(S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !I
        }), r.default.toggleLocalSoundboardMute(e, t)
      },
      checked: I
    }, "soundboard-sound-mute");
  return n ? [(0, u.jsx)(i.MenuCheckboxItem, {
    id: "mute",
    label: A.default.Messages.SOUND_MUTE,
    action: () => r.default.toggleSelfMute({
      context: t
    }),
    checked: N
  }, "self-mute"), (0, u.jsx)(i.MenuCheckboxItem, {
    id: "deafen",
    label: A.default.Messages.DEAFEN,
    action: () => r.default.toggleSelfDeaf({
      context: t
    }),
    checked: C
  }, "self-deafen"), R] : [(0, u.jsx)(i.MenuCheckboxItem, {
    id: "mute",
    label: A.default.Messages.SOUND_MUTE,
    action: () => r.default.toggleLocalMute(e, t),
    checked: N
  }, "self-mute"), h, R]
}