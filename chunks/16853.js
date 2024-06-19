var l = n(735250);
n(470079);
var i = n(481060),
  s = n(643560);
t.Z = e => {
  let {
    entry: t,
    forceLightTheme: n,
    hideEditButton: a,
    children: r,
    onRequestOpen: o,
    onRequestClose: c
  } = e;
  return (0, l.jsx)(i.Popout, {
    onRequestOpen: o,
    onRequestClose: c,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, l.jsx)(s.default, {
        entry: t,
        closePopout: i,
        forceLightTheme: n,
        hideEditButton: a
      })
    },
    children: r
  })
}