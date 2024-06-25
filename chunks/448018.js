n.d(t, {
  v: function() {
    return p
  }
});
var s = n(497505),
  o = n(988303),
  r = n(909389),
  a = n(941348),
  l = n(658590),
  i = n(743294);
let c = {
    component: r.Z,
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
  u = i.Li,
  d = {
    component: a.Z,
    getCollapsedHeight: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40
    },
    getPreEnrollmentExpandedHeight: () => 270,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(i.aY, ", ").concat(i.v6, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--home-background)",
    canCollapseOnBlur: e => !0,
    shouldExpandOnQuestComplete: e => !1,
    getVerticalPadding: () => u
  },
  p = (e, t, n) => {
    var r;
    let a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
      i = !a && t === o.P.V2 || a && n === o.P.V2 || (0, l.a)(e),
      u = i ? d : c;
    return {
      component: u.component,
      collapsedHeight: u.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: u.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: u.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: u.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: u.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: u.shouldExpandOnQuestComplete(e),
      paddingVertical: u.getVerticalPadding(),
      trackingCtx: {
        content: i ? s.jn.QUEST_BAR_V2 : s.jn.QUEST_BAR
      }
    }
  }