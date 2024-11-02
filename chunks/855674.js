let r;
t(47120);
var a,
    i,
    s,
    o,
    l = t(392711),
    c = t.n(l),
    d = t(442837),
    u = t(570140),
    m = t(308063);
let f = {},
    h = {};
function x(e, n) {
    return null == n && (n = 'guild'), ''.concat(e, ':').concat(n);
}
function p(e) {
    return null != f[e] ? f[e] : ((f[e] = {}), f[e]);
}
function g(e) {
    let { guildId: n, webhook: t } = e;
    p(n)[t.id] = t;
}
class C extends (a = d.ZP.Store) {
    isFetching(e, n) {
        return null != h[x(e, n)];
    }
    getWebhooksForGuild(e) {
        return c().values(p(e));
    }
    getWebhooksForChannel(e, n) {
        return c()(p(e))
            .values()
            .filter((e) => e.channel_id === n)
            .value();
    }
    get error() {
        return r;
    }
}
(o = 'WebhooksStore'),
    (s = 'displayName') in (i = C)
        ? Object.defineProperty(i, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = o),
    (n.Z = new C(u.Z, {
        WEBHOOKS_UPDATE: function (e) {
            let { guildId: n, channelId: t, webhooks: a, error: i } = e;
            if (null == a) {
                null != i ? ((r = i), delete h[x(n, t)]) : null != t && null != f[n] && ((r = null), m.Z.fetchForChannel(n, t));
                return;
            }
            r = null;
            let s = [];
            null != t &&
                (s = c()(p(n))
                    .values()
                    .filter((e) => e.channel_id !== t)
                    .value());
            let o = (f[n] = {});
            s.concat(a).forEach((e) => (o[e.id] = e)), delete h[x(n, t)];
        },
        WEBHOOKS_FETCHING: function (e) {
            let { guildId: n, channelId: t } = e;
            h[x(n, t)] = !0;
        },
        WEBHOOK_CREATE: g,
        WEBHOOK_UPDATE: g,
        WEBHOOK_DELETE: function (e) {
            let { guildId: n, webhookId: t } = e;
            delete p(n)[t];
        }
    }));
