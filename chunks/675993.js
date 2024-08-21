t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(120356),
    o = t.n(l),
    r = t(581051),
    s = t(353381),
    c = t(442837),
    d = t(993365),
    u = t(481060),
    m = t(115130),
    p = t(147865),
    _ = t(427996),
    C = t(70097),
    f = t(240991),
    h = t(424602),
    A = t(88410),
    E = t(783097),
    N = t(695676),
    v = t(520315),
    x = t(29380),
    I = t(689938),
    g = t(655863),
    P = t(910212);
function S(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: r, sectionName: s } = e,
        d = a.useMemo(() => {
            var e;
            return null !== (e = (0, E.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled()),
        p = null != l || null != r,
        { isSlideReady: f } = (0, N.hH)(),
        [A, v] = a.useState(!1);
    a.useEffect(() => {
        f && v(!0);
    }, [f]);
    let x = h.nS.useExperiment({ location: 'AppLauncherAppProfile' }, { autoTrackExposure: !1 }).enabled;
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)('div', {
                className: g.profileAndVideoContainer,
                children: [
                    p
                        ? (0, i.jsxs)('div', {
                              className: g.videoContainer,
                              children: [
                                  A
                                      ? (0, i.jsx)(C.Z, {
                                            className: o()(g.videoCover, g.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: l,
                                            poster: r
                                        })
                                      : null,
                                  (0, i.jsx)('img', {
                                      className: g.videoCover,
                                      src: r,
                                      'aria-label': I.Z.Messages.IMAGE
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: p ? g.overviewContainerWithVideo : g.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(b, { application: t }),
                            (0, i.jsx)(R, { application: t }),
                            d.length > 0 ? (0, i.jsx)(y, { description: d }) : null,
                            u
                                ? (0, i.jsx)('div', {
                                      className: g.developerShelfControlsContainer,
                                      children: (0, i.jsx)(_.W, {
                                          hideSearch: !0,
                                          className: g.developerShelfControls
                                      })
                                  })
                                : null,
                            (0, i.jsx)(M, {
                                channel: n,
                                application: t,
                                sectionName: s
                            })
                        ]
                    })
                ]
            }),
            x ? (0, i.jsx)(L, { application: t }) : null
        ]
    });
}
function L(e) {
    let { application: n } = e,
        t = (0, E.Cb)(n),
        a = (0, E.Hu)(n);
    return t || a
        ? (0, i.jsxs)('div', {
              className: g.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: g.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(u.ShopIcon, {
                                    size: 'sm',
                                    color: u.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(d.x, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: I.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: g.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(u.BillIcon, {
                                    size: 'sm',
                                    color: u.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(d.x, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: I.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function b(e) {
    var n;
    let { application: t } = e,
        a = (0, E.BQ)(t) ? t.name : null !== (n = (0, E.$d)(t)) && void 0 !== n ? n : '';
    return (0, i.jsx)('div', {
        className: g.titleContainer,
        children: (0, i.jsx)('div', {
            className: g.titleInnerContainer,
            children: (0, i.jsx)(u.Heading, {
                variant: 'heading-xl/extrabold',
                children: a
            })
        })
    });
}
function R(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, E.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, E.ye)({ application: n })
        ? (0, i.jsxs)('div', {
              className: g.tagsContainer,
              children: [
                  (0, i.jsx)(T, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: g.tagContainer,
                              children: (0, i.jsx)(d.x, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: e
                              })
                          },
                          e + n
                      )
                  )
              ]
          })
        : null;
}
function T(e) {
    var n;
    let { application: t } = e;
    if (!(0, E.ye)({ application: t })) return null;
    let a = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: g.tagContainer,
        children: [
            (0, i.jsx)(u.GroupIcon, {
                size: 'xs',
                color: u.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(d.x, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, p.lY)(a)
            })
        ]
    });
}
function M(e) {
    let { channel: n, application: t, sectionName: a } = e,
        l = (0, A.Z)({
            applicationId: t.id,
            channel: n
        });
    return (0, E.BQ)(t) && (0, E.ye)({ application: t })
        ? (0, i.jsx)('div', {
              className: g.entrypointContainer,
              children:
                  null != t
                      ? (0, i.jsx)(x.Z, {
                            channel: n,
                            application: t,
                            sectionName: a,
                            commandName: l,
                            buttonSize: u.ButtonSizes.MAX
                        })
                      : null
          })
        : null;
}
function y(e) {
    let { description: n } = e,
        [t, l] = a.useState(!0);
    a.useLayoutEffect(() => l(!1), []);
    let o = a.useMemo(() => (0, f.YP)(n), [n]),
        {
            ref: c,
            lineHeight: m,
            lineCount: p
        } = (function () {
            let e = a.useRef(null),
                [n, t] = a.useState(null),
                [i, l] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    let n = e.current;
                    if (null === n || 0 === n.clientHeight) return;
                    let i = parseInt(getComputedStyle(n).lineHeight);
                    if (!isNaN(i)) t(i), l(Math.floor(n.clientHeight / i));
                }, []),
                {
                    ref: e,
                    lineHeight: n,
                    lineCount: i
                }
            );
        })(),
        _ = a.useMemo(() => {
            if (null == m || null == p) return { key: 0 };
            let e = m * p;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 1 * m),
                maxHeightOverride: e
            };
        }, [p, m]),
        {
            ref: C,
            isTransitioning: h,
            onTransitionEnd: A
        } = (0, v.Z)({
            isExpanded: t,
            ..._
        }),
        E = t || h;
    return (0, i.jsxs)('div', {
        className: g.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: C,
                className: g.overflowHidden,
                onTransitionEnd: A,
                children: (0, i.jsx)(d.x, {
                    ref: c,
                    className: P.markup,
                    variant: 'text-sm/medium',
                    lineClamp: E ? void 0 : 1,
                    style: { maxHeight: E ? void 0 : _.minHeightOverride },
                    children: o
                })
            }),
            null != p && p > 1
                ? (0, i.jsxs)(u.Clickable, {
                      className: g.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(d.x, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: E ? I.Z.Messages.APP_LAUNCHER_SHOW_LESS : I.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          E
                              ? (0, i.jsx)(s.u, {
                                    size: 'sm',
                                    color: u.tokens.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(r.C, {
                                    size: 'sm',
                                    color: u.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
