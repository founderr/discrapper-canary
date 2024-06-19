n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(873546),
  s = n(481060),
  a = n(130402),
  r = n(404975),
  o = n(185923),
  c = n(689938),
  u = n(613861);

function d(e) {
  let {
    channel: t,
    message: n,
    togglePopout: d,
    renderEmojiPicker: h,
    shouldShow: m
  } = e;
  return (0, l.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return h(t, n, l, !1)
    },
    shouldShow: m,
    onRequestClose: d,
    position: i.tq ? "top" : "left",
    align: i.tq ? "center" : "top",
    children: (e, t) => {
      let {
        onClick: n,
        ...i
      } = e, {
        isShown: h
      } = t;
      return (0, l.jsx)(s.Tooltip, {
        disableTooltipPointerEvents: !1,
        text: c.Z.Messages.ADD_REACTION,
        color: s.TooltipColors.PRIMARY,
        "aria-label": c.Z.Messages.ADD_REACTION,
        hideOnClick: !0,
        tooltipClassName: u.tooltip,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n,
            onClick: m
          } = e;
          return (0, l.jsx)(r.zx, {
            onMouseEnter: () => {
              null == t || t(), (0, a.x)(o.qR.MessageContextMenuMouseEntered)
            },
            onMouseLeave: n,
            onClick: () => {
              d(), null == m || m()
            },
            "aria-label": c.Z.Messages.ADD_REACTION,
            selected: h,
            ...i,
            children: (0, l.jsx)(s.ReactionIcon, {
              size: "sm",
              color: "currentColor",
              className: u.icon
            })
          })
        }
      }, "add-reaction")
    }
  })
}