n.d(t, {
    Ds: function () {
        return P;
    },
    YB: function () {
        return w;
    },
    of: function () {
        return k;
    },
    q5: function () {
        return M;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(40851),
    c = n(835473),
    d = n(221888),
    f = n(600164),
    _ = n(788983),
    p = n(189771),
    h = n(560688),
    m = n(618158),
    g = n(922745),
    E = n(871499),
    v = n(402113),
    I = n(800965),
    b = n(157813),
    T = n(25827),
    S = n(131951),
    y = n(316253),
    A = n(884338),
    N = n(349619),
    C = n(981631),
    R = n(231338),
    O = n(388032),
    D = n(953518),
    L = n(880397);
function x(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(E.Z, {
        iconClassName: a()(D.arrowIcon, { [D.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: o.ChevronSmallDownIcon,
        label: n ? O.intl.string(O.t['2TiKgY']) : O.intl.string(O.t.oN8bqa)
    });
}
function w(e) {
    var t, n;
    let { channel: i, applicationId: a, onMouseDown: o, onMouseMove: E, onMouseLeave: b, onJumpToChannel: A, idle: O, selectedParticipant: x } = e,
        w = (0, u.bp)() === C.IlC.POPOUT,
        M = (0, s.e7)([S.Z], () => S.Z.isVideoEnabled()),
        P = (0, s.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]),
        k = !1 === (null === (t = null == P ? void 0 : P.disabled) || void 0 === t || t),
        U = (0, c.Z)([a])[0],
        B = (0, p.Z)(i),
        G = (e) => {
            l.Z.setVideoEnabled(e);
        };
    return (0, r.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: E,
        onMouseDown: o,
        onMouseLeave: b,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(g.r, {
                    idle: O,
                    title: null !== (n = null == U ? void 0 : U.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: A,
                    preventIdleComponent: m.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(f.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: f.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(T.C, {
                                className: D.leftPipIcon,
                                enabled: M,
                                cameraUnavailable: !k,
                                hasPermission: B,
                                onChange: G,
                                onCameraUnavailable: () => {
                                    k ? G(!0) : (0, h.Z)();
                                }
                            }),
                            (0, r.jsx)(m.Z, {
                                children: (0, r.jsx)(d.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: L.__invalid_leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(f.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: f.Z.Justify.END,
                        basis: '50%',
                        align: f.Z.Align.CENTER,
                        children: [
                            w || (0, y.Z)()
                                ? null
                                : (0, r.jsx)(I.Z, {
                                      className: D.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, N.Z)(() => _.hP(i));
                                      },
                                      onClosePopout: R.Vq
                                  }),
                            (0, r.jsx)(v.Z, {
                                applicationId: a,
                                channelId: i.id,
                                className: D.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function M(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: s, onMouseMove: l, onMouseLeave: u, onJumpToChannel: d, idle: f, users: _ } = e,
        p = (0, c.Z)([i])[0];
    return (0, r.jsxs)(o.Clickable, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: s,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, r.jsx)('div', {
                className: a()(L.topControls),
                children: (0, r.jsx)(g.r, {
                    idle: f,
                    title: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: m.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsx)(A.Z, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: D.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(v.Z, {
                        applicationId: i,
                        channelId: n.id,
                        iconClassName: D.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function P(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(b.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: D.participantsButton
          })
        : null;
}
function k(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: s, showControls: l, applicationId: u, channel: d, onJumpToChannel: f, onToggleHeight: _, isExpanded: p, hideExpandedButton: h } = e,
        E = (0, c.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: D.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: s,
        children: (0, r.jsxs)('div', {
            className: a()(L.topControls, D.pipHeaderContent, { [D.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, r.jsx)(o.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: D.menuIcon
                    }),
                l &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(g.r, {
                                idle: !l,
                                title: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: f,
                                preventIdleComponent: m.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: D.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(x, {
                                              isExpanded: p,
                                              onClick: _
                                          }),
                                    (0, r.jsx)(v.Z, {
                                        applicationId: u,
                                        channelId: d.id,
                                        iconClassName: D.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
