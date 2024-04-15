"use strict";
t.r(a), t.d(a, {
  default: function() {
    return r
  }
});
var s = t("735250");
t("470079");
var n = t("703558"),
  o = t("403182"),
  E = t("127654"),
  _ = t("98278"),
  i = t("790527"),
  M = t("474936"),
  l = t("981631"),
  L = t("689938");

function r(e) {
  var a;
  let {
    channel: r,
    onClose: c,
    content: u,
    ...A
  } = e;

  function d() {
    c(), (0, _.navigateToPremiumMarketingPage)(!0)
  }
  return (0, s.jsx)(i.default, {
    artURL: t("990158"),
    type: M.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
    title: L.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
    body: L.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
      maxLength: l.MAX_MESSAGE_LENGTH,
      onLearnMore: d
    }),
    context: L.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
      maxLength: l.MAX_MESSAGE_LENGTH
    }),
    glowUp: L.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
      onLearnMore: d
    }),
    analyticsSource: {
      page: (null == (a = r) ? void 0 : a.getGuildId()) != null ? l.AnalyticsPages.GUILD_CHANNEL : (null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isPrivate()) ? l.AnalyticsPages.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: l.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
      object: l.AnalyticsObjects.BUTTON_CTA
    },
    onClose: c,
    secondaryCTA: L.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
    onSecondaryClick: function() {
      c();
      let e = new Blob([u], {
        type: "text/plain"
      });
      (0, E.promptToUpload)([(0, o.makeFile)(e, "message.txt")], r, n.DraftType.ChannelMessage, {
        requireConfirm: !0,
        showLargeMessageDialog: !0
      })
    },
    ...A
  })
}