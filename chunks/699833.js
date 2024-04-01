"use strict";
n.r(t), n.d(t, {
  SafetyPolicyNotice: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var l = n("913527"),
  a = n.n(l),
  i = n("692547"),
  r = n("495056"),
  o = n("481060"),
  u = n("800530"),
  d = n("689938"),
  c = n("493345");
let E = e => a()().diff(a().unix(e), "days");

function f(e) {
  var t, l, a, f, _;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let T = e.message.embeds[0],
    I = null !== (a = null === (t = T.fields) || void 0 === t ? void 0 : t.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.CLASSIFICATION_ID)) && void 0 !== a ? a : void 0,
    m = null !== (f = null == I ? void 0 : I.rawValue) && void 0 !== f ? f : void 0,
    N = null !== (_ = null === (l = T.fields) || void 0 === l ? void 0 : l.find(e => e.rawName === u.SafetyHubPolicyNoticeKeys.INCIDENT_TIMESTAMP)) && void 0 !== _ ? _ : void 0,
    p = null == N || null == N.rawValue ? void 0 : parseFloat(N.rawValue);
  return null == m || null == p ? null : (0, s.jsxs)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("18831"), n.e("34842")]).then(n.bind(n, "41164"));
        return t => (0, s.jsx)(e, {
          classificationId: m,
          source: u.SafetyHubAnalyticsActionSource.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: c.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: c.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: c.headerRow,
        children: [(0, s.jsx)(r.WarningIcon, {
          className: c.warningIcon,
          color: i.default.colors.STATUS_DANGER
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_HEADER
        })]
      }), (0, s.jsx)("div", {
        className: c.incidentTiming,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: E(p)
          })
        })
      }), (0, s.jsx)("div", {
        className: c.noticeBody,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: d.default.Messages.SAFETY_POLICY_NOTICE_BODY
        })
      })]
    }), (0, s.jsx)("div", {
      className: c.footerContainer,
      children: (0, s.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        className: c.detailsButton,
        color: o.Button.Colors.WHITE,
        children: d.default.Messages.SAFETY_POLICY_NOTICE_BUTTON
      })
    })]
  })
}