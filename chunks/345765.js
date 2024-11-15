n(47120);
var r = n(392711),
    i = n(570140),
    a = n(147913),
    s = n(539746),
    o = n(38618),
    l = n(553795),
    u = n(517100),
    c = n(451478),
    d = n(162461),
    f = n(564990),
    _ = n(71585),
    p = n(146282),
    h = n(206583),
    m = n(981631);
let g = h.YN.GLOBAL_FEED,
    E = new Map(),
    v = new Set(),
    b = new Map(),
    I = null,
    S = (0, r.debounce)(f.yK, 3000, { trailing: !0 });
function T(e, t) {
    i.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function y() {
    N(g);
}
function A(e) {
    if (v.has(e) || (e === h.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== p.Z.getFeed(e)))) return !1;
    if (e === g) {
        if (!(0, d.sA)('ContentInventoryManager') || (_.Z.hidden && null != p.Z.getFeed(e)) || !c.Z.isFocused() || !o.Z.isConnected()) return !1;
        let t = u.Z.getIdleSince();
        if (null != t && Date.now() - t > 900000) return !1;
    }
    return !0;
}
function N(e) {
    T(e, { loading: !1 });
    let t = E.get(e);
    void 0 !== t && (clearTimeout(t), E.delete(e));
}
function C() {
    if ((N(g), !A(g))) return;
    let e = p.Z.getFeed(g);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == I) return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        n = Math.max(0, null == I ? 0 : new Date(I).getTime() - Date.now(), t);
    T(g, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }),
        E.set(
            g,
            setTimeout(() => R(g), n)
        );
}
async function R(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(A(e) || t))
        try {
            let t = p.Z.getFeed(e);
            v.add(e), T(e, { loading: !0 });
            let n = await (0, f.mt)({
                token: null == t ? void 0 : t.refresh_token,
                feedId: e
            });
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: n
            }),
                b.set(e, 0),
                v.delete(e),
                T(e, { loading: !1 }),
                e === g && ((I = null), C());
        } catch (a) {
            var n;
            let r = null !== (n = b.get(e)) && void 0 !== n ? n : 0;
            if (r < 3) {
                let n = 1000 * Math.pow(5, r);
                E.set(
                    e,
                    setTimeout(() => R(e, { force: t }), n)
                ),
                    b.set(e, r + 1);
            } else
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            v.delete(e);
        }
}
function O() {
    C();
}
function D(e) {
    let { feedId: t } = e;
    N(t), R(t, { force: !0 });
}
function L(e) {
    let { refreshAfterMs: t } = e,
        n = p.Z.getFeed(g);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) (I = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), C();
}
function x(e) {
    var t;
    let { connectionId: n, track: r } = e;
    if (null != n && !!(0, d.Dy)('ContentInventoryManager.handleSpotifyNewTrack')) (null === (t = l.Z.getAccount(n, m.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && S(n, r);
}
function w() {
    R(h.YN.GAME_PROFILE_FEED);
}
class M extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: O,
                CONNECTION_CLOSED: y,
                WINDOW_FOCUS: O,
                IDLE: O,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: O,
                CONTENT_INVENTORY_MANUAL_REFRESH: D,
                CONTENT_INVENTORY_INBOX_STALE: L,
                SPOTIFY_NEW_TRACK: x,
                GAME_PROFILE_OPEN: w,
                OVERLAY_READY: w
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new M();
