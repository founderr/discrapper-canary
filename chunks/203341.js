n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(358221),
    c = n(243778),
    d = n(390322),
    u = n(871499),
    h = n(819640),
    p = n(797258),
    m = n(446226),
    f = n(937393),
    g = n(43982),
    C = n(721351),
    x = n(420529),
    _ = n(927923),
    v = n(981631),
    I = n(921944),
    E = n(388032),
    b = n(125298);
function Z(e) {
    let { onClose: t, channel: n } = e,
        l = (0, x.Z)(n);
    return (0, i.jsx)(s.Menu, {
        onClose: t,
        onSelect: () => null,
        navId: 'transfer-menu',
        'aria-label': E.intl.string(E.t.jqqLb2),
        children: l
    });
}
function N(e) {
    let { channel: t, showLeftDivider: n = !1, ...x } = e,
        N = (0, m.Z)(),
        S = (0, r.e7)([p.Z], () => {
            var e, t;
            return null === (e = p.Z.getSessionById(null !== (t = null == N ? void 0 : N.sessionId) && void 0 !== t ? t : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        T = (0, r.e7)([h.Z], () => h.Z.hasLayers()),
        [j, A] = (0, r.Wu)([o.Z], () => [o.Z.getMode(t.id), o.Z.getLayout(t.id)]),
        y = (0, s.useModalsStore)(s.hasAnyModalOpenSelector),
        P = (0, f.Z)(),
        M = P.filter((e) => e.twoWayLink),
        [R, L] = l.useState(!1);
    if (null == N && 0 === P.length) return null;
    let k = v.WtW.VOICE !== j && [v.AEg.NO_CHAT, v.AEg.FULL_SCREEN].includes(A) ? 'top' : 'bottom',
        O = [];
    return (
        M.length > 0 && O.push(a.z.DONUT_DESKTOP_NUX),
        (0, i.jsx)(c.ZP, {
            contentTypes: O,
            children: (e) => {
                let { visibleContent: l, markAsDismissed: r } = e,
                    o = l === a.z.DONUT_DESKTOP_NUX;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        n ? (0, i.jsx)('div', { className: b.leftDivider }) : null,
                        (0, i.jsx)(s.Popout, {
                            position: k,
                            spacing: o ? 16 : void 0,
                            positionKey: ''.concat(j, ':').concat(A),
                            onRequestClose: () => L(!1),
                            shouldShow: (o || R) && !T && !y,
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, i.jsx)(d.Z, {
                                    children: o
                                        ? (0, i.jsx)(g.Z, {
                                              popoutPosition: k,
                                              onDismiss: () => r(I.L.UNKNOWN),
                                              onAccept: () => {
                                                  r(I.L.UNKNOWN), L(!0);
                                              },
                                              gameConsoleAccounts: M
                                          })
                                        : (0, i.jsx)(Z, {
                                              onClose: () => {
                                                  n();
                                              },
                                              channel: t
                                          })
                                });
                            },
                            children: (e) => {
                                var t;
                                return (0, i.jsx)(u.Z, {
                                    ...e,
                                    ...x,
                                    onClick: () => L(!0),
                                    label: null != (t = S) ? (t === _.YE.XBOX ? E.intl.string(E.t.T0uYKy) : E.intl.string(E.t.FWAzS0)) : E.intl.string(E.t['mbi/fH']),
                                    iconComponent: (0, C.Z)(S)
                                });
                            }
                        })
                    ]
                });
            }
        })
    );
}
