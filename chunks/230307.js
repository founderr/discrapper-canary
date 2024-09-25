var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
function s(e, t, n) {
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
let l = {},
    u = null,
    c = 86400000,
    d = 3600000;
function _() {
    (l = {}), (u = null);
}
function E(e) {
    let { statistics: t } = e;
    t.forEach((e) => {
        l[e.application_id] = e;
    }),
        (u = Date.now());
}
function f(e) {
    let { duration: t, applicationId: n, distributor: r } = e,
        i = l[n],
        a = new Date().toISOString(),
        s = 0,
        u = 0;
    if (null != i) {
        var c;
        (s = i.total_duration), (u = null !== (c = i.total_discord_sku_duration) && void 0 !== c ? c : 0);
    }
    (s += t),
        r === o.GQo.DISCORD && (u += t),
        (l[n] = {
            application_id: n,
            total_duration: s,
            last_played_at: a,
            total_discord_sku_duration: u
        });
}
class h extends (r = i.ZP.Store) {
    get applicationStatistics() {
        return l;
    }
    get lastFetched() {
        return u;
    }
    getGameDuration(e) {
        let t = l[e];
        return null != t ? t.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let t = l[e];
        return null != t ? new Date(t.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != l[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return l[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let t = l[e],
            n = 0;
        if (null != t) {
            let e = Date.now(),
                r = Math.floor((e - new Date(t.last_played_at).getTime()) / c),
                i = Math.floor((1000 * t.total_duration) / d);
            0 === r ? (n += 50) : r >= 1 && r < 2 ? (n += 40) : r >= 2 && r < 4 ? (n += 30) : r >= 4 && r < 7 ? (n += 20) : r >= 7 && (n += 10), 0 === i ? (n += 0) : i >= 1 && i < 12 ? (n += 10) : i >= 12 && i < 168 ? (n += 20) : i >= 168 && i < 720 ? (n += 40) : i >= 720 && (n += 50);
        }
        return n;
    }
}
s(h, 'displayName', 'LibraryApplicationStatisticsStore'),
    (t.Z = new h(a.Z, {
        USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: E,
        ACTIVITY_UPDATE_START: f,
        LOGOUT: _
    }));
