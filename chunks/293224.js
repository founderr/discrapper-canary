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
    E = n(239091),
    v = n(287734),
    g = n(40851),
    _ = n(100527),
    C = n(906732),
    S = n(571250),
    I = n(628581),
    Z = n(659580),
    N = n(793865),
    x = n(55311),
    O = n(575175),
    T = n(933557),
    A = n(471445),
    y = n(74299),
    b = n(803647),
    R = n(565138),
    L = n(917405),
    k = n(603074),
    M = n(879815),
    P = n(189771),
    w = n(294629),
    j = n(67844),
    D = n(544384),
    z = n(892807),
    U = n(560688),
    V = n(199902),
    G = n(592125),
    F = n(430824),
    B = n(131951),
    W = n(19780),
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
            let { onMouseEnter: a, onMouseLeave: E, ...v } = e;
            return (0, i.jsxs)(p.Button, {
                ...v,
                onClick: c,
                size: p.Button.Sizes.SMALL,
                color: t ? u : s,
                className: ee.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == a || a(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == E || E(), null == f || f(e);
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
        { suppress: l, selfMute: o, mute: a } = (0, w.Z)(t),
        s = o || a || l,
        u = (0, I.Z)(o, a, l, !1),
        { Component: d, play: h, events: f } = (0, c.O)(s ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, s]);
    let m = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
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
                (0, x.Z)(o, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(C.Gt, {
                            value: m,
                            children: (0, i.jsx)(e, {
                                onClose: E.Zy,
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
        d = (0, P.Z)(n),
        h = (e) => {
            m.Z.setVideoEnabled(e);
        },
        E = () => {
            c ? h(!0) : (0, U.Z)();
        },
        v = u ? () => E() : () => h(!o),
        {
            Component: g,
            play: _,
            events: { onMouseEnter: C, onMouseLeave: S }
        } = (0, f.o)(o ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, j.X)({
                      enabled: o,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [o, _]);
    let Z = et(l),
        x = null == n || !d;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(N.Z, { onClose: Z(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(g, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: I,
                onClick: v,
                isToggled: o,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: S,
                cutoutIcon: x
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
                disabled: x
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: l, locked: o } = e,
        s = null == l ? void 0 : l.id,
        u = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, P.Z)(l),
        h = (0, a.cj)([B.Z], () => (0, y.Z)(B.Z)),
        f = (0, a.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        m = (0, g.bp)(),
        E = null == l ? void 0 : l.getGuildId(),
        v = r.useCallback(() => {
            h &&
                null != s &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('60691'), n.e('57674'), n.e('46746'), n.e('55149')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: E,
                            analyticsLocation: q.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, E, s]),
        _ = null != f;
    if (_) t = $.intl.string($.t.S5anIS);
    else if (null != l) {
        let e = (0, X.pL)();
        t = c ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let C = () => {
            if (_) return (0, b.Z)(f, !1);
            v();
        },
        {
            Component: S,
            events: { onMouseEnter: I, onMouseLeave: Z },
            play: N
        } = (0, d.P)(_ ? 'disable' : 'enable');
    r.useEffect(() => () => N(), [_, N]);
    let x = et(o);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != l
                ? (0, i.jsx)(D.Z, {
                      channel: l,
                      currentUser: u,
                      activeStreams: null != f ? [f] : [],
                      handleGoLive: v,
                      onClose: x(t),
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
                onMouseEnter: I,
                onMouseLeave: Z,
                disabled: !h || !c
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        o = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: u } = (0, w.Z)(r),
        c = (0, a.e7)([B.Z], () => B.Z.isDeaf()),
        d = null == r || s || u || c;
    function f(e) {
        null != o &&
            (0, E.jW)(e, async () => {
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
            events: { onClick: v, onMouseEnter: g, onMouseLeave: _ }
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
                    v(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: g,
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
                .filter((e) => e.isVocal())
        ),
        o = () => {
            r && v.default.disconnect();
        },
        u = (e) => {
            v.default.selectVoiceChannel(e.id);
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
        n = (0, a.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(R.Z, {
                                guild: n,
                                size: R.Z.Sizes.SMOL,
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
        n = (0, A.KS)(t),
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
        r = (0, a.cj)([W.Z], () => ({
            channelId: W.Z.getChannelId(),
            quality: W.Z.getQuality(),
            state: W.Z.getState(),
            lastPing: W.Z.getLastPing()
        })),
        l = null != n,
        o = (0, a.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        l &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(L.Z, {
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
