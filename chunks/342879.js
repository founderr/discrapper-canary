var r = n(47120);
var i = n(392711);
var a = n(570140),
    o = n(147913),
    s = n(539746),
    l = n(38618),
    u = n(553795),
    c = n(517100),
    d = n(451478),
    _ = n(162461),
    E = n(564990),
    f = n(71585),
    h = n(146282),
    p = n(206583),
    m = n(981631);
function I(e, t, n) {
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
let T = 3,
    g = 5,
    S = p.YN.GLOBAL_FEED,
    A = 900000,
    v = new Map(),
    N = new Set(),
    O = new Map(),
    R = null,
    C = (0, i.debounce)(E.yK, 3000, { trailing: !0 });
function y(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function L() {
    D(S);
}
function b(e) {
    if (N.has(e) || (e === p.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== h.Z.getFeed(e)))) return !1;
    if (e === S) {
        if (!(0, _.sA)('ContentInventoryManager') || (f.Z.hidden && null != h.Z.getFeed(e)) || !d.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = c.Z.getIdleSince();
        if (null != t && Date.now() - t > A) return !1;
    }
    return !0;
}
function D(e) {
    y(e, { loading: !1 });
    let t = v.get(e);
    void 0 !== t && (clearTimeout(t), v.delete(e));
}
function M() {
    if ((D(S), !b(S))) return;
    let e = h.Z.getFeed(S);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == R) return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        n = Math.max(0, null == R ? 0 : new Date(R).getTime() - Date.now(), t);
    y(S, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }),
        v.set(
            S,
            setTimeout(() => P(S), n)
        );
}
async function P(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(b(e) || t))
        try {
            let t = h.Z.getFeed(e);
            N.add(e), y(e, { loading: !0 });
            let n = await (0, E.mt)({
                token: null == t ? void 0 : t.refresh_token,
                feedId: e
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: n
            }),
                O.set(e, 0),
                N.delete(e),
                y(e, { loading: !1 }),
                e === S && ((R = null), M());
        } catch (i) {
            var n;
            let r = null !== (n = O.get(e)) && void 0 !== n ? n : 0;
            if (r < T) {
                let n = 1000 * Math.pow(g, r);
                v.set(
                    e,
                    setTimeout(() => P(e, { force: t }), n)
                ),
                    O.set(e, r + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            N.delete(e);
        }
}
function U() {
    M();
}
function w(e) {
    let { feedId: t } = e;
    D(t), P(t, { force: !0 });
}
function x(e) {
    let { refreshAfterMs: t } = e,
        n = h.Z.getFeed(S);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) (R = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), M();
}
function G(e) {
    var t;
    let { connectionId: n, track: r } = e;
    if (null != n && !!(0, _.Dy)('ContentInventoryManager.handleSpotifyNewTrack')) (null === (t = u.Z.getAccount(n, m.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && C(n, r);
}
function k() {
    P(p.YN.GAME_PROFILE_FEED);
}
class B extends o.Z {
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: U,
                CONNECTION_CLOSED: L,
                WINDOW_FOCUS: U,
                IDLE: U,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: U,
                CONTENT_INVENTORY_MANUAL_REFRESH: w,
                CONTENT_INVENTORY_INBOX_STALE: x,
                SPOTIFY_NEW_TRACK: G,
                GAME_PROFILE_OPEN: k
            });
    }
}
t.Z = new B();
