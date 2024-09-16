var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(720778);
s.Z = function (e) {
    let { children: s, theme: t, withBorder: a = !1 } = e;
    function l(e) {
        e.stopPropagation();
    }
    return (0, n.jsx)(r.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, n.jsx)(r.FocusBlock, {
                className: e,
                children: (0, n.jsx)(r.Card, {
                    className: i()(o.componentPreviewWrapper, { [o.componentPreviewWrapperBordered]: a }),
                    outline: a,
                    children: (0, n.jsx)('div', {
                        className: o.componentPreview,
                        onClickCapture: l,
                        children: s
                    })
                })
            })
    });
};
