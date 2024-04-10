"use strict";
i.r(t), i.d(t, {
  ClassificationEvidence: function() {
    return d
  }
});
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("219230"),
  s = i("205752"),
  o = i("621145"),
  r = i("689938"),
  c = i("411202");
let d = e => {
  let {
    flaggedContent: t,
    actions: i,
    guildMetadata: d
  } = e, u = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence");
  return 0 !== t.length || u && null != d ? (0, a.jsxs)("div", {
    className: c.classificationEvidenceContainer,
    children: [(0, a.jsx)(n.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: r.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), u && null != d ? (0, a.jsx)(s.default, {
      guildMetadata: d,
      actions: i
    }) : (0, a.jsx)(o.default, {
      flaggedContent: t
    })]
  }) : null
}