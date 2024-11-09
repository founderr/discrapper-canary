e.r(n),
    e.d(n, {
        default: function () {
            return d;
        }
    });
var a = e(200651);
e(192379);
var r = e(481060),
    o = e(600164),
    i = e(313201),
    l = e(988158),
    s = e(388032),
    c = e(293784);
function d(t) {
    let { url: n, onClose: d, transitionState: u } = t,
        x = (0, i.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, l.h)(n);
    return (0, a.jsxs)(r.ModalRoot, {
        transitionState: u,
        'aria-labelledby': x,
        children: [
            (0, a.jsx)('img', {
                className: c.art,
                src: e(902623),
                alt: ''
            }),
            (0, a.jsx)(r.ModalContent, {
                children: (0, a.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    justify: o.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)(r.Heading, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: s.intl.string(s.t['2B3wj4'])
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: s.intl.format(s.t.jnHyYW, {})
                        }),
                        (0, a.jsxs)(r.Scroller, {
                            className: c.linkCalloutContainer,
                            children: [
                                (0, a.jsxs)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: [h, '//']
                                }),
                                (0, a.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: 'text-normal',
                                    children: m
                                }),
                                (0, a.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: b
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, a.jsx)(r.ModalFooter, {
                children: (0, a.jsx)(r.Button, {
                    type: 'button',
                    size: r.Button.Sizes.MEDIUM,
                    color: r.Button.Colors.BRAND,
                    onClick: d,
                    children: s.intl.string(s.t['/g10LC'])
                })
            })
        ]
    });
}
