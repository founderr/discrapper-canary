n.d(t, {
    Y: function () {
        return r;
    }
});
var i = n(570140);
function r(e) {
    i.Z.wait(() =>
        i.Z.dispatch({
            type: 'APPLICATION_STORE_LOCATION_CHANGE',
            location: e
        })
    );
}
