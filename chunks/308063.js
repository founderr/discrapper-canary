"use strict";
n.r(t);
var r = n("392711"),
  a = n.n(r),
  i = n("544891"),
  s = n("570140"),
  o = n("981631");
let u = ["Spidey Bot", "Captain Hook"];
t.default = {
  fetchForGuild(e) {
    s.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), i.HTTP.get({
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
    }), i.HTTP.get({
      url: o.Endpoints.CHANNEL_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: r
      } = n;
      return s.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        channelId: t,
        webhooks: r
      })
    })
  },
  create: (e, t, n) => (null == n && (n = u[a().random(0, u.length - 1)]), i.HTTP.post({
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
  delete: (e, t) => i.HTTP.del({
    url: o.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    s.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => i.HTTP.patch({
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