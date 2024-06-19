n.d(t, {
  i: function() {
    return E
  }
});
var s = n(735250);
n(470079);
var i = n(913527),
  l = n.n(i),
  a = n(692547),
  r = n(481060),
  o = n(800530),
  c = n(689938),
  u = n(530271);
let d = e => l()().diff(l().unix(e), "days");

function E(e) {
  var t, i, l, E, _;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let I = e.message.embeds[0],
    T = null !== (l = null === (t = I.fields) || void 0 === t ? void 0 : t.find(e => e.rawName === o.Cg.CLASSIFICATION_ID)) && void 0 !== l ? l : void 0,
    N = null !== (E = null == T ? void 0 : T.rawValue) && void 0 !== E ? E : void 0,
    m = null !== (_ = null === (i = I.fields) || void 0 === i ? void 0 : i.find(e => e.rawName === o.Cg.INCIDENT_TIMESTAMP)) && void 0 !== _ ? _ : void 0,
    h = null == m || null == m.rawValue ? void 0 : parseFloat(m.rawValue);
  return null == N || null == h ? null : (0, s.jsxs)(r.Clickable, {
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("18831"), n.e("34842")]).then(n.bind(n, 41164));
        return t => (0, s.jsx)(e, {
          classificationId: N,
          source: o.s.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: u.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: u.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: u.headerRow,
        children: [(0, s.jsx)(r.WarningIcon, {
          className: u.warningIcon,
          color: a.Z.colors.STATUS_DANGER
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/semibold",
          children: c.Z.Messages.SAFETY_POLICY_NOTICE_HEADER
        })]
      }), (0, s.jsx)("div", {
        className: u.incidentTiming,
        children: (0, s.jsx)(r.Text, {
          variant: "text-xs/medium",
          children: c.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: d(h)
          })
        })
      }), (0, s.jsx)("div", {
        className: u.noticeBody,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.Z.Messages.SAFETY_POLICY_NOTICE_BODY
        })
      })]
    }), (0, s.jsx)("div", {
      className: u.footerContainer,
      children: (0, s.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        className: u.detailsButton,
        color: r.Button.Colors.WHITE,
        children: c.Z.Messages.SAFETY_POLICY_NOTICE_BUTTON
      })
    })]
  })
}