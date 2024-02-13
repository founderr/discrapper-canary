"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("702976");
var a = n("872717"),
  s = n("84460"),
  l = n("299285"),
  i = n("167726"),
  r = n("599110"),
  o = n("568734"),
  u = n("861309"),
  d = n("578287"),
  c = n("716724"),
  f = n("613652"),
  E = n("492249"),
  h = n("49111"),
  _ = {
    [h.RPCCommands.SEND_ANALYTICS_EVENT]: {
      validation: e => (0, c.default)(e).required().keys({
        event_name: e.string().required(),
        event_properties: e.object().required()
      }),
      handler(e) {
        var t;
        let {
          socket: n,
          args: {
            event_name: a,
            event_properties: s
          }
        } = e;
        (0, d.validatePostMessageTransport)(n.transport), (0, d.validateApplication)(n.application);
        let i = n.application.id,
          c = (0, f.default)(),
          E = null == c ? void 0 : c.getGuildId();
        if (null == c) throw new u.default({
          errorCode: h.RPCErrors.INVALID_COMMAND
        }, "Invalid channel");
        let _ = l.default.getApplication(i),
          C = (0, o.hasFlag)(null !== (t = null == _ ? void 0 : _.flags) && void 0 !== t ? t : 0, h.ApplicationFlags.EMBEDDED_FIRST_PARTY);
        if (!C) throw new u.default({
          errorCode: h.RPCErrors.INVALID_COMMAND
        }, "This application cannot access this API");
        r.default.track(a, {
          ...s,
          activity_application_id: i,
          activity_guild_id: E
        })
      }
    },
    [h.RPCCommands.GET_APPLICATION_TICKET]: {
      scope: E.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: t
        } = e, n = t.application.id;
        if (null == n) throw new u.default({
          errorCode: h.RPCErrors.INVALID_COMMAND
        }, "No application.");
        return a.default.post({
          url: h.Endpoints.APPLICATION_TICKET(n),
          body: {
            test_mode: i.default.inTestModeForApplication(n) || s.default.inDevModeForApplication(n)
          },
          retries: 3,
          oldFormErrors: !0
        }).then(e => {
          let {
            body: t
          } = e;
          return t
        })
      }
    }
  }