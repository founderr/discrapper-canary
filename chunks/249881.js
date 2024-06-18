"use strict";
n.d(t, {
  t: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(243778),
  a = n(921944),
  l = n(689938),
  u = n(832444);
let _ = e => {
    let {
      markAsDismissed: t
    } = e;
    return r.useEffect(() => t(a.L.UNKNOWN), [t]), (0, i.jsx)(s.TextBadge, {
      className: u.newBadge,
      text: l.Z.Messages.NEW
    })
  },
  c = e => {
    let {
      title: t,
      body: n,
      img: r,
      newIndicatorDismissibleContent: a,
      onClick: c
    } = e;
    return (0, i.jsxs)("div", {
      className: u.container,
      children: [r, (0, i.jsxs)("div", {
        className: u.textContainer,
        children: [(0, i.jsxs)("div", {
          className: u.headerText,
          children: [(0, i.jsx)(o.Z, {
            contentTypes: [a],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === a ? (0, i.jsx)(_, {
                markAsDismissed: n
              }) : null
            }
          }), (0, i.jsx)(s.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, i.jsx)(s.Button, {
        size: s.ButtonSizes.MEDIUM,
        onClick: c,
        className: u.reconnectButton,
        children: l.Z.Messages.RECONNECT
      })]
    })
  }