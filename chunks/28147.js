t.d(n, {
  Z: function() {
return y;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(209173),
  o = t(110924),
  c = t(555573),
  u = t(895924),
  d = t(809547),
  m = t(583027),
  p = t(585483),
  _ = t(499254),
  E = t(541099),
  A = t(827498),
  h = t(392370),
  f = t(98880),
  N = t(520315),
  C = t(532309),
  v = t(561160),
  I = t(41558),
  P = t(106771),
  T = t(79984),
  S = t(314734),
  x = t(981631),
  R = t(689938),
  L = t(933693);
let g = Array(6).fill(0).map((e, n) => n),
  M = [, , , ].fill(0).map((e, n) => n);

function y(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(O, {
...e
  }) : (0, i.jsx)(j, {
...e
  });
}

function O(e) {
  let {
channel: n,
query: t,
entrypoint: a,
enableActivitiesSearch: o,
isScrollCloseToBottom: c
  } = e, u = a === A._b.VOICE || o, m = a === A._b.TEXT, p = a === A._b.TEXT, {
loading: _,
isEmptyState: E,
commandResults: f,
hasCommandResults: N,
applicationResults: C
  } = (0, h.pe)({
channel: n,
query: t,
searchesActivities: u,
searchesCommands: m,
searchesBots: p
  }), {
fetchState: I,
applicationResults: P,
fetchNextPage: T
  } = (0, h.Q2)({
query: t,
channel: n,
fetches: a !== A._b.VOICE,
pageLimit: 5
  });
  l.useEffect(() => {
c && I === d.M.FETCHED && T();
  }, [
T,
I,
c
  ]);
  let S = null == I || I === d.M.FETCHING,
x = l.useMemo(() => {
  let e = C.map(e => ({
    application: e,
    installOnDemand: !1
  }));
  if (a === A._b.VOICE)
    return e;
  let n = new Set(C.map(e => {
    let {
      id: n
    } = e;
    return n;
  }));
  return [
    ...e,
    ...r().compact(P.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))
  ];
}, [
  a,
  P,
  C
]),
L = x.length > 0,
g = E && !L && !S;
  return _ ? (0, i.jsx)(D, {}) : g ? (0, i.jsx)(v.A, {
type: A.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === A._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  N && (0, i.jsx)(b, {
    channel: n,
    commandResults: f,
    query: t
  }),
  (L || S) && (0, i.jsx)(H, {
    applicationResults: x,
    includePlaceholder: S,
    query: t,
    searchesBots: p
  })
]
  });
}

function j(e) {
  let {
channel: n,
query: t,
entrypoint: a,
enableActivitiesSearch: r
  } = e, s = a === A._b.VOICE || r, o = a === A._b.TEXT, c = a === A._b.TEXT, {
loading: u,
isEmptyState: d,
commandResults: m,
hasCommandResults: p,
applicationResults: _,
hasApplicationResults: E
  } = (0, h.pe)({
channel: n,
query: t,
commandLimit: 10,
searchesCommands: o,
searchesBots: c,
searchesActivities: s
  }), f = l.useMemo(() => _.map(e => ({
application: e,
installOnDemand: !1
  })), [_]);
  return u ? (0, i.jsx)(D, {}) : d ? (0, i.jsx)(v.A, {
type: A.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === A._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  p && (0, i.jsx)(b, {
    channel: n,
    commandResults: m,
    query: t
  }),
  E && (0, i.jsx)(H, {
    applicationResults: f,
    query: t,
    searchesBots: c
  })
]
  });
}

function b(e) {
  var n;
  let {
channel: t,
commandResults: a,
query: r
  } = e, s = a.length > 4, d = l.useMemo(() => s ? a.slice(0, 4) : a, [
a,
s
  ]), [h, f] = l.useState(!1), C = l.useCallback(() => f(e => !e), []), v = (null !== (n = (0, o.Z)(r)) && void 0 !== n ? n : r)[0] !== r[0], T = h && !v;
  l.useLayoutEffect(() => f(!1), [v]);
  let {
ref: g,
isTransitioning: M,
onTransitionEnd: y
  } = (0, N.Z)({
key: r,
isExpanded: T,
durationMs: 200,
maxAnimationHeight: S.lv
  }), O = T || M, j = T ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE, b = O ? a : d;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: R.Z.Messages.COMMANDS,
    buttonType: j,
    onClickViewButton: s ? C : void 0
  }),
  (0, i.jsx)('div', {
    className: L.sectionContentContainer,
    ref: g,
    onTransitionEnd: y,
    children: b.map((e, n) => {
      let {
        command: l,
        application: a,
        section: s
      } = e;
      return (0, i.jsx)(P.Z, {
        command: l,
        application: a,
        query: r,
        searchResultsPosition: n,
        onClick: () => {
          let e = E.Z.entrypoint();
          _.y(A.ti.DISMISSED), (0, m.Mo)({
            command: l,
            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
            sectionName: A.L3.SEARCH
          }), c.Po({
            channelId: t.id,
            command: l,
            section: s,
            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
            triggerSection: void 0,
            queryLength: r.length,
            sectionName: A.L3.SEARCH,
            query: r,
            searchResultsPosition: n,
            source: e
          }), p.S.dispatch(x.CkL.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: t.id
          });
        }
      }, l.id);
    })
  })
]
  });
}

function Z(e) {
  let {
trackSearchResultsItemImpressionRef: n
  } = (0, C.Z)({
applicationId: e.application.id,
query: e.query,
searchResultsPosition: e.resultsPosition
  });
  return (0, i.jsx)('div', {
className: L.searchOpenAppDetailAppCard,
ref: e => n.current = e,
children: (0, i.jsx)(f.kA, {
  ...e,
  tracksImpression: !1,
  enableVideoBanner: !0
})
  });
}

function H(e) {
  let {
applicationResults: n,
includePlaceholder: t,
query: l,
searchesBots: a
  } = e;
  return a ? (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: R.Z.Messages.APPS
  }),
  (0, i.jsxs)('div', {
    className: L.sectionContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(U, {
          application: t,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: A.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id);
      }),
      t && M.map(e => (0, i.jsx)(T.Z, {}, e))
    ]
  })
]
  }) : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: R.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
  }),
  (0, i.jsxs)('div', {
    className: L.sectionActivitiesContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(Z, {
          application: t,
          look: f.U4.LARGE_BANNER,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: A.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id);
      }),
      t && M.map(e => (0, i.jsx)(T.Z, {}, e))
    ]
  })
]
  });
}

function U(e) {
  let n = (0, f.cG)(e);
  return (0, i.jsx)(P.Z, {
application: e.application,
onClick: n,
query: e.query,
searchResultsPosition: e.resultsPosition
  });
}

function D() {
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: R.Z.Messages.COMMANDS
  }),
  (0, i.jsx)('div', {
    className: L.sectionContentContainer,
    children: g.map(e => (0, i.jsx)(T.Z, {}, e))
  }),
  (0, i.jsx)(I.Z, {
    title: R.Z.Messages.APPS
  }),
  (0, i.jsx)('div', {
    className: L.sectionContentContainer,
    children: M.map(e => (0, i.jsx)(T.Z, {}, e))
  })
]
  });
}