n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(442837),
    i = n(353647),
    a = n(146282),
    s = n(206583);
function o(e) {
    let { activity: t, user: n } = e,
        o = (0, r.e7)([a.Z], () =>
            a.Z.getMatchingInboxEntry({
                activity: t,
                userId: n.id,
                feedId: s.YN.GLOBAL_FEED
            })
        ),
        l = (0, r.e7)([i.Z], () =>
            i.Z.getMatchingOutboxEntry({
                activity: t,
                userId: n.id
            })
        );
    return null != o ? o : l;
}
