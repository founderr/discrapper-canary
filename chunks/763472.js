n.d(t, {
    Z_: function () {
        return u;
    },
    hY: function () {
        return c;
    },
    sd: function () {
        return d;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140),
    o = n(647162),
    s = n(158776),
    l = n(981631);
function u(e, t) {
    a.Z.dispatch({
        type: 'ACTIVITY_SYNC',
        activity: e,
        userId: t
    });
}
function c(e, t) {
    (0, o.iy)(e, t)
        .then((n) =>
            a.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t,
                metadata: n
            })
        )
        .catch(() =>
            a.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t
            })
        );
}
async function d(e, t) {
    let n = e.metadata;
    if (null != n) return n;
    let r = s.Z.getActivityMetadata(t);
    if (null != r) return r;
    if (null == e.session_id) throw Error('null/undefined session_id');
    let { body: o } = await i.tn.get({
        url: l.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0
    });
    return (
        a.Z.dispatch({
            type: 'ACTIVITY_METADATA_UPDATE',
            metadata: o,
            userId: t
        }),
        o
    );
}
