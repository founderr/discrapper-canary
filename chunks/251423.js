n.d(e, {
    L: function () {
        return o;
    }
});
var l = n(192379),
    r = n(442837),
    i = n(570140),
    a = n(480387),
    u = n(726745);
function o() {
    let t = (0, r.cj)([u.Z], () => ({
        isLoading: u.Z.getIsValidatingUsers(),
        multiAccountUsers: u.Z.getUsers()
    }));
    return (
        l.useEffect(() => {
            i.Z.wait(() => {
                a.HJ();
            });
        }, []),
        t
    );
}
