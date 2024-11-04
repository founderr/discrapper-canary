n.d(e, {
    L: function () {
        return o;
    }
});
var l = n(192379),
    i = n(442837),
    r = n(570140),
    a = n(480387),
    u = n(726745);
function o() {
    let t = (0, i.cj)([u.Z], () => ({
        isLoading: u.Z.getIsValidatingUsers(),
        multiAccountUsers: u.Z.getUsers()
    }));
    return (
        l.useEffect(() => {
            r.Z.wait(() => {
                a.HJ();
            });
        }, []),
        t
    );
}
