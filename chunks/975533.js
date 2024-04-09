"use strict";
n.r(t);
var a = n("570140"),
  s = n("846027"),
  l = n("13245"),
  i = n("287734"),
  r = n("872810"),
  o = n("223245"),
  u = n("317770"),
  d = n("924557"),
  c = n("39604"),
  f = n("569545"),
  E = n("722835"),
  _ = n("703656"),
  h = n("641015"),
  C = n("183584"),
  m = n("199902"),
  S = n("131951"),
  I = n("246946"),
  T = n("808506"),
  p = n("237997"),
  g = n("626135"),
  N = n("554174"),
  A = n("981631"),
  R = n("65154");
let O = {
  [A.GlobalKeybindActions.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [A.GlobalKeybindActions.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [A.GlobalKeybindActions.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      S.default.getMode(t.context) === A.InputModes.PUSH_TO_TALK && (O[A.GlobalKeybindActions.PUSH_TO_TALK].isPressed = e, S.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [A.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      S.default.getMode() === A.InputModes.PUSH_TO_TALK && (O[A.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY].isPressed = e, S.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), R.MediaEngineContextTypes.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [A.GlobalKeybindActions.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (S.default.getMode() === A.InputModes.VOICE_ACTIVITY) !S.default.isSelfDeaf() && (O[A.GlobalKeybindActions.PUSH_TO_MUTE].isPressed = e, s.default.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [A.GlobalKeybindActions.TOGGLE_MUTE]: {
    onTrigger: () => s.default.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_DEAFEN]: {
    onTrigger() {
      s.default.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = S.default.getMode() === A.InputModes.PUSH_TO_TALK ? A.InputModes.VOICE_ACTIVITY : A.InputModes.PUSH_TO_TALK;
      s.default.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = T.default.enabled;
      l.default.setEnabled(!e, T.default.legacyEnabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, N.default)();
      null != t && (e ? l.default.setUILocked(!p.default.isUILocked(t), t) : l.default.setInputLocked(!T.default.isInputLocked(t), t))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [A.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = T.default.getFocusedPID(),
        t = null != e;
      null != e && t && p.default.isPinned(A.OverlayWidgets.TEXT) && T.default.isReady(e) && T.default.isInputLocked(e) && l.default.activateRegion(A.OverlayActiveRegions.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = m.default.getCurrentUserActiveStream();
      if (null != e) return (0, r.stopStream)((0, f.encodeStreamKey)(e));
      (0, E.default)()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      o.default.setEnabled(!I.default.enabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.NAVIGATE_BACK]: {
    onTrigger: () => (0, _.back)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [A.GlobalKeybindActions.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, _.forward)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [A.GlobalKeybindActions.SOUNDBOARD]: {
    onTrigger: () => {
      if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
      let e = (0, N.default)();
      null != e && (p.default.isUILocked(e) ? (0, C.openSoundboardInOverlay)(!0, e) : (0, C.closeSoundboardInOverlay)(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [A.GlobalKeybindActions.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
      let t = (0, N.default)();
      if (null != t) {
        e ? (0, C.openSoundboardInOverlay)(!1, t) : (0, C.closeSoundboardInOverlay)(t);
        return
      }
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [A.GlobalKeybindActions.SAVE_CLIP]: {
    onTrigger: () => {
      (0, d.areClipsEnabled)() && (g.default.track(A.AnalyticEvents.CLIP_SAVE_KEYBIND_PRESSED), (0, c.saveClip)())
    },
    keyEvents: {
      keyup: !1,
      keydown: !0
    }
  },
  [A.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL]: {
    onTrigger(e, t) {
      let {
        params: {
          channelId: n
        }
      } = t;
      null != n && i.default.selectVoiceChannel(n)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  },
  [A.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL]: {
    onTrigger() {
      i.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  }
};
class v extends u.default {
  _initialize() {
    a.default.wait(() => a.default.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: O
    }))
  }
  _terminate() {}
}
t.default = new v