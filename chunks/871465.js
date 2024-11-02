n.d(t, {
    CZ: function () {
        return o;
    },
    LB: function () {
        return u;
    },
    O5: function () {
        return l;
    },
    YC: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(433517),
    s = n(388032);
((i = r || (r = {})).CLASSIC = 'classic'), (i.RETRO = 'retro'), (i.BUBBLE = 'bop'), (i.DUCKY = 'ducky'), (i.LOFI = 'lofi'), (i.ASMR = 'asmr'), (i.DISCODO = 'discodo'), (i.HALLOWEEN = 'halloween');
let o = 'custom_notification_sounds_asmr',
    l = 'custom_notification_sounds_discodo';
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (function (e) {
            if (!e) return [];
            let t = [];
            return (
                a.K.get(l, !1) &&
                    t.push({
                        value: 'discodo',
                        label: 'DISCODO',
                        description: '๑(\u25D5‿\u25D5)๑',
                        requirePremium: !0
                    }),
                a.K.get(o, !1) &&
                    t.push({
                        value: 'asmr',
                        label: s.intl.string(s.t['3SJZKC']),
                        description: s.intl.formatToMarkdownString(s.t.MZlgQE, {}),
                        requirePremium: !0
                    }),
                t
            );
        })(e);
    return [
        {
            value: 'classic',
            label: s.intl.string(s.t.p3Hg5e),
            description: s.intl.string(s.t['4iA55u']),
            requirePremium: !1
        },
        {
            value: 'retro',
            label: s.intl.string(s.t.Rrwrnp),
            description: s.intl.string(s.t['zKG+ur']),
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: s.intl.string(s.t.aEsrnp),
            description: s.intl.string(s.t.fMUEj4),
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: s.intl.string(s.t['4TOv0t']),
            description: s.intl.string(s.t['1kbe6e']),
            requirePremium: !0
        },
        {
            value: 'bop',
            label: s.intl.string(s.t.s5Qo8P),
            description: s.intl.string(s.t.I39onp),
            requirePremium: !0
        },
        ...t
    ];
}
