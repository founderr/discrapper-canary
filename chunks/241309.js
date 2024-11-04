n.d(t, {
    Gx: function () {
        return d;
    },
    Op: function () {
        return h;
    },
    T4: function () {
        return u;
    },
    V_: function () {
        return c;
    }
});
var i,
    l,
    r = n(539573),
    s = n(388032);
function a(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function o(e) {
    return a(0, e);
}
function c() {
    return a(0, s.intl.string(s.t['uXA57+']));
}
function u() {
    return a(0, s.intl.string(s.t.kesTVV));
}
function d(e, t) {
    return a(1, (0, r.$q)(e, null == t ? void 0 : t.id));
}
function h(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
((i = l || (l = {}))[(i.EmptyContent = 0)] = 'EmptyContent'), (i[(i.AutomodViolation = 1)] = 'AutomodViolation');
