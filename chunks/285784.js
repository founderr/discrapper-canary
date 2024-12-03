e.d(n, {
    Lh: function () {
        return m;
    },
    S0: function () {
        return h;
    },
    ZP: function () {
        return x;
    },
    ku: function () {
        return d;
    }
}),
    e(47120);
var l = e(200651),
    i = e(192379),
    o = e(846519),
    s = e(481060),
    r = e(765305),
    u = e(388032),
    c = e(77257);
function a(t) {
    let { text: n, disabled: e, onJoinClick: i } = t;
    return (0, l.jsx)(s.Button, {
        className: c.__invalid_button,
        size: s.Button.Sizes.SMALL,
        onClick: i,
        color: s.Button.Colors.GREEN,
        disabled: e,
        children: n
    });
}
function d(t) {
    let { onInviteClick: n, canInvite: e, isChannelPublic: r } = t,
        a = new o.V7(),
        [d, h] = i.useState(!1);
    i.useEffect(
        () => () => {
            a.stop();
        },
        []
    );
    let m = (t) => {
        null != n && n(t), h(!0), a.start(1000, () => h(!1));
    };
    return null == n
        ? null
        : (0, l.jsx)(s.Tooltip, {
              text: g(e, r),
              position: 'top',
              tooltipClassName: c.tooltips,
              'aria-label': u.intl.string(u.t.Ej3B3d),
              children: (t) =>
                  e && r
                      ? (0, l.jsxs)(s.Button, {
                            ...t,
                            className: c.__invalid_button,
                            innerClassName: c.innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            onClick: n,
                            children: [
                                (0, l.jsx)(s.ShareIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                u.intl.string(u.t.RDE0SU)
                            ]
                        })
                      : (0, l.jsxs)(s.Button, {
                            ...t,
                            className: c.__invalid_button,
                            innerClassName: c.innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            disabled: d,
                            look: d ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                            onClick: m,
                            children: [
                                d
                                    ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                    : (0, l.jsx)(s.LinkIcon, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                d ? u.intl.string(u.t['t5VZ8/']) : u.intl.string(u.t.RDE0SU)
                            ]
                        })
          });
}
function h(t) {
    let { isUserRsvped: n, isUserLurking: e, onRsvpClick: i, ...o } = t,
        r = n && !e;
    return (0, l.jsxs)(s.Button, {
        ...o,
        className: c.__invalid_button,
        innerClassName: c.innerButton,
        size: s.Button.Sizes.SMALL,
        onClick: i,
        color: s.Button.Colors.PRIMARY,
        look: r ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
        disabled: e,
        children: [
            r
                ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
                : (0, l.jsx)(s.BellIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
            u.intl.string(u.t.DlcqlZ)
        ]
    });
}
function m(t) {
    return (0, l.jsx)(s.Tooltip, {
        text: u.intl.string(u.t['26dTyc']),
        position: 'top',
        tooltipClassName: c.tooltips,
        'aria-label': u.intl.string(u.t.Ej3B3d),
        children: (n) =>
            (0, l.jsx)(h, {
                ...n,
                ...t
            })
    });
}
let C = (t) => null == t || t,
    g = (t, n) => (C(t) ? u.intl.string(u.t.vk5Xw8) : C(n) ? u.intl.string(u.t.FFLWGR) : u.intl.string(u.t.k9KGYm));
function x(t) {
    let { isActive: n, isUserLurking: e, rsvped: i, canInvite: o, isChannelPublic: C = !0, entityType: g, onContextMenu: x, onJoinClick: v, onRsvpClick: k, onStartClick: p, onInviteClick: f, onEndClick: B, isJoined: N = !1 } = t,
        j = void 0 !== v;
    return (0, l.jsxs)('div', {
        className: c.container,
        children: [
            null != x
                ? (0, l.jsx)(s.Tooltip, {
                      text: u.intl.string(u.t.UKOtz8),
                      position: 'top',
                      'aria-label': u.intl.string(u.t.bt75u7),
                      children: (t) =>
                          (0, l.jsx)(s.Clickable, {
                              ...t,
                              onClick: x,
                              className: c.iconButton,
                              children: (0, l.jsx)(s.MoreHorizontalIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20,
                                  className: c.icon
                              })
                          })
                  })
                : null,
            (0, l.jsx)(d, {
                onInviteClick: f,
                canInvite: o,
                isChannelPublic: C
            }),
            n && g !== r.WX.EXTERNAL
                ? (0, l.jsx)(a, {
                      text: (function (t) {
                          let { isJoined: n, canJoin: e, isVoiceChannel: l } = t;
                          return e ? (n ? u.intl.string(u.t.aW2YlJ) : l ? u.intl.string(u.t.nxUtoa) : u.intl.string(u.t.ZYO5OD)) : u.intl.string(u.t.TVBCKS);
                      })({
                          isJoined: N,
                          canJoin: j,
                          isVoiceChannel: g === r.WX.VOICE
                      }),
                      disabled: !j,
                      onJoinClick: v
                  })
                : null,
            e &&
                !n &&
                (0, l.jsx)(m, {
                    isUserRsvped: i,
                    isUserLurking: e
                }),
            !e &&
                !n &&
                null != k &&
                (0, l.jsx)(h, {
                    isUserRsvped: i,
                    isUserLurking: e,
                    onRsvpClick: k
                }),
            n || null == p
                ? null
                : (0, l.jsx)(s.Button, {
                      className: c.__invalid_button,
                      innerClassName: c.innerButton,
                      size: s.Button.Sizes.SMALL,
                      onClick: p,
                      color: s.Button.Colors.GREEN,
                      children: u.intl.string(u.t.I0v0Qk)
                  }),
            n && null != B
                ? (0, l.jsx)(s.Button, {
                      className: c.__invalid_button,
                      innerClassName: c.innerButton,
                      size: s.Button.Sizes.SMALL,
                      onClick: B,
                      color: s.Button.Colors.PRIMARY,
                      children: u.intl.string(u.t.qaYzPD)
                  })
                : null
        ]
    });
}
