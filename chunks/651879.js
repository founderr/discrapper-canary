"use strict";
let n;
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("424973");
var r = l("917351"),
  s = l.n(r),
  a = l("693566"),
  i = l.n(a),
  o = l("851387"),
  u = l("305961"),
  c = l("697218"),
  d = l("718517"),
  I = l("158998"),
  f = l("782340");
let E = new i({
  maxAge: 1 * d.default.Millis.MINUTE
});

function p(e, t, l) {
  null != n && clearTimeout(n), n = setTimeout(() => {
    let n = [],
      r = e => {
        n.push(e.id)
      };
    if (null == e) s.forEach(u.default.getGuilds(), r);
    else if (Array.isArray(e)) e.forEach(e => {
      let t = u.default.getGuild(e);
      null != t && r(t)
    });
    else {
      let t = u.default.getGuild(e);
      null != t && r(t)
    }
    n.length > 0 && o.default.requestMembers(n, t.toLocaleLowerCase(), l)
  }, 200)
}

function _(e, t) {
  let l = "".concat(null != e ? e : "", ":").concat(t),
    n = E.get(l);
  if (null != n) return n;
  E.set(l, !0)
}
var S = {
  getGuildNameSuggestion: function(e) {
    let t = c.default.getCurrentUser(),
      l = I.getName(t);
    return null == l || 0 === l.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
      username: (null == e ? void 0 : e.truncateUsername) ? l.slice(0, 20) : l
    })
  },
  requestMembers(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      n = Array.isArray(e),
      r = [],
      s = !1;
    if (n) e.forEach(e => {
      let l = _(e, t);
      null == l && r.push(e)
    });
    else {
      let l = _(e, t);
      null == l && (s = !0)
    }
    r.length > 0 && n ? p(r, t, l) : s && p(e, t, l)
  }
}