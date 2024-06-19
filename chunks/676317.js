t.d(n, {
  Nb: function() {
    return a
  },
  oA: function() {
    return f
  },
  pr: function() {
    return l
  },
  ze: function() {
    return o
  }
});
var r = t(442837),
  u = t(430824),
  i = t(496675),
  c = t(981631);
let s = function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
    r = n.getGuild(e);
  return null != r && t.can(c.Plq.MANAGE_GUILD, r)
};

function o(e) {
  return null != e && s(e)
}

function a(e) {
  return s(e)
}

function l(e) {
  return (0, r.e7)([u.Z, i.Z], () => s(e, u.Z, i.Z), [e])
}

function f(e) {
  return (0, r.e7)([u.Z], () => {
    let n = u.Z.getGuild(e);
    return (null == n ? void 0 : n.hasFeature(c.oNc.COMMUNITY)) || !1
  }, [e])
}