"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(209173),
  l = n(555573),
  u = n(895924),
  _ = n(809547),
  c = n(585483),
  d = n(499254),
  E = n(541099),
  I = n(827498),
  T = n(392370),
  h = n(98880),
  f = n(561160),
  S = n(41558),
  A = n(106771),
  N = n(79984),
  m = n(981631),
  O = n(689938),
  R = n(664790);
let p = Array(6).fill(0).map((e, t) => t),
  g = [, , , ].fill(0).map((e, t) => t);

function C(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(v, {
    ...e
  }) : (0, i.jsx)(L, {
    ...e
  })
}

function v(e) {
  let {
    channel: t,
    query: n,
    entrypoint: s,
    enableActivitiesSearch: l
  } = e, u = s === I._b.VOICE || l, c = s === I._b.TEXT, d = s === I._b.TEXT, {
    loading: E,
    isEmptyState: h,
    commandResults: S,
    hasCommandResults: A,
    applicationResults: N,
    hasApplicationResults: m
  } = (0, T.pe)({
    channel: t,
    query: n,
    searchesActivities: u,
    searchesCommands: c,
    searchesBots: d
  }), {
    fetchState: R,
    applicationResults: p
  } = (0, T.Q2)({
    query: n,
    channel: t,
    fetches: s !== I._b.VOICE
  }), g = null == R || R === _.M.FETCHING, C = r.useMemo(() => {
    let e = N.map(e => ({
      application: e,
      installOnDemand: !1
    }));
    if (s === I._b.VOICE) return e;
    let t = new Set(N.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
    return [...e, ...o().compact(p.map(e => e.type === a.s.CONNECTION || t.has(e.data.id) ? null : {
      application: e.data,
      installOnDemand: !0
    }))]
  }, [s, p, N]);
  return E ? (0, i.jsx)(y, {}) : h ? (0, i.jsx)(f.A, {
    type: I.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: s === I._b.TEXT ? O.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : O.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [A && (0, i.jsx)(D, {
      channel: t,
      commandResults: S,
      query: n
    }), m && (0, i.jsx)(M, {
      applicationResults: C,
      includePlaceholder: g,
      query: n,
      searchesBots: d
    })]
  })
}

function L(e) {
  let {
    channel: t,
    query: n,
    entrypoint: s,
    enableActivitiesSearch: o
  } = e, a = s === I._b.VOICE || o, l = s === I._b.TEXT, u = s === I._b.TEXT, {
    loading: _,
    isEmptyState: c,
    commandResults: d,
    hasCommandResults: E,
    applicationResults: h,
    hasApplicationResults: S
  } = (0, T.pe)({
    channel: t,
    query: n,
    commandLimit: 10,
    searchesCommands: l,
    searchesBots: u,
    searchesActivities: a
  }), A = r.useMemo(() => h.map(e => ({
    application: e,
    installOnDemand: !1
  })), [h]);
  return _ ? (0, i.jsx)(y, {}) : c ? (0, i.jsx)(f.A, {
    type: I.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: s === I._b.TEXT ? O.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : O.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
  }) : (0, i.jsxs)("div", {
    children: [E && (0, i.jsx)(D, {
      channel: t,
      commandResults: d,
      query: n
    }), S && (0, i.jsx)(M, {
      applicationResults: A,
      query: n,
      searchesBots: u
    })]
  })
}

function D(e) {
  let {
    channel: t,
    commandResults: n,
    query: r
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(S.Z, {
      title: O.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: R.sectionContentContainer,
      children: n.map((e, n) => {
        let {
          command: s,
          application: o,
          section: a
        } = e;
        return (0, i.jsx)(A.Z, {
          command: s,
          application: o,
          onClick: () => {
            let e = E.Z.entrypoint();
            d.y(I.ti.DISMISSED), l.Po({
              channelId: t.id,
              command: s,
              section: a,
              location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW,
              triggerSection: void 0,
              queryLength: r.length,
              sectionName: I.L3.SEARCH,
              query: r,
              searchResultsPosition: n,
              source: e
            }), c.S.dispatch(m.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: t.id
            })
          }
        }, s.id)
      })
    })]
  })
}

function M(e) {
  let {
    applicationResults: t,
    includePlaceholder: n,
    query: r,
    searchesBots: s
  } = e;
  return s ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(S.Z, {
      title: O.Z.Messages.APPS
    }), (0, i.jsxs)("div", {
      className: R.sectionContentContainer,
      children: [t.map((e, t) => {
        let {
          application: n,
          installOnDemand: s
        } = e;
        return (0, i.jsx)(P, {
          application: n,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: I.L3.SEARCH,
          resultsPosition: t,
          installOnDemand: s,
          query: r
        }, n.id)
      }), n && g.map(e => (0, i.jsx)(N.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(S.Z, {
      title: O.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsxs)("div", {
      className: R.sectionActivitiesContentContainer,
      children: [t.map((e, t) => {
        let {
          application: n,
          installOnDemand: s
        } = e;
        return (0, i.jsx)(h.kA, {
          application: n,
          look: h.U4.LARGE_BANNER,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: I.L3.SEARCH,
          resultsPosition: t,
          installOnDemand: s,
          query: r
        }, n.id)
      }), n && g.map(e => (0, i.jsx)(N.Z, {}, e))]
    })]
  })
}

function P(e) {
  let t = (0, h.cG)(e);
  return (0, i.jsx)(A.Z, {
    application: e.application,
    onClick: t
  })
}

function y() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(S.Z, {
      title: O.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: R.sectionContentContainer,
      children: p.map(e => (0, i.jsx)(N.Z, {}, e))
    }), (0, i.jsx)(S.Z, {
      title: O.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: R.sectionContentContainer,
      children: g.map(e => (0, i.jsx)(N.Z, {}, e))
    })]
  })
}