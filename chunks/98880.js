t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return O;
    },
    kA: function () {
        return j;
    },
    qR: function () {
        return b;
    }
}), t(411104);
var i, l, a = t(735250), r = t(470079), s = t(120356), o = t.n(s), c = t(481060), u = t(542094), d = t(778569), m = t(182906), _ = t(367907), p = t(220082), E = t(318661), A = t(792125), N = t(541099), h = t(783097), C = t(695676), f = t(176412), I = t(753972), v = t(981631), x = t(231338), P = t(689938), g = t(126152), T = t(413097);
function M(e) {
    let {
            application: n,
            look: t = 'large_banner',
            isPartner: i,
            onClick: l,
            bannerImageStyle: s,
            children: u
        } = e, {
            iconURL: d,
            name: m,
            description: _
        } = r.useMemo(() => (0, h.sl)(n, {
            botIconFirst: !0,
            fakeAppIconURL: T
        }), [n]), E = (0, p.ZP)(d, '');
    return 'icon' === t ? (0, a.jsx)(c.Clickable, {
        className: o()(g.container, g.iconCard),
        onClick: l,
        'aria-label': P.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: m,
            applicationDescription: _
        }),
        children: null != d && (0, a.jsx)(I.Z, {
            src: d,
            className: g.iconCard,
            'aria-hidden': !0
        })
    }) : (0, a.jsxs)(c.Clickable, {
        className: g.container,
        onClick: l,
        'aria-label': P.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: m,
            applicationDescription: _
        }),
        children: [
            (0, a.jsxs)('div', {
                className: o()(g.bannerImageContainer, {
                    [g.mediumBanner]: 'medium_banner' === t,
                    [g.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, a.jsx)('span', {
                        className: s,
                        children: (0, a.jsx)(L, {
                            application: n,
                            fallbackColor: E
                        })
                    }),
                    i && (0, a.jsx)('div', {
                        className: g.partnerLabelWrapper,
                        children: (0, a.jsx)(c.Text, {
                            className: (0, A.Q)(x.BR.DARK),
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: P.Z.Messages.APP_DIRECTORY_PARTNER
                        })
                    }),
                    'large_banner' === t || 'medium_banner' === t ? (0, a.jsx)('div', {
                        className: g.bannerImageChildContainer,
                        children: u
                    }) : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: g.appDetailsContainer,
                children: [
                    null != d && (0, a.jsx)(I.Z, {
                        src: d,
                        className: g.icon,
                        'aria-hidden': !0
                    }),
                    (0, a.jsxs)('div', {
                        className: g.appDetails,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: m
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: _
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let {
        application: n,
        fallbackColor: t
    } = e;
    if ((0, h.BQ)(n)) {
        if ((0, h.ye)({ application: n }))
            return (0, a.jsx)(R, { application: n });
        if (null != n.bot)
            return (0, a.jsx)(S, { bot: n.bot });
    }
    return (0, a.jsx)('div', {
        className: g.bannerImage,
        style: { backgroundColor: t }
    });
}
function R(e) {
    let {application: n} = e, t = (0, d.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        });
    return (0, a.jsx)(m.Z, {
        imageBackground: t,
        applicationName: n.name,
        imageClassName: g.bannerImage,
        imageNotFoundClassName: g.bannerImage
    });
}
function S(e) {
    let {bot: n} = e, t = (0, E.ZP)(n.id), i = r.useMemo(() => null == t ? void 0 : t.getBannerURL({
            canAnimate: !1,
            size: 600
        }), [t]);
    return (0, a.jsx)('img', {
        src: i,
        alt: '',
        className: g.bannerImage
    });
}
function O(e) {
    let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: l,
            installOnDemand: a
        } = e, {pushHistory: s} = (0, C.hH)();
    return r.useCallback(e => {
        e.stopPropagation(), (0, _.yw)(v.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
            application_id: n.id,
            section_name: t,
            search_results_position: i,
            source: N.Z.entrypoint(),
            location,
            query: l
        }), s({
            type: C.gc.APPLICATION,
            application: n,
            installOnDemand: a,
            sectionName: t
        });
    }, [
        n,
        a,
        s,
        l,
        i,
        t
    ]);
}
function j(e) {
    let n = O(e);
    return (0, a.jsx)(M, {
        ...e,
        onClick: n
    });
}
function b(e) {
    let {
        channel: n,
        application: t,
        location: i,
        sectionName: l,
        isOneClickCTA: r,
        ...s
    } = e;
    if (!(0, h.BQ)(t))
        throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let {
        onActivityItemSelected: o,
        activityAction: d,
        buttonColor: m,
        buttonText: _
    } = (0, f.P)(n, t, i, l);
    if (d === u.JS.START)
        return r ? (0, a.jsx)(M, {
            ...s,
            application: t,
            onClick: o
        }) : (0, a.jsx)(j, {
            ...s,
            application: t,
            location: i,
            sectionName: l
        });
    return (0, a.jsx)(M, {
        ...s,
        application: t,
        onClick: e => {
            e.stopPropagation();
        },
        bannerImageStyle: g.darkenBannerImage,
        children: (0, a.jsx)('div', {
            className: g.voiceLauncherAppCardContainer,
            children: (0, a.jsx)(c.Button, {
                className: g.voiceLauncherAppCardButton,
                type: 'submit',
                size: c.Button.Sizes.LARGE,
                color: m,
                disabled: !1,
                onClick: o,
                children: _
            })
        })
    });
}
(l = i || (i = {})).ICON = 'icon', l.NO_BANNER = 'no_banner', l.MEDIUM_BANNER = 'medium_banner', l.LARGE_BANNER = 'large_banner';
