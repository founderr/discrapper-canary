r.d(n, {
    Kw: function () {
        return o;
    },
    Po: function () {
        return u;
    },
    hv: function () {
        return l;
    }
});
var i = r(570140),
    a = r(626135),
    s = r(981631);
function o(e) {
    a.default.track(s.rMx.HOTSPOT_HIDDEN, { hotspot_location: e }),
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'HOTSPOT_HIDE',
                location: e
            });
        });
}
function l(e, n) {
    i.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_SET',
        location: e,
        enabled: n
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_CLEAR',
        location: e
    });
}
