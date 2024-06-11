"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("512722"),
  d = a.n(s),
  r = a("399606"),
  i = a("481060"),
  u = a("668781"),
  o = a("430824"),
  _ = a("759231"),
  c = a("495437"),
  E = a("240864"),
  T = a("981631"),
  D = a("689938"),
  O = a("137013");

function f(e) {
  let {
    guildProductListing: t,
    guildId: a
  } = e, n = (0, r.useStateFromStores)([o.default], () => {
    var e;
    return o.default.getRole(a, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : T.EMPTY_STRING_SNOWFLAKE_ID)
  });
  return null == n ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.Heading, {
      className: O.warningSectionHeader,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, l.jsx)(_.default, {
        height: 18,
        width: 18
      }), (0, l.jsx)(i.Spacer, {
        horizontal: !0,
        size: 8
      }), D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER]
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      children: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format({
        roleName: n.name
      })
    })]
  })
}

function m(e) {
  let {
    guildId: t,
    productId: a,
    ...s
  } = e, [r] = n.useState(() => E.default.getGuildProduct(a));
  d()(null != r, "guildProductListing cannot be null");
  let [o, _] = n.useState(!1), T = async () => {
    try {
      _(!0), await c.deleteGuildProductListing(t, a)
    } catch (e) {
      u.default.show({
        title: D.default.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
        body: e.message
      })
    } finally {
      _(!1)
    }
  };
  return (0, l.jsxs)(i.ConfirmModal, {
    ...s,
    className: O.modalContainer,
    header: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
    confirmText: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
    cancelText: D.default.Messages.CANCEL,
    loading: o,
    onConfirm: T,
    children: [(0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      children: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
        productName: r.name
      })
    }), (0, l.jsx)(f, {
      guildProductListing: r,
      guildId: t
    })]
  })
}