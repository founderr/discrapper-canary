t.d(n, {
  Z: function() {
    return U
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(863942), t(642549), t(653041);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(788900),
  o = t(268146),
  u = t(442837),
  c = t(141038),
  d = t(846519),
  m = t(481060),
  E = t(224706),
  _ = t(594190),
  S = t(569984),
  h = t(918701),
  g = t(977156),
  C = t(433811),
  I = t(131951),
  Z = t(449224),
  N = t(285952),
  x = t(643095),
  f = t(358085),
  A = t(463727),
  T = t(855403),
  R = t(989941),
  v = t(958707),
  L = t(133179),
  p = t(46140),
  M = t(65154),
  O = t(689938),
  j = t(946152);
async function P() {
  let e = I.Z.getVideoDevices(),
    n = (0, c.Z)(I.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
      width: 176,
      height: 99
    }),
    t = D(),
    l = await t,
    s = await n,
    a = s.filter(e => e.id.startsWith(o.vA.SCREEN)),
    i = function(e, n) {
      let t = {};
      return n.forEach(e => {
        t[e.id] = e
      }), e.forEach(e => {
        t[e.id] = e
      }), Object.values(t)
    }(s.filter(e => e.id.startsWith(o.vA.WINDOW)), l),
    u = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
  return {
    windowSources: i,
    screenSources: a,
    cameraSources: Object.entries(e).filter(e => {
      let [n, t] = e;
      return !t.disabled
    }).map((e, n) => {
      let [t, l] = e, s = u[n % u.length], a = Uint8Array.from(atob(s), e => e.charCodeAt(0)), i = (0, r.xS)(a);
      return {
        id: "camera:" + l.id,
        name: l.name,
        url: i
      }
    })
  }
}
async function D() {
  let e = _.ZP.getRunningGames();
  return (await Promise.all(e.map(async e => {
    let n;
    if (null == e.name) return null;
    try {
      n = await E.Z.identifyGame(e.pid, e.name)
    } catch (e) {
      return null
    }
    let t = e.windowHandle,
      l = e.name,
      s = n.icon;
    return null != t && null != l && null != s ? {
      id: "window:".concat(t),
      name: l,
      url: "data:image/bmp;base64,".concat(s)
    } : null
  }))).filter(e => null !== e)
}

function G(e) {
  let n = (0, f.isWindows)() ? (0, R.Z)(_.ZP, Z.Z) : null,
    t = _.ZP.getRunningGames();
  return null != n && (0, T.Z)(e.id, n.windowHandle) ? 2 : null != t.find(n => (0, T.Z)(e.id, n.windowHandle)) ? 1 : 0
}

function U(e) {
  let {
    selectedSource: n,
    onChangeSelectedSource: t
  } = e, {
    enableGoLiveCaptureCard: a
  } = A.Z.useExperiment({
    location: "GoLive_Source_Select"
  }), r = I.Z.supports(M.AN.GO_LIVE_HARDWARE), [c, E] = s.useState(null), [Z, f] = s.useState(null), [R, D] = s.useState(null), U = null != R && R.length > 0, [b, w] = s.useState(o.vA.WINDOW), [y, k] = s.useState(!1), B = s.useRef(null), H = s.useRef(new d.Xp), V = (0, u.e7)([_.ZP], () => _.ZP.getRunningGames()), F = function(e, n, t) {
    let l = (0, g.Zy)({
      location: p.dr.STREAM_SOURCE_SELECT
    });
    return s.useMemo(() => {
      if (null == t || !l) return null;
      for (let l of t) {
        var s, a;
        let t = n.find(e => (0, T.Z)(l.id, e.windowHandle));
        if ((null == t ? void 0 : t.id) == null) continue;
        let i = (0, h.lQ)(e, t.id);
        if (null != i && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (a = i.userStatus) || void 0 === a ? void 0 : a.completedAt) == null) return {
          source: l,
          quest: i
        }
      }
      return null
    }, [l, e, n, t])
  }((0, u.e7)([S.Z], () => S.Z.quests), V, Z), W = s.useMemo(() => null == Z ? null : [...Z].sort((e, n) => (null == F ? void 0 : F.source.id) === e.id ? -1 : (null == F ? void 0 : F.source.id) === n.id ? 1 : G(n) - G(e)), [F, Z]);
  s.useEffect(() => {
    let e = H.current;
    return P().then(e => {
      let {
        screenSources: n,
        windowSources: t,
        cameraSources: l
      } = e;
      E(n), f(t), D(l)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: n,
        cameraSources: t
      } = await P();
      E(e), f(n), D(t)
    }), () => {
      e.stop()
    }
  }, []);
  let z = s.useCallback(e => {
      if (null !== e) {
        var n;
        B.current = e, k((n = !e.isScrolledToTop(), n))
      }
    }, []),
    K = function(e) {
      switch (e) {
        case o.vA.WINDOW:
          return W;
        case o.vA.SCREEN:
          return c;
        case o.vA.CAMERA:
          return R
      }
    }(b);
  if (null == K) return (0, l.jsx)(N.Z, {
    className: j.spinner,
    justify: N.Z.Justify.CENTER,
    align: N.Z.Align.CENTER,
    children: (0, l.jsx)(m.Spinner, {})
  });
  let Y = K.map(e => {
    let {
      id: s
    } = e, a = (null == n ? void 0 : n.id) === s;
    return (0, l.jsx)(m.Clickable, {
      className: i()(j.tile, {
        [j.selected]: a
      }),
      onClick: () => t(e, null),
      children: (0, l.jsx)(L.Z, {
        source: e,
        selectedSource: n
      }, e.id)
    }, s)
  });

  function q() {
    let e = B.current;
    null != e && k(!e.isScrolledToTop())
  }
  return (0, l.jsxs)(s.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: j.segmentContainer,
      children: [(0, l.jsx)(v.Z, {
        separator: y
      }), (0, l.jsx)(m.SegmentedControl, {
        options: function() {
          let e = [{
            name: O.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: o.vA.WINDOW
          }, {
            name: O.Z.Messages.GO_LIVE_MODAL_SCREENS,
            value: o.vA.SCREEN
          }];
          return a && r && U && e.push({
            name: O.Z.Messages.GO_LIVE_MODAL_CAPTURE,
            value: o.vA.CAMERA
          }), e
        }(),
        value: b,
        onChange: e => {
          let {
            value: n
          } = e;
          return w(n)
        },
        className: j.segmentControl,
        optionClassName: j.segmentControlOption
      })]
    }), b === o.vA.CAMERA ? (0, l.jsx)("div", {
      className: j.sourceContainer,
      children: (0, l.jsx)(m.AdvancedScroller, {
        ref: z,
        className: j.sourceScroller,
        onScroll: q,
        children: (0, l.jsx)(x.Z, {
          layout: x.Z.Layout.WRAP,
          columns: 2,
          className: j.sourceContainer,
          children: Y
        })
      })
    }) : (0, l.jsxs)(m.AdvancedScroller, {
      ref: z,
      className: j.sourceScroller,
      onScroll: q,
      children: [b === o.vA.WINDOW && null != F && (0, l.jsx)(C.Z, {
        quest: F.quest
      }), (0, l.jsx)(x.Z, {
        layout: x.Z.Layout.WRAP,
        columns: 2,
        className: j.sourceContainer,
        children: Y
      })]
    })]
  })
}