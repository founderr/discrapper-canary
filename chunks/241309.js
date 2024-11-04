n.d(t, {
    Gx: function () {
        return u;
    },
    Op: function () {
        return h;
    },
    T4: function () {
        return d;
    },
    V_: function () {
        return c;
    }
});
var i,
    l,
    a = n(539573),
    r = n(388032);
function s(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function o(e) {
    return s(0, e);
}
function c() {
    return s(0, r.intl.string(r.t['uXA57+']));
}
function d() {
    return s(0, r.intl.string(r.t.kesTVV));
}
function u(e, t) {
    return s(1, (0, a.$q)(e, null == t ? void 0 : t.id));
}
function h(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
((i = l || (l = {}))[(i.EmptyContent = 0)] = 'EmptyContent'), (i[(i.AutomodViolation = 1)] = 'AutomodViolation');
