n.d(e, {
    H: function () {
        return r;
    },
    c: function () {
        return i;
    }
});
var l = n(570140);
function i(t) {
    l.Z.wait(() =>
        l.Z.dispatch({
            type: 'NUF_NEW_USER',
            newUserType: t
        })
    );
}
function r() {
    l.Z.wait(() => l.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
