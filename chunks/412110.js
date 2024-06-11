"use strict";
t.r(A), t.d(A, {
  showPublishErrorDialog: function() {
    return o
  }
});
var a = t("735250");
t("470079");
var l = t("952265"),
  s = t("776045"),
  r = t("871388"),
  n = t("981631"),
  i = t("689938");

function o(e, A, o) {
  var d, u, c;
  switch (e.code) {
    case n.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, r.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, s.IconVariant.DANGER);
      break;
    case n.AbortCodes.TWO_FA_NOT_ENABLED:
      (0, r.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case n.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, r.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case n.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
      ;
      d = A, (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("31835")]).then(t.bind(t, "393809"));
        return A => (0, a.jsx)(e, {
          guildId: d,
          ...A
        })
      });
      break;
    case n.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, r.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, s.IconVariant.WARNING);
      break;
    case n.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let g, f;
      null != o ? (g = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, f = {
        url: n.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : g = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, r.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, g, s.IconVariant.WARNING, f);
      break;
    default:
      ;
      let C = null !== (c = e.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (u = e.hasFieldErrors) || void 0 === u ? void 0 : u.call(e)) ? void 0 : e.message;
      if (null != C)(0, r.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, C, s.IconVariant.WARNING)
  }
}