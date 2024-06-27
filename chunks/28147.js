t.d(n, {
  Z: function() {
    return T
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(209173),
  o = t(555573),
  c = t(895924),
  u = t(809547),
  d = t(585483),
  m = t(499254),
  p = t(541099),
  E = t(827498),
  h = t(392370),
  _ = t(98880),
  N = t(561160),
  A = t(41558),
  C = t(106771),
  f = t(79984),
  x = t(981631),
  v = t(689938),
  I = t(664790);
let g = Array(6).fill(0).map((e, n) => n),
  P = [, , , ].fill(0).map((e, n) => n);

function T(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(M, {
    ...e
  }) : (0, i.jsx)(S, {
    ...e
  })
}

function M(e) {
  let {
    channel: n,
    query: t,
    entrypoint: a,
    enableActivitiesSearch: o
  } = e, c = a === E._b.VOICE || o, d = a === E._b.TEXT, m = a === E._b.TEXT, {
    loading: p,
    isEmptyState: _,
    commandResults: A,
    hasCommandResults: C,
    applicationResults: f,
    hasApplicationResults: x
  } = (0, h.pe)({
    channel: n,
    query: t,
    searchesActivities: c,
    searchesCommands: d,
    searchesBots: m
  }), {
    fetchState: I,
    applicationResults: g
  } = (0, h.Q2)({
    query: t,
    channel: n,
    fetches: a !== E._b.VOICE
  }), P = null == I || I === u.M.FETCHING, T = l.useMemo(() => {
    let e = f.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (a === E._b.VOICE) return e;
    let n = new Set(f.map(e => {
      let {
        id: n
      } = e;
      return n
    }));
    return [...e, ...r().compact(g.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))]
  }, [a, g, f]);
  return p ? (0, i.jsx)(O, {}) : _ ? (0, i.jsx)(N.A, {
    type: E.LG.SEARCH_EMPTY,
    searchQuery: t,
    textContent: a === E._b.TEXT ? v.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : v.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [C && (0, i.jsx)(R, {
      channel: n,
      commandResults: A,
      query: t
    }), x && (0, i.jsx)(L, {
      applicationResults: T,
      includePlaceholder: P,
      query: t,
      searchesBots: m
    })]
  })
}

function S(e) {
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
    applicationResults: _,
    hasApplicationResults: A
  } = (0, h.pe)({
    channel: n,
    query: t,
    commandLimit: 10,
    searchesCommands: o,
    searchesBots: c,
    searchesActivities: s
  }), C = l.useMemo(() => _.map(e => ({
    application: e,
    installOnDemand: !1
  })), [_]);
  return u ? (0, i.jsx)(O, {}) : d ? (0, i.jsx)(N.A, {
    type: E.LG.SEARCH_EMPTY,
    searchQuery: t,
    textContent: a === E._b.TEXT ? v.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : v.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [p && (0, i.jsx)(R, {
      channel: n,
      commandResults: m,
      query: t
    }), A && (0, i.jsx)(L, {
      applicationResults: C,
      query: t,
      searchesBots: c
    })]
  })
}

function R(e) {
  let {
    channel: n,
    commandResults: t,
    query: l
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(A.Z, {
      title: v.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: I.sectionContentContainer,
      children: t.map((e, t) => {
        let {
          command: a,
          application: r,
          section: s
        } = e;
        return (0, i.jsx)(C.Z, {
          command: a,
          application: r,
          onClick: () => {
            let e = p.Z.entrypoint();
            m.y(E.ti.DISMISSED), o.Po({
              channelId: n.id,
              command: a,
              section: s,
              location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW,
              triggerSection: void 0,
              queryLength: l.length,
              sectionName: E.L3.SEARCH,
              query: l,
              searchResultsPosition: t,
              source: e
            }), d.S.dispatch(x.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: n.id
            })
          }
        }, a.id)
      })
    })]
  })
}

function L(e) {
  let {
    applicationResults: n,
    includePlaceholder: t,
    query: l,
    searchesBots: a
  } = e;
  return a ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(A.Z, {
      title: v.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: I.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(j, {
          application: t,
          location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: E.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id)
      }), t && P.map(e => (0, i.jsx)(f.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(A.Z, {
      title: v.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsxs)("div", {
      className: I.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: t,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(_.kA, {
          application: t,
          look: _.U4.LARGE_BANNER,
          location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: E.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: l
        }, t.id)
      }), t && P.map(e => (0, i.jsx)(f.Z, {}, e))]
    })]
  })
}

function j(e) {
  let n = (0, _.cG)(e);
  return (0, i.jsx)(C.Z, {
    application: e.application,
    onClick: n
  })
}

function O() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(A.Z, {
      title: v.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: I.sectionContentContainer,
      children: g.map(e => (0, i.jsx)(f.Z, {}, e))
    }), (0, i.jsx)(A.Z, {
      title: v.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: I.sectionContentContainer,
      children: P.map(e => (0, i.jsx)(f.Z, {}, e))
    })]
  })
}