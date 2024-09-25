var r,
    i = n(47120);
var a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(706454),
    u = n(695346),
    c = n(581883),
    d = n(596401);
function _(e, t, n) {
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
let E = {},
    f = {},
    h = null,
    p = null,
    m = null,
    I = 'lastChangeLogDate',
    T = null,
    g = null,
    S = new Set();
function A(e) {
    let { key: t } = e;
    if (S.has(t)) return !1;
    (S = new Set(S)).add(t);
}
function v(e) {
    let { key: t } = e;
    if (!S.has(t)) return !1;
    (S = new Set(S)).delete(t);
}
function N(e) {
    let { config: t, latestChangelogId: n } = e;
    (h = n), (m = t);
}
function O(e) {
    let { id: t, changelog: n } = e;
    null == E[t] && (E[t] = {}),
        (E[t][n.locale] = {
            id: t,
            date: n.date,
            body: n.content,
            revision: 1,
            locale: n.locale,
            [n.asset_type === d.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: n.asset
        }),
        null == f[t] && (f[t] = {}),
        (f[t][n.locale] = d.LU.LOADED_SUCCESS);
}
function R(e) {
    let { id: t, locale: n } = e;
    if (null != E[t] && null != E[t][n]) return !1;
    null == f[t] && (f[t] = {}), (f[t][n] = d.LU.LOADED_FAILURE);
}
function C(e) {
    let { id: t } = e;
    p = t;
}
function y(e) {
    let { changelogDate: t } = e;
    (g = new Date(t)), o.K.set(I, t);
}
function b() {
    T = u.l4.getSetting();
}
class L extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.default, c.Z), this.syncWith([l.default], () => !0), this.syncWith([c.Z], b);
        let e = o.K.get(I);
        if (null != e)
            try {
                g = new Date(e);
            } catch {
                o.K.remove(I);
            }
    }
    getChangelog(e, t) {
        var n, r;
        return null !== (r = null === (n = E[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null;
    }
    latestChangelogId() {
        return h;
    }
    getChangelogLoadStatus(e, t) {
        var n, r;
        return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : d.LU.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != m;
    }
    getConfig() {
        return m;
    }
    overrideId() {
        return p;
    }
    lastSeenChangelogId() {
        return T;
    }
    lastSeenChangelogDate() {
        return g;
    }
    getStateForDebugging() {
        return {
            changelogConfig: m,
            loadedChangelogs: f,
            lastSeenChangelogId: T,
            lastSeenChangelogDate: g
        };
    }
    isLocked() {
        return S.size > 0;
    }
}
_(L, 'displayName', 'ChangelogStore'),
    (t.Z = new L(s.Z, {
        CHANGE_LOG_LOCK: A,
        CHANGE_LOG_UNLOCK: v,
        CHANGE_LOG_SET_CONFIG: N,
        CHANGE_LOG_FETCH_SUCCESS: O,
        CHANGE_LOG_FETCH_FAILED: R,
        CHANGE_LOG_SET_OVERRIDE: C,
        CHANGE_LOG_MARK_SEEN: y
    }));
