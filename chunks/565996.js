"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("701909"),
  i = n("49111"),
  r = n("782340"),
  u = n("881523");

function o(e) {
  let {
    searchMode: t,
    searchByMode: n
  } = e;
  return (0, l.jsxs)("header", {
    className: u.searchHeader,
    children: [(0, l.jsx)(d, {
      ...e
    }), (0, l.jsxs)(a.TabBar, {
      orientation: "horizontal",
      className: u.searchHeaderTabList,
      selectedItem: t,
      onItemSelect: n,
      children: [(0, l.jsx)(a.TabBar.Item, {
        id: i.SearchModes.NEWEST,
        children: r.default.Messages.SEARCH_NEWEST_SHORT
      }), (0, l.jsx)(a.TabBar.Item, {
        id: i.SearchModes.OLDEST,
        children: r.default.Messages.SEARCH_OLDEST_SHORT
      }), (0, l.jsx)(a.TabBar.Item, {
        id: i.SearchModes.MOST_RELEVANT,
        children: r.default.Messages.SEARCH_MOST_RELEVANT_SHORT
      })]
    })]
  })
}

function d(e) {
  let t;
  let {
    isSearching: n,
    isIndexing: s,
    documentsIndexed: i
  } = e;
  (s || n) && (t = (0, l.jsx)("div", {
    className: u.spinnerWrapper,
    children: (0, l.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: u.spinner,
      itemClassName: u.spinnerPath
    })
  }));
  let o = s && !n;
  return (0, l.jsxs)("div", {
    className: u.totalResults,
    role: "status",
    children: [o ? (0, l.jsx)(a.Tooltip, {
      text: r.default.Messages.SEARCH_STILL_INDEXING_HINT.format({
        count: i
      }),
      children: n => (0, l.jsxs)("div", {
        className: u.totalResultsWrapper,
        ...n,
        children: [(0, l.jsx)(c, {
          ...e
        }), t]
      })
    }) : (0, l.jsx)(c, {
      ...e
    }), o ? null : t]
  })
}

function c(e) {
  let {
    isSearching: t,
    isIndexing: n,
    totalResults: o
  } = e;
  if (t) return (0, l.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    children: r.default.Messages.SEARCHING
  });
  {
    if (n) return (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      children: (0, l.jsx)(a.Anchor, {
        className: u.helpdeskLink,
        href: s.default.getArticleURL(i.HelpdeskArticles.SEARCH_INDEXING),
        children: r.default.Messages.STILL_INDEXING
      })
    });
    let e = o.toLocaleString();
    return (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      children: r.default.Messages.TOTAL_RESULTS.format({
        count: e
      })
    })
  }
}