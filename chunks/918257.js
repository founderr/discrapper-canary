t.d(s, {
  Z: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(481060),
  r = t(208049),
  o = t(242291),
  c = t(153124),
  E = t(63063),
  d = t(36703),
  _ = t(981631),
  T = t(689938),
  S = t(824379);
let u = (0, c.hQ)();

function I() {
  let e = (0, o.pI)();
  return (0, n.jsxs)("div", {
    className: a()(S.soundboardRow),
    children: [(0, n.jsxs)("div", {
      className: a()(S.soundboardColumn, S.leftColumn),
      children: [(0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: S.soundboardTitle,
        children: T.Z.Messages.USER_SETTINGS_SOUNDBOARD
      }), (0, n.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: T.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({
          helpCenterArticle: E.Z.getArticleURL(_.BhN.SOUNDBOARD)
        })
      })]
    }), (0, n.jsxs)("div", {
      className: a()(S.soundboardColumn, S.__invalid_rightColumn),
      children: [(0, n.jsx)(l.FormTitle, {
        id: u,
        tag: l.FormTitleTags.H5,
        className: S.soundboardSubtitle,
        children: T.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
      }), (0, n.jsx)(l.Slider, {
        initialValue: (0, d.P)(e),
        maxValue: 100,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: function(s) {
          e = (0, d.A)(s), (0, r.xz)(e)
        },
        "aria-labelledby": u
      })]
    })]
  })
}