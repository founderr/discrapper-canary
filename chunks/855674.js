let i;
n(47120);
var l,
    r,
    T,
    I,
    o = n(392711),
    E = n.n(o),
    u = n(442837),
    N = n(570140),
    a = n(308063);
let _ = {},
    S = {};
function d(e, t) {
    return null == t && (t = 'guild'), ''.concat(e, ':').concat(t);
}
function c(e) {
    return null != _[e] ? _[e] : ((_[e] = {}), _[e]);
}
function s(e) {
    let { guildId: t, webhook: n } = e;
    c(t)[n.id] = n;
}
class O extends (l = u.ZP.Store) {
    isFetching(e, t) {
        return null != S[d(e, t)];
    }
    getWebhooksForGuild(e) {
        return E().values(c(e));
    }
    getWebhooksForChannel(e, t) {
        return E()(c(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return i;
    }
}
(I = 'WebhooksStore'),
    (T = 'displayName') in (r = O)
        ? Object.defineProperty(r, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[T] = I),
    (t.Z = new O(N.Z, {
        WEBHOOKS_UPDATE: function (e) {
            let { guildId: t, channelId: n, webhooks: l, error: r } = e;
            if (null == l) {
                null != r ? ((i = r), delete S[d(t, n)]) : null != n && null != _[t] && ((i = null), a.Z.fetchForChannel(t, n));
                return;
            }
            i = null;
            let T = [];
            null != n &&
                (T = E()(c(t))
                    .values()
                    .filter((e) => e.channel_id !== n)
                    .value());
            let I = (_[t] = {});
            T.concat(l).forEach((e) => (I[e.id] = e)), delete S[d(t, n)];
        },
        WEBHOOKS_FETCHING: function (e) {
            let { guildId: t, channelId: n } = e;
            S[d(t, n)] = !0;
        },
        WEBHOOK_CREATE: s,
        WEBHOOK_UPDATE: s,
        WEBHOOK_DELETE: function (e) {
            let { guildId: t, webhookId: n } = e;
            delete c(t)[n];
        }
    }));
