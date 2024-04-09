"use strict";
let i;
n.r(t), n("47120");
var r, a, s, l, o = n("392711"),
  u = n.n(o),
  c = n("442837"),
  d = n("570140"),
  f = n("308063");
let p = {},
  m = {};

function E(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function I(e) {
  return null != p[e] ? p[e] : (p[e] = {}, p[e])
}

function _(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  I(t)[n.id] = n
}
class T extends(r = c.default.Store) {
  isFetching(e, t) {
    return null != m[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return u().values(I(e))
  }
  getWebhooksForChannel(e, t) {
    return u()(I(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return i
  }
}
l = "WebhooksStore", (s = "displayName") in(a = T) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new T(d.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: r,
      error: a
    } = e;
    if (null == r) {
      null != a ? (i = a, delete m[E(t, n)]) : null != n && null != p[t] && (i = null, f.default.fetchForChannel(t, n));
      return
    }
    i = null;
    let s = [];
    null != n && (s = u()(I(t)).values().filter(e => e.channel_id !== n).value());
    let l = p[t] = {};
    s.concat(r).forEach(e => l[e.id] = e), delete m[E(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    m[E(t, n)] = !0
  },
  WEBHOOK_CREATE: _,
  WEBHOOK_UPDATE: _,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete I(t)[n]
  }
})