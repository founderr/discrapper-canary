n.d(t, {
  J: function() {
    return a
  }
});
var s = n(470079),
  i = n(207796),
  l = n(308083);

function a(e) {
  let {
    selectedGame: t
  } = e;
  return s.useMemo(() => {
    switch (t) {
      case i.hz.GENSHIN:
        return l.xn;
      case i.hz.VALORANT:
        return l.nJ
    }
  }, [t])
}