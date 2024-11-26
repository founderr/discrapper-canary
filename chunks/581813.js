n.d(t, {
    k: function () {
        return u;
    }
});
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(219929),
    s = n(388032),
    c = n(100882);
let u = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: r } = e,
        { card: u } = null != r ? r : {},
        d = null != u ? o.ZP.getType(u.brand) : o.ZP.Types.UNKNOWN;
    return (0, a.jsx)(i.FormSection, {
        className: t,
        title: s.intl.string(s.t.mmDvV1),
        children: (0, a.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, a.jsx)(o.ZP, {
                    className: l()(c.cardIcon, { [c.submitting]: n }),
                    type: d
                }),
                (0, a.jsx)(i.TextInput, {
                    value: n && null != u ? s.intl.formatToPlainString(s.t.bCynoK, u) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: s.intl.string(s.t['bWMH7+']),
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
