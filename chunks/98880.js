t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return G;
    },
    kA: function () {
        return X;
    },
    qR: function () {
        return q;
    }
}),
    t(47120),
    t(411104);
var i,
    a,
    l = t(735250),
    o = t(470079),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(110924),
    p = t(607070),
    _ = t(317381),
    C = t(361213),
    f = t(542094),
    h = t(778569),
    A = t(182906),
    E = t(823531),
    N = t(367907),
    v = t(220082),
    x = t(70097),
    I = t(695346),
    g = t(973616),
    P = t(768581),
    S = t(792125),
    L = t(541099),
    b = t(783097),
    R = t(695676),
    T = t(176412),
    M = t(226026),
    y = t(753972),
    j = t(981631),
    Z = t(217702),
    O = t(231338),
    U = t(689938),
    H = t(450139),
    D = t(413097);
function k(e) {
    var n;
    let { application: t, look: i = 'large_banner', isPartner: a, onClick: o, bannerImageStyle: r, enableVideoBanner: s = !0, children: c, sectionName: d, resultsPosition: u, tracksImpression: p = !0, disabled: _ = !1 } = e,
        C = null !== (n = (0, m.Z)(_)) && void 0 !== n ? n : _;
    return (0, l.jsx)(B, {
        application: t,
        onClick: o,
        sectionName: d,
        resultsPosition: u,
        disabled: _,
        tracksImpression: p,
        look: i,
        children:
            'icon' === i
                ? (0, l.jsx)(w, {
                      application: t,
                      children: c
                  })
                : (0, l.jsx)(V, {
                      application: t,
                      look: i,
                      isPartner: a,
                      bannerImageStyle: r,
                      enableVideoBanner: s,
                      disableBannerFadeIn: C !== _,
                      children: c
                  })
    });
}
function B(e) {
    let { application: n, onClick: t, children: i, sectionName: a, resultsPosition: r, tracksImpression: c, disabled: m, containerStyle: p, look: _ } = e,
        C = I.Sb.useSetting(),
        f = o.useCallback(
            (e) => {
                if ((0, b.BQ)(n) && C) {
                    let t = n instanceof g.Z ? n : g.Z.createFromServer(n);
                    (0, u.vq)(e, (e) =>
                        (0, l.jsx)(E.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [n, C]
        ),
        { name: h, description: A } = o.useMemo(() => (0, b.sl)(n, { fakeAppIconURL: D }), [n]),
        { trackItemImpressionRef: N } = (0, M.Z)({
            applicationId: n.id,
            sectionName: a,
            sectionPosition: r
        }),
        v = o.useMemo(() => {
            let e = m ? H.containerDisabled : H.container;
            return s()(
                e,
                {
                    [H.containerBorderRadius]: 'row' !== _,
                    [H.rowContainer]: 'row' === _,
                    [H.iconCard]: 'icon' === _
                },
                p
            );
        }, [p, m, _]);
    return m
        ? (0, l.jsx)('div', {
              ref: c ? N : void 0,
              className: v,
              children: i
          })
        : (0, l.jsx)(d.Clickable, {
              innerRef: c ? N : void 0,
              className: v,
              onClick: t,
              onContextMenu: f,
              'aria-label': U.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: h,
                  applicationDescription: A
              }),
              children: (0, l.jsx)(d.FocusBlock, { children: i })
          });
}
function w(e) {
    let { application: n, children: t } = e,
        { name: i, iconURL: a } = o.useMemo(() => (0, b.sl)(n, { fakeAppIconURL: D }), [n]);
    return (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: H.tooltipContent,
        text: i,
        children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)('div', {
                className: H.iconContainer,
                ...n,
                children: [
                    (0, l.jsx)(y.Z, {
                        src: a,
                        className: H.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    t
                ]
            });
        }
    });
}
function V(e) {
    let { application: n, look: t, isPartner: i, bannerImageStyle: a, enableVideoBanner: r, disableBannerFadeIn: c, children: u } = e,
        { iconURL: m, name: p, description: _ } = o.useMemo(() => (0, b.sl)(n, { fakeAppIconURL: D }), [n]),
        C = o.useMemo(() => (null == _ ? null : (0, T.ae)(_)), [_]),
        f = (0, v.ZP)(m, ''),
        [h, A] = o.useState(!1),
        E = o.useCallback(() => {
            !0 === r && A(!0);
        }, [r]),
        N = o.useCallback(() => A(!1), []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                onMouseEnter: E,
                onFocus: E,
                onMouseLeave: N,
                onBlur: N,
                className: s()(H.bannerImageContainer, {
                    [H.mediumBanner]: 'medium_banner' === t,
                    [H.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, l.jsx)('span', {
                        className: a,
                        children: (0, l.jsx)(W, {
                            application: n,
                            fallbackColor: f,
                            showVideo: h,
                            disableFadeIn: c
                        })
                    }),
                    i &&
                        (0, l.jsx)('div', {
                            className: H.partnerLabelWrapper,
                            children: (0, l.jsx)(d.Text, {
                                className: (0, S.Q)(O.BR.DARK),
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: U.Z.Messages.APP_DIRECTORY_PARTNER
                            })
                        }),
                    'large_banner' === t || 'medium_banner' === t
                        ? (0, l.jsx)('div', {
                              className: H.bannerImageChildContainer,
                              children: u
                          })
                        : null
                ]
            }),
            (0, l.jsxs)('div', {
                className: s()(H.appDetailsContainer, { [H.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, l.jsx)(y.Z, {
                        src: m,
                        className: s()(H.icon, { [H.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: H.appDetails,
                        children: [
                            (0, l.jsx)(d.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: p
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: C
                            })
                        ]
                    }),
                    'row' === t ? (0, l.jsx)('div', { className: H.rowDivider }) : null
                ]
            })
        ]
    });
}
function W(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
    if ((0, b.BQ)(n)) {
        if ((0, b.ye)({ application: n }))
            return (0, l.jsx)(F, {
                application: n,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != n.bot)
            return (0, l.jsx)(Y, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(z, {
        fallbackColor: t,
        disableFadeIn: a
    });
}
function F(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        a = (0, h.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, b.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, C.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(H.bannerImage, { [H.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: H.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(H.activityVideo, { [H.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, l.jsx)(x.Z, {
                              src: r,
                              mediaLayoutType: Z.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(A.Z, {
                imageBackground: a,
                applicationName: n.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function Y(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, P.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(z, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(H.bannerImage, { [H.disableFadeIn]: i })
          });
}
function z(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, l.jsx)('div', {
        className: s()(H.bannerImage, { [H.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function G(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
        { pushHistory: s } = (0, R.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, N.yw)(j.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: L.Z.entrypoint(),
                    location: r,
                    query: a
                }),
                s({
                    type: R.gc.APPLICATION,
                    application: n,
                    installOnDemand: l,
                    sectionName: t
                });
        },
        [n, l, r, s, a, i, t]
    );
}
function X(e) {
    let n = G(e);
    return (0, l.jsx)(k, {
        ...e,
        onClick: n
    });
}
function q(e) {
    let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, ...s } = e;
    if (!(0, b.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let u = o.useId(),
        [m, p] = (0, c.Wu)([_.ZP], () => [_.ZP.isLaunchingActivity(), _.ZP.getLaunchState(t.id, n.id)]),
        C = null != p && p.isLaunching && p.componentId === u,
        {
            onActivityItemSelected: h,
            activityAction: A,
            buttonColor: E,
            buttonText: N
        } = (0, T.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            launchingComponentId: u
        });
    if (A === f.JS.START)
        return r
            ? (0, l.jsx)(k, {
                  ...s,
                  sectionName: a,
                  application: t,
                  onClick: h,
                  disabled: m,
                  enableVideoBanner: !C,
                  children: C
                      ? (0, l.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: H.spinner
                        })
                      : null
              })
            : (0, l.jsx)(X, {
                  ...s,
                  sectionName: a,
                  application: t,
                  location: i
              });
    return (0, l.jsx)(k, {
        ...s,
        sectionName: a,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        bannerImageStyle: H.darkenBannerImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, l.jsx)('div', {
            className: H.voiceLauncherAppCardContainer,
            children: (0, l.jsx)(d.Button, {
                className: H.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: E,
                disabled: m,
                onClick: h,
                'aria-label': U.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: N,
                    applicationName: t.name
                }),
                submitting: C,
                children: N
            })
        })
    });
}
((a = i || (i = {})).ICON = 'icon'), (a.ROW = 'row'), (a.NO_BANNER = 'no_banner'), (a.MEDIUM_BANNER = 'medium_banner'), (a.LARGE_BANNER = 'large_banner');
