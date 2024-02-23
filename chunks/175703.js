"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("184727"),
  i = e => {
    let {
      entry: t,
      forceLightTheme: n,
      hideEditButton: i,
      children: r,
      onRequestOpen: o,
      onRequestClose: u
    } = e;
    return (0, l.jsx)(a.Popout, {
      onRequestOpen: o,
      onRequestClose: u,
      animation: a.Popout.Animation.NONE,
      position: "bottom",
      spacing: 4,
      align: "right",
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, l.jsx)(s.default, {
          entry: t,
          closePopout: a,
          forceLightTheme: n,
          hideEditButton: i
        })
      },
      children: r
    })
  }