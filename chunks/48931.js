t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    o = t(267097),
    a = t(752053),
    l = t(814335);
function c(e) {
    let { onClose: n } = e,
        { refreshCategories: t } = (0, o.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.ModalHeader, {
                className: l.header,
                children: (0, i.jsx)(r.ModalCloseButton, {
                    className: l.closeButton,
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
