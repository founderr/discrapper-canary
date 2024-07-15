n.d(t, {
  c: function() {
return a;
  }
});
var i = n(470079),
  s = n(444317);

function a() {
  let e = i.useRef(new s.Z()),
t = i.useCallback(t => {
  e.current.handleScroll(t);
}, []);
  return {
scrollPosition: e.current.scrollPosition,
handleScroll: t
  };
}