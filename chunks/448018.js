"use strict";
s.r(t), s.d(t, {
  getQuestBarVariantConfig: function() {
    return E
  }
});
var n = s("497505"),
  a = s("988303"),
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
  d = o.QUEST_BAR_V2_MARGIN,
  c = {
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
    getVerticalPadding: () => d
  },
  E = (e, t, s) => {
    var l;
    let i = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null,
      o = !i && t === a.QuestBarExperimentVariants.V2 || i && s === a.QuestBarExperimentVariants.V2 || (0, r.shouldForceQuestBarV2)(e),
      d = o ? c : u;
    return {
      component: d.component,
      collapsedHeight: d.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: d.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: d.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
      paddingVertical: d.getVerticalPadding(),
      trackingCtx: {
        content: o ? n.QuestContent.QUEST_BAR_V2 : n.QuestContent.QUEST_BAR
      }
    }
  }