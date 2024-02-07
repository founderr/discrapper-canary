"use strict";
t.r(A), t.d(A, {
  getInitialNewRoleParams: function() {
    return p
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
var l = t("627445"),
  n = t.n(l),
  s = t("509043"),
  r = t("65597"),
  i = t("77078"),
  o = t("305961"),
  d = t("191814"),
  u = t("945330"),
  c = t("152224"),
  f = t("228220"),
  g = t("204203"),
  C = t("423487"),
  h = t("373996"),
  T = t("49111"),
  m = t("782340"),
  U = t("60957");

function p() {
  return {
    name: "",
    color: T.DEFAULT_ROLE_COLOR
  }
}

function I(e) {
  let A, {
    onRemove: t,
    role: l
  } = e;
  return A = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.HiddenVisually, {
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, s.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: U.attachedRoleColor,
      style: {
        backgroundColor: (0, s.int2hex)(l.color)
      }
    }), (0, a.jsx)(d.default, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: l.name
    }), null != t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.default, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(i.Clickable, {
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
  }) : (0, a.jsx)(i.Spinner, {
    type: i.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: U.attachedRoleContainer,
    children: A
  })
}

function v() {
  return (0, a.jsx)(C.default, {
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
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
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
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(i.Heading, {
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
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function q(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: l,
    guildId: s,
    productId: u,
    listingRoleId: c,
    error: f
  } = e, C = (0, r.default)([o.default], () => {
    if (null != c) {
      let e = o.default.getGuild(s);
      return null == e ? void 0 : e.roles[c]
    }
  }, [c, s]);
  return null === A ? (0, a.jsxs)(i.FormItem, {
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
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: U.reattachRoleRow,
      children: [(0, a.jsx)(I, {
        role: C,
        onRemove: void 0
      }), (0, a.jsx)(d.default, {
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
          children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(d.default, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(g.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != c ? (0, a.jsxs)(i.FormItem, {
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(I, {
      role: C,
      onRemove: () => {
        n(null != u, "productId cannot be null"), n(null != C, "no role attached"), ! function(e) {
          let {
            onConfirm: A,
            roleName: l
          } = e;
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await t.el("83501").then(t.bind(t, "83501"));
            return t => (0, a.jsx)(e, {
              title: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: l
              }),
              cta: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: A,
              ...t
            })
          })
        }({
          roleName: C.name,
          onConfirm: () => l(null)
        })
      }
    })]
  }) : (n(null != A, "newRoleParams cannot be null at this point"), (0, a.jsxs)(i.FormItem, {
    required: !0,
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: U.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(h.default, {
      newRoleParams: A,
      setNewRoleParams: l
    })]
  }))
}