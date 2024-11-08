n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(706454),
    d = n(695346),
    f = n(581883),
    _ = n(596401);
let h = {},
    p = {},
    m = null,
    g = null,
    E = null,
    v = 'lastChangeLogDate',
    I = null,
    S = null,
    b = new Set();
function T() {
    I = d.l4.getSetting();
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default, f.Z), this.syncWith([c.default], () => !0), this.syncWith([f.Z], T);
        let e = l.K.get(v);
        if (null != e)
            try {
                S = new Date(e);
            } catch {
                l.K.remove(v);
            }
    }
    getChangelog(e, t) {
        var n, r;
        return null !== (r = null === (n = h[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null;
    }
    latestChangelogId() {
        return m;
    }
    getChangelogLoadStatus(e, t) {
        var n, r;
        return null !== (r = null === (n = p[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : _.LU.NOT_LOADED;
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
        return S;
    }
    getStateForDebugging() {
        return {
            changelogConfig: E,
            loadedChangelogs: p,
            lastSeenChangelogId: I,
            lastSeenChangelogDate: S
        };
    }
    isLocked() {
        return b.size > 0;
    }
}
(s = 'ChangelogStore'),
    (a = 'displayName') in (i = y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new y(u.Z, {
        CHANGE_LOG_LOCK: function (e) {
            let { key: t } = e;
            if (b.has(t)) return !1;
            (b = new Set(b)).add(t);
        },
        CHANGE_LOG_UNLOCK: function (e) {
            let { key: t } = e;
            if (!b.has(t)) return !1;
            (b = new Set(b)).delete(t);
        },
        CHANGE_LOG_SET_CONFIG: function (e) {
            let { config: t, latestChangelogId: n } = e;
            (m = n), (E = t);
        },
        CHANGE_LOG_FETCH_SUCCESS: function (e) {
            let { id: t, changelog: n } = e;
            null == h[t] && (h[t] = {}),
                (h[t][n.locale] = {
                    id: t,
                    date: n.date,
                    body: n.content,
                    revision: 1,
                    locale: n.locale,
                    [n.asset_type === _.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: n.asset
                }),
                null == p[t] && (p[t] = {}),
                (p[t][n.locale] = _.LU.LOADED_SUCCESS);
        },
        CHANGE_LOG_FETCH_FAILED: function (e) {
            let { id: t, locale: n } = e;
            if (null != h[t] && null != h[t][n]) return !1;
            null == p[t] && (p[t] = {}), (p[t][n] = _.LU.LOADED_FAILURE);
        },
        CHANGE_LOG_SET_OVERRIDE: function (e) {
            let { id: t } = e;
            g = t;
        },
        CHANGE_LOG_MARK_SEEN: function (e) {
            let { changelogDate: t } = e;
            (S = new Date(t)), l.K.set(v, t);
        }
    }));
