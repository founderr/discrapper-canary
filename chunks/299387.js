"use strict";
n.r(t), n.d(t, {
  UserLinkPendingRequestRow: function() {
    return p
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("77078"),
  u = n("697218"),
  d = n("36694"),
  c = n("945330"),
  f = n("775032"),
  E = n("25132"),
  h = n("768815"),
  _ = n("176661"),
  C = n("922832"),
  I = n("782340"),
  S = n("840408");

function p(e) {
  let {
    user: t
  } = e, l = (0, f.default)(), p = (0, E.useHasMaxConnections)(), m = (0, r.default)([u.default], () => u.default.getCurrentUser()), T = s.useCallback(() => {
    i(void 0 !== m, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("134855").then(n.bind(n, "134855"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]), g = s.useCallback(() => {
    i(void 0 !== m, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("217014").then(n.bind(n, "217014"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]), A = s.useCallback(() => {
    i(void 0 !== m, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("809175").then(n.bind(n, "809175"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]);
  return (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)("div", {
      className: S.details,
      children: (0, a.jsx)(_.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: S.actions,
      children: l ? (0, a.jsx)(h.default, {
        icon: c.default,
        className: S.actionDeny,
        tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: A
      }) : (0, a.jsxs)(a.Fragment, {
        children: [p ? null : (0, a.jsx)(h.default, {
          icon: d.default,
          className: S.actionAccept,
          tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: T
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          className: S.actionDeny,
          tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: g
        })]
      })
    })]
  })
}