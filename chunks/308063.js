"use strict";
n.r(e);
var i = n("392711"),
  a = n.n(i),
  r = n("544891"),
  u = n("570140"),
  o = n("981631");
let d = ["Spidey Bot", "Captain Hook"];
e.default = {
  fetchForGuild(t) {
    u.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: t
    }), r.HTTP.get({
      url: o.Endpoints.GUILD_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(e => {
      let {
        body: n
      } = e;
      return u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: t,
        webhooks: n
      })
    }).catch(e => {
      let {
        body: n
      } = e;
      u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: t,
        error: n.message
      })
    })
  },
  fetchForChannel(t, e) {
    u.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: t,
      channelId: e
    }), r.HTTP.get({
      url: o.Endpoints.CHANNEL_WEBHOOKS(e),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: i
      } = n;
      return u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: t,
        channelId: e,
        webhooks: i
      })
    })
  },
  create: (t, e, n) => (null == n && (n = d[a().random(0, d.length - 1)]), r.HTTP.post({
    url: o.Endpoints.CHANNEL_WEBHOOKS(e),
    body: {
      name: n
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: n
    } = e;
    return u.default.dispatch({
      type: "WEBHOOK_CREATE",
      guildId: t,
      webhook: n
    }), n
  })),
  delete: (t, e) => r.HTTP.del({
    url: o.Endpoints.WEBHOOK(e),
    oldFormErrors: !0
  }).then(() => {
    u.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: t,
      webhookId: e
    })
  }),
  update: (t, e, n) => r.HTTP.patch({
    url: o.Endpoints.WEBHOOK(e),
    body: n,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: n
    } = e;
    return u.default.dispatch({
      type: "WEBHOOK_UPDATE",
      guildId: t,
      webhook: n
    }), n
  })
}