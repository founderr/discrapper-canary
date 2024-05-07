"use strict";
t.r(A), t.d(A, {
  showPublishErrorDialog: function() {
    return i
  }
});
var a = t("735250");
t("470079");
var l = t("952265"),
  s = t("776045"),
  n = t("871388"),
  r = t("981631"),
  o = t("689938");

function i(e, A, i) {
  var d, u, c;
  switch (e.code) {
    case r.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, n.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, s.IconVariant.DANGER);
      break;
    case r.AbortCodes.TWO_FA_NOT_ENABLED:
      (0, n.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, n.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
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
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, n.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let C, f;
      null != i ? (C = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, f = {
        url: r.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i)
      }) : C = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, n.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, C, s.IconVariant.WARNING, f);
      break;
    default:
      ;
      let g = null !== (c = e.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (u = e.hasFieldErrors) || void 0 === u ? void 0 : u.call(e)) ? void 0 : e.message;
      if (null != g)(0, n.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, g, s.IconVariant.WARNING)
  }
}