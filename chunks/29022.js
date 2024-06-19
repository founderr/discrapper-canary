t.r(n), t.d(n, {
  default: function() {
    return j
  }
}), t(47120), t(653041);
var s, i, o = t(735250),
  a = t(470079),
  l = t(149765),
  r = t(442837),
  c = t(704215),
  _ = t(692547),
  I = t(481060),
  E = t(388905),
  d = t(434404),
  N = t(764260),
  S = t(422559),
  u = t(430824),
  T = t(768581),
  O = t(700785),
  p = t(645041),
  m = t(981631),
  A = t(921944),
  L = t(135899),
  M = t(689938),
  C = t(894050);

function U(e) {
  let {
    guild: n,
    headerText: s,
    headerSubtext: i,
    step: a
  } = e, l = T.ZP.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 120
  });
  return (0, o.jsxs)(I.ModalHeader, {
    className: C.header,
    children: [(0, o.jsxs)("div", {
      className: C.headerIconContainer,
      children: [null != l ? (0, o.jsx)(I.Avatar, {
        src: l,
        "aria-label": n.name,
        size: I.AvatarSizes.SIZE_120,
        className: C.__invalid_guildIcon
      }) : (0, o.jsx)("div", {
        className: C.acronym,
        children: n.acronym
      }), 2 === a ? (0, o.jsx)(I.CircleCheckIcon, {
        size: "md",
        className: C.greenPing,
        color: _.Z.unsafe_rawColors.GREEN_360.css,
        secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
      }) : (0, o.jsx)(E.Ee, {
        src: t(173326),
        className: C.redPing
      })]
    }), (0, o.jsxs)("div", {
      className: C.headerText,
      children: [(0, o.jsx)(I.Heading, {
        variant: "heading-lg/extrabold",
        color: "header-primary",
        children: s
      }), (0, o.jsx)(I.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: i
      })]
    })]
  })
}

function h(e) {
  let {
    guild: n
  } = e, t = (0, r.e7)([u.Z], () => u.Z.getRole(n.id, n.getEveryoneRoleId()));
  if (null == t) return null;
  let {
    name: s,
    color: i
  } = t;
  return (0, o.jsxs)("span", {
    className: C.roleRow,
    children: [(0, o.jsx)(I.RoleDot, {
      className: C.roleDot,
      color: i.toString(),
      background: !1,
      tooltip: !1
    }), (0, o.jsx)(I.Text, {
      className: C.roleName,
      variant: "text-sm/medium",
      color: "interactive-active",
      children: s
    })]
  })
}(i = s || (s = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.SUBMITTING = 1] = "SUBMITTING", i[i.SUBMITTED = 2] = "SUBMITTED";
let R = e => {
  if (e.toString() === m.Plq.MENTION_EVERYONE.toString()) return M.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
  return (0, S.wt)(e)
};

function D(e) {
  let {
    permissions: n,
    step: t
  } = e;
  return 2 === t ? null : (0, o.jsxs)("div", {
    className: C.tableContainer,
    children: [(0, o.jsx)(I.Text, {
      className: C.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 0 === t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
    }), (0, o.jsx)("div", {
      className: C.permissionsTable,
      children: n.map((e, n) => (0, o.jsxs)("div", {
        className: C.permissionRow,
        children: [(0, o.jsx)("div", {
          className: 0 === t ? C.bulletPositive : C.bulletWarning
        }), (0, o.jsx)(I.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: R(e)
        })]
      }, n))
    })]
  })
}

function x(e) {
  let {
    permissions: n,
    step: t
  } = e;
  return 0 === n.length && 2 !== t ? null : (2 === t && (n = L.$X), (0, o.jsxs)("div", {
    className: C.tableContainer,
    children: [(0, o.jsx)(I.Text, {
      className: C.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 2 === t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
    }), (0, o.jsx)("div", {
      className: C.permissionsTable,
      children: n.map((e, n) => (0, o.jsxs)("div", {
        className: C.permissionRow,
        children: [(0, o.jsx)("div", {
          className: C.bullet
        }), (0, o.jsx)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: R(e)
        })]
      }, n))
    })]
  }))
}

function f(e) {
  let {
    permissions: n,
    step: t
  } = e, {
    enabledPermissions: s,
    disabledPermissions: i
  } = n;
  return 0 === s.length && 2 !== t ? null : (0, o.jsxs)("div", {
    className: C.table,
    children: [2 !== t ? (0, o.jsx)(D, {
      permissions: s,
      step: t
    }) : null, (0, o.jsx)(x, {
      permissions: i,
      step: t
    })]
  })
}

