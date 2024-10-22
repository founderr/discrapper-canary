t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    o = t.n(l),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(706302),
    p = t(812236),
    _ = t(404295),
    C = t(835473),
    h = t(70097),
    f = t(240991),
    A = t(973616),
    E = t(783097),
    N = t(695676),
    v = t(520315),
    x = t(29380),
    I = t(783685),
    P = t(689938),
    g = t(131242),
    T = t(554034);
function L(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = a.useMemo(() => {
            var e;
            return null !== (e = (0, E.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        _ = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        C = null != l,
        { isSlideReady: f } = (0, N.hH)(),
        [A, v] = a.useState(!1);
    return (
        a.useEffect(() => {
            f && v(!0);
        }, [f]),
        (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsxs)('div', {
                    className: g.profileAndVideoContainer,
                    children: [
                        C
                            ? (0, i.jsxs)('div', {
                                  className: g.videoContainer,
                                  children: [
                                      A
                                          ? (0, i.jsx)(h.Z, {
                                                className: o()(g.videoCover, g.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: l,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: g.videoCover,
                                          src: s,
                                          'aria-label': P.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: C ? g.overviewContainerWithVideo : g.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(S, { application: t }),
                                (0, i.jsx)(R, { application: t }),
                                p.length > 0 ? (0, i.jsx)(y, { description: p }) : null,
                                _
                                    ? (0, i.jsx)('div', {
                                          className: g.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: g.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(j, {
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
                (0, i.jsx)(b, { application: t })
            ]
        })
    );
}
function b(e) {
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
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: P.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: g.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: P.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE
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
        a = (0, E.BQ)(t) ? t.name : null !== (n = (0, E.$d)(t)) && void 0 !== n ? n : '',
        l = (0, E.vJ)(t);
    return (0, i.jsxs)('div', {
        className: g.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: a
            }),
            l
                ? (0, i.jsx)('div', {
                      className: g.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: P.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function R(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, E.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, E.ye)(n)
        ? (0, i.jsxs)('div', {
              className: g.tagsContainer,
              children: [
                  (0, i.jsx)(M, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: g.tagContainer,
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
function M(e) {
    var n;
    let { application: t } = e;
    if (!(0, E.ye)(t)) return null;
    let a = null !== (n = (0, E.BQ)(t) ? (t instanceof A.Z ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: g.tagContainer,
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
function j(e) {
    var n;
    let { channel: t, application: a, sectionName: l, hasCommands: o, isDeveloperOfThisApp: r } = e,
        c = (0, p.Fs)(t, a.id),
        d = (0, C.q)(a.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id,
        h = (0, m.Z)({
            channel: t,
            applicationId: a.id,
            botUserId: u
        }),
        f = (0, _.bG)('PrimaryEntryPointArea');
    if (!(0, E.BQ)(a)) return null;
    let A = s.ButtonSizes.MAX;
    return null == c || (f && null == u)
        ? r && !o && (0, E.ye)(a)
            ? (0, i.jsx)(s.HelpMessage, {
                  className: g.primaryEntryPointWarningMessage,
                  messageType: s.HelpMessageTypes.WARNING,
                  children: P.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_MISSING_WARNING.format()
              })
            : null
        : (0, i.jsxs)('div', {
              className: g.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: g.entryPointContainerFlexChild,
                      children: (0, i.jsx)(x.Z, {
                          channel: t,
                          application: a,
                          sectionName: l,
                          primaryEntryPointCommand: c,
                          buttonSize: A
                      })
                  }),
                  h && null != u
                      ? (0, i.jsx)('div', {
                            className: g.entryPointContainerFlexChild,
                            children: (0, i.jsx)(I.Z, {
                                botUserId: u,
                                applicationId: a.id,
                                buttonSize: A
                            })
                        })
                      : null
              ]
          });
}
function y(e) {
    let { description: n } = e,
        [t, l] = a.useState(!0);
    a.useLayoutEffect(() => l(!1), []);
    let o = a.useMemo(() => (0, f.parseBioReact)(n), [n]),
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
        } = (0, v.Z)({
            isExpanded: t,
            ...u
        }),
        C = t || p;
    return (0, i.jsxs)('div', {
        className: g.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: g.overflowHidden,
                onTransitionEnd: _,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: T.markup,
                    variant: 'text-sm/medium',
                    lineClamp: C ? void 0 : 1,
                    style: { maxHeight: C ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: g.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: C ? P.Z.Messages.APP_LAUNCHER_SHOW_LESS : P.Z.Messages.APP_LAUNCHER_SHOW_MORE
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
