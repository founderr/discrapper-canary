n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    l = n(981631),
    d = n(388032),
    c = n(373780),
    u = n(232186);
let h = 0,
    p = () => 'notification-position-selector-'.concat(h++),
    f = (e) => {
        switch (e) {
            case l._vf.TOP_LEFT:
                return d.intl.string(d.t.xlchpa);
            case l._vf.TOP_RIGHT:
                return d.intl.string(d.t['4uHRHB']);
            case l._vf.BOTTOM_LEFT:
                return d.intl.string(d.t.ovWFnJ);
            case l._vf.BOTTOM_RIGHT:
                return d.intl.string(d.t['M/9V7+']);
            default:
                return d.intl.string(d.t.AlY4ZW);
        }
    },
    g = [l._vf.DISABLED, l._vf.TOP_LEFT, l._vf.TOP_RIGHT, l._vf.BOTTOM_LEFT, l._vf.BOTTOM_RIGHT];
function m(e) {
    let { position: t, onChange: n } = e,
        [r] = s.useState(() => p()),
        h = t === l._vf.DISABLED ? d.intl.string(d.t.R6LxVV) : d.intl.formatToPlainString(d.t.XXHDMz, { position: f(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: a()(c.wrapper, { [c.disabledSelected]: t === l._vf.DISABLED }),
                    children: g.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: a()({
                                    [c.selected]: e === t,
                                    [c.disabled]: e === l._vf.DISABLED,
                                    [c.topRight]: e === l._vf.TOP_RIGHT,
                                    [c.topLeft]: e === l._vf.TOP_LEFT,
                                    [c.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                                    [c.bottomLeft]: e === l._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    f(e),
                                    e === l._vf.DISABLED
                                        ? (0, i.jsx)(o.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: c.disabledIcon
                                          })
                                        : null,
                                    (0, i.jsx)('input', {
                                        type: 'radio',
                                        name: r,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: c.hiddenInput
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
