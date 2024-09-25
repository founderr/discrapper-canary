n.d(t, {
    e: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(634894),
    s = n(353926),
    l = n(335131),
    u = n(597688);
let c = 600000;
function d(e) {
    let t = 'useMaybeFetchCollectiblesCategories';
    (0, o.j)({
        location: t + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: t + ' auto off',
            autoTrackExposure: !1
        });
    let n = (0, a.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        r = null == e ? void 0 : e.includeBundles,
        [d, _, E, f, h] = (0, a.Wu)([u.Z], () => {
            var e;
            return [u.Z.isFetchingCategories, u.Z.lastFetchOptions, u.Z.error, null !== (e = u.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, u.Z.categories];
        });
    return (
        (0, i.useEffect)(() => {
            if (!n || d || E) return;
            let t = {
                    ...e,
                    includeBundles: r
                },
                i = !(0, l.oc)(_, t),
                a = Date.now() - f < c;
            (i || !a) && (0, l.F$)(t);
        }, [n, d, _, f, e, E, r]),
        {
            isFetching: d,
            categories: h,
            error: E,
            refreshCategories: (0, i.useCallback)(() => {
                let t = {
                    ...e,
                    includeBundles: r
                };
                (0, l.F$)(t);
            }, [e, r])
        }
    );
}
