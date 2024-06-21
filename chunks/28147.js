"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(735250);
n(470079);
var r = n(780384),
  s = n(481060),
  o = n(410030),
  a = n(555573),
  l = n(895924),
  u = n(585483),
  _ = n(499254),
  c = n(827498),
  d = n(392370),
  E = n(695676),
  I = n(41558),
  T = n(299722),
  h = n(667906),
  S = n(79984),
  f = n(981631),
  N = n(689938),
  A = n(664790),
  m = n(983008),
  O = n(478408);
let R = Array(6).fill(0).map((e, t) => t),
  p = [, , , ].fill(0).map((e, t) => t);

function g(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(v, {
    ...e
  }) : (0, i.jsx)(C, {
    ...e
  })
}

function C(e) {
  let {
    channel: t,
    query: n,
    entrypoint: r,
    enableActivitiesSearch: s
  } = e, {
    pushHistory: o
  } = (0, E.hH)(), {
    loading: S,
    isEmptyState: m,
    commandResults: O,
    hasCommandResults: R,
    applicationResults: p,
    hasApplicationResults: g
  } = (0, d.pe)({
    channel: t,
    query: n,
    commandLimit: 10,
    searchesCommands: r === c._.TEXT,
    searchesBots: r === c._.TEXT,
    searchesActivities: r === c._.VOICE || s
  });
  return S ? (0, i.jsx)(L, {}) : m ? (0, i.jsx)(D, {
    searchQuery: n
  }) : (0, i.jsxs)("div", {
    children: [R && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(I.Z, {
        title: N.Z.Messages.COMMANDS
      }), (0, i.jsx)("div", {
        className: A.sectionContentContainer,
        children: O.map(e => {
          let {
            command: n,
            application: r,
            section: s
          } = e;
          return (0, i.jsx)(h.Z, {
            channel: t,
            command: n,
            application: r,
            onClick: () => {
              _.y(), a.Po({
                channelId: t.id,
                command: n,
                section: s,
                location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW
              }), u.S.dispatch(f.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
              })
            }
          }, n.id)
        })
      })]
    }), g && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(I.Z, {
        title: N.Z.Messages.APPS
      }), (0, i.jsx)("div", {
        className: A.sectionContentContainer,
        children: p.map(e => (0, i.jsx)(T.Z, {
          application: e,
          onClick: t => {
            t.stopPropagation(), o({
              type: E.gc.APPLICATION,
              application: e
            })
          }
        }, e.id))
      })]
    })]
  })
}

function v(e) {
  let {} = e;
  return (0, i.jsx)("div", {
    children: "TODO (desktop app launcher): implement global search view"
  })
}

function L() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(I.Z, {
      title: N.Z.Messages.COMMANDS
    }), (0, i.jsx)("div", {
      className: A.sectionContentContainer,
      children: R.map(e => (0, i.jsx)(S.Z, {}, e))
    }), (0, i.jsx)(I.Z, {
      title: N.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: A.sectionContentContainer,
      children: p.map(e => (0, i.jsx)(S.Z, {}, e))
    })]
  })
}

function D(e) {
  let t = (0, o.ZP)(),
    n = (0, r.ap)(t) ? O : m;
  return (0, i.jsxs)("div", {
    className: A.emptyStateContainer,
    children: [(0, i.jsx)("img", {
      className: A.emptyStateImage,
      src: n,
      alt: ""
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      children: N.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY
    })]
  })
}