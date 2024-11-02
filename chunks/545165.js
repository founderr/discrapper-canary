t.d(n, {
    SU: function () {
        return a;
    },
    sR: function () {
        return s;
    }
}),
    t(47120),
    t(653041);
var l = t(442837),
    i = t(357156);
t(427679);
var r = t(984933);
function a(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.ZP];
    if (null == n) return [];
    let l = t.getChannels(e)[r.Zb],
        a = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: t, canManageAllEvents: l } = (0, i.Gw)(e),
            r = t || l;
        if (e.type === n) e.isGuildVoice() && r ? a.push(e) : e.isGuildStageVoice() && r && a.push(e);
    }
    return a;
}
function s(e, n) {
    return (0, l.Wu)([r.ZP], () => a(e, n, [r.ZP]), [e, n]);
}
t(496675), t(85243);
