n.d(t, {
  g: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var i = n(913527),
  l = n.n(i),
  a = n(692547),
  r = n(481060),
  o = n(788080),
  c = n(800530),
  u = n(689938),
  d = n(748737);
let E = e => l()().diff(l().unix(e), "days");

function _(e) {
  let {
    classificationId: t
  } = e;
  return (0, s.jsx)(r.Anchor, {
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("18831"), n.e("34842")]).then(n.bind(n, 41164));
        return n => (0, s.jsx)(e, {
          classificationId: t,
          source: c.s.SystemDM,
          transitionState: n.transitionState,
          onClose: n.onClose
        })
      })
    },
    className: d.detailsButton,
    children: u.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
  })
}

function I(e) {
  let {
    learnMoreLink: t
  } = e;
  return (0, s.jsx)(r.Anchor, {
    className: d.detailsButton,
    href: t,
    children: u.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
  })
}

function T(e) {
  let {
    ctaType: t,
    classificationId: n,
    learnMoreLink: i
  } = e;
  switch (t) {
    case c.wo.POLICY_VIOLATION_DETAIL:
      if (null == n) return null;
      return (0, s.jsx)(_, {
        classificationId: n
      });
    case c.wo.LEARN_MORE_LINK:
      if (null == i) return null;
      return (0, s.jsx)(I, {
        learnMoreLink: i
      });
    default:
      return null
  }
}

function m(e) {
  let {
    iconType: t
  } = e, n = {
    default: (0, s.jsx)(r.AnnouncementsIcon, {
      size: "xs",
      color: a.Z.colors.TEXT_LINK.css
    }),
    danger: (0, s.jsx)(r.WarningIcon, {
      color: a.Z.colors.STATUS_DANGER
    })
  };
  return null != t && t in n ? (0, s.jsx)("div", {
    className: d.icon,
    children: n[t]
  }) : null
}

function N(e) {
  let {
    children: t,
    theme: n
  } = e, i = {
    default: d.defaultFooterContainer,
    danger: d.dangerFooterContainer
  };
  return (0, s.jsx)("div", {
    className: i[null != n ? n : "default"],
    children: t
  })
}

function h(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let i = (0, o.fr)(e.embed);
  return null == i ? null : (0, s.jsxs)(r.Clickable, {
    className: d.safetyPolicyNoticeContainer,
    children: [(0, s.jsxs)("div", {
      className: d.noticeContent,
      children: [(0, s.jsxs)("div", {
        className: d.headerRow,
        children: [(0, s.jsx)(m, {
          iconType: i.icon
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/semibold",
          children: i.header
        })]
      }), (0, s.jsx)("div", {
        className: d.incidentTiming,
        children: (0, s.jsx)(r.Text, {
          variant: "text-xs/medium",
          children: u.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({
            daysAgo: E(null !== (n = i.timestamp) && void 0 !== n ? n : 0)
          })
        })
      }), (0, s.jsx)("div", {
        className: d.noticeBody,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: i.body
        })
      })]
    }), (0, s.jsx)(N, {
      theme: i.theme,
      children: null === (t = i.ctas) || void 0 === t ? void 0 : t.map(e => (0, s.jsx)(T, {
        ctaType: e,
        classificationId: i.classification_id,
        learnMoreLink: i.learn_more_link
      }, e))
    })]
  })
}