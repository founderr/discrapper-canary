n.d(t, {
    Z: function () {
        return h;
    }
});
var s = n(200651);
n(192379);
var a = n(399606),
    i = n(481060),
    r = n(395586),
    l = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    _ = n(277369),
    I = n(215124),
    E = n(999382),
    T = n(267101),
    m = n(287576),
    N = n(894610),
    S = n(689938);
function g(e) {
    let { listingId: t } = e,
        n = (0, T.r)(t);
    return null == n ? null : (0, s.jsx)(l.bL, { children: n.name });
}
function h(e) {
    var t, n, l;
    let { guildId: T } = e,
        h = (0, m.Z)(T),
        C = (0, r.f3)(),
        x = (0, a.e7)([E.Z], () => E.Z.getGuild());
    return h.loading || null == x
        ? (0, s.jsx)(i.Spinner, {})
        : null == h.application
          ? (0, s.jsx)(u.Z, { guild: x })
          : (0, s.jsxs)(d.Z, {
                children: [
                    (0, s.jsx)(c.Z, {
                        revenue: h.metrics.revenue,
                        revenueTrend: h.metrics.revenuePctChange,
                        summaryMetricLabel: S.Z.Messages.GUILD_PRODUCT_PURCHASES_TITLE,
                        summaryMetricValue: null !== (n = h.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (l = h.metrics.paymentsCountChange) && void 0 !== l ? l : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, s.jsx)(N.Z, {
                            guildId: T,
                            earningsData: h
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
                        children: (0, s.jsx)(o.Z, {
                            ListingIdLabel: g,
                            payoutsByPeriod: h.payoutsByPeriod,
                            team: null === (t = h.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
                        disabled: C,
                        children: (0, s.jsx)(_.Z, {
                            guildId: T,
                            application: h.application
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
                        children: (0, s.jsx)(I.Z, {
                            guildId: T,
                            allPeriods: h.payoutsByPeriod
                        })
                    })
                ]
            });
}
