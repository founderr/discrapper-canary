n.d(e, {
    q: function () {
        return r;
    }
});
var l = n(544891),
    i = n(570140),
    s = n(173747),
    a = n(981631);
async function r(t, e, n, r) {
    if (!!s.Z.needsToFetchBuildSize(n)) {
        i.Z.dispatch({
            type: 'APPLICATION_BUILD_SIZE_FETCH_START',
            buildId: n
        });
        try {
            let s = await l.tn.post({
                url: a.ANM.APPLICATION_BUILD_SIZE(t, e, n),
                body: { manifest_ids: r },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            i.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
                buildId: n,
                sizeKB: s.body.size_kb
            });
        } catch (t) {
            i.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
                buildId: n
            });
        }
    }
}
