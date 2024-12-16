n.d(t, {
    Z: function () {
        return S;
    }
});
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(512722),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(481060),
    m = n(264451),
    h = n(759178),
    g = n(462087),
    x = n(685201),
    p = n(766434),
    f = n(755930),
    C = n(334820),
    I = n(198139),
    _ = n(388032),
    v = n(927332);
((i = r || (r = {})).DROPDOWN = 'DROPDOWN'), (i.PERIOD = 'PERIOD'), (i.AMOUNT = 'AMOUNT '), (i.STATUS = 'STATUS ');
let N = (e) => {
    let { dateUtc: t } = e;
    return (0, l.jsx)(u.Text, {
        variant: 'text-md/medium',
        color: 'interactive-active',
        children: d()(t).utc().format('MMMM YYYY')
    });
};
function T(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: i, ppgDeferralReasons: r, periodEndDate: s } = (0, p.j0)(t),
        a = null != s ? d()(s).add(15, 'days').toISOString() : void 0,
        o = (0, m.Zo)(a, 'MMM D');
    switch (n) {
        case I.x_.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [null != o ? _.intl.formatToPlainString(_.t.I6YOjY, { payoutDate: o }) : _.intl.string(_.t.G5ATX1), (0, l.jsx)(g.Z, { className: v.statusScheduledIcon })]
            });
        case I.x_.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    _.intl.string(_.t['0SrNPz']),
                    (0, l.jsx)(u.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.statusErrorIcon
                    })
                ]
            });
        case I.x_.PAYOUT_DEFERRED:
            if ((null == r ? void 0 : r.includes(I.XL.PAYOUT_SEIZED)) === !0)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        _.intl.string(_.t['0SrNPz']),
                        (0, l.jsx)(u.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.statusErrorIcon
                        })
                    ]
                });
            return (0, l.jsxs)(l.Fragment, {
                children: [_.intl.string(_.t.OtZ5k5), (0, l.jsx)(x.Z, { className: v.statusDeferredIcon })]
            });
    }
    switch (i) {
        case I.jw.MANUAL:
        case I.jw.OPEN:
        case I.jw.PENDING:
        case I.jw.PROCESSING:
        case I.jw.SUBMITTED:
        case I.jw.PENDING_FUNDS:
        case I.jw.CANCELED:
        case I.jw.ERROR:
            return (0, l.jsxs)(l.Fragment, {
                children: [null != o ? _.intl.formatToPlainString(_.t.I6YOjY, { payoutDate: o }) : _.intl.string(_.t.ubdQTk), (0, l.jsx)(g.Z, { className: v.statusScheduledIcon })]
            });
        case I.jw.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    _.intl.string(_.t.eoSslJ),
                    (0, l.jsx)(u.CircleCheckIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.statusPaidIcon
                    })
                ]
            });
        case I.jw.DEFERRED:
        case I.jw.DEFERRED_INTERNAL:
        case I.jw.REJECTED:
        case I.jw.RISK_REVIEW:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    h.Z.getStatusErrorText(i),
                    (0, l.jsx)(u.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.statusErrorIcon
                    })
                ]
            });
    }
    return null;
}
let b = (0, f.i$)({
        key: 'AMOUNT ',
        cellClassName: v.amountColumn,
        renderHeader() {
            let e = (0, l.jsx)(u.Tooltip, {
                text: _.intl.string(_.t.q3PkLy),
                children: (e) =>
                    (0, l.jsx)(u.CircleInformationIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: v.amountDisclaimer,
                        ...e
                    })
            });
            return (0, l.jsxs)(f.qN, {
                children: [_.intl.string(_.t.VodAGR), e]
            });
        },
        getAmount: (e) => e.amount
    }),
    j = (0, C.rM)(
        [
            (0, C.Fd)({
                key: 'PERIOD',
                cellClassName: v.periodColumn,
                renderHeader: () => (0, l.jsx)(f.qN, { children: _.intl.string(_.t.fThnXV) }),
                renderContent: (e) => (0, l.jsx)(N, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    o()(null != t, 'CellProps should always be provided');
                    let { ListingIdLabel: n } = t;
                    return (0, l.jsx)(n, { listingId: e.listingId });
                }
            }),
            (0, C.Fd)({
                ...b,
                renderContent: b.render,
                renderExpandedContent: (e, t) => b.render(e, t)
            }),
            (0, f.wy)({
                key: 'STATUS ',
                cellClassName: v.statusColumn,
                renderHeader() {
                    let e = (0, l.jsx)(u.Tooltip, {
                        text: _.intl.string(_.t.cIGvZG),
                        children: (e) =>
                            (0, l.jsx)(u.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: v.statusDisclaimer,
                                ...e
                            })
                    });
                    return (0, l.jsxs)(f.qN, {
                        children: [_.intl.string(_.t.oypxx8), e]
                    });
                },
                renderContent: (e) =>
                    (0, l.jsx)(f.bL, {
                        className: v.statusCell,
                        children: (0, l.jsx)(T, { item: e })
                    })
            })
        ],
        { expandableToggleColumnKey: 'DROPDOWN' }
    );
function S(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: i, data: r } = (0, C.GN)(n, {
            generateExpandedRows: (e) =>
                Object.keys(e.ppgs).map((t) => {
                    var n;
                    return {
                        key: e.key + t,
                        listingId: t,
                        amount: null === (n = e.ppgs[t]) || void 0 === n ? void 0 : n.amount
                    };
                })
        }),
        a = s.useMemo(
            () => ({
                ListingIdLabel: t,
                ...i
            }),
            [i, t]
        );
    return (0, l.jsx)(f.ZP, {
        columns: j,
        data: r,
        cellProps: a
    });
}
