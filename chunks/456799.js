var a = t(200651);
t(192379);
var n = t(120356),
    r = t.n(n),
    i = t(481060),
    l = t(309206);
s.Z = function (e) {
    let { children: s, withBorder: t = !1 } = e;
    return (0, a.jsx)(i.FocusBlock, {
        children: (0, a.jsx)(i.Card, {
            className: r()(l.componentPreviewWrapper, { [l.componentPreviewWrapperBordered]: t }),
            outline: t,
            children: (0, a.jsx)('div', {
                className: l.componentPreview,
                onClickCapture: function (e) {
                    e.stopPropagation();
                },
                children: s
            })
        })
    });
};
