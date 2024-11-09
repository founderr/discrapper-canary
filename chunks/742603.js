n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(99690),
    c = n(40851),
    d = n(657305),
    u = n(835473),
    h = n(12498),
    p = n(933557),
    m = n(471445),
    f = n(925329),
    g = n(554747),
    C = n(854698),
    x = n(897669),
    v = n(665149),
    _ = n(984370),
    I = n(910611),
    E = n(454585),
    b = n(134483),
    N = n(210975),
    Z = n(809244),
    S = n(618158),
    T = n(358221),
    j = n(362721),
    A = n(887012),
    y = n(613548),
    P = n(221888),
    M = n(339340),
    R = n(354459),
    L = n(981631),
    k = n(231338),
    O = n(388032),
    D = n(652807),
    w = n(554034);
function B(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, c.bp)(),
        a = (0, r.e7)([T.Z], () => T.Z.getLayout(n.id, l));
    return (0, i.jsx)(S.Z, {
        children: (0, i.jsx)(P.Z, {
            className: D.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === L.IlC.POPOUT || a === L.AEg.FULL_SCREEN
        })
    });
}
function U(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        r = (0, Z.Z)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: D.avatar,
                      size: s.AvatarSizes.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, i.jsx)(s.Text, {
                      className: D.playingText,
                      variant: 'text-md/medium',
                      color: a,
                      children: r
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        r = (0, A.Z)(a, !0),
        o = (0, g.qY)(a.id),
        c = null != o ? (0, C.DK)(o) : null,
        u = null != o;
    if ((null == l ? void 0 : l.type) === R.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(v.ZP.Divider, { className: D.divider }),
                    (0, i.jsx)(f.Z, {
                        game: n,
                        className: D.activityIcon
                    }),
                    (0, i.jsx)(s.Text, {
                        className: D.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, d.Z)(n.name)
                    }),
                    r &&
                        (0, i.jsx)(B, {
                            channel: a,
                            focusedParticipant: l
                        })
                ]
            }));
    else if ((null == l ? void 0 : l.type) === R.fO.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.ZP.Divider, { className: D.divider }),
                (0, i.jsx)(U, {
                    user: e,
                    channel: a,
                    stream: n,
                    color: r ? 'header-primary' : 'none'
                }),
                r &&
                    (0, i.jsx)(B, {
                        channel: a,
                        focusedParticipant: l
                    })
            ]
        });
    } else
        u &&
            (t = (0, i.jsx)(x.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, i.jsx)('div', {
        className: D.container,
        children: t
    });
}
function G(e) {
    let { channel: t, guild: l, appContext: o, inCall: c, isChatOpen: d, exitFullScreen: f } = e,
        { focusedParticipant: g } = (0, r.cj)(
            [T.Z],
            () => ({
                focusedParticipant: T.Z.getSelectedParticipant(t.id),
                participantsOpen: T.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        C = (0, p.ZP)(t),
        x = (0, m.KS)(t),
        [Z] = (0, u.Z)((null == g ? void 0 : g.type) === R.fO.ACTIVITY ? [g.id] : []),
        S = O.intl.string(O.t.BVZqJi);
    t.isDM() ? (S = O.intl.string(O.t.jN2DfX)) : t.isGroupDM() && (S = O.intl.string(O.t['e5y+go']));
    let A = (0, r.e7)([h.Z], () => h.Z.getChannelStatus(t)),
        P = t.isGuildVoice() && c && null != A && A.length > 0,
        B = (0, j.ZP)(t),
        U = P
            ? (0, i.jsx)(s.Tooltip, {
                  text: O.intl.string(O.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: B,
                  children: (e) =>
                      (0, i.jsxs)(s.Clickable, {
                          ...e,
                          className: a()(D.channelStatusClickable, { [D.hoverable]: B }),
                          onClick: B ? G : void 0,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  className: a()(D.channelStatus, w.markup, { [D.hoverable]: B }),
                                  children: E.Z.parseVoiceChannelStatus(A, !0, { channelId: t.id })
                              }),
                              B &&
                                  (0, i.jsx)(s.PencilIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      className: a()(D.pencilIcon, D.hoverable),
                                      width: 14,
                                      height: 14
                                  })
                          ]
                      })
              })
            : null;
    function G() {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) =>
                    (0, i.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            { modalKey: M.VOICE_CHANNEL_STATUS_MODAL_KEY }
        );
    }
    let F = (0, N.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: D.subtitleContainer,
        children: [
            (0, i.jsx)(s.ThemeProvider, {
                theme: k.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(v.ZP, {
                        onDoubleClick: _.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: U,
                        toolbar: (0, i.jsx)(y.Z, {
                            inPopout: o === L.IlC.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: c,
                            isChatOpen: d,
                            exitFullScreen: f
                        }),
                        children: [
                            null != x
                                ? (0, i.jsx)(v.ZP.Icon, {
                                      icon: x,
                                      disabled: !0,
                                      'aria-label': S
                                  })
                                : null,
                            (0, i.jsx)(v.ZP.Title, {
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        C,
                                        F &&
                                            (0, i.jsx)(s.Tooltip, {
                                                text: O.intl.string(O.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, i.jsx)(s.ShieldLockIcon, {
                                                        ...e,
                                                        size: 'xs',
                                                        'aria-label': O.intl.string(O.t.VHXh8f),
                                                        color: s.tokens.colors.INTERACTIVE_NORMAL,
                                                        className: D.secureFramesIcon
                                                    })
                                            })
                                    ]
                                })
                            }),
                            (0, i.jsx)(I.TS, {
                                channel: t,
                                guild: l
                            }),
                            (0, i.jsx)(H, {
                                focusedApplication: Z,
                                focusedParticipant: g,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, i.jsx)(b.Z, { channelId: t.id })
        ]
    });
}
