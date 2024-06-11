"use strict";
s.r(t), s.d(t, {
  OneWayToTwoWayLinkUpsell: function() {
    return c
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  l = s("243778"),
  r = s("921944"),
  o = s("689938"),
  d = s("832444");
let u = e => {
    let {
      markAsDismissed: t
    } = e;
    return n.useEffect(() => t(r.ContentDismissActionType.UNKNOWN), [t]), (0, a.jsx)(i.TextBadge, {
      className: d.newBadge,
      text: o.default.Messages.NEW
    })
  },
  c = e => {
    let {
      title: t,
      body: s,
      img: n,
      newIndicatorDismissibleContent: r,
      onClick: c
    } = e;
    return (0, a.jsxs)("div", {
      className: d.container,
      children: [n, (0, a.jsxs)("div", {
        className: d.textContainer,
        children: [(0, a.jsxs)("div", {
          className: d.headerText,
          children: [(0, a.jsx)(l.default, {
            contentTypes: [r],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: s
              } = e;
              return t === r ? (0, a.jsx)(u, {
                markAsDismissed: s
              }) : null
            }
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          children: s
        })]
      }), (0, a.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        onClick: c,
        className: d.reconnectButton,
        children: o.default.Messages.RECONNECT
      })]
    })
  }