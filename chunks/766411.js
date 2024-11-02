n.d(t, {
    E: function () {
        return d;
    }
});
var l = n(192379),
    r = n(399606),
    o = n(661111),
    a = n(706454),
    i = n(802098),
    s = n(596401);
function c(e, t) {
    let {
        changelog: n,
        loadState: a,
        defaultChangelog: c,
        defaultLoadState: d
    } = (0, r.cj)(
        [i.Z],
        () => {
            let n = null != e ? i.Z.getChangelog(e, t) : null,
                l = null != e ? i.Z.getChangelog(e, 'en-US') : null,
                r = null != e && i.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: n,
                loadState: null != e && i.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: l,
                defaultLoadState: r
            };
        },
        [e, t]
    );
    return (l.useEffect(() => {
        null != e && null == n && a === s.LU.NOT_LOADED && o.Z.fetchChangelog(e, t);
    }, [e, n, a, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1
          }
        : null == n && a === s.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: c,
                loaded: d !== s.LU.NOT_LOADED
            }
          : {
                id: e,
                changelog: n,
                loaded: a !== s.LU.NOT_LOADED
            };
}
function d() {
    let e = (0, r.e7)([a.default], () => a.default.locale),
        t = (0, r.e7)([i.Z], () => i.Z.latestChangelogId()),
        n = (0, r.e7)([i.Z], () => i.Z.getConfig()),
        l = null != n && 0 === Object.keys(n).length,
        o = null != n && Object.keys(n).length > 0 && null == t,
        s = (0, r.e7)([i.Z], () => i.Z.overrideId()),
        { changelog: d, loaded: h } = c(t, e),
        { changelog: u, loaded: g } = c(s, e);
    return null == s || (null == u && g)
        ? {
              id: t,
              changelog: d,
              loaded: !!l || h,
              clientTooOld: o
          }
        : {
              id: s,
              changelog: u,
              loaded: g,
              clientTooOld: !1
          };
}
