n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    s = n(499254);
function a(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: a, channelId: l, isFetchingApplicationIndex: r, wasFetchingApplicationIndex: o, commands: c } = e;
    i.useEffect(() => {
        !t && n && null == a && (0, s.Tv)(l);
    }, [t, n, a, l]),
        i.useEffect(() => {
            (0, s.Hm)(l);
        }, [l]),
        i.useEffect(() => {
            !r && o && 0 === c.length && (0, s.Tv)(l);
        }, [r, o, c, l]);
}
