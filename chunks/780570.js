n.d(t, {
    CP: function () {
        return c;
    },
    Je: function () {
        return p;
    },
    KJ: function () {
        return f;
    },
    OT: function () {
        return d;
    },
    Tu: function () {
        return u;
    },
    d0: function () {
        return E;
    },
    lK: function () {
        return h;
    },
    xI: function () {
        return _;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(695346),
    o = n(594174),
    s = n(55563),
    l = n(981631);
function u(e, t) {
    return ''.concat(e, ':').concat(t);
}
function c(e) {
    let [t, n] = e.split(':');
    return {
        applicationId: t,
        branchId: n
    };
}
function d(e, t) {
    if (!a.G6.getSetting() || a.co.getSetting() === l.Skl.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(l.eHb.PRIVATE);
}
function _(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function E(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(l.eHb.PRIVATE))) && !t.isHidden();
}
function f(e) {
    return null == e ? null : e.type === l.vxO.INSTALLING || e.type === l.vxO.UPDATING || e.type === l.vxO.UNINSTALLING ? e : null;
}
function h(e) {
    return e.reduce(
        (e, t) => {
            let n = f(t);
            return null == n || t.type === l.vxO.UP_TO_DATE
                ? e
                : {
                      total: e.total + Number(n.total),
                      progress: e.progress + Number(n.progress)
                  };
        },
        {
            total: 0,
            progress: 0
        }
    );
}
function p(e) {
    return !!e.isDiscordApplication() && e.isEntitled(o.default.getCurrentUser(), s.Z);
}
