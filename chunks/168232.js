r.d(n, {
    G: function () {
        return h;
    },
    QI: function () {
        return f;
    },
    VR: function () {
        return _;
    },
    jX: function () {
        return c;
    }
});
var i = r(789020);
var a = r(512722),
    s = r.n(a),
    o = r(630388),
    l = r(48541),
    u = r(981631);
function c(e, n, r) {
    !e && void 0 !== n && s()(r === n, 'Premium type should not change for non-staff users');
}
function d(e) {
    return 'production' === l.C.TEST && null != e ? e : 'production';
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return d(n) === l.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.C.STAGING || (null != e && (e.isStaff() || e.isStaffPersonal()));
}
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return d(n) === l.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.C.STAGING || (null != e && (!!(null != e.flags && (0, o.yE)(e.flags, u.xW$.STAFF)) || null != e.personal_connection_id));
}
function h(e) {
    return void 0 !== e ? (e === u.WND ? null : e) : e;
}
