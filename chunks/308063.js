"use strict";
n.r(t);
var a = n("392711"),
  s = n.n(a),
  r = n("544891"),
  i = n("570140"),
  u = n("981631");
let l = ["Spidey Bot", "Captain Hook"];
t.default = {
  fetchForGuild(e) {
    i.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), r.HTTP.get({
      url: u.Endpoints.GUILD_WEBHOOKS(e),
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      return i.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        webhooks: n
      })
    }).catch(t => {
      let {
        body: n
      } = t;
      i.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        error: n.message
      })
    })
  },
  fetchForChannel(e, t) {
    i.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e,
      channelId: t
    }), r.HTTP.get({
      url: u.Endpoints.CHANNEL_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: a
      } = n;
      return i.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        channelId: t,
        webhooks: a
      })
    })
  },
  create: (e, t, n) => (null == n && (n = l[s().random(0, l.length - 1)]), r.HTTP.post({
    url: u.Endpoints.CHANNEL_WEBHOOKS(t),
    body: {
      name: n
    },
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return i.default.dispatch({
      type: "WEBHOOK_CREATE",
      guildId: e,
      webhook: n
    }), n
  })),
  delete: (e, t) => r.HTTP.del({
    url: u.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    i.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => r.HTTP.patch({
    url: u.Endpoints.WEBHOOK(t),
    body: n,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return i.default.dispatch({
      type: "WEBHOOK_UPDATE",
      guildId: e,
      webhook: n
    }), n
  })
}