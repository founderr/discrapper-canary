t.d(n, {
  Nb: function() {
return s;
  },
  oA: function() {
return d;
  },
  pr: function() {
return c;
  },
  ze: function() {
return a;
  }
});
var r = t(442837),
  i = t(430824),
  o = t(496675),
  l = t(981631);
let u = function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
r = n.getGuild(e);
  return null != r && t.can(l.Plq.MANAGE_GUILD, r);
};

function a(e) {
  return null != e && u(e);
}

function s(e) {
  return u(e);
}

function c(e) {
  return (0, r.e7)([
i.Z,
o.Z
  ], () => u(e, i.Z, o.Z), [e]);
}

function d(e) {
  return (0, r.e7)([i.Z], () => {
let n = i.Z.getGuild(e);
return (null == n ? void 0 : n.hasFeature(l.oNc.COMMUNITY)) || !1;
  }, [e]);
}