r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(693546),
    o = r(937111);
function l(e) {
    let n = (0, a.e7)([o.Z], () => (null == e ? null : o.Z.getRequest(e))),
        r = (0, a.e7)([o.Z], () => o.Z.hasFetchedRequestToJoinGuilds);
    return (
        i.useEffect(() => {
            !r && s.Z.fetchRequestToJoinGuilds();
        }, [r]),
        n
    );
}
