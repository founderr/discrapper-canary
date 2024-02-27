"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("723251"),
  u = l("771281"),
  o = l("351720"),
  d = l("862337"),
  c = l("77078"),
  f = l("823411"),
  m = l("161454"),
  S = l("42887"),
  C = l("703370"),
  E = l("145131"),
  h = l("162933"),
  N = l("773336"),
  g = l("301834"),
  _ = l("756898"),
  I = l("375202"),
  p = l("321443"),
  x = l("444276"),
  v = l("353927"),
  A = l("782340"),
  R = l("142716");
async function T() {
  let e = S.default.getVideoDevices(),
    t = (0, o.default)(S.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = L(),
    n = await l,
    a = await t,
    s = a.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    r = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l).sort((e, t) => M(t) - M(e))
    }(a.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), n),
    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
    c = Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, n] = e, a = d[t % d.length], s = Uint8Array.from(atob(a), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
      return {
        id: "camera:" + n.id,
        name: n.name,
        url: r
      }
    });
  return {
    windowSources: r,
    screenSources: s,
    cameraSources: c
  }
}
async function L() {
  let e = m.default.getRunningGames(),
    t = await Promise.all(e.map(async e => {
      let t;
      if (null == e.name) return null;
      try {
        t = await f.default.identifyGame(e.pid, e.name)
      } catch (e) {
        return null
      }
      let l = e.windowHandle,
        n = e.name,
        a = t.icon;
      return null != l && null != n && null != a ? {
        id: "window:".concat(l),
        name: n,
        url: "data:image/bmp;base64,".concat(a)
      } : null
    }));
  return t.filter(e => null !== e)
}

function M(e) {
  let t = (0, N.isWindows)() ? (0, I.default)(m.default, C.default) : null,
    l = m.default.getRunningGames();
  return null != t && (0, _.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, _.default)(e.id, t.windowHandle)) ? 1 : 0
}

function j(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: s
  } = g.default.useExperiment({
    location: "GoLive_Source_Select"
  }), i = S.default.supports(v.Features.GO_LIVE_HARDWARE), [o, f] = a.useState(null), [m, C] = a.useState(null), [N, _] = a.useState(null), I = null != N && N.length > 0, [L, M] = a.useState(u.DesktopSources.WINDOW), [j, O] = a.useState(!1), D = a.useRef(null), P = a.useRef(new d.Interval);
  a.useEffect(() => {
    let e = P.current;
    return T().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: n
      } = e;
      f(t), C(l), _(n)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await T();
      f(e), C(t), _(l)
    }), () => {
      e.stop()
    }
  }, []);
  let G = a.useCallback(e => {
      if (null !== e) {
        var t;
        D.current = e, O((t = !e.isScrolledToTop(), t))
      }
    }, []),
    U = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return m;
        case u.DesktopSources.SCREEN:
          return o;
        case u.DesktopSources.CAMERA:
          return N
      }
    }(L);
  if (null == U) return (0, n.jsx)(E.default, {
    className: R.spinner,
    justify: E.default.Justify.CENTER,
    align: E.default.Align.CENTER,
    children: (0, n.jsx)(c.Spinner, {})
  });
  let w = U.map(e => {
    let {
      id: a
    } = e, s = (null == t ? void 0 : t.id) === a;
    return (0, n.jsx)(c.Clickable, {
      className: r(R.tile, {
        [R.selected]: s
      }),
      onClick: () => l(e, null),
      children: (0, n.jsx)(x.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, a)
  });

  function b() {
    let e = D.current;
    null != e && O(!e.isScrolledToTop())
  }
  return (0, n.jsxs)(a.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: R.segmentContainer,
      children: [(0, n.jsx)(p.default, {
        separator: j
      }), (0, n.jsx)(c.SegmentedControl, {
        options: function() {
          let e = [{
            name: A.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: A.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return s && i && I && e.push({
            name: A.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: L,
        onChange: e => {
          let {
            value: t
          } = e;
          return M(t)
        },
        className: R.segmentControl,
        optionClassName: R.segmentControlOption
      })]
    }), L === u.DesktopSources.CAMERA ? (0, n.jsx)("div", {
      className: R.sourceContainer,
      children: (0, n.jsx)(c.AdvancedScroller, {
        ref: G,
        className: R.sourceScroller,
        onScroll: b,
        children: (0, n.jsx)(h.default, {
          layout: h.default.Layout.WRAP,
          columns: 2,
          className: R.sourceContainer,
          children: w
        })
      })
    }) : (0, n.jsx)(c.AdvancedScroller, {
      ref: G,
      className: R.sourceScroller,
      onScroll: b,
      children: (0, n.jsx)(h.default, {
        layout: h.default.Layout.WRAP,
        columns: 2,
        className: R.sourceContainer,
        children: w
      })
    })]
  })
}