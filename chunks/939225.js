n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(230711),
    a = n(931547),
    o = n(981631),
    s = n(526761),
    c = n(388032);
function d(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === o.O0b.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.Spacer, { size: 16 }),
                    (0, i.jsx)(a.Z, {
                        message: c.intl.string(c.t.eSuJEx),
                        ctaMessage: c.intl.string(c.t.RXsxqa),
                        onClick: () => {
                            l.Z.open(o.oAB.SUBSCRIPTIONS, s.cP);
                        }
                    })
                ]
            })
          : null;
}
