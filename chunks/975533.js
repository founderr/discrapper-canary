var i = n(570140),
  s = n(846027),
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
  g = n(199902),
  p = n(131951),
  N = n(246946),
  T = n(808506),
  C = n(237997),
  S = n(626135),
  A = n(554174),
  f = n(981631),
  Z = n(65154);
let v = {
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
      p.Z.getMode(t.context) === f.pM4.PUSH_TO_TALK && (v[f.kg4.PUSH_TO_TALK].isPressed = e, p.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      p.Z.getMode() === f.pM4.PUSH_TO_TALK && (v[f.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e, p.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), Z.Yn.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (!(p.Z.getMode() !== f.pM4.VOICE_ACTIVITY || p.Z.isSelfDeaf())) v[f.kg4.PUSH_TO_MUTE].isPressed = e, s.Z.setTemporarySelfMute(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [f.kg4.TOGGLE_MUTE]: {
    onTrigger: () => s.Z.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_DEAFEN]: {
    onTrigger() {
      s.Z.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = p.Z.getMode() === f.pM4.PUSH_TO_TALK ? f.pM4.VOICE_ACTIVITY : f.pM4.PUSH_TO_TALK;
      s.Z.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = T.Z.enabled;
      l.Z.setEnabled(!e, T.Z.legacyEnabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, A.Z)();
      if (null != t) e ? l.Z.setUILocked(!C.Z.isUILocked(t), t) : l.Z.setInputLocked(!T.Z.isInputLocked(t), t)
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [f.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = T.Z.getFocusedPID(),
        t = null != e;
      null != e && t && C.Z.isPinned(f.Odu.TEXT) && T.Z.isReady(e) && T.Z.isInputLocked(e) && l.Z.activateRegion(f.O0n.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [f.kg4.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = g.Z.getCurrentUserActiveStream();
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
      o.Z.setEnabled(!N.Z.enabled)
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
      null != e && (C.Z.isUILocked(e) ? (0, m.IN)(!0, e) : (0, m.oZ)(e))
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
      (0, u.ln)() && (S.default.track(f.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, d.C1)())
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
class L extends c.Z {
  _initialize() {
    i.Z.wait(() => i.Z.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: v
    }))
  }
  _terminate() {}
}
t.Z = new L