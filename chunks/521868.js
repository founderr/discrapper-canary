"use strict";
a.r(t), a.d(t, {
  useCustomStatusMenuItem: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("788307"),
  o = a("2052"),
  u = a("785717"),
  d = a("695346"),
  c = a("696202"),
  f = a("689938"),
  E = a("119645");

function h(e, t) {
  let s = (0, o.useAnalyticsContext)(),
    {
      trackUserProfileAction: h
    } = (0, u.useUserProfileAnalyticsContext)();

  function _(e) {
    e.stopPropagation(), d.CustomStatusSetting.updateSetting(void 0)
  }

  function C() {
    h({
      action: "PRESS_SET_CUSTOM_STATUS"
    }), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("47484")]).then(a.bind(a, "211065"));
      return t => (0, n.jsx)(e, {
        sourceAnalyticsContext: s,
        ...t
      })
    })
  }
  if (null != e) {
    let a = null != e.emoji ? t => {
      let {
        className: a
      } = t;
      return (0, n.jsx)(r.ActivityEmoji, {
        className: a,
        emoji: e.emoji,
        animate: !0,
        hideTooltip: !0
      })
    } : void 0;
    return (0, n.jsx)(i.MenuItem, {
      id: "edit-custom-status",
      label: f.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      icon: a,
      focusedClassName: t,
      showIconFirst: !0,
      hint: e => (0, n.jsx)(i.Clickable, {
        ...e,
        onClick: _,
        tabIndex: -1,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 18
        })
      }),
      action: C
    })
  }
  return (0, n.jsx)(i.MenuItem, {
    id: "set-custom-status",
    focusedClassName: t,
    label: f.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
    icon: e => (0, n.jsx)("div", {
      className: l()(E.customEmojiPlaceholder, e)
    }),
    action: C,
    showIconFirst: !0
  })
}