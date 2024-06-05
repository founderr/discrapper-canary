"use strict";
let n;
a.r(t), a("47120");
var r, i, s, l, o = a("392711"),
  d = a.n(o),
  c = a("442837"),
  u = a("570140"),
  f = a("308063");
let m = {},
  E = {};

function h(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function T(e) {
  return null != m[e] ? m[e] : (m[e] = {}, m[e])
}

function _(e) {
  let {
    guildId: t,
    webhook: a
  } = e;
  T(t)[a.id] = a
}
class C extends(r = c.default.Store) {
  isFetching(e, t) {
    return null != E[h(e, t)]
  }
  getWebhooksForGuild(e) {
    return d().values(T(e))
  }
  getWebhooksForChannel(e, t) {
    return d()(T(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return n
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
      channelId: a,
      webhooks: r,
      error: i
    } = e;
    if (null == r) {
      null != i ? (n = i, delete E[h(t, a)]) : null != a && null != m[t] && (n = null, f.default.fetchForChannel(t, a));
      return
    }
    n = null;
    let s = [];
    null != a && (s = d()(T(t)).values().filter(e => e.channel_id !== a).value());
    let l = m[t] = {};
    s.concat(r).forEach(e => l[e.id] = e), delete E[h(t, a)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: a
    } = e;
    E[h(t, a)] = !0
  },
  WEBHOOK_CREATE: _,
  WEBHOOK_UPDATE: _,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: a
    } = e;
    delete T(t)[a]
  }
})