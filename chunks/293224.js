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
        return er;
    },
    aG: function () {
        return ea;
    },
    c_: function () {
        return es;
    },
    sm: function () {
        return eo;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(685072),
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
    _ = n(100527),
    C = n(906732),
    S = n(571250),
    Z = n(628581),
    I = n(659580),
    x = n(793865),
    N = n(55311),
    O = n(575175),
    T = n(933557),
    b = n(471445),
    y = n(74299),
    A = n(803647),
    L = n(565138),
    R = n(917405),
    k = n(603074),
    M = n(879815),
    w = n(189771),
    j = n(294629),
    P = n(67844),
    D = n(544384),
    z = n(892807),
    U = n(560688),
    V = n(199902),
    G = n(592125),
    W = n(430824),
    B = n(131951),
    F = n(19780),
    H = n(944486),
    Y = n(594174),
    K = n(979651),
    Q = n(823379),
    X = n(388627),
    J = n(46145),
    q = n(981631),
    $ = n(388032),
    ee = n(474263);
function et(e) {
    let t = r.useRef(null);
    return (
        r.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    let { isToggled: t, disabled: n, cutoutIcon: r, icon: l, tooltip: a, defaultColor: s = p.Button.Colors.TRANSPARENT, highlightedColor: u = p.Button.Colors.WHITE, onClick: c, onCutoutClick: d, onMouseEnter: h, onMouseLeave: f, onContextMenu: m } = e;
    return (0, i.jsx)(p.Tooltip, {
        text: a,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: a, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
                ...g,
                onClick: c,
                size: p.Button.Sizes.SMALL,
                color: t ? u : s,
                className: ee.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == a || a(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == v || v(), null == f || f(e);
                },
                onContextMenu: m,
                children: [
                    l,
                    null != r &&
                        (0, i.jsx)(p.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == d || d(e);
                            },
                            className: o()(ee.cutoutContainer, t && ee.toggledCutoutContainer),
                            children: r
                        })
                ]
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: o, mute: a } = (0, j.Z)(t),
        s = o || a || l,
        u = (0, Z.Z)(o, a, l, !1),
        { Component: d, play: h, events: f } = (0, c.O)(s ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, s]);
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
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: u,
                isToggled: !s,
                onClick: () => (0, O.Z)(a, l, q.jXE.OVERLAY),
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                cutoutIcon: r
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
function er(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: l, deaf: o } = (0, M.Z)(t),
        a = l || o,
        {
            Component: s,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, u.l)(a ? 'undeafen' : 'deafen'),
        f = o ? p.HeadphonesDenyIcon : s,
        { analyticsLocations: m } = (0, C.ZP)(_.Z.OVERLAY);
    return (
        r.useEffect(() => () => c(), [a, c]),
        (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, S.Z)(l, o, !1),
            isToggled: a,
            onClick: () => {
                (0, N.Z)(o, q.jXE.OVERLAY);
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
        o = (0, a.e7)([B.Z], () => B.Z.isVideoEnabled()),
        s = (0, a.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        u = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === u,
        d = (0, w.Z)(n),
        h = (e) => {
            m.Z.setVideoEnabled(e);
        },
        v = () => {
            c ? h(!0) : (0, U.Z)();
        },
        g = u ? () => v() : () => h(!o),
        {
            Component: E,
            play: _,
            events: { onMouseEnter: C, onMouseLeave: S }
        } = (0, f.o)(o ? 'disable' : 'enable'),
        Z =
            null != n
                ? (0, P.X)({
                      enabled: o,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [o, _]);
    let I = et(l),
        N = null == n || !d;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x.Z, { onClose: I(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(E, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: Z,
                onClick: g,
                isToggled: o,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: S,
                cutoutIcon: N
                    ? null
                    : r
                      ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        })
                      : (0, i.jsx)(p.ChevronSmallDownIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        }),
                disabled: N
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: l, locked: o } = e,
        s = null == l ? void 0 : l.id,
        u = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, w.Z)(l),
        h = (0, a.cj)([B.Z], () => (0, y.Z)(B.Z)),
        f = (0, a.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        m = (0, E.bp)(),
        v = null == l ? void 0 : l.getGuildId(),
        g = r.useCallback(() => {
            h &&
                null != s &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('60691'), n.e('57674'), n.e('46746'), n.e('86850')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: v,
                            analyticsLocation: q.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, v, s]),
        _ = null != f;
    if (_) t = $.intl.string($.t.S5anIS);
    else if (null != l) {
        let e = (0, X.pL)();
        t = c ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let C = () => {
            if (_) return (0, A.Z)(f, !1);
            g();
        },
        {
            Component: S,
            events: { onMouseEnter: Z, onMouseLeave: I },
            play: x
        } = (0, d.P)(_ ? 'disable' : 'enable');
    r.useEffect(() => () => x(), [_, x]);
    let N = et(o);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != l
                ? (0, i.jsx)(D.Z, {
                      channel: l,
                      currentUser: u,
                      activeStreams: null != f ? [f] : [],
                      handleGoLive: g,
                      onClose: N(t),
                      appContext: m,
                      disableChangeWindows: !0
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(S, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: _,
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
                onCutoutClick: r,
                onContextMenu: r,
                onMouseEnter: Z,
                onMouseLeave: I,
                disabled: !h || !c
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        o = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: u } = (0, j.Z)(r),
        c = (0, a.e7)([B.Z], () => B.Z.isDeaf()),
        d = null == r || s || u || c;
    function f(e) {
        null != o &&
            (0, v.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: o,
                        ...t
                    });
            });
    }
    let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: _ }
        } = (0, h.j)(),
        C = et(l);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(k.Z, {
                      guildId: o,
                      channel: r,
                      onClose: C(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(m, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (s) return $.intl.string($.t['Ox4/zc']);
                    if (u) return $.intl.string($.t['+YBKYG']);
                    if (c) return $.intl.string($.t.X1lQlp);
                })(),
                onClick: (e) => {
                    g(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: E,
                onMouseLeave: _,
                isToggled: r,
                disabled: d
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, a.e7)([H.Z], () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        l = (0, a.Wu)([J.Z, G.Z], () =>
            J.Z.getChannelHistory()
                .map((e) => G.Z.getChannel(e))
                .filter(Q.lm)
        ),
        o = () => {
            r && g.default.disconnect();
        },
        u = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, s.K)(),
        f = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return l.length > 0
                ? (0, i.jsx)(z.Z, {
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
                { isShown: a } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: null != t ? $.intl.string($.t['6vrfgo']) : $.intl.string($.t.S0W8Z2),
                onClick: r ? o : l,
                defaultColor: r ? p.Button.Colors.RED : p.Button.Colors.TRANSPARENT,
                onMouseEnter: d,
                onMouseLeave: h,
                onContextMenu: l,
                isToggled: a
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = (0, a.e7)([W.Z], () => W.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(L.Z, {
                                guild: n,
                                size: L.Z.Sizes.SMOL,
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
        n = (0, b.KS)(t),
        r = (0, T.ZP)(t);
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
                children: r
            })
        ]
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        r = (0, a.cj)([F.Z], () => ({
            channelId: F.Z.getChannelId(),
            quality: F.Z.getQuality(),
            state: F.Z.getState(),
            lastPing: F.Z.getLastPing()
        })),
        l = null != n,
        o = (0, a.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        l &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R.Z, {
                    ...r,
                    hasVideo: o
                }),
                (0, i.jsx)(eu, { voiceChannel: t }),
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
