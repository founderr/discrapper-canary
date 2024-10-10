r.d(t, {
    Qy: function () {
        return S;
    },
    TM: function () {
        return h;
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
        return g;
    },
    dk: function () {
        return L;
    },
    eN: function () {
        return u;
    },
    eW: function () {
        return O;
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
        return I;
    },
    v: function () {
        return l;
    },
    xv: function () {
        return f;
    },
    yj: function () {
        return D;
    },
    yl: function () {
        return p;
    }
});
var n = r(622916),
    a = r(899517),
    _ = r(559508),
    o = r(263449),
    i = r(255768),
    E = r(112797),
    c = r(822578);
function s(e, t) {
    return (0, o.nZ)().captureException(e, (0, c.U0)(t));
}
function I(e, t) {
    let r = 'string' == typeof t ? t : void 0,
        n = 'string' != typeof t ? { captureContext: t } : void 0;
    return (0, o.nZ)().captureMessage(e, r, n);
}
function u(e, t) {
    return (0, o.nZ)().captureEvent(e, t);
}
function l(e, t) {
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
function O() {
    return (0, o.aF)().lastEventId();
}
async function p(e) {
    let t = (0, o.s3)();
    return t ? t.flush(e) : (i.X && n.kg.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
}
async function f(e) {
    let t = (0, o.s3)();
    return t ? t.close(e) : (i.X && n.kg.warn('Cannot flush events and disable SDK. No client defined.'), Promise.resolve(!1));
}
function L() {
    return !!(0, o.s3)();
}
function S(e) {
    (0, o.aF)().addEventProcessor(e);
}
function D(e) {
    let t = (0, o.s3)(),
        r = (0, o.aF)(),
        n = (0, o.nZ)(),
        { release: i, environment: c = _.J } = (t && t.getOptions()) || {},
        { userAgent: s } = a.n.navigator || {},
        I = (0, E.Hv)({
            release: i,
            environment: c,
            user: n.getUser() || r.getUser(),
            ...(s && { userAgent: s }),
            ...e
        }),
        u = r.getSession();
    return u && 'ok' === u.status && (0, E.CT)(u, { status: 'exited' }), h(), r.setSession(I), n.setSession(I), I;
}
function h() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = t.getSession() || e.getSession();
    r && (0, E.RJ)(r), C(), e.setSession(), t.setSession();
}
function C() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = (0, o.s3)(),
        n = t.getSession() || e.getSession();
    n && r && r.captureSession(n);
}
function g(e = !1) {
    if (e) {
        h();
        return;
    }
    C();
}
