n.d(t, {
    Z: function () {
        return d;
    }
});
var o = n(200651);
n(192379);
var i = n(481060),
    r = n(267097),
    a = n(752053),
    c = n(18678);
function d(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, r.Z)();
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.ModalHeader, {
                className: c.header,
                children: (0, o.jsx)(i.ModalCloseButton, {
                    className: c.closeButton,
                    onClick: t
                })
            }),
            (0, o.jsx)(a.Z, {
                onRetry: n,
                errorOrigin: a.i.GIFT_MODAL
            })
        ]
    });
}
