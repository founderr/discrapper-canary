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
  c = n(404975),
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
channel: m,
message: T,
onClick: h,
onTooltipShow: N,
onTooltipHide: C,
key: f,
disabled: p,
dangerous: g,
separator: S,
sparkle: A,
showNewBadge: R,
buttonClassName: O,
children: x,
...M
  } = e, {
canShowReactionsOnMessageHover: v
  } = u.Z.useExperiment({
location: 'HoverBar'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsx)(l.Tooltip, {
text: null != s ? s : t,
color: null != _ ? _ : l.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: N,
onTooltipHide: C,
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
        className: a()(v ? d.hoverBarButton : null, O),
        onMouseEnter: s,
        onMouseLeave: u,
        onClick: e => {
          null == _ || _(), h(m, T, e);
        },
        'aria-label': null != n ? n : t,
        disabled: p,
        dangerous: g,
        ...M,
        children: [
          null != E ? (0, i.jsx)(E, {
            className: d.icon,
            color: 'currentColor',
            ...I
          }) : null,
          null != x ? (0, i.jsx)('div', {
            className: a()(d.icon, d.buttonContent),
            children: x
          }) : null,
          A && (0, i.jsx)(l.LottieSparkle, {}),
          R && (0, i.jsx)(l.TextBadge, {
            text: r.Z.Messages.NEW,
            color: o.Z.BG_BRAND,
            className: d.newBadge
          })
        ]
      }),
      S && (0, i.jsx)(c.Z0, {})
    ]
  });
}
  }, f);
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