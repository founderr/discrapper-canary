n.d(t, {
    RY: function () {
        return a;
    },
    Tb: function () {
        return s;
    },
    ec: function () {
        return o;
    },
    iD: function () {
        return l;
    }
}),
    n(47120);
var i = n(570140),
    r = n(830168);
function a(e) {
    r.Z.queryDirectory(e, (t, n) => {
        if (null == t && null != n)
            i.Z.dispatch({
                type: 'INSTALLATION_LOCATION_ADD',
                path: e,
                metadata: n
            });
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_REMOVE',
        path: e
    });
}
function s(e, t) {
    let { label: n, isDefault: r } = t;
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_UPDATE',
        path: e,
        label: n,
        isDefault: r
    });
}
function o(e) {
    let t = {},
        n = 0;
    for (let a of e) {
        if (null != a && 'string' == typeof a)
            r.Z.queryDirectory(a, (r, l) => {
                ++n,
                    null == r && null != l && (t[a] = l),
                    n === e.length &&
                        i.Z.dispatch({
                            type: 'INSTALLATION_LOCATION_FETCH_METADATA',
                            metadataPayload: t
                        });
            });
    }
}
