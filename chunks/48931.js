t.d(n, {
    Z: function () {
        return d;
    }
});
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(267097),
    a = t(752053),
    c = t(18678);
function d(e) {
    let { onClose: n } = e,
        { refreshCategories: t } = (0, r.Z)();
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.ModalHeader, {
                className: c.header,
                children: (0, o.jsx)(i.ModalCloseButton, {
                    className: c.closeButton,
                    onClick: n
                })
            }),
            (0, o.jsx)(a.Z, {
                onRetry: t,
                errorOrigin: a.i.GIFT_MODAL
            })
        ]
    });
}
