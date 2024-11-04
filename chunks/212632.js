n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(167740),
    u = n(113207);
let h = 0,
    p = () => 'notification-position-selector-'.concat(h++),
    f = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return c.intl.string(c.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t['M/9V7+']);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    m = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function g(e) {
    let { position: t, onChange: n } = e,
        [s] = r.useState(() => p()),
        h = t === o._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, { position: f(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: l()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: m.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: l()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === o._vf.DISABLED,
                                    [d.topRight]: e === o._vf.TOP_RIGHT,
                                    [d.topLeft]: e === o._vf.TOP_LEFT,
                                    [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === o._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    f(e),
                                    e === o._vf.DISABLED
                                        ? (0, i.jsx)(a.DenyIcon, {
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
            (0, i.jsx)(a.FormText, {
                type: a.FormTextTypes.DESCRIPTION,
                className: u.marginTop8,
                children: h
            })
        ]
    });
}
(g.Positions = o._vf), (t.Z = g);
