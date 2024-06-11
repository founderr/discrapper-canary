"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("120356"),
  n = a.n(r),
  u = a("442837"),
  d = a("481060"),
  i = a("496675"),
  o = a("465670"),
  c = a("934458"),
  f = a("346479"),
  h = a("665906"),
  m = a("91159"),
  T = a("443671"),
  g = a("342449"),
  C = a("488131"),
  E = a("124368"),
  S = a("981631"),
  v = a("689938"),
  x = a("342308");

function N(e) {
  let {
    channel: t,
    className: a,
    onClose: r
  } = e, N = (0, u.useStateFromStores)([i.default], () => i.default.can(S.Permissions.READ_MESSAGE_HISTORY, t)), R = (0, h.useCanStartThread)(t), M = () => {
    r(), (0, C.openThreadSidebarForCreating)(t, void 0, "Thread Browser Empty State")
  }, A = l.useCallback((e, t) => {
    r(), (0, C.openThreadSidebarForViewing)(e, !t, E.OpenThreadAnalyticsLocations.BROWSER)
  }, [r]), H = function(e, t) {
    let [a, s] = l.useState(""), [r, n] = l.useState(!1), [u, d] = l.useState(!1), [i, o] = l.useState([]), c = async () => {
      if (null != a && "" !== a) {
        if (!r) {
          n(!0);
          try {
            let s = await f.default.searchThreads(e, t, a);
            d(!0), o(s)
          } finally {
            n(!1)
          }
        }
      }
    };
    return {
      query: a,
      setQuery: e => {
        s(e), 0 === e.length && d(!1)
      },
      isLoading: r,
      hasResults: u,
      submit: c,
      results: i
    }
  }(t.guild_id, t.id);
  return l.useEffect(() => {
    (0, m.trackThreadBrowserTab)()
  }, []), (0, s.jsx)("div", {
    className: n()(a, x.container),
    children: (0, s.jsx)(d.HeadingLevel, {
      component: (0, s.jsxs)("div", {
        className: x.header,
        children: [(0, s.jsx)(c.default, {
          className: x.threadIcon
        }), (0, s.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: x.title,
          children: v.default.Messages.THREAD_BROWSER_TITLE
        }), N ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: x.divider
          }), (0, s.jsx)(_, {
            ...H
          })]
        }) : null, (0, s.jsx)("div", {
          className: x.spacer
        }), R ? (0, s.jsx)(d.Button, {
          size: d.Button.Sizes.MIN,
          className: x.createButton,
          onClick: () => {
            r(), (0, C.openThreadSidebarForCreating)(t, void 0, "Thread Browser Toolbar")
          },
          children: v.default.Messages.CREATE
        }) : null, (0, s.jsx)(d.Clickable, {
          className: x.closeIcon,
          onClick: r,
          "aria-label": v.default.Messages.CLOSE,
          children: (0, s.jsx)(o.default, {})
        })]
      }),
      children: H.hasResults ? (0, s.jsx)(T.default, {
        channel: t,
        startThread: M,
        goToThread: A,
        threadIds: H.results
      }) : (0, s.jsx)(g.default, {
        channel: t,
        startThread: M,
        goToThread: A
      })
    })
  })
}

function _(e) {
  let {
    query: t,
    setQuery: a,
    submit: l,
    isLoading: r
  } = e;
  return (0, s.jsx)(d.SearchBar, {
    autoFocus: !0,
    className: x.searchBox,
    query: t,
    isLoading: r,
    onChange: e => a(e),
    onClear: () => a(""),
    onKeyDown: e => "Enter" === e.key && l(),
    placeholder: v.default.Messages.SEARCH_THREAD_NAMES,
    "aria-label": v.default.Messages.SEARCH_THREAD_NAMES
  })
}