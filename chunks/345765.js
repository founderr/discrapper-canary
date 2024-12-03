n(47120);
var r = n(392711),
    i = n(570140),
    a = n(147913),
    s = n(539746),
    o = n(38618),
    l = n(456644),
    u = n(553795),
    c = n(517100),
    d = n(451478),
    f = n(162461),
    _ = n(564990),
    p = n(71585),
    h = n(146282),
    m = n(206583),
    g = n(981631);
let E = m.YN.GLOBAL_FEED,
    v = new Map(),
    I = new Set(),
    T = new Map(),
    b = null,
    S = (0, r.debounce)(_.yK, 3000, { trailing: !0 });
function y(e, t) {
    i.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function A(e) {
    if (I.has(e) || (e === m.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== h.Z.getFeed(e)))) return !1;
    if (e === E) {
        if (!(0, f.sA)('ContentInventoryManager') || (p.Z.hidden && null != h.Z.getFeed(e)) || !d.Z.isFocused() || !o.Z.isConnected()) return !1;
        let t = c.Z.getIdleSince();
        if (null != t && Date.now() - t > 900000) return !1;
    }
    return !0;
}
function N(e) {
    y(e, { loading: !1 });
    let t = v.get(e);
    void 0 !== t && (clearTimeout(t), v.delete(e));
}
function C() {
    if ((N(E), !A(E))) return;
    let e = h.Z.getFeed(E);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == b) return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        n = Math.max(0, null == b ? 0 : new Date(b).getTime() - Date.now(), t);
    y(E, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }),
        v.set(
            E,
            setTimeout(() => R(E), n)
        );
}
async function R(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(A(e) || t))
        try {
            let t = h.Z.getFeed(e);
            I.add(e), y(e, { loading: !0 });
            let n = await (0, _.mt)({
                token: null == t ? void 0 : t.refresh_token,
                feedId: e
            });
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: n
            }),
                T.set(e, 0),
                I.delete(e),
                y(e, { loading: !1 }),
                e === E && ((b = null), C());
        } catch (a) {
            var n;
            let r = null !== (n = T.get(e)) && void 0 !== n ? n : 0;
            if (r < 3) {
                let n = 1000 * Math.pow(5, r);
                v.set(
                    e,
                    setTimeout(() => R(e, { force: t }), n)
                ),
                    T.set(e, r + 1);
            } else
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            I.delete(e);
        }
}
function O() {
    C();
}
function D() {
    O();
    let { recentActivityEnabled: e } = (0, l.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e && R(m.YN.GAME_PROFILE_FEED);
}
function L() {
    N(E);
}
function x(e) {
    let { feedId: t } = e;
    N(t), R(t, { force: !0 });
}
function w(e) {
    let { refreshAfterMs: t } = e,
        n = h.Z.getFeed(E);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) (b = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), C();
}
function P(e) {
    var t;
    let { connectionId: n, track: r } = e;
    if (null != n && !!(0, f.Dy)('ContentInventoryManager.handleSpotifyNewTrack')) (null === (t = u.Z.getAccount(n, g.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && S(n, r);
}
function M() {
    R(m.YN.GAME_PROFILE_FEED);
}
class k extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: D,
                CONNECTION_CLOSED: L,
                WINDOW_FOCUS: O,
                IDLE: O,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: O,
                CONTENT_INVENTORY_MANUAL_REFRESH: x,
                CONTENT_INVENTORY_INBOX_STALE: w,
                SPOTIFY_NEW_TRACK: P,
                GAME_PROFILE_OPEN: M,
                OVERLAY_READY: M
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
t.Z = new k();
