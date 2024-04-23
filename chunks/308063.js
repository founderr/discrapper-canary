"use strict";
n.r(t);
var a = n("392711"),
  r = n.n(a),
  i = n("544891"),
  s = n("570140"),
  u = n("981631");
let o = ["Spidey Bot", "Captain Hook"];
t.default = {
  fetchForGuild(e) {
    s.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), i.HTTP.get({
      url: u.Endpoints.GUILD_WEBHOOKS(e),
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
      url: u.Endpoints.CHANNEL_WEBHOOKS(t),
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
  create: (e, t, n) => (null == n && (n = o[r().random(0, o.length - 1)]), i.HTTP.post({
    url: u.Endpoints.CHANNEL_WEBHOOKS(t),
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
    url: u.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    s.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => i.HTTP.patch({
    url: u.Endpoints.WEBHOOK(t),
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