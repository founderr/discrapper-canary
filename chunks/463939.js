"use strict";
t.d(s, {
  Z: function() {
    return A
  }
});
var n, i, l = t(735250),
  a = t(470079),
  r = t(512722),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(481060),
  E = t(264451),
  _ = t(759178),
  I = t(462087),
  T = t(685201),
  N = t(766434),
  m = t(755930),
  S = t(334820),
  h = t(198139),
  g = t(689938),
  C = t(501575);
(n = i || (i = {})).DROPDOWN = "DROPDOWN", n.PERIOD = "PERIOD", n.AMOUNT = "AMOUNT ", n.STATUS = "STATUS ";
let x = e => {
  let {
    dateUtc: s
  } = e;
  return (0, l.jsx)(u.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: d()(s).utc().format("MMMM YYYY")
  })
};

function R(e) {
  let {
    item: s
  } = e, {
    ppgStatus: t,
    payoutStatus: n,
    ppgDeferralReasons: i,
    periodEndDate: a
  } = (0, N.j0)(s), r = null != a ? d()(a).add(15, "days").toISOString() : void 0, o = (0, E.Zo)(r, "MMM D");
  switch (t) {
    case h.x_.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(I.Z, {
          className: C.statusScheduledIcon
        })]
      });
    case h.x_.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(u.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      });
    case h.x_.PAYOUT_DEFERRED:
      if ((null == i ? void 0 : i.includes(h.XL.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
        children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(u.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(T.Z, {
          className: C.statusDeferredIcon
        })]
      })
  }
  switch (n) {
    case h.jw.MANUAL:
    case h.jw.OPEN:
    case h.jw.PENDING:
    case h.jw.PROCESSING:
    case h.jw.SUBMITTED:
    case h.jw.PENDING_FUNDS:
    case h.jw.CANCELED:
    case h.jw.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(I.Z, {
          className: C.statusScheduledIcon
        })]
      });
    case h.jw.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(u.CircleCheckIcon, {
          size: "md",
          color: "currentColor",
          className: C.statusPaidIcon
        })]
      });
    case h.jw.DEFERRED:
    case h.jw.DEFERRED_INTERNAL:
    case h.jw.REJECTED:
    case h.jw.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [_.Z.getStatusErrorText(n), (0, l.jsx)(u.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      })
  }
  return null
}
let L = (0, m.i$)({
    key: "AMOUNT ",
    cellClassName: C.amountColumn,
    renderHeader() {
      let e = (0, l.jsx)(u.Tooltip, {
        text: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
        children: e => (0, l.jsx)(u.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: C.amountDisclaimer,
          ...e
        })
      });
      return (0, l.jsxs)(m.qN, {
        children: [g.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE, e]
      })
    },
    getAmount: e => e.amount
  }),
  O = (0, S.rM)([(0, S.Fd)({
    key: "PERIOD",
    cellClassName: C.periodColumn,
    renderHeader: () => (0, l.jsx)(m.qN, {
      children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD
    }),
    renderContent: e => (0, l.jsx)(x, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, s) {
      o()(null != s, "CellProps should always be provided");
      let {
        ListingIdLabel: t
      } = s;
      return (0, l.jsx)(t, {
        listingId: e.listingId
      })
    }
  }), (0, S.Fd)({
    ...L,
    renderContent: L.render,
    renderExpandedContent: (e, s) => L.render(e, s)
  }), (0, m.wy)({
    key: "STATUS ",
    cellClassName: C.statusColumn,
    renderHeader() {
      let e = (0, l.jsx)(u.Tooltip, {
        text: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
        children: e => (0, l.jsx)(u.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: C.statusDisclaimer,
          ...e
        })
      });
      return (0, l.jsxs)(m.qN, {
        children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, e]
      })
    },
    renderContent: e => (0, l.jsx)(m.bL, {
      className: C.statusCell,
      children: (0, l.jsx)(R, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function A(e) {
  let {
    ListingIdLabel: s,
    payoutsByPeriod: t
  } = e, {
    cellProps: n,
    data: i
  } = (0, S.GN)(t, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(s => {
      var t;
      return {
        key: e.key + s,
        listingId: s,
        amount: null === (t = e.ppgs[s]) || void 0 === t ? void 0 : t.amount
      }
    })
  }), r = a.useMemo(() => ({
    ListingIdLabel: s,
    ...n
  }), [n, s]);
  return (0, l.jsx)(m.ZP, {
    columns: O,
    data: i,
    cellProps: r
  })
}