"use strict";
let a;
n.r(t), n("47120");
var r, i, s, l, o = n("392711"),
  c = n.n(o),
  d = n("442837"),
  u = n("570140"),
  f = n("308063");
let m = {},
  h = {};

function p(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function T(e) {
  return null != m[e] ? m[e] : (m[e] = {}, m[e])
}

function E(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  T(t)[n.id] = n
}
class C extends(r = d.default.Store) {
  isFetching(e, t) {
    return null != h[p(e, t)]
  }
  getWebhooksForGuild(e) {
    return c().values(T(e))
  }
  getWebhooksForChannel(e, t) {
    return c()(T(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return a
  }
}
l = "WebhooksStore", (s = "displayName") in(i = C) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.default = new C(u.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: r,
      error: i
    } = e;
    if (null == r) {
      null != i ? (a = i, delete h[p(t, n)]) : null != n && null != m[t] && (a = null, f.default.fetchForChannel(t, n));
      return
    }
    a = null;
    let s = [];
    null != n && (s = c()(T(t)).values().filter(e => e.channel_id !== n).value());
    let l = m[t] = {};
    s.concat(r).forEach(e => l[e.id] = e), delete h[p(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    h[p(t, n)] = !0
  },
  WEBHOOK_CREATE: E,
  WEBHOOK_UPDATE: E,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete T(t)[n]
  }
})