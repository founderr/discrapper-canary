n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(99690),
    c = n(40851),
    u = n(657305),
    d = n(835473),
    h = n(12498),
    m = n(933557),
    p = n(471445),
    f = n(925329),
    g = n(554747),
    C = n(854698),
    x = n(897669),
    v = n(665149),
    _ = n(984370),
    I = n(910611),
    E = n(454585),
    b = n(134483),
    S = n(210975),
    Z = n(809244),
    T = n(618158),
    N = n(358221),
    j = n(362721),
    A = n(887012),
    y = n(613548),
    P = n(221888),
    M = n(339340),
    R = n(354459),
    L = n(981631),
    k = n(231338),
    O = n(388032),
    w = n(652807),
    D = n(554034);
function U(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, c.bp)(),
        r = (0, a.e7)([N.Z], () => N.Z.getLayout(n.id, l));
    return (0, i.jsx)(T.Z, {
        children: (0, i.jsx)(P.Z, {
            className: w.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === L.IlC.POPOUT || r === L.AEg.FULL_SCREEN
        })
    });
}
function B(e) {
    let { user: t, channel: n, stream: l, color: r } = e,
        a = (0, Z.Z)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: w.avatar,
                      size: s.AvatarSizes.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, i.jsx)(s.Text, {
                      className: w.playingText,
                      variant: 'text-md/medium',
                      color: r,
                      children: a
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: r } = e,
        a = (0, A.Z)(r, !0),
        o = (0, g.qY)(r.id),
        c = null != o ? (0, C.DK)(o) : null,
        d = null != o;
    if ((null == l ? void 0 : l.type) === R.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(v.ZP.Divider, { className: w.divider }),
                    (0, i.jsx)(f.Z, {
                        game: n,
                        className: w.activityIcon
                    }),
                    (0, i.jsx)(s.Text, {
                        className: w.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, u.Z)(n.name)
                    }),
                    a &&
                        (0, i.jsx)(U, {
                            channel: r,
                            focusedParticipant: l
                        })
                ]
            }));
    else if ((null == l ? void 0 : l.type) === R.fO.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.ZP.Divider, { className: w.divider }),
                (0, i.jsx)(B, {
                    user: e,
                    channel: r,
                    stream: n,
                    color: a ? 'header-primary' : 'none'
                }),
                a &&
                    (0, i.jsx)(U, {
                        channel: r,
                        focusedParticipant: l
                    })
            ]
        });
    } else
        d &&
            (t = (0, i.jsx)(x.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, i.jsx)('div', {
        className: w.container,
        children: t
    });
}
function F(e) {
    let { channel: t, guild: l, appContext: o, inCall: c, isChatOpen: u, exitFullScreen: f } = e,
        { focusedParticipant: g } = (0, a.cj)(
            [N.Z],
            () => ({
                focusedParticipant: N.Z.getSelectedParticipant(t.id),
                participantsOpen: N.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        C = (0, m.ZP)(t),
        x = (0, p.KS)(t),
        [Z] = (0, d.Z)((null == g ? void 0 : g.type) === R.fO.ACTIVITY ? [g.id] : []),
        T = O.intl.string(O.t.BVZqJi);
    t.isDM() ? (T = O.intl.string(O.t.jN2DfX)) : t.isGroupDM() && (T = O.intl.string(O.t['e5y+go']));
    let A = (0, a.e7)([h.Z], () => h.Z.getChannelStatus(t)),
        P = t.isGuildVoice() && c && null != A && A.length > 0,
        U = (0, j.Z)(t),
        B = P
            ? (0, i.jsx)(s.Tooltip, {
                  text: O.intl.string(O.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: U,
                  children: (e) =>
                      (0, i.jsxs)(s.Clickable, {
                          ...e,
                          className: r()(w.channelStatusClickable, { [w.hoverable]: U }),
                          onClick: U ? F : void 0,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  className: r()(w.channelStatus, D.markup, { [w.hoverable]: U }),
                                  children: E.Z.parseVoiceChannelStatus(A, !0, { channelId: t.id })
                              }),
                              U &&
                                  (0, i.jsx)(s.PencilIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      className: r()(w.pencilIcon, w.hoverable),
                                      width: 14,
                                      height: 14
                                  })
                          ]
                      })
              })
            : null;
    function F() {
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
    let G = (0, S.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: w.subtitleContainer,
        children: [
            (0, i.jsx)(s.ThemeProvider, {
                theme: k.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(v.ZP, {
                        onDoubleClick: _.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(y.Z, {
                            inPopout: o === L.IlC.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: c,
                            isChatOpen: u,
                            exitFullScreen: f
                        }),
                        children: [
                            null != x
                                ? (0, i.jsx)(v.ZP.Icon, {
                                      icon: x,
                                      disabled: !0,
                                      'aria-label': T
                                  })
                                : null,
                            (0, i.jsx)(v.ZP.Title, {
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        C,
                                        G &&
                                            (0, i.jsx)(s.Tooltip, {
                                                text: O.intl.string(O.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, i.jsx)(s.ShieldLockIcon, {
                                                        ...e,
                                                        size: 'xs',
                                                        'aria-label': O.intl.string(O.t.VHXh8f),
                                                        color: s.tokens.colors.INTERACTIVE_NORMAL,
                                                        className: w.secureFramesIcon
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
