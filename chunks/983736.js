t.d(n, {
    OA: function () {
        return o;
    },
    _C: function () {
        return l;
    },
    kT: function () {
        return s;
    }
});
var r = t(823379),
    a = t(246364),
    i = t(592286);
let o = (e) => {
    let { required: n, response: t, field_type: i } = e;
    if (!n) return !0;
    if (null == t) return !1;
    switch (i) {
        case a.QJ.TERMS:
        case a.QJ.VERIFICATION:
            return !!t;
        case a.QJ.TEXT_INPUT:
        case a.QJ.PARAGRAPH:
            return 'string' == typeof t && '' !== t.trim();
        case a.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof t;
        default:
            return (0, r.vE)(i);
    }
};
function s(e) {
    return i.lI.has(null == e ? void 0 : e.field_type);
}
function l(e) {
    return i.hZ.has(null == e ? void 0 : e.field_type);
}
