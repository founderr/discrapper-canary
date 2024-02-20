"use strict";
s.r(t), s.d(t, {
  createModeratorOverwrite: function() {
    return f
  },
  default: function() {
    return g
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("446674"),
  r = s("77078"),
  i = s("318738"),
  d = s("448993"),
  o = s("798609"),
  u = s("462430"),
  h = s("42203"),
  c = s("305961"),
  E = s("145131"),
  C = s("476765"),
  N = s("228427"),
  p = s("991170"),
  _ = s("923510"),
  T = s("606762"),
  m = s("782340"),
  A = s("898165");

function f(e, t) {
  return {
    id: e,
    type: t,
    deny: p.default.NONE,
    allow: _.MODERATE_STAGE_CHANNEL_PERMISSIONS
  }
}

function g(e) {
  let {
    transitionState: t,
    onClose: s,
    channelId: p
  } = e, g = (0, C.useUID)(), I = (0, l.useStateFromStores)([h.default], () => h.default.getChannel(p)), M = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(null == I ? void 0 : I.getGuildId())), [S, O] = a.useState({}), [L, R] = a.useState(!1), [x, v] = a.useState(null);
  if (null == I || null == M) return null;
  let y = async () => {
    R(!0);
    try {
      await

      function(e, t) {
        let s = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === T.RowType.ROLE ? f(t.id, o.PermissionOverwriteType.ROLE) : f(t.id, o.PermissionOverwriteType.MEMBER)
        });
        return (0, i.savePermissionUpdates)(e.id, s, !0)
      }(I, S), s()
    } catch (t) {
      let e = new d.APIError(t);
      R(!1), v(e)
    }
  };
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": g,
    size: r.ModalSize.SMALL,
    className: A.modalRoot,
    children: [(0, n.jsxs)(r.ModalHeader, {
      separator: !1,
      direction: E.default.Direction.VERTICAL,
      align: E.default.Align.CENTER,
      className: A.header,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
      }), (0, n.jsxs)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: A.headerSubtitle,
        children: [(0, n.jsx)(N.default, {
          height: 16,
          width: 16,
          className: A.headerSubtitleIcon
        }), I.name]
      })]
    }), (0, n.jsx)(u.AddMembersBody, {
      guild: M,
      channel: I,
      permission: _.MODERATE_STAGE_CHANNEL_PERMISSIONS,
      pendingAdditions: S,
      setPendingAdditions: O
    }), null != x ? (0, n.jsx)(r.Text, {
      className: A.error,
      variant: "text-xs/normal",
      color: "text-danger",
      children: x.getAnyErrorMessage()
    }) : null, (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        onClick: y,
        submitting: L,
        children: m.default.Messages.ADD
      }), (0, n.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: s,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}