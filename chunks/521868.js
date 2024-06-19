n.d(t, {
  o: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(481060),
  r = n(788307),
  o = n(2052),
  c = n(785717),
  u = n(695346),
  d = n(689938),
  E = n(701747);

function h(e, t) {
  let s = (0, o.O)(),
    {
      trackUserProfileAction: h
    } = (0, c.KZ)();

  function _(e) {
    e.stopPropagation(), u.Ok.updateSetting(void 0)
  }

  function I() {
    h({
      action: "PRESS_SET_CUSTOM_STATUS"
    }), (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, 211065));
      return t => (0, i.jsx)(e, {
        sourceAnalyticsContext: s,
        ...t
      })
    })
  }
  if (null != e) {
    let n = null != e.emoji ? t => {
      let {
        className: n
      } = t;
      return (0, i.jsx)(r.I, {
        className: n,
        emoji: e.emoji,
        animate: !0,
        hideTooltip: !0
      })
    } : void 0;
    return (0, i.jsx)(a.MenuItem, {
      id: "edit-custom-status",
      label: d.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      icon: n,
      focusedClassName: t,
      showIconFirst: !0,
      hint: e => (0, i.jsx)(a.Clickable, {
        ...e,
        onClick: _,
        tabIndex: -1,
        children: (0, i.jsx)(a.CircleXIcon, {
          size: "sm",
          color: "currentColor"
        })
      }),
      action: I
    })
  }
  return (0, i.jsx)(a.MenuItem, {
    id: "set-custom-status",
    focusedClassName: t,
    label: d.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
    icon: e => (0, i.jsx)("div", {
      className: l()(E.customEmojiPlaceholder, e)
    }),
    action: I,
    showIconFirst: !0
  })
}