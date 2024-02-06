"use strict";
t.r(A), t.d(A, {
  getInitialNewRoleParams: function() {
    return I
  },
  WarningIcon: function() {
    return v
  },
  default: function() {
    return q
  }
});
var a = t("37983");
t("884691");
var n = t("627445"),
  l = t.n(n),
  r = t("509043"),
  s = t("65597"),
  o = t("77078"),
  i = t("305961"),
  d = t("191814"),
  u = t("945330"),
  c = t("152224"),
  f = t("228220"),
  C = t("204203"),
  g = t("423487"),
  T = t("373996"),
  h = t("49111"),
  m = t("782340"),
  U = t("60957");

function I() {
  return {
    name: "",
    color: h.DEFAULT_ROLE_COLOR
  }
}

function p(e) {
  let A, {
    onRemove: t,
    role: n
  } = e;
  return A = null != n ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.HiddenVisually, {
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, r.int2hex)(n.color)
      })
    }), (0, a.jsx)("div", {
      className: U.attachedRoleColor,
      style: {
        backgroundColor: (0, r.int2hex)(n.color)
      }
    }), (0, a.jsx)(d.default, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: n.name
    }), null != t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.default, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(o.Clickable, {
        "aria-label": m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: t,
        className: U.attachedRoleClose,
        children: (0, a.jsx)(u.default, {
          width: 16,
          height: 16,
          className: U.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(o.Spinner, {
    type: o.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: U.attachedRoleContainer,
    children: A
  })
}

function v() {
  return (0, a.jsx)(g.default, {
    className: U.warningIcon,
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
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: A,
        emphasisHook: e => (0, a.jsx)(o.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(o.Heading, {
      className: U.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(o.Heading, {
      className: U.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(f.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function q(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: n,
    guildId: r,
    productId: u,
    listingRoleId: c,
    error: f
  } = e, g = (0, s.default)([i.default], () => {
    if (null != c) {
      let e = i.default.getGuild(r);
      return null == e ? void 0 : e.roles[c]
    }
  }, [c, r]);
  return null === A ? (0, a.jsxs)(o.FormItem, {
    title: (0, a.jsxs)("div", {
      className: U.warningTitle,
      children: [(0, a.jsx)(v, {}), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 4
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: f,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: U.reattachRoleRow,
      children: [(0, a.jsx)(p, {
        role: g,
        onRemove: void 0
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(o.Button, {
        innerClassName: U.restoreDetachedRoleButtonInner,
        color: o.Button.Colors.PRIMARY,
        onClick: () => {
          n(void 0)
        },
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "none",
          children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(d.default, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(C.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != c ? (0, a.jsxs)(o.FormItem, {
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(p, {
      role: g,
      onRemove: () => {
        l(null != u, "productId cannot be null"), l(null != g, "no role attached"), ! function(e) {
          let {
            onConfirm: A,
            roleName: n
          } = e;
          (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await t.el("83501").then(t.bind(t, "83501"));
            return t => (0, a.jsx)(e, {
              title: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: n
              }),
              cta: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: A,
              ...t
            })
          })
        }({
          roleName: g.name,
          onConfirm: () => n(null)
        })
      }
    })]
  }) : (l(null != A, "newRoleParams cannot be null at this point"), (0, a.jsxs)(o.FormItem, {
    required: !0,
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(T.default, {
      newRoleParams: A,
      setNewRoleParams: n
    })]
  }))
}