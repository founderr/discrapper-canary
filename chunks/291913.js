"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250");
l("470079");
var a = l("481060"),
  s = l("63063"),
  i = l("285952"),
  r = l("901524"),
  o = l("153124"),
  d = l("689938"),
  u = l("611273");

function c(e) {
  let {
    value: t,
    onChange: l,
    children: c,
    note: f,
    helpdeskArticleId: I,
    style: m,
    disabled: T = !1,
    hideBorder: E = !1,
    className: N = u.marginBottom20
  } = e, _ = (0, o.useUID)();
  return (0, n.jsxs)(i.default, {
    style: m,
    className: N,
    direction: i.default.Direction.VERTICAL,
    children: [(0, n.jsxs)(i.default, {
      children: [(0, n.jsx)(i.default.Child, {
        children: (0, n.jsx)(a.FormTitle, {
          id: _,
          className: u.marginReset,
          tag: a.FormTitleTags.H3,
          disabled: T,
          children: c
        })
      }), (0, n.jsx)(i.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(r.default, {
          value: t,
          onChange: l,
          disabled: T,
          labelledBy: _
        })
      })]
    }), null != f && (0, n.jsx)(i.default.Child, {
      className: u.marginTop4,
      children: (0, n.jsx)(a.FormText, {
        type: a.FormTextTypes.DESCRIPTION,
        children: f
      })
    }), null != I && (0, n.jsx)(i.default.Child, {
      className: u.marginTop4,
      children: (0, n.jsx)(a.FormText, {
        disabled: T,
        type: a.FormTextTypes.DESCRIPTION,
        children: (0, n.jsx)(a.Anchor, {
          href: s.default.getArticleURL(I),
          children: d.default.Messages.LEARN_MORE
        })
      })
    }), !E && (0, n.jsx)(i.default.Child, {
      className: u.marginTop20,
      children: (0, n.jsx)(a.FormDivider, {})
    })]
  })
}
r.default.Types, c.Types = r.default.Types