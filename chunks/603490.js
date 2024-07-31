n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(873546),
  r = n(481060),
  o = n(130402),
  c = n(404975),
  u = n(185923),
  d = n(689938),
  h = n(480283);

function m(e) {
  let {
channel: t,
message: n,
togglePopout: a,
renderEmojiPicker: m,
shouldShow: p,
buttonClassName: _,
iconClassName: f
  } = e;
  return (0, i.jsx)(r.Popout, {
animation: r.Popout.Animation.FADE,
renderPopout: e => {
  let {
    closePopout: i
  } = e;
  return m(t, n, i, !1);
},
shouldShow: p,
onRequestClose: a,
position: l.tq ? 'top' : 'left',
align: l.tq ? 'center' : 'top',
children: (e, t) => {
  let {
    onClick: n,
    ...l
  } = e, {
    isShown: m
  } = t;
  return (0, i.jsx)(r.Tooltip, {
    disableTooltipPointerEvents: !1,
    text: d.Z.Messages.ADD_REACTION,
    color: r.TooltipColors.PRIMARY,
    'aria-label': d.Z.Messages.ADD_REACTION,
    hideOnClick: !0,
    tooltipClassName: h.tooltip,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onClick: p
      } = e;
      return (0, i.jsx)(c.zx, {
        className: _,
        onMouseEnter: () => {
          null == t || t(), (0, o.x)(u.qR.MessageContextMenuMouseEntered);
        },
        onMouseLeave: n,
        onClick: () => {
          a(), null == p || p();
        },
        'aria-label': d.Z.Messages.ADD_REACTION,
        selected: m,
        ...l,
        children: (0, i.jsx)(r.ReactionIcon, {
          size: 'sm',
          color: 'currentColor',
          className: s()(h.icon, f)
        })
      });
    }
  }, 'add-reaction');
}
  });
}