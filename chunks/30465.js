n.d(t, {
  KR: function() {
return o;
  },
  p8: function() {
return s;
  },
  sJ: function() {
return l;
  }
});
var r = n(470079),
  i = n(652874);
let a = Object.freeze({
id: null,
activeDescendant: null
  }),
  s = (0, i.Z)(() => a);

function o(e, t, n) {
  (0, r.useEffect)(() => {
t ? s.setState({
  id: e,
  activeDescendant: n
}) : s.setState({
  id: null,
  activeDescendant: null
});
  }, [
e,
t,
n
  ]);
}

function l() {
  s.setState(() => a);
}