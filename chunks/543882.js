n(47120), n(724458);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(872810),
    f = n(569545),
    _ = n(70722);
let h = {},
    p = {},
    m = new Set();
function g() {
    (h = {}), (p = {});
}
class E extends (r = u.ZP.Store) {
    getPreviewURL(e, t, n) {
        let r = (0, f.V9)({
                streamType: null != e ? _.lo.GUILD : _.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n
            }),
            i = h[r];
        return null == i || Date.now() > i.expires
            ? (!m.has(r) &&
                  (m.add(r),
                  Promise.resolve().then(() => {
                      (0, d.n9)(e, t, n);
                  })),
              null)
            : i.url;
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, f.my)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, f.V9)({
            streamType: null != e ? _.lo.GUILD : _.lo.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        return m.has(r);
    }
}
(s = 'ApplicationStreamPreviewStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new E(c.Z, {
        CONNECTION_OPEN: g,
        LOGOUT: g,
        STREAM_PREVIEW_FETCH_START: function (e) {
            var t;
            let { streamKey: n } = e;
            (p[n] = (null !== (t = p[n]) && void 0 !== t ? t : 0) + 1), m.add(n);
        },
        STREAM_PREVIEW_FETCH_SUCCESS: function (e) {
            let { streamKey: t, previewURL: n } = e;
            (h[t] = {
                url: n,
                expires: Date.now() + 120000
            }),
                (p[t] = 0),
                m.delete(t);
        },
        STREAM_PREVIEW_FETCH_FAIL: function (e) {
            let { streamKey: t, retryAfter: n } = e;
            (h[t] = {
                url: null,
                expires: Date.now() + (null != n ? n : 10000 * p[t])
            }),
                m.delete(t);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                !(l().isEmpty(h) && l().isEmpty(p)) &&
                t.reduce((e, t) => {
                    let { userId: n, guildId: r, channelId: i, selfStream: a } = t;
                    if (a) return e;
                    let s = (0, f.V9)({
                        streamType: null != r ? _.lo.GUILD : _.lo.CALL,
                        guildId: r,
                        channelId: i,
                        ownerId: n
                    });
                    return delete h[s], delete p[s], !0;
                }, !1)
            );
        }
    }));
