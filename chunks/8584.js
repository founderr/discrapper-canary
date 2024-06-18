"use strict";
t.d(s, {
  av: function() {
    return v
  },
  bL: function() {
    return A
  },
  kA: function() {
    return p
  }
}), t(653041), t(47120);
var n, i, l = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(442837),
  E = t(481060),
  _ = t(766434),
  I = t(151011),
  T = t(937615),
  N = t(289393),
  m = t(264451),
  S = t(759178),
  h = t(462087),
  g = t(685201),
  C = t(981631),
  x = t(198139),
  R = t(689938),
  L = t(202684);
(i = n || (n = {})).DROPDOWN = "dropdown", i.PERIOD = "period", i.SUBSCRIBERS = "subscribers", i.AMOUNT = "amount", i.STATUS = "status";
let O = (e, s, t, n) => {
    let i = null != n ? d()(n).add(15, "days").toISOString() : void 0,
      a = (0, m.Zo)(i, "MMM D");
    switch (e) {
      case x.x_.OPEN:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != a ? R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: a
          }) : R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(h.Z, {
            className: L.statusScheduledIcon
          })]
        });
      case x.x_.CANCELED:
        return (0, l.jsxs)(l.Fragment, {
          children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(E.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: L.statusErrorIcon
          })]
        });
      case x.x_.PAYOUT_DEFERRED:
        if ((null == t ? void 0 : t.includes(x.XL.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
          children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(E.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: L.statusErrorIcon
          })]
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(g.Z, {
            className: L.statusDeferredIcon
          })]
        })
    }
    switch (s) {
      case x.jw.MANUAL:
      case x.jw.OPEN:
      case x.jw.PENDING:
      case x.jw.PROCESSING:
      case x.jw.SUBMITTED:
      case x.jw.PENDING_FUNDS:
      case x.jw.CANCELED:
      case x.jw.ERROR:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != a ? R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: a
          }) : R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(h.Z, {
            className: L.statusScheduledIcon
          })]
        });
      case x.jw.PAID:
        return (0, l.jsxs)(l.Fragment, {
          children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(E.CircleCheckIcon, {
            size: "md",
            color: "currentColor",
            className: L.statusPaidIcon
          })]
        });
      case x.jw.DEFERRED:
      case x.jw.DEFERRED_INTERNAL:
      case x.jw.REJECTED:
      case x.jw.RISK_REVIEW:
        return (0, l.jsxs)(l.Fragment, {
          children: [S.Z.getStatusErrorText(s), (0, l.jsx)(E.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: L.statusErrorIcon
          })]
        })
    }
    return null
  },
  A = e => {
    let {
      children: s,
      className: t
    } = e;
    return (0, l.jsx)("div", {
      className: o()(L.cell, t),
      children: s
    })
  },
  p = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)("div", {
      className: L.cell,
      children: (0, T.T4)(null != s ? s : 0, C.pKx.USD)
    })
  },
  M = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)(A, {
      className: L.statusCell,
      children: null != s ? s : "-"
    })
  },
  f = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)(A, {
      className: L.periodCell,
      children: d()(s).utc().format("MMMM YYYY")
    })
  },
  D = e => {
    var s;
    let {
      listingId: t
    } = e, n = (0, u.e7)([N.Z], () => N.Z.getSubscriptionListing(t)), i = null !== (s = null == n ? void 0 : n.name) && void 0 !== s ? s : "[".concat(R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIER_DELETED, "]");
    return (0, l.jsx)(A, {
      children: i
    })
  },
  v = e => {
    let {
      children: s
    } = e;
    return (0, l.jsxs)(A, {
      className: L.subscribersCell,
      children: [null != s ? s : "-", " ", (0, l.jsx)(E.UserIcon, {
        size: "md",
        color: "currentColor",
        className: L.subscribersIcon,
        "aria-hidden": !0
      })]
    })
  },
  j = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
      children: e => (0, l.jsx)(E.CircleInformationIcon, {
        size: "xs",
        color: "currentColor",
        className: L.amountDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT, " ", e]
    })
  },
  Z = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
      children: e => (0, l.jsx)(E.CircleInformationIcon, {
        size: "xs",
        color: "currentColor",
        className: L.statusDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, " ", e]
    })
  },
  U = [{
    key: "dropdown",
    cellClassName: L.toggleExpandColumn,
    renderHeader: () => null,
    render(e, s) {
      let {
        expandedRows: t,
        onToggleExpandRow: n
      } = s, i = t.has(e.key);
      return (0, l.jsx)(E.Clickable, {
        className: o()(L.cell, L.toggleExpandCell),
        onClick: () => n(e.key),
        children: (0, l.jsx)(E.ChevronSmallRightIcon, {
          size: "md",
          color: "currentColor",
          className: o()(L.caretIcon, {
            [L.caretDownIcon]: i
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: L.periodColumn,
    renderHeader: () => R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD,
    render(e, s) {
      let {
        expandedRows: t
      } = s, n = [(0, l.jsx)(f, {
        children: e.periodStartingAt
      }, e.key)];
      if (t.has(e.key))
        for (let s in e.ppgs) n.push((0, l.jsx)(D, {
          listingId: s
        }, s));
      return n
    }
  }, {
    key: "amount",
    cellClassName: o()(L.amountColumn, L.cellAlignRight),
    renderHeader: () => (0, l.jsx)(j, {}),
    render(e, s) {
      let {
        expandedRows: t
      } = s, n = [(0, l.jsx)(p, {
        children: e.amount
      }, e.key)];
      if (t.has(e.key))
        for (let s in e.ppgs) {
          let t = e.ppgs[s];
          n.push((0, l.jsx)(p, {
            children: null == t ? void 0 : t.amount
          }, s))
        }
      return n
    }
  }, {
    key: "status",
    cellClassName: o()(L.statusColumn, L.cellAlignRight),
    renderHeader: () => (0, l.jsx)(Z, {}),
    render(e) {
      let {
        ppgStatus: s,
        payoutStatus: t,
        ppgDeferralReasons: n,
        periodEndDate: i
      } = (0, _.j0)(e);
      return (0, l.jsx)(M, {
        children: O(s, t, n, i)
      })
    }
  }];
s.ZP = e => {
  let {
    payoutsByPeriod: s
  } = e, [t, n] = a.useState(new Set);
  return (0, l.jsx)("div", {
    className: L.tableContainer,
    children: (0, l.jsx)(I.Z, {
      columns: U,
      data: s,
      className: L.table,
      rowClassName: L.row,
      headerClassName: L.header,
      cellProps: {
        onToggleExpandRow: e => {
          n(s => {
            let t = new Set(s);
            return t.has(e) ? t.delete(e) : t.add(e), t
          })
        },
        expandedRows: t
      }
    })
  })
}