"use strict";
let a;
n.r(t), n("47120");
var i, r, s, l, o = n("392711"),
  d = n.n(o),
  c = n("442837"),
  u = n("570140"),
  f = n("308063");
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
    webhook: n
  } = e;
  T(t)[n.id] = n
}
class _ extends(i = c.default.Store) {
  isFetching(e, t) {
    return null != h[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return d().values(T(e))
  }
  getWebhooksForChannel(e, t) {
    return d()(T(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return a
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
      channelId: n,
      webhooks: i,
      error: r
    } = e;
    if (null == i) {
      null != r ? (a = r, delete h[E(t, n)]) : null != n && null != m[t] && (a = null, f.default.fetchForChannel(t, n));
      return
    }
    a = null;
    let s = [];
    null != n && (s = d()(T(t)).values().filter(e => e.channel_id !== n).value());
    let l = m[t] = {};
    s.concat(i).forEach(e => l[e.id] = e), delete h[E(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    h[E(t, n)] = !0
  },
  WEBHOOK_CREATE: p,
  WEBHOOK_UPDATE: p,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete T(t)[n]
  }
})