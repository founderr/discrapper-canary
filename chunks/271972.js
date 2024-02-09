"use strict";
n.r(t), n.d(t, {
  AttachmentListItemSizes: function() {
    return i
  },
  default: function() {
    return C
  }
});
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("974667"),
  d = n("77078"),
  c = n("81594"),
  f = n("149279"),
  p = n("659500"),
  m = n("645406"),
  h = n("49111"),
  E = n("782340"),
  S = n("864147");

function g(e) {
  e.stopPropagation()
}(l = i || (i = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.CLIP = 2] = "CLIP";
var C = s.forwardRef(function(e, t) {
  let {
    id: n,
    channelId: l,
    className: i,
    children: s,
    actions: r,
    handleEditModal: C,
    keyboardModeEnabled: T,
    onKeyDown: v,
    draftType: I,
    size: _ = 1
  } = e, {
    onFocus: y,
    ...A
  } = (0, u.useListItem)(n), {
    handleFocus: N,
    handleBlur: x
  } = (0, m.useFocusInside)(y), O = 0 === _, R = null != r;
  return (0, a.jsx)(d.FocusRing, {
    children: (0, a.jsx)("li", {
      ...A,
      onFocus: N,
      onBlur: x,
      onKeyDown: e => {
        if (T) {
          switch (e.which) {
            case h.KeyboardKeys.D:
              e.preventDefault(), c.default.remove(l, n, I);
              return;
            case h.KeyboardKeys.E:
              null != C && (e.preventDefault(), C(e));
              return;
            case h.KeyboardKeys.BACKSPACE:
              e.ctrlKey ? (e.preventDefault(), c.default.clearAll(l, I)) : (e.preventDefault(), c.default.remove(l, n, I));
              return;
            case h.KeyboardKeys.ARROW_UP:
              let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
              if (t) return;
              e.preventDefault(), p.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.FOCUS_MESSAGES, {
                atEnd: !0
              })
          }
          null == v || v(e)
        }
      },
      className: o(S.upload, i, {
        [S.sizeClip]: 2 === _
      }),
      ref: t,
      children: (0, a.jsxs)("div", {
        className: S.uploadContainer,
        children: [s, R ? (0, a.jsx)("div", {
          className: S.actionBarContainer,
          children: (0, a.jsx)("div", {
            className: o(S.actionBar, {
              [S.smallActionBar]: O
            }),
            onContextMenu: g,
            "aria-label": E.default.Messages.ATTACHMENT_UTILITIES,
            children: (0, a.jsx)(f.default, {
              className: o({
                [S.miniPopover]: O
              }),
              children: r
            })
          })
        }) : null]
      })
    })
  })
})