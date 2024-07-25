s.d(a, {
  b: function() {
return t;
  }
}), s(47120);
var n = s(470079);

function t() {
  var e, a;
  let [s, t] = n.useState({
width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080
  });
  return n.useLayoutEffect(() => {
function e() {
  let e = window.innerWidth;
  t({
    width: e,
    height: window.innerHeight
  });
}
return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
  }, []), s;
}