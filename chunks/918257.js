t.d(s, {
  Z: function() {
return S;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(481060),
  o = t(208049),
  l = t(242291),
  c = t(153124),
  d = t(63063),
  _ = t(36703),
  E = t(981631),
  u = t(689938),
  T = t(712244);
let I = (0, c.hQ)();

function S() {
  let e = (0, l.pI)();
  return (0, n.jsxs)('div', {
className: i()(T.soundboardRow),
children: [
  (0, n.jsxs)('div', {
    className: i()(T.soundboardColumn, T.leftColumn),
    children: [
      (0, n.jsx)(r.FormTitle, {
        tag: r.FormTitleTags.H5,
        className: T.soundboardTitle,
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD
      }),
      (0, n.jsx)(r.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({
          helpCenterArticle: d.Z.getArticleURL(E.BhN.SOUNDBOARD)
        })
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: i()(T.soundboardColumn, T.__invalid_rightColumn),
    children: [
      (0, n.jsx)(r.FormTitle, {
        id: I,
        tag: r.FormTitleTags.H5,
        className: T.soundboardSubtitle,
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
      }),
      (0, n.jsx)(r.Slider, {
        initialValue: (0, _.P)(e),
        maxValue: 100,
        onValueRender: e => ''.concat(e.toFixed(0), '%'),
        asValueChanges: function(s) {
          e = (0, _.A)(s), (0, o.xz)(e);
        },
        'aria-labelledby': I
      })
    ]
  })
]
  });
}