n.d(t, {
  J: function() {
    return a
  }
});
var i = n(470079),
  s = n(207796),
  l = n(308083);

function a(e) {
  let {
    selectedGame: t
  } = e;
  return i.useMemo(() => {
    switch (t) {
      case s.hz.GENSHIN:
        return l.xn;
      case s.hz.VALORANT:
        return l.nJ
    }
  }, [t])
}