"use strict";
let n;
a.r(t), a("47120");
var r, s, i, l, o = a("392711"),
  c = a.n(o),
  d = a("442837"),
  u = a("570140"),
  f = a("308063");
let m = {},
  h = {};

function E(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function p(e) {
  return null != m[e] ? m[e] : (m[e] = {}, m[e])
}

function C(e) {
  let {
    guildId: t,
    webhook: a
  } = e;
  p(t)[a.id] = a
}
class T extends(r = d.default.Store) {
  isFetching(e, t) {
    return null != h[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return c().values(p(e))
  }
  getWebhooksForChannel(e, t) {
    return c()(p(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return n
  }
}
l = "WebhooksStore", (i = "displayName") in(s = T) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.default = new T(u.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: a,
      webhooks: r,
      error: s
    } = e;
    if (null == r) {
      null != s ? (n = s, delete h[E(t, a)]) : null != a && null != m[t] && (n = null, f.default.fetchForChannel(t, a));
      return
    }
    n = null;
    let i = [];
    null != a && (i = c()(p(t)).values().filter(e => e.channel_id !== a).value());
    let l = m[t] = {};
    i.concat(r).forEach(e => l[e.id] = e), delete h[E(t, a)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: a
    } = e;
    h[E(t, a)] = !0
  },
  WEBHOOK_CREATE: C,
  WEBHOOK_UPDATE: C,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: a
    } = e;
    delete p(t)[a]
  }
})