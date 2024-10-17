t.d(a, {
    k: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var s = t(120356),
    r = t.n(s),
    l = t(481060),
    o = t(219929),
    i = t(689938),
    c = t(454469);
let u = (e) => {
    let { className: a, submitting: t, stripePaymentMethod: s } = e,
        { card: u } = null != s ? s : {},
        d = null != u ? o.ZP.getType(u.brand) : o.ZP.Types.UNKNOWN;
    return (0, n.jsx)(l.FormSection, {
        className: a,
        title: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
        children: (0, n.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, n.jsx)(o.ZP, {
                    className: r()(c.cardIcon, { [c.submitting]: t }),
                    type: d
                }),
                (0, n.jsx)(l.TextInput, {
                    value: t && null != u ? i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(u) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
