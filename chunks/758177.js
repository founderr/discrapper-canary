"use strict";
a.r(t), a("47120");
var n = a("594174"),
  s = a("768581"),
  l = a("956664"),
  i = a("996106"),
  r = a("452426"),
  o = a("186901"),
  u = a("981631");
t.default = {
  [u.RPCCommands.GET_IMAGE]: {
    scope: o.RPC_LOCAL_SCOPE,
    validation: e => (0, r.default)(e).required().keys({
      type: e.string().required().valid(["user"]),
      id: e.string().required(),
      format: e.string().required().valid(["png", "webp", "jpg"]),
      size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024])
    }),
    handler(e) {
      let t, {
        args: {
          type: a,
          id: r,
          format: o = "png",
          size: d = 128
        }
      } = e;
      if ("user" === a) {
        let e = n.default.getUser(r);
        if (null != e) {
          t = s.default.getUserAvatarURL(e, !1, d, o);
          let a = window.GLOBAL_ENV.CDN_HOST;
          null != a && -1 !== t.indexOf(a) && (t += "&_=")
        } else throw new i.default({
          errorCode: u.RPCErrors.INVALID_USER
        }, "Invalid user id: ".concat(r))
      }
      if (null == t) throw new i.default({
        errorCode: u.RPCErrors.INVALID_COMMAND
      }, "No valid type.");
      return fetch(t).then(e => e.blob()).then(e => (0, l.readFileAsBase64)(e)).then(e => ({
        data_url: e
      }))
    }
  }
}