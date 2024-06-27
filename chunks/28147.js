t.d(n, {
  Z: function() {
    return j
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(209173),
  o = t(780384),
  c = t(481060),
  u = t(410030),
  d = t(555573),
  m = t(895924),
  p = t(809547),
  h = t(585483),
  N = t(499254),
  _ = t(541099),
  E = t(827498),
  C = t(392370),
  A = t(176412),
  f = t(98880),
  x = t(41558),
  v = t(106771),
  I = t(79984),
  g = t(981631),
  P = t(689938),
  T = t(664790),
  M = t(983008),
  S = t(478408);
let R = Array(6).fill(0).map((e, n) => n),
  L = [, , , ].fill(0).map((e, n) => n);

function j(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(O, {
    ...e
  }) : (0, i.jsx)(b, {
    ...e
  })
}

function O(e) {
  let {
    channel: n,
    query: t,
    entrypoint: a,
    enableActivitiesSearch: o
  } = e, c = a === E._b.VOICE || o, u = a === E._b.TEXT, d = a === E._b.TEXT, {
    loading: m,
    isEmptyState: h,
    commandResults: N,
    hasCommandResults: _,
    applicationResults: A,
    hasApplicationResults: f
  } = (0, C.pe)({
    channel: n,
    query: t,
    searchesActivities: c,
    searchesCommands: u,
    searchesBots: d
  }), {
    fetchState: x,
    applicationResults: v
  } = (0, C.Q2)({
    query: t,
    channel: n,
    fetches: a !== E._b.VOICE
  }), I = null == x || x === p.M.FETCHING, g = l.useMemo(() => {
    let e = A.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (a === E._b.VOICE) return e;
    let n = new Set(A.map(e => {
      let {
        id: n
      } = e;
      return n
    }));
    return [...e, ...r().compact(v.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))]
  }, [a, v, A]);
  return m ? (0, i.jsx)(U, {}) : h ? (0, i.jsx)(D, {
    searchQuery: t,
    textContent: a === E._b.TEXT ? P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [_ && (0, i.jsx)(y, {
      channel: n,
      commandResults: N,
      query: t
    }), f && (0, i.jsx)(Z, {
      applicationResults: g,
      includePlaceholder: I,
      query: t,
      searchesBots: d
    })]
  })
}

function b(e) {
  let {
    channel: n,
    query: t,
    entrypoint: a,
    enableActivitiesSearch: r
  } = e, s = a === E._b.VOICE || r, o = a === E._b.TEXT, c = a === E._b.TEXT, {
    loading: u,
    isEmptyState: d,
    commandResults: m,
    hasCommandResults: p,
    applicationResults: h,
    hasApplicationResults: N
  } = (0, C.pe)({
    channel: n,
    query: t,
    commandLimit: 10,
    searchesCommands: o,
    searchesBots: c,
    searchesActivities: s
  }), _ = l.useMemo(() => h.map(e => ({
    application: e,
    installOnDemand: !1
  })), [h]);
  return u ? (0, i.jsx)(U, {}) : d ? (0, i.jsx)(D, {
    searchQuery: t,
    textContent: a === E._b.TEXT ? P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [p && (0, i.jsx)(y, {
      channel: n,
      commandResults: m,
      query: t
    }), N && (0, i.jsx)(Z, {
      applicationResults: _,
      query: t,
      searchesBots: c
    })]
  })
}

function y(e) {
  let {
    channel: n,
    commandResults: t,
    query: l
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(x.Z, {
      title: P.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: T.sectionContentContainer,
      children: t.map((e, t) => {
        let {
          command: a,
          application: r,
          section: s
        } = e;
        return (0, i.jsx)(v.Z, {
          command: a,
          application: r,
          onClick: () => {
            let e = _.Z.entrypoint();
            N.y(E.ti.DISMISSED), d.Po({
              channelId: n.id,
              command: a,
              section: s,
              location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
              triggerSection: void 0,
              queryLength: l.length,
              sectionName: E.L3.SEARCH,
              query: l,
              searchResultsPosition: t,
              source: e
            }), h.S.dispatch(g.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: n.id
            })
          }
        }, a.id)
      })
    })]
  })
}

function Z(e) {
  let {
    applicationResults: n,
    includePlaceholder: t,
    query: l,
    searchesBots: a
  } = e;
  return a ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(x.Z, {
      title: P.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: T.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(H, {
          application: t,
          location: m.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: E.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id)
      }), t && L.map(e => (0, i.jsx)(I.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(x.Z, {
      title: P.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsxs)("div", {
      className: T.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(f.kA, {
          application: t,
          look: f.U4.LARGE_BANNER,
          location: m.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: E.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id)
      }), t && L.map(e => (0, i.jsx)(I.Z, {}, e))]
    })]
  })
}

function H(e) {
  let n = (0, f.cG)(e);
  return (0, i.jsx)(v.Z, {
    application: e.application,
    onClick: n
  })
}

function U() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(x.Z, {
      title: P.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: T.sectionContentContainer,
      children: R.map(e => (0, i.jsx)(I.Z, {}, e))
    }), (0, i.jsx)(x.Z, {
      title: P.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: T.sectionContentContainer,
      children: L.map(e => (0, i.jsx)(I.Z, {}, e))
    })]
  })
}

function D(e) {
  let {
    searchQuery: n,
    textContent: t
  } = e, l = (0, u.ZP)(), a = (0, o.ap)(l) ? S : M;
  return (0, A.B)(E.LG.SEARCH_EMPTY, n), (0, i.jsxs)("div", {
    className: T.emptyStateContainer,
    children: [(0, i.jsx)("img", {
      className: T.emptyStateImage,
      src: a,
      alt: ""
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      children: t
    })]
  })
}