t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return Y;
    },
    kA: function () {
        return z;
    },
    qR: function () {
        return G;
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
    h = t(542094),
    f = t(778569),
    A = t(182906),
    E = t(823531),
    N = t(367907),
    x = t(220082),
    v = t(70097),
    I = t(695346),
    g = t(973616),
    P = t(768581),
    L = t(541099),
    S = t(783097),
    b = t(695676),
    R = t(176412),
    T = t(226026),
    M = t(753972),
    y = t(981631),
    j = t(217702),
    Z = t(689938),
    O = t(450139),
    H = t(413097);
function U(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: a, bannerImageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, tracksImpression: u = !0, disabled: p = !1 } = e,
        _ = null !== (n = (0, m.Z)(p)) && void 0 !== n ? n : p;
    return (0, l.jsx)(k, {
        application: t,
        onClick: a,
        sectionName: c,
        resultsPosition: d,
        disabled: p,
        tracksImpression: u,
        look: i,
        children:
            'icon' === i
                ? (0, l.jsx)(B, {
                      application: t,
                      children: s
                  })
                : (0, l.jsx)(D, {
                      application: t,
                      look: i,
                      bannerImageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: _ !== p,
                      children: s
                  })
    });
}
function k(e) {
    let { application: n, onClick: t, children: i, sectionName: a, resultsPosition: r, tracksImpression: c, disabled: m, containerStyle: p, look: _ } = e,
        C = I.Sb.useSetting(),
        h = o.useCallback(
            (e) => {
                if ((0, S.BQ)(n) && C) {
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
        { name: f, description: A } = o.useMemo(() => (0, S.sl)(n, { fakeAppIconURL: H }), [n]),
        { trackItemImpressionRef: N } = (0, T.Z)({
            applicationId: n.id,
            sectionName: a,
            sectionPosition: r
        }),
        x = o.useMemo(() => {
            let e = m ? O.containerDisabled : O.container;
            return s()(
                e,
                {
                    [O.containerBorderRadius]: 'row' !== _,
                    [O.rowContainer]: 'row' === _,
                    [O.iconCard]: 'icon' === _
                },
                p
            );
        }, [p, m, _]);
    return m
        ? (0, l.jsx)('div', {
              ref: c ? N : void 0,
              className: x,
              children: i
          })
        : (0, l.jsx)(d.Clickable, {
              innerRef: c ? N : void 0,
              className: x,
              onClick: t,
              onContextMenu: h,
              'aria-label': Z.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: f,
                  applicationDescription: A
              }),
              children: (0, l.jsx)(d.FocusBlock, { children: i })
          });
}
function B(e) {
    let { application: n, children: t } = e,
        { name: i, iconURL: a } = o.useMemo(() => (0, S.sl)(n, { fakeAppIconURL: H }), [n]);
    return (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: O.tooltipContent,
        text: i,
        children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)('div', {
                className: O.iconContainer,
                ...n,
                children: [
                    (0, l.jsx)(M.Z, {
                        src: a,
                        className: O.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    t
                ]
            });
        }
    });
}
function D(e) {
    let { application: n, look: t, bannerImageStyle: i, enableVideoBanner: a, disableBannerFadeIn: r, children: c } = e,
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, S.sl)(n, { fakeAppIconURL: H }), [n]),
        _ = o.useMemo(() => (null == p ? null : (0, R.ae)(p)), [p]),
        C = (0, x.ZP)(u, ''),
        [h, f] = o.useState(!1),
        A = o.useCallback(() => {
            !0 === a && f(!0);
        }, [a]),
        E = (0, S.lf)(n),
        N = 'large_banner' === t || 'medium_banner' === t,
        v = o.useCallback(() => f(!1), []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                onMouseEnter: A,
                onFocus: A,
                onMouseLeave: v,
                onBlur: v,
                className: s()(O.bannerImageContainer, {
                    [O.mediumBanner]: 'medium_banner' === t,
                    [O.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, l.jsx)('span', {
                        className: i,
                        children: (0, l.jsx)(w, {
                            application: n,
                            fallbackColor: C,
                            showVideo: h,
                            disableFadeIn: r
                        })
                    }),
                    N
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  E &&
                                      (0, l.jsx)('div', {
                                          className: O.promotedLabelWrapperBanner,
                                          children: (0, l.jsx)(d.Heading, {
                                              variant: 'text-xxs/medium',
                                              color: 'header-primary',
                                              children: Z.Z.Messages.APP_LAUNCHER_PROMOTED
                                          })
                                      }),
                                  (0, l.jsx)('div', {
                                      className: O.bannerImageChildContainer,
                                      children: c
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, l.jsxs)('div', {
                className: s()(O.appDetailsContainer, { [O.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, l.jsx)(M.Z, {
                        src: u,
                        className: s()(O.icon, { [O.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: O.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: O.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: m
                                    }),
                                    !N && E
                                        ? (0, l.jsx)('div', {
                                              className: O.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: Z.Z.Messages.APP_LAUNCHER_PROMOTED
                                              })
                                          })
                                        : null
                                ]
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: _
                            })
                        ]
                    }),
                    'row' === t ? (0, l.jsx)('div', { className: O.rowDivider }) : null
                ]
            })
        ]
    });
}
function w(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
    if ((0, S.BQ)(n)) {
        if ((0, S.ye)(n))
            return (0, l.jsx)(V, {
                application: n,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != n.bot)
            return (0, l.jsx)(W, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(F, {
        fallbackColor: t,
        disableFadeIn: a
    });
}
function V(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        a = (0, f.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, S.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, C.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(O.bannerImage, { [O.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: O.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(O.activityVideo, { [O.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, l.jsx)(v.Z, {
                              src: r,
                              mediaLayoutType: j.hV.MOSAIC,
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
function W(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, P.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(F, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(O.bannerImage, { [O.disableFadeIn]: i })
          });
}
function F(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, l.jsx)('div', {
        className: s()(O.bannerImage, { [O.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function Y(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
        { pushHistory: s } = (0, b.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, N.yw)(y.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: L.Z.entrypoint(),
                    location: r,
                    query: a
                }),
                s({
                    type: b.gc.APPLICATION,
                    application: n,
                    installOnDemand: l,
                    sectionName: t
                });
        },
        [n, l, r, s, a, i, t]
    );
}
function z(e) {
    let n = Y(e);
    return (0, l.jsx)(U, {
        ...e,
        onClick: n
    });
}
function G(e) {
    let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, ...s } = e;
    if (!(0, S.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let u = o.useId(),
        [m, p] = (0, c.Wu)([_.ZP], () => [_.ZP.isLaunchingActivity(), _.ZP.getLaunchState(t.id, n.id)]),
        C = null != p && p.isLaunching && p.componentId === u,
        {
            onActivityItemSelected: f,
            activityAction: A,
            buttonColor: E,
            buttonText: N
        } = (0, R.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            launchingComponentId: u
        });
    if (A === h.JS.START)
        return r
            ? (0, l.jsx)(U, {
                  ...s,
                  sectionName: a,
                  application: t,
                  onClick: f,
                  disabled: m,
                  enableVideoBanner: !C,
                  children: C
                      ? (0, l.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: O.spinner
                        })
                      : null
              })
            : (0, l.jsx)(z, {
                  ...s,
                  sectionName: a,
                  application: t,
                  location: i
              });
    return (0, l.jsx)(U, {
        ...s,
        sectionName: a,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        bannerImageStyle: O.darkenBannerImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, l.jsx)('div', {
            className: O.voiceLauncherAppCardContainer,
            children: (0, l.jsx)(d.Button, {
                className: O.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: E,
                disabled: m,
                onClick: f,
                'aria-label': Z.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
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
