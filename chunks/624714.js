n(47120), n(789020);
var i = n(544891),
  s = n(115130),
  l = n(287545),
  a = n(812206),
  r = n(695103),
  o = n(626135),
  c = n(630388),
  u = n(996106),
  d = n(914946),
  E = n(452426),
  h = n(561205),
  _ = n(186901),
  I = n(981631);
t.Z = {
  [I.Etm.SEND_ANALYTICS_EVENT]: {
    validation: e => (0, E.Z)(e).required().keys({
      event_name: e.string().required(),
      event_properties: e.object().required()
    }),
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          event_name: i,
          event_properties: s
        }
      } = e;
      (0, d.bu)(n.transport), (0, d._f)(n.application);
      let r = n.application.id,
        E = (0, h.Z)(),
        _ = null == E ? void 0 : E.getGuildId();
      if (null == E) throw new u.Z({
        errorCode: I.lTL.INVALID_COMMAND
      }, "Invalid channel");
      let m = a.Z.getApplication(r);
      if (!(0, c.yE)(null !== (t = null == m ? void 0 : m.flags) && void 0 !== t ? t : 0, I.udG.EMBEDDED_FIRST_PARTY)) throw new u.Z({
        errorCode: I.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let g = (0, l.U)(r),
        p = {
          activity_application_id: r,
          activity_channel_type: E.type,
          activity_guild_id: _,
          activity_user_session_id: null == g ? void 0 : g.activityUserSessionId
        };
      o.default.track(i, {
        ...p,
        ...s
      })
    }
  },
  [I.Etm.GET_APPLICATION_TICKET]: {
    scope: _.lH,
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new u.Z({
        errorCode: I.lTL.INVALID_COMMAND
      }, "No application.");
      return i.tn.post({
        url: I.ANM.APPLICATION_TICKET(n),
        body: {
          test_mode: r.Z.inTestModeForApplication(n) || s.Z.inDevModeForApplication(n)
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