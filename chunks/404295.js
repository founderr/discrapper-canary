r.d(n, {
    bG: function () {
        return c;
    },
    en: function () {
        return d;
    },
    h9: function () {
        return l;
    }
});
var i = r(442837),
    a = r(592125),
    s = r(594174),
    o = r(291574);
function l(e, n) {
    let r = (0, i.e7)([a.Z], () => a.Z.getChannel(e)),
        { enabled: s } = o.Z.useExperiment({ location: n });
    return s && u(r);
}
function u(e) {
    if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
    let n = s.default.getUser(e.getRecipientId());
    return null != n && n.bot;
}
function c(e) {
    let { enabled: n } = o.Z.useExperiment({ location: e });
    return n;
}
function d(e) {
    let { quickLaunchEnabled: n } = o.Z.useExperiment({ location: e });
    return n;
}
