n.d(t, {
    BM: function () {
        return _;
    },
    Ey: function () {
        return h;
    },
    xv: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
    l = n(765400),
    s = n(937615),
    a = n(817460),
    o = n(290348),
    u = n(367719),
    c = n(689938),
    d = n(544126);
let h = (e) => {
    let { listingName: t } = e;
    return (0, r.jsx)(i.Heading, {
        variant: 'text-md/normal',
        color: 'interactive-active',
        className: d.tierName,
        children: t
    });
};
function _(e) {
    let { image: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('img', {
              src: t,
              alt: '',
              className: d.tierImage
          });
}
let f = (e) => {
    let { listingId: t, isListingPublished: n } = e,
        f = (0, u.Z)(),
        [E] = o._T(t),
        [p] = o.d9(t, f),
        [m] = o.H9(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h, { listingName: E }),
            (0, r.jsx)(_, { image: p }),
            !n &&
                (0, r.jsx)('div', {
                    className: d.draftBadgeContainer,
                    children: (0, r.jsx)(l.v, {})
                }),
            (0, r.jsx)(i.Text, {
                variant: 'heading-xl/semibold',
                className: d.tierPrice,
                tag: 'div',
                children: (0, s.T4)(m.price, m.currency)
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                className: d.tierPeriod,
                children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                    period: (0, a.JE)({
                        interval: m.interval,
                        interval_count: m.interval_count
                    })
                })
            })
        ]
    });
};
