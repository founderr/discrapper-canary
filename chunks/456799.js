var i = t(200651);
t(192379);
var a = t(120356),
    n = t.n(a),
    l = t(481060),
    r = t(102787);
s.Z = function (e) {
    let { allowClicks: s = !1, children: t, withBorder: a = !1 } = e;
    return (0, i.jsx)(l.FocusBlock, {
        children: (0, i.jsx)(l.Card, {
            className: n()(r.componentPreviewWrapper, { [r.componentPreviewWrapperBordered]: a }),
            outline: a,
            children: (0, i.jsx)('div', {
                className: r.componentPreview,
                onClickCapture: s
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: t
            })
        })
    });
};
