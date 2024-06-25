n.d(t, {
  Z: function() {
    return _
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(920906),
  r = n(399606),
  o = n(481060),
  c = n(511010),
  u = n(446183),
  d = n(677281),
  h = n(765104),
  m = n(477291),
  E = n(531578),
  p = n(959517),
  g = n(689938),
  f = n(153023);

function C(e) {
  let {
    summary: t,
    channel: n
  } = e, i = (0, r.e7)([h.Z], () => h.Z.summaryFeedback(t)), s = (e, l) => {
    e.stopPropagation(), (0, m.Z)({
      summary: t,
      channel: n,
      rating: l
    })
  }, c = (0, a.useTransition)(null == i, {
    enter: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  });
  return (0, l.jsx)(l.Fragment, {
    children: c((e, t) => t ? (0, l.jsx)("div", {
      className: f.summaryFeedbackWrapper,
      children: (0, l.jsxs)(a.animated.div, {
        style: e,
        className: f.summaryFeedback,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: g.Z.Messages.SUMMARY_FEEDBACK
        }), (0, l.jsx)(o.Clickable, {
          onClick: e => s(e, E.aZ.GOOD),
          children: (0, l.jsx)(d.Z, {
            className: f.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, l.jsx)(o.Clickable, {
          onClick: e => s(e, E.aZ.BAD),
          children: (0, l.jsx)(u.Z, {
            className: f.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function _(e) {
  var t, n;
  let i, {
      item: a,
      channel: u,
      index: d
    } = e,
    m = (0, r.e7)([h.Z], () => h.Z.selectedSummary(u.id));
  if (null == m) return null;
  let E = null != a.unreadId,
    g = null != a.content;
  return i = g ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.TopicsIcon, {
      size: "xs",
      color: "currentColor",
      className: f.summaryStartIcon
    }), a.content]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(C, {
      summary: m,
      channel: u
    }), (0, l.jsx)(o.TopicsIcon, {
      size: "xs",
      color: "currentColor",
      className: f.summaryEndIcon
    })]
  }), (0, l.jsx)(c.Z, {
    className: s()(f.summaryDivider, g ? f.summaryDividerStart : f.summaryDividerEnd),
    contentClassName: g ? f.summaryStartContent : f.summaryEndContent,
    isUnread: E,
    id: E ? p.j1 : void 0,
    children: i
  }, "divider-".concat(null !== (n = null !== (t = a.contentKey) && void 0 !== t ? t : a.unreadId) && void 0 !== n ? n : d))
}