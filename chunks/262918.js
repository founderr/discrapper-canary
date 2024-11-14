n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(902704),
    l = n(481060),
    d = n(935369),
    c = n(707515),
    u = n(528567),
    h = n(873128),
    g = n(647529),
    x = n(388032),
    f = n(48439);
function m(e) {
    let { guildId: t, leaderboardId: n, ...r } = e,
        m = (0, h.Z)({
            guildId: t,
            leaderboardId: n
        });
    a()(null != m, 'Leaderboard must be loaded before opening the settings modal');
    let _ = m.guild_settings,
        [b, j] = s.useState(_.sort_by_statistic_id),
        [p, w] = s.useState(_.sort_desc),
        [v, C] = s.useState(_.show_winner_crown),
        [S, { loading: y }] = (0, d.Z)(c._),
        N = b !== _.sort_by_statistic_id || p !== _.sort_desc || v !== _.show_winner_crown,
        I = async () => {
            await S({
                guildId: t,
                leaderboardId: n,
                sortByStatisticId: b,
                sortDesc: p,
                showWinnerCrown: v
            }),
                r.onClose();
        },
        B = s.useMemo(() => {
            let e = Object.values(m.settings.statistics).filter((e) => e.selectable_for_competition),
                t = [];
            for (let n of e)
                for (let e of [!0, !1])
                    t.push({
                        value: {
                            sortByStatisticId: n.id,
                            sortDesc: e
                        },
                        label: (0, u.s)({
                            statisticId: n.id,
                            sortDesc: e,
                            aggregationType: n.aggregation_type
                        })
                    });
            return t;
        }, [m]),
        Z = B.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: b,
                sortDesc: p
            })
        );
    return (0, i.jsx)(g.Z, {
        ...r,
        guildId: t,
        title: x.intl.string(x.t.rv9GUV),
        buttons: (0, i.jsx)(l.Button, {
            onClick: I,
            submitting: y,
            disabled: !N,
            children: x.intl.string(x.t.R3BPHx)
        }),
        children: (0, i.jsxs)(l.ModalContent, {
            className: f.content,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: x.intl.string(x.t.IQO9Fx)
                }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.SingleSelect, {
                    placeholder: x.intl.string(x.t['g/Rr2d']),
                    value: null == Z ? void 0 : Z.value,
                    options: B,
                    onChange: (e) => {
                        let { sortByStatisticId: t, sortDesc: n } = e;
                        j(t), w(n);
                    }
                }),
                (0, i.jsx)('div', { className: f.divider }),
                (0, i.jsx)(l.FormTitle, { children: x.intl.string(x.t.HU4EKC) }),
                (0, i.jsx)(l.Spacer, { size: 8 }),
                (0, i.jsx)(l.FormSwitch, {
                    hideBorder: !0,
                    onChange: () => C((e) => !e),
                    value: v,
                    className: f.showWinnerCrownSwitch,
                    children: (0, i.jsxs)('div', {
                        className: f.showWinnerCrownTextContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: x.intl.string(x.t.cH7QEx)
                            }),
                            (0, i.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' })
                        ]
                    })
                })
            ]
        })
    });
}
