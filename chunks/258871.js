var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(554747),
    s = n(434479),
    c = n(593364),
    d = n(703656),
    u = n(944486),
    h = n(147754),
    p = n(688438),
    m = n(981631),
    f = n(388032);
let g = [
    {
        key: 'EVENTS',
        renderIcon: (e) =>
            (0, i.jsx)(o.CalendarIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: (e) => {
            let { numEvents: t } = e;
            return t > 0 ? f.intl.formatToPlainString(f.t.IBdqSk, { number: t }) : f.intl.string(f.t.tlopTE);
        },
        handler: (e) =>
            (0, o.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e('22347'), n.e('56236'), n.e('22506')]).then(n.bind(n, 17671));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: e.id
                    });
            })
    },
    {
        key: 'JOIN_SERVERS',
        renderIcon: (e) =>
            (0, i.jsx)(o.CompassIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => f.intl.string(f.t.K50GHR),
        handler: (e, t) => (0, d.XU)(e.id, t.id)
    },
    {
        key: 'ADD_SERVERS',
        renderIcon: (e) =>
            (0, i.jsx)(o.PlusSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => f.intl.string(f.t.emRpdX),
        handler: (e, t) =>
            (0, o.openModalLazy)(async () => {
                let { default: l } = await n.e('79764').then(n.bind(n, 533202));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        directoryGuildName: e.name,
                        directoryGuildId: e.id,
                        directoryChannelId: t.id
                    });
            })
    },
    {
        key: 'INVITE_MEMBERS',
        renderIcon: (e) => (0, i.jsx)(o.GroupPlusIcon, { className: e }),
        getName: () => f.intl.string(f.t.MJQOuL),
        handler: (e, t) =>
            (0, o.openModalLazy)(async () => {
                let { default: l } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        guild: e,
                        channel: t,
                        source: m.t4x.HUB_SIDEBAR
                    });
            })
    }
];
t.Z = (e) => {
    let { guild: t, channel: n } = e,
        o = (0, a.ZP)(t.id);
    l.useEffect(() => {
        h.Z.trackExposure({
            guildId: t.id,
            location: '543af8_1'
        });
    }, [t.id]);
    let { showHubEventsList: d } = h.Z.useExperiment(
            {
                guildId: t.id,
                location: '543af8_2'
            },
            { autoTrackExposure: !1 }
        ),
        m = (0, r.e7)([u.Z], () => null != n && u.Z.getChannelId() === n.id),
        f = l.useMemo(() => ({ numEvents: o.length }), [o.length]),
        C = (0, p.t)(n);
    return (0, i.jsx)(i.Fragment, {
        children: g.map((e) => {
            let { key: l, getName: r, handler: o, renderIcon: a } = e;
            if (!d && 'EVENTS' === l) return null;
            let u = ''.concat(l, '-').concat(t.id);
            return (0, i.jsx)(
                s.m,
                {
                    id: u,
                    renderIcon: a,
                    text: r(f),
                    selected: m && 'JOIN_SERVERS' === l,
                    onClick: null != n ? () => o(t, n) : void 0,
                    trailing: 'JOIN_SERVERS' === l && C > 0 ? (0, c.N)(C) : null
                },
                u
            );
        })
    });
};
