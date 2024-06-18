"use strict";
t.d(s, {
  GW: function() {
    return h
  },
  Qg: function() {
    return I
  },
  Yn: function() {
    return g
  },
  ZP: function() {
    return O
  },
  bL: function() {
    return x
  },
  i$: function() {
    return S
  },
  nn: function() {
    return m
  },
  qN: function() {
    return C
  },
  wy: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l);
t(913527);
var r = t(481060),
  o = t(151011),
  c = t(937615),
  d = t(809086),
  u = t(981631),
  E = t(689938),
  _ = t(424666);

function I(e) {
  return (s, t, n) => {
    let i = e(s),
      l = e(t);
    return null != i && null != l ? i === l ? 0 : i < l ? -1 : 1 : 0
  }
}

function T(e) {
  let {
    key: s,
    cellClassName: t,
    renderHeader: n,
    renderContent: i,
    ...l
  } = e;
  return {
    key: s,
    bodyCellClassName: _.cell,
    cellClassName: t,
    renderHeader: n,
    render: i,
    ...l
  }
}

function N() {
  return (0, n.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: _.unpublishedBadge,
    children: E.Z.Messages.GUILD_PRODUCT_UNPUBLISHED_TITLE
  })
}

function m(e) {
  let {
    cellClassName: s,
    key: t,
    renderHeader: i,
    ...l
  } = e;
  return T({
    cellClassName: s,
    key: t,
    renderHeader: i,
    renderContent(e) {
      let {
        listing: s
      } = e, t = null;
      return null != s && (t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.Z, {
          listing: s,
          imageSize: 128,
          alt: "",
          className: _.listingImage
        }), (0, n.jsxs)(r.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          className: _.listingNameLabel,
          children: [s.name, !s.published && (0, n.jsx)(N, {})]
        })]
      })), (0, n.jsx)(x, {
        className: _.listingNameCell,
        children: t
      })
    },
    ...l
  })
}

function S(e) {
  let {
    cellClassName: s,
    getAmount: t,
    key: i,
    renderHeader: l,
    ...a
  } = e;
  return T({
    key: i,
    cellClassName: s,
    renderHeader: l,
    renderContent(e) {
      let s = t(e);
      return (0, n.jsx)(R, {
        children: s
      })
    },
    ...a
  })
}

function h(e) {
  let {
    cellClassName: s,
    getCount: t,
    key: i,
    renderHeader: l,
    ...a
  } = e;
  return T({
    key: i,
    cellClassName: s,
    renderHeader: l,
    renderContent(e) {
      let s = t(e);
      return (0, n.jsx)(L, {
        children: s
      })
    },
    ...a
  })
}

function g(e) {
  let s = [...e];
  for (let t = 1; t < e.length; ++t) {
    let n = e[t];
    s[t] = {
      ...n,
      cellClassName: a()(n.cellClassName, _.cellAlignRight)
    }
  }
  return s
}
let C = e => {
    let {
      children: s
    } = e;
    return (0, n.jsx)(r.Text, {
      className: _.headerCell,
      variant: "text-xs/medium",
      color: "interactive-normal",
      "aria-hidden": !0,
      children: s
    })
  },
  x = e => {
    let {
      children: s,
      className: t
    } = e;
    return (0, n.jsx)(r.Text, {
      className: t,
      variant: "text-md/normal",
      color: "interactive-normal",
      children: s
    })
  },
  R = e => {
    let {
      children: s
    } = e;
    return (0, n.jsx)(x, {
      children: (0, c.T4)(null != s ? s : 0, u.pKx.USD)
    })
  },
  L = e => {
    let {
      children: s
    } = e;
    return (0, n.jsxs)(x, {
      className: _.personCountCell,
      children: [null != s ? s : "-", " ", (0, n.jsx)(r.UserIcon, {
        size: "md",
        color: "currentColor",
        className: _.personCountIcon,
        "aria-hidden": !0
      })]
    })
  };

function O(e) {
  let {
    className: s,
    headerClassName: t,
    rowClassName: l,
    enableRowSeparators: r = !1,
    initialSortKey: c,
    initialSortDirection: d = u.sHY.ASCENDING,
    ...E
  } = e, [I, T] = i.useState(c), [N, m] = i.useState(d);
  return (0, n.jsx)("div", {
    className: a()(_.tableContainer, s),
    children: (0, n.jsx)(o.Z, {
      className: a()({
        [_.tableWithoutSeparators]: !r
      }, _.table),
      rowClassName: a()({
        [_.rowWithSeparators]: r
      }, l),
      headerClassName: a()(_.header, {
        [_.headerWithoutSeparators]: !r
      }, t),
      sortKey: I,
      sortDirection: N,
      onSort: (e, s) => {
        T(e), m(s)
      },
      ...E
    })
  })
}