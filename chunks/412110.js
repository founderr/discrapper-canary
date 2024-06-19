t.d(A, {
  V: function() {
    return i
  }
});
var n = t(735250);
t(470079);
var a = t(952265),
  s = t(776045),
  r = t(871388),
  l = t(981631),
  o = t(689938);

function i(e, A, i) {
  var d, c, u;
  switch (e.code) {
    case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, r.B)(o.Z.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, o.Z.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, s.IconVariant.DANGER);
      break;
    case l.evJ.TWO_FA_NOT_ENABLED:
      (0, r.B)(o.Z.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, o.Z.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, r.B)(o.Z.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, o.Z.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
      ;
      d = A, (0, a.ZD)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("31835")]).then(t.bind(t, 393809));
        return A => (0, n.jsx)(e, {
          guildId: d,
          ...A
        })
      });
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, r.B)(o.Z.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, o.Z.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, s.IconVariant.WARNING);
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let C, g;
      null != i ? (C = o.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, g = {
        url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i)
      }) : C = o.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, r.B)(o.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, C, s.IconVariant.WARNING, g);
      break;
    default:
      ;
      let T = null !== (u = e.getFirstFieldErrorMessage(["published"])) && void 0 !== u ? u : (null === (c = e.hasFieldErrors) || void 0 === c ? void 0 : c.call(e)) ? void 0 : e.message;
      if (null != T)(0, r.B)(o.Z.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, T, s.IconVariant.WARNING)
  }
}