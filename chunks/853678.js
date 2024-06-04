"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("443684"),
  s = n("12647"),
  l = n("49012"),
  i = n("358085"),
  r = n("996106"),
  o = n("914946"),
  u = n("452426"),
  d = n("186901"),
  c = n("981631"),
  f = n("701488");
let E = new Set([f.AM_HARMONY_PRD_APPLICATION_ID, f.AM_HARMONY_STG_APPLICATION_ID]);
t.default = {
  [c.RPCCommands.OPEN_EXTERNAL_LINK]: {
    scope: {
      [d.RPC_SCOPE_CONFIG.ANY]: [d.RPC_AUTHENTICATED_SCOPE]
    },
    validation: e => (0, u.default)(e).required().keys({
      url: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          url: n
        }
      } = e;
      (0, o.validatePostMessageTransport)(t.transport);
      try {
        let e = new URL(n);
        i.isPlatformEmbedded && s.default.focus(null, !0), (0, l.handleClick)({
          href: e.toString()
        })
      } catch (e) {
        throw new r.default({
          errorCode: c.RPCErrors.INVALID_COMMAND
        }, "Invalid URL: ".concat(n))
      }
    }
  },
  [c.RPCCommands.NAVIGATE_TO_CONNECTIONS]: {
    validation: e => (0, u.default)(e),
    scope: {
      [d.RPC_SCOPE_CONFIG.ANY]: [d.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e;
      (0, o.validatePostMessageTransport)(t.transport);
      let n = (0, o.validateApplication)(t.application);
      if (!E.has(n)) throw new r.default({
        errorCode: c.RPCErrors.UNAUTHORIZED_FOR_APPLICATION
      }, "Command not available for this application");
      (0, a.default)(c.UserSettingsSections.CONNECTIONS)
    }
  }
}