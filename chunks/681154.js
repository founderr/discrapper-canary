n.d(t, {
    Gx: function () {
        return u;
    },
    Op: function () {
        return m;
    },
    T4: function () {
        return d;
    },
    V_: function () {
        return c;
    }
});
var a,
    i,
    r = n(539573),
    l = n(388032);
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
    return s(0, l.intl.string(l.t['71wuR0']));
}
function d() {
    return s(0, l.intl.string(l.t['w/BT3N']));
}
function u(e, t) {
    return s(1, (0, r.$q)(e, null == t ? void 0 : t.id));
}
function m(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) || (2 === e.type && null != t.tags && t.tags.length > 0) ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
((a = i || (i = {}))[(a.EmptyContent = 0)] = 'EmptyContent'), (a[(a.AutomodViolation = 1)] = 'AutomodViolation'), (a[(a.EmptyTags = 2)] = 'EmptyTags');
