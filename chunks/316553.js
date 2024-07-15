n.d(t, {
  J: function() {
return r;
  }
});
var i = n(470079),
  a = n(207796),
  s = n(308083);

function r(e) {
  let {
selectedGame: t
  } = e;
  return i.useMemo(() => {
switch (t) {
  case a.hz.GENSHIN:
    return s.xn;
  case a.hz.VALORANT:
    return s.nJ;
}
  }, [t]);
}