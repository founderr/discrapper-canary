t.d(n, {
    Z: function () {
        return T;
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
    m = t(706302),
    p = t(812236),
    _ = t(835473),
    C = t(70097),
    h = t(240991),
    f = t(973616),
    A = t(783097),
    E = t(695676),
    N = t(520315),
    v = t(29380),
    x = t(783685),
    I = t(689938),
    P = t(131242),
    g = t(554034);
function T(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = a.useMemo(() => {
            var e;
            return null !== (e = (0, A.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        _ = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        h = null != l,
        { isSlideReady: f } = (0, E.hH)(),
        [N, v] = a.useState(!1);
    return (
        a.useEffect(() => {
            f && v(!0);
        }, [f]),
        (0, i.jsxs)('div', {
            className: P.container,
            children: [
                (0, i.jsxs)('div', {
                    className: P.profileAndVideoContainer,
                    children: [
                        h
                            ? (0, i.jsxs)('div', {
                                  className: P.videoContainer,
                                  children: [
                                      N
                                          ? (0, i.jsx)(C.Z, {
                                                className: o()(P.videoCover, P.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: l,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: P.videoCover,
                                          src: s,
                                          'aria-label': I.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: h ? P.overviewContainerWithVideo : P.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(b, { application: t }),
                                (0, i.jsx)(S, { application: t }),
                                p.length > 0 ? (0, i.jsx)(j, { description: p }) : null,
                                _
                                    ? (0, i.jsx)('div', {
                                          className: P.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: P.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(M, {
                                    channel: n,
                                    application: t,
                                    sectionName: d,
                                    isDeveloperOfThisApp: _,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(L, { application: t })
            ]
        })
    );
}
function L(e) {
    let { application: n } = e,
        t = (0, A.Cb)(n),
        a = (0, A.Hu)(n);
    return t || a
        ? (0, i.jsxs)('div', {
              className: P.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: I.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
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
        a = (0, A.BQ)(t) ? t.name : null !== (n = (0, A.$d)(t)) && void 0 !== n ? n : '',
        l = (0, A.vJ)(t);
    return (0, i.jsxs)('div', {
        className: P.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: a
            }),
            l
                ? (0, i.jsx)('div', {
                      className: P.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: I.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function S(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, A.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, A.ye)(n)
        ? (0, i.jsxs)('div', {
              className: P.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: P.tagContainer,
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
function R(e) {
    var n;
    let { application: t } = e;
    if (!(0, A.ye)(t)) return null;
    let a = null !== (n = (0, A.BQ)(t) ? (t instanceof f.Z ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: P.tagContainer,
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
function M(e) {
    var n;
    let { channel: t, application: a, sectionName: l, hasCommands: o, isDeveloperOfThisApp: r } = e,
        c = (0, p.Fs)(t, a.id),
        d = (0, _.q)(a.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id,
        C = (0, m.Z)({
            channel: t,
            applicationId: a.id,
            botUserId: u
        });
    if (!(0, A.BQ)(a)) return null;
    let h = s.ButtonSizes.MAX;
    return null != c
        ? (0, i.jsx)('div', {
              className: P.entrypointContainer,
              children:
                  C && null != u
                      ? (0, i.jsx)(x.Z, {
                            botUserId: u,
                            applicationId: a.id,
                            buttonSize: h
                        })
                      : (0, i.jsx)(v.Z, {
                            channel: t,
                            application: a,
                            sectionName: l,
                            primaryEntryPointCommand: c,
                            buttonSize: h
                        })
          })
        : r && !o && (0, A.ye)(a)
          ? (0, i.jsx)(s.HelpMessage, {
                className: P.primaryEntryPointWarningMessage,
                messageType: s.HelpMessageTypes.WARNING,
                children: I.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_MISSING_WARNING.format()
            })
          : null;
}
function j(e) {
    let { description: n } = e,
        [t, l] = a.useState(!0);
    a.useLayoutEffect(() => l(!1), []);
    let o = a.useMemo(() => (0, h.parseBioReact)(n), [n]),
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
            onTransitionEnd: _
        } = (0, N.Z)({
            isExpanded: t,
            ...u
        }),
        C = t || p;
    return (0, i.jsxs)('div', {
        className: P.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: P.overflowHidden,
                onTransitionEnd: _,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: g.markup,
                    variant: 'text-sm/medium',
                    lineClamp: C ? void 0 : 1,
                    style: { maxHeight: C ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: P.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: C ? I.Z.Messages.APP_LAUNCHER_SHOW_LESS : I.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          C
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
