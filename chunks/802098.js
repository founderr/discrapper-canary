var i,
    a = r(47120);
var s = r(442837),
    o = r(433517),
    l = r(570140),
    u = r(706454),
    c = r(695346),
    d = r(581883),
    f = r(596401);
function _(e, n, r) {
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
let h = {},
    p = {},
    m = null,
    g = null,
    E = null,
    v = 'lastChangeLogDate',
    I = null,
    T = null,
    b = new Set();
function y(e) {
    let { key: n } = e;
    if (b.has(n)) return !1;
    (b = new Set(b)).add(n);
}
function S(e) {
    let { key: n } = e;
    if (!b.has(n)) return !1;
    (b = new Set(b)).delete(n);
}
function A(e) {
    let { config: n, latestChangelogId: r } = e;
    (m = r), (E = n);
}
function N(e) {
    let { id: n, changelog: r } = e;
    null == h[n] && (h[n] = {}),
        (h[n][r.locale] = {
            id: n,
            date: r.date,
            body: r.content,
            revision: 1,
            locale: r.locale,
            [r.asset_type === f.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: r.asset
        }),
        null == p[n] && (p[n] = {}),
        (p[n][r.locale] = f.LU.LOADED_SUCCESS);
}
function C(e) {
    let { id: n, locale: r } = e;
    if (null != h[n] && null != h[n][r]) return !1;
    null == p[n] && (p[n] = {}), (p[n][r] = f.LU.LOADED_FAILURE);
}
function R(e) {
    let { id: n } = e;
    g = n;
}
function O(e) {
    let { changelogDate: n } = e;
    (T = new Date(n)), o.K.set(v, n);
}
function D() {
    I = c.l4.getSetting();
}
class L extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default, d.Z), this.syncWith([u.default], () => !0), this.syncWith([d.Z], D);
        let e = o.K.get(v);
        if (null != e)
            try {
                T = new Date(e);
            } catch {
                o.K.remove(v);
            }
    }
    getChangelog(e, n) {
        var r, i;
        return null !== (i = null === (r = h[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== i ? i : null;
    }
    latestChangelogId() {
        return m;
    }
    getChangelogLoadStatus(e, n) {
        var r, i;
        return null !== (i = null === (r = p[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== i ? i : f.LU.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != E;
    }
    getConfig() {
        return E;
    }
    overrideId() {
        return g;
    }
    lastSeenChangelogId() {
        return I;
    }
    lastSeenChangelogDate() {
        return T;
    }
    getStateForDebugging() {
        return {
            changelogConfig: E,
            loadedChangelogs: p,
            lastSeenChangelogId: I,
            lastSeenChangelogDate: T
        };
    }
    isLocked() {
        return b.size > 0;
    }
}
_(L, 'displayName', 'ChangelogStore'),
    (n.Z = new L(l.Z, {
        CHANGE_LOG_LOCK: y,
        CHANGE_LOG_UNLOCK: S,
        CHANGE_LOG_SET_CONFIG: A,
        CHANGE_LOG_FETCH_SUCCESS: N,
        CHANGE_LOG_FETCH_FAILED: C,
        CHANGE_LOG_SET_OVERRIDE: R,
        CHANGE_LOG_MARK_SEEN: O
    }));
