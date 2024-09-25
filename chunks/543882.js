var r,
    i = n(47120);
var a = n(724458);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(872810),
    d = n(569545),
    _ = n(70722);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = 120000,
    h = 10000,
    p = {},
    m = {},
    I = new Set();
function T() {
    (p = {}), (m = {});
}
function g(e) {
    let { streamKey: t, previewURL: n } = e;
    (p[t] = {
        url: n,
        expires: Date.now() + f
    }),
        (m[t] = 0),
        I.delete(t);
}
function S(e) {
    let { streamKey: t, retryAfter: n } = e;
    (p[t] = {
        url: null,
        expires: Date.now() + (null != n ? n : h * m[t])
    }),
        I.delete(t);
}
function A(e) {
    var t;
    let { streamKey: n } = e;
    (m[n] = (null !== (t = m[n]) && void 0 !== t ? t : 0) + 1), I.add(n);
}
function v(e) {
    let { voiceStates: t } = e;
    return (
        !(s().isEmpty(p) && s().isEmpty(m)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: r, channelId: i, selfStream: a } = t;
            if (a) return e;
            let o = (0, d.V9)({
                streamType: null != r ? _.lo.GUILD : _.lo.CALL,
                guildId: r,
                channelId: i,
                ownerId: n
            });
            return delete p[o], delete m[o], !0;
        }, !1)
    );
}
class N extends (r = l.ZP.Store) {
    getPreviewURL(e, t, n) {
        let r = (0, d.V9)({
                streamType: null != e ? _.lo.GUILD : _.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n
            }),
            i = p[r];
        return null == i || Date.now() > i.expires
            ? (!I.has(r) &&
                  (I.add(r),
                  Promise.resolve().then(() => {
                      (0, c.n9)(e, t, n);
                  })),
              null)
            : i.url;
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, d.my)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, d.V9)({
            streamType: null != e ? _.lo.GUILD : _.lo.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        return I.has(r);
    }
}
E(N, 'displayName', 'ApplicationStreamPreviewStore'),
    (t.Z = new N(u.Z, {
        CONNECTION_OPEN: T,
        LOGOUT: T,
        STREAM_PREVIEW_FETCH_START: A,
        STREAM_PREVIEW_FETCH_SUCCESS: g,
        STREAM_PREVIEW_FETCH_FAIL: S,
        VOICE_STATE_UPDATES: v
    }));
