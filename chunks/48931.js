t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    s = t(267097),
    a = t(752053),
    r = t(814335);
function o(e) {
    let { onClose: n } = e,
        { refreshCategories: t } = (0, s.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.ModalHeader, {
                className: r.header,
                children: (0, i.jsx)(l.ModalCloseButton, {
                    className: r.closeButton,
                    onClick: n
                })
            }),
            (0, i.jsx)(a.Z, {
                onRetry: t,
                errorOrigin: a.i.GIFT_MODAL
            })
        ]
    });
}
