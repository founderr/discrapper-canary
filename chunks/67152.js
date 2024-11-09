n.d(t, {
    av: function () {
        return L;
    },
    bL: function () {
        return b;
    },
    kA: function () {
        return E;
    }
}),
    n(653041),
    n(47120);
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(481060),
    h = n(167533),
    g = n(766434),
    x = n(937615),
    p = n(289393),
    f = n(264451),
    C = n(759178),
    I = n(462087),
    _ = n(685201),
    N = n(981631),
    v = n(198139),
    T = n(388032),
    j = n(539918);
((r = i || (i = {})).DROPDOWN = 'dropdown'), (r.PERIOD = 'period'), (r.SUBSCRIBERS = 'subscribers'), (r.AMOUNT = 'amount'), (r.STATUS = 'status');
let S = (e, t, n, i) => {
        let r = null != i ? d()(i).add(15, 'days').toISOString() : void 0,
            s = (0, f.Zo)(r, 'MMM D');
        switch (e) {
            case v.x_.OPEN:
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != s ? T.intl.formatToPlainString(T.t.I6YOjY, { payoutDate: s }) : T.intl.string(T.t.G5ATX1), (0, l.jsx)(I.Z, { className: j.statusScheduledIcon })]
                });
            case v.x_.CANCELED:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        T.intl.string(T.t['0SrNPz']),
                        (0, l.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
            case v.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(v.XL.PAYOUT_SEIZED)) === !0)
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            T.intl.string(T.t['0SrNPz']),
                            (0, l.jsx)(m.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.statusErrorIcon
                            })
                        ]
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [T.intl.string(T.t.OtZ5k5), (0, l.jsx)(_.Z, { className: j.statusDeferredIcon })]
                });
        }
        switch (t) {
            case v.jw.MANUAL:
            case v.jw.OPEN:
            case v.jw.PENDING:
            case v.jw.PROCESSING:
            case v.jw.SUBMITTED:
            case v.jw.PENDING_FUNDS:
            case v.jw.CANCELED:
            case v.jw.ERROR:
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != s ? T.intl.formatToPlainString(T.t.I6YOjY, { payoutDate: s }) : T.intl.string(T.t.ubdQTk), (0, l.jsx)(I.Z, { className: j.statusScheduledIcon })]
                });
            case v.jw.PAID:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        T.intl.string(T.t.eoSslJ),
                        (0, l.jsx)(m.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusPaidIcon
                        })
                    ]
                });
            case v.jw.DEFERRED:
            case v.jw.DEFERRED_INTERNAL:
            case v.jw.REJECTED:
            case v.jw.RISK_REVIEW:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        C.Z.getStatusErrorText(t),
                        (0, l.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)('div', {
            className: o()(j.cell, n),
            children: t
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, l.jsx)('div', {
            className: j.cell,
            children: (0, x.T4)(null != t ? t : 0, N.pKx.USD)
        });
    },
    R = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(b, {
            className: j.statusCell,
            children: null != t ? t : '-'
        });
    },
    Z = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(b, {
            className: j.periodCell,
            children: d()(t).utc().format('MMMM YYYY')
        });
    },
    A = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, u.e7)([p.Z], () => p.Z.getSubscriptionListing(n)),
            r = null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : '['.concat(T.intl.string(T.t['4tEmXV']), ']');
        return (0, l.jsx)(b, { children: r });
    },
    L = (e) => {
        let { children: t } = e;
        return (0, l.jsxs)(b, {
            className: j.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, l.jsx)(m.UserIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    y = () => {
        let e = (0, l.jsx)(m.Tooltip, {
            text: T.intl.string(T.t.q3PkLy),
            children: (e) =>
                (0, l.jsx)(m.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.amountDisclaimer,
                    ...e
                })
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [T.intl.string(T.t['/MWnxs']), ' ', e]
        });
    },
    D = () => {
        let e = (0, l.jsx)(m.Tooltip, {
            text: T.intl.string(T.t.cIGvZG),
            children: (e) =>
                (0, l.jsx)(m.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.statusDisclaimer,
                    ...e
                })
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [T.intl.string(T.t.oypxx8), ' ', e]
        });
    },
    O = [
        {
            key: 'dropdown',
            cellClassName: j.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    r = n.has(e.key);
                return (0, l.jsx)(m.Clickable, {
                    className: o()(j.cell, j.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, l.jsx)(m.ChevronSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(j.caretIcon, { [j.caretDownIcon]: r })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: j.periodColumn,
            renderHeader: () => T.intl.string(T.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, l.jsx)(Z, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, l.jsx)(A, { listingId: t }, t));
                return i;
            }
        },
        {
            key: 'amount',
            cellClassName: o()(j.amountColumn, j.cellAlignRight),
            renderHeader: () => (0, l.jsx)(y, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, l.jsx)(E, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push((0, l.jsx)(E, { children: null == n ? void 0 : n.amount }, t));
                    }
                return i;
            }
        },
        {
            key: 'status',
            cellClassName: o()(j.statusColumn, j.cellAlignRight),
            renderHeader: () => (0, l.jsx)(D, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: r } = (0, g.j0)(e);
                return (0, l.jsx)(R, { children: S(t, n, i, r) });
            }
        }
    ];
t.ZP = (e) => {
    let { payoutsByPeriod: t } = e,
        [n, i] = s.useState(new Set());
    return (0, l.jsx)('div', {
        className: j.tableContainer,
        children: (0, l.jsx)(h.Z, {
            columns: O,
            data: t,
            className: j.table,
            rowClassName: j.row,
            headerClassName: j.header,
            cellProps: {
                onToggleExpandRow: (e) => {
                    i((t) => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
                },
                expandedRows: n
            }
        })
    });
};
