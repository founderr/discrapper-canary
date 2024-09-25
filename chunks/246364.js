var r, i, a, o;
n.d(t, {
    J: function () {
        return u;
    },
    Nw: function () {
        return a;
    },
    QJ: function () {
        return r;
    },
    YG: function () {
        return c;
    },
    hW: function () {
        return l;
    },
    tB: function () {
        return s;
    },
    wB: function () {
        return o;
    }
});
let s = 25,
    l = 4;
function u(e) {
    return null != e && 'TERMS' === e.field_type;
}
function c(e) {
    return null != e && e.some((e) => !u(e));
}
!(function (e) {
    (e.TERMS = 'TERMS'), (e.TEXT_INPUT = 'TEXT_INPUT'), (e.PARAGRAPH = 'PARAGRAPH'), (e.MULTIPLE_CHOICE = 'MULTIPLE_CHOICE'), (e.VERIFICATION = 'VERIFICATION');
})(r || (r = {})),
    !(function (e) {
        (e.EMAIL = 'email'), (e.PHONE = 'phone');
    })(i || (i = {})),
    !(function (e) {
        (e.TIMESTAMP_DESC = 'NEWEST'), (e.TIMESTAMP_ASC = 'OLDEST');
    })(a || (a = {})),
    !(function (e) {
        (e.STARTED = 'STARTED'), (e.SUBMITTED = 'SUBMITTED'), (e.REJECTED = 'REJECTED'), (e.APPROVED = 'APPROVED');
    })(o || (o = {}));
