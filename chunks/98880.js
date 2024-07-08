t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return j;
    },
    kA: function () {
        return b;
    },
    qR: function () {
        return y;
    }
}), t(411104);
var i, l, a = t(735250), r = t(470079), s = t(120356), o = t.n(s), c = t(481060), u = t(542094), d = t(778569), m = t(182906), p = t(367907), _ = t(220082), E = t(318661), A = t(792125), N = t(541099), h = t(783097), f = t(695676), C = t(176412), I = t(226026), v = t(753972), P = t(981631), x = t(231338), T = t(689938), g = t(126152), R = t(413097);
function M(e) {
    let {
            application: n,
            look: t = 'large_banner',
            isPartner: i,
            onClick: l,
            bannerImageStyle: s,
            children: u,
            sectionName: d,
            resultsPosition: m,
            tracksImpression: p = !0
        } = e, {
            iconURL: E,
            name: N,
            description: f
        } = r.useMemo(() => (0, h.sl)(n, {
            botIconFirst: !0,
            fakeAppIconURL: R
        }), [n]), C = (0, _.ZP)(E, ''), {trackItemImpressionRef: P} = (0, I.Z)({
            applicationId: n.id,
            sectionName: d,
            sectionPosition: m
        });
    return 'icon' === t ? (0, a.jsx)(c.Clickable, {
        innerRef: p ? e => P.current = e : void 0,
        className: o()(g.container, g.iconCard),
        onClick: l,
        'aria-label': T.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: N,
            applicationDescription: f
        }),
        children: null != E && (0, a.jsx)(v.Z, {
            src: E,
            className: g.iconCard,
            'aria-hidden': !0
        })
    }) : (0, a.jsxs)(c.Clickable, {
        innerRef: p ? e => P.current = e : void 0,
        className: g.container,
        onClick: l,
        'aria-label': T.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: N,
            applicationDescription: f
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
                            fallbackColor: C
                        })
                    }),
                    i && (0, a.jsx)('div', {
                        className: g.partnerLabelWrapper,
                        children: (0, a.jsx)(c.Text, {
                            className: (0, A.Q)(x.BR.DARK),
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: T.Z.Messages.APP_DIRECTORY_PARTNER
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
                    null != E && (0, a.jsx)(v.Z, {
                        src: E,
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
                                children: N
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: f
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
            return (0, a.jsx)(S, { application: n });
        if (null != n.bot)
            return (0, a.jsx)(O, { bot: n.bot });
    }
    return (0, a.jsx)('div', {
        className: g.bannerImage,
        style: { backgroundColor: t }
    });
}
function S(e) {
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
function O(e) {
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
function j(e) {
    let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: l,
            installOnDemand: a,
            location: s
        } = e, {pushHistory: o} = (0, f.hH)();
    return r.useCallback(e => {
        e.stopPropagation(), (0, p.yw)(P.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
            application_id: n.id,
            section_name: t,
            search_results_position: i,
            source: N.Z.entrypoint(),
            location: s,
            query: l
        }), o({
            type: f.gc.APPLICATION,
            application: n,
            installOnDemand: a,
            sectionName: t
        });
    }, [
        n,
        a,
        s,
        o,
        l,
        i,
        t
    ]);
}
function b(e) {
    let n = j(e);
    return (0, a.jsx)(M, {
        ...e,
        onClick: n
    });
}
function y(e) {
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
        buttonText: p
    } = (0, C.P)(n, t, i, l);
    if (d === u.JS.START)
        return r ? (0, a.jsx)(M, {
            ...s,
            sectionName: l,
            application: t,
            onClick: o
        }) : (0, a.jsx)(b, {
            ...s,
            sectionName: l,
            application: t,
            location: i
        });
    return (0, a.jsx)(M, {
        ...s,
        sectionName: l,
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
                children: p
            })
        })
    });
}
(l = i || (i = {})).ICON = 'icon', l.NO_BANNER = 'no_banner', l.MEDIUM_BANNER = 'medium_banner', l.LARGE_BANNER = 'large_banner';
