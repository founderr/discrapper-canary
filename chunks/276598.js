n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(704215),
    r = n(481060),
    o = n(358221),
    c = n(243778),
    u = n(390322),
    d = n(871499),
    h = n(819640),
    p = n(797258),
    m = n(446226),
    _ = n(937393),
    f = n(43982),
    E = n(721351),
    g = n(420529),
    C = n(927923),
    I = n(981631),
    T = n(921944),
    x = n(689938),
    S = n(798682);
function v(e) {
    let { onClose: t, channel: n } = e,
        s = (0, g.Z)(n);
    return (0, i.jsx)(r.Menu, {
        onClose: t,
        onSelect: () => null,
        navId: 'transfer-menu',
        'aria-label': x.Z.Messages.TRANSFER,
        children: s
    });
}
function N(e) {
    let { channel: t, showLeftDivider: n = !1, ...g } = e,
        N = (0, m.Z)(),
        A = (0, a.e7)([p.Z], () => {
            var e, t;
            return null === (e = p.Z.getSessionById(null !== (t = null == N ? void 0 : N.sessionId) && void 0 !== t ? t : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        Z = (0, a.e7)([h.Z], () => h.Z.hasLayers()),
        [M, b] = (0, a.Wu)([o.Z], () => [o.Z.getMode(t.id), o.Z.getLayout(t.id)]),
        R = (0, r.useModalsStore)(r.hasAnyModalOpenSelector),
        L = (0, _.Z)(),
        j = L.filter((e) => e.twoWayLink),
        [P, O] = s.useState(!1);
    if (null == N && 0 === L.length) return null;
    let y = I.WtW.VOICE !== M && [I.AEg.NO_CHAT, I.AEg.FULL_SCREEN].includes(b) ? 'top' : 'bottom',
        D = [];
    return (
        j.length > 0 && D.push(l.z.DONUT_DESKTOP_NUX),
        (0, i.jsx)(c.ZP, {
            contentTypes: D,
            children: (e) => {
                let { visibleContent: s, markAsDismissed: a } = e,
                    o = s === l.z.DONUT_DESKTOP_NUX;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        n ? (0, i.jsx)('div', { className: S.leftDivider }) : null,
                        (0, i.jsx)(r.Popout, {
                            position: y,
                            spacing: o ? 16 : void 0,
                            positionKey: ''.concat(M, ':').concat(b),
                            onRequestClose: () => O(!1),
                            shouldShow: (o || P) && !Z && !R,
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, i.jsx)(u.Z, {
                                    children: o
                                        ? (0, i.jsx)(f.Z, {
                                              popoutPosition: y,
                                              onDismiss: () => a(T.L.UNKNOWN),
                                              onAccept: () => {
                                                  a(T.L.UNKNOWN), O(!0);
                                              },
                                              gameConsoleAccounts: j
                                          })
                                        : (0, i.jsx)(v, {
                                              onClose: () => {
                                                  n();
                                              },
                                              channel: t
                                          })
                                });
                            },
                            children: (e) => {
                                var t;
                                return (0, i.jsx)(d.Z, {
                                    ...e,
                                    ...g,
                                    onClick: () => O(!0),
                                    label: null != (t = A) ? (t === C.YE.XBOX ? x.Z.Messages.XBOX_REMOTE_CONNECTED_RAW : x.Z.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW) : x.Z.Messages.CONSOLE_TRANSFER,
                                    iconComponent: (0, E.Z)(A)
                                });
                            }
                        })
                    ]
                });
            }
        })
    );
}
