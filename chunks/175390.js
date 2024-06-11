"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var i = s("735250");
s("470079");
var l = s("399606"),
  r = s("481060"),
  a = s("607070"),
  n = s("357352"),
  d = s("623488"),
  o = s("695346"),
  u = s("507893"),
  c = s("937615"),
  C = s("506071"),
  _ = s("724598"),
  f = s("629481"),
  S = s("981631"),
  h = s("689938"),
  x = s("525799");

function I() {
  let e = o.GifAutoPlay.useSetting(),
    t = (0, C.useIsWindowFocused)(),
    s = (0, l.useStateFromStores)([a.default], () => a.default.useReducedMotion),
    r = t && e && !s ? (0, n.getAssetCDNUrl)("server_products/storefront/question-mark.gif") : (0, n.getAssetCDNUrl)("server_products/storefront/question-mark.png");
  return (0, i.jsxs)("div", {
    className: x.previewListingCard,
    children: [(0, i.jsx)(d.default, {
      role: void 0,
      ctaComponent: null,
      imageUrl: (0, n.getAssetCDNUrl)("server_products/storefront/preview-thumbnail.png"),
      name: h.default.Messages.GUILD_STORE_PREVIEW_CARD_TITLE,
      description: h.default.Messages.GUILD_STORE_PREVIEW_CARD_DESCRIPTION,
      formattedPrice: (0, c.formatPrice)(0, S.CurrencyCodes.USD, {
        localeMatcher: "best fit",
        style: "currency",
        maximumSignificantDigits: 1
      }),
      shouldShowFullDescriptionButton: !1,
      productType: h.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE,
      onTapCard: () => null,
      hideRoleTag: !0,
      lineClamp: 3,
      thumbnailHeight: 197,
      cardWidth: 332,
      descriptionTextVariant: "text-xs/normal"
    }), (0, i.jsx)("img", {
      className: x.questionMark,
      alt: "",
      src: r
    })]
  })
}

function p() {
  return (0, i.jsxs)("div", {
    className: x.learnMoreTipContainer,
    children: [(0, i.jsx)(u.default, {
      className: x.infoCircle
    }), (0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: h.default.Messages.GUILD_STORE_PREVIEW_LEARN_MORE.format({
        learnMoreLink: f.SERVER_SHOP_URL
      })
    })]
  })
}

function L(e) {
  let {
    guildId: t
  } = e;
  return (0, i.jsxs)("div", {
    className: x.previewContentContainer,
    children: [(0, i.jsxs)("div", {
      className: x.previewContent,
      children: [(0, i.jsx)(I, {}), (0, i.jsx)(_.default, {
        guildId: t,
        showCTA: !0
      })]
    }), (0, i.jsx)(p, {})]
  })
}