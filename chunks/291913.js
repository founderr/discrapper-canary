t.d(n, {
  Z: function() {
    return u
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  s = t(63063),
  a = t(285952),
  r = t(901524),
  o = t(153124),
  c = t(689938),
  d = t(331651);

function u(e) {
  let {
    value: n,
    onChange: t,
    children: u,
    note: I,
    helpdeskArticleId: N,
    style: E,
    disabled: T = !1,
    hideBorder: m = !1,
    className: _ = d.marginBottom20
  } = e, h = (0, o.Dt)();
  return (0, i.jsxs)(a.Z, {
    style: E,
    className: _,
    direction: a.Z.Direction.VERTICAL,
    children: [(0, i.jsxs)(a.Z, {
      children: [(0, i.jsx)(a.Z.Child, {
        children: (0, i.jsx)(l.FormTitle, {
          id: h,
          className: d.marginReset,
          tag: l.FormTitleTags.H3,
          disabled: T,
          children: u
        })
      }), (0, i.jsx)(a.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(r.Z, {
          value: n,
          onChange: t,
          disabled: T,
          labelledBy: h
        })
      })]
    }), null != I && (0, i.jsx)(a.Z.Child, {
      className: d.marginTop4,
      children: (0, i.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        children: I
      })
    }), null != N && (0, i.jsx)(a.Z.Child, {
      className: d.marginTop4,
      children: (0, i.jsx)(l.FormText, {
        disabled: T,
        type: l.FormTextTypes.DESCRIPTION,
        children: (0, i.jsx)(l.Anchor, {
          href: s.Z.getArticleURL(N),
          children: c.Z.Messages.LEARN_MORE
        })
      })
    }), !m && (0, i.jsx)(a.Z.Child, {
      className: d.marginTop20,
      children: (0, i.jsx)(l.FormDivider, {})
    })]
  })
}
r.Z.Types, u.Types = r.Z.Types