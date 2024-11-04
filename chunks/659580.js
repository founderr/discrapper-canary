n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(481060),
    s = n(410575),
    a = n(906732),
    o = n(213609),
    c = n(821564),
    u = n(453925),
    d = n(632304),
    h = n(947150),
    m = n(488021),
    p = n(822556),
    f = n(981631),
    g = n(388032),
    C = n(678199);
function x(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: x = !1, renderInputModes: v = !1, renderInputVolume: _ = !1, renderOutputVolume: I = !1, onSelect: E } = e,
        { analyticsLocations: b } = (0, a.ZP)();
    (0, o.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: b }
    });
    let S = (0, p.Z)(),
        Z = (0, h.Z)(b),
        T = (0, m.Z)(b),
        N = (0, c.Z)(b),
        j = (0, u.Z)(b),
        A = (0, d.Z)(b);
    return (0, i.jsx)(s.Z, {
        object: f.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(r.Menu, {
            onSelect: E,
            className: C.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': g.intl.string(g.t.ZR1Ss7),
            children: [
                x
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t.ElbIXF),
                          children: Z
                      })
                    : null,
                n
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t['6Ww0iI']),
                          children: T
                      })
                    : null,
                v
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t['pS+K2N']),
                          children: N
                      })
                    : null,
                (0, i.jsxs)(r.MenuGroup, {
                    children: [_ ? j : null, I ? A : null, S]
                })
            ]
        })
    });
}
