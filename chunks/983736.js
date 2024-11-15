n.d(t, {
    OA: function () {
        return o;
    },
    _C: function () {
        return s;
    },
    kT: function () {
        return l;
    }
});
var r = n(823379),
    i = n(246364),
    a = n(592286);
let o = (e) => {
    let { required: t, response: n, field_type: a } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (a) {
        case i.QJ.TERMS:
        case i.QJ.VERIFICATION:
            return !!n;
        case i.QJ.TEXT_INPUT:
        case i.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case i.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, r.vE)(a);
    }
};
function l(e) {
    return a.lI.has(null == e ? void 0 : e.field_type);
}
function s(e) {
    return a.hZ.has(null == e ? void 0 : e.field_type);
}
