n.d(t, {
    j: function () {
        return u;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(462566);
n(600164);
var o = n(603421),
    s = n(388032),
    c = n(868069);
let u = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        u = null != t && (null == t.code || (0, o.ly)(t) === o.Rg.CREDIT_CARD_INFORMATION);
    return (0, a.jsxs)(r.Fragment, {
        children: [
            u
                ? (0, a.jsx)(l.FormErrorBlock, {
                      className: c.errorBlock,
                      children: s.intl.string(s.t['4vnhKS'])
                  })
                : null,
            (0, a.jsx)(i.Z, {
                onCardInfoChange: n,
                error: t
            })
        ]
    });
};
