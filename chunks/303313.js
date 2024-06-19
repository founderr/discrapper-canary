a.r(s), a.d(s, {
  default: function() {
    return M
  }
}), a(653041), a(47120);
var o = a(735250);
a(470079);
var i = a(149765),
  r = a(481060),
  t = a(995648),
  n = a(422559),
  l = a(689938),
  d = a(554833);

function M(e) {
  let {
    defaultMemberPermissions: s,
    onClose: a,
    transitionState: M
  } = e, c = [];
  for (let e of n.VY) i.e$(s, e) && c.push(e);
  return (0, o.jsxs)(r.ModalRoot, {
    size: r.ModalSize.DYNAMIC,
    "aria-label": l.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
    transitionState: M,
    children: [(0, o.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(r.Heading, {
        className: d.header,
        variant: "heading-xl/semibold",
        children: l.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER
      })
    }), (0, o.jsx)(r.ModalContent, {
      children: (0, o.jsx)(t.Z, {
        className: d.permissionList,
        grantedPermissions: c
      })
    }), (0, o.jsx)(r.ModalFooter, {
      className: d.footer,
      children: (0, o.jsx)(r.Button, {
        size: r.ButtonSizes.MEDIUM,
        onClick: a,
        color: r.ButtonColors.BRAND,
        children: l.Z.Messages.DONE
      })
    })]
  })
}