n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(230711),
    l = n(931547),
    s = n(981631),
    o = n(526761),
    c = n(388032);
function d(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === s.O0b.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.Spacer, { size: 16 }),
                    (0, i.jsx)(l.Z, {
                        message: c.intl.string(c.t.eSuJEx),
                        ctaMessage: c.intl.string(c.t.RXsxqa),
                        onClick: () => {
                            a.Z.open(s.oAB.SUBSCRIPTIONS, o.cP);
                        }
                    })
                ]
            })
          : null;
}
