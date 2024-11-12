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
        [f, _, p, h, m, g] = (0, i.Wu)([l.Z], () => {
            var e, t;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastErrorTimestamp) && void 0 !== e ? e : 0, null !== (t = l.Z.lastSuccessfulFetch) && void 0 !== t ? t : 0, l.Z.categories];
        });
    return (
        (0, r.useEffect)(() => {
            if (!n || f) return;
            let t = Date.now() - h < 600000;
            if (p && t) return;
            let r = {
                    ...e,
                    includeBundles: c,
                    variantsReturnStyle: d
                },
                i = !(0, o.oc)(_, r),
                a = Date.now() - m < 600000;
            (i || !a) && (0, o.F$)(r);
        }, [n, f, _, m, e, p, c, h, d]),
        {
            isFetching: f,
            categories: g,
            fetchCategoriesError: p,
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
