t.d(n, {
    hi: function () {
        return s;
    },
    kH: function () {
        return g;
    },
    rz: function () {
        return I;
    }
}),
    t(789020),
    t(47120),
    t(653041),
    t(524437);
var i = t(549817);
t(581883);
var l = t(984933),
    a = t(271383),
    r = t(9156),
    o = t(630388),
    u = t(152376),
    d = t(398758),
    c = t(372897);
function s(e) {
    var n, t;
    let i = (0, d.r1)(e),
        l = null !== (t = null === (n = a.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
        u = (0, o.yE)(l, c.q.COMPLETED_ONBOARDING),
        s = r.ZP.getOptedInChannels(e).size > 0;
    return !i && !u && !s;
}
function g(e) {
    if (s(e)) {
        I(e);
        return;
    }
    {
        let n = (0, d.r1)(e);
        (0, u.QG)(e, !n);
    }
}
function I(e) {
    let { include: n = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = l.ZP.getChannels(e),
        r = [...a[l.sH], ...a[l.Zb]]
            .filter((e) => {
                let { channel: n } = e;
                return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            });
    n.forEach((e) => r.push(e)), i.Z.onboardExistingMember(e, new Set(r));
}
