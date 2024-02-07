"use strict";
t.r(A), t.d(A, {
  showPublishErrorDialog: function() {
    return o
  }
});
var a = t("37983");
t("884691");
var l = t("551042"),
  n = t("83501"),
  s = t("669297"),
  r = t("49111"),
  i = t("782340");

function o(e, A, o) {
  var d, u, c;
  switch (e.code) {
    case r.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, s.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, n.IconVariant.DANGER);
      break;
    case r.AbortCodes.TWO_FA_NOT_ENABLED:
      (0, s.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, n.IconVariant.WARNING);
      break;
    case r.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, s.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, n.IconVariant.WARNING);
      break;
    case r.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
      ;
      d = A, (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await t.el("300770").then(t.bind(t, "300770"));
        return A => (0, a.jsx)(e, {
          guildId: d,
          ...A
        })
      });
      break;
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, s.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, n.IconVariant.WARNING);
      break;
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let f, g;
      null != o ? (f = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, g = {
        url: r.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : f = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, s.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, f, n.IconVariant.WARNING, g);
      break;
    default:
      ;
      let C = null !== (c = e.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (u = e.hasFieldErrors) || void 0 === u ? void 0 : u.call(e)) ? void 0 : e.message;
      if (null != C)(0, s.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, C, n.IconVariant.WARNING)
  }
}