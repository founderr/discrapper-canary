r.d(n, {
    S: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(979714),
    s = r(434706),
    o = r(780384),
    l = r(79320),
    u = r(600795);
let c = (0, s.vQ)('keydown', (e) => !!(0, u.Tm)(e) && (e.preventDefault(), !0)),
    d = (0, s.vQ)('mousedown', (e) => -1 === e.type.indexOf('touch') && -1 !== e.type.indexOf('mouse') && ((0, l.Yk)(!1), !0)),
    f = {
        backends: [
            {
                id: 'html5',
                backend: a.PD,
                transition: d
            },
            {
                id: 'keyboard',
                backend: u.ZP,
                context: {
                    window,
                    document
                },
                options: {
                    onDndModeChanged: l.Yk,
                    announcer: o.uv
                },
                preview: !0,
                transition: c
            }
        ]
    };
function _(e) {
    let { children: n } = e;
    return (0, i.jsx)(s.WG, {
        options: f,
        children: n
    });
}
