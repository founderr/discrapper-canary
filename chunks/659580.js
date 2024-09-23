n.r(t),
    n.d(t, {
        default: function () {
            return g;
        }
    });
var i = n(735250);
n(470079);
var s = n(990547),
    a = n(481060),
    l = n(410575),
    r = n(906732),
    o = n(213609),
    c = n(821564),
    u = n(453925),
    d = n(632304),
    h = n(947150),
    m = n(488021),
    p = n(822556),
    _ = n(981631),
    f = n(689938),
    E = n(678199);
function g(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: g = !1, renderInputModes: C = !1, renderInputVolume: I = !1, renderOutputVolume: T = !1, onSelect: x } = e,
        S = (0, p.Z)(),
        v = (0, h.Z)(),
        N = (0, m.Z)(),
        A = (0, c.Z)(),
        Z = (0, u.Z)(),
        M = (0, d.Z)(),
        { analyticsLocations: b } = (0, r.ZP)();
    return (
        (0, o.Z)({
            type: s.ImpressionTypes.MENU,
            name: s.ImpressionNames.AUDIO_DEVICE_MENU,
            properties: { location_stack: b }
        }),
        (0, i.jsx)(l.Z, {
            object: _.qAy.CONTEXT_MENU,
            children: (0, i.jsxs)(a.Menu, {
                onSelect: x,
                className: E.menu,
                onClose: t,
                navId: 'audio-device-context',
                'aria-label': f.Z.Messages.AUDIO_DEVICE_ACTIONS,
                children: [
                    g
                        ? (0, i.jsx)(a.MenuGroup, {
                              label: f.Z.Messages.INPUT_DEVICE,
                              children: v
                          })
                        : null,
                    n
                        ? (0, i.jsx)(a.MenuGroup, {
                              label: f.Z.Messages.OUTPUT_DEVICE,
                              children: N
                          })
                        : null,
                    C
                        ? (0, i.jsx)(a.MenuGroup, {
                              label: f.Z.Messages.FORM_LABEL_INPUT_MODE,
                              children: A
                          })
                        : null,
                    (0, i.jsxs)(a.MenuGroup, {
                        children: [I ? Z : null, T ? M : null, S]
                    })
                ]
            })
        })
    );
}
