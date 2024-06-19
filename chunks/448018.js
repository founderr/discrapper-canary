n.d(t, {
  v: function() {
    return E
  }
});
var s = n(497505),
  a = n(988303),
  i = n(909389),
  l = n(941348),
  r = n(658590),
  o = n(743294);
let c = {
    component: i.Z,
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
  d = o.Li,
  u = {
    component: l.Z,
    getCollapsedHeight: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40
    },
    getPreEnrollmentExpandedHeight: () => 270,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(o.aY, ", ").concat(o.v6, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--home-background)",
    canCollapseOnBlur: e => !0,
    shouldExpandOnQuestComplete: e => !1,
    getVerticalPadding: () => d
  },
  E = (e, t, n) => {
    var i;
    let l = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
      o = !l && t === a.P.V2 || l && n === a.P.V2 || (0, r.a)(e),
      d = o ? u : c;
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
        content: o ? s.jn.QUEST_BAR_V2 : s.jn.QUEST_BAR
      }
    }
  }