n.d(e, {
    H: function () {
        return i;
    },
    c: function () {
        return r;
    }
});
var l = n(570140);
function r(t) {
    l.Z.wait(() =>
        l.Z.dispatch({
            type: 'NUF_NEW_USER',
            newUserType: t
        })
    );
}
function i() {
    l.Z.wait(() => l.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
