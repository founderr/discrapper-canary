n.r(t),
    n.d(t, {
        default: function () {
            return b;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    a = n(512722),
    r = n.n(a),
    o = n(902704),
    l = n(481060),
    d = n(935369),
    c = n(367907),
    u = n(707515),
    h = n(528567),
    g = n(873128),
    x = n(647529),
    f = n(981631),
    m = n(388032),
    _ = n(499945);
function b(e) {
    let { guildId: t, leaderboardId: n, ...a } = e,
        b = (0, g.Z)({
            guildId: t,
            leaderboardId: n
        });
    r()(null != b, 'Leaderboard must be loaded before opening the settings modal');
    let j = b.guild_settings,
        [p, w] = s.useState(j.sort_by_statistic_id),
        [v, S] = s.useState(j.sort_desc),
        [C, N] = s.useState(j.show_winner_crown),
        [y, { loading: I }] = (0, d.Z)(u._);
    s.useEffect(() => {
        c.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, { type: f.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL });
    }, []);
    let B = p !== j.sort_by_statistic_id || v !== j.sort_desc || C !== j.show_winner_crown,
        Z = async () => {
            await y({
                guildId: t,
                leaderboardId: n,
                sortByStatisticId: p,
                sortDesc: v,
                showWinnerCrown: C
            }),
                a.onClose();
        },
        M = s.useMemo(() => {
            let e = Object.values(b.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let n of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: n.id,
                            sortDesc: e
                        },
                        label: (0, h.s)({
                            statisticId: n.id,
                            sortDesc: e,
                            aggregationType: n.aggregation_type
                        })
                    });
            return t;
        }, [b]),
        L = M.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: p,
                sortDesc: v
            })
        );
    return (0, i.jsx)(x.Z, {
        ...a,
        guildId: t,
        title: m.intl.string(m.t.rv9GUV),
        buttons: (0, i.jsx)(l.Button, {
            onClick: Z,
            submitting: I,
            disabled: !B,
            children: m.intl.string(m.t.R3BPHx)
        }),
        children: (0, i.jsxs)(l.ModalContent, {
            className: _.content,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: m.intl.string(m.t.IQO9Fx)
                }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.SingleSelect, {
                    placeholder: m.intl.string(m.t['g/Rr2d']),
                    value: null == L ? void 0 : L.value,
                    options: M,
                    onChange: (e) => {
                        let { sortByStatisticId: t, sortDesc: n } = e;
                        w(t), S(n);
                    }
                }),
                (0, i.jsx)('div', { className: _.divider }),
                (0, i.jsx)(l.FormTitle, { children: m.intl.string(m.t.HU4EKC) }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.FormSwitch, {
                    hideBorder: !0,
                    onChange: () => N((e) => !e),
                    value: C,
                    className: _.showWinnerCrownSwitch,
                    children: (0, i.jsxs)('div', {
                        className: _.showWinnerCrownTextContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: m.intl.string(m.t.cH7QEx)
                            }),
                            (0, i.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' })
                        ]
                    })
                })
            ]
        })
    });
}
