var r, s;
n.d(t, {
  Nz: function() {
    return r
  },
  o9: function() {
    return a
  }
}), (s = r || (r = {})).PHONE = "phone", s.EMAIL = "email";
let i = /^[-() \d]+$/,
  o = e => e.startsWith("+");

function a(e, t) {
  return "phone" === e ? !o(t) : "email" !== e && !(t.length < 3) && i.test(t)
}