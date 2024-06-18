"use strict";
var i, r, s, o, a, l, u, _;
n.d(t, {
  J: function() {
    return E
  },
  Nw: function() {
    return s
  },
  QJ: function() {
    return i
  },
  hW: function() {
    return d
  },
  tB: function() {
    return c
  },
  wB: function() {
    return o
  }
});
let c = 25,
  d = 4;

function E(e) {
  return null != e && "TERMS" === e.field_type
}(a = i || (i = {})).TERMS = "TERMS", a.TEXT_INPUT = "TEXT_INPUT", a.PARAGRAPH = "PARAGRAPH", a.MULTIPLE_CHOICE = "MULTIPLE_CHOICE", a.VERIFICATION = "VERIFICATION", (l = r || (r = {})).EMAIL = "email", l.PHONE = "phone", (u = s || (s = {})).TIMESTAMP_DESC = "NEWEST", u.TIMESTAMP_ASC = "OLDEST", (_ = o || (o = {})).STARTED = "STARTED", _.SUBMITTED = "SUBMITTED", _.REJECTED = "REJECTED", _.APPROVED = "APPROVED"