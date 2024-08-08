n.d(t, {
  Z: function() {
return E;
  },
  s: function() {
return _;
  }
});
var i = n(735250),
  s = n(120356),
  a = n.n(s),
  r = n(330711),
  l = n(481060),
  o = n(377171),
  c = n(951394),
  u = n(917990),
  d = n(172648);

function _(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: s,
tooltipColor: _,
icon: E,
iconProps: I,
onClick: m,
onTooltipShow: T,
onTooltipHide: h,
disabled: N,
dangerous: f,
separator: C,
sparkle: p,
showNewBadge: g,
buttonClassName: S,
children: A,
...R
  } = e, {
canShowReactionsOnMessageHover: O
  } = u.Z.useExperiment({
location: 'HoverBar'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsx)(l.Tooltip, {
text: null != s ? s : t,
color: null != _ ? _ : l.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: T,
onTooltipHide: h,
hideOnClick: !0,
tooltipClassName: d.tooltip,
children: e => {
  let {
    onMouseEnter: s,
    onMouseLeave: u,
    onClick: _
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(c.zx, {
        className: a()(S, {
          [d.hoverBarButton]: O
        }),
        onMouseEnter: s,
        onMouseLeave: u,
        onClick: e => {
          null == _ || _(), m(e);
        },
        'aria-label': null != n ? n : t,
        disabled: N,
        dangerous: f,
        ...R,
        children: [
          null != E ? (0, i.jsx)(E, {
            className: d.icon,
            color: 'currentColor',
            ...I
          }) : null,
          null != A ? (0, i.jsx)('div', {
            className: a()(d.icon, d.buttonContent),
            children: A
          }) : null,
          p && (0, i.jsx)(l.LottieSparkle, {}),
          g && (0, i.jsx)(l.TextBadge, {
            text: r.Z.Messages.NEW,
            color: o.Z.BG_BRAND,
            className: d.newBadge
          })
        ]
      }),
      C && (0, i.jsx)(c.Z0, {})
    ]
  });
}
  });
}

function E(e) {
  let {
children: t,
...n
  } = e, {
canShowReactionsOnMessageHover: s
  } = u.Z.useExperiment({
location: 'HoverBar'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsx)(c.ZP, {
className: a()(n.className, d.popover, {
  [d.popoverReactionHoverBar]: s
}),
children: t
  });
}