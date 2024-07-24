t.d(n, {
  Z: function() {
return y;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(392711),
  r = t.n(l),
  o = t(209173),
  s = t(110924),
  c = t(367907),
  u = t(555573),
  d = t(895924),
  m = t(809547),
  p = t(583027),
  _ = t(585483),
  f = t(499254),
  C = t(541099),
  h = t(827498),
  A = t(392370),
  E = t(98880),
  N = t(520315),
  v = t(532309),
  x = t(561160),
  I = t(41558),
  g = t(106771),
  P = t(79984),
  L = t(314734),
  S = t(981631),
  T = t(689938),
  R = t(429032);
let b = Array(6).fill(0).map((e, n) => n),
  M = [, , , ].fill(0).map((e, n) => n);

function y(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(j, {
...e
  }) : (0, i.jsx)(O, {
...e
  });
}

function j(e) {
  let {
channel: n,
query: t,
entrypoint: l,
isScrollCloseToBottom: s
  } = e, c = l === h._b.TEXT, u = l === h._b.TEXT, {
loading: d,
isEmptyState: p,
commandResults: _,
hasCommandResults: f,
applicationResults: C
  } = (0, A.pe)({
channel: n,
query: t,
searchesActivities: !0,
searchesCommands: c,
searchesBots: u
  }), {
fetchState: E,
applicationResults: N,
fetchNextPage: v
  } = (0, A.Q2)({
query: t,
channel: n,
fetches: l !== h._b.VOICE,
pageLimit: 5
  });
  a.useEffect(() => {
s && E === m.M.FETCHED && v();
  }, [
v,
E,
s
  ]);
  let I = null == E || E === m.M.FETCHING,
g = a.useMemo(() => {
  let e = C.map(e => ({
    application: e,
    installOnDemand: !1
  }));
  if (l === h._b.VOICE)
    return e;
  let n = new Set(C.map(e => {
    let {
      id: n
    } = e;
    return n;
  }));
  return [
    ...e,
    ...r().compact(N.map(e => e.type === o.s.CONNECTION || n.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))
  ];
}, [
  l,
  N,
  C
]),
P = g.length > 0,
L = p && !P && !I;
  return d ? (0, i.jsx)(B, {}) : L ? (0, i.jsx)(x.A, {
type: h.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: l === h._b.TEXT ? T.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : T.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)('div', {
children: [
  f && (0, i.jsx)(Z, {
    channel: n,
    commandResults: _,
    query: t
  }),
  (P || I) && (0, i.jsx)(U, {
    applicationResults: g,
    includePlaceholder: I,
    query: t,
    searchesBots: u
  })
]
  });
}

function O(e) {
  let {
channel: n,
query: t,
entrypoint: l
  } = e, r = l === h._b.TEXT, o = l === h._b.TEXT, {
loading: s,
isEmptyState: c,
commandResults: u,
hasCommandResults: d,
applicationResults: m,
hasApplicationResults: p
  } = (0, A.pe)({
channel: n,
query: t,
commandLimit: 10,
searchesCommands: r,
searchesBots: o,
searchesActivities: !0
  }), _ = a.useMemo(() => m.map(e => ({
application: e,
installOnDemand: !1
  })), [m]);
  return s ? (0, i.jsx)(B, {}) : c ? (0, i.jsx)(x.A, {
type: h.LG.SEARCH_EMPTY,
searchQuery: t,
textContent: l === h._b.TEXT ? T.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : T.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
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
    searchesBots: o
  })
]
  });
}

function Z(e) {
  var n, t;
  let {
channel: l,
commandResults: r,
query: o
  } = e, m = r.length > 4, A = a.useMemo(() => m ? r.slice(0, 4) : r, [
r,
m
  ]), [E, v] = a.useState(!1), x = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E, P = a.useCallback(() => v(e => !e), []), b = (null !== (t = (0, s.Z)(o)) && void 0 !== t ? t : o)[0] !== o[0], M = E && !b;
  a.useLayoutEffect(() => v(!1), [b]);
  let {
ref: y,
isTransitioning: j,
onTransitionEnd: O
  } = (0, N.Z)({
key: o,
isExpanded: M,
durationMs: 200,
maxAnimationHeight: L.lv
  });
  a.useEffect(() => {
!x && E && (0, c.yw)(S.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
  section_name: h.L3.SEARCH,
  source: C.Z.entrypoint(),
  num: r.length
});
  }, [
r.length,
x,
E
  ]);
  let Z = M || j,
H = M ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE,
U = Z ? r : A;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: T.Z.Messages.COMMANDS,
    buttonType: H,
    onClickViewButton: m ? P : void 0
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    ref: y,
    onTransitionEnd: O,
    children: U.map((e, n) => {
      let {
        command: t,
        application: a,
        section: r
      } = e;
      return (0, i.jsx)(g.Z, {
        command: t,
        application: a,
        query: o,
        searchResultsPosition: n,
        onClick: () => {
          let e = C.Z.entrypoint();
          f.y(h.ti.DISMISSED), (0, p.Mo)({
            command: t,
            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
            sectionName: h.L3.SEARCH
          }), u.Po({
            channelId: l.id,
            command: t,
            section: r,
            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
            triggerSection: void 0,
            queryLength: o.length,
            sectionName: h.L3.SEARCH,
            query: o,
            searchResultsPosition: n,
            source: e
          }), _.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: l.id
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
children: (0, i.jsx)(E.kA, {
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
query: a,
searchesBots: l
  } = e;
  return l ? (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: T.Z.Messages.APPS
  }),
  (0, i.jsxs)('div', {
    className: R.sectionContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: l
        } = e;
        return (0, i.jsx)(D, {
          application: t,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: h.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: l,
          query: a
        }, t.id);
      }),
      t && M.map(e => (0, i.jsx)(P.Z, {}, e))
    ]
  })
]
  }) : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: T.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
  }),
  (0, i.jsxs)('div', {
    className: R.sectionActivitiesContentContainer,
    children: [
      n.map((e, n) => {
        let {
          application: t,
          installOnDemand: l
        } = e;
        return (0, i.jsx)(H, {
          application: t,
          look: E.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: h.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: l,
          query: a
        }, t.id);
      }),
      t && M.map(e => (0, i.jsx)(P.Z, {}, e))
    ]
  })
]
  });
}

function D(e) {
  let n = (0, E.cG)(e);
  return (0, i.jsx)(g.Z, {
application: e.application,
onClick: n,
query: e.query,
searchResultsPosition: e.resultsPosition
  });
}

function B() {
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(I.Z, {
    title: T.Z.Messages.COMMANDS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: b.map(e => (0, i.jsx)(P.Z, {}, e))
  }),
  (0, i.jsx)(I.Z, {
    title: T.Z.Messages.APPS
  }),
  (0, i.jsx)('div', {
    className: R.sectionContentContainer,
    children: M.map(e => (0, i.jsx)(P.Z, {}, e))
  })
]
  });
}