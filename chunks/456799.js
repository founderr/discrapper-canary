var n = t(735250);
t(470079);
var r = t(120356),
    a = t.n(r),
    i = t(481060),
    l = t(720778);
s.Z = function (e) {
    let { children: s, withBorder: t = !1 } = e;
    return (0, n.jsx)(i.FocusBlock, {
        children: (0, n.jsx)(i.Card, {
            className: a()(l.componentPreviewWrapper, { [l.componentPreviewWrapperBordered]: t }),
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
