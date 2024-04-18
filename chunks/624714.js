"use strict";
a.r(t), a("47120"), a("789020");
var n = a("544891"),
  s = a("115130"),
  l = a("287545"),
  i = a("812206"),
  r = a("695103"),
  o = a("626135"),
  u = a("630388"),
  d = a("996106"),
  c = a("914946"),
  f = a("452426"),
  E = a("561205"),
  h = a("186901"),
  _ = a("981631");
t.default = {
  [_.RPCCommands.SEND_ANALYTICS_EVENT]: {
    validation: e => (0, f.default)(e).required().keys({
      event_name: e.string().required(),
      event_properties: e.object().required()
    }),
    handler(e) {
      var t;
      let {
        socket: a,
        args: {
          event_name: n,
          event_properties: s
        }
      } = e;
      (0, c.validatePostMessageTransport)(a.transport), (0, c.validateApplication)(a.application);
      let r = a.application.id,
        f = (0, E.default)(),
        h = null == f ? void 0 : f.getGuildId();
      if (null == f) throw new d.default({
        errorCode: _.RPCErrors.INVALID_COMMAND
      }, "Invalid channel");
      let C = i.default.getApplication(r);
      if (!(0, u.hasFlag)(null !== (t = null == C ? void 0 : C.flags) && void 0 !== t ? t : 0, _.ApplicationFlags.EMBEDDED_FIRST_PARTY)) throw new d.default({
        errorCode: _.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let m = (0, l.getActiveAnalyticsSessionIDs)(r),
        S = {
          activity_application_id: r,
          activity_channel_type: f.type,
          activity_guild_id: h,
          activity_user_session_id: null == m ? void 0 : m.activityUserSessionId
        };
      o.default.track(n, {
        ...S,
        ...s
      })
    }
  },
  [_.RPCCommands.GET_APPLICATION_TICKET]: {
    scope: h.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, a = t.application.id;
      if (null == a) throw new d.default({
        errorCode: _.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return n.HTTP.post({
        url: _.Endpoints.APPLICATION_TICKET(a),
        body: {
          test_mode: r.default.inTestModeForApplication(a) || s.default.inDevModeForApplication(a)
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