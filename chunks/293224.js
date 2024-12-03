n.d(t, {
    L: function () {
        return ed;
    },
    N3: function () {
        return el;
    },
    Ox: function () {
        return ei;
    },
    SE: function () {
        return eo;
    },
    aG: function () {
        return es;
    },
    c_: function () {
        return ea;
    },
    sm: function () {
        return er;
    }
});
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(442837),
    a = n(685072),
    u = n(400354),
    c = n(652844),
    d = n(864094),
    h = n(582019),
    f = n(75735),
    p = n(481060),
    m = n(846027),
    v = n(239091),
    g = n(287734),
    E = n(40851),
    x = n(100527),
    C = n(906732),
    Z = n(571250),
    _ = n(628581),
    I = n(659580),
    S = n(793865),
    b = n(55311),
    N = n(575175),
    O = n(933557),
    y = n(471445),
    j = n(74299),
    T = n(803647),
    k = n(565138),
    L = n(917405),
    w = n(603074),
    A = n(879815),
    R = n(189771),
    M = n(294629),
    z = n(67844),
    D = n(544384),
    P = n(892807),
    V = n(560688),
    W = n(199902),
    U = n(592125),
    F = n(430824),
    B = n(131951),
    H = n(19780),
    Y = n(944486),
    G = n(594174),
    K = n(979651),
    Q = n(823379),
    X = n(388627),
    J = n(46145),
    q = n(981631),
    $ = n(388032),
    ee = n(725775);
