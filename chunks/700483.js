n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(287734),
    u = n(40851),
    d = n(358221),
    h = n(659580),
    p = n(793865),
    m = n(575175),
    _ = n(258609),
    f = n(74299),
    E = n(924301),
    g = n(459502),
    C = n(856691),
    I = n(357156),
    T = n(923973),
    x = n(829750),
    v = n(189771),
    S = n(294629),
    N = n(793319),
    A = n(560688),
    Z = n(390322),
    M = n(871499),
    b = n(386000),
    R = n(25827),
    L = n(314897),
    j = n(131951),
    P = n(496675),
    O = n(944486),
    y = n(594174),
    D = n(881824),
    U = n(471253),
    k = n(922482),
    w = n(200498),
    B = n(146085),
    H = n(88751),
    G = n(427679),
    V = n(71275),
    F = n(600518),
    W = n(485287),
    z = n(754277),
    Y = n(719100),
    K = n(184805),
    q = n(643632),
    X = n(270295),
    J = n(981631),
    Q = n(689938),
    $ = n(135870);
function ee(e) {
    let { channel: t, appContext: n } = e;
    if ((0, Y.Z)(t)) {
        (0, D.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function et(e) {
    var t, n;
    let { channel: s } = e,
        a = (0, K.Z)(s.id),
        [l, c] = (0, X.Z)(s),
        u = (0, r.e7)([P.Z], () => P.Z.can(J.Plq.REQUEST_TO_SPEAK, s));
    if (a) return null;
    return (0, i.jsx)(M.d, {
        isActive: l,
        label: ((t = l), (n = u), t ? Q.Z.Messages.AUDIENCE_LOWER_HAND : n ? Q.Z.Messages.AUDIENCE_RAISE_HAND_CTA : Q.Z.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
        iconComponent: () =>
            (0, i.jsx)(o.HandRequestSpeakIcon, {
                size: 'md',
                color: 'currentColor',
                className: l ? $.raisedHandButtonIconActive : $.raisedHandButtonIcon
            }),
        onClick: c,
        className: $.buttonSpacing,
        disabled: !u && !l
    });
}
let en = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [(0, i.jsx)(el, { channelId: t.id }), n ? (0, i.jsx)(et, { channel: t }) : null, (0, i.jsx)(es, { channel: t })]
    });
});
function ei(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: $.primaryButtonColor,
        className: l()($.buttonSpacing, $.buttonWithTextButton),
        onClick: t,
        children: (0, i.jsxs)('div', {
            className: $.buttonWithTextInnerContainer,
            children: [
                (0, i.jsx)(o.MicrophoneArrowRightIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: $.buttonWithTextIcon
                }),
                (0, i.jsx)(o.Text, {
                    color: 'none',
                    variant: 'text-sm/medium',
                    children: Q.Z.Messages.MODERATOR_RAISE_OWN_HAND
                })
            ]
        })
    });
}
function es(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, u.bp)(),
        { canManageGuildEvent: a } = (0, I.XJ)(t),
        c = (0, r.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        h = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: p } = (0, S.Z)(t),
        m = L.default.getId(),
        [_] = (0, X.Z)(t),
        f = H.ZP.isModerator(m, t.id),
        g = (0, w.B)(t.id),
        C = a(d);
    return h
        ? (f || C) && null != c
            ? (0, i.jsx)(o.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: a } = e;
                      return (0, i.jsx)(Z.Z, {
                          children: (0, i.jsx)(o.Menu, {
                              navId: 'exit-options',
                              'aria-label': Q.Z.Messages.SET_STATUS,
                              onClose: a,
                              onSelect: n,
                              children: (0, i.jsx)(o.MenuItem, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, D.Ev)(t, s),
                                  label: Q.Z.Messages.END_GUILD_EVENT_FOR_EVERYONE,
                                  icon: o.CircleXIcon
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  animation: o.Popout.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: a } = e,
                          { isShown: l } = n;
                      return (0, i.jsx)(M.d, {
                          className: $.buttonSpacing,
                          label: Q.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
                          color: 'red',
                          iconComponent: () =>
                              (0, i.jsx)(o.PhoneHangUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              }),
                          onClick: () =>
                              ee({
                                  channel: t,
                                  appContext: s
                              }),
                          onPopoutClick: a,
                          popoutOpen: l
                      });
                  }
              })
            : (p && !g) || _
              ? (0, i.jsx)(o.Button, {
                    size: o.Button.Sizes.MEDIUM,
                    color: o.Button.Colors.RED,
                    className: l()($.buttonSpacing, $.buttonWithTextButton),
                    onClick: () =>
                        ee({
                            channel: t,
                            appContext: s
                        }),
                    children: (0, i.jsxs)('div', {
                        className: $.buttonWithTextInnerContainer,
                        children: [
                            (0, i.jsx)(o.PhoneHangUpIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: $.buttonWithTextIcon
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'none',
                                variant: 'text-sm/medium',
                                children: Q.Z.Messages.AUDIENCE_DISCONNECT
                            })
                        ]
                    })
                })
              : (0, i.jsx)(M.d, {
                    className: $.buttonSpacing,
                    label: Q.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
                    color: 'red',
                    iconComponent: () =>
                        (0, i.jsx)(o.PhoneHangUpIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                    onClick: () =>
                        ee({
                            channel: t,
                            appContext: s
                        })
                })
        : (0, i.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.GREEN,
              className: l()($.buttonSpacing, $.buttonWithTextButton),
              onClick: () => {
                  var e;
                  return (e = t), void (0, k.TM)(e);
              },
              children: (0, i.jsxs)('div', {
                  className: $.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.PhoneCallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: $.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: Q.Z.Messages.STAGE_CHANNEL_JOIN
                      })
                  ]
              })
          });
}
function ea(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: $.primaryButtonColor,
        className: l()($.buttonSpacing, $.buttonWithTextButton),
        onClick: t,
        children: (0, i.jsxs)('div', {
            className: $.buttonWithTextInnerContainer,
            children: [
                (0, i.jsx)(o.GroupArrowDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: $.buttonWithTextIcon
                }),
                (0, i.jsx)(o.Text, {
                    color: 'none',
                    variant: 'text-sm/medium',
                    children: Q.Z.Messages.MOVE_ME_TO_AUDIENCE
                })
            ]
        })
    });
}
function el(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([z.Z], () => z.Z.isMuted()),
        s = (0, W.pp)(t),
        a = (0, r.e7)([z.Z], () => z.Z.shouldPlay());
    return s
        ? (0, i.jsx)(M.d, {
              isActive: n,
              className: $.buttonSpacing,
              label: n ? Q.Z.Messages.STAGE_MUSIC_UNMUTE : Q.Z.Messages.STAGE_MUSIC_MUTE,
              iconComponent: () =>
                  n
                      ? (0, i.jsx)(o.MusicSlashIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, i.jsx)(o.MusicIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
              onClick: () => (0, F.v)(!n)
          })
        : (0, i.jsx)(M.d, {
              isActive: a,
              className: $.buttonSpacing,
              label: a ? Q.Z.Messages.STAGE_MUSIC_MUTE : Q.Z.Messages.STAGE_MUSIC_UNMUTE,
              iconComponent: () =>
                  a
                      ? (0, i.jsx)(o.MusicIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, i.jsx)(o.MusicSlashIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
              onClick: () => (0, F.z)(!a)
          });
}
let er = s.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: s, mute: a } = (0, S.Z)(t),
        c = (0, w.B)(t.id),
        u = (0, r.e7)([_.Z], () => null != _.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: E, enabled: g } = (0, T.Z)(),
        C = (0, v.Z)(t),
        { limit: I, reachedLimit: M } = (0, x.Z)(t),
        L = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
        P = (0, r.e7)([j.Z], () => (0, f.Z)(j.Z)),
        D = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        k = (0, r.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, V.PK)(t.id),
        H = I > 0,
        G = (M && !B) || (null != k && k.user.id !== (null == L ? void 0 : L.id));
    if (null == L) return null;
    let F = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(Z.Z, { children: (0, i.jsx)(p.Z, { onClose: t }) });
                },
                position: 'top',
                align: 'center',
                animation: o.Popout.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: s } = t;
                    return (0, i.jsx)(R.C, {
                        centerButton: !0,
                        hasPermission: C,
                        enabled: g,
                        cameraUnavailable: E,
                        onChange: N.r,
                        onCameraUnavailable: A.Z,
                        channelLimitReached: M,
                        channelLimit: I,
                        popoutOpen: s,
                        onPopoutClick: n
                    });
                }
            }),
            (0, i.jsx)(N.NZ, {
                channel: t,
                currentUser: L,
                exitFullScreen: () => null,
                canGoLive: P,
                hasPermission: C,
                disabled: G
            })
        ]
    });
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [
            (0, i.jsx)(el, { channelId: t.id }),
            D && (0, i.jsx)(et, { channel: t }),
            D && !n
                ? (0, i.jsxs)('div', {
                      className: l()($.avControls, $.buttonSpacing),
                      children: [
                          H && I > 0 && F,
                          (0, i.jsx)(o.Popout, {
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(Z.Z, {
                                      children: (0, i.jsx)(h.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderOutputDevices: !0
                                      })
                                  });
                              },
                              align: 'center',
                              position: 'top',
                              animation: o.Popout.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: l } = e,
                                      { isShown: r } = t;
                                  return (0, i.jsx)(b.Z, {
                                      centerButton: !0,
                                      onPopoutClick: l,
                                      selfMute: s,
                                      serverMute: a,
                                      suppress: n,
                                      popoutOpen: r,
                                      onClick: () => (0, m.Z)(a, n, 'Stage Channel Controls'),
                                      awaitingRemote: u
                                  });
                              }
                          })
                      ]
                  })
                : null,
            D && c && n && (0, i.jsx)(ei, { onClick: () => (0, U.RK)(t, !1) }),
            D && !n && (0, i.jsx)(ea, { onClick: () => (0, U.yi)(t) }),
            (0, i.jsx)(es, { channel: t })
        ]
    });
});
function eo(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [(0, i.jsx)(el, { channelId: t.id }), (0, i.jsx)(es, { channel: t })]
    });
}
t.Z = s.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        s = (0, K.Z)(t.id),
        a = (0, w.B)(t.id),
        l = (0, r.e7)([P.Z], () => P.Z.can(B.yP, t), [t]),
        o = (0, q.Z)(t.id),
        c = (0, r.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !o && null == c;
    return n
        ? (0, i.jsx)(eo, { channel: t })
        : s || a
          ? (0, i.jsxs)('div', {
                className: $.containerColumn,
                children: [
                    (0, i.jsxs)('div', {
                        className: $.eventPrompts,
                        children: [
                            u ? (0, i.jsx)(g.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, i.jsx)('div', { className: $.separator }),
                            u && l
                                ? (0, i.jsx)(C.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, i.jsx)('div', { className: $.separator })
                        ]
                    }),
                    (0, i.jsx)(er, { channel: t })
                ]
            })
          : (0, i.jsx)(en, { channel: t });
});
