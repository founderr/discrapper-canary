n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(948789), o = n(481060), c = n(100527), d = n(252618), u = n(624383), _ = n(984370), E = n(63063), h = n(792125), I = n(113434), m = n(709158), g = n(710914), p = n(77608), T = n(981631), S = n(689938), C = n(852595);
t.Z = function (e) {
    let {} = e, t = (0, m.Z)(c.Z.QUEST_HOME_PAGE), [n, a] = s.useState(I.W6.UNCLAIMED), {quests: f} = (0, I.bA)(n);
    s.useEffect(() => {
        !t && (0, l.uL)(T.Z5c.FRIENDS);
    }, [t]), s.useEffect(() => {
    }, []);
    let N = s.useCallback(() => {
        window.open(E.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, d.Tt)({ location: S.Z.Messages.QUESTS });
    let A = (0, h.Q)('dark');
    return t ? (0, i.jsxs)('div', {
        className: C.container,
        children: [
            (0, i.jsxs)(_.Z, {
                toolbar: !0,
                transparent: !0,
                className: r()(A, C.headerBar),
                children: [
                    (0, i.jsx)(_.Z.Icon, {
                        icon: o.QuestsIcon,
                        'aria-hidden': !0,
                        color: 'white',
                        className: C.questIcon
                    }),
                    (0, i.jsx)(p.Z, {
                        setSelectedFilter: a,
                        selectedFilter: n
                    })
                ]
            }),
            (0, i.jsxs)(o.ScrollerNone, {
                className: C.scroller,
                fade: !0,
                children: [
                    (0, i.jsx)(u.c, {
                        title: S.Z.Messages.QUESTS_HOME_HERO_TITLE,
                        description: S.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                        eyebrow: S.Z.Messages.QUESTS_HOME_HERO_EYEBROW,
                        backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
                        button: (0, i.jsxs)(o.Button, {
                            size: 'medium',
                            className: C.button,
                            onClick: N,
                            innerClassName: C.innerButton,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'always-white',
                                    className: C.externalLinkText,
                                    children: S.Z.Messages.LEARN_MORE
                                }),
                                (0, i.jsx)(o.LinkExternalSmallIcon, {
                                    className: C.icon,
                                    color: 'var(--white-500)'
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(g.Z, { quests: f })
                ]
            })
        ]
    }) : null;
};
