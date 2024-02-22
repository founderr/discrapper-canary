"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("788220"),
  r = n("894282"),
  u = n("960863");

function o(e) {
  let {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: s,
    closePopout: i,
    isHovered: r,
    ...u
  } = e;
  return a.useEffect(() => {
    !r && i()
  }, [i, r]), (0, l.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: s,
    children: t({
      closePopout: i,
      ...u
    })
  })
}

function d(e) {
  let {
    renderPopout: t,
    children: n
  } = e, [d, c] = a.useState(!1), {
    isHovered: f,
    setIsHovered: h,
    onMouseEnter: m,
    onMouseLeave: p,
    cancelTimers: E
  } = (0, i.default)(200, 300);

  function S(e) {
    "focus" !== e.type && !d && m()
  }

  function g() {
    !d && p()
  }

  function C(e) {
    E(), c(!d), (!f || d) && e()
  }
  let _ = f || d;
  return (0, l.jsx)(s.Popout, {
    shouldShow: _,
    animationPosition: "top",
    position: "top",
    align: "left",
    spacing: 16,
    onRequestClose: () => {
      h(!1), c(!1)
    },
    renderPopout: e => (0, l.jsx)(o, {
      isHovered: _,
      onFocus: () => c(!0),
      onMouseEnter: m,
      onMouseLeave: g,
      renderPopout: t,
      ...e
    }),
    children: e => {
      let {
        onClick: t,
        onKeyDown: a
      } = e;
      return (0, l.jsx)(l.Fragment, {
        children: n({
          onClick: e => C(() => t(e)),
          onKeyDown: e => {
            var t, n;
            return t = e, n = a, void((t.key === r.KeyboardKeysUpdated.ENTER || t.key === r.KeyboardKeysUpdated.SPACE) && C(() => n(t)))
          },
          className: u.actionBarButton,
          onMouseEnter: S,
          onMouseLeave: g,
          isActive: _
        })
      })
    }
  })
}