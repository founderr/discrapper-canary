n(47120);
var s = n(243814),
  i = n(846027),
  l = n(131951),
  a = n(13140),
  r = n(996106),
  o = n(452426),
  c = n(186901),
  u = n(981631),
  d = n(65154);

function E(e) {
  let t = e.application.id;
  if (null == t) throw new r.Z({
    errorCode: u.lTL.INVALID_COMMAND
  }, "No application.");
  return t
}
t.Z = {
  [u.Etm.SET_VOICE_SETTINGS_2]: {
    scope: c.lH,
    validation: e => (0, o.Z)(e).required().keys({
      input_mode: (0, o.Z)(e).keys({
        type: e.string().valid(Object.keys(u.pM4)),
        shortcut: e.string().required()
      }),
      self_mute: e.boolean(),
      self_deaf: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          input_mode: n,
          self_mute: s,
          self_deaf: r
        }
      } = e, o = E(t);
      null != n && i.Z.setMode(n.type, {
        shortcut: (0, a.Kd)(n.shortcut)
      }, o), null != s && s !== l.Z.isSelfMute(o) && i.Z.toggleSelfMute({
        context: o
      }), null != r && r !== l.Z.isSelfDeaf(o) && i.Z.toggleSelfDeaf({
        context: o
      })
    }
  },
  [u.Etm.SET_USER_VOICE_SETTINGS_2]: {
    scope: c.lH,
    validation: e => (0, o.Z)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          mute: s,
          volume: a
        }
      } = e, r = E(t);
      null != s && s !== l.Z.isLocalMute(n, r) && i.Z.toggleLocalMute(n, r), null != a && i.Z.setLocalVolume(n, a, r)
    }
  },
  [u.Etm.PUSH_TO_TALK]: {
    scope: {
      [c.Gp.ALL]: [s.x.RPC, s.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.Z)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      if (l.Z.getMode(d.Yn.DEFAULT) === u.pM4.PUSH_TO_TALK) l.Z.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), d.Yn.DEFAULT)
    }
  }
}