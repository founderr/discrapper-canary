var i = n(392711),
  r = n.n(i),
  a = n(544891),
  s = n(570140),
  o = n(981631);
let d = [
  'Spidey Bot',
  'Captain Hook'
];
t.Z = {
  fetchForGuild(e) {
s.Z.dispatch({
  type: 'WEBHOOKS_FETCHING',
  guildId: e
}), a.tn.get({
  url: o.ANM.GUILD_WEBHOOKS(e),
  oldFormErrors: !0
}).then(t => {
  let {
    body: n
  } = t;
  return s.Z.dispatch({
    type: 'WEBHOOKS_UPDATE',
    guildId: e,
    webhooks: n
  });
}).catch(t => {
  let {
    body: n
  } = t;
  s.Z.dispatch({
    type: 'WEBHOOKS_UPDATE',
    guildId: e,
    error: n.message
  });
});
  },
  fetchForChannel(e, t) {
s.Z.dispatch({
  type: 'WEBHOOKS_FETCHING',
  guildId: e,
  channelId: t
}), a.tn.get({
  url: o.ANM.CHANNEL_WEBHOOKS(t),
  oldFormErrors: !0
}).then(n => {
  let {
    body: i
  } = n;
  return s.Z.dispatch({
    type: 'WEBHOOKS_UPDATE',
    guildId: e,
    channelId: t,
    webhooks: i
  });
});
  },
  create: (e, t, n) => (null == n && (n = d[r().random(0, d.length - 1)]), a.tn.post({
url: o.ANM.CHANNEL_WEBHOOKS(t),
body: {
  name: n
},
oldFormErrors: !0
  }).then(t => {
let {
  body: n
} = t;
return s.Z.dispatch({
  type: 'WEBHOOK_CREATE',
  guildId: e,
  webhook: n
}), n;
  })),
  delete: (e, t) => a.tn.del({
url: o.ANM.WEBHOOK(t),
oldFormErrors: !0
  }).then(() => {
s.Z.dispatch({
  type: 'WEBHOOK_DELETE',
  guildId: e,
  webhookId: t
});
  }),
  update: (e, t, n) => a.tn.patch({
url: o.ANM.WEBHOOK(t),
body: n,
oldFormErrors: !0
  }).then(t => {
let {
  body: n
} = t;
return s.Z.dispatch({
  type: 'WEBHOOK_UPDATE',
  guildId: e,
  webhook: n
}), n;
  })
};