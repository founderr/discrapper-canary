"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
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
  m = l("42887"),
  S = l("568307"),
  E = l("703370"),
  C = l("145131"),
  h = l("162933"),
  g = l("773336"),
  _ = l("301834"),
  N = l("756898"),
  p = l("375202"),
  I = l("321443"),
  x = l("444276"),
  v = l("353927"),
  A = l("782340"),
  R = l("45122");
async function T() {
  let e = m.default.getVideoDevices(),
    t = (0, o.default)(m.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
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
      }), Object.values(l).sort((e, t) => O(t) - O(e))
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
  let e = S.default.getRunningGames(),
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

function O(e) {
  let t = (0, g.isWindows)() ? (0, p.default)(S.default, E.default) : null,
    l = S.default.getRunningGames();
  return null != t && (0, N.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, N.default)(e.id, t.windowHandle)) ? 1 : 0
}

function j(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: s
  } = _.default.useExperiment({
    location: "GoLive_Source_Select"
  }), i = m.default.supports(v.Features.GO_LIVE_HARDWARE), [o, f] = n.useState(null), [S, E] = n.useState(null), [g, N] = n.useState(null), p = null != g && g.length > 0, [L, O] = n.useState(u.DesktopSources.WINDOW), [j, M] = n.useState(!1), D = n.useRef(null), P = n.useRef(new d.Interval);
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
        D.current = e, M((t = !e.isScrolledToTop(), t))
      }
    }, []),
    G = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return S;
        case u.DesktopSources.SCREEN:
          return o;
        case u.DesktopSources.CAMERA:
          return g
      }
    }(L);
  if (null == G) return (0, a.jsx)(C.default, {
    className: R.spinner,
    justify: C.default.Justify.CENTER,
    align: C.default.Align.CENTER,
    children: (0, a.jsx)(c.Spinner, {})
  });
  let U = G.map(e => {
    let {
      id: n
    } = e, s = (null == t ? void 0 : t.id) === n;
    return (0, a.jsx)(c.Clickable, {
      className: r(R.tile, {
        [R.selected]: s
      }),
      onClick: () => l(e, null),
      children: (0, a.jsx)(x.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, n)
  });

  function w() {
    let e = D.current;
    null != e && M(!e.isScrolledToTop())
  }
  return (0, a.jsxs)(n.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: R.segmentContainer,
      children: [(0, a.jsx)(I.default, {
        separator: j
      }), (0, a.jsx)(c.SegmentedControl, {
        options: function() {
          let e = [{
            name: A.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: A.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return s && i && p && e.push({
            name: A.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: L,
        onChange: e => {
          let {
            value: t
          } = e;
          return O(t)
        },
        className: R.segmentControl,
        optionClassName: R.segmentControlOption
      })]
    }), L === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
      className: R.sourceContainer,
      children: (0, a.jsx)(c.AdvancedScroller, {
        ref: b,
        className: R.sourceScroller,
        onScroll: w,
        children: (0, a.jsx)(h.default, {
          layout: h.default.Layout.WRAP,
          columns: 2,
          className: R.sourceContainer,
          children: U
        })
      })
    }) : (0, a.jsx)(c.AdvancedScroller, {
      ref: b,
      className: R.sourceScroller,
      onScroll: w,
      children: (0, a.jsx)(h.default, {
        layout: h.default.Layout.WRAP,
        columns: 2,
        className: R.sourceContainer,
        children: U
      })
    })]
  })
}