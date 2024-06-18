"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(907040),
  a = n(28546),
  l = n(401227),
  u = n(872635),
  _ = n(185923),
  c = n(632946);

function d(e) {
  var t;
  let {
    editorRef: n,
    options: d,
    channel: E
  } = e, I = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), T = r.useCallback((e, t) => {
    let i = n.current;
    null != e && null != i && i.insertEmoji(e, t, !1), t && (0, a._Q)()
  }, [n]);
  return null == I ? null : (0, i.jsxs)("div", {
    id: "slate-toolbar",
    className: c.staticToolbar,
    children: [(0, i.jsx)("div", {
      className: c.staticButtons,
      children: (0, i.jsx)(u.I, {
        editorRef: n,
        options: d,
        iconClassName: c.staticIcon,
        dividerClassName: c.staticDivider
      })
    }), (0, i.jsx)(s.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(o.Z, {
          persistSearch: !0,
          channel: E,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            T(e, n), n && t()
          },
          pickerIntention: _.Hz.COMMUNITY_CONTENT
        })
      },
      position: "bottom",
      animation: s.Popout.Animation.NONE,
      align: "left",
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, i.jsx)(l.Z, {
          ...e,
          active: n,
          className: c.emojiButton,
          tabIndex: 0
        })
      }
    })]
  })
}