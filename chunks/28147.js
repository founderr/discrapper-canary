"use strict";
n.d(t, {
  Z: function() {
    return M
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
  h = n(827498),
  f = n(392370),
  S = n(695676),
  N = n(41558),
  A = n(299722),
  m = n(667906),
  O = n(79984),
  p = n(981631),
  R = n(689938),
  g = n(664790),
  C = n(983008),
  v = n(478408);
let L = Array(6).fill(0).map((e, t) => t),
  D = [, , , ].fill(0).map((e, t) => t);

function M(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(P, {
    ...e
  }) : (0, i.jsx)(y, {
    ...e
  })
}

function P(e) {
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
  } = (0, f.pe)({
    channel: t,
    query: n,
    searchesActivities: s === h._b.VOICE || l,
    searchesCommands: s === h._b.TEXT,
    searchesBots: s === h._b.TEXT
  }), {
    fetchState: S,
    applicationResults: N
  } = (0, f.Q2)({
    query: n,
    channel: t,
    fetches: s !== h._b.VOICE
  }), A = null == S || S === E.M.FETCHING, m = r.useMemo(() => {
    let e = I.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (s === h._b.VOICE) return e;
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
  return u ? (0, i.jsx)(G, {}) : _ ? (0, i.jsx)(w, {
    searchQuery: n,
    textContent: s === h._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [d && (0, i.jsx)(U, {
      channel: t,
      commandResults: c
    }), T && (0, i.jsx)(b, {
      applicationResults: m,
      includePlaceholder: A
    })]
  })
}

function y(e) {
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
  } = (0, f.pe)({
    channel: t,
    query: n,
    commandLimit: 10,
    searchesCommands: s === h._b.TEXT,
    searchesBots: s === h._b.TEXT,
    searchesActivities: s === h._b.VOICE || o
  }), E = r.useMemo(() => c.map(e => ({
    application: e,
    installOnDemand: !1
  })), [c]);
  return a ? (0, i.jsx)(G, {}) : l ? (0, i.jsx)(w, {
    searchQuery: n,
    textContent: s === h._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [_ && (0, i.jsx)(U, {
      channel: t,
      commandResults: u
    }), d && (0, i.jsx)(b, {
      applicationResults: E
    })]
  })
}

function U(e) {
  let {
    channel: t,
    commandResults: n
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(N.Z, {
      title: R.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: g.sectionContentContainer,
      children: n.map(e => {
        let {
          command: n,
          application: r,
          section: s
        } = e;
        return (0, i.jsx)(m.Z, {
          channel: t,
          command: n,
          application: r,
          onClick: () => {
            T.y(), c.Po({
              channelId: t.id,
              command: n,
              section: s,
              location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW
            }), I.S.dispatch(p.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: t.id
            })
          }
        }, n.id)
      })
    })]
  })
}

function b(e) {
  let {
    applicationResults: t,
    includePlaceholder: n
  } = e, {
    pushHistory: r
  } = (0, S.hH)();
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(N.Z, {
      title: R.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: g.sectionContentContainer,
      children: [t.map(e => {
        let {
          application: t,
          installOnDemand: n
        } = e;
        return (0, i.jsx)(A.Z, {
          application: t,
          onClick: e => {
            e.stopPropagation(), r({
              type: S.gc.APPLICATION,
              application: t,
              installOnDemand: n
            })
          }
        }, t.id)
      }), n && D.map(e => (0, i.jsx)(O.Z, {}, e))]
    })]
  })
}

function G() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(N.Z, {
      title: R.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: g.sectionContentContainer,
      children: L.map(e => (0, i.jsx)(O.Z, {}, e))
    }), (0, i.jsx)(N.Z, {
      title: R.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: g.sectionContentContainer,
      children: D.map(e => (0, i.jsx)(O.Z, {}, e))
    })]
  })
}

function w(e) {
  let {
    textContent: t
  } = e, n = (0, _.ZP)(), r = (0, l.ap)(n) ? v : C;
  return (0, i.jsxs)("div", {
    className: g.emptyStateContainer,
    children: [(0, i.jsx)("img", {
      className: g.emptyStateImage,
      src: r,
      alt: ""
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      children: t
    })]
  })
}