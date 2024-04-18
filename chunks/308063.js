"use strict";
n.r(t);
var a = n("392711"),
  i = n.n(a),
  r = n("544891"),
  s = n("570140"),
  o = n("981631");
let u = ["Spidey Bot", "Captain Hook"];
t.default = {
  fetchForGuild(e) {
    s.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), r.HTTP.get({
      url: o.Endpoints.GUILD_WEBHOOKS(e),
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      return s.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        webhooks: n
      })
    }).catch(t => {
      let {
        body: n
      } = t;
      s.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        error: n.message
      })
    })
  },
  fetchForChannel(e, t) {
    s.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e,
      channelId: t
    }), r.HTTP.get({
      url: o.Endpoints.CHANNEL_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: a
      } = n;
      return s.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        channelId: t,
        webhooks: a
      })
    })
  },
  create: (e, t, n) => (null == n && (n = u[i().random(0, u.length - 1)]), r.HTTP.post({
    url: o.Endpoints.CHANNEL_WEBHOOKS(t),
    body: {
      name: n
    },
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return s.default.dispatch({
      type: "WEBHOOK_CREATE",
      guildId: e,
      webhook: n
    }), n
  })),
  delete: (e, t) => r.HTTP.del({
    url: o.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    s.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => r.HTTP.patch({
    url: o.Endpoints.WEBHOOK(t),
    body: n,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return s.default.dispatch({
      type: "WEBHOOK_UPDATE",
      guildId: e,
      webhook: n
    }), n
  })
}