n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(399606),
    a = n(46973),
    u = n(481060),
    c = n(846027),
    d = n(239091),
    h = n(765250),
    f = n(872810),
    p = n(40851),
    m = n(414910),
    v = n(194082),
    g = n(979264),
    E = n(871118),
    x = n(352978),
    C = n(833519),
    Z = n(839662),
    _ = n(199902),
    I = n(314897),
    S = n(131951),
    b = n(594174),
    N = n(5192),
    O = n(1226),
    y = n(981631),
    j = n(388032),
    T = n(2847);
function k(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, s.e7)(
            [S.Z],
            () => {
                let e = (0, m.Z)(t.type);
                return S.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        r = (0, s.e7)([I.default], () => I.default.getId()),
        { hasVideo: d } = (0, Z.Z)(t, r),
        h = l && d,
        f = o.useCallback(() => {
            c.Z.toggleLocalMute(n, a.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(u.Tooltip, {
        text: h ? j.intl.string(j.t.YqAjX1) : j.intl.string(j.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(u.Clickable, {
                ...n,
                className: T.controlAction,
                onClick: (e) => {
                    e.stopPropagation(), null == t || t(), f();
                },
                children: h
                    ? (0, i.jsx)(u.VoiceXIcon, {
                          size: 'sm',
                          color: 'currentColor'
                      })
                    : (0, i.jsx)(u.VoiceNormalIcon, {
                          size: 'sm',
                          color: 'currentColor'
                      })
            });
        }
    });
}
function L(e) {
    let { hasActiveStream: t, participant: o, onEnablePin: l } = e,
        a = (0, p.bp)(),
        c = o.user,
        h = (0, s.e7)(
            [b.default],
            () => {
                var e;
                return null !== (e = b.default.getUser(c.id)) && void 0 !== e ? e : c;
            },
            [c]
        ),
        m = t ? j.intl.string(j.t.tLxK4u) : j.intl.string(j.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: r()(T.controlBackground, { [T.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: T.watchActionContainer,
                    children: (0, i.jsx)(u.Tooltip, {
                        text: m,
                        children: (e) =>
                            (0, i.jsxs)(u.Clickable, {
                                ...e,
                                className: T.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, f.rn)(o.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        l();
                                },
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: j.intl.string(j.t['I6JG4+'])
                                    }),
                                    (0, i.jsx)(u.EyePlusIcon, {
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                ]
                            })
                    })
                }),
            (0, i.jsxs)('div', {
                className: T.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: T.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: T.controlUserContainer,
                            children: [
                                (0, i.jsx)(u.ScreenIcon, {
                                    size: 'xs',
                                    color: u.tokens.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: N.ZP.getName(o.stream.guildId, o.stream.channelId, c)
                                }),
                                (0, i.jsx)(g.ZP, {
                                    clan: h.clan,
                                    userId: c.id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: T.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(k, { participant: o }),
                                    (0, i.jsx)(u.Tooltip, {
                                        text: j.intl.string(j.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...l } = e;
                                            return (0, i.jsx)(u.Clickable, {
                                                ...l,
                                                className: T.controlAction,
                                                onClick: (e) => {
                                                    e.stopPropagation(),
                                                        null == t || t(),
                                                        (0, d.jW)(e, async () => {
                                                            let { default: e } = await n.e('5704').then(n.bind(n, 360429));
                                                            return (t) =>
                                                                (0, i.jsx)(e, {
                                                                    ...t,
                                                                    stream: o.stream,
                                                                    exitFullscreen: () => {},
                                                                    appContext: a
                                                                });
                                                        });
                                                },
                                                children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                                    size: 'sm',
                                                    color: 'currentColor'
                                                })
                                            });
                                        }
                                    })
                                ]
                            })
                    })
                ]
            })
        ]
    });
}
let w = new Set([y.jm8.ENDED, y.jm8.FAILED, y.jm8.PAUSED]),
    A = o.memo(function (e) {
        let { participant: t, width: n, locked: o, widgetId: l, pinned: a } = e,
            u = (0, s.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            c = null != u && w.has(u.state),
            d = null != u,
            f = (0, O.yA)(t.stream),
            p = (0, O.xN)(t.stream);
        return (!d && o) || c
            ? null
            : (0, i.jsxs)('div', {
                  className: T.tile,
                  children: [
                      d &&
                          !o &&
                          (0, i.jsx)(v.ZP, {
                              size: v.ZP.Sizes.SMALL,
                              className: T.liveIndicator
                          }),
                      d
                          ? (0, i.jsx)('div', {
                                className: T.streamTile,
                                children: (0, i.jsx)('div', {
                                    className: T.streamTile,
                                    style: { transform: 'scale('.concat(f, ')') },
                                    children: (0, i.jsx)(C.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != p ? p : x.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !o,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: o ? T.streamTileWrapper : void 0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: T.streamPreview,
                                children: (0, i.jsx)(E.Z, {
                                    noText: !0,
                                    className: r()(T.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      o
                          ? null
                          : (0, i.jsx)(L, {
                                participant: t,
                                hasActiveStream: d,
                                onEnablePin: () => {
                                    !a && (0, h.xh)(l);
                                }
                            })
                  ]
              });
    });
