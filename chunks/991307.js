"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("481060"),
  s = a("668781"),
  n = a("846027"),
  o = a("763296"),
  i = a("131951"),
  r = a("19780"),
  f = a("914010"),
  c = a("594174"),
  E = a("759231"),
  S = a("626135"),
  _ = a("981631"),
  M = a("65154"),
  g = a("689938"),
  T = a("108817");

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.MediaEngineContextTypes.DEFAULT,
    a = (0, u.useStateFromStores)([c.default], () => {
      var t;
      return (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    A = (0, u.useStateFromStores)([o.default], () => o.default.isLocalSoundboardMuted(e)),
    {
      muted: N,
      deafened: m = !1,
      localVideoDisabled: U = !1,
      localVideoAutoDisabled: C = !1
    } = (0, u.useStateFromStoresObject)([i.default], () => a ? {
      muted: i.default.isSelfMute(t),
      deafened: i.default.isSelfDeaf(t)
    } : {
      muted: i.default.isLocalMute(e, t),
      localVideoDisabled: i.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: i.default.isLocalVideoAutoDisabled(e, t)
    }, [a, t, e]),
    O = i.default.supports(M.Features.DISABLE_VIDEO) && !a ? (0, l.jsx)(d.MenuCheckboxItem, {
      id: "disable-video",
      label: g.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (C) {
          s.default.show({
            title: g.default.Messages.UNSTABLE_CONNECTION,
            body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => n.default.setDisableLocalVideo(e, _.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let a = U ? _.VideoToggleState.MANUAL_ENABLED : _.VideoToggleState.DISABLED;
        n.default.setDisableLocalVideo(e, a, t)
      },
      checked: U,
      subtext: C ? (0, l.jsxs)("div", {
        className: T.videoPaused,
        children: [(0, l.jsx)(E.default, {
          width: 12,
          className: T.warningCircle
        }), g.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    b = a ? null : (0, l.jsx)(d.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: g.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let a = r.default.getRTCConnection();
        S.default.track(_.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: f.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == a ? void 0 : a.getMediaSessionId(),
          parent_media_session_id: null == a ? void 0 : a.parentMediaSessionId,
          mute_soundboard: !A
        }), n.default.toggleLocalSoundboardMute(e, t)
      },
      checked: A
    }, "soundboard-sound-mute");
  return a ? [(0, l.jsx)(d.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => n.default.toggleSelfMute({
      context: t
    }),
    checked: N
  }, "self-mute"), (0, l.jsx)(d.MenuCheckboxItem, {
    id: "deafen",
    label: g.default.Messages.DEAFEN,
    action: () => n.default.toggleSelfDeaf({
      context: t
    }),
    checked: m
  }, "self-deafen"), O] : [(0, l.jsx)(d.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => n.default.toggleLocalMute(e, t),
    checked: N
  }, "self-mute"), b, O]
}