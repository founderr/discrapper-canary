t.d(n, {
    Z: function () {
        return m;
    },
    k: function () {
        return a;
    }
});
var s,
    a,
    l = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    o = t(481060),
    c = t(565138),
    d = t(372769),
    u = t(857395),
    _ = t(131154),
    E = t(38981),
    x = t(142664);
function m(e) {
    let { guild: n, stageInstance: t, showGuildPopout: s, setShowGuildPopout: a, handleGuildNameClick: i, source: m, speakers: h, speakerCount: I, audienceCount: T, channelName: N } = e,
        C = n.id;
    return (0, l.jsx)('div', {
        className: x.contentContainer,
        children: (0, l.jsxs)('div', {
            className: x.headerContainer,
            children: [
                (0, l.jsxs)('div', {
                    className: x.guildInfoContainer,
                    children: [
                        (0, l.jsx)(u.Z, {
                            guildId: C,
                            shouldShow: s,
                            onRequestClose: () => a(!1),
                            children: () =>
                                (0, l.jsxs)(o.Clickable, {
                                    className: x.flexContainerRow,
                                    onClick: i,
                                    children: [
                                        (0, l.jsx)(c.Z, {
                                            guild: n,
                                            size: c.Z.Sizes.MINI,
                                            className: x.guildIcon
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: x.flexContainerRow,
                                            children: [
                                                (0, l.jsx)(o.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: r()(x.guildName, { [x.disabled]: null == i }),
                                                    children: n.name
                                                }),
                                                (0, l.jsx)(d.Z, { guild: n })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, l.jsxs)('div', {
                            className: x.rightJustifiedContent,
                            children: [
                                6 === m &&
                                    (0, l.jsx)('div', {
                                        className: x.featuredTag,
                                        children: (0, l.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            className: x.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, l.jsx)(E.Z, {
                                    count: T,
                                    className: x.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsx)(o.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: x.topicText,
                    children: t.topic
                }),
                (0, l.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: x.description,
                    variant: 'text-sm/normal',
                    children: t.description
                }),
                (0, l.jsx)(_.Z, {
                    guild: n,
                    speakers: h,
                    speakerCount: I,
                    className: x.speakers
                }),
                null != N &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('hr', { className: x.divider }),
                            (0, l.jsxs)('div', {
                                className: x.footer,
                                children: [
                                    (0, l.jsx)(o.StageIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: x.icon
                                    }),
                                    (0, l.jsx)(o.Text, {
                                        color: 'header-secondary',
                                        className: x.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: N
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
((s = a || (a = {}))[(s.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (s[(s.TRENDING = 1)] = 'TRENDING'), (s[(s.PERSONALIZED = 2)] = 'PERSONALIZED'), (s[(s.USER_GUILDS = 3)] = 'USER_GUILDS'), (s[(s.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (s[(s.INTRO_CARD = 5)] = 'INTRO_CARD'), (s[(s.FEATURED = 6)] = 'FEATURED');
