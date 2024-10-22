var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(554747),
    o = n(434479),
    c = n(593364),
    u = n(703656),
    d = n(944486),
    h = n(147754),
    p = n(688438),
    f = n(981631),
    _ = n(689938);
let m = [
    {
        key: 'EVENTS',
        renderIcon: (e) =>
            (0, i.jsx)(r.CalendarIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: (e) => {
            let { numEvents: t } = e;
            return t > 0 ? _.Z.Messages.GUILD_EVENTS_PLURAL.format({ number: t }) : _.Z.Messages.GUILD_EVENTS;
        },
        handler: (e) =>
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e('22347'), n.e('56236'), n.e('7029')]).then(n.bind(n, 17671));
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
            (0, i.jsx)(r.CompassIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => _.Z.Messages.HUB_SIDEBAR_JOIN_SERVERS,
        handler: (e, t) => (0, u.XU)(e.id, t.id)
    },
    {
        key: 'ADD_SERVERS',
        renderIcon: (e) =>
            (0, i.jsx)(r.PlusSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => _.Z.Messages.HUB_SIDEBAR_ADD_SERVERS,
        handler: (e, t) =>
            (0, r.openModalLazy)(async () => {
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
        renderIcon: (e) => (0, i.jsx)(r.GroupPlusIcon, { className: e }),
        getName: () => _.Z.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
        handler: (e, t) =>
            (0, r.openModalLazy)(async () => {
                let { default: l } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        guild: e,
                        channel: t,
                        source: f.t4x.HUB_SIDEBAR
                    });
            })
    }
];
t.Z = (e) => {
    let { guild: t, channel: n } = e,
        r = (0, s.ZP)(t.id);
    l.useEffect(() => {
        h.Z.trackExposure({
            guildId: t.id,
            location: '543af8_1'
        });
    }, [t.id]);
    let { showHubEventsList: u } = h.Z.useExperiment(
            {
                guildId: t.id,
                location: '543af8_2'
            },
            { autoTrackExposure: !1 }
        ),
        f = (0, a.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
        _ = l.useMemo(() => ({ numEvents: r.length }), [r.length]),
        g = (0, p.t)(n);
    return (0, i.jsx)(i.Fragment, {
        children: m.map((e) => {
            let { key: l, getName: a, handler: r, renderIcon: s } = e;
            if (!u && 'EVENTS' === l) return null;
            let d = ''.concat(l, '-').concat(t.id);
            return (0, i.jsx)(
                o.m,
                {
                    id: d,
                    renderIcon: s,
                    text: a(_),
                    selected: f && 'JOIN_SERVERS' === l,
                    onClick: null != n ? () => r(t, n) : void 0,
                    trailing: 'JOIN_SERVERS' === l && g > 0 ? (0, c.N)(g) : null
                },
                d
            );
        })
    });
};
