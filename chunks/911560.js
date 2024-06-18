"use strict";
var i = n(266067),
  r = n(544891),
  s = n(570140),
  o = n(38618),
  a = n(131704),
  l = n(592125),
  u = n(944486),
  _ = n(981631),
  c = n(176505);
let d = {},
  E = !1;

function I(e) {
  if (null == e || e === c.V || (0, c.AB)(e) || null != l.Z.getChannel(e)) return Promise.resolve();
  if (E || (E = !0, s.Z.subscribe("CONNECTION_OPEN", () => {
      d = {};
      let e = u.Z.getChannelId(),
        t = l.Z.getChannel(e);
      null != e && null == t && I(e)
    })), !o.Z.isConnected()) return Promise.resolve();
  let t = d[e];
  if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
  let n = (0, i.LX)(location.pathname, {
      path: _.Z5c.CHANNEL(":guildId", ":channelId", ":messageId"),
      exact: !0
    }),
    T = r.tn.get(_.ANM.CHANNEL(e)).then(t => {
      let {
        body: i
      } = t;
      if (d[e] = {
          type: "LOADED"
        }, a.Ec.has(i.type)) {
        var r;
        s.Z.dispatch({
          type: "THREAD_CREATE",
          channel: (0, a.q_)(i),
          messageId: null == n ? void 0 : null === (r = n.params) || void 0 === r ? void 0 : r.messageId
        })
      }
    }).catch(() => {
      var t;
      d[e] = {
        type: "NOT_FOUND"
      }, s.Z.dispatch({
        type: "CHANNEL_DELETE",
        channel: {
          id: e,
          guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
          parent_id: void 0
        }
      })
    });
  return d[e] = {
    type: "LOADING",
    promise: T
  }, T
}
t.Z = {
  loadThread: I
}