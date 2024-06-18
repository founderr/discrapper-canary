"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(782568),
  o = n(689938),
  a = n(293427);
let l = e => {
  let {
    data: {
      url: t,
      link_text: n,
      link_description: o,
      is_localized: l
    }
  } = e;
  return l ? (0, i.jsxs)(r.Clickable, {
    role: "link",
    className: a.linkButton,
    onClick: () => {
      (0, s.Z)(t)
    },
    children: [(0, i.jsxs)("div", {
      className: a.linkTextContainer,
      children: [(0, i.jsx)(r.Text, {
        className: a.__invalid_linkText,
        variant: "text-md/semibold",
        children: n
      }), null != o && "" !== o && (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: o
      })]
    }), (0, i.jsx)(r.WindowLaunchIcon, {
      size: "md",
      color: "currentColor",
      className: a.linkIcon
    })]
  }) : null
};

function u(e) {
  let {
    elements: t
  } = e;
  if (null == t || 0 === t.length || null == t.find(e => {
      let {
        data: t
      } = e;
      return t.is_localized
    })) return null;
  let n = t.map((e, t) => {
      let {
        data: n
      } = e;
      return (0, i.jsx)(l, {
        data: n
      }, "external-link+".concat(t))
    }),
    s = t.some(e => {
      let {
        data: t
      } = e;
      return t.is_header_hidden
    });
  return (0, i.jsxs)("div", {
    className: a.linksContainer,
    children: [!s && (0, i.jsx)(r.Heading, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: a.header,
      children: o.Z.Messages.LEARN_MORE
    }), n]
  })
}