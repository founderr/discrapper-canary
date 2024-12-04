n.d(t, {
    L: function () {
        return ea;
    },
    N3: function () {
        return en;
    },
    Ox: function () {
        return ee;
    },
    SE: function () {
        return et;
    },
    aG: function () {
        return el;
    },
    c_: function () {
        return eo;
    },
    sm: function () {
        return ei;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
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
    S = n(659580),
    I = n(793865),
    N = n(55311),
    b = n(575175),
    O = n(933557),
    y = n(471445),
    j = n(74299),
    T = n(803647),
    k = n(565138),
    w = n(917405),
    A = n(603074),
    L = n(879815),
    R = n(189771),
    M = n(294629),
    z = n(67844),
    D = n(544384),
    P = n(892807),
    V = n(560688),
    W = n(199902),
    U = n(430824),
    F = n(131951),
    B = n(19780),
    H = n(944486),
    Y = n(594174),
    G = n(979651),
    K = n(388627),
    X = n(981631),
    Q = n(388032),
    J = n(725775);
function q(e) {
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
function $(e) {
    let { isToggled: t, disabled: n, cutoutIcon: l, icon: o, tooltip: s, defaultColor: a = p.Button.Colors.TRANSPARENT, highlightedColor: u = p.Button.Colors.WHITE, onClick: c, onCutoutClick: d, onMouseEnter: h, onMouseLeave: f, onContextMenu: m } = e;
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
                className: J.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == s || s(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == v || v(), null == f || f(e);
                },
                onContextMenu: m,
                children: [
                    o,
                    null != l &&
                        (0, i.jsx)(p.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == d || d(e);
                            },
                            className: r()(J.cutoutContainer, t && J.toggledCutoutContainer),
                            children: l
                        })
                ]
            });
        }
    });
}
function ee(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: r, mute: s } = (0, M.Z)(t),
        a = r || s || o,
        u = (0, _.Z)(r, s, o, !1),
        { Component: d, play: h, events: f } = (0, c.O)(a ? 'unmute' : 'mute');
    l.useEffect(() => () => h(), [h, a]);
    let m = q(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.default, {
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
            return (0, i.jsx)($, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: u,
                isToggled: !a,
                onClick: () => (0, b.Z)(s, o, X.jXE.OVERLAY),
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
function et(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: o, deaf: r } = (0, L.Z)(t),
        s = o || r,
        {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, u.l)(s ? 'undeafen' : 'deafen'),
        f = r ? p.HeadphonesDenyIcon : a,
        { analyticsLocations: m } = (0, C.ZP)(x.Z.OVERLAY);
    return (
        l.useEffect(() => () => c(), [s, c]),
        (0, i.jsx)($, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, Z.Z)(o, r, !1),
            isToggled: s,
            onClick: () => {
                (0, N.Z)(r, X.jXE.OVERLAY);
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
function en(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        r = (0, s.e7)([F.Z], () => F.Z.isVideoEnabled()),
        a = (0, s.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
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
    l.useEffect(() => () => x(), [r, x]);
    let S = q(o),
        N = null == n || !d;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.Z, { onClose: S(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)($, {
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
                cutoutIcon: N
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
                disabled: N
            });
        }
    });
}
function ei(e) {
    let t,
        { voiceChannel: o, locked: r } = e,
        a = null == o ? void 0 : o.id,
        u = (0, s.e7)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, R.Z)(o),
        h = (0, s.cj)([F.Z], () => (0, j.Z)(F.Z)),
        f = (0, s.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        m = (0, E.bp)(),
        v = null == o ? void 0 : o.getGuildId(),
        g = l.useCallback(() => {
            h &&
                null != a &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('66913')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: v,
                            analyticsLocation: X.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, v, a]),
        x = null != f;
    if (x) t = Q.intl.string(Q.t.S5anIS);
    else if (null != o) {
        let e = (0, K.pL)();
        t = c ? (null != e ? Q.intl.format(Q.t.AB5gT0, { game: e.name }) : Q.intl.string(Q.t.FeUKeH)) : Q.intl.string(Q.t.uQn9Bw);
    }
    let C = () => {
            if (x) return (0, T.Z)(f, !1);
            g();
        },
        {
            Component: Z,
            events: { onMouseEnter: _, onMouseLeave: S },
            play: I
        } = (0, d.P)(x ? 'disable' : 'enable');
    l.useEffect(() => () => I(), [x, I]);
    let N = q(r);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != o
                ? (0, i.jsx)(D.Z, {
                      channel: o,
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
            let { onClick: l } = e,
                { isShown: o } = n;
            return (0, i.jsx)($, {
                icon: (0, i.jsx)(Z, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: x,
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
                onMouseEnter: _,
                onMouseLeave: S,
                disabled: !h || !c
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: l, locked: o } = e,
        r = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : null,
        { mute: a, suppress: u } = (0, M.Z)(l),
        c = (0, s.e7)([F.Z], () => F.Z.isDeaf()),
        d = null == l || a || u || c;
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
        C = q(o);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(A.Z, {
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
            return (0, i.jsx)($, {
                icon: (0, i.jsx)(m, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (a) return Q.intl.string(Q.t['Ox4/zc']);
                    if (u) return Q.intl.string(Q.t['+YBKYG']);
                    if (c) return Q.intl.string(Q.t.X1lQlp);
                })(),
                onClick: (e) => {
                    g(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: E,
                onMouseLeave: x,
                isToggled: l,
                disabled: d
            });
        }
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        l = (0, s.e7)([H.Z], () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            l && g.default.disconnect();
        },
        r = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: u,
            events: { onMouseEnter: c, onMouseLeave: d }
        } = (0, a.K)(),
        h = q(n),
        f = l
            ? (0, i.jsx)(u, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(p.PhoneCallIcon, {
                  color: 'currentColor',
                  size: 'sm'
              }),
        m = (e) =>
            e
                ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                      color: 'currentColor',
                      size: 'sm'
                  })
                : (0, i.jsx)(p.ChevronSmallDownIcon, {
                      color: 'currentColor',
                      size: 'sm'
                  });
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(P.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: r
            });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: s } = n;
            return (0, i.jsx)($, {
                icon: f,
                tooltip: null != t ? Q.intl.string(Q.t['6vrfgo']) : Q.intl.string(Q.t.S0W8Z2),
                onClick: l ? o : r,
                defaultColor: l ? p.Button.Colors.RED : p.Button.Colors.TRANSPARENT,
                onMouseEnter: c,
                onMouseLeave: d,
                onContextMenu: r,
                isToggled: s,
                cutoutIcon: l ? m(s) : null,
                onCutoutClick: l ? r : void 0
            });
        }
    });
}
function er(e) {
    let { voiceChannel: t } = e,
        n = (0, s.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: J.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: J.guildIconContainer,
                        children: [
                            (0, i.jsx)(k.Z, {
                                guild: n,
                                size: k.Z.Sizes.SMOL,
                                className: J.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: J.guildName,
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
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, y.KS)(t),
        l = (0, O.ZP)(t);
    return (0, i.jsxs)('div', {
        className: J.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(p.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: J.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
            null != l &&
                (0, i.jsx)(p.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: J.channelName,
                    children: l
                })
        ]
    });
}
function ea(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        l = (0, s.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing()
        })),
        o = null != n,
        r = (0, s.e7)([G.Z], () => null != n && G.Z.hasVideo(n), [n]);
    return (
        o &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.Z, {
                    ...l,
                    hasVideo: r
                }),
                (0, i.jsx)(er, { voiceChannel: t }),
                (0, i.jsx)('div', { className: J.separatorDot }),
                (0, i.jsx)(es, { voiceChannel: t })
            ]
        })
    );
}
