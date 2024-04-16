"use strict";
a.r(t), a("47120");
var n = a("846027"),
  s = a("131951"),
  l = a("594174"),
  i = a("996106"),
  r = a("452426"),
  o = a("852926"),
  u = a("186901"),
  d = a("981631");
t.default = {
  [d.RPCCommands.SET_USER_VOICE_SETTINGS]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, r.default)(e).required().keys({
      user_id: e.string().required(),
      pan: (0, r.default)(e).keys({
        left: e.number().min(0).max(1).required(),
        right: e.number().min(0).max(1).required()
      }),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          user_id: t,
          pan: a,
          volume: r,
          mute: o
        }
      } = e, u = l.default.getCurrentUser();
      if (null == l.default.getUser(t) || (null == u ? void 0 : u.id) === t) throw new i.default({
        errorCode: d.RPCErrors.INVALID_USER
      }, "Invalid user id: ".concat(t));
      if (null != a && n.default.setLocalPan(t, a.left, a.right), null != r && n.default.setLocalVolume(t, r), null != o) {
        let e = s.default.isLocalMute(t);
        (e && !o || !e && o) && n.default.toggleLocalMute(t)
      }
      return {
        user_id: t,
        pan: s.default.getLocalPan(t),
        volume: s.default.getLocalVolume(t),
        mute: s.default.isLocalMute(t)
      }
    }
  },
  [d.RPCCommands.GET_VOICE_SETTINGS]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => (0, o.getDeprecatedVoiceSettings)()
  },
  [d.RPCCommands.SET_VOICE_SETTINGS]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, r.default)(e).required().keys({
      input: (0, r.default)(e).keys({
        device_id: e.string().valid(Object.keys(s.default.getInputDevices())),
        volume: e.number().min(0).max(100)
      }),
      output: (0, r.default)(e).keys({
        device_id: e.string().valid(Object.keys(s.default.getOutputDevices())),
        volume: e.number().min(0).max(200)
      }),
      mode: (0, r.default)(e).keys({
        type: e.string().valid(Object.keys(d.InputModes)),
        auto_threshold: e.boolean(),
        threshold: e.number().min(-100).max(0),
        shortcut: e.array().items((0, r.default)(e).keys({
          type: e.number().min(0).max(3).required(),
          code: e.number().required(),
          name: e.string()
        })),
        delay: e.number().min(0).max(2e3)
      }),
      automatic_gain_control: e.boolean(),
      echo_cancellation: e.boolean(),
      noise_suppression: e.boolean(),
      qos: e.boolean(),
      silence_warning: e.boolean(),
      deaf: e.boolean(),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          input: t,
          output: a,
          mode: l,
          automatic_gain_control: i,
          echo_cancellation: r,
          noise_suppression: u,
          qos: d,
          silence_warning: c,
          deaf: f,
          mute: E
        }
      } = e;
      if (t && (null != t.device_id && n.default.setInputDevice(t.device_id), null != t.volume && n.default.setInputVolume(t.volume)), a && (null != a.device_id && n.default.setOutputDevice(a.device_id), null != a.volume && n.default.setOutputVolume(a.volume)), l) {
        let e = s.default.getMode(),
          t = s.default.getModeOptions();
        null != l.type && (e = l.type), null != l.auto_threshold && (t.autoThreshold = l.auto_threshold), null != l.threshold && (t.threshold = l.threshold), null != l.shortcut && (t.shortcut = l.shortcut.map(e => [e.type, e.code])), null != l.delay && (t.delay = l.delay), n.default.setMode(e, t)
      }
      if (null != i && n.default.setAutomaticGainControl(i), null != r && n.default.setEchoCancellation(r), null != u && n.default.setNoiseSuppression(u), null != d && n.default.setQoS(d), null != c && n.default.setSilenceWarning(c), null != f) {
        let e = s.default.isSelfDeaf();
        (e && !f || !e && f) && n.default.toggleSelfDeaf()
      }
      if (null != E) {
        let e = s.default.isSelfMute();
        (e && !E || !e && E) && n.default.toggleSelfMute()
      }
      return (0, o.getDeprecatedVoiceSettings)()
    }
  }
}