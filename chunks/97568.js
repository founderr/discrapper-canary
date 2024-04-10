"use strict";
a.r(t), a.d(t, {
  ClassificationEvidence: function() {
    return c
  }
});
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("219230"),
  s = a("205752"),
  o = a("621145"),
  d = a("689938"),
  r = a("411202");
let c = e => {
  let {
    flaggedContent: t,
    actions: a,
    guildMetadata: c
  } = e, u = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence");
  return 0 !== t.length || u && null != c ? (0, i.jsxs)("div", {
    className: r.classificationEvidenceContainer,
    children: [(0, i.jsx)(n.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: d.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), u && null != c ? (0, i.jsx)(s.default, {
      guildMetadata: c,
      actions: a
    }) : (0, i.jsx)(o.default, {
      flaggedContent: t
    })]
  }) : null
}