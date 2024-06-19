n.d(e, {
  Y: function() {
    return l
  }
});
var r = n(607190),
  i = n(527475);
let a = -1,
  s = () => "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0,
  o = () => {
    (0, i.u)(({
      timeStamp: t
    }) => {
      a = t
    }, !0)
  },
  l = () => (a < 0 && (a = s(), o()), {
    get firstHiddenTime() {
      return a
    }
  })