function v(e) {
  let {
    guild: n,
    permissions: t,
    step: s,
    canEveryoneModerate: i,
    isDefaultNotificationsAllMessages: a
  } = e;
  return (0, o.jsx)(I.ModalContent, {
    children: (0, o.jsxs)("div", {
      className: C.updatedForm,
      children: [a ? (0, o.jsxs)("div", {
        className: C.checklistRow,
        children: [(0, o.jsx)(I.CircleCheckIcon, {
          size: "md",
          className: C.checklistIcon,
          color: _.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
        }), (0, o.jsx)(I.Text, {
          variant: "text-md/normal",
          children: M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
            infoHook: () => (0, o.jsx)(I.Tooltip, {
              text: M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              "aria-label": M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              children: e => (0, o.jsx)(I.CircleInformationIcon, {
                size: "xs",
                color: "currentColor",
                className: C.icon,
                ...e
              })
            })
          })
        })]
      }) : null, i ? (0, o.jsxs)("div", {
        className: C.checklistRow,
        children: [(0, o.jsx)(I.CircleCheckIcon, {
          size: "md",
          className: C.checklistIcon,
          color: _.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
        }), (0, o.jsx)(I.Text, {
          variant: "text-md/normal",
          children: M.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
        }), (0, o.jsx)(h, {
          guild: n
        })]
      }) : null, (0, o.jsx)(f, {
        permissions: t,
        step: s
      })]
    })
  })
}

function g(e) {
  let {
    onConfirm: n,
    onDismiss: t,
    canEveryoneModerate: s,
    step: i
  } = e;
  return (0, o.jsxs)(I.ModalFooter, {
    className: C.footer,
    children: [(0, o.jsx)(I.Button, {
      onClick: n,
      submitting: 1 === i,
      children: 0 === i ? s ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
    }), 0 === i ? (0, o.jsx)(I.Button, {
      look: I.Button.Looks.LINK,
      onClick: t,
      color: I.Button.Colors.PRIMARY,
      children: (0, o.jsx)(I.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
      })
    }) : null]
  })
}

function j(e) {
  let {
    guild: n,
    canEveryoneModerate: t,
    isDefaultNotificationsAllMessages: s,
    transitionState: i,
    onClose: r
  } = e, [_, E] = a.useState(0), S = a.useMemo(() => {
    let e = [],
      t = [];
    return L.$X.map(s => {
      O.oz(s, n) ? e.push(s) : t.push(s)
    }), {
      enabledPermissions: e,
      disabledPermissions: t
    }
  }, [n]);
  if (null == n) return null;
  let T = () => {
      let e = u.Z.getRole(n.id, n.getEveryoneRoleId());
      if (null == e) return;
      let t = l.Od(e.permissions, L.mu);
      (0, N.Gf)(n.id, [{
        ...e,
        permissions: t
      }])
    },
    h = () => {
      d.Z.updateGuild({
        defaultMessageNotifications: m.bL.ONLY_MENTIONS
      }), d.Z.saveGuild(n.id, {
        defaultMessageNotifications: m.bL.ONLY_MENTIONS
      })
    },
    R = () => {
      t && T(), s && h()
    };
  return (0, o.jsxs)(I.ModalRoot, {
    transitionState: i,
    size: I.ModalSize.SMALL,
    className: C.modal,
    children: [(0, o.jsx)(U, {
      guild: n,
      headerText: t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
      headerSubtext: t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
      step: _
    }), (0, o.jsx)(v, {
      guild: n,
      permissions: S,
      step: _,
      canEveryoneModerate: t,
      isDefaultNotificationsAllMessages: s
    }), (0, o.jsx)(g, {
      onConfirm: () => {
        var e, s;
        !t && (R(), r(), (0, p.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : "", !0, A.L.PRIMARY)), 0 === _ ? (E(1), setTimeout(() => E(2), 3e3)) : 2 === _ && (R(), r(), (0, p.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : "", !0, A.L.PRIMARY))
      },
      onDismiss: () => {
        r(), (0, p.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, n.id, !0, A.L.DISMISS)
      },
      step: _,
      canEveryoneModerate: t
    })]
  })
}