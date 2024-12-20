r.d(n, {
    DH: function () {
        return I;
    },
    PD: function () {
        return T;
    },
    P_: function () {
        return p;
    },
    hj: function () {
        return v;
    },
    sS: function () {
        return h;
    }
});
var i = r(47120);
var a = r(615287),
    s = r(593472),
    o = r(710845),
    l = r(594190),
    u = r(77498),
    c = r(998502);
let d = new o.Z('OverlayRenderUtils');
function f(e) {
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP],
        r = n.getGameForPID(e);
    try {
        return null == r ? c.ZP.GetWindowFullscreenTypeByPid(e) : c.ZP.GetWindowFullscreenTypeByPid(r.pid, r.name, r.fullscreenType);
    } catch (n) {
        var i;
        return d.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(n)), null !== (i = null == r ? void 0 : r.fullscreenType) && void 0 !== i ? i : s.Jx.UNKNOWN;
    }
}
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10000,
        [r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.ZP];
    return new Promise((i) => {
        setTimeout(() => {
            i(f(e, [r]));
        }, n);
    });
}
function h(e) {
    switch (e) {
        case s.Jx.BORDERLESS_FULLSCREEN:
            return 'Borderless Fullscreen';
        case s.Jx.FULLSCREEN:
            return 'Fullscreen';
        case s.Jx.WINDOWED:
            return 'Windowed';
        case s.Jx.MINIMIZED:
            return 'Minimized';
        case s.Jx.MAXIMIZED:
            return 'Maximized';
        case s.Jx.UNKNOWN:
            return 'Unknown';
    }
}
function p(e) {
    switch (e) {
        case a.gl.OutOfProcess:
            return 'Out of Process';
        case a.gl.Hook:
            return 'Hook';
        case a.gl.Disabled:
            return 'Disabled';
    }
}
function m(e, n) {
    let { quns: r } = c.ZP.GetWindowFullscreenTypeExtraByPid(e, n.name);
    return d.info('QUNS for '.concat(n.name, ': ').concat(r)), r === s.Ng.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let g = {
        '762434991303950386': (e, n, r) => s.Jx.FULLSCREEN,
        '1314682894106497096': (e, n, r) => (m(e, n) ? s.Jx.FULLSCREEN : r)
    },
    E = 100;
async function v(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
        i = await _(e, r),
        a = l.ZP.getGameForPID(e);
    if (null == a || null == a.name) return i;
    let s = null === (n = u.Z.getGameByName(a.name)) || void 0 === n ? void 0 : n.id;
    if (null == s) return i;
    let o = g[s];
    return null != o ? o(e, a, i) : i;
}
function I(e, n) {
    if (e.overlayMethod !== a.gl.OutOfProcess) return !1;
    switch (n) {
        case s.Jx.UNKNOWN:
        case s.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function T(e, n) {
    if (e.overlayMethod !== a.gl.Hook) return !1;
    switch (n) {
        case s.Jx.UNKNOWN:
        case s.Jx.MINIMIZED:
        case s.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
