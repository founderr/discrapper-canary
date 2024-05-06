"use strict";
let n;
a.r(t), a("47120");
var i, r, s, l, o = a("392711"),
  c = a.n(o),
  d = a("442837"),
  u = a("570140"),
  f = a("308063");
let m = {},
  h = {};

function E(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function T(e) {
  return null != m[e] ? m[e] : (m[e] = {}, m[e])
}

function p(e) {
  let {
    guildId: t,
    webhook: a
  } = e;
  T(t)[a.id] = a
}
class _ extends(i = d.default.Store) {
  isFetching(e, t) {
    return null != h[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return c().values(T(e))
  }
  getWebhooksForChannel(e, t) {
    return c()(T(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return n
  }
}
l = "WebhooksStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = l, t.default = new _(u.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: a,
      webhooks: i,
      error: r
    } = e;
    if (null == i) {
      null != r ? (n = r, delete h[E(t, a)]) : null != a && null != m[t] && (n = null, f.default.fetchForChannel(t, a));
      return
    }
    n = null;
    let s = [];
    null != a && (s = c()(T(t)).values().filter(e => e.channel_id !== a).value());
    let l = m[t] = {};
    s.concat(i).forEach(e => l[e.id] = e), delete h[E(t, a)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: a
    } = e;
    h[E(t, a)] = !0
  },
  WEBHOOK_CREATE: p,
  WEBHOOK_UPDATE: p,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: a
    } = e;
    delete T(t)[a]
  }
})