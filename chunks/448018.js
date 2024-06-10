"use strict";
s.r(t), s.d(t, {
  getQuestBarVariantConfig: function() {
    return c
  }
});
var a = s("497505"),
  n = s("988303"),
  l = s("909389"),
  i = s("941348"),
  r = s("658590"),
  o = s("743294");
let u = {
    component: l.default,
    getCollapsedHeight: () => 40,
    getPreEnrollmentExpandedHeight: () => 240,
    getPostEnrollmentBackgroundImage: e => "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
    getPreEnrollmentBackgroundColor: e => void 0,
    canCollapseOnBlur: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) == null
    },
    shouldExpandOnQuestComplete: e => !0,
    getVerticalPadding: () => 8
  },
  d = {
    component: i.default,
    getCollapsedHeight: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40
    },
    getPreEnrollmentExpandedHeight: () => 270,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(o.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(o.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--home-background)",
    canCollapseOnBlur: e => !0,
    shouldExpandOnQuestComplete: e => !1,
    getVerticalPadding: () => 12
  },
  c = (e, t, s) => {
    var l;
    let i = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null,
      o = !i && t === n.QuestBarExperimentVariants.V2 || i && s === n.QuestBarExperimentVariants.V2 || (0, r.shouldForceQuestBarV2)(e),
      c = o ? d : u;
    return {
      component: c.component,
      collapsedHeight: c.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: c.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: c.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: c.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: c.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: c.shouldExpandOnQuestComplete(e),
      paddingVertical: c.getVerticalPadding(),
      trackingCtx: {
        content: o ? a.QuestContent.QUEST_BAR_V2 : a.QuestContent.QUEST_BAR
      }
    }
  }