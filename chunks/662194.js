n(47120);
var s = n(243814),
  i = n(846027),
  l = n(131951),
  a = n(594174),
  r = n(996106),
  o = n(452426),
  c = n(852926),
  u = n(186901),
  d = n(981631);
t.Z = {
  [d.Etm.SET_USER_VOICE_SETTINGS]: {
    scope: {
      [u.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.Z)(e).required().keys({
      user_id: e.string().required(),
      pan: (0, o.Z)(e).keys({
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
          pan: n,
          volume: s,
          mute: o
        }
      } = e, c = a.default.getCurrentUser();
      if (null == a.default.getUser(t) || (null == c ? void 0 : c.id) === t) throw new r.Z({
        errorCode: d.lTL.INVALID_USER
      }, "Invalid user id: ".concat(t));
      if (null != n && i.Z.setLocalPan(t, n.left, n.right), null != s && i.Z.setLocalVolume(t, s), null != o) {
        let e = l.Z.isLocalMute(t);
        (e && !o || !e && o) && i.Z.toggleLocalMute(t)
      }
      return {
        user_id: t,
        pan: l.Z.getLocalPan(t),
        volume: l.Z.getLocalVolume(t),
        mute: l.Z.isLocalMute(t)
      }
    }
  },
  [d.Etm.GET_VOICE_SETTINGS]: {
    scope: {
      [u.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
    },
    handler: () => (0, c._X)()
  },
  [d.Etm.SET_VOICE_SETTINGS]: {
    scope: {
      [u.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.Z)(e).required().keys({
      input: (0, o.Z)(e).keys({
        device_id: e.string().valid(Object.keys(l.Z.getInputDevices())),
        volume: e.number().min(0).max(100)
      }),
      output: (0, o.Z)(e).keys({
        device_id: e.string().valid(Object.keys(l.Z.getOutputDevices())),
        volume: e.number().min(0).max(200)
      }),
      mode: (0, o.Z)(e).keys({
        type: e.string().valid(Object.keys(d.pM4)),
        auto_threshold: e.boolean(),
        threshold: e.number().min(-100).max(0),
        shortcut: e.array().items((0, o.Z)(e).keys({
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
          output: n,
          mode: s,
          automatic_gain_control: a,
          echo_cancellation: r,
          noise_suppression: o,
          qos: u,
          silence_warning: d,
          deaf: E,
          mute: h
        }
      } = e;
      if (t && (null != t.device_id && i.Z.setInputDevice(t.device_id), null != t.volume && i.Z.setInputVolume(t.volume)), n && (null != n.device_id && i.Z.setOutputDevice(n.device_id), null != n.volume && i.Z.setOutputVolume(n.volume)), s) {
        let e = l.Z.getMode(),
          t = l.Z.getModeOptions();
        null != s.type && (e = s.type), null != s.auto_threshold && (t.autoThreshold = s.auto_threshold), null != s.threshold && (t.threshold = s.threshold), null != s.shortcut && (t.shortcut = s.shortcut.map(e => [e.type, e.code])), null != s.delay && (t.delay = s.delay), i.Z.setMode(e, t)
      }
      if (null != a && i.Z.setAutomaticGainControl(a), null != r && i.Z.setEchoCancellation(r), null != o && i.Z.setNoiseSuppression(o), null != u && i.Z.setQoS(u), null != d && i.Z.setSilenceWarning(d), null != E) {
        let e = l.Z.isSelfDeaf();
        (e && !E || !e && E) && i.Z.toggleSelfDeaf()
      }
      if (null != h) {
        let e = l.Z.isSelfMute();
        (e && !h || !e && h) && i.Z.toggleSelfMute()
      }
      return (0, c._X)()
    }
  }
}