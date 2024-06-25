var s = n(570140),
  i = n(846027),
  l = n(13245),
  a = n(287734),
  r = n(872810),
  o = n(223245),
  c = n(317770),
  u = n(924557),
  d = n(39604),
  E = n(569545),
  h = n(722835),
  _ = n(703656),
  I = n(641015),
  m = n(183584),
  T = n(199902),
  g = n(131951),
  p = n(246946),
  N = n(808506),
  S = n(237997),
  C = n(626135),
  A = n(554174),
  f = n(981631),
  Z = n(65154);
let L = {
  [f.kg4.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [f.kg4.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [f.kg4.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      g.Z.getMode(t.context) === f.pM4.PUSH_TO_TALK && (L[f.kg4.PUSH_TO_TALK].isPressed = e, g.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      g.Z.getMode() === f.pM4.PUSH_TO_TALK && (L[f.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e, g.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), Z.Yn.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (!(g.Z.getMode() !== f.pM4.VOICE_ACTIVITY || g.Z.isSelfDeaf())) L[f.kg4.PUSH_TO_MUTE].isPressed = e, i.Z.setTemporarySelfMute(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.TOGGLE_MUTE]: {
    onTrigger: () => i.Z.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_DEAFEN]: {
    onTrigger() {
      i.Z.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = g.Z.getMode() === f.pM4.PUSH_TO_TALK ? f.pM4.VOICE_ACTIVITY : f.pM4.PUSH_TO_TALK;
      i.Z.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = N.Z.enabled;
      l.Z.setEnabled(!e, N.Z.legacyEnabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, A.Z)();
      if (null != t) e ? l.Z.setUILocked(!S.Z.isUILocked(t), t) : l.Z.setInputLocked(!N.Z.isInputLocked(t), t)
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [f.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = N.Z.getFocusedPID(),
        t = null != e;
      null != e && t && S.Z.isPinned(f.Odu.TEXT) && N.Z.isReady(e) && N.Z.isInputLocked(e) && l.Z.activateRegion(f.O0n.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = T.Z.getCurrentUserActiveStream();
      if (null != e) return (0, r.g)((0, E.V9)(e));
      (0, h.Z)()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      o.Z.setEnabled(!p.Z.enabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.NAVIGATE_BACK]: {
    onTrigger: () => (0, _.op)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [f.kg4.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, _.eH)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [f.kg4.SOUNDBOARD]: {
    onTrigger: () => {
      if (!(0, I.D)()) return;
      let e = (0, A.Z)();
      null != e && (S.Z.isUILocked(e) ? (0, m.IN)(!0, e) : (0, m.oZ)(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      if (!(0, I.D)()) return;
      let t = (0, A.Z)();
      if (null != t) {
        e ? (0, m.IN)(!1, t) : (0, m.oZ)(t);
        return
      }
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [f.kg4.SAVE_CLIP]: {
    onTrigger: () => {
      (0, u.ln)() && (C.default.track(f.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, d.C1)())
    },
    keyEvents: {
      keyup: !1,
      keydown: !0
    }
  },
  [f.kg4.SWITCH_TO_VOICE_CHANNEL]: {
    onTrigger(e, t) {
      let {
        params: {
          channelId: n
        }
      } = t;
      null != n && a.default.selectVoiceChannel(n)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  },
  [f.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
    onTrigger() {
      a.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  }
};
class O extends c.Z {
  _initialize() {
    s.Z.wait(() => s.Z.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: L
    }))
  }
  _terminate() {}
}
t.Z = new O