t.d(n, {
    hi: function () {
        return c;
    },
    kH: function () {
        return E;
    },
    rz: function () {
        return I;
    }
}),
    t(789020),
    t(47120),
    t(653041),
    t(524437);
var a = t(549817);
t(581883);
var i = t(984933),
    l = t(271383),
    s = t(9156),
    o = t(630388),
    r = t(152376),
    u = t(398758),
    d = t(372897);
function c(e) {
    var n, t;
    let a = (0, u.r1)(e),
        i = null !== (t = null === (n = l.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
        r = (0, o.yE)(i, d.q.COMPLETED_ONBOARDING),
        c = s.ZP.getOptedInChannels(e).size > 0;
    return !a && !r && !c;
}
function E(e) {
    if (c(e)) {
        I(e);
        return;
    }
    {
        let n = (0, u.r1)(e);
        (0, r.QG)(e, !n);
    }
}
function I(e) {
    let { include: n = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = i.ZP.getChannels(e),
        s = [...l[i.sH], ...l[i.Zb]]
            .filter((e) => {
                let { channel: n } = e;
                return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            });
    n.forEach((e) => s.push(e)), a.Z.onboardExistingMember(e, new Set(s));
}
