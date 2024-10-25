t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return X;
    },
    kA: function () {
        return K;
    },
    qR: function () {
        return $;
    }
}),
    t(47120),
    t(411104);
var i,
    a,
    l = t(200651),
    o = t(192379),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(110924),
    p = t(607070),
    _ = t(115130),
    C = t(317381),
    h = t(361213),
    f = t(542094),
    A = t(778569),
    E = t(182906),
    N = t(823531),
    v = t(367907),
    x = t(220082),
    I = t(70097),
    P = t(695346),
    g = t(973616),
    T = t(695103),
    L = t(880448),
    S = t(768581),
    b = t(541099),
    R = t(783097),
    M = t(695676),
    y = t(176412),
    j = t(226026),
    O = t(753972),
    Z = t(981631),
    H = t(217702),
    U = t(689938),
    D = t(127935),
    k = t(413097),
    B = t(969728);
function w(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: a, imageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, sectionOverallPosition: u, tracksImpression: p = !0, disabled: _ = !1 } = e,
        C = null !== (n = (0, m.Z)(_)) && void 0 !== n ? n : _;
    return (0, l.jsx)(V, {
        application: t,
        onClick: a,
        sectionName: c,
        resultsPosition: d,
        disabled: _,
        tracksImpression: p,
        look: i,
        sectionOverallPosition: u,
        children:
            'icon' === i
                ? (0, l.jsx)(W, {
                      application: t,
                      imageStyle: o,
                      children: s
                  })
                : (0, l.jsx)(F, {
                      application: t,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: C !== _,
                      children: s
                  })
    });
}
function V(e) {
    let { application: n, onClick: t, children: i, sectionName: a, resultsPosition: r, sectionOverallPosition: c, tracksImpression: m, disabled: p, containerStyle: _, look: C } = e,
        h = P.Sb.useSetting(),
        f = o.useCallback(
            (e) => {
                if ((0, R.BQ)(n) && h) {
                    let t = n instanceof g.Z ? n : g.Z.createFromServer(n);
                    (0, u.vq)(e, (e) =>
                        (0, l.jsx)(N.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [n, h]
        ),
        { name: A, description: E } = o.useMemo(() => (0, R.sl)(n, { fakeAppIconURL: k }), [n]),
        { trackItemImpressionRef: v } = (0, j.Z)({
            applicationId: n.id,
            sectionName: a,
            sectionPosition: r,
            sectionOverallPosition: c
        }),
        x = o.useMemo(() => {
            let e = p ? D.containerDisabled : D.container;
            return s()(
                e,
                {
                    [D.containerBorderRadius]: 'row' !== C,
                    [D.rowContainer]: 'row' === C,
                    [D.iconCard]: 'icon' === C
                },
                _
            );
        }, [_, p, C]);
    return p
        ? (0, l.jsx)('div', {
              ref: m ? v : void 0,
              className: x,
              children: i
          })
        : (0, l.jsx)(d.Clickable, {
              innerRef: m ? v : void 0,
              className: x,
              onClick: t,
              onContextMenu: f,
              'aria-label': U.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: A,
                  applicationDescription: E
              }),
              children: (0, l.jsx)(d.FocusBlock, { children: i })
          });
}
function W(e) {
    let { application: n, imageStyle: t, children: i } = e,
        { name: a, iconURL: r } = o.useMemo(() => (0, R.sl)(n, { fakeAppIconURL: k }), [n]);
    return (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: D.tooltipContent,
        text: a,
        children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)('div', {
                className: s()(D.iconContainer, t),
                ...n,
                children: [
                    (0, l.jsx)(O.Z, {
                        src: r,
                        className: D.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    i
                ]
            });
        }
    });
}
function F(e) {
    let { application: n, look: t, imageStyle: i, enableVideoBanner: a, disableBannerFadeIn: r, children: u } = e,
        { iconURL: m, name: p, description: C } = o.useMemo(() => (0, R.sl)(n, { fakeAppIconURL: k }), [n]),
        h = o.useMemo(() => (null == C ? null : (0, y.ae)(C)), [C]),
        f = (0, x.ZP)(m, ''),
        [A, E] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === a && E(!0);
        }, [a]),
        v = (0, R.lf)(n),
        I = 'large_banner' === t || 'medium_banner' === t,
        P = o.useCallback(() => E(!1), []),
        g = (0, c.e7)([_.Z, T.Z], () => _.Z.inDevModeForApplication(n.id) || T.Z.inTestModeForApplication(n.id), [n.id]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                onMouseEnter: N,
                onFocus: N,
                onMouseLeave: P,
                onBlur: P,
                className: s()(D.bannerImageContainer, {
                    [D.mediumBanner]: 'medium_banner' === t,
                    [D.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, l.jsx)('span', {
                        className: i,
                        children: (0, l.jsx)(z, {
                            application: n,
                            fallbackColor: f,
                            showVideo: A,
                            disableFadeIn: r
                        })
                    }),
                    I
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g || v
                                      ? (0, l.jsxs)('div', {
                                            className: D.bannerUpperRightContainer,
                                            children: [
                                                v &&
                                                    (0, l.jsx)('div', {
                                                        className: D.promotedLabelWrapperBanner,
                                                        children: (0, l.jsx)(d.Heading, {
                                                            variant: 'text-xxs/medium',
                                                            color: 'header-primary',
                                                            children: U.Z.Messages.APP_LAUNCHER_PROMOTED
                                                        })
                                                    }),
                                                g && (0, l.jsx)(Y, {})
                                            ]
                                        })
                                      : null,
                                  (0, l.jsx)('div', {
                                      className: D.bannerImageChildContainer,
                                      children: u
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, l.jsxs)('div', {
                className: s()(D.appDetailsContainer, { [D.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, l.jsx)(O.Z, {
                        src: m,
                        className: s()(D.icon, { [D.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: D.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: D.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: p
                                    }),
                                    !I && v
                                        ? (0, l.jsx)('div', {
                                              className: D.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: U.Z.Messages.APP_LAUNCHER_PROMOTED
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(G, { application: n })
                                ]
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: h
                            })
                        ]
                    }),
                    'row' === t ? (0, l.jsx)('div', { className: D.rowDivider }) : null
                ]
            })
        ]
    });
}
function Y() {
    return (0, l.jsx)(d.Tooltip, {
        text: U.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: (e) =>
            (0, l.jsx)('div', {
                className: D.devShelfBadge,
                ...e,
                children: (0, l.jsx)(L.Z, { className: D.devShelfIcon })
            })
    });
}
function G(e) {
    let { application: n } = e,
        t = (0, R.yJ)(n);
    if (null == t || !(0, R.BQ)(n)) return null;
    let i = (0, f.fD)(n, t);
    return null == i
        ? null
        : (0, l.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                  (0, l.jsx)('img', {
                      className: D.staffBadge,
                      alt: i,
                      src: B,
                      ...e
                  })
          });
}
function z(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
    if ((0, R.BQ)(n)) {
        if ((0, R.ye)(n))
            return (0, l.jsx)(q, {
                application: n,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != n.bot)
            return (0, l.jsx)(J, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(Q, {
        fallbackColor: t,
        disableFadeIn: a
    });
}
function q(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        a = (0, A.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, R.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, h.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(D.bannerImage, { [D.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: D.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(D.activityVideo, { [D.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, l.jsx)(I.Z, {
                              src: r,
                              mediaLayoutType: H.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(E.Z, {
                imageBackground: a,
                applicationName: n.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function J(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, S.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(Q, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(D.bannerImage, { [D.disableFadeIn]: i })
          });
}
function Q(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, l.jsx)('div', {
        className: s()(D.bannerImage, { [D.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function X(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
        { pushHistory: s } = (0, M.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, v.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: b.Z.entrypoint(),
                    location: r,
                    query: a
                }),
                s({
                    type: M.gc.APPLICATION,
                    application: n,
                    installOnDemand: l,
                    sectionName: t
                });
        },
        [n, l, r, s, a, i, t]
    );
}
function K(e) {
    let n = X(e);
    return (0, l.jsx)(w, {
        ...e,
        onClick: n
    });
}
function $(e) {
    let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, fetchesApplication: s = !0, ...u } = e;
    if (!(0, R.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let m = o.useId(),
        [p, _] = (0, c.Wu)([C.ZP], () => [C.ZP.isLaunchingActivity(), C.ZP.getLaunchState(t.id, n.id)]),
        h = null != _ && _.isLaunching && _.componentId === m,
        {
            onActivityItemSelected: A,
            activityAction: E,
            buttonColor: N,
            buttonText: v
        } = (0, y.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            launchingComponentId: m,
            fetchesApplication: s
        });
    if (E === f.JS.START || E === f.JS.JOIN)
        return r
            ? (0, l.jsx)(w, {
                  ...u,
                  sectionName: a,
                  application: t,
                  onClick: A,
                  disabled: p,
                  enableVideoBanner: !h,
                  children: h
                      ? (0, l.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: D.spinner
                        })
                      : null
              })
            : (0, l.jsx)(K, {
                  ...u,
                  sectionName: a,
                  application: t,
                  location: i
              });
    return (0, l.jsx)(w, {
        ...u,
        sectionName: a,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        imageStyle: D.darkenImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, l.jsx)('div', {
            className: D.voiceLauncherAppCardContainer,
            children: (0, l.jsx)(d.Button, {
                className: D.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: N,
                disabled: p,
                onClick: A,
                'aria-label': U.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: v,
                    applicationName: t.name
                }),
                submitting: h,
                children: v
            })
        })
    });
}
((a = i || (i = {})).ICON = 'icon'), (a.ROW = 'row'), (a.NO_BANNER = 'no_banner'), (a.MEDIUM_BANNER = 'medium_banner'), (a.LARGE_BANNER = 'large_banner');
