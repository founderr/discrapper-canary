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
  o = n("960863");

function u(e) {
  let {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: s,
    closePopout: i,
    isHovered: r,
    ...o
  } = e;
  return a.useEffect(() => {
    !r && i()
  }, [i, r]), (0, l.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: s,
    children: t({
      closePopout: i,
      ...o
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

  function g(e) {
    "focus" !== e.type && !d && m()
  }

  function S() {
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
    renderPopout: e => (0, l.jsx)(u, {
      isHovered: _,
      onFocus: () => c(!0),
      onMouseEnter: m,
      onMouseLeave: S,
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
          className: o.actionBarButton,
          onMouseEnter: g,
          onMouseLeave: S,
          isActive: _
        })
      })
    }
  })
}