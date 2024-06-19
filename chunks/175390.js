t.d(s, {
  Z: function() {
    return m
  }
});
var n = t(735250);
t(470079);
var r = t(399606),
  i = t(481060),
  l = t(607070),
  o = t(357352),
  a = t(623488),
  c = t(695346),
  d = t(937615),
  C = t(506071),
  u = t(724598),
  _ = t(629481),
  x = t(981631),
  I = t(689938),
  h = t(421305);

function L() {
  let e = c.QK.useSetting(),
    s = (0, C.n)(),
    t = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
    i = s && e && !t ? (0, o.b)("server_products/storefront/question-mark.gif") : (0, o.b)("server_products/storefront/question-mark.png");
  return (0, n.jsxs)("div", {
    className: h.previewListingCard,
    children: [(0, n.jsx)(a.Z, {
      role: void 0,
      ctaComponent: null,
      imageUrl: (0, o.b)("server_products/storefront/preview-thumbnail.png"),
      name: I.Z.Messages.GUILD_STORE_PREVIEW_CARD_TITLE,
      description: I.Z.Messages.GUILD_STORE_PREVIEW_CARD_DESCRIPTION,
      formattedPrice: (0, d.T4)(0, x.pKx.USD, {
        localeMatcher: "best fit",
        style: "currency",
        maximumSignificantDigits: 1
      }),
      shouldShowFullDescriptionButton: !1,
      productType: I.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE,
      onTapCard: () => null,
      hideRoleTag: !0,
      lineClamp: 3,
      thumbnailHeight: 197,
      cardWidth: 332,
      descriptionTextVariant: "text-xs/normal"
    }), (0, n.jsx)("img", {
      className: h.questionMark,
      alt: "",
      src: i
    })]
  })
}

function E() {
  return (0, n.jsxs)("div", {
    className: h.learnMoreTipContainer,
    children: [(0, n.jsx)(i.CircleInformationIcon, {
      size: "md",
      color: "currentColor",
      className: h.infoCircle
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.Z.Messages.GUILD_STORE_PREVIEW_LEARN_MORE.format({
        learnMoreLink: _.P4
      })
    })]
  })
}

function m(e) {
  let {
    guildId: s
  } = e;
  return (0, n.jsxs)("div", {
    className: h.previewContentContainer,
    children: [(0, n.jsxs)("div", {
      className: h.previewContent,
      children: [(0, n.jsx)(L, {}), (0, n.jsx)(u.Z, {
        guildId: s,
        showCTA: !0
      })]
    }), (0, n.jsx)(E, {})]
  })
}