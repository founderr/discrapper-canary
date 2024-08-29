t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return z;
    },
    kA: function () {
        return G;
    },
    qR: function () {
        return X;
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
    x = t(367907),
    v = t(220082),
    N = t(70097),
    I = t(695346),
    g = t(973616),
    S = t(768581),
    P = t(541099),
    b = t(573761),
    L = t(783097),
    R = t(695676),
    T = t(176412),
    M = t(226026),
    j = t(753972),
    y = t(981631),
    Z = t(217702),
    O = t(689938),
    H = t(450139),
    U = t(413097);
function k(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: a, bannerImageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, tracksImpression: u = !0, disabled: p = !1 } = e,
        _ = null !== (n = (0, m.Z)(p)) && void 0 !== n ? n : p;
    return (0, l.jsx)(D, {
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
                : (0, l.jsx)(w, {
                      application: t,
                      look: i,
                      bannerImageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: _ !== p,
                      children: s
                  })
    });
}
function D(e) {
    let { application: n, onClick: t, children: i, sectionName: a, resultsPosition: r, tracksImpression: c, disabled: m, containerStyle: p, look: _ } = e,
        C = I.Sb.useSetting(),
        f = o.useCallback(
            (e) => {
                if ((0, L.BQ)(n) && C) {
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
        { name: h, description: A } = o.useMemo(() => (0, L.sl)(n, { fakeAppIconURL: U }), [n]),
        { trackItemImpressionRef: x } = (0, M.Z)({
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
              ref: c ? x : void 0,
              className: v,
              children: i
          })
        : (0, l.jsx)(d.Clickable, {
              innerRef: c ? x : void 0,
              className: v,
              onClick: t,
              onContextMenu: f,
              'aria-label': O.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: h,
                  applicationDescription: A
              }),
              children: (0, l.jsx)(d.FocusBlock, { children: i })
          });
}
function B(e) {
    let { application: n, children: t } = e,
        { name: i, iconURL: a } = o.useMemo(() => (0, L.sl)(n, { fakeAppIconURL: U }), [n]);
    return (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: H.tooltipContent,
        text: i,
        children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)('div', {
                className: H.iconContainer,
                ...n,
                children: [
                    (0, l.jsx)(j.Z, {
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
function w(e) {
    let { application: n, look: t, bannerImageStyle: i, enableVideoBanner: a, disableBannerFadeIn: r, children: c } = e,
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, L.sl)(n, { fakeAppIconURL: U }), [n]),
        _ = o.useMemo(() => (null == p ? null : (0, T.ae)(p)), [p]),
        C = (0, v.ZP)(u, ''),
        [f, h] = o.useState(!1),
        A = o.useCallback(() => {
            !0 === a && h(!0);
        }, [a]),
        E = (0, b.R)(n),
        x = 'large_banner' === t || 'medium_banner' === t,
        N = o.useCallback(() => h(!1), []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                onMouseEnter: A,
                onFocus: A,
                onMouseLeave: N,
                onBlur: N,
                className: s()(H.bannerImageContainer, {
                    [H.mediumBanner]: 'medium_banner' === t,
                    [H.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, l.jsx)('span', {
                        className: i,
                        children: (0, l.jsx)(V, {
                            application: n,
                            fallbackColor: C,
                            showVideo: f,
                            disableFadeIn: r
                        })
                    }),
                    x
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  E &&
                                      (0, l.jsx)('div', {
                                          className: H.promotedLabelWrapperBanner,
                                          children: (0, l.jsx)(d.Heading, {
                                              variant: 'text-xxs/medium',
                                              color: 'header-primary',
                                              children: O.Z.Messages.APP_LAUNCHER_PROMOTED
                                          })
                                      }),
                                  (0, l.jsx)('div', {
                                      className: H.bannerImageChildContainer,
                                      children: c
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, l.jsxs)('div', {
                className: s()(H.appDetailsContainer, { [H.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, l.jsx)(j.Z, {
                        src: u,
                        className: s()(H.icon, { [H.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: H.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: H.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: m
                                    }),
                                    !x && E
                                        ? (0, l.jsx)('div', {
                                              className: H.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: O.Z.Messages.APP_LAUNCHER_PROMOTED
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
                    'row' === t ? (0, l.jsx)('div', { className: H.rowDivider }) : null
                ]
            })
        ]
    });
}
function V(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
    if ((0, L.BQ)(n)) {
        if ((0, L.ye)(n))
            return (0, l.jsx)(W, {
                application: n,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != n.bot)
            return (0, l.jsx)(F, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(Y, {
        fallbackColor: t,
        disableFadeIn: a
    });
}
function W(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        a = (0, h.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, L.yJ)(n);
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
                          children: (0, l.jsx)(N.Z, {
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
function F(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, S.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(Y, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(H.bannerImage, { [H.disableFadeIn]: i })
          });
}
function Y(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, l.jsx)('div', {
        className: s()(H.bannerImage, { [H.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function z(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
        { pushHistory: s } = (0, R.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, x.yw)(y.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: P.Z.entrypoint(),
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
function G(e) {
    let n = z(e);
    return (0, l.jsx)(k, {
        ...e,
        onClick: n
    });
}
function X(e) {
    let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, ...s } = e;
    if (!(0, L.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let u = o.useId(),
        [m, p] = (0, c.Wu)([_.ZP], () => [_.ZP.isLaunchingActivity(), _.ZP.getLaunchState(t.id, n.id)]),
        C = null != p && p.isLaunching && p.componentId === u,
        {
            onActivityItemSelected: h,
            activityAction: A,
            buttonColor: E,
            buttonText: x
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
            : (0, l.jsx)(G, {
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
                'aria-label': O.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: x,
                    applicationName: t.name
                }),
                submitting: C,
                children: x
            })
        })
    });
}
((a = i || (i = {})).ICON = 'icon'), (a.ROW = 'row'), (a.NO_BANNER = 'no_banner'), (a.MEDIUM_BANNER = 'medium_banner'), (a.LARGE_BANNER = 'large_banner');
