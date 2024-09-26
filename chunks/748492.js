n.d(t, {
    Ds: function () {
        return U;
    },
    YB: function () {
        return M;
    },
    of: function () {
        return w;
    },
    q5: function () {
        return P;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    u = n(40851),
    c = n(835473),
    d = n(221888),
    _ = n(600164),
    E = n(788983),
    f = n(189771),
    h = n(560688),
    p = n(618158),
    m = n(922745),
    I = n(871499),
    T = n(402113),
    g = n(800965),
    S = n(157813),
    A = n(25827),
    v = n(131951),
    N = n(884338),
    O = n(349619),
    R = n(981631),
    C = n(231338),
    y = n(689938),
    L = n(761834),
    b = n(497041);
function D(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(I.Z, {
        iconClassName: a()(L.arrowIcon, { [L.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.ChevronSmallDownIcon,
        label: n ? y.Z.Messages.PICTURE_IN_PICTURE_COLLAPSE : y.Z.Messages.PICTURE_IN_PICTURE_EXPAND
    });
}
function M(e) {
    var t, n;
    let { channel: i, applicationId: a, onMouseDown: s, onMouseMove: I, onMouseLeave: S, onJumpToChannel: N, idle: y, selectedParticipant: D } = e,
        M = (0, u.bp)() === R.IlC.POPOUT,
        P = (0, o.e7)([v.Z], () => v.Z.isVideoEnabled()),
        U = (0, o.e7)([v.Z], () => Object.values(v.Z.getVideoDevices())[0]),
        w = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t),
        x = (0, c.Z)([a])[0],
        G = (0, f.Z)(i),
        k = (e) => {
            l.Z.setVideoEnabled(e);
        },
        B = () => {
            w ? k(!0) : (0, h.Z)();
        },
        F = () => {
            (0, O.Z)(() => E.hP(i));
        };
    return (0, r.jsxs)('div', {
        className: b.videoControls,
        onMouseMove: I,
        onMouseDown: s,
        onMouseLeave: S,
        children: [
            (0, r.jsx)('div', {
                className: b.topControls,
                children: (0, r.jsx)(m.r, {
                    idle: y,
                    title: null !== (n = null == x ? void 0 : x.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: N,
                    preventIdleComponent: p.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: b.bottomControls,
                children: [
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(A.C, {
                                className: L.leftPipIcon,
                                enabled: P,
                                cameraUnavailable: !w,
                                hasPermission: G,
                                onChange: k,
                                onCameraUnavailable: B
                            }),
                            (0, r.jsx)(p.Z, {
                                children: (0, r.jsx)(d.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: b.__invalid_leftTrayIcon,
                                    participant: D,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: _.Z.Justify.END,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            M
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      className: L.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: F,
                                      onClosePopout: C.Vq
                                  }),
                            (0, r.jsx)(T.Z, {
                                applicationId: a,
                                channelId: i.id,
                                className: L.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function P(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: o, onMouseMove: l, onMouseLeave: u, onJumpToChannel: d, idle: _, users: E } = e,
        f = (0, c.Z)([i])[0];
    return (0, r.jsxs)(s.Clickable, {
        className: a()(b.videoControls, b.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: o,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, r.jsx)('div', {
                className: a()(b.topControls),
                children: (0, r.jsx)(m.r, {
                    idle: _,
                    title: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: p.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: b.bottomControls,
                children: [
                    (0, r.jsx)(N.Z, {
                        renderIcon: !1,
                        users: E,
                        size: 24,
                        max: 3,
                        className: L.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(T.Z, {
                        applicationId: i,
                        channelId: n.id,
                        iconClassName: L.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: L.participantsButton
          })
        : null;
}
function w(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: o, showControls: l, applicationId: u, channel: d, onJumpToChannel: _, onToggleHeight: E, isExpanded: f, hideExpandedButton: h } = e,
        I = (0, c.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: L.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: o,
        children: (0, r.jsxs)('div', {
            className: a()(b.topControls, L.pipHeaderContent, { [L.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, r.jsx)(s.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: L.menuIcon
                    }),
                l &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.r, {
                                idle: !l,
                                title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: _,
                                preventIdleComponent: p.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: L.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(D, {
                                              isExpanded: f,
                                              onClick: E
                                          }),
                                    (0, r.jsx)(T.Z, {
                                        applicationId: u,
                                        channelId: d.id,
                                        iconClassName: L.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
