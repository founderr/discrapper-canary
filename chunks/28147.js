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
  x = t(79984),
  T = t(314734),
  S = t(981631),
  L = t(689938),
  R = t(933693);
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
isScrollCloseToBottom: o
  } = e, c = a === A._b.TEXT, u = a === A._b.TEXT, {
loading: m,
isEmptyState: p,
commandResults: _,
hasCommandResults: E,
applicationResults: f
  } = (0, h.pe)({
channel: n,
query: t,
searchesActivities: !0,
searchesCommands: c,
searchesBots: u
  }), {
fetchState: N,
applicationResults: C,
fetchNextPage: I
  } = (0, h.Q2)({
query: t,
channel: n,
fetches: a !== A._b.VOICE,
pageLimit: 5
  });
  l.useEffect(() => {
o && N === d.M.FETCHED && I();
  }, [
I,
N,
o
  ]);
  let P = null == N || N === d.M.FETCHING,
x = l.useMemo(() => {
  let e = f.map(e => ({
    application: e,
    installOnDemand: !1
  }));
  if (a === A._b.VOICE)
    return e;
  let n = new Set(f.map(e => {
    let {
      id: n
    } = e;
    return n;
  }));
  return [
    ...e,
    ...r().compact(C.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))
  ];
}, [
  a,
  C,
  f
]),
T = x.length > 0,
S = p && !T && !P;
  return m ? (0, i.jsx)(D, {}) : S ? (0, i.jsx)(v.A, {
type: A.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === A._b.TEXT ? L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  E && (0, i.jsx)(b, {
    channel: n,
    commandResults: _,
    query: t
  }),
  (T || P) && (0, i.jsx)(H, {
    applicationResults: x,
    includePlaceholder: P,
    query: t,
    searchesBots: u
  })
]
  });
}

function j(e) {
  let {
channel: n,
query: t,
entrypoint: a
  } = e, r = a === A._b.TEXT, s = a === A._b.TEXT, {
loading: o,
isEmptyState: c,
commandResults: u,
hasCommandResults: d,
applicationResults: m,
hasApplicationResults: p
  } = (0, h.pe)({
channel: n,
query: t,
commandLimit: 10,
searchesCommands: r,
searchesBots: s,
searchesActivities: !0
  }), _ = l.useMemo(() => m.map(e => ({
application: e,
installOnDemand: !1
  })), [m]);
  return o ? (0, i.jsx)(D, {}) : c ? (0, i.jsx)(v.A, {
type: A.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === A._b.TEXT ? L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  d && (0, i.jsx)(b, {
    channel: n,
    commandResults: u,
    query: t
  }),
  p && (0, i.jsx)(H, {
    applicationResults: _,
    query: t,
    searchesBots: s
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
  ]), [h, f] = l.useState(!1), C = l.useCallback(() => f(e => !e), []), v = (null !== (n = (0, o.Z)(r)) && void 0 !== n ? n : r)[0] !== r[0], x = h && !v;
  l.useLayoutEffect(() => f(!1), [v]);
  let {
ref: g,
isTransitioning: M,
onTransitionEnd: y
  } = (0, N.Z)({
key: r,
isExpanded: x,
durationMs: 200,
maxAnimationHeight: T.lv
  }), O = x || M, j = x ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE, b = O ? a : d;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: L.Z.Messages.COMMANDS,
    buttonType: j,
    onClickViewButton: s ? C : void 0
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
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
          }), p.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
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
className: R.searchOpenAppDetailAppCard,
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
    title: L.Z.Messages.APPS
  }),
  (0, i.jsxs)('div', {
    className: R.sectionContentContainer,
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
      t && M.map(e => (0, i.jsx)(x.Z, {}, e))
    ]
  })
]
  }) : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: L.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
  }),
  (0, i.jsxs)('div', {
    className: R.sectionActivitiesContentContainer,
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
      t && M.map(e => (0, i.jsx)(x.Z, {}, e))
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
    title: L.Z.Messages.COMMANDS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: g.map(e => (0, i.jsx)(x.Z, {}, e))
  }),
  (0, i.jsx)(I.Z, {
    title: L.Z.Messages.APPS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: M.map(e => (0, i.jsx)(x.Z, {}, e))
  })
]
  });
}