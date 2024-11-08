n.d(t, {
    e: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(634894),
    s = n(353926),
    o = n(335131),
    l = n(597688),
    u = n(228624);
function c(e) {
    let t = 'useMaybeFetchCollectiblesCategories';
    (0, a.j)({
        location: t + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: t + ' auto off',
            autoTrackExposure: !1
        });
    let n = (0, i.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        c = null == e ? void 0 : e.includeBundles,
        d = (0, u.h)('useMaybeFetchCollectiblesCategoriesShared'),
        [f, _, h, p, m] = (0, i.Wu)([l.Z], () => {
            var e;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, l.Z.categories];
        });
    return (
        (0, r.useEffect)(() => {
            if (!n || f || h) return;
            let t = {
                    ...e,
                    includeBundles: c,
                    variantsReturnStyle: d
                },
                r = !(0, o.oc)(_, t),
                i = Date.now() - p < 600000;
            (r || !i) && (0, o.F$)(t);
        }, [n, f, _, p, e, h, c, d]),
        {
            isFetching: f,
            categories: m,
            fetchCategoriesError: h,
            refreshCategories: (0, r.useCallback)(() => {
                let t = {
                    ...e,
                    includeBundles: c
                };
                (0, o.F$)(t);
            }, [e, c])
        }
    );
}
