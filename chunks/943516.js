"use strict";
t.r(A), t.d(A, {
  WarningIcon: function() {
    return p
  },
  default: function() {
    return q
  },
  getInitialNewRoleParams: function() {
    return I
  }
});
var a = t("735250");
t("470079");
var l = t("512722"),
  s = t.n(l),
  n = t("866442"),
  r = t("399606"),
  o = t("481060"),
  i = t("430824"),
  d = t("682864"),
  u = t("465670"),
  c = t("877410"),
  C = t("740727"),
  f = t("610064"),
  g = t("759231"),
  T = t("470209"),
  U = t("981631"),
  h = t("689938"),
  m = t("443695");

function I() {
  return {
    name: "",
    color: U.DEFAULT_ROLE_COLOR
  }
}

function v(e) {
  let A, {
    onRemove: t,
    role: l
  } = e;
  return A = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.HiddenVisually, {
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, n.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: m.attachedRoleColor,
      style: {
        backgroundColor: (0, n.int2hex)(l.color)
      }
    }), (0, a.jsx)(d.default, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: l.name
    }), null != t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.default, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(o.Clickable, {
        "aria-label": h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: t,
        className: m.attachedRoleClose,
        children: (0, a.jsx)(u.default, {
          width: 16,
          height: 16,
          className: m.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(o.Spinner, {
    type: o.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: m.attachedRoleContainer,
    children: A
  })
}

function p() {
  return (0, a.jsx)(g.default, {
    className: m.warningIcon,
    width: 16,
    height: 16
  })
}

function E(e) {
  let {
    roleName: A
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: A,
        emphasisHook: e => (0, a.jsx)(o.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(o.Heading, {
      className: m.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(o.Heading, {
      className: m.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(C.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function q(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: l,
    guildId: n,
    productId: u,
    listingRoleId: c,
    error: C
  } = e, g = (0, r.useStateFromStores)([i.default], () => null != c ? i.default.getRole(n, c) : void 0);
  return null === A ? (0, a.jsxs)(o.FormItem, {
    title: (0, a.jsxs)("div", {
      className: m.warningTitle,
      children: [(0, a.jsx)(p, {}), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 4
      }), h.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: C,
    titleClassName: m.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: m.reattachRoleRow,
      children: [(0, a.jsx)(v, {
        role: g,
        onRemove: void 0
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(o.Button, {
        innerClassName: m.restoreDetachedRoleButtonInner,
        color: o.Button.Colors.PRIMARY,
        onClick: () => {
          l(void 0)
        },
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "none",
          children: h.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(d.default, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(f.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != c ? (0, a.jsxs)(o.FormItem, {
    title: h.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: C,
    titleClassName: m.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(v, {
      role: g,
      onRemove: () => {
        s()(null != u, "productId cannot be null"), s()(null != g, "no role attached"), ! function(e) {
          let {
            onConfirm: A,
            roleName: l
          } = e;
          (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, "776045"));
            return t => (0, a.jsx)(e, {
              title: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: l
              }),
              cta: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: h.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: A,
              ...t
            })
          })
        }({
          roleName: g.name,
          onConfirm: () => l(null)
        })
      }
    })]
  }) : (s()(null != A, "newRoleParams cannot be null at this point"), (0, a.jsxs)(o.FormItem, {
    required: !0,
    title: h.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: C,
    titleClassName: m.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(T.default, {
      newRoleParams: A,
      setNewRoleParams: l
    })]
  }))
}