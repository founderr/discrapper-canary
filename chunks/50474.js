s.r(i), s.d(i, {
  default: function() {
    return C
  }
}), s(47120);
var o = s(735250),
  n = s(470079),
  t = s(392711),
  a = s.n(t),
  r = s(481060),
  l = s(139387),
  d = s(479531),
  c = s(895924),
  u = s(581364),
  m = s(768581),
  p = s(821864),
  h = s(399860),
  E = s(995390),
  x = s(665578),
  M = s(689938),
  v = s(519709);

function C(e) {
  let {
    applicationIcon: i,
    applicationId: s,
    applicationName: t,
    command: m,
    guildId: C,
    onClose: j,
    transitionState: N
  } = e, [y, A] = n.useState(null), [f, g] = n.useState(!1), {
    originalApplicationPermissions: k,
    originalCommandPermissions: b,
    editedTargetPermissions: P,
    hasChanges: S,
    selectedPermissionCount: R
  } = (0, E.Z)(C, s, m.id), O = n.useCallback(async () => {
    var e, i, o, n, t;
    if (!S) {
      j();
      return
    }
    let r = a().difference(Object.keys(null !== (o = m.permissions) && void 0 !== o ? o : {}), Object.keys(P)),
      l = a().omit({
        ...P
      }, r),
      E = (0, u.bD)(C),
      x = (0, h.rE)(C, c.Kw.ROLE),
      M = (0, h.rE)(E, c.Kw.CHANNEL),
      v = null === (n = null === (e = k[x]) || void 0 === e ? void 0 : e.permission) || void 0 === n || n,
      I = null === (t = null === (i = k[M]) || void 0 === i ? void 0 : i.permission) || void 0 === t || t,
      N = Object.values(l).map(e => ({
        id: e.id,
        permission: e.permission,
        type: e.type
      }));
    A(null), g(!0);
    try {
      await p.U3({
        defaultEveryoneValue: v,
        defaultEverywhereValue: I,
        applicationId: s,
        commandId: m.id,
        guildId: C,
        permissions: N
      }), g(!1), j()
    } catch (e) {
      A(new d.Z(e))
    }
    g(!1)
  }, [s, k, m.id, m.permissions, C, S, j, P, A, g]);
  n.useEffect(() => () => {
    p.Ui(m.id), l.Z.stopEditingCommandPermissions(m.id)
  }, [m.id]);
  let Z = (0, h.gw)(m.type, m.displayName);
  return (0, o.jsxs)(r.ModalRoot, {
    "aria-label": M.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
    size: r.ModalSize.MEDIUM,
    transitionState: N,
    children: [(0, o.jsxs)(r.ModalHeader, {
      separator: !1,
      className: v.modalHeader,
      children: [(0, o.jsx)(I, {
        icon: i,
        id: s,
        name: t
      }), (0, o.jsxs)("div", {
        className: v.headerDescription,
        children: [(0, o.jsx)(r.Text, {
          variant: "text-md/semibold",
          children: Z
        }), (0, o.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.displayDescription
        })]
      })]
    }), (0, o.jsxs)(r.ModalContent, {
      className: v.modalBody,
      children: [null == y || y.hasFieldErrors() ? null : (0, o.jsx)(r.FormErrorBlock, {
        children: y.getAnyErrorMessage()
      }), (0, o.jsx)(x.Z, {
        applicationId: s,
        commandId: m.id,
        guildId: C,
        inModal: !0,
        originalApplicationPermissions: k,
        originalCommandPermissions: b,
        editedTargetPermissions: P,
        selectedPermissionCount: R
      })]
    }), (0, o.jsxs)(r.ModalFooter, {
      className: v.modalFooter,
      children: [(0, o.jsx)(r.Button, {
        type: "submit",
        disabled: f,
        onClick: O,
        color: !0 === S ? r.Button.Colors.GREEN : r.Button.Colors.PRIMARY,
        children: M.Z.Messages.SAVE
      }), (0, o.jsx)(r.Button, {
        onClick: j,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        children: M.Z.Messages.CANCEL
      })]
    })]
  })
}

function I(e) {
  let {
    icon: i,
    id: s
  } = e, n = m.ZP.getApplicationIconURL({
    id: s,
    icon: i,
    size: 40
  });
  return (0, o.jsx)(r.Avatar, {
    src: n,
    size: r.AvatarSizes.SIZE_40,
    "aria-hidden": !0
  })
}