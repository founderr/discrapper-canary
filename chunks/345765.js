var i = r(47120);
var a = r(392711);
var s = r(570140),
    o = r(147913),
    l = r(539746),
    u = r(38618),
    c = r(456644),
    d = r(553795),
    f = r(517100),
    _ = r(451478),
    h = r(162461),
    p = r(564990),
    m = r(71585),
    g = r(146282),
    E = r(206583),
    v = r(981631);
function I(e, n, r) {
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
let T = 3,
    b = 5,
    y = E.YN.GLOBAL_FEED,
    S = 900000,
    A = new Map(),
    N = new Set(),
    C = new Map(),
    R = null,
    O = (0, a.debounce)(p.yK, 3000, { trailing: !0 });
function D(e, n) {
    s.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: n
    });
}
function L(e) {
    if (N.has(e) || (e === E.YN.GAME_PROFILE_FEED && (!(0, l._J)('ContentInventoryManager') || void 0 !== g.Z.getFeed(e)))) return !1;
    if (e === y) {
        if (!(0, h.sA)('ContentInventoryManager') || (m.Z.hidden && null != g.Z.getFeed(e)) || !_.Z.isFocused() || !u.Z.isConnected()) return !1;
        let n = f.Z.getIdleSince();
        if (null != n && Date.now() - n > S) return !1;
    }
    return !0;
}
function x(e) {
    D(e, { loading: !1 });
    let n = A.get(e);
    void 0 !== n && (clearTimeout(n), A.delete(e));
}
function w() {
    if ((x(y), !L(y))) return;
    let e = g.Z.getFeed(y);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == R) return;
    let n = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == R ? 0 : new Date(R).getTime() - Date.now(), n);
    D(y, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + r)
    }),
        A.set(
            y,
            setTimeout(() => P(y), r)
        );
}
async function P(e) {
    let { force: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(L(e) || n))
        try {
            let n = g.Z.getFeed(e);
            N.add(e), D(e, { loading: !0 });
            let r = await (0, p.mt)({
                token: null == n ? void 0 : n.refresh_token,
                feedId: e
            });
            s.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: r
            }),
                C.set(e, 0),
                N.delete(e),
                D(e, { loading: !1 }),
                e === y && ((R = null), w());
        } catch (a) {
            var r;
            let i = null !== (r = C.get(e)) && void 0 !== r ? r : 0;
            if (i < T) {
                let r = 1000 * Math.pow(b, i);
                A.set(
                    e,
                    setTimeout(() => P(e, { force: n }), r)
                ),
                    C.set(e, i + 1);
            } else
                s.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            N.delete(e);
        }
}
function M() {
    w();
}
function k() {
    M();
    let { recentActivityEnabled: e, recentActivityLoadTestEnabled: n } = (0, c.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    (e || n) && P(E.YN.GAME_PROFILE_FEED);
}
function U() {
    x(y);
}
function B(e) {
    let { feedId: n } = e;
    x(n), P(n, { force: !0 });
}
function G(e) {
    let { refreshAfterMs: n } = e,
        r = g.Z.getFeed(y);
    if ((null == r ? void 0 : r.refresh_stale_inbox_after_ms) != null) (R = new Date(Date.now() + (null != n ? n : r.refresh_stale_inbox_after_ms)).toUTCString()), w();
}
function Z(e) {
    var n;
    let { connectionId: r, track: i } = e;
    if (null != r) (null === (n = d.Z.getAccount(r, v.ABu.SPOTIFY)) || void 0 === n ? void 0 : n.showActivity) && O(r, i);
}
function F() {
    P(E.YN.GAME_PROFILE_FEED);
}
class V extends o.Z {
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: k,
                CONNECTION_CLOSED: U,
                WINDOW_FOCUS: M,
                IDLE: M,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
                CONTENT_INVENTORY_MANUAL_REFRESH: B,
                CONTENT_INVENTORY_INBOX_STALE: G,
                SPOTIFY_NEW_TRACK: Z,
                GAME_PROFILE_OPEN: F,
                OVERLAY_READY: F
            });
    }
}
n.Z = new V();
