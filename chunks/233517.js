r.d(t, {
    Qy: function () {
        return h;
    },
    TM: function () {
        return S;
    },
    Tb: function () {
        return s;
    },
    YA: function () {
        return N;
    },
    av: function () {
        return d;
    },
    cg: function () {
        return P;
    },
    dk: function () {
        return p;
    },
    eN: function () {
        return I;
    },
    eW: function () {
        return f;
    },
    mG: function () {
        return T;
    },
    rJ: function () {
        return R;
    },
    sU: function () {
        return A;
    },
    uT: function () {
        return l;
    },
    v: function () {
        return u;
    },
    xv: function () {
        return L;
    },
    yj: function () {
        return D;
    },
    yl: function () {
        return O;
    }
});
var a = r(622916),
    n = r(899517),
    _ = r(559508),
    o = r(263449),
    E = r(255768),
    i = r(112797),
    c = r(822578);
function s(e, t) {
    return (0, o.nZ)().captureException(e, (0, c.U0)(t));
}
function l(e, t) {
    let r = 'string' == typeof t ? t : void 0,
        a = 'string' != typeof t ? { captureContext: t } : void 0;
    return (0, o.nZ)().captureMessage(e, r, a);
}
function I(e, t) {
    return (0, o.nZ)().captureEvent(e, t);
}
function u(e, t) {
    (0, o.aF)().setContext(e, t);
}
function R(e) {
    (0, o.aF)().setExtras(e);
}
function A(e, t) {
    (0, o.aF)().setExtra(e, t);
}
function T(e) {
    (0, o.aF)().setTags(e);
}
function N(e, t) {
    (0, o.aF)().setTag(e, t);
}
function d(e) {
    (0, o.aF)().setUser(e);
}
function f() {
    return (0, o.aF)().lastEventId();
}
async function O(e) {
    let t = (0, o.s3)();
    return t ? t.flush(e) : (E.X && a.kg.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
}
async function L(e) {
    let t = (0, o.s3)();
    return t ? t.close(e) : (E.X && a.kg.warn('Cannot flush events and disable SDK. No client defined.'), Promise.resolve(!1));
}
function p() {
    return !!(0, o.s3)();
}
function h(e) {
    (0, o.aF)().addEventProcessor(e);
}
function D(e) {
    let t = (0, o.s3)(),
        r = (0, o.aF)(),
        a = (0, o.nZ)(),
        { release: E, environment: c = _.J } = (t && t.getOptions()) || {},
        { userAgent: s } = n.n.navigator || {},
        l = (0, i.Hv)({
            release: E,
            environment: c,
            user: a.getUser() || r.getUser(),
            ...(s && { userAgent: s }),
            ...e
        }),
        I = r.getSession();
    return I && 'ok' === I.status && (0, i.CT)(I, { status: 'exited' }), S(), r.setSession(l), a.setSession(l), l;
}
function S() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = t.getSession() || e.getSession();
    r && (0, i.RJ)(r), C(), e.setSession(), t.setSession();
}
function C() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = (0, o.s3)(),
        a = t.getSession() || e.getSession();
    a && r && r.captureSession(a);
}
function P(e = !1) {
    if (e) {
        S();
        return;
    }
    C();
}
