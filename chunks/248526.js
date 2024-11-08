n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(848246),
    i = n(442837),
    o = n(481060),
    c = n(570140),
    s = n(746599),
    d = n(594174),
    u = n(246992),
    h = n(632102);
let m = [
        {
            label: 'No Override',
            value: !1
        },
        {
            label: 'Available: true',
            value: !0
        }
    ],
    x = [
        {
            label: 'No Override',
            value: !1
        },
        {
            label: 'Success',
            value: !0
        }
    ],
    f = [
        {
            label: '1 day',
            value: 1
        },
        {
            label: '7 days',
            value: 7
        }
    ];
function p() {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        [t, n] = a.useState(!1),
        [p, g] = a.useState(!1),
        [b, v] = a.useState(1);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(o.FormSection, {
                title: 'Override HQ Streaming: Available',
                className: h.formElement,
                tag: o.FormTitleTags.H3,
                children: (0, r.jsx)(o.SingleSelect, {
                    options: m,
                    value: t,
                    onChange: (e) => {
                        n(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, r.jsx)(o.FormSection, {
                title: 'Override HQ Streaming: Activate',
                className: h.formElement,
                tag: o.FormTitleTags.H3,
                children: (0, r.jsx)(o.SingleSelect, {
                    options: x,
                    value: p,
                    onChange: (e) => {
                        g(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, r.jsx)(o.FormSection, {
                title: 'Override Demo Duration',
                className: h.formElement,
                tag: o.FormTitleTags.H3,
                children: (0, r.jsx)(o.SingleSelect, {
                    options: f,
                    value: b,
                    onChange: (e) => {
                        v(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, r.jsx)(o.Button, {
                onClick: () =>
                    void (c.Z.dispatch({
                        type: 'PREMIUM_PERKS_DEMO_OVERRIDE',
                        perkType: l.q.STREAM_HIGH_QUALITY,
                        user: e,
                        available: t,
                        activateSuccess: p,
                        demoDuration: b
                    }),
                    (0, s.Vk)()),
                children: 'Update'
            })
        ]
    });
}
