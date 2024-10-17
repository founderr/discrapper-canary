t.d(a, {
    j: function () {
        return u;
    }
});
var n = t(735250),
    s = t(470079),
    r = t(481060),
    l = t(462566);
t(600164);
var o = t(603421),
    i = t(689938),
    c = t(132493);
let u = (e) => {
    let { billingError: a, onCardInfoChange: t } = e,
        u = null != a && (null == a.code || (0, o.ly)(a) === o.Rg.CREDIT_CARD_INFORMATION);
    return (0, n.jsxs)(s.Fragment, {
        children: [
            u
                ? (0, n.jsx)(r.FormErrorBlock, {
                      className: c.errorBlock,
                      children: i.Z.Messages.BILLING_ERROR_SECTION_CARD
                  })
                : null,
            (0, n.jsx)(l.Z, {
                onCardInfoChange: t,
                error: a
            })
        ]
    });
};
