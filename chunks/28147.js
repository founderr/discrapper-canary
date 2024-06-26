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
  O = n(667906),
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
  } = e, {
    loading: u,
    isEmptyState: _,
    commandResults: c,
    hasCommandResults: d,
    applicationResults: I,
    hasApplicationResults: T
  } = (0, S.pe)({
    channel: t,
    query: n,
    searchesActivities: s === f._b.VOICE || l,
    searchesCommands: s === f._b.TEXT,
    searchesBots: s === f._b.TEXT
  }), {
    fetchState: h,
    applicationResults: N
  } = (0, S.Q2)({
    query: n,
    channel: t,
    fetches: s !== f._b.VOICE
  }), A = null == h || h === E.M.FETCHING, m = r.useMemo(() => {
    let e = I.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (s === f._b.VOICE) return e;
    let t = new Set(I.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
    return [...e, ...o().compact(N.map(e => e.type === a.s.CONNECTION || t.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))]
  }, [s, N, I]);
  return u ? (0, i.jsx)(w, {}) : _ ? (0, i.jsx)(x, {
    searchQuery: n,
    textContent: s === f._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [d && (0, i.jsx)(b, {
      channel: t,
      commandResults: c,
      query: n
    }), T && (0, i.jsx)(G, {
      applicationResults: m,
      includePlaceholder: A,
      query: n
    })]
  })
}

function U(e) {
  let {
    channel: t,
    query: n,
    entrypoint: s,
    enableActivitiesSearch: o
  } = e, {
    loading: a,
    isEmptyState: l,
    commandResults: u,
    hasCommandResults: _,
    applicationResults: c,
    hasApplicationResults: d
  } = (0, S.pe)({
    channel: t,
    query: n,
    commandLimit: 10,
    searchesCommands: s === f._b.TEXT,
    searchesBots: s === f._b.TEXT,
    searchesActivities: s === f._b.VOICE || o
  }), E = r.useMemo(() => c.map(e => ({
    application: e,
    installOnDemand: !1
  })), [c]);
  return a ? (0, i.jsx)(w, {}) : l ? (0, i.jsx)(x, {
    searchQuery: n,
    textContent: s === f._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [_ && (0, i.jsx)(b, {
      channel: t,
      commandResults: u,
      query: n
    }), d && (0, i.jsx)(G, {
      applicationResults: E,
      query: n
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
          channel: t,
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
    query: r
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(m.Z, {
      title: g.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: C.sectionContentContainer,
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

function w() {
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

function x(e) {
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