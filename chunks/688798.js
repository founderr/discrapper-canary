var i = r(47120);
var a = r(570140),
    s = r(661111),
    o = r(147913),
    l = r(706454),
    u = r(709054),
    c = r(802098),
    d = r(128014),
    f = r(163379);
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
function h(e, n) {
    let r = 0,
        i = null;
    for (var [a, { min_version: s }] of Object.entries(e)) s <= n && s > r && ((r = s), (i = a));
    return i;
}
class p extends o.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            _(this, 'handleConnectionOpen', async (e) => {
                let n = await s.Z.fetchChangelogConfig(),
                    r = n.body,
                    i = h(r, (0, d.b)());
                if (
                    (a.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: n.body,
                        latestChangelogId: i
                    }),
                    null == i || !0 !== r[i].show_on_startup)
                )
                    return;
                let o = c.Z.lastSeenChangelogId(),
                    _ = c.Z.lastSeenChangelogDate();
                if (null != o && 0 >= u.default.compare(i, o)) return;
                let p = await s.Z.fetchChangelog(i, l.default.locale);
                if (null != p) {
                    if (null == _ || null == c.Z.lastSeenChangelogDate()) {
                        s.Z.markChangelogAsSeen(i, p.date);
                        return;
                    }
                    !c.Z.isLocked() && new Date(p.date) > new Date(_) && (0, f.Z)();
                }
            });
    }
}
n.Z = new p();
