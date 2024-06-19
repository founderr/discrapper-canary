let a;
t(47120);
var r, s, i, o, l = t(392711),
  c = t.n(l),
  d = t(442837),
  u = t(570140),
  m = t(308063);
let h = {},
  C = {};

function x(e, n) {
  return null == n && (n = "guild"), "".concat(e, ":").concat(n)
}

function f(e) {
  return null != h[e] ? h[e] : (h[e] = {}, h[e])
}

function E(e) {
  let {
    guildId: n,
    webhook: t
  } = e;
  f(n)[t.id] = t
}
class T extends(r = d.ZP.Store) {
  isFetching(e, n) {
    return null != C[x(e, n)]
  }
  getWebhooksForGuild(e) {
    return c().values(f(e))
  }
  getWebhooksForChannel(e, n) {
    return c()(f(e)).values().filter(e => e.channel_id === n).value()
  }
  get error() {
    return a
  }
}
o = "WebhooksStore", (i = "displayName") in(s = T) ? Object.defineProperty(s, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = o, n.Z = new T(u.Z, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: n,
      channelId: t,
      webhooks: r,
      error: s
    } = e;
    if (null == r) {
      null != s ? (a = s, delete C[x(n, t)]) : null != t && null != h[n] && (a = null, m.Z.fetchForChannel(n, t));
      return
    }
    a = null;
    let i = [];
    null != t && (i = c()(f(n)).values().filter(e => e.channel_id !== t).value());
    let o = h[n] = {};
    i.concat(r).forEach(e => o[e.id] = e), delete C[x(n, t)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: n,
      channelId: t
    } = e;
    C[x(n, t)] = !0
  },
  WEBHOOK_CREATE: E,
  WEBHOOK_UPDATE: E,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: n,
      webhookId: t
    } = e;
    delete f(n)[t]
  }
})