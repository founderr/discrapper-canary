t.r(n), t.d(n, {
  default: function() {
    return O
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  r = t(512722),
  l = t.n(r),
  i = t(399606),
  o = t(481060),
  c = t(668781),
  d = t(430824),
  _ = t(495437),
  u = t(240864),
  E = t(981631),
  m = t(689938),
  T = t(267095);

function D(e) {
  let {
    guildProductListing: n,
    guildId: t
  } = e, s = (0, i.e7)([d.Z], () => {
    var e;
    return d.Z.getRole(t, null !== (e = null == n ? void 0 : n.role_id) && void 0 !== e ? e : E.lds)
  });
  return null == s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.Heading, {
      className: T.warningSectionHeader,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(o.CircleExclamationPointIcon, {
        size: "sm",
        color: "currentColor"
      }), (0, a.jsx)(o.Spacer, {
        horizontal: !0,
        size: 8
      }), m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format({
        roleName: s.name
      })
    })]
  })
}

function O(e) {
  let {
    guildId: n,
    productId: t,
    ...r
  } = e, [i] = s.useState(() => u.Z.getGuildProduct(t));
  l()(null != i, "guildProductListing cannot be null");
  let [d, E] = s.useState(!1), O = async () => {
    try {
      E(!0), await _.mh(n, t)
    } catch (e) {
      c.Z.show({
        title: m.Z.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
        body: e.message
      })
    } finally {
      E(!1)
    }
  };
  return (0, a.jsxs)(o.ConfirmModal, {
    ...r,
    className: T.modalContainer,
    header: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
    confirmText: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
    cancelText: m.Z.Messages.CANCEL,
    loading: d,
    onConfirm: O,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
        productName: i.name
      })
    }), (0, a.jsx)(D, {
      guildProductListing: i,
      guildId: n
    })]
  })
}