"use strict";
t(789020);
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(630388),
  a = t(402148),
  r = t(981631),
  o = t(689938),
  c = t(716226);
s.Z = e => {
  let {
    role: s
  } = e;
  return (0, l.yE)(s.flags, r.aO5.IN_PROMPT) ? (0, a.F)(s) ? (0, n.jsxs)("div", {
    className: c.notice,
    children: [(0, n.jsx)(i.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: c.noticeIconPowerful
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: o.Z.Messages.ROLE_IN_PROMPT_POWERFUL_NOTICE_TEXT
    })]
  }) : (0, n.jsxs)("div", {
    className: c.notice,
    children: [(0, n.jsx)(i.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: c.noticeIcon
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: o.Z.Messages.ROLE_IN_PROMPT_NOTICE_TEXT
    })]
  }) : null
}