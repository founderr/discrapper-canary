n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(287734),
    u = n(40851),
    d = n(358221),
    h = n(659580),
    m = n(793865),
    p = n(575175),
    f = n(258609),
    g = n(74299),
    C = n(924301),
    x = n(459502),
    v = n(856691),
    _ = n(357156),
    I = n(923973),
    E = n(829750),
    b = n(189771),
    S = n(294629),
    Z = n(793319),
    T = n(560688),
    N = n(390322),
    j = n(871499),
    A = n(386000),
    y = n(25827),
    P = n(314897),
    M = n(131951),
    R = n(496675),
    L = n(944486),
    k = n(594174),
    O = n(881824),
    w = n(471253),
    D = n(922482),
    U = n(200498),
    B = n(146085),
    H = n(88751),
    F = n(427679),
    G = n(71275),
    V = n(600518),
    z = n(485287),
    W = n(754277),
    Y = n(719100),
    K = n(184805),
    q = n(643632),
    X = n(270295),
    J = n(981631),
    Q = n(388032),
    $ = n(135870);
function ee(e) {
    let { channel: t, appContext: n } = e;
    if ((0, Y.Z)(t)) {
        (0, O.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function et(e) {
    var t, n;
    let { channel: l } = e,
        r = (0, K.Z)(l.id),
        [a, c] = (0, X.Z)(l),
        u = (0, s.e7)([R.Z], () => R.Z.can(J.Plq.REQUEST_TO_SPEAK, l));
    if (r) return null;
    return (0, i.jsx)(j.d, {
        isActive: a,
        label: ((t = a), (n = u), t ? Q.intl.string(Q.t.GCimTk) : n ? Q.intl.string(Q.t.hLbG5O) : Q.intl.string(Q.t.e4WMv7)),
        iconComponent: () =>
            (0, i.jsx)(o.HandRequestSpeakIcon, {
                size: 'md',
                color: 'currentColor',
                className: a ? $.raisedHandButtonIconActive : $.raisedHandButtonIcon
            }),
        onClick: c,
        className: $.buttonSpacing,
        disabled: !u && !a
    });
}
let en = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [(0, i.jsx)(ea, { channelId: t.id }), n ? (0, i.jsx)(et, { channel: t }) : null, (0, i.jsx)(el, { channel: t })]
    });
});
function ei(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: $.primaryButtonColor,
        className: a()($.buttonSpacing, $.buttonWithTextButton),
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
                    children: Q.intl.string(Q.t['8Joh+v'])
                })
            ]
        })
    });
}
function el(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, u.bp)(),
        { canManageGuildEvent: r } = (0, _.XJ)(t),
        c = (0, s.e7)([F.Z], () => F.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, s.e7)([C.ZP], () => C.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        h = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: m } = (0, S.Z)(t),
        p = P.default.getId(),
        [f] = (0, X.Z)(t),
        g = H.ZP.isModerator(p, t.id),
        x = (0, U.B)(t.id),
        v = r(d);
    return h
        ? (g || v) && null != c
            ? (0, i.jsx)(o.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: r } = e;
                      return (0, i.jsx)(N.Z, {
                          children: (0, i.jsx)(o.Menu, {
                              navId: 'exit-options',
                              'aria-label': Q.intl.string(Q.t['3Uj+2t']),
                              onClose: r,
                              onSelect: n,
                              children: (0, i.jsx)(o.MenuItem, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, O.Ev)(t, l),
                                  label: Q.intl.string(Q.t.Fmx5y8),
                                  icon: o.CircleXIcon
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  animation: o.Popout.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: a } = n;
                      return (0, i.jsx)(j.d, {
                          className: $.buttonSpacing,
                          label: Q.intl.string(Q.t.c6qKws),
                          color: 'red',
                          iconComponent: () =>
                              (0, i.jsx)(o.PhoneHangUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              }),
                          onClick: () =>
                              ee({
                                  channel: t,
                                  appContext: l
                              }),
                          onPopoutClick: r,
                          popoutOpen: a
                      });
                  }
              })
            : (m && !x) || f
              ? (0, i.jsx)(o.Button, {
                    size: o.Button.Sizes.MEDIUM,
                    color: o.Button.Colors.RED,
                    className: a()($.buttonSpacing, $.buttonWithTextButton),
                    onClick: () =>
                        ee({
                            channel: t,
                            appContext: l
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
                                children: Q.intl.string(Q.t.SMKyio)
                            })
                        ]
                    })
                })
              : (0, i.jsx)(j.d, {
                    className: $.buttonSpacing,
                    label: Q.intl.string(Q.t.c6qKws),
                    color: 'red',
                    iconComponent: () =>
                        (0, i.jsx)(o.PhoneHangUpIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                    onClick: () =>
                        ee({
                            channel: t,
                            appContext: l
                        })
                })
        : (0, i.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.GREEN,
              className: a()($.buttonSpacing, $.buttonWithTextButton),
              onClick: () => {
                  var e;
                  return (e = t), void (0, D.TM)(e);
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
                          children: Q.intl.string(Q.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function er(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: $.primaryButtonColor,
        className: a()($.buttonSpacing, $.buttonWithTextButton),
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
                    children: Q.intl.string(Q.t.ezLpY2)
                })
            ]
        })
    });
}
function ea(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([W.Z], () => W.Z.isMuted()),
        l = (0, z.pp)(t),
        r = (0, s.e7)([W.Z], () => W.Z.shouldPlay());
    return l
        ? (0, i.jsx)(j.d, {
              isActive: n,
              className: $.buttonSpacing,
              label: n ? Q.intl.string(Q.t.ScHlfn) : Q.intl.string(Q.t.zqxfra),
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
              onClick: () => (0, V.v)(!n)
          })
        : (0, i.jsx)(j.d, {
              isActive: r,
              className: $.buttonSpacing,
              label: r ? Q.intl.string(Q.t.zqxfra) : Q.intl.string(Q.t.ScHlfn),
              iconComponent: () =>
                  r
                      ? (0, i.jsx)(o.MusicIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, i.jsx)(o.MusicSlashIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
              onClick: () => (0, V.z)(!r)
          });
}
let es = l.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: l, mute: r } = (0, S.Z)(t),
        c = (0, U.B)(t.id),
        u = (0, s.e7)([f.Z], () => null != f.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: x } = (0, I.Z)(),
        v = (0, b.Z)(t),
        { limit: _, reachedLimit: j } = (0, E.Z)(t),
        P = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        R = (0, s.e7)([M.Z], () => (0, g.Z)(M.Z)),
        O = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === t.id, [t.id]),
        D = (0, s.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, G.PK)(t.id),
        H = _ > 0,
        F = (j && !B) || (null != D && D.user.id !== (null == P ? void 0 : P.id));
    if (null == P) return null;
    let V = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(N.Z, { children: (0, i.jsx)(m.Z, { onClose: t }) });
                },
                position: 'top',
                align: 'center',
                animation: o.Popout.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: l } = t;
                    return (0, i.jsx)(y.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: x,
                        cameraUnavailable: C,
                        onChange: Z.r,
                        onCameraUnavailable: T.Z,
                        channelLimitReached: j,
                        channelLimit: _,
                        popoutOpen: l,
                        onPopoutClick: n
                    });
                }
            }),
            (0, i.jsx)(Z.NZ, {
                channel: t,
                currentUser: P,
                exitFullScreen: () => null,
                canGoLive: R,
                hasPermission: v,
                disabled: F
            })
        ]
    });
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [
            (0, i.jsx)(ea, { channelId: t.id }),
            O && (0, i.jsx)(et, { channel: t }),
            O && !n
                ? (0, i.jsxs)('div', {
                      className: a()($.avControls, $.buttonSpacing),
                      children: [
                          H && _ > 0 && V,
                          (0, i.jsx)(o.Popout, {
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(N.Z, {
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
                                  let { onClick: a } = e,
                                      { isShown: s } = t;
                                  return (0, i.jsx)(A.Z, {
                                      centerButton: !0,
                                      onPopoutClick: a,
                                      selfMute: l,
                                      serverMute: r,
                                      suppress: n,
                                      popoutOpen: s,
                                      onClick: () => (0, p.Z)(r, n, 'Stage Channel Controls'),
                                      awaitingRemote: u
                                  });
                              }
                          })
                      ]
                  })
                : null,
            O && c && n && (0, i.jsx)(ei, { onClick: () => (0, w.RK)(t, !1) }),
            O && !n && (0, i.jsx)(er, { onClick: () => (0, w.yi)(t) }),
            (0, i.jsx)(el, { channel: t })
        ]
    });
});
function eo(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: $.container,
        children: [(0, i.jsx)(ea, { channelId: t.id }), (0, i.jsx)(el, { channel: t })]
    });
}
t.Z = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, K.Z)(t.id),
        r = (0, U.B)(t.id),
        a = (0, s.e7)([R.Z], () => R.Z.can(B.yP, t), [t]),
        o = (0, q.Z)(t.id),
        c = (0, s.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !o && null == c;
    return n
        ? (0, i.jsx)(eo, { channel: t })
        : l || r
          ? (0, i.jsxs)('div', {
                className: $.containerColumn,
                children: [
                    (0, i.jsxs)('div', {
                        className: $.eventPrompts,
                        children: [
                            u ? (0, i.jsx)(x.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, i.jsx)('div', { className: $.separator }),
                            u && a
                                ? (0, i.jsx)(v.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, i.jsx)('div', { className: $.separator })
                        ]
                    }),
                    (0, i.jsx)(es, { channel: t })
                ]
            })
          : (0, i.jsx)(en, { channel: t });
});
