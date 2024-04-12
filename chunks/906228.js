"use strict";
a.r(t), a("47120");
var n = a("120960"),
  s = a("996106"),
  l = a("452426"),
  i = a("186901"),
  r = a("981631"),
  o = a("65154");
t.default = {
  [r.RPCCommands.SET_CERTIFIED_DEVICES]: {
    scope: {
      [i.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, i.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      devices: e.array().items((0, l.default)(e).keys({
        type: e.string().required().valid([o.DeviceTypes.AUDIO_INPUT, o.DeviceTypes.AUDIO_OUTPUT, o.DeviceTypes.VIDEO_INPUT]),
        id: e.string().required().min(1),
        vendor: e.object().required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        model: e.object().required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        related: e.array().items(e.string().min(1)),
        echo_cancellation: e.boolean(),
        noise_suppression: e.boolean(),
        automatic_gain_control: e.boolean(),
        hardware_mute: e.boolean()
      }))
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          devices: a
        }
      } = e;
      if (null == t.application.id) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      (0, n.setCertifiedDevices)(t.application.id, a.map(e => ({
        type: e.type,
        id: e.id,
        vendor: e.vendor,
        model: e.model,
        related: e.related.filter(e => a.some(t => t.id === e)),
        echoCancellation: e.echo_cancellation,
        noiseSuppression: e.noise_suppression,
        automaticGainControl: e.automatic_gain_control,
        hardwareMute: e.hardware_mute
      })))
    }
  }
}