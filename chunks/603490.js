n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(873546),
  l = n(481060),
  o = n(130402),
  c = n(404975),
  u = n(185923),
  d = n(689938),
  _ = n(480283);

function E(e) {
  let {
channel: t,
message: n,
togglePopout: s,
renderEmojiPicker: E,
shouldShow: I,
buttonClassName: m,
iconClassName: T
  } = e;
  return (0, i.jsx)(l.Popout, {
animation: l.Popout.Animation.FADE,
renderPopout: e => {
  let {
    closePopout: i
  } = e;
  return E(t, n, i, !1);
},
shouldShow: I,
onRequestClose: s,
position: r.tq ? 'top' : 'left',
align: r.tq ? 'center' : 'top',
children: (e, t) => {
  let {
    onClick: n,
    ...r
  } = e, {
    isShown: E
  } = t;
  return (0, i.jsx)(l.Tooltip, {
    disableTooltipPointerEvents: !1,
    text: d.Z.Messages.ADD_REACTION,
    color: l.TooltipColors.PRIMARY,
    'aria-label': d.Z.Messages.ADD_REACTION,
    hideOnClick: !0,
    tooltipClassName: _.tooltip,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onClick: I
      } = e;
      return (0, i.jsx)(c.zx, {
        className: m,
        onMouseEnter: () => {
          null == t || t(), (0, o.x)(u.qR.MessageContextMenuMouseEntered);
        },
        onMouseLeave: n,
        onClick: () => {
          s(), null == I || I();
        },
        'aria-label': d.Z.Messages.ADD_REACTION,
        selected: E,
        ...r,
        children: (0, i.jsx)(l.ReactionIcon, {
          size: 'sm',
          color: 'currentColor',
          className: a()(_.icon, T)
        })
      });
    }
  }, 'add-reaction');
}
  });
}