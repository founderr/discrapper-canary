n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(579185),
  r = n(420212),
  o = n(407423);

function c(e) {
  let {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: s,
    closePopout: a,
    isHovered: r,
    ...o
  } = e;
  return i.useEffect(() => {
    !r && a()
  }, [a, r]), (0, l.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: s,
    children: t({
      closePopout: a,
      ...o
    })
  })
}
t.Z = i.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    children: u
  } = e, [d, h] = i.useState(!1), {
    isHovered: m,
    setIsHovered: E,
    onMouseEnter: p,
    onMouseLeave: g,
    cancelTimers: f
  } = (0, a.Z)(200, 300);

  function C(e) {
    "focus" !== e.type && !d && p()
  }

  function _() {
    !d && g()
  }

  function I(e) {
    f(), h(!d), (!m || d) && e()
  }
  i.useImperativeHandle(t, () => ({
    hidePopout() {
      E(!1), h(!1)
    }
  }), [E, h]);
  let x = m || d;
  return (0, l.jsx)(s.Popout, {
    shouldShow: x,
    animationPosition: "top",
    position: "top",
    align: "left",
    spacing: 16,
    onRequestClose: () => {
      E(!1), h(!1)
    },
    renderPopout: e => (0, l.jsx)(c, {
      isHovered: x,
      onFocus: () => h(!0),
      onMouseEnter: p,
      onMouseLeave: _,
      renderPopout: n,
      ...e
    }),
    children: e => {
      let {
        onClick: t,
        onKeyDown: n
      } = e;
      return (0, l.jsx)(l.Fragment, {
        children: u({
          onClick: e => I(() => t(e)),
          onKeyDown: e => {
            var t, l;
            return t = e, l = n, void((t.key === r.vn.ENTER || t.key === r.vn.SPACE) && I(() => l(t)))
          },
          className: o.actionBarButton,
          onMouseEnter: C,
          onMouseLeave: _,
          isActive: x
        })
      })
    }
  })
})