n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r,
    a,
    l = n(200651);
n(192379);
var i = n(442837),
    o = n(704215),
    c = n(481060),
    s = n(713284),
    d = n(883904),
    u = n(211644),
    h = n(675478),
    m = n(681619),
    x = n(388958);
((a = r || (r = {})).EVENT = 'events'), (a.CANDIDATES = 'candidates');
let f = (e) => {
        switch (e) {
            case s.D.DC_DISMISSED:
                return 'DISMISS:';
            case s.D.DC_SHOWN:
                return 'SHOW:';
            case s.D.DC_SHOW_REQUEST:
                return 'REQUEST TO SHOW:';
            default:
                return 'UNKNOWN TYPE:';
        }
    },
    p = [
        {
            key: 'events',
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return ''.concat(t, ' ').concat(o.z[n]);
            }
        }
    ],
    b = [
        {
            key: 'candidates',
            render(e) {
                let { dismissibleContent: t } = e;
                return ''.concat(o.z[t]);
            }
        }
    ];
function g() {
    let e = (0, i.e7)([s.Z], () => s.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        n = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: f(t) + n.toString(),
                event: f(t),
                dismissibleContent: n
            };
        }),
        r = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, l.jsxs)('div', {
        className: x.panelContainer,
        children: [
            (0, l.jsxs)('div', {
                className: x.buttonContainer,
                children: [
                    (0, l.jsx)(c.Button, {
                        className: x.button,
                        onClick: () => (0, d.EG)(),
                        children: 'Reset Daily Cap'
                    }),
                    (0, l.jsx)(c.Button, {
                        className: x.button,
                        onClick: h.sr,
                        children: 'Clear All Dismissed Contents'
                    }),
                    (0, l.jsx)(c.Button, {
                        className: x.button,
                        onClick: h.bE,
                        children: 'Check All Dismissed Contents'
                    })
                ]
            }),
            (0, l.jsx)('br', {}),
            (0, l.jsx)('div', {
                className: x.candidatesTableContainer,
                children: (0, l.jsx)(m.Z, {
                    className: x.candidatesTable,
                    columns: b,
                    data: r
                })
            }),
            (0, l.jsx)('br', {}),
            (0, l.jsx)(m.Z, {
                columns: p,
                data: n
            })
        ]
    });
}
