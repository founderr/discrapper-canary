"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
var a = l("37983"),
  n = l("884691"),
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
  E = l("703370"),
  C = l("145131"),
  h = l("162933"),
  g = l("773336"),
  _ = l("301834"),
  N = l("756898"),
  p = l("375202"),
  I = l("321443"),
  x = l("444276"),
  A = l("353927"),
  R = l("782340"),
  v = l("142716");
async function T() {
  let e = S.default.getVideoDevices(),
    t = (0, o.default)(S.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = L(),
    a = await l,
    n = await t,
    s = n.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    r = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l).sort((e, t) => M(t) - M(e))
    }(n.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), a),
    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
    c = Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, a] = e, n = d[t % d.length], s = Uint8Array.from(atob(n), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
      return {
        id: "camera:" + a.id,
        name: a.name,
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
        a = e.name,
        n = t.icon;
      return null != l && null != a && null != n ? {
        id: "window:".concat(l),
        name: a,
        url: "data:image/bmp;base64,".concat(n)
      } : null
    }));
  return t.filter(e => null !== e)
}

function M(e) {
  let t = (0, g.isWindows)() ? (0, p.default)(m.default, E.default) : null,
    l = m.default.getRunningGames();
  return null != t && (0, N.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, N.default)(e.id, t.windowHandle)) ? 1 : 0
}

function O(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: s
  } = _.default.useExperiment({
    location: "GoLive_Source_Select"
  }), i = S.default.supports(A.Features.GO_LIVE_HARDWARE), [o, f] = n.useState(null), [m, E] = n.useState(null), [g, N] = n.useState(null), p = null != g && g.length > 0, [L, M] = n.useState(u.DesktopSources.WINDOW), [O, j] = n.useState(!1), D = n.useRef(null), P = n.useRef(new d.Interval);
  n.useEffect(() => {
    let e = P.current;
    return T().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: a
      } = e;
      f(t), E(l), N(a)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await T();
      f(e), E(t), N(l)
    }), () => {
      e.stop()
    }
  }, []);
  let b = n.useCallback(e => {
      if (null !== e) {
        var t;
        D.current = e, j((t = !e.isScrolledToTop(), t))
      }
    }, []),
    G = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return m;
        case u.DesktopSources.SCREEN:
          return o;
        case u.DesktopSources.CAMERA:
          return g
      }
    }(L);
  if (null == G) return (0, a.jsx)(C.default, {
    className: v.spinner,
    justify: C.default.Justify.CENTER,
    align: C.default.Align.CENTER,
    children: (0, a.jsx)(c.Spinner, {})
  });
  let U = G.map(e => {
    let {
      id: n
    } = e, s = (null == t ? void 0 : t.id) === n;
    return (0, a.jsx)(c.Clickable, {
      className: r(v.tile, {
        [v.selected]: s
      }),
      onClick: () => l(e, null),
      children: (0, a.jsx)(x.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, n)
  });

  function k() {
    let e = D.current;
    null != e && j(!e.isScrolledToTop())
  }
  return (0, a.jsxs)(n.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: v.segmentContainer,
      children: [(0, a.jsx)(I.default, {
        separator: O
      }), (0, a.jsx)(c.SegmentedControl, {
        options: function() {
          let e = [{
            name: R.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: R.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return s && i && p && e.push({
            name: R.default.Messages.GO_LIVE_MODAL_CAPTURE,
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
        className: v.segmentControl,
        optionClassName: v.segmentControlOption
      })]
    }), L === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
      className: v.sourceContainer,
      children: (0, a.jsx)(c.AdvancedScroller, {
        ref: b,
        className: v.sourceScroller,
        onScroll: k,
        children: (0, a.jsx)(h.default, {
          layout: h.default.Layout.WRAP,
          columns: 2,
          className: v.sourceContainer,
          children: U
        })
      })
    }) : (0, a.jsx)(c.AdvancedScroller, {
      ref: b,
      className: v.sourceScroller,
      onScroll: k,
      children: (0, a.jsx)(h.default, {
        layout: h.default.Layout.WRAP,
        columns: 2,
        className: v.sourceContainer,
        children: U
      })
    })]
  })
}