function et(e) {
    let t = o.useRef(null);
    return (
        o.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    let { isToggled: t, disabled: n, cutoutIcon: o, icon: l, tooltip: s, defaultColor: a = p.Button.Colors.TRANSPARENT, highlightedColor: u = p.Button.Colors.WHITE, onClick: c, onCutoutClick: d, onMouseEnter: h, onMouseLeave: f, onContextMenu: m } = e;
    return (0, i.jsx)(p.Tooltip, {
        text: s,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: s, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
                ...g,
                onClick: c,
                size: p.Button.Sizes.SMALL,
                color: t ? u : a,
                className: ee.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == s || s(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == v || v(), null == f || f(e);
                },
                onContextMenu: m,
                children: [
                    l,
                    null != o &&
                        (0, i.jsx)(p.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == d || d(e);
                            },
                            className: r()(ee.cutoutContainer, t && ee.toggledCutoutContainer),
                            children: o
                        })
                ]
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: r, mute: s } = (0, M.Z)(t),
        a = r || s || l,
        u = (0, _.Z)(r, s, l, !1),
        { Component: d, play: h, events: f } = (0, c.O)(a ? 'unmute' : 'mute');
    o.useEffect(() => () => h(), [h, a]);
    let m = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.default, {
                onClose: m(t),
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: u,
                isToggled: !a,
                onClick: () => (0, N.Z)(s, l, q.jXE.OVERLAY),
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                cutoutIcon: o
                    ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                    : (0, i.jsx)(p.ChevronSmallDownIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
            });
        }
    });
}
function eo(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: l, deaf: r } = (0, A.Z)(t),
        s = l || r,
        {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, u.l)(s ? 'undeafen' : 'deafen'),
        f = r ? p.HeadphonesDenyIcon : a,
        { analyticsLocations: m } = (0, C.ZP)(x.Z.OVERLAY);
    return (
        o.useEffect(() => () => c(), [s, c]),
        (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, Z.Z)(l, r, !1),
            isToggled: s,
            onClick: () => {
                (0, b.Z)(r, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
                (0, v.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(C.Gt, {
                            value: m,
                            children: (0, i.jsx)(e, {
                                onClose: v.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            },
            onMouseEnter: d,
            onMouseLeave: h
        })
    );
}
function el(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        r = (0, s.e7)([B.Z], () => B.Z.isVideoEnabled()),
        a = (0, s.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        u = null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
        c = !1 === u,
        d = (0, R.Z)(n),
        h = (e) => {
            m.Z.setVideoEnabled(e);
        },
        v = () => {
            c ? h(!0) : (0, V.Z)();
        },
        g = u ? () => v() : () => h(!r),
        {
            Component: E,
            play: x,
            events: { onMouseEnter: C, onMouseLeave: Z }
        } = (0, f.o)(r ? 'disable' : 'enable'),
        _ =
            null != n
                ? (0, z.X)({
                      enabled: r,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    o.useEffect(() => () => x(), [r, x]);
    let I = et(l),
        b = null == n || !d;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.Z, { onClose: I(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(E, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: _,
                onClick: g,
                isToggled: r,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: Z,
                cutoutIcon: b
                    ? null
                    : o
                      ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        })
                      : (0, i.jsx)(p.ChevronSmallDownIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        }),
                disabled: b
            });
        }
    });
}
function er(e) {
    let t,
        { voiceChannel: l, locked: r } = e,
        a = null == l ? void 0 : l.id,
        u = (0, s.e7)([G.default], () => G.default.getCurrentUser()),
        c = (0, R.Z)(l),
        h = (0, s.cj)([B.Z], () => (0, j.Z)(B.Z)),
        f = (0, s.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        m = (0, E.bp)(),
        v = null == l ? void 0 : l.getGuildId(),
        g = o.useCallback(() => {
            h &&
                null != a &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('66913')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: v,
                            analyticsLocation: q.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, v, a]),
        x = null != f;
    if (x) t = $.intl.string($.t.S5anIS);
    else if (null != l) {
        let e = (0, X.pL)();
        t = c ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let C = () => {
            if (x) return (0, T.Z)(f, !1);
            g();
        },
        {
            Component: Z,
            events: { onMouseEnter: _, onMouseLeave: I },
            play: S
        } = (0, d.P)(x ? 'disable' : 'enable');
    o.useEffect(() => () => S(), [x, S]);
    let b = et(r);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != l
                ? (0, i.jsx)(D.Z, {
                      channel: l,
                      currentUser: u,
                      activeStreams: null != f ? [f] : [],
                      handleGoLive: g,
                      onClose: b(t),
                      appContext: m,
                      disableChangeWindows: !0
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: o } = e,
                { isShown: l } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(Z, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: x,
                cutoutIcon:
                    null != f
                        ? l
                            ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(p.ChevronSmallDownIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : null,
                onClick: C,
                onCutoutClick: o,
                onContextMenu: o,
                onMouseEnter: _,
                onMouseLeave: I,
                disabled: !h || !c
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: o, locked: l } = e,
        r = null !== (t = null == o ? void 0 : o.getGuildId()) && void 0 !== t ? t : null,
        { mute: a, suppress: u } = (0, M.Z)(o),
        c = (0, s.e7)([B.Z], () => B.Z.isDeaf()),
        d = null == o || a || u || c;
    function f(e) {
        null != r &&
            (0, v.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: r,
                        ...t
                    });
            });
    }
    let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: x }
        } = (0, h.j)(),
        C = et(l);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == o
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(w.Z, {
                      guildId: r,
                      channel: o,
                      onClose: C(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(m, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (a) return $.intl.string($.t['Ox4/zc']);
                    if (u) return $.intl.string($.t['+YBKYG']);
                    if (c) return $.intl.string($.t.X1lQlp);
                })(),
                onClick: (e) => {
                    g(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: E,
                onMouseLeave: x,
                isToggled: o,
                disabled: d
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        o = (0, s.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        l = (0, s.Wu)([J.Z, U.Z], () =>
            J.Z.getChannelHistory()
                .map((e) => U.Z.getChannel(e))
                .filter(Q.lm)
        ),
        r = () => {
            o && g.default.disconnect();
        },
        u = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, a.K)(),
        f = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return l.length > 0
                ? (0, i.jsx)(P.Z, {
                      recentVoiceChannels: l,
                      currentVoiceChannel: t,
                      onClose: f(n),
                      onSelect: u
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: s } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: null != t ? $.intl.string($.t['6vrfgo']) : $.intl.string($.t.S0W8Z2),
                onClick: o ? r : l,
                defaultColor: o ? p.Button.Colors.RED : p.Button.Colors.TRANSPARENT,
                onMouseEnter: d,
                onMouseLeave: h,
                onContextMenu: l,
                isToggled: s
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = (0, s.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: ee.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: ee.guildIconContainer,
                        children: [
                            (0, i.jsx)(k.Z, {
                                guild: n,
                                size: k.Z.Sizes.SMOL,
                                className: ee.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                children: n.name
                            })
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, y.KS)(t),
        o = (0, O.ZP)(t);
    return (0, i.jsxs)('div', {
        className: ee.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(p.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: ee.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
            (0, i.jsx)(p.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                className: ee.channelName,
                children: o
            })
        ]
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        o = (0, s.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing()
        })),
        l = null != n,
        r = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        l &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(L.Z, {
                    ...o,
                    hasVideo: r
                }),
                (0, i.jsx)(eu, { voiceChannel: t }),
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
