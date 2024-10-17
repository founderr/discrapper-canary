n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(99690),
    c = n(40851),
    u = n(657305),
    d = n(835473),
    h = n(12498),
    p = n(933557),
    m = n(471445),
    _ = n(925329),
    f = n(554747),
    E = n(854698),
    g = n(897669),
    C = n(665149),
    I = n(984370),
    T = n(910611),
    x = n(454585),
    v = n(134483),
    S = n(210975),
    N = n(809244),
    A = n(618158),
    Z = n(358221),
    M = n(362721),
    b = n(887012),
    R = n(613548),
    L = n(221888),
    P = n(339340),
    j = n(354459),
    O = n(981631),
    y = n(231338),
    D = n(689938),
    U = n(652807),
    k = n(554034);
function w(e) {
    let { focusedParticipant: t, channel: n } = e,
        s = (0, c.bp)(),
        a = (0, l.e7)([Z.Z], () => Z.Z.getLayout(n.id, s));
    return (0, i.jsx)(A.Z, {
        children: (0, i.jsx)(L.Z, {
            className: U.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: s === O.IlC.POPOUT || a === O.AEg.FULL_SCREEN
        })
    });
}
function B(e) {
    let { user: t, channel: n, stream: s, color: a } = e,
        l = (0, N.Z)(n, t, s);
    return null == t || null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: U.avatar,
                      size: r.AvatarSizes.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, i.jsx)(r.Text, {
                      className: U.playingText,
                      variant: 'text-md/medium',
                      color: a,
                      children: l
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: s, channel: a } = e,
        l = (0, b.Z)(a, !0),
        o = (0, f.qY)(a.id),
        c = null != o ? (0, E.DK)(o) : null,
        d = null != o;
    if ((null == s ? void 0 : s.type) === j.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(C.ZP.Divider, { className: U.divider }),
                    (0, i.jsx)(_.Z, {
                        game: n,
                        className: U.activityIcon
                    }),
                    (0, i.jsx)(r.Text, {
                        className: U.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, u.Z)(n.name)
                    }),
                    l &&
                        (0, i.jsx)(w, {
                            channel: a,
                            focusedParticipant: s
                        })
                ]
            }));
    else if ((null == s ? void 0 : s.type) === j.fO.STREAM) {
        let e = s.user,
            n = s.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C.ZP.Divider, { className: U.divider }),
                (0, i.jsx)(B, {
                    user: e,
                    channel: a,
                    stream: n,
                    color: l ? 'header-primary' : 'none'
                }),
                l &&
                    (0, i.jsx)(w, {
                        channel: a,
                        focusedParticipant: s
                    })
            ]
        });
    } else
        d &&
            (t = (0, i.jsx)(g.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, i.jsx)('div', {
        className: U.container,
        children: t
    });
}
function G(e) {
    let { channel: t, guild: s, appContext: o, inCall: c, isChatOpen: u, exitFullScreen: _ } = e,
        { focusedParticipant: f } = (0, l.cj)(
            [Z.Z],
            () => ({
                focusedParticipant: Z.Z.getSelectedParticipant(t.id),
                participantsOpen: Z.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        E = (0, p.ZP)(t),
        g = (0, m.KS)(t),
        [N] = (0, d.Z)((null == f ? void 0 : f.type) === j.fO.ACTIVITY ? [f.id] : []),
        A = D.Z.Messages.VOICE_CHANNEL;
    t.isDM() ? (A = D.Z.Messages.DM) : t.isGroupDM() && (A = D.Z.Messages.GROUP_DM);
    let b = (0, l.e7)([h.Z], () => h.Z.getChannelStatus(t)),
        L = t.isGuildVoice() && c && null != b && b.length > 0,
        w = (0, M.Z)(t),
        B = L
            ? (0, i.jsx)(r.Tooltip, {
                  text: D.Z.Messages.VOICE_CHANNEL_SET_STATUS,
                  delay: 500,
                  position: 'bottom',
                  shouldShow: w,
                  children: (e) =>
                      (0, i.jsxs)(r.Clickable, {
                          ...e,
                          className: a()(U.channelStatusClickable, { [U.hoverable]: w }),
                          onClick: w ? G : void 0,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: 'text-xs/normal',
                                  className: a()(U.channelStatus, k.markup, { [U.hoverable]: w }),
                                  children: x.Z.parseVoiceChannelStatus(b, !0, { channelId: t.id })
                              }),
                              w &&
                                  (0, i.jsx)(r.PencilIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      className: a()(U.pencilIcon, U.hoverable),
                                      width: 14,
                                      height: 14
                                  })
                          ]
                      })
              })
            : null;
    function G() {
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) =>
                    (0, i.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            { modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY }
        );
    }
    let V = (0, S.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: U.subtitleContainer,
        children: [
            (0, i.jsx)(r.ThemeProvider, {
                theme: y.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(C.ZP, {
                        onDoubleClick: I.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(R.Z, {
                            inPopout: o === O.IlC.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: c,
                            isChatOpen: u,
                            exitFullScreen: _
                        }),
                        children: [
                            null != g
                                ? (0, i.jsx)(C.ZP.Icon, {
                                      icon: g,
                                      disabled: !0,
                                      'aria-label': A
                                  })
                                : null,
                            (0, i.jsx)(C.ZP.Title, {
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        E,
                                        V &&
                                            (0, i.jsx)(r.Tooltip, {
                                                text: D.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
                                                children: (e) =>
                                                    (0, i.jsx)(r.ShieldLockIcon, {
                                                        ...e,
                                                        size: 'xs',
                                                        'aria-label': D.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                                                        color: r.tokens.colors.INTERACTIVE_NORMAL,
                                                        className: U.secureFramesIcon
                                                    })
                                            })
                                    ]
                                })
                            }),
                            (0, i.jsx)(T.TS, {
                                channel: t,
                                guild: s
                            }),
                            (0, i.jsx)(H, {
                                focusedApplication: N,
                                focusedParticipant: f,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, i.jsx)(v.Z, { channelId: t.id })
        ]
    });
}
