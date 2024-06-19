n.r(t), n.d(t, {
  createModeratorOverwrite: function() {
    return S
  },
  default: function() {
    return p
  }
}), n(47120);
var r = n(735250),
  l = n(470079),
  a = n(442837),
  s = n(481060),
  i = n(741361),
  o = n(881052),
  d = n(911969),
  c = n(185413),
  u = n(592125),
  h = n(430824),
  x = n(285952),
  g = n(153124),
  M = n(700785),
  m = n(146085),
  E = n(71080),
  C = n(689938),
  N = n(899509);

function S(e, t) {
  return {
    id: e,
    type: t,
    deny: M.Hn,
    allow: m.yP
  }
}

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    channelId: M
  } = e, p = (0, g.Dt)(), A = (0, a.e7)([u.Z], () => u.Z.getChannel(M)), j = (0, a.e7)([h.Z], () => h.Z.getGuild(null == A ? void 0 : A.getGuildId())), [R, b] = l.useState({}), [y, L] = l.useState(!1), [f, B] = l.useState(null);
  if (null == A || null == j) return null;
  let I = async () => {
    L(!0);
    try {
      await

      function(e, t) {
        let n = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === E.aC.ROLE ? S(t.id, d.BN.ROLE) : S(t.id, d.BN.MEMBER)
        });
        return (0, i.hw)(e.id, n, !0)
      }(A, R), n()
    } catch (t) {
      let e = new o.Hx(t);
      L(!1), B(e)
    }
  };
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: t,
    "aria-labelledby": p,
    size: s.ModalSize.SMALL,
    className: N.modalRoot,
    children: [(0, r.jsxs)(s.ModalHeader, {
      separator: !1,
      direction: x.Z.Direction.VERTICAL,
      align: x.Z.Align.CENTER,
      className: N.header,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: C.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
      }), (0, r.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: N.headerSubtitle,
        children: [(0, r.jsx)(s.StageIcon, {
          size: "xs",
          color: "currentColor",
          className: N.headerSubtitleIcon
        }), A.name]
      })]
    }), (0, r.jsx)(c.AddMembersBody, {
      guild: j,
      channel: A,
      permission: m.yP,
      pendingAdditions: R,
      setPendingAdditions: b
    }), null != f ? (0, r.jsx)(s.Text, {
      className: N.error,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f.getAnyErrorMessage()
    }) : null, (0, r.jsxs)(s.ModalFooter, {
      children: [(0, r.jsx)(s.Button, {
        onClick: I,
        submitting: y,
        children: C.Z.Messages.ADD
      }), (0, r.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.PRIMARY,
        onClick: n,
        children: C.Z.Messages.CANCEL
      })]
    })]
  })
}