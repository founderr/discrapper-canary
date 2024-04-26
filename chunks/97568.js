"use strict";
a.r(t), a.d(t, {
  ClassificationEvidence: function() {
    return d
  }
});
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("219230"),
  s = a("205752"),
  o = a("621145"),
  r = a("689938"),
  c = a("579054");
let d = e => {
  let {
    flaggedContent: t,
    actions: a,
    guildMetadata: d
  } = e, u = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence");
  return 0 !== t.length || u && null != d ? (0, i.jsxs)("div", {
    className: c.classificationEvidenceContainer,
    children: [(0, i.jsx)(n.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: r.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), u && null != d ? (0, i.jsx)(s.default, {
      guildMetadata: d,
      actions: a
    }) : (0, i.jsx)(o.default, {
      flaggedContent: t
    })]
  }) : null
}