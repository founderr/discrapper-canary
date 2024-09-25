n.d(t, {
    CZ: function () {
        return l;
    },
    LB: function () {
        return c;
    },
    O5: function () {
        return u;
    },
    YC: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(433517),
    s = n(689938);
!(function (e) {
    (e.CLASSIC = 'classic'), (e.RETRO = 'retro'), (e.BUBBLE = 'bop'), (e.DUCKY = 'ducky'), (e.LOFI = 'lofi'), (e.ASMR = 'asmr'), (e.DISCODO = 'discodo');
})(r || (r = {}));
let l = 'custom_notification_sounds_asmr',
    u = 'custom_notification_sounds_discodo';
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d(e);
    return [
        {
            value: 'classic',
            label: s.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
            description: s.Z.Messages.SOUNDPACK_DEFAULT_DESCRIPTION,
            requirePremium: !1
        },
        {
            value: 'retro',
            label: s.Z.Messages.SOUNDPACK_RETRO_LABEL,
            description: s.Z.Messages.SOUNDPACK_RETRO_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: s.Z.Messages.SOUNDPACK_LOFI_LABEL,
            description: s.Z.Messages.SOUNDPACK_LOFI_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: s.Z.Messages.SOUNDPACK_DUCKY_LABEL,
            description: s.Z.Messages.SOUNDPACK_DUCKY_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'bop',
            label: s.Z.Messages.SOUNDPACK_BUBBLE_LABEL,
            description: s.Z.Messages.SOUNDPACK_BUBBLE_DESCRIPTION,
            requirePremium: !0
        },
        ...t
    ];
}
function d(e) {
    if (!e) return [];
    let t = [];
    return (
        o.K.get(u, !1) &&
            t.push({
                value: 'discodo',
                label: 'DISCODO',
                description: '๑(\u25D5‿\u25D5)๑',
                requirePremium: !0
            }),
        o.K.get(l, !1) &&
            t.push({
                value: 'asmr',
                label: s.Z.Messages.SOUNDPACK_ASMR_LABEL,
                description: s.Z.Messages.SOUNDPACK_ASMR_DESCRIPTION,
                requirePremium: !0
            }),
        t
    );
}
