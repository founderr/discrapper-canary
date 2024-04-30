"use strict";
a.r(t), a("47120");
var n = a("846027"),
  s = a("131951"),
  l = a("13140"),
  i = a("996106"),
  r = a("452426"),
  o = a("186901"),
  u = a("981631"),
  d = a("65154");

function c(e) {
  let t = e.application.id;
  if (null == t) throw new i.default({
    errorCode: u.RPCErrors.INVALID_COMMAND
  }, "No application.");
  return t
}
t.default = {
  [u.RPCCommands.SET_VOICE_SETTINGS_2]: {
    scope: o.RPC_LOCAL_SCOPE,
    validation: e => (0, r.default)(e).required().keys({
      input_mode: (0, r.default)(e).keys({
        type: e.string().valid(Object.keys(u.InputModes)),
        shortcut: e.string().required()
      }),
      self_mute: e.boolean(),
      self_deaf: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          input_mode: a,
          self_mute: i,
          self_deaf: r
        }
      } = e, o = c(t);
      null != a && n.default.setMode(a.type, {
        shortcut: (0, l.toCombo)(a.shortcut)
      }, o), null != i && i !== s.default.isSelfMute(o) && n.default.toggleSelfMute({
        context: o
      }), null != r && r !== s.default.isSelfDeaf(o) && n.default.toggleSelfDeaf({
        context: o
      })
    }
  },
  [u.RPCCommands.SET_USER_VOICE_SETTINGS_2]: {
    scope: o.RPC_LOCAL_SCOPE,
    validation: e => (0, r.default)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: a,
          mute: l,
          volume: i
        }
      } = e, r = c(t);
      null != l && l !== s.default.isLocalMute(a, r) && n.default.toggleLocalMute(a, r), null != i && n.default.setLocalVolume(a, i, r)
    }
  },
  [u.RPCCommands.PUSH_TO_TALK]: {
    scope: {
      [o.RPC_SCOPE_CONFIG.ALL]: [u.OAuth2Scopes.RPC, u.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, r.default)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      s.default.getMode(d.MediaEngineContextTypes.DEFAULT) === u.InputModes.PUSH_TO_TALK && s.default.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), d.MediaEngineContextTypes.DEFAULT)
    }
  }
}