n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(63063),
  a = n(981631),
  r = n(689938),
  o = n(640718);

function c(e) {
  let {
    searchMode: t,
    searchByMode: n
  } = e;
  return (0, l.jsxs)("header", {
    className: o.searchHeader,
    children: [(0, l.jsx)(u, {
      ...e
    }), (0, l.jsxs)(i.TabBar, {
      orientation: "horizontal",
      className: o.searchHeaderTabList,
      selectedItem: t,
      onItemSelect: n,
      children: [(0, l.jsx)(i.TabBar.Item, {
        id: a.QIO.NEWEST,
        children: r.Z.Messages.SEARCH_NEWEST_SHORT
      }), (0, l.jsx)(i.TabBar.Item, {
        id: a.QIO.OLDEST,
        children: r.Z.Messages.SEARCH_OLDEST_SHORT
      }), (0, l.jsx)(i.TabBar.Item, {
        id: a.QIO.MOST_RELEVANT,
        children: r.Z.Messages.SEARCH_MOST_RELEVANT_SHORT
      })]
    })]
  })
}

function u(e) {
  let t;
  let {
    isSearching: n,
    isIndexing: s,
    documentsIndexed: a
  } = e;
  (s || n) && (t = (0, l.jsx)("div", {
    className: o.spinnerWrapper,
    children: (0, l.jsx)(i.Spinner, {
      type: i.Spinner.Type.SPINNING_CIRCLE,
      className: o.spinner,
      itemClassName: o.spinnerPath
    })
  }));
  let c = s && !n;
  return (0, l.jsxs)("div", {
    className: o.totalResults,
    role: "status",
    children: [c ? (0, l.jsx)(i.Tooltip, {
      text: r.Z.Messages.SEARCH_STILL_INDEXING_HINT.format({
        count: a
      }),
      children: n => (0, l.jsxs)("div", {
        className: o.totalResultsWrapper,
        ...n,
        children: [(0, l.jsx)(d, {
          ...e
        }), t]
      })
    }) : (0, l.jsx)(d, {
      ...e
    }), c ? null : t]
  })
}

function d(e) {
  let {
    isSearching: t,
    isIndexing: n,
    totalResults: c
  } = e;
  if (t) return (0, l.jsx)(i.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    children: r.Z.Messages.SEARCHING
  });
  if (n) return (0, l.jsx)(i.Text, {
    variant: "text-md/normal",
    children: (0, l.jsx)(i.Anchor, {
      className: o.helpdeskLink,
      href: s.Z.getArticleURL(a.BhN.SEARCH_INDEXING),
      children: r.Z.Messages.STILL_INDEXING
    })
  });
  {
    let e = c.toLocaleString();
    return (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      children: r.Z.Messages.TOTAL_RESULTS.format({
        count: e
      })
    })
  }
}