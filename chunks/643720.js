var l = n(735250),
  i = n(470079),
  s = n(390322),
  a = n(381871);
t.Z = e => {
  let {
    isHovered: t,
    closePopout: n,
    onMouseEnter: r,
    onMouseLeave: o,
    onFocus: c,
    channel: u
  } = e;
  return i.useEffect(() => {
    !t && n()
  }, [n, t]), (0, l.jsx)(s.Z, {
    children: (0, l.jsx)("div", {
      onMouseEnter: r,
      onMouseLeave: o,
      children: (0, l.jsx)(a.Z, {
        channel: u,
        closePopout: n,
        onFocus: c
      })
    })
  })
}