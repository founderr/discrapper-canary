t.d(n, {
    Z: function () {
        return c;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(481060),
    s = t(388032),
    o = t(17369);
function l(e) {
    let { showSecondaryColor: n, palette: t, onPrimaryColorChange: l, onSecondaryColorChange: c } = e,
        d = a.useRef(null);
    return (
        (0, i.useFocusLock)(d),
        (0, r.jsxs)('div', {
            className: o.popoutContainer,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: o.customColorsHeader,
                    children: s.intl.string(s.t.lfYWW1)
                }),
                (0, r.jsxs)('div', {
                    ref: d,
                    className: o.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: o.colorSwatch,
                                    style: { backgroundColor: t.primary }
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, r.jsx)(i.CustomColorPicker, {
                                    className: o.colorPicker,
                                    value: t.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: l
                                })
                            ]
                        }),
                        n &&
                            (0, r.jsxs)('div', {
                                className: o.colorColumn,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o.colorSwatch,
                                        style: { backgroundColor: t.secondary }
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(i.CustomColorPicker, {
                                        className: o.colorPicker,
                                        value: t.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: c
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function c(e) {
    let { shouldShow: n, showSecondaryColor: t, onRequestClose: a, children: s, palette: o, onPrimaryColorChange: c, onSecondaryColorChange: d } = e;
    return (0, r.jsx)(i.Popout, {
        renderPopout: () =>
            (0, r.jsx)(l, {
                showSecondaryColor: t,
                palette: o,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'left',
        shouldShow: n,
        onRequestClose: a,
        animation: i.Popout.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
