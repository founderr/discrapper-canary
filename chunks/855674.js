"use strict";
let n;
i.r(t), i("47120");
var r, s, a, l, o = i("392711"),
  c = i.n(o),
  u = i("442837"),
  d = i("570140"),
  f = i("308063");
let p = {},
  C = {};

function m(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function h(e) {
  return null != p[e] ? p[e] : (p[e] = {}, p[e])
}

function _(e) {
  let {
    guildId: t,
    webhook: i
  } = e;
  h(t)[i.id] = i
}
class E extends(r = u.default.Store) {
  isFetching(e, t) {
    return null != C[m(e, t)]
  }
  getWebhooksForGuild(e) {
    return c().values(h(e))
  }
  getWebhooksForChannel(e, t) {
    return c()(h(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return n
  }
}
l = "WebhooksStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new E(d.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: i,
      webhooks: r,
      error: s
    } = e;
    if (null == r) {
      null != s ? (n = s, delete C[m(t, i)]) : null != i && null != p[t] && (n = null, f.default.fetchForChannel(t, i));
      return
    }
    n = null;
    let a = [];
    null != i && (a = c()(h(t)).values().filter(e => e.channel_id !== i).value());
    let l = p[t] = {};
    a.concat(r).forEach(e => l[e.id] = e), delete C[m(t, i)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: i
    } = e;
    C[m(t, i)] = !0
  },
  WEBHOOK_CREATE: _,
  WEBHOOK_UPDATE: _,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: i
    } = e;
    delete h(t)[i]
  }
})