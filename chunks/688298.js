t.d(n, {
    Z: function () {
        return c;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(481060),
    o = t(388032),
    s = t(242047);
function l(e) {
    let { showSecondaryColor: n, palette: t, onPrimaryColorChange: l, onSecondaryColorChange: c } = e,
        d = a.useRef(null);
    return (
        (0, i.useFocusLock)(d),
        (0, r.jsxs)('div', {
            className: s.popoutContainer,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: s.customColorsHeader,
                    children: o.intl.string(o.t.lfYWW1)
                }),
                (0, r.jsxs)('div', {
                    ref: d,
                    className: s.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: s.colorSwatch,
                                    style: { backgroundColor: t.primary }
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: o.intl.string(o.t.C3KTQk)
                                }),
                                (0, r.jsx)(i.CustomColorPicker, {
                                    className: s.colorPicker,
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
                                className: s.colorColumn,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: s.colorSwatch,
                                        style: { backgroundColor: t.secondary }
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: o.intl.string(o.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(i.CustomColorPicker, {
                                        className: s.colorPicker,
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
    let { shouldShow: n, showSecondaryColor: t, onRequestClose: a, children: o, palette: s, onPrimaryColorChange: c, onSecondaryColorChange: d } = e;
    return (0, r.jsx)(i.Popout, {
        renderPopout: () =>
            (0, r.jsx)(l, {
                showSecondaryColor: t,
                palette: s,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'left',
        shouldShow: n,
        onRequestClose: a,
        animation: i.Popout.Animation.TRANSLATE,
        animationPosition: 'right',
        children: o
    });
}
