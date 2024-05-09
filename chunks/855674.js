"use strict";
let a;
n.r(t), n("47120");
var r, s, i, l, o = n("392711"),
  c = n.n(o),
  d = n("442837"),
  u = n("570140"),
  f = n("308063");
let m = {},
  h = {};

function p(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function E(e) {
  return null != m[e] ? m[e] : (m[e] = {}, m[e])
}

function T(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  E(t)[n.id] = n
}
class C extends(r = d.default.Store) {
  isFetching(e, t) {
    return null != h[p(e, t)]
  }
  getWebhooksForGuild(e) {
    return c().values(E(e))
  }
  getWebhooksForChannel(e, t) {
    return c()(E(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return a
  }
}
l = "WebhooksStore", (i = "displayName") in(s = C) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.default = new C(u.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: r,
      error: s
    } = e;
    if (null == r) {
      null != s ? (a = s, delete h[p(t, n)]) : null != n && null != m[t] && (a = null, f.default.fetchForChannel(t, n));
      return
    }
    a = null;
    let i = [];
    null != n && (i = c()(E(t)).values().filter(e => e.channel_id !== n).value());
    let l = m[t] = {};
    i.concat(r).forEach(e => l[e.id] = e), delete h[p(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    h[p(t, n)] = !0
  },
  WEBHOOK_CREATE: T,
  WEBHOOK_UPDATE: T,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete E(t)[n]
  }
})