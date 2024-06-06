"use strict";
n.r(t), n("47120"), n("789020");
var a = n("544891"),
  s = n("115130"),
  l = n("287545"),
  i = n("812206"),
  r = n("695103"),
  o = n("626135"),
  u = n("630388"),
  d = n("996106"),
  c = n("914946"),
  f = n("452426"),
  E = n("561205"),
  h = n("186901"),
  C = n("981631");
t.default = {
  [C.RPCCommands.SEND_ANALYTICS_EVENT]: {
    validation: e => (0, f.default)(e).required().keys({
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
      (0, c.validatePostMessageTransport)(n.transport), (0, c.validateApplication)(n.application);
      let r = n.application.id,
        f = (0, E.default)(),
        h = null == f ? void 0 : f.getGuildId();
      if (null == f) throw new d.default({
        errorCode: C.RPCErrors.INVALID_COMMAND
      }, "Invalid channel");
      let _ = i.default.getApplication(r);
      if (!(0, u.hasFlag)(null !== (t = null == _ ? void 0 : _.flags) && void 0 !== t ? t : 0, C.ApplicationFlags.EMBEDDED_FIRST_PARTY)) throw new d.default({
        errorCode: C.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let m = (0, l.getActiveAnalyticsSessionIDs)(r),
        S = {
          activity_application_id: r,
          activity_channel_type: f.type,
          activity_guild_id: h,
          activity_user_session_id: null == m ? void 0 : m.activityUserSessionId
        };
      o.default.track(a, {
        ...S,
        ...s
      })
    }
  },
  [C.RPCCommands.GET_APPLICATION_TICKET]: {
    scope: h.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new d.default({
        errorCode: C.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return a.HTTP.post({
        url: C.Endpoints.APPLICATION_TICKET(n),
        body: {
          test_mode: r.default.inTestModeForApplication(n) || s.default.inDevModeForApplication(n)
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