n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(735250);
n(470079);
var i = n(399606),
  l = n(481060),
  a = n(607070),
  r = n(739566),
  o = n(942951),
  c = n(703656),
  u = n(702346),
  d = n(331372),
  E = n(981631),
  _ = n(689938),
  I = n(741751);

function T(e) {
  let {
    guildId: t,
    user: n,
    username: r
  } = e, o = (0, i.e7)([a.Z], () => !a.Z.useReducedMotion), c = n.getAvatarURL(t, 56, o), u = (0, s.jsx)("img", {
    src: c,
    className: I.userAvatar,
    alt: ""
  });
  return (0, s.jsxs)("div", {
    className: I.thankYouCard,
    role: "img",
    "aria-label": _.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: r
    }),
    children: [(0, s.jsx)(d.Z, {
      avatar: u
    }), (0, s.jsx)(l.Text, {
      className: I.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: _.Z.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
        username: r,
        usernameHook: (e, t) => (0, s.jsx)(l.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })]
  })
}

function N(e) {
  var t, i, l;
  let {
    channel: a,
    message: d,
    compact: I
  } = e, N = (0, r.ZP)(d), m = (0, o.l)({
    user: d.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: d.id
  })(N), h = _.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
    username: N.nick,
    usernameHook: m,
    productName: null !== (l = null === (i = d.purchaseNotification) || void 0 === i ? void 0 : null === (t = i.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== l ? l : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, c.uL)(E.Z5c.GUILD_PRODUCT(a.guild_id, null !== (n = null === (t = d.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ""))
    }
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.Z, {
      icon: n(570111),
      timestamp: d.timestamp,
      compact: I,
      children: h
    }), (0, s.jsx)(T, {
      username: N.nick,
      guildId: a.guild_id,
      user: d.author
    })]
  })
}