t.d(n, {
    Z: function () {
        return b;
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
    E = t(88410),
    A = t(327027),
    N = t(783097),
    x = t(695676),
    v = t(520315),
    I = t(29380),
    g = t(689938),
    P = t(655863),
    L = t(910212);
function b(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: r, sectionName: s } = e,
        d = a.useMemo(() => {
            var e;
            return null !== (e = (0, N.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled()),
        p = null != l || null != r,
        { isSlideReady: f } = (0, x.hH)(),
        [E, A] = a.useState(!1);
    a.useEffect(() => {
        f && A(!0);
    }, [f]);
    let v = h.nS.useExperiment({ location: 'AppLauncherAppProfile' }, { autoTrackExposure: !1 }).enabled;
    return (0, i.jsxs)('div', {
        className: P.container,
        children: [
            (0, i.jsxs)('div', {
                className: P.profileAndVideoContainer,
                children: [
                    p
                        ? (0, i.jsxs)('div', {
                              className: P.videoContainer,
                              children: [
                                  E
                                      ? (0, i.jsx)(C.Z, {
                                            className: o()(P.videoCover, P.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: l,
                                            poster: r
                                        })
                                      : null,
                                  (0, i.jsx)('img', {
                                      className: P.videoCover,
                                      src: r,
                                      'aria-label': g.Z.Messages.IMAGE
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: p ? P.overviewContainerWithVideo : P.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(R, { application: t }),
                            (0, i.jsx)(T, { application: t }),
                            d.length > 0 ? (0, i.jsx)(j, { description: d }) : null,
                            u
                                ? (0, i.jsx)('div', {
                                      className: P.developerShelfControlsContainer,
                                      children: (0, i.jsx)(_.W, {
                                          hideSearch: !0,
                                          className: P.developerShelfControls
                                      })
                                  })
                                : null,
                            (0, i.jsx)(y, {
                                channel: n,
                                application: t,
                                sectionName: s
                            })
                        ]
                    })
                ]
            }),
            v ? (0, i.jsx)(S, { application: t }) : null
        ]
    });
}
function S(e) {
    let { application: n } = e,
        t = (0, N.Cb)(n),
        a = (0, N.Hu)(n);
    return t || a
        ? (0, i.jsxs)('div', {
              className: P.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(u.ShopIcon, {
                                    size: 'sm',
                                    color: u.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(d.x, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: g.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(u.BillIcon, {
                                    size: 'sm',
                                    color: u.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(d.x, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: g.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function R(e) {
    var n;
    let { application: t } = e,
        a = (0, N.BQ)(t) ? t.name : null !== (n = (0, N.$d)(t)) && void 0 !== n ? n : '',
        l = (0, A.V)(t);
    return (0, i.jsxs)('div', {
        className: P.titleContainer,
        children: [
            (0, i.jsx)(u.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: a
            }),
            l
                ? (0, i.jsx)('div', {
                      className: P.partnerLabelContainer,
                      children: (0, i.jsx)(d.x, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: g.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function T(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, N.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, N.ye)(n)
        ? (0, i.jsxs)('div', {
              className: P.tagsContainer,
              children: [
                  (0, i.jsx)(M, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: P.tagContainer,
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
function M(e) {
    var n;
    let { application: t } = e;
    if (!(0, N.ye)(t)) return null;
    let a = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: P.tagContainer,
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
function y(e) {
    let { channel: n, application: t, sectionName: a } = e,
        l = (0, E.Z)({
            applicationId: t.id,
            channel: n
        });
    return (0, N.BQ)(t) && (0, N.ye)(t)
        ? (0, i.jsx)('div', {
              className: P.entrypointContainer,
              children:
                  null != t
                      ? (0, i.jsx)(I.Z, {
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
function j(e) {
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
            onTransitionEnd: E
        } = (0, v.Z)({
            isExpanded: t,
            ..._
        }),
        A = t || h;
    return (0, i.jsxs)('div', {
        className: P.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: C,
                className: P.overflowHidden,
                onTransitionEnd: E,
                children: (0, i.jsx)(d.x, {
                    ref: c,
                    className: L.markup,
                    variant: 'text-sm/medium',
                    lineClamp: A ? void 0 : 1,
                    style: { maxHeight: A ? void 0 : _.minHeightOverride },
                    children: o
                })
            }),
            null != p && p > 1
                ? (0, i.jsxs)(u.Clickable, {
                      className: P.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(d.x, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: A ? g.Z.Messages.APP_LAUNCHER_SHOW_LESS : g.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          A
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
