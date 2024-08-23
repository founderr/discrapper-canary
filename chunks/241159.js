t.d(n, {
    k: function () {
        return o;
    }
});
var i = t(544891),
    a = t(570140),
    r = t(981631);
function o(e) {
    return (
        a.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
            applicationId: e
        }),
        i.tn
            .get({ url: r.ANM.STORE_LAYOUT(e) })
            .then(
                (n) => (
                    a.Z.dispatch({
                        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
                        applicationId: e,
                        layout: n.body
                    }),
                    n.body
                )
            )
            .catch(() => {
                a.Z.dispatch({
                    type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
                    applicationId: e
                });
            })
    );
}
