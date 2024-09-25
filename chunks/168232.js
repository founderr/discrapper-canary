n.d(t, {
    G: function () {
        return E;
    },
    QI: function () {
        return d;
    },
    VR: function () {
        return _;
    },
    jX: function () {
        return u;
    }
});
var r = n(789020);
var i = n(512722),
    a = n.n(i),
    o = n(630388),
    s = n(48541),
    l = n(981631);
function u(e, t, n) {
    !e && void 0 !== t && a()(n === t, 'Premium type should not change for non-staff users');
}
function c(e) {
    return 'production' === s.C.TEST && null != e ? e : 'production';
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === s.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.C.STAGING || (null != e && (e.isStaff() || e.isStaffPersonal()));
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === s.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.C.STAGING || (null != e && (!!(null != e.flags && (0, o.yE)(e.flags, l.xW$.STAFF)) || null != e.personal_connection_id));
}
function E(e) {
    return void 0 !== e ? (e === l.WND ? null : e) : e;
}
