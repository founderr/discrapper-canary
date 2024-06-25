"use strict";
n.d(t, {
  q: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(91192),
  _ = n(481060),
  c = n(166459),
  d = n(404975),
  E = n(585483),
  I = n(43085),
  T = n(981631),
  h = n(689938),
  f = n(605590);

function S(e) {
  e.stopPropagation()
}(i = r || (r = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.CLIP = 2] = "CLIP";
t.Z = o.forwardRef(function(e, t) {
  let {
    id: n,
    channelId: i,
    className: r,
    children: o,
    actions: a,
    handleEditModal: A,
    keyboardModeEnabled: N,
    onKeyDown: m,
    draftType: O,
    size: p = 1
  } = e, {
    onFocus: R,
    ...g
  } = (0, u.JA)(n), {
    handleFocus: C,
    handleBlur: v
  } = (0, I.b)(R), L = 0 === p, D = null != a;
  return (0, s.jsx)(_.FocusRing, {
    children: (0, s.jsx)("li", {
      ...g,
      onFocus: C,
      onBlur: v,
      onKeyDown: e => {
        if (!!N) {
          switch (e.which) {
            case T.yXg.D:
              e.preventDefault(), c.Z.remove(i, n, O);
              return;
            case T.yXg.E:
              null != A && (e.preventDefault(), A(e));
              return;
            case T.yXg.BACKSPACE:
              e.ctrlKey ? (e.preventDefault(), c.Z.clearAll(i, O)) : (e.preventDefault(), c.Z.remove(i, n, O));
              return;
            case T.yXg.ARROW_UP:
              if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
              e.preventDefault(), E.S.dispatchToLastSubscribed(T.CkL.FOCUS_MESSAGES, {
                atEnd: !0
              })
          }
          null == m || m(e)
        }
      },
      className: l()(f.upload, r, {
        [f.sizeClip]: 2 === p
      }),
      ref: t,
      children: (0, s.jsxs)("div", {
        className: f.uploadContainer,
        children: [o, D ? (0, s.jsx)("div", {
          className: f.actionBarContainer,
          children: (0, s.jsx)("div", {
            className: l()(f.actionBar, {
              [f.smallActionBar]: L
            }),
            onContextMenu: S,
            "aria-label": h.Z.Messages.ATTACHMENT_UTILITIES,
            children: (0, s.jsx)(d.ZP, {
              className: l()({
                [f.miniPopover]: L
              }),
              children: a
            })
          })
        }) : null]
      })
    })
  })
})