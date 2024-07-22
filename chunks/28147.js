t.d(n, {
  Z: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(209173),
  o = t(110924),
  c = t(367907),
  u = t(555573),
  d = t(895924),
  m = t(809547),
  p = t(583027),
  _ = t(585483),
  E = t(499254),
  A = t(541099),
  h = t(827498),
  f = t(392370),
  N = t(98880),
  C = t(520315),
  v = t(532309),
  I = t(561160),
  x = t(41558),
  P = t(106771),
  T = t(79984),
  S = t(314734),
  L = t(981631),
  g = t(689938),
  R = t(933693);
let M = Array(6).fill(0).map((e, n) => n),
  y = [, , , ].fill(0).map((e, n) => n);

function O(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(j, {
...e
  }) : (0, i.jsx)(b, {
...e
  });
}

function j(e) {
  let {
channel: n,
query: t,
entrypoint: a,
isScrollCloseToBottom: o
  } = e, c = a === h._b.TEXT, u = a === h._b.TEXT, {
loading: d,
isEmptyState: p,
commandResults: _,
hasCommandResults: E,
applicationResults: A
  } = (0, f.pe)({
channel: n,
query: t,
searchesActivities: !0,
searchesCommands: c,
searchesBots: u
  }), {
fetchState: N,
applicationResults: C,
fetchNextPage: v
  } = (0, f.Q2)({
query: t,
channel: n,
fetches: a !== h._b.VOICE,
pageLimit: 5
  });
  l.useEffect(() => {
o && N === m.M.FETCHED && v();
  }, [
v,
N,
o
  ]);
  let x = null == N || N === m.M.FETCHING,
P = l.useMemo(() => {
  let e = A.map(e => ({
    application: e,
    installOnDemand: !1
  }));
  if (a === h._b.VOICE)
    return e;
  let n = new Set(A.map(e => {
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
  A
]),
T = P.length > 0,
S = p && !T && !x;
  return d ? (0, i.jsx)(B, {}) : S ? (0, i.jsx)(I.A, {
type: h.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === h._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  E && (0, i.jsx)(Z, {
    channel: n,
    commandResults: _,
    query: t
  }),
  (T || x) && (0, i.jsx)(U, {
    applicationResults: P,
    includePlaceholder: x,
    query: t,
    searchesBots: u
  })
]
  });
}

function b(e) {
  let {
channel: n,
query: t,
entrypoint: a
  } = e, r = a === h._b.TEXT, s = a === h._b.TEXT, {
loading: o,
isEmptyState: c,
commandResults: u,
hasCommandResults: d,
applicationResults: m,
hasApplicationResults: p
  } = (0, f.pe)({
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
  return o ? (0, i.jsx)(B, {}) : c ? (0, i.jsx)(I.A, {
type: h.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: a === h._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  d && (0, i.jsx)(Z, {
    channel: n,
    commandResults: u,
    query: t
  }),
  p && (0, i.jsx)(U, {
    applicationResults: _,
    query: t,
    searchesBots: s
  })
]
  });
}

function Z(e) {
  var n, t;
  let {
channel: a,
commandResults: r,
query: s
  } = e, m = r.length > 4, f = l.useMemo(() => m ? r.slice(0, 4) : r, [
r,
m
  ]), [N, v] = l.useState(!1), I = null !== (n = (0, o.Z)(N)) && void 0 !== n ? n : N, T = l.useCallback(() => v(e => !e), []), M = (null !== (t = (0, o.Z)(s)) && void 0 !== t ? t : s)[0] !== s[0], y = N && !M;
  l.useLayoutEffect(() => v(!1), [M]);
  let {
ref: O,
isTransitioning: j,
onTransitionEnd: b
  } = (0, C.Z)({
key: s,
isExpanded: y,
durationMs: 200,
maxAnimationHeight: S.lv
  });
  l.useEffect(() => {
!I && N && (0, c.yw)(L.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
  section_name: h.L3.SEARCH,
  source: A.Z.entrypoint(),
  num: r.length
});
  }, [
r.length,
I,
N
  ]);
  let Z = y || j,
H = y ? x.Z.buttonTypes.VIEW_LESS : x.Z.buttonTypes.VIEW_MORE,
U = Z ? r : f;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(x.Z, {
    title: g.Z.Messages.COMMANDS,
    buttonType: H,
    onClickViewButton: m ? T : void 0
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    ref: O,
    onTransitionEnd: b,
    children: U.map((e, n) => {
      let {
        command: t,
        application: l,
        section: r
      } = e;
      return (0, i.jsx)(P.Z, {
        command: t,
        application: l,
        query: s,
        searchResultsPosition: n,
        onClick: () => {
          let e = A.Z.entrypoint();
          E.y(h.ti.DISMISSED), (0, p.Mo)({
            command: t,
            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
            sectionName: h.L3.SEARCH
          }), u.Po({
            channelId: a.id,
            command: t,
            section: r,
            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
            triggerSection: void 0,
            queryLength: s.length,
            sectionName: h.L3.SEARCH,
            query: s,
            searchResultsPosition: n,
            source: e
          }), _.S.dispatch(L.CkL.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: a.id
          });
        }
      }, t.id);
    })
  })
]
  });
}

function H(e) {
  let {
trackSearchResultsItemImpressionRef: n
  } = (0, v.Z)({
applicationId: e.application.id,
query: e.query,
searchResultsPosition: e.resultsPosition
  });
  return (0, i.jsx)('div', {
className: R.searchOpenAppDetailAppCard,
ref: e => n.current = e,
children: (0, i.jsx)(N.kA, {
  ...e,
  tracksImpression: !1,
  enableVideoBanner: !0
})
  });
}

function U(e) {
  let {
applicationResults: n,
includePlaceholder: t,
query: l,
searchesBots: a
  } = e;
  return a ? (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(x.Z, {
    title: g.Z.Messages.APPS
  }),
  (0, i.jsxs)('div', {
    className: R.sectionContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(D, {
          application: t,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: h.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id);
      }),
      t && y.map(e => (0, i.jsx)(T.Z, {}, e))
    ]
  })
]
  }) : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(x.Z, {
    title: g.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
  }),
  (0, i.jsxs)('div', {
    className: R.sectionActivitiesContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(H, {
          application: t,
          look: N.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: h.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id);
      }),
      t && y.map(e => (0, i.jsx)(T.Z, {}, e))
    ]
  })
]
  });
}

function D(e) {
  let n = (0, N.cG)(e);
  return (0, i.jsx)(P.Z, {
application: e.application,
onClick: n,
query: e.query,
searchResultsPosition: e.resultsPosition
  });
}

function B() {
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(x.Z, {
    title: g.Z.Messages.COMMANDS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: M.map(e => (0, i.jsx)(T.Z, {}, e))
  }),
  (0, i.jsx)(x.Z, {
    title: g.Z.Messages.APPS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: y.map(e => (0, i.jsx)(T.Z, {}, e))
  })
]
  });
}