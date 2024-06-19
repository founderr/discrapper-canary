n.d(t, {
  x: function() {
    return s
  }
}), n(47120);
var i = n(470079);

function s(e, t, n) {
  let s = i.useRef(null),
    [a, l] = i.useState(!1),
    o = i.useCallback(() => {
      if (e && null !== s.current) {
        var n;
        l((null === (n = s.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t)
      }
    }, [l, e, t]);
  return i.useLayoutEffect(() => {
    o()
  }, [o, e, n]), {
    postTitleRef: s,
    isNewBadgeOverflow: a
  }
}