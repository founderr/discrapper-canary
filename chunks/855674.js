"use strict";
let r;
n.r(t), n("47120");
var i, s, a, l, o = n("392711"),
  u = n.n(o),
  c = n("442837"),
  d = n("570140"),
  f = n("308063");
let p = {},
  _ = {};

function E(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function m(e) {
  return null != p[e] ? p[e] : (p[e] = {}, p[e])
}

function I(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  m(t)[n.id] = n
}
class T extends(i = c.default.Store) {
  isFetching(e, t) {
    return null != _[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return u().values(m(e))
  }
  getWebhooksForChannel(e, t) {
    return u()(m(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return r
  }
}
l = "WebhooksStore", (a = "displayName") in(s = T) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new T(d.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: i,
      error: s
    } = e;
    if (null == i) {
      null != s ? (r = s, delete _[E(t, n)]) : null != n && null != p[t] && (r = null, f.default.fetchForChannel(t, n));
      return
    }
    r = null;
    let a = [];
    null != n && (a = u()(m(t)).values().filter(e => e.channel_id !== n).value());
    let l = p[t] = {};
    a.concat(i).forEach(e => l[e.id] = e), delete _[E(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    _[E(t, n)] = !0
  },
  WEBHOOK_CREATE: I,
  WEBHOOK_UPDATE: I,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete m(t)[n]
  }
})