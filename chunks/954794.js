t.d(s, {
    Z: function () {
        return S;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(692547),
    o = t(481060),
    l = t(768762),
    c = t(823379),
    d = t(882029),
    _ = t(955204),
    u = t(248998),
    E = t(689938),
    T = t(790980);
function S(e) {
    let { onBackClick: s } = e,
        t = (0, i.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()),
        S = a.useMemo(() => Object.values(t).sort((e, s) => s.dateUnlocked - e.dateUnlocked), [t]),
        I = a.useMemo(
            () =>
                Object.values(_.LG)
                    .filter(c.lm)
                    .filter((e) => null == t[e.id])
                    .sort((e, s) => e.rarity - s.rarity),
            [t]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.FormSection, {
                children: (0, n.jsxs)(o.Clickable, {
                    onClick: s,
                    className: T.backContainer,
                    children: [
                        (0, n.jsx)(l.Z, {
                            direction: l.Z.Directions.LEFT,
                            className: T.icon
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'text-normal',
                            children: E.Z.Messages.BACK
                        })
                    ]
                })
            }),
            (0, n.jsxs)('div', {
                className: T.headerContainer,
                children: [
                    (0, n.jsxs)('div', {
                        className: T.headerTextContainer,
                        children: [
                            (0, n.jsx)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                color: 'header-primary',
                                children: E.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: E.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: T.headerIcon,
                        children: (0, n.jsx)(o.TrophyIcon, {
                            size: 'custom',
                            color: r.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            S.length > 0 &&
                (0, n.jsx)(o.FormSection, {
                    className: T.divider,
                    children: (0, n.jsx)('div', {
                        className: T.achievementGrid,
                        children: S.map((e) => {
                            let { achievementId: s, dateUnlocked: t } = e;
                            return (0, n.jsx)(
                                u.Z,
                                {
                                    achievementId: s,
                                    dateUnlocked: t
                                },
                                s
                            );
                        })
                    })
                }),
            I.length > 0 &&
                (0, n.jsxs)(o.FormSection, {
                    className: T.divider,
                    children: [
                        (0, n.jsx)('div', {
                            className: T.headerTextContainer,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/bold',
                                color: 'header-secondary',
                                children: E.Z.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: T.achievementGrid,
                            children: I.map((e) => (0, n.jsx)(u.Z, { achievementId: e.id }, e.id))
                        })
                    ]
                }),
            (0, n.jsx)(o.FormSection, {
                className: T.divider,
                children: (0, n.jsx)('div', { className: T.bottomPadding })
            })
        ]
    });
}
