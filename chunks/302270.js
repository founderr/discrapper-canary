n.d(t, {
    Z: function () {
        return U;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(475179),
    u = n(40851),
    h = n(358221),
    p = n(933557),
    m = n(320007),
    f = n(236091),
    g = n(623624),
    C = n(665149),
    x = n(984370),
    v = n(141321),
    _ = n(618158),
    I = n(390322),
    E = n(616286),
    b = n(961048),
    N = n(430824),
    Z = n(496675),
    S = n(626135),
    T = n(431328),
    j = n(501655),
    A = n(200498),
    y = n(146085),
    P = n(427679),
    M = n(592473),
    R = n(831002),
    L = n(903108),
    k = n(981631),
    O = n(474936),
    D = n(388032),
    w = n(941963);
function B(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: o } = e,
        p = (0, u.bp)(),
        g = (0, s.e7)([h.Z], () => h.Z.getChatOpen(n.id)),
        C = (0, A.B)(n.id),
        x = (0, T.Rk)(n.id, j.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: N, allowIdle: Z } = (0, _.Y)('popup');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            (0, i.jsx)(
                c.Popout,
                {
                    position: 'bottom',
                    animation: c.Popout.Animation.NONE,
                    align: 'right',
                    renderPopout: (e) =>
                        (0, i.jsx)(I.Z, {
                            children: (0, i.jsx)(R.Z, {
                                ...e,
                                channelId: n.id,
                                appContext: p
                            })
                        }),
                    autoInvert: !1,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.createElement)(b.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: w.button,
                            iconClassName: w.buttonIcon
                        });
                    }
                },
                'more-options-popout'
            ),
            !t && (0, i.jsx)(m.Z, { className: w.button }, 'clips'),
            (0, i.jsx)(
                v.Z,
                {
                    onOpen: N,
                    onClose: Z,
                    className: w.button
                },
                'recents'
            ),
            !o && C
                ? (0, i.jsx)('div', {
                      className: w.button,
                      children: (0, i.jsx)(M.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              g && d.Z.updateChatOpen(n.id, !1), a();
                          },
                          showRequestToSpeakSidebar: o,
                          numRequestToSpeak: x
                      })
                  })
                : null,
            !g &&
                (0, i.jsx)('div', {
                    className: r()(w.button, { [w.sidebarOpen]: o }),
                    children: (0, i.jsx)(E.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: o,
                        toggleRequestToSpeakSidebar: a,
                        iconClassName: w.buttonIcon
                    })
                })
        ]
    });
}
function U(e) {
    var t;
    let { inPopout: n, channel: a, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: h } = e,
        m = (0, p.ZP)(a),
        f = (0, s.e7)([P.Z], () => P.Z.getStageInstanceByChannel(a.id)),
        v = (0, T.Io)(a.id),
        _ = (0, T.Rk)(a.id, j.pV.AUDIENCE),
        I = (0, s.e7)([N.Z], () => N.Z.getGuild(a.guild_id), [a.guild_id]),
        E = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        b = (null == I ? void 0 : I.isCommunity()) ? E < k.TU7 : (null == I ? void 0 : I.premiumTier) !== k.Eu4.TIER_3 && E <= k.eez,
        A = (0, L.Z)(a),
        M = (0, s.e7)([Z.Z], () => Z.Z.can(y.yP, a)),
        R = () => {
            d.Z.updateStageVideoLimitBoostUpsellDismissed(a.id, !0),
                S.default.track(k.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: a.guild_id,
                    type: O.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: M,
                    action: O.T7.DISMISS
                });
        };
    l.useEffect(() => {
        A &&
            S.default.track(k.rMx.BOOSTING_UPSELL_VIEWED, {
                guild_id: a.guild_id,
                type: O.cd.VIDEO_STAGE_LIMIT,
                is_moderator: M,
                listener_count: v + _
            });
    }, [A]);
    let U = (0, i.jsx)(c.ThemeProvider, {
        theme: k.BRd.DARK,
        children: (e) => {
            var t;
            return (0, i.jsxs)(C.ZP, {
                toolbar: (0, i.jsx)(B, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: h,
                    channel: a
                }),
                onDoubleClick: x.O,
                transparent: !0,
                className: r()(e, w.participants),
                children: [
                    (0, i.jsx)(C.ZP.Icon, {
                        icon: c.StageIcon,
                        disabled: !0,
                        'aria-label': D.intl.string(D.t.EErMzM),
                        className: w.icon,
                        color: null != f ? o.Z.unsafe_rawColors.GREEN_360.css : void 0
                    }),
                    (0, i.jsx)(C.ZP.Title, {
                        className: w.channelName,
                        wrapperClassName: w.channelNameWrapper,
                        children: null !== (t = null == f ? void 0 : f.topic) && void 0 !== t ? t : m
                    }),
                    (0, i.jsx)(C.ZP.Divider, { className: w.divider }),
                    (0, i.jsxs)(C.ZP.Title, {
                        children: [
                            (0, i.jsx)(c.MicrophoneIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: w.speakerCount,
                                children: D.intl.format(D.t.chmM9P, { count: v })
                            }),
                            (0, i.jsx)(c.GroupIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: w.speakerCount,
                                children: D.intl.format(D.t['+v2pNz'], { count: _ })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return A
        ? (0, i.jsxs)('div', {
              children: [
                  U,
                  (0, i.jsxs)('div', {
                      className: w.boostUpsell,
                      children: [
                          (0, i.jsx)(H, {}),
                          (0, i.jsxs)('div', {
                              className: w.text,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: b ? D.intl.string(D.t['T+zF9P']) : D.intl.string(D.t['IZ+SVl'])
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: b ? D.intl.string(D.t.Izgpmp) : D.intl.string(D.t['7FHbPD'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: w.buttons,
                              children: b
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                className: w.notNowButton,
                                                onClick: R,
                                                look: c.Button.Looks.BLANK,
                                                size: c.Button.Sizes.SMALL,
                                                children: D.intl.string(D.t.L5eIZ2)
                                            }),
                                            (0, i.jsx)(c.ShinyButton, {
                                                size: c.Button.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, g.f)({
                                                        guildId: a.guild_id,
                                                        location: { section: k.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        S.default.track(k.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: a.guild_id,
                                                            type: O.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: M,
                                                            action: O.T7.BOOST
                                                        });
                                                },
                                                className: w.boostButton,
                                                children: D.intl.string(D.t.Uj0md3)
                                            })
                                        ]
                                    })
                                  : (0, i.jsx)(c.Button, {
                                        className: w.notNowButton,
                                        onClick: R,
                                        look: c.Button.Looks.BLANK,
                                        size: c.Button.Sizes.SMALL,
                                        children: D.intl.string(D.t.WAI6xs)
                                    })
                          })
                      ]
                  })
              ]
          })
        : U;
}
function H() {
    return (0, i.jsxs)('svg', {
        width: '36',
        height: '36',
        viewBox: '0 0 36 36',
        fill: 'none',
        children: [
            (0, i.jsxs)('g', {
                clipPath: 'url(#clip0_595_59940)',
                children: [
                    (0, i.jsx)('path', {
                        d: 'M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z',
                        fill: 'url(#paint0_linear_595_59940)'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z',
                        fill: 'white'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z',
                        fill: 'white'
                    })
                ]
            }),
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: 'paint0_linear_595_59940',
                        x1: '2.4046e-06',
                        y1: '35.2166',
                        x2: '35.7182',
                        y2: '-1.45185',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: '#3E70DD' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#B377F3'
                            })
                        ]
                    }),
                    (0, i.jsx)('clipPath', {
                        id: 'clip0_595_59940',
                        children: (0, i.jsx)('rect', {
                            width: '36',
                            height: '36',
                            fill: 'white'
                        })
                    })
                ]
            })
        ]
    });
}
