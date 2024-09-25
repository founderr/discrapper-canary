n.d(t, {
    BK: function () {
        return d;
    },
    Bf: function () {
        return r;
    },
    KZ: function () {
        return _;
    }
}),
    n(724458),
    n(653041);
var l = n(476326),
    a = n(403182),
    s = n(74538),
    o = n(474936),
    i = n(689938);
function d(e, t) {
    let n = a.Ng(a.dg(t));
    return s.ZP.isPremium(e, o.p9.TIER_2) ? i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n }) : s.ZP.isPremium(e, o.p9.TIER_1) ? i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({ maxSize: n }) : i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n });
}
function r(e, t) {
    return a.nA(e, t) || a.vY(e);
}
function _(e) {
    return e.reduce((e, t) => (t.item.platform === l.ow.WEB && e.push(t.item.file), e), []);
}
