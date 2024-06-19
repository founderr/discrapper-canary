n(411104);
var i = n(570140),
  s = n(51025),
  l = n(314897),
  a = n(804739);

function r() {
  if (!(0, a.Q)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  s.S1(e, t)
}

function o() {
  s.ob()
}
t.Z = {
  init() {
    i.Z.subscribe("CONNECTION_OPEN", r), i.Z.subscribe("LOGOUT", o)
  }
}