i.r(s), i.d(s, {
  default: function() {
    return T
  }
}), i(653041);
var a = i(735250),
  n = i(470079),
  r = i(149765),
  t = i(481060),
  l = i(422559),
  o = i(430824),
  d = i(768581),
  c = i(700785),
  m = i(764260),
  x = i(981631),
  u = i(135899),
  E = i(689938),
  N = i(770662);

function S(e) {
  let {
    guild: s
  } = e, i = d.ZP.getGuildIconURL({
    id: s.id,
    icon: s.icon,
    size: 120
  });
  return (0, a.jsxs)(t.ModalHeader, {
    className: N.header,
    children: [(0, a.jsx)("div", {
      className: N.headerIconContainer,
      children: null != i ? (0, a.jsx)(t.Avatar, {
        src: i,
        "aria-label": s.name,
        size: t.AvatarSizes.SIZE_120,
        className: N.__invalid_guildIcon
      }) : (0, a.jsx)("div", {
        className: N.acronym,
        children: s.acronym
      })
    }), (0, a.jsxs)("div", {
      className: N.headerText,
      children: [(0, a.jsx)(t.Heading, {
        variant: "heading-lg/extrabold",
        color: "header-primary",
        children: E.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_TITLE
      }), (0, a.jsx)(t.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: E.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_SUBTITLE
      })]
    })]
  })
}
let _ = e => {
  if (e.toString() === x.Plq.MENTION_EVERYONE.toString()) return E.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
  return (0, l.wt)(e)
};

function I(e) {
  let {
    permissions: s
  } = e;
  return (0, a.jsxs)("div", {
    className: N.tableContainer,
    children: [(0, a.jsx)(t.Text, {
      className: N.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS
    }), (0, a.jsx)("div", {
      className: N.permissionsTable,
      children: s.map((e, s) => (0, a.jsxs)("div", {
        className: N.permissionRow,
        children: [(0, a.jsx)("div", {
          className: N.bulletWarning
        }), (0, a.jsx)(t.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: _(e)
        })]
      }, s))
    })]
  })
}

function h(e) {
  let {
    permissions: s
  } = e;
  return (0, a.jsxs)("div", {
    className: N.tableContainer,
    children: [(0, a.jsx)(t.Text, {
      className: N.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
    }), (0, a.jsx)("div", {
      className: N.permissionsTable,
      children: s.map((e, s) => (0, a.jsxs)("div", {
        className: N.permissionRow,
        children: [(0, a.jsx)("div", {
          className: N.bullet
        }), (0, a.jsx)(t.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: _(e)
        })]
      }, s))
    })]
  })
}

function M(e) {
  let {
    permissions: s
  } = e, {
    enabledPermissions: i,
    disabledPermissions: n
  } = s;
  return (0, a.jsx)(t.ModalContent, {
    children: (0, a.jsxs)("div", {
      className: N.table,
      children: [(0, a.jsx)(I, {
        permissions: i
      }), (0, a.jsx)(h, {
        permissions: n
      })]
    })
  })
}

function j(e) {
  let {
    onConfirm: s,
    onDismiss: i
  } = e;
  return (0, a.jsxs)(t.ModalFooter, {
    className: N.footer,
    children: [(0, a.jsx)(t.Button, {
      onClick: s,
      children: E.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION
    }), (0, a.jsx)(t.Button, {
      look: t.Button.Looks.LINK,
      onClick: i,
      color: t.Button.Colors.PRIMARY,
      children: (0, a.jsx)(t.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: E.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
      })
    })]
  })
}

function T(e) {
  let {
    guild: s,
    transitionState: i,
    onClose: l
  } = e, d = n.useMemo(() => {
    let e = [],
      i = [];
    return u.$X.map(a => {
      c.oz(a, s) ? e.push(a) : i.push(a)
    }), {
      enabledPermissions: e,
      disabledPermissions: i
    }
  }, [s]);
  if (null == s) return null;
  let x = async () => {
    let e = null != s ? o.Z.getRole(s.id, s.getEveryoneRoleId()) : void 0;
    if (null == e) return;
    let i = r.Od(e.permissions, u.mu);
    await (0, m.Gf)(s.id, [{
      ...e,
      permissions: i
    }]), l()
  };
  return (0, a.jsxs)(t.ModalRoot, {
    transitionState: i,
    size: t.ModalSize.SMALL,
    className: N.modal,
    children: [(0, a.jsx)(S, {
      guild: s
    }), (0, a.jsx)(M, {
      permissions: d
    }), (0, a.jsx)(j, {
      onConfirm: x,
      onDismiss: () => {
        l()
      }
    })]
  })
}