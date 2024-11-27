n.d(t, {
    L: function () {
        return ec;
    },
    N3: function () {
        return eo;
    },
    Ox: function () {
        return ei;
    },
    SE: function () {
        return el;
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
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(685072),
    u = n(400354),
    d = n(652844),
    c = n(864094),
    h = n(582019),
    f = n(75735),
    p = n(481060),
    m = n(846027),
    g = n(239091),
    v = n(287734),
    E = n(40851),
    Z = n(100527),
    C = n(906732),
    x = n(571250),
    S = n(628581),
    I = n(659580),
    _ = n(793865),
    O = n(55311),
    N = n(575175),
    y = n(933557),
    T = n(471445),
    j = n(74299),
    b = n(803647),
    L = n(565138),
    R = n(917405),
    w = n(603074),
    k = n(879815),
    A = n(189771),
    M = n(294629),
    z = n(67844),
    D = n(544384),
    P = n(892807),
    V = n(560688),
    U = n(199902),
    W = n(592125),
    F = n(430824),
    H = n(131951),
    Y = n(19780),
    G = n(944486),
    B = n(594174),
    K = n(979651),
    Q = n(823379),
    X = n(388627),
    J = n(46145),
    q = n(981631),
    $ = n(388032),
    ee = n(725775);
function et(e) {
    let t = l.useRef(null);
    return (
        l.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    let { isToggled: t, disabled: n, cutoutIcon: l, icon: o, tooltip: s, defaultColor: a = p.Button.Colors.TRANSPARENT, highlightedColor: u = p.Button.Colors.WHITE, onClick: d, onCutoutClick: c, onMouseEnter: h, onMouseLeave: f, onContextMenu: m } = e;
    return (0, i.jsx)(p.Tooltip, {
        text: s,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: s, onMouseLeave: g, ...v } = e;
            return (0, i.jsxs)(p.Button, {
                ...v,
                onClick: d,
                size: p.Button.Sizes.SMALL,
                color: t ? u : a,
                className: ee.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == s || s(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == g || g(), null == f || f(e);
                },
                onContextMenu: m,
                children: [
                    o,
                    null != l &&
                        (0, i.jsx)(p.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == c || c(e);
                            },
                            className: r()(ee.cutoutContainer, t && ee.toggledCutoutContainer),
                            children: l
                        })
                ]
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: r, mute: s } = (0, M.Z)(t),
        a = r || s || o,
        u = (0, S.Z)(r, s, o, !1),
        { Component: c, play: h, events: f } = (0, d.O)(a ? 'unmute' : 'mute');
    l.useEffect(() => () => h(), [h, a]);
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
                { isShown: l } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: u,
                isToggled: !a,
                onClick: () => (0, N.Z)(s, o, q.jXE.OVERLAY),
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                cutoutIcon: l
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
function el(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: o, deaf: r } = (0, k.Z)(t),
        s = o || r,
        {
            Component: a,
            play: d,
            events: { onMouseEnter: c, onMouseLeave: h }
        } = (0, u.l)(s ? 'undeafen' : 'deafen'),
        f = r ? p.HeadphonesDenyIcon : a,
        { analyticsLocations: m } = (0, C.ZP)(Z.Z.OVERLAY);
    return (
        l.useEffect(() => () => d(), [s, d]),
        (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, x.Z)(o, r, !1),
            isToggled: s,
            onClick: () => {
                (0, O.Z)(r, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(C.Gt, {
                            value: m,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            },
            onMouseEnter: c,
            onMouseLeave: h
        })
    );
}
function eo(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        r = (0, s.e7)([H.Z], () => H.Z.isVideoEnabled()),
        a = (0, s.e7)([H.Z], () => Object.values(H.Z.getVideoDevices())[0]),
        u = null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
        d = !1 === u,
        c = (0, A.Z)(n),
        h = (e) => {
            m.Z.setVideoEnabled(e);
        },
        g = () => {
            d ? h(!0) : (0, V.Z)();
        },
        v = u ? () => g() : () => h(!r),
        {
            Component: E,
            play: Z,
            events: { onMouseEnter: C, onMouseLeave: x }
        } = (0, f.o)(r ? 'disable' : 'enable'),
        S =
            null != n
                ? (0, z.X)({
                      enabled: r,
                      cameraUnavailable: u,
                      hasPermission: c,
                      channel: n
                  })
                : void 0;
    l.useEffect(() => () => Z(), [r, Z]);
    let I = et(o),
        O = null == n || !c;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: I(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(E, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: S,
                onClick: v,
                isToggled: r,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: x,
                cutoutIcon: O
                    ? null
                    : l
                      ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        })
                      : (0, i.jsx)(p.ChevronSmallDownIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        }),
                disabled: O
            });
        }
    });
}
function er(e) {
    let t,
        { voiceChannel: o, locked: r } = e,
        a = null == o ? void 0 : o.id,
        u = (0, s.e7)([B.default], () => B.default.getCurrentUser()),
        d = (0, A.Z)(o),
        h = (0, s.cj)([H.Z], () => (0, j.Z)(H.Z)),
        f = (0, s.e7)([U.Z], () => U.Z.getCurrentUserActiveStream()),
        m = (0, E.bp)(),
        g = null == o ? void 0 : o.getGuildId(),
        v = l.useCallback(() => {
            h &&
                null != a &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('66913')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: g,
                            analyticsLocation: q.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, g, a]),
        Z = null != f;
    if (Z) t = $.intl.string($.t.S5anIS);
    else if (null != o) {
        let e = (0, X.pL)();
        t = d ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let C = () => {
            if (Z) return (0, b.Z)(f, !1);
            v();
        },
        {
            Component: x,
            events: { onMouseEnter: S, onMouseLeave: I },
            play: _
        } = (0, c.P)(Z ? 'disable' : 'enable');
    l.useEffect(() => () => _(), [Z, _]);
    let O = et(r);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != o
                ? (0, i.jsx)(D.Z, {
                      channel: o,
                      currentUser: u,
                      activeStreams: null != f ? [f] : [],
                      handleGoLive: v,
                      onClose: O(t),
                      appContext: m,
                      disableChangeWindows: !0
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: o } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(x, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: Z,
                cutoutIcon:
                    null != f
                        ? o
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
                onCutoutClick: l,
                onContextMenu: l,
                onMouseEnter: S,
                onMouseLeave: I,
                disabled: !h || !d
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: l, locked: o } = e,
        r = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : null,
        { mute: a, suppress: u } = (0, M.Z)(l),
        d = (0, s.e7)([H.Z], () => H.Z.isDeaf()),
        c = null == l || a || u || d;
    function f(e) {
        null != r &&
            (0, g.jW)(e, async () => {
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
            events: { onClick: v, onMouseEnter: E, onMouseLeave: Z }
        } = (0, h.j)(),
        C = et(o);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return c || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(w.Z, {
                      guildId: r,
                      channel: l,
                      onClose: C(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(m, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (a) return $.intl.string($.t['Ox4/zc']);
                    if (u) return $.intl.string($.t['+YBKYG']);
                    if (d) return $.intl.string($.t.X1lQlp);
                })(),
                onClick: (e) => {
                    v(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: E,
                onMouseLeave: Z,
                isToggled: l,
                disabled: c
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        l = (0, s.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = (0, s.Wu)([J.Z, W.Z], () =>
            J.Z.getChannelHistory()
                .map((e) => W.Z.getChannel(e))
                .filter(Q.lm)
        ),
        r = () => {
            l && v.default.disconnect();
        },
        u = (e) => {
            v.default.selectVoiceChannel(e.id);
        },
        {
            Component: d,
            events: { onMouseEnter: c, onMouseLeave: h }
        } = (0, a.K)(),
        f = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return o.length > 0
                ? (0, i.jsx)(P.Z, {
                      recentVoiceChannels: o,
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
            let { onClick: o } = e,
                { isShown: s } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: null != t ? $.intl.string($.t['6vrfgo']) : $.intl.string($.t.S0W8Z2),
                onClick: l ? r : o,
                defaultColor: l ? p.Button.Colors.RED : p.Button.Colors.TRANSPARENT,
                onMouseEnter: c,
                onMouseLeave: h,
                onContextMenu: o,
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
function ed(e) {
    let { voiceChannel: t } = e,
        n = (0, T.KS)(t),
        l = (0, y.ZP)(t);
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
                children: l
            })
        ]
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        l = (0, s.cj)([Y.Z], () => ({
            channelId: Y.Z.getChannelId(),
            quality: Y.Z.getQuality(),
            state: Y.Z.getState(),
            lastPing: Y.Z.getLastPing()
        })),
        o = null != n,
        r = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        o &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R.Z, {
                    ...l,
                    hasVideo: r
                }),
                (0, i.jsx)(eu, { voiceChannel: t }),
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ed, { voiceChannel: t })
            ]
        })
    );
}
