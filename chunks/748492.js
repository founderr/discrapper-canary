n.d(t, {
    Ds: function () {
        return M;
    },
    YB: function () {
        return x;
    },
    of: function () {
        return P;
    },
    q5: function () {
        return w;
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
    h = n(189771),
    p = n(560688),
    m = n(618158),
    g = n(922745),
    E = n(871499),
    v = n(402113),
    I = n(800965),
    S = n(157813),
    T = n(25827),
    b = n(131951),
    y = n(884338),
    A = n(349619),
    N = n(981631),
    C = n(231338),
    R = n(388032),
    O = n(761834),
    D = n(497041);
function L(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(E.Z, {
        iconClassName: a()(O.arrowIcon, { [O.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: o.ChevronSmallDownIcon,
        label: n ? R.intl.string(R.t['2TiKgY']) : R.intl.string(R.t.oN8bqa)
    });
}
function x(e) {
    var t, n;
    let { channel: i, applicationId: a, onMouseDown: o, onMouseMove: E, onMouseLeave: S, onJumpToChannel: y, idle: R, selectedParticipant: L } = e,
        x = (0, u.bp)() === N.IlC.POPOUT,
        w = (0, s.e7)([b.Z], () => b.Z.isVideoEnabled()),
        M = (0, s.e7)([b.Z], () => Object.values(b.Z.getVideoDevices())[0]),
        P = !1 === (null === (t = null == M ? void 0 : M.disabled) || void 0 === t || t),
        k = (0, c.Z)([a])[0],
        U = (0, h.Z)(i),
        G = (e) => {
            l.Z.setVideoEnabled(e);
        };
    return (0, r.jsxs)('div', {
        className: D.videoControls,
        onMouseMove: E,
        onMouseDown: o,
        onMouseLeave: S,
        children: [
            (0, r.jsx)('div', {
                className: D.topControls,
                children: (0, r.jsx)(g.r, {
                    idle: R,
                    title: null !== (n = null == k ? void 0 : k.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: y,
                    preventIdleComponent: m.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: D.bottomControls,
                children: [
                    (0, r.jsxs)(f.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: f.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(T.C, {
                                className: O.leftPipIcon,
                                enabled: w,
                                cameraUnavailable: !P,
                                hasPermission: U,
                                onChange: G,
                                onCameraUnavailable: () => {
                                    P ? G(!0) : (0, p.Z)();
                                }
                            }),
                            (0, r.jsx)(m.Z, {
                                children: (0, r.jsx)(d.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: D.__invalid_leftTrayIcon,
                                    participant: L,
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
                            x
                                ? null
                                : (0, r.jsx)(I.Z, {
                                      className: O.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, A.Z)(() => _.hP(i));
                                      },
                                      onClosePopout: C.Vq
                                  }),
                            (0, r.jsx)(v.Z, {
                                applicationId: a,
                                channelId: i.id,
                                className: O.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function w(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: s, onMouseMove: l, onMouseLeave: u, onJumpToChannel: d, idle: f, users: _ } = e,
        h = (0, c.Z)([i])[0];
    return (0, r.jsxs)(o.Clickable, {
        className: a()(D.videoControls, D.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: s,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, r.jsx)('div', {
                className: a()(D.topControls),
                children: (0, r.jsx)(g.r, {
                    idle: f,
                    title: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: m.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: D.bottomControls,
                children: [
                    (0, r.jsx)(y.Z, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: O.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(v.Z, {
                        applicationId: i,
                        channelId: n.id,
                        iconClassName: O.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: O.participantsButton
          })
        : null;
}
function P(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: s, showControls: l, applicationId: u, channel: d, onJumpToChannel: f, onToggleHeight: _, isExpanded: h, hideExpandedButton: p } = e,
        E = (0, c.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: O.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: s,
        children: (0, r.jsxs)('div', {
            className: a()(D.topControls, O.pipHeaderContent, { [O.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, r.jsx)(o.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: O.menuIcon
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
                                className: O.pipHeaderButtonsRight,
                                children: [
                                    p
                                        ? null
                                        : (0, r.jsx)(L, {
                                              isExpanded: h,
                                              onClick: _
                                          }),
                                    (0, r.jsx)(v.Z, {
                                        applicationId: u,
                                        channelId: d.id,
                                        iconClassName: O.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
