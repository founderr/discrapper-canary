n(411104);
var s = n(570140),
  i = n(51025),
  l = n(314897),
  a = n(804739);

function r() {
  if (!(0, a.Q)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  i.S1(e, t)
}

function o() {
  i.ob()
}
t.Z = {
  init() {
    s.Z.subscribe("CONNECTION_OPEN", r), s.Z.subscribe("LOGOUT", o)
  }
}