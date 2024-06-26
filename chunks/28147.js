"use strict";
n.d(t, {
  Z: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(209173),
  l = n(780384),
  u = n(481060),
  _ = n(410030),
  c = n(555573),
  d = n(895924),
  E = n(809547),
  I = n(585483),
  T = n(499254),
  h = n(541099),
  f = n(827498),
  S = n(392370),
  N = n(176412),
  A = n(98880),
  m = n(41558),
  O = n(106771),
  p = n(79984),
  R = n(981631),
  g = n(689938),
  C = n(664790),
  v = n(983008),
  L = n(478408);
let D = Array(6).fill(0).map((e, t) => t),
  M = [, , , ].fill(0).map((e, t) => t);

function P(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(y, {
    ...e
  }) : (0, i.jsx)(U, {
    ...e
  })
}

function y(e) {
  let {
    channel: t,
    query: n,
    entrypoint: s,
    enableActivitiesSearch: l
  } = e, u = s === f._b.VOICE || l, _ = s === f._b.TEXT, c = s === f._b.TEXT, {
    loading: d,
    isEmptyState: I,
    commandResults: T,
    hasCommandResults: h,
    applicationResults: N,
    hasApplicationResults: A
  } = (0, S.pe)({
    channel: t,
    query: n,
    searchesActivities: u,
    searchesCommands: _,
    searchesBots: c
  }), {
    fetchState: m,
    applicationResults: O
  } = (0, S.Q2)({
    query: n,
    channel: t,
    fetches: s !== f._b.VOICE
  }), p = null == m || m === E.M.FETCHING, R = r.useMemo(() => {
    let e = N.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (s === f._b.VOICE) return e;
    let t = new Set(N.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
    return [...e, ...o().compact(O.map(e => e.type === a.s.CONNECTION || t.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))]
  }, [s, O, N]);
  return d ? (0, i.jsx)(x, {}) : I ? (0, i.jsx)(B, {
    searchQuery: n,
    textContent: s === f._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [h && (0, i.jsx)(b, {
      channel: t,
      commandResults: T,
      query: n
    }), A && (0, i.jsx)(G, {
      applicationResults: R,
      includePlaceholder: p,
      query: n,
      searchesBots: c
    })]
  })
}

function U(e) {
  let {
    channel: t,
    query: n,
    entrypoint: s,
    enableActivitiesSearch: o
  } = e, a = s === f._b.VOICE || o, l = s === f._b.TEXT, u = s === f._b.TEXT, {
    loading: _,
    isEmptyState: c,
    commandResults: d,
    hasCommandResults: E,
    applicationResults: I,
    hasApplicationResults: T
  } = (0, S.pe)({
    channel: t,
    query: n,
    commandLimit: 10,
    searchesCommands: l,
    searchesBots: u,
    searchesActivities: a
  }), h = r.useMemo(() => I.map(e => ({
    application: e,
    installOnDemand: !1
  })), [I]);
  return _ ? (0, i.jsx)(x, {}) : c ? (0, i.jsx)(B, {
    searchQuery: n,
    textContent: s === f._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [E && (0, i.jsx)(b, {
      channel: t,
      commandResults: d,
      query: n
    }), T && (0, i.jsx)(G, {
      applicationResults: h,
      query: n,
      searchesBots: u
    })]
  })
}

function b(e) {
  let {
    channel: t,
    commandResults: n,
    query: r
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(m.Z, {
      title: g.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: C.sectionContentContainer,
      children: n.map((e, n) => {
        let {
          command: s,
          application: o,
          section: a
        } = e;
        return (0, i.jsx)(O.Z, {
          command: s,
          application: o,
          onClick: () => {
            let e = h.Z.entrypoint();
            T.y(f.ti.DISMISSED), c.Po({
              channelId: t.id,
              command: s,
              section: a,
              location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
              triggerSection: void 0,
              queryLength: r.length,
              sectionName: f.L3.SEARCH,
              query: r,
              searchResultsPosition: n,
              source: e
            }), I.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: t.id
            })
          }
        }, s.id)
      })
    })]
  })
}

function G(e) {
  let {
    applicationResults: t,
    includePlaceholder: n,
    query: r,
    searchesBots: s
  } = e;
  return s ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(m.Z, {
      title: g.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: C.sectionContentContainer,
      children: [t.map((e, t) => {
        let {
          application: n,
          installOnDemand: s
        } = e;
        return (0, i.jsx)(w, {
          application: n,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: f.L3.SEARCH,
          resultsPosition: t,
          installOnDemand: s,
          query: r
        }, n.id)
      }), n && M.map(e => (0, i.jsx)(p.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(m.Z, {
      title: g.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsxs)("div", {
      className: C.sectionActivitiesContentContainer,
      children: [t.map((e, t) => {
        let {
          application: n,
          installOnDemand: s
        } = e;
        return (0, i.jsx)(A.kA, {
          application: n,
          look: A.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: f.L3.SEARCH,
          resultsPosition: t,
          installOnDemand: s,
          query: r
        }, n.id)
      }), n && M.map(e => (0, i.jsx)(p.Z, {}, e))]
    })]
  })
}

function w(e) {
  let t = (0, A.cG)(e);
  return (0, i.jsx)(O.Z, {
    application: e.application,
    onClick: t
  })
}

function x() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(m.Z, {
      title: g.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: C.sectionContentContainer,
      children: D.map(e => (0, i.jsx)(p.Z, {}, e))
    }), (0, i.jsx)(m.Z, {
      title: g.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: C.sectionContentContainer,
      children: M.map(e => (0, i.jsx)(p.Z, {}, e))
    })]
  })
}

function B(e) {
  let {
    searchQuery: t,
    textContent: n
  } = e, r = (0, _.ZP)(), s = (0, l.ap)(r) ? L : v;
  return (0, N.B)(f.LG.SEARCH_EMPTY, t), (0, i.jsxs)("div", {
    className: C.emptyStateContainer,
    children: [(0, i.jsx)("img", {
      className: C.emptyStateImage,
      src: s,
      alt: ""
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      children: n
    })]
  })
}