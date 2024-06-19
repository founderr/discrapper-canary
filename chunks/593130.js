t.d(n, {
  Z: function() {
    return x
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(442837),
  o = t(481060),
  c = t(496675),
  d = t(346479),
  u = t(665906),
  h = t(91159),
  m = t(443671),
  g = t(342449),
  f = t(488131),
  E = t(124368),
  T = t(981631),
  Z = t(689938),
  I = t(246634);

function x(e) {
  let {
    channel: n,
    className: t,
    onClose: r
  } = e, x = (0, i.e7)([c.Z], () => c.Z.can(T.Plq.READ_MESSAGE_HISTORY, n)), v = (0, u.cD)(n), N = () => {
    r(), (0, f.R6)(n, void 0, "Thread Browser Empty State")
  }, R = s.useCallback((e, n) => {
    r(), (0, f.ok)(e, !n, E.on.BROWSER)
  }, [r]), S = function(e, n) {
    let [t, a] = s.useState(""), [r, l] = s.useState(!1), [i, o] = s.useState(!1), [c, u] = s.useState([]), h = async () => {
      if (null != t && "" !== t) {
        if (!r) {
          l(!0);
          try {
            let a = await d.Z.searchThreads(e, n, t);
            o(!0), u(a)
          } finally {
            l(!1)
          }
        }
      }
    };
    return {
      query: t,
      setQuery: e => {
        a(e), 0 === e.length && o(!1)
      },
      isLoading: r,
      hasResults: i,
      submit: h,
      results: c
    }
  }(n.guild_id, n.id);
  return s.useEffect(() => {
    (0, h.A_)()
  }, []), (0, a.jsx)("div", {
    className: l()(t, I.container),
    children: (0, a.jsx)(o.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: I.header,
        children: [(0, a.jsx)(o.ThreadIcon, {
          size: "md",
          color: "currentColor",
          className: I.threadIcon
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: I.title,
          children: Z.Z.Messages.THREAD_BROWSER_TITLE
        }), x ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: I.divider
          }), (0, a.jsx)(_, {
            ...S
          })]
        }) : null, (0, a.jsx)("div", {
          className: I.spacer
        }), v ? (0, a.jsx)(o.Button, {
          size: o.Button.Sizes.MIN,
          className: I.createButton,
          onClick: () => {
            r(), (0, f.R6)(n, void 0, "Thread Browser Toolbar")
          },
          children: Z.Z.Messages.CREATE
        }) : null, (0, a.jsx)(o.Clickable, {
          className: I.closeIcon,
          onClick: r,
          "aria-label": Z.Z.Messages.CLOSE,
          children: (0, a.jsx)(o.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      children: S.hasResults ? (0, a.jsx)(m.Z, {
        channel: n,
        startThread: N,
        goToThread: R,
        threadIds: S.results
      }) : (0, a.jsx)(g.Z, {
        channel: n,
        startThread: N,
        goToThread: R
      })
    })
  })
}

function _(e) {
  let {
    query: n,
    setQuery: t,
    submit: s,
    isLoading: r
  } = e;
  return (0, a.jsx)(o.SearchBar, {
    autoFocus: !0,
    className: I.searchBox,
    query: n,
    isLoading: r,
    onChange: e => t(e),
    onClear: () => t(""),
    onKeyDown: e => "Enter" === e.key && s(),
    placeholder: Z.Z.Messages.SEARCH_THREAD_NAMES,
    "aria-label": Z.Z.Messages.SEARCH_THREAD_NAMES
  })
}