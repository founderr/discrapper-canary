n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(410575),
    l = n(821564),
    r = n(453925),
    o = n(632304),
    c = n(947150),
    u = n(488021),
    d = n(822556),
    h = n(981631),
    m = n(689938),
    p = n(678199);
function _(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: _ = !1, renderInputModes: f = !1, renderInputVolume: E = !1, renderOutputVolume: g = !1, onSelect: C } = e,
        I = (0, d.Z)(),
        x = (0, c.Z)(),
        T = (0, u.Z)(),
        v = (0, l.Z)(),
        S = (0, r.Z)(),
        N = (0, o.Z)();
    return (0, i.jsx)(a.Z, {
        object: h.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.Menu, {
            onSelect: C,
            className: p.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': m.Z.Messages.AUDIO_DEVICE_ACTIONS,
            children: [
                _
                    ? (0, i.jsx)(s.MenuGroup, {
                          label: m.Z.Messages.INPUT_DEVICE,
                          children: x
                      })
                    : null,
                n
                    ? (0, i.jsx)(s.MenuGroup, {
                          label: m.Z.Messages.OUTPUT_DEVICE,
                          children: T
                      })
                    : null,
                f
                    ? (0, i.jsx)(s.MenuGroup, {
                          label: m.Z.Messages.FORM_LABEL_INPUT_MODE,
                          children: v
                      })
                    : null,
                (0, i.jsxs)(s.MenuGroup, {
                    children: [E ? S : null, g ? N : null, I]
                })
            ]
        })
    });
}
