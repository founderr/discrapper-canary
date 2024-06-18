"use strict";
n.d(t, {
  Z: function() {
    return O
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
  S = n(981631),
  f = n(689938),
  N = n(117874),
  A = n(983008),
  m = n(478408);

function O(e) {
  return e.enableGlobalSearch ? (0, i.jsx)(p, {
    ...e
  }) : (0, i.jsx)(R, {
    ...e
  })
}

function R(e) {
  let {
    channel: t,
    query: n,
    entrypoint: r,
    enableShelfSearch: s
  } = e, {
    pushHistory: o
  } = (0, E.hH)(), {
    loading: A,
    isEmptyState: m,
    commandResults: O,
    hasCommandResults: R,
    applicationResults: p,
    hasApplicationResults: C
  } = (0, d.pe)({
    channel: t,
    query: n,
    mode: r === c._.VOICE ? d.pe.Modes.SHELF : s ? d.pe.Modes.CMDS_APPS_SHELF : d.pe.Modes.CMDS_APPS
  });
  return A ? (0, i.jsx)("div", {
    children: "TODO (desktop app launcher): implement loading..."
  }) : m ? (0, i.jsx)(g, {
    searchQuery: n
  }) : (0, i.jsxs)("div", {
    children: [R && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(I.Z, {
        title: f.Z.Messages.COMMANDS
      }), (0, i.jsx)("div", {
        className: N.sectionContentContainer,
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
              }), u.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
              })
            }
          }, n.id)
        })
      })]
    }), C && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(I.Z, {
        title: f.Z.Messages.APPS
      }), (0, i.jsx)("div", {
        className: N.sectionContentContainer,
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

function p(e) {
  let {} = e;
  return (0, i.jsx)("div", {
    children: "TODO (desktop app launcher): implement global search view"
  })
}

function g(e) {
  let t = (0, o.ZP)(),
    n = (0, r.ap)(t) ? m : A;
  return (0, i.jsxs)("div", {
    className: N.emptyStateContainer,
    children: [(0, i.jsx)("img", {
      className: N.emptyStateImage,
      src: n,
      alt: ""
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      children: f.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY
    })]
  })
}