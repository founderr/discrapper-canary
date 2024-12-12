r.d(n, {
    Z_: function () {
        return c;
    },
    hY: function () {
        return d;
    },
    sd: function () {
        return f;
    }
});
var i = r(411104);
var a = r(544891),
    s = r(570140),
    o = r(647162),
    l = r(158776),
    u = r(981631);
function c(e, n) {
    s.Z.dispatch({
        type: 'ACTIVITY_SYNC',
        activity: e,
        userId: n
    });
}
function d(e, n) {
    (0, o.iy)(e, n)
        .then((r) =>
            s.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: n,
                metadata: r
            })
        )
        .catch(() =>
            s.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: n
            })
        );
}
async function f(e, n) {
    let r = e.metadata;
    if (null != r) return r;
    let i = l.Z.getActivityMetadata(n);
    if (null != i) return i;
    if (null == e.session_id) throw Error('null/undefined session_id');
    let { body: o } = await a.tn.get({
        url: u.ANM.USER_ACTIVITY_METADATA(n, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        s.Z.dispatch({
            type: 'ACTIVITY_METADATA_UPDATE',
            metadata: o,
            userId: n
        }),
        o
    );
}
