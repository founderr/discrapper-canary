i.d(n, {
  Z: function() {
    return o
  }
});
var t = i(735250);
i(470079);
var l = i(120356),
  a = i.n(l),
  s = i(481060),
  r = i(52619);

function o(e) {
  let {
    supportedLanguages: n
  } = e;
  return (0, t.jsx)("ul", {
    className: r.outerContainer,
    children: n.map(e => (0, t.jsx)("li", {
      className: a()(r.innerContainer, r.languageItem),
      children: (0, t.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, e))
  })
}