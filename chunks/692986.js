"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
});
var u = l("37983");
l("884691");
var a = l("446674"),
  d = l("77078"),
  n = l("404118"),
  s = l("629109"),
  i = l("235004"),
  o = l("42887"),
  r = l("945956"),
  c = l("162771"),
  f = l("697218"),
  M = l("423487"),
  E = l("599110"),
  g = l("49111"),
  A = l("353927"),
  S = l("782340"),
  _ = l("622393");

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.MediaEngineContextTypes.DEFAULT,
    l = (0, a.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    v = (0, a.useStateFromStores)([i.default], () => i.default.isLocalSoundboardMuted(e)),
    {
      muted: p,
      deafened: N = !1,
      localVideoDisabled: T = !1,
      localVideoAutoDisabled: m = !1
    } = (0, a.useStateFromStoresObject)([o.default], () => l ? {
      muted: o.default.isSelfMute(t),
      deafened: o.default.isSelfDeaf(t)
    } : {
      muted: o.default.isLocalMute(e, t),
      localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
    }, [l, t, e]),
    U = o.default.supports(A.Features.DISABLE_VIDEO) && !l ? (0, u.jsx)(d.MenuCheckboxItem, {
      id: "disable-video",
      label: S.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (m) {
          n.default.show({
            title: S.default.Messages.UNSTABLE_CONNECTION,
            body: S.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: S.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: S.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => s.default.setDisableLocalVideo(e, g.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let l = T ? g.VideoToggleState.MANUAL_ENABLED : g.VideoToggleState.DISABLED;
        s.default.setDisableLocalVideo(e, l, t)
      },
      checked: T,
      subtext: m ? (0, u.jsxs)("div", {
        className: _.videoPaused,
        children: [(0, u.jsx)(M.default, {
          width: 12,
          className: _.warningCircle
        }), S.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    I = l ? null : (0, u.jsx)(d.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: S.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let l = r.default.getRTCConnection();
        E.default.track(g.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == l ? void 0 : l.getMediaSessionId(),
          parent_media_session_id: null == l ? void 0 : l.parentMediaSessionId,
          mute_soundboard: !v
        }), s.default.toggleLocalSoundboardMute(e, t)
      },
      checked: v
    }, "soundboard-sound-mute");
  return l ? [(0, u.jsx)(d.MenuCheckboxItem, {
    id: "mute",
    label: S.default.Messages.SOUND_MUTE,
    action: () => s.default.toggleSelfMute({
      context: t
    }),
    checked: p
  }, "self-mute"), (0, u.jsx)(d.MenuCheckboxItem, {
    id: "deafen",
    label: S.default.Messages.DEAFEN,
    action: () => s.default.toggleSelfDeaf({
      context: t
    }),
    checked: N
  }, "self-deafen"), U] : [(0, u.jsx)(d.MenuCheckboxItem, {
    id: "mute",
    label: S.default.Messages.SOUND_MUTE,
    action: () => s.default.toggleLocalMute(e, t),
    checked: p
  }, "self-mute"), I, U]
}