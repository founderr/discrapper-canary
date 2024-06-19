t.d(s, {
  E: function() {
    return o
  }
}), t(47120);
var n = t(470079),
  i = t(170401),
  a = t(128277),
  l = t(394644),
  r = t(726985);

function o() {
  let e = (0, a.Z7)(),
    s = (0, l.Pt)(),
    t = n.useRef(new i.Z((0, l.ji)(s))),
    [o, c] = n.useState(!1),
    [E, d] = n.useState(r.QF),
    _ = n.useCallback(async e => {
      d(await t.current.search(e.trim())), c(!0)
    }, []);
  return n.useEffect(() => {
    "" === e || e.length < 2 ? (d(r.QF), c(!1)) : _(e)
  }, [e, _]), {
    hasSearchResults: o,
    searchResults: E
  }
}