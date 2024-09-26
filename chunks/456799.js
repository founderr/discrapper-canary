var n = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    a = t(481060),
    l = t(720778);
s.Z = function (e) {
    let { children: s, withBorder: t = !1 } = e;
    return (0, n.jsx)(a.FocusBlock, {
        children: (0, n.jsx)(a.Card, {
            className: i()(l.componentPreviewWrapper, { [l.componentPreviewWrapperBordered]: t }),
            outline: t,
            children: (0, n.jsx)('div', {
                className: l.componentPreview,
                onClickCapture: function (e) {
                    e.stopPropagation();
                },
                children: s
            })
        })
    });
};
