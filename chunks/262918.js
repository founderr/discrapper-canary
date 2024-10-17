t.r(s),
    t.d(s, {
        default: function () {
            return m;
        }
    }),
    t(47120),
    t(653041);
var n = t(735250),
    a = t(470079),
    r = t(512722),
    i = t.n(r),
    o = t(902704),
    l = t(481060),
    d = t(935369),
    c = t(707515),
    u = t(528567),
    _ = t(873128),
    h = t(647529),
    g = t(689938),
    x = t(48439);
function m(e) {
    let { guildId: s, leaderboardId: t, ...r } = e,
        m = (0, _.Z)({
            guildId: s,
            leaderboardId: t
        });
    i()(null != m, 'Leaderboard must be loaded before opening the settings modal');
    let S = m.guild_settings,
        [f, E] = a.useState(S.sort_by_statistic_id),
        [L, T] = a.useState(S.sort_desc),
        [I, C] = a.useState(S.show_winner_crown),
        [A, { loading: b }] = (0, d.Z)(c._),
        j = f !== S.sort_by_statistic_id || L !== S.sort_desc || I !== S.show_winner_crown,
        N = async () => {
            await A({
                guildId: s,
                leaderboardId: t,
                sortByStatisticId: f,
                sortDesc: L,
                showWinnerCrown: I
            }),
                r.onClose();
        },
        p = a.useMemo(() => {
            let e = Object.values(m.settings.statistics).filter((e) => e.selectable_for_competition),
                s = [];
            for (let t of e)
                for (let e of [!0, !1])
                    s.push({
                        value: {
                            sortByStatisticId: t.id,
                            sortDesc: e
                        },
                        label: (0, u.s)({
                            statisticId: t.id,
                            sortDesc: e,
                            aggregationType: t.aggregation_type
                        })
                    });
            return s;
        }, [m]),
        w = p.find((e) =>
            (0, o.Z)(e.value, {
                sortByStatisticId: f,
                sortDesc: L
            })
        );
    return (0, n.jsx)(h.Z, {
        ...r,
        guildId: s,
        title: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_TITLE,
        buttons: (0, n.jsx)(l.Button, {
            onClick: N,
            submitting: b,
            disabled: !j,
            children: g.Z.Messages.SAVE
        }),
        children: (0, n.jsxs)(l.ModalContent, {
            className: x.content,
            children: [
                (0, n.jsx)(l.Spacer, { size: 32 }),
                (0, n.jsx)(l.FormTitle, { children: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_COMPETITION_SECTION_TITLE }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_COMPETITION_SECTION_LABEL
                }),
                (0, n.jsx)(l.Spacer, { size: 18 }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_STATISTIC_LABEL
                }),
                (0, n.jsx)(l.Spacer, { size: 8 }),
                (0, n.jsx)(l.SingleSelect, {
                    placeholder: g.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                    value: null == w ? void 0 : w.value,
                    options: p,
                    onChange: (e) => {
                        let { sortByStatisticId: s, sortDesc: t } = e;
                        E(s), T(t);
                    }
                }),
                (0, n.jsx)('div', { className: x.divider }),
                (0, n.jsx)(l.FormTitle, { children: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_REWARD_SECTION_TITLE }),
                (0, n.jsx)(l.Spacer, { size: 8 }),
                (0, n.jsx)(l.FormSwitch, {
                    hideBorder: !0,
                    onChange: () => C((e) => !e),
                    value: I,
                    className: x.showWinnerCrownSwitch,
                    children: (0, n.jsxs)('div', {
                        className: x.showWinnerCrownTextContainer,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_ENABLE_CROWN_LABEL
                            }),
                            (0, n.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' })
                        ]
                    })
                })
            ]
        })
    });
}
