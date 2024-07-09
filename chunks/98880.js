t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return Z;
    },
    kA: function () {
        return H;
    },
    qR: function () {
        return U;
    }
}), t(47120), t(411104);
var i, l, a = t(735250), r = t(470079), s = t(120356), o = t.n(s), c = t(481060), u = t(361213), d = t(542094), m = t(778569), p = t(182906), _ = t(367907), E = t(220082), A = t(318661), N = t(810090), h = t(792125), f = t(541099), C = t(783097), I = t(695676), v = t(176412), P = t(226026), x = t(753972), T = t(981631), g = t(217702), R = t(231338), M = t(689938), S = t(126152), L = t(413097);
function O(e) {
    let {
            application: n,
            look: t = 'large_banner',
            isPartner: i,
            onClick: l,
            bannerImageStyle: s,
            enableVideoBanner: u,
            children: d,
            sectionName: m,
            resultsPosition: p,
            tracksImpression: _ = !0
        } = e, {
            iconURL: A,
            name: N,
            description: f
        } = r.useMemo(() => (0, C.sl)(n, {
            botIconFirst: !0,
            fakeAppIconURL: L
        }), [n]), I = (0, E.ZP)(A, ''), {trackItemImpressionRef: v} = (0, P.Z)({
            applicationId: n.id,
            sectionName: m,
            sectionPosition: p
        }), [T, g] = r.useState(!1), O = r.useCallback(() => {
            !0 === u && g(!0);
        }, [u]), b = r.useCallback(() => g(!1), []);
    return 'icon' === t ? (0, a.jsx)(c.Clickable, {
        innerRef: _ ? e => v.current = e : void 0,
        className: o()(S.container, S.iconCard),
        onClick: l,
        'aria-label': M.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: N,
            applicationDescription: f
        }),
        children: null != A && (0, a.jsx)(x.Z, {
            src: A,
            className: S.iconCard,
            'aria-hidden': !0
        })
    }) : (0, a.jsxs)(c.Clickable, {
        innerRef: _ ? e => v.current = e : void 0,
        className: S.container,
        onClick: l,
        'aria-label': M.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: N,
            applicationDescription: f
        }),
        children: [
            (0, a.jsxs)('div', {
                onMouseEnter: O,
                onFocus: O,
                onMouseLeave: b,
                onBlur: b,
                className: o()(S.bannerImageContainer, {
                    [S.mediumBanner]: 'medium_banner' === t,
                    [S.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, a.jsx)('span', {
                        className: s,
                        children: (0, a.jsx)(j, {
                            application: n,
                            fallbackColor: I,
                            showVideo: T
                        })
                    }),
                    i && (0, a.jsx)('div', {
                        className: S.partnerLabelWrapper,
                        children: (0, a.jsx)(c.Text, {
                            className: (0, h.Q)(R.BR.DARK),
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: M.Z.Messages.APP_DIRECTORY_PARTNER
                        })
                    }),
                    'large_banner' === t || 'medium_banner' === t ? (0, a.jsx)('div', {
                        className: S.bannerImageChildContainer,
                        children: d
                    }) : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: S.appDetailsContainer,
                children: [
                    null != A && (0, a.jsx)(x.Z, {
                        src: A,
                        className: S.icon,
                        'aria-hidden': !0
                    }),
                    (0, a.jsxs)('div', {
                        className: S.appDetails,
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
function j(e) {
    let {
        application: n,
        fallbackColor: t,
        showVideo: i
    } = e;
    if ((0, C.BQ)(n)) {
        if ((0, C.ye)({ application: n }))
            return (0, a.jsx)(b, {
                application: n,
                showVideo: i
            });
        if (null != n.bot)
            return (0, a.jsx)(y, { bot: n.bot });
    }
    return (0, a.jsx)('div', {
        className: S.bannerImage,
        style: { backgroundColor: t }
    });
}
function b(e) {
    let {
            application: n,
            showVideo: t
        } = e, i = (0, m.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }), l = r.useMemo(() => {
            let e = (0, C.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]), [s, c] = r.useState(t);
    return r.useEffect(() => {
        t && c(!0);
    }, [t]), (0, a.jsxs)(a.Fragment, {
        children: [
            null != l && s ? (0, a.jsx)('div', {
                className: o()(S.activityVideo, { [S.videoFadeOut]: !t }),
                onAnimationEnd: () => t ? null : c(!1),
                children: (0, a.jsx)(N.Z, {
                    src: l,
                    mediaLayoutType: g.hV.MOSAIC,
                    loop: !0,
                    autoPlay: !0,
                    muted: !0
                })
            }) : null,
            (0, a.jsx)(p.Z, {
                imageBackground: i,
                applicationName: n.name,
                imageClassName: S.bannerImage,
                imageNotFoundClassName: S.bannerImage
            })
        ]
    });
}
function y(e) {
    let {bot: n} = e, t = (0, A.ZP)(n.id), i = r.useMemo(() => null == t ? void 0 : t.getBannerURL({
            canAnimate: !1,
            size: 600
        }), [t]);
    return (0, a.jsx)('img', {
        src: i,
        alt: '',
        className: S.bannerImage
    });
}
function Z(e) {
    let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: l,
            installOnDemand: a,
            location: s
        } = e, {pushHistory: o} = (0, I.hH)();
    return r.useCallback(e => {
        e.stopPropagation(), (0, _.yw)(T.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
            application_id: n.id,
            section_name: t,
            search_results_position: i,
            source: f.Z.entrypoint(),
            location: s,
            query: l
        }), o({
            type: I.gc.APPLICATION,
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
function H(e) {
    let n = Z(e);
    return (0, a.jsx)(O, {
        ...e,
        onClick: n,
        enableVideoBanner: !0
    });
}
function U(e) {
    let {
        channel: n,
        application: t,
        location: i,
        sectionName: l,
        isOneClickCTA: r,
        ...s
    } = e;
    if (!(0, C.BQ)(t))
        throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let {
        onActivityItemSelected: o,
        activityAction: u,
        buttonColor: m,
        buttonText: p
    } = (0, v.P)(n, t, i, l);
    if (u === d.JS.START)
        return r ? (0, a.jsx)(O, {
            ...s,
            sectionName: l,
            application: t,
            onClick: o,
            enableVideoBanner: !0
        }) : (0, a.jsx)(H, {
            ...s,
            sectionName: l,
            application: t,
            location: i
        });
    return (0, a.jsx)(O, {
        ...s,
        sectionName: l,
        application: t,
        onClick: e => {
            e.stopPropagation();
        },
        bannerImageStyle: S.darkenBannerImage,
        children: (0, a.jsx)('div', {
            className: S.voiceLauncherAppCardContainer,
            children: (0, a.jsx)(c.Button, {
                className: S.voiceLauncherAppCardButton,
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
