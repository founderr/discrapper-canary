"use strict";
a.r(t), a.d(t, {
  AttachmentListItemSizes: function() {
    return s
  },
  default: function() {
    return x
  }
});
var l, s, n = a("37983"),
  i = a("884691"),
  r = a("414456"),
  o = a.n(r),
  d = a("974667"),
  u = a("77078"),
  c = a("81594"),
  m = a("149279"),
  h = a("659500"),
  p = a("645406"),
  f = a("49111"),
  g = a("782340"),
  v = a("864147");

function M(e) {
  e.stopPropagation()
}(l = s || (s = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.CLIP = 2] = "CLIP";
var x = i.forwardRef(function(e, t) {
  let {
    id: a,
    channelId: l,
    className: s,
    children: i,
    actions: r,
    handleEditModal: x,
    keyboardModeEnabled: E,
    onKeyDown: I,
    draftType: L,
    size: A = 1
  } = e, {
    onFocus: S,
    ...T
  } = (0, d.useListItem)(a), {
    handleFocus: j,
    handleBlur: C
  } = (0, p.useFocusInside)(S), N = 0 === A, _ = null != r;
  return (0, n.jsx)(u.FocusRing, {
    children: (0, n.jsx)("li", {
      ...T,
      onFocus: j,
      onBlur: C,
      onKeyDown: e => {
        if (E) {
          switch (e.which) {
            case f.KeyboardKeys.D:
              e.preventDefault(), c.default.remove(l, a, L);
              return;
            case f.KeyboardKeys.E:
              null != x && (e.preventDefault(), x(e));
              return;
            case f.KeyboardKeys.BACKSPACE:
              e.ctrlKey ? (e.preventDefault(), c.default.clearAll(l, L)) : (e.preventDefault(), c.default.remove(l, a, L));
              return;
            case f.KeyboardKeys.ARROW_UP:
              let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
              if (t) return;
              e.preventDefault(), h.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.FOCUS_MESSAGES, {
                atEnd: !0
              })
          }
          null == I || I(e)
        }
      },
      className: o(v.upload, s, {
        [v.sizeClip]: 2 === A
      }),
      ref: t,
      children: (0, n.jsxs)("div", {
        className: v.uploadContainer,
        children: [i, _ ? (0, n.jsx)("div", {
          className: v.actionBarContainer,
          children: (0, n.jsx)("div", {
            className: o(v.actionBar, {
              [v.smallActionBar]: N
            }),
            onContextMenu: M,
            "aria-label": g.default.Messages.ATTACHMENT_UTILITIES,
            children: (0, n.jsx)(m.default, {
              className: o({
                [v.miniPopover]: N
              }),
              children: r
            })
          })
        }) : null]
      })
    })
  })
})