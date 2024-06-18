"use strict";
t.d(s, {
  Z: function() {
    return d
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(457414),
  r = t(311173),
  o = t(689938),
  c = t(463930);

function d(e) {
  var s;
  let {
    rule: t,
    onChangeRule: d,
    collapsed: u = !1
  } = e, [E, _] = i.useState(!u), I = i.useCallback(() => {
    _(!E)
  }, [E, _]), T = i.useCallback(e => {
    d({
      ...t,
      triggerMetadata: {
        ...t.triggerMetadata,
        regexPatterns: e
      }
    })
  }, [d, t]);
  return (0, a.S)(t.triggerType) ? (0, n.jsx)(l.Collapsible, {
    isExpanded: E,
    collapsibleContent: (0, n.jsx)(r.Z, {
      rule: t,
      onChangeText: T,
      className: c.textAreaContainer,
      initialValue: null === (s = t.triggerMetadata) || void 0 === s ? void 0 : s.regexPatterns
    }),
    className: c.collapseable,
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, n.jsx)(l.Clickable, {
        onClick: e => {
          I(), s(e)
        },
        children: (0, n.jsxs)("div", {
          className: c.header,
          children: [(0, n.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: o.Z.Messages.GUILD_AUTOMOD_REGEX_TEXTAREA_TITLE
          }), E ? (0, n.jsx)(l.ChevronSmallUpIcon, {
            size: "md",
            color: "currentColor",
            className: c.arrow
          }) : (0, n.jsx)(l.ChevronSmallDownIcon, {
            size: "md",
            color: "currentColor",
            className: c.arrow
          })]
        })
      })
    }
  }) : null
}