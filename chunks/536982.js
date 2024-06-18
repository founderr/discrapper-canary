"use strict";
t.d(s, {
  Z: function() {
    return c
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(428760),
  r = t(689938),
  o = t(658514);

function c(e) {
  let {
    onChange: s,
    initialValue: t,
    maxWordCount: c,
    collapsed: d = !1
  } = e, [u, E] = i.useState(!d);
  return (0, n.jsx)(l.Collapsible, {
    isExpanded: u,
    collapsibleContent: (0, n.jsx)(a.Z, {
      onChangeText: s,
      maxWordCount: c,
      className: o.keywordTextAreaContainer,
      textAreaClassName: o.keywordTextArea,
      subtitleText: r.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_SUBTITLE,
      initialValue: t
    }),
    className: o.collapseable,
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, n.jsx)(l.Clickable, {
        onClick: e => {
          E(!u), s(e)
        },
        children: (0, n.jsxs)("div", {
          className: o.header,
          children: [(0, n.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: r.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_TITLE
          }), u ? (0, n.jsx)(l.ChevronSmallUpIcon, {
            size: "md",
            color: "currentColor",
            className: o.arrow
          }) : (0, n.jsx)(l.ChevronSmallDownIcon, {
            size: "md",
            color: "currentColor",
            className: o.arrow
          })]
        })
      })
    }
  })
}