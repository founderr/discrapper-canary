r.d(n, {
    CP: function () {
        return d;
    },
    Je: function () {
        return g;
    },
    KJ: function () {
        return p;
    },
    OT: function () {
        return f;
    },
    Tu: function () {
        return c;
    },
    d0: function () {
        return h;
    },
    lK: function () {
        return m;
    },
    xI: function () {
        return _;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(695346),
    o = r(594174),
    l = r(55563),
    u = r(981631);
function c(e, n) {
    return ''.concat(e, ':').concat(n);
}
function d(e) {
    let [n, r] = e.split(':');
    return {
        applicationId: n,
        branchId: r
    };
}
function f(e, n) {
    if (!s.G6.getSetting() || s.co.getSetting() === u.Skl.INVISIBLE) return !1;
    let r = n.getActiveLibraryApplication(e);
    return null == r || !r.hasFlag(u.eHb.PRIVATE);
}
function _(e, n) {
    return 0 === n ? 100 : (e / n) * 100;
}
function h(e, n, r) {
    return !(null == n || (r.enabled && n.hasFlag(u.eHb.PRIVATE))) && !n.isHidden();
}
function p(e) {
    return null == e ? null : e.type === u.vxO.INSTALLING || e.type === u.vxO.UPDATING || e.type === u.vxO.UNINSTALLING ? e : null;
}
function m(e) {
    return e.reduce(
        (e, n) => {
            let r = p(n);
            return null == r || n.type === u.vxO.UP_TO_DATE
                ? e
                : {
                      total: e.total + Number(r.total),
                      progress: e.progress + Number(r.progress)
                  };
        },
        {
            total: 0,
            progress: 0
        }
    );
}
function g(e) {
    return !!e.isDiscordApplication() && e.isEntitled(o.default.getCurrentUser(), l.Z);
}
