n.d(t, {
    OA: function () {
        return i;
    },
    _C: function () {
        return s;
    },
    kT: function () {
        return l;
    }
});
var o = n(823379),
    r = n(246364),
    a = n(592286);
let i = (e) => {
    let { required: t, response: n, field_type: a } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (a) {
        case r.QJ.TERMS:
        case r.QJ.VERIFICATION:
            return !!n;
        case r.QJ.TEXT_INPUT:
        case r.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case r.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, o.vE)(a);
    }
};
function l(e) {
    return a.lI.has(null == e ? void 0 : e.field_type);
}
function s(e) {
    return a.hZ.has(null == e ? void 0 : e.field_type);
}
