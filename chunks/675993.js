t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(120356),
    o = t.n(l),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(812236),
    p = t(70097),
    _ = t(240991),
    C = t(424602),
    h = t(327027),
    f = t(783097),
    A = t(695676),
    E = t(520315),
    N = t(29380),
    x = t(689938),
    v = t(655863),
    I = t(910212);
function g(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        _ = a.useMemo(() => {
            var e;
            return null !== (e = (0, f.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        h = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        E = null != l || null != s,
        { isSlideReady: N } = (0, A.hH)(),
        [I, g] = a.useState(!1);
    a.useEffect(() => {
        N && g(!0);
    }, [N]);
    let b = C.nS.useExperiment({ location: 'AppLauncherAppProfile' }, { autoTrackExposure: !1 }).enabled;
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsxs)('div', {
                className: v.profileAndVideoContainer,
                children: [
                    E
                        ? (0, i.jsxs)('div', {
                              className: v.videoContainer,
                              children: [
                                  I
                                      ? (0, i.jsx)(p.Z, {
                                            className: o()(v.videoCover, v.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: l,
                                            poster: s
                                        })
                                      : null,
                                  (0, i.jsx)('img', {
                                      className: v.videoCover,
                                      src: s,
                                      'aria-label': x.Z.Messages.IMAGE
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: E ? v.overviewContainerWithVideo : v.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(S, { application: t }),
                            (0, i.jsx)(L, { application: t }),
                            _.length > 0 ? (0, i.jsx)(T, { description: _ }) : null,
                            h
                                ? (0, i.jsx)('div', {
                                      className: v.developerShelfControlsContainer,
                                      children: (0, i.jsx)(u.W, {
                                          hideSearch: !0,
                                          className: v.developerShelfControls
                                      })
                                  })
                                : null,
                            (0, i.jsx)(R, {
                                channel: n,
                                application: t,
                                sectionName: d,
                                isDeveloperOfThisApp: h,
                                hasCommands: m
                            })
                        ]
                    })
                ]
            }),
            b ? (0, i.jsx)(P, { application: t }) : null
        ]
    });
}
function P(e) {
    let { application: n } = e,
        t = (0, f.Cb)(n),
        a = (0, f.Hu)(n);
    return t || a
        ? (0, i.jsxs)('div', {
              className: v.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: v.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: x.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: v.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: x.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function S(e) {
    var n;
    let { application: t } = e,
        a = (0, f.BQ)(t) ? t.name : null !== (n = (0, f.$d)(t)) && void 0 !== n ? n : '',
        l = (0, h.V)(t);
    return (0, i.jsxs)('div', {
        className: v.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: a
            }),
            l
                ? (0, i.jsx)('div', {
                      className: v.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: x.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function L(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, f.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, f.ye)(n)
        ? (0, i.jsxs)('div', {
              className: v.tagsContainer,
              children: [
                  (0, i.jsx)(b, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: v.tagContainer,
                              children: (0, i.jsx)(s.Text, {
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
function b(e) {
    var n;
    let { application: t } = e;
    if (!(0, f.ye)(t)) return null;
    let a = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: v.tagContainer,
        children: [
            (0, i.jsx)(s.GroupIcon, {
                size: 'xs',
                color: s.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(a)
            })
        ]
    });
}
function R(e) {
    let { channel: n, application: t, sectionName: a, hasCommands: l, isDeveloperOfThisApp: o } = e,
        r = (0, m.SY)(n, t.id);
    return (0, f.BQ)(t)
        ? null != r
            ? (0, i.jsx)('div', {
                  className: v.entrypointContainer,
                  children: (0, i.jsx)(N.Z, {
                      channel: n,
                      application: t,
                      sectionName: a,
                      primaryEntryPointCommand: r,
                      buttonSize: s.ButtonSizes.MAX
                  })
              })
            : o && !l && (0, f.ye)(t)
              ? (0, i.jsx)(s.HelpMessage, {
                    className: v.primaryEntryPointWarningMessage,
                    messageType: s.HelpMessageTypes.WARNING,
                    children: x.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_MISSING_WARNING.format()
                })
              : null
        : null;
}
function T(e) {
    let { description: n } = e,
        [t, l] = a.useState(!0);
    a.useLayoutEffect(() => l(!1), []);
    let o = a.useMemo(() => (0, _.YP)(n), [n]),
        {
            ref: r,
            lineHeight: c,
            lineCount: d
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
        u = a.useMemo(() => {
            if (null == c || null == d) return { key: 0 };
            let e = c * d;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 1 * c),
                maxHeightOverride: e
            };
        }, [d, c]),
        {
            ref: m,
            isTransitioning: p,
            onTransitionEnd: C
        } = (0, E.Z)({
            isExpanded: t,
            ...u
        }),
        h = t || p;
    return (0, i.jsxs)('div', {
        className: v.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: v.overflowHidden,
                onTransitionEnd: C,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: I.markup,
                    variant: 'text-sm/medium',
                    lineClamp: h ? void 0 : 1,
                    style: { maxHeight: h ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: v.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: h ? x.Z.Messages.APP_LAUNCHER_SHOW_LESS : x.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          h
                              ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
