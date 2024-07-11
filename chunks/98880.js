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
var i, l, r = t(735250), a = t(470079), s = t(120356), o = t.n(s), c = t(481060), u = t(361213), d = t(542094), m = t(778569), p = t(182906), _ = t(367907), E = t(220082), h = t(318661), A = t(810090), N = t(792125), f = t(541099), C = t(783097), v = t(695676), I = t(176412), P = t(226026), x = t(753972), T = t(981631), g = t(217702), R = t(231338), S = t(689938), M = t(126152), L = t(413097);
function j(e) {
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
            iconURL: h,
            name: A,
            description: f
        } = a.useMemo(() => (0, C.sl)(n, {
            botIconFirst: !0,
            fakeAppIconURL: L
        }), [n]), v = (0, E.ZP)(h, ''), {trackItemImpressionRef: I} = (0, P.Z)({
            applicationId: n.id,
            sectionName: m,
            sectionPosition: p
        }), [T, g] = a.useState(!1), j = a.useCallback(() => {
            !0 === u && g(!0);
        }, [u]), y = a.useCallback(() => g(!1), []);
    return 'icon' === t ? (0, r.jsx)(c.Clickable, {
        innerRef: _ ? e => I.current = e : void 0,
        className: o()(M.container, M.iconCard),
        onClick: l,
        'aria-label': S.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: A,
            applicationDescription: f
        }),
        children: (0, r.jsx)(x.Z, {
            src: h,
            className: M.iconCard,
            'aria-hidden': !0,
            rendersPlaceholder: !0
        })
    }) : (0, r.jsxs)(c.Clickable, {
        innerRef: _ ? e => I.current = e : void 0,
        className: M.container,
        onClick: l,
        'aria-label': S.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: A,
            applicationDescription: f
        }),
        children: [
            (0, r.jsxs)('div', {
                onMouseEnter: j,
                onFocus: j,
                onMouseLeave: y,
                onBlur: y,
                className: o()(M.bannerImageContainer, {
                    [M.mediumBanner]: 'medium_banner' === t,
                    [M.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, r.jsx)('span', {
                        className: s,
                        children: (0, r.jsx)(O, {
                            application: n,
                            fallbackColor: v,
                            showVideo: T
                        })
                    }),
                    i && (0, r.jsx)('div', {
                        className: M.partnerLabelWrapper,
                        children: (0, r.jsx)(c.Text, {
                            className: (0, N.Q)(R.BR.DARK),
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: S.Z.Messages.APP_DIRECTORY_PARTNER
                        })
                    }),
                    'large_banner' === t || 'medium_banner' === t ? (0, r.jsx)('div', {
                        className: M.bannerImageChildContainer,
                        children: d
                    }) : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: M.appDetailsContainer,
                children: [
                    (0, r.jsx)(x.Z, {
                        src: h,
                        className: M.icon,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: M.appDetails,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: A
                            }),
                            (0, r.jsx)(c.Text, {
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
function O(e) {
    let {
        application: n,
        fallbackColor: t,
        showVideo: i
    } = e;
    if ((0, C.BQ)(n)) {
        if ((0, C.ye)({ application: n }))
            return (0, r.jsx)(y, {
                application: n,
                showVideo: i
            });
        if (null != n.bot)
            return (0, r.jsx)(b, { bot: n.bot });
    }
    return (0, r.jsx)('div', {
        className: M.bannerImage,
        style: { backgroundColor: t }
    });
}
function y(e) {
    let {
            application: n,
            showVideo: t
        } = e, i = (0, m.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }), l = a.useMemo(() => {
            let e = (0, C.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]), [s, c] = a.useState(t);
    return a.useEffect(() => {
        t && c(!0);
    }, [t]), (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && s ? (0, r.jsx)('div', {
                className: o()(M.activityVideo, { [M.videoFadeOut]: !t }),
                onAnimationEnd: () => t ? null : c(!1),
                children: (0, r.jsx)(A.Z, {
                    src: l,
                    mediaLayoutType: g.hV.MOSAIC,
                    loop: !0,
                    autoPlay: !0,
                    muted: !0
                })
            }) : null,
            (0, r.jsx)(p.Z, {
                imageBackground: i,
                applicationName: n.name,
                imageClassName: M.bannerImage,
                imageNotFoundClassName: M.bannerImage
            })
        ]
    });
}
function b(e) {
    let {bot: n} = e, t = (0, h.ZP)(n.id), i = a.useMemo(() => null == t ? void 0 : t.getBannerURL({
            canAnimate: !1,
            size: 600
        }), [t]);
    return (0, r.jsx)('img', {
        src: i,
        alt: '',
        className: M.bannerImage
    });
}
function Z(e) {
    let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: l,
            installOnDemand: r,
            location: s
        } = e, {pushHistory: o} = (0, v.hH)();
    return a.useCallback(e => {
        e.stopPropagation(), (0, _.yw)(T.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
            application_id: n.id,
            section_name: t,
            search_results_position: i,
            source: f.Z.entrypoint(),
            location: s,
            query: l
        }), o({
            type: v.gc.APPLICATION,
            application: n,
            installOnDemand: r,
            sectionName: t
        });
    }, [
        n,
        r,
        s,
        o,
        l,
        i,
        t
    ]);
}
function H(e) {
    let n = Z(e);
    return (0, r.jsx)(j, {
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
        isOneClickCTA: a,
        ...s
    } = e;
    if (!(0, C.BQ)(t))
        throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let {
        onActivityItemSelected: o,
        activityAction: u,
        buttonColor: m,
        buttonText: p
    } = (0, I.P)(n, t, i, l);
    if (u === d.JS.START)
        return a ? (0, r.jsx)(j, {
            ...s,
            sectionName: l,
            application: t,
            onClick: o,
            enableVideoBanner: !0
        }) : (0, r.jsx)(H, {
            ...s,
            sectionName: l,
            application: t,
            location: i
        });
    return (0, r.jsx)(j, {
        ...s,
        sectionName: l,
        application: t,
        onClick: e => {
            e.stopPropagation();
        },
        bannerImageStyle: M.darkenBannerImage,
        children: (0, r.jsx)('div', {
            className: M.voiceLauncherAppCardContainer,
            children: (0, r.jsx)(c.Button, {
                className: M.voiceLauncherAppCardButton,
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
