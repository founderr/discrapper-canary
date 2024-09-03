n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
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
    C = n(897669),
    g = n(665149),
    I = n(984370),
    x = n(910611),
    T = n(454585),
    N = n(134483),
    S = n(210975),
    v = n(809244),
    Z = n(618158),
    A = n(358221),
    M = n(362721),
    b = n(887012),
    R = n(613548),
    L = n(221888),
    j = n(339340),
    O = n(354459),
    P = n(981631),
    y = n(231338),
    D = n(689938),
    k = n(818479),
    U = n(910212);
function w(e) {
    let { focusedParticipant: t, channel: n } = e,
        a = (0, c.bp)(),
        s = (0, l.e7)([A.Z], () => A.Z.getLayout(n.id, a));
    return (0, i.jsx)(Z.Z, {
        children: (0, i.jsx)(L.Z, {
            className: k.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: a === P.IlC.POPOUT || s === P.AEg.FULL_SCREEN
        })
    });
}
function B(e) {
    let { user: t, channel: n, stream: a, color: s } = e,
        l = (0, v.Z)(n, t, a);
    return null == t || null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: k.avatar,
                      size: r.AvatarSizes.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, i.jsx)(r.Text, {
                      className: k.playingText,
                      variant: 'text-md/medium',
                      color: s,
                      children: l
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: a, channel: s } = e,
        l = (0, b.Z)(s, !0),
        o = (0, f.qY)(s.id),
        c = null != o ? (0, E.DK)(o) : null,
        d = null != o;
    if ((null == a ? void 0 : a.type) === O.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ZP.Divider, { className: k.divider }),
                    (0, i.jsx)(_.Z, {
                        game: n,
                        className: k.activityIcon
                    }),
                    (0, i.jsx)(r.Text, {
                        className: k.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, u.Z)(n.name)
                    }),
                    l &&
                        (0, i.jsx)(w, {
                            channel: s,
                            focusedParticipant: a
                        })
                ]
            }));
    else if ((null == a ? void 0 : a.type) === O.fO.STREAM) {
        let e = a.user,
            n = a.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.ZP.Divider, { className: k.divider }),
                (0, i.jsx)(B, {
                    user: e,
                    channel: s,
                    stream: n,
                    color: l ? 'header-primary' : 'none'
                }),
                l &&
                    (0, i.jsx)(w, {
                        channel: s,
                        focusedParticipant: a
                    })
            ]
        });
    } else
        d &&
            (t = (0, i.jsx)(C.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, i.jsx)('div', {
        className: k.container,
        children: t
    });
}
function G(e) {
    let { channel: t, guild: a, appContext: o, inCall: c, isChatOpen: u, exitFullScreen: _ } = e,
        { focusedParticipant: f } = (0, l.cj)(
            [A.Z],
            () => ({
                focusedParticipant: A.Z.getSelectedParticipant(t.id),
                participantsOpen: A.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        E = (0, p.ZP)(t),
        C = (0, m.KS)(t),
        [v] = (0, d.Z)((null == f ? void 0 : f.type) === O.fO.ACTIVITY ? [f.id] : []),
        Z = D.Z.Messages.VOICE_CHANNEL;
    t.isDM() ? (Z = D.Z.Messages.DM) : t.isGroupDM() && (Z = D.Z.Messages.GROUP_DM);
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
                          className: s()(k.channelStatusClickable, { [k.hoverable]: w }),
                          onClick: w ? G : void 0,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: 'text-xs/normal',
                                  className: s()(k.channelStatus, U.markup, { [k.hoverable]: w }),
                                  children: T.Z.parseVoiceChannelStatus(b, !0, { channelId: t.id })
                              }),
                              w &&
                                  (0, i.jsx)(r.PencilIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      className: s()(k.pencilIcon, k.hoverable),
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
            { modalKey: j.VOICE_CHANNEL_STATUS_MODAL_KEY }
        );
    }
    let V = (0, S.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: k.subtitleContainer,
        children: [
            (0, i.jsx)(r.ThemeProvider, {
                theme: y.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(g.ZP, {
                        onDoubleClick: I.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(R.Z, {
                            inPopout: o === P.IlC.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: c,
                            isChatOpen: u,
                            exitFullScreen: _
                        }),
                        children: [
                            null != C
                                ? (0, i.jsx)(g.ZP.Icon, {
                                      icon: C,
                                      disabled: !0,
                                      'aria-label': Z
                                  })
                                : null,
                            (0, i.jsx)(g.ZP.Title, {
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
                                                        className: k.secureFramesIcon
                                                    })
                                            })
                                    ]
                                })
                            }),
                            (0, i.jsx)(x.TS, {
                                channel: t,
                                guild: a
                            }),
                            (0, i.jsx)(H, {
                                focusedApplication: v,
                                focusedParticipant: f,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, i.jsx)(N.Z, { channelId: t.id })
        ]
    });
}
