n.d(t, {
    e: function () {
        return _;
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
    c = n(882101),
    d = n(689938),
    h = n(603922);
let _ = (e) => {
    let { listingId: t, isListingPublished: n, expanded: _, onToggleExpanded: f } = e,
        E = (0, u.Z)(),
        [p] = o._T(t),
        [m] = o.d9(t, E),
        [C] = o.H9(t);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(c.BM, { image: m }),
            (0, r.jsxs)('div', {
                className: h.tierTextInfoContainer,
                children: [
                    (0, r.jsx)(c.Ey, { listingName: p }),
                    (0, r.jsxs)('div', {
                        className: h.tierPriceContainer,
                        children: [
                            !n && (0, r.jsx)(l.v, {}),
                            (0, r.jsxs)(i.Text, {
                                variant: 'text-xs/normal',
                                className: h.tierPrice,
                                children: [
                                    (0, s.T4)(C.price, C.currency),
                                    ' ',
                                    d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                        period: (0, a.JE)({
                                            interval: C.interval,
                                            interval_count: C.interval_count
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.Clickable, {
                onClick: f,
                children: _
                    ? (0, r.jsx)(i.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: h.toggleButton
                      })
                    : (0, r.jsx)(i.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: h.toggleButton
                      })
            })
        ]
    });
};
