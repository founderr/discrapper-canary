"use strict";
t.r(A), t.d(A, {
  WarningIcon: function() {
    return I
  },
  default: function() {
    return E
  },
  getInitialNewRoleParams: function() {
    return p
  }
});
var a = t("735250");
t("470079");
var l = t("512722"),
  s = t.n(l),
  r = t("866442"),
  n = t("399606"),
  i = t("481060"),
  o = t("430824"),
  d = t("465670"),
  u = t("877410"),
  c = t("740727"),
  g = t("610064"),
  f = t("759231"),
  C = t("470209"),
  h = t("981631"),
  T = t("689938"),
  U = t("728975");

function p() {
  return {
    name: "",
    color: h.DEFAULT_ROLE_COLOR
  }
}

function m(e) {
  let A, {
    onRemove: t,
    role: l
  } = e;
  return A = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.HiddenVisually, {
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, r.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: U.attachedRoleColor,
      style: {
        backgroundColor: (0, r.int2hex)(l.color)
      }
    }), (0, a.jsx)(i.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: l.name
    }), null != t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Spacer, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(i.Clickable, {
        "aria-label": T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: t,
        className: U.attachedRoleClose,
        children: (0, a.jsx)(d.default, {
          width: 16,
          height: 16,
          className: U.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(i.Spinner, {
    type: i.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: U.attachedRoleContainer,
    children: A
  })
}

function I() {
  return (0, a.jsx)(f.default, {
    className: U.warningIcon,
    width: 16,
    height: 16
  })
}

function v(e) {
  let {
    roleName: A
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: A,
        emphasisHook: e => (0, a.jsx)(i.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(i.Heading, {
      className: U.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(u.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(i.Spacer, {
        horizontal: !0,
        size: 8
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(i.Heading, {
      className: U.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(i.Spacer, {
        horizontal: !0,
        size: 8
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function E(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: l,
    guildId: r,
    productId: d,
    listingRoleId: u,
    error: c
  } = e, f = (0, n.useStateFromStores)([o.default], () => null != u ? o.default.getRole(r, u) : void 0);
  return null === A ? (0, a.jsxs)(i.FormItem, {
    title: (0, a.jsxs)("div", {
      className: U.warningTitle,
      children: [(0, a.jsx)(I, {}), (0, a.jsx)(i.Spacer, {
        horizontal: !0,
        size: 4
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: c,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(i.Spacer, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: U.reattachRoleRow,
      children: [(0, a.jsx)(m, {
        role: f,
        onRemove: void 0
      }), (0, a.jsx)(i.Spacer, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(i.Button, {
        innerClassName: U.restoreDetachedRoleButtonInner,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          l(void 0)
        },
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "none",
          children: T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(i.Spacer, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(g.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != u ? (0, a.jsxs)(i.FormItem, {
    title: T.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: c,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(i.Spacer, {
      size: 8
    }), (0, a.jsx)(m, {
      role: f,
      onRemove: () => {
        s()(null != d, "productId cannot be null"), s()(null != f, "no role attached"), ! function(e) {
          let {
            onConfirm: A,
            roleName: l
          } = e;
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, "776045"));
            return t => (0, a.jsx)(e, {
              title: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(v, {
                roleName: l
              }),
              cta: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: A,
              ...t
            })
          })
        }({
          roleName: f.name,
          onConfirm: () => l(null)
        })
      }
    })]
  }) : (s()(null != A, "newRoleParams cannot be null at this point"), (0, a.jsxs)(i.FormItem, {
    required: !0,
    title: T.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: c,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(i.Spacer, {
      size: 8
    }), (0, a.jsx)(C.default, {
      newRoleParams: A,
      setNewRoleParams: l
    })]
  }))
}