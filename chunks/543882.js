var i,
    a = r(47120);
var s = r(724458);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(872810),
    f = r(569545),
    _ = r(70722);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 120000,
    m = 10000,
    g = {},
    E = {},
    v = new Set();
function I() {
    (g = {}), (E = {});
}
function T(e) {
    let { streamKey: n, previewURL: r } = e;
    (g[n] = {
        url: r,
        expires: Date.now() + p
    }),
        (E[n] = 0),
        v.delete(n);
}
function b(e) {
    let { streamKey: n, retryAfter: r } = e;
    (g[n] = {
        url: null,
        expires: Date.now() + (null != r ? r : m * E[n])
    }),
        v.delete(n);
}
function y(e) {
    var n;
    let { streamKey: r } = e;
    (E[r] = (null !== (n = E[r]) && void 0 !== n ? n : 0) + 1), v.add(r);
}
function S(e) {
    let { voiceStates: n } = e;
    return (
        !(l().isEmpty(g) && l().isEmpty(E)) &&
        n.reduce((e, n) => {
            let { userId: r, guildId: i, channelId: a, selfStream: s } = n;
            if (s) return e;
            let o = (0, f.V9)({
                streamType: null != i ? _.lo.GUILD : _.lo.CALL,
                guildId: i,
                channelId: a,
                ownerId: r
            });
            return delete g[o], delete E[o], !0;
        }, !1)
    );
}
class A extends (i = u.ZP.Store) {
    getPreviewURL(e, n, r) {
        let i = (0, f.V9)({
                streamType: null != e ? _.lo.GUILD : _.lo.CALL,
                guildId: e,
                channelId: n,
                ownerId: r
            }),
            a = g[i];
        return null == a || Date.now() > a.expires
            ? (!v.has(i) &&
                  (v.add(i),
                  Promise.resolve().then(() => {
                      (0, d.n9)(e, n, r);
                  })),
              null)
            : a.url;
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: n, channelId: r, ownerId: i } = (0, f.my)(e);
        return this.getPreviewURL(n, r, i);
    }
    getIsPreviewLoading(e, n, r) {
        let i = (0, f.V9)({
            streamType: null != e ? _.lo.GUILD : _.lo.CALL,
            guildId: e,
            channelId: n,
            ownerId: r
        });
        return v.has(i);
    }
}
h(A, 'displayName', 'ApplicationStreamPreviewStore'),
    (n.Z = new A(c.Z, {
        CONNECTION_OPEN: I,
        LOGOUT: I,
        STREAM_PREVIEW_FETCH_START: y,
        STREAM_PREVIEW_FETCH_SUCCESS: T,
        STREAM_PREVIEW_FETCH_FAIL: b,
        VOICE_STATE_UPDATES: S
    }));
