n.d(t, {
    O8: function () {
        return p;
    },
    V: function () {
        return f;
    },
    tV: function () {
        return _;
    }
});
var r = n(981631),
    i = n(388032),
    a = n(337258),
    s = n(705196),
    o = n(190878),
    l = n(991254),
    u = n(485686),
    c = n(400976),
    d = n(443909);
let f = () => ({
        [r.tNA.CHILLING]: {
            title: i.intl.string(i.t['vkpn7+']),
            icon: s,
            color: '#567C7E'
        },
        [r.tNA.GAMING]: {
            title: i.intl.string(i.t.lZslwM),
            icon: o,
            color: '#685F8C'
        },
        [r.tNA.FOCUSING]: {
            title: i.intl.string(i.t.b6AscH),
            icon: u,
            color: '#7F6956'
        },
        [r.tNA.BRB]: {
            title: i.intl.string(i.t['30yqZW']),
            icon: a,
            color: '#76567E'
        },
        [r.tNA.EATING]: {
            title: i.intl.string(i.t.UVSEhY),
            icon: l,
            color: '#717B54'
        },
        [r.tNA.IN_TRANSIT]: {
            title: i.intl.string(i.t['l0q9/f']),
            icon: c,
            color: '#56697F'
        },
        [r.tNA.WATCHING]: {
            title: i.intl.string(i.t.di6IFx),
            icon: d,
            color: '#7C5571'
        }
    }),
    _ = (e) => {
        if ((null == e ? void 0 : e.type) !== r.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
        let t = e.state;
        return t === r.tNA.CUSTOM ? null : f()[t];
    },
    p = (e) => {
        var t;
        return ((null == e ? void 0 : e.state) != null ? e.state : null) === r.tNA.CUSTOM ? (null == e ? void 0 : e.details) : null === (t = _(e)) || void 0 === t ? void 0 : t.title;
    };
