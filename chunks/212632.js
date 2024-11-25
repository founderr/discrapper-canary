n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(481060),
    l = n(981631),
    c = n(388032),
    d = n(373780),
    u = n(232186);
let h = 0,
    p = () => 'notification-position-selector-'.concat(h++),
    f = (e) => {
        switch (e) {
            case l._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case l._vf.TOP_RIGHT:
                return c.intl.string(c.t['4uHRHB']);
            case l._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case l._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t['M/9V7+']);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    g = [l._vf.DISABLED, l._vf.TOP_LEFT, l._vf.TOP_RIGHT, l._vf.BOTTOM_LEFT, l._vf.BOTTOM_RIGHT];
function m(e) {
    let { position: t, onChange: n } = e,
        [s] = r.useState(() => p()),
        h = t === l._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, { position: f(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: a()(d.wrapper, { [d.disabledSelected]: t === l._vf.DISABLED }),
                    children: g.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: a()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === l._vf.DISABLED,
                                    [d.topRight]: e === l._vf.TOP_RIGHT,
                                    [d.topLeft]: e === l._vf.TOP_LEFT,
                                    [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === l._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    f(e),
                                    e === l._vf.DISABLED
                                        ? (0, i.jsx)(o.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, i.jsx)('input', {
                                        type: 'radio',
                                        name: s,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: d.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, i.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                className: u.marginTop8,
                children: h
            })
        ]
    });
}
(m.Positions = l._vf), (t.Z = m);
