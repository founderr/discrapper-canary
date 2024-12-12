r.d(n, {
    h: function () {
        return o;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(981631);
function o(e, n, r) {
    return (
        a.Z.dispatch({
            type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_START',
            applicationId: e,
            branchId: n,
            flags: r
        }),
        i.tn
            .patch({
                url: s.ANM.LIBRARY_APPLICATION_BRANCH(e, n),
                body: { flags: r },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                a.Z.dispatch({
                    type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS',
                    libraryApplication: e.body
                });
            })
    );
}
