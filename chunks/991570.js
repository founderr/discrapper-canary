n.d(t, {
  f: function() {
    return o
  }
});
var l = n(442837),
  i = n(481060),
  s = n(318661),
  a = n(721987),
  r = n(594174);

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
    o = arguments.length > 3 ? arguments[3] : void 0,
    c = (0, l.e7)([r.default], () => r.default.getUser(e), [e]),
    u = (0, s.ZP)(e, t),
    {
      theme: d
    } = (0, a.Z)({
      user: c,
      displayProfile: u,
      isPreview: !0
    });
  return (0, i.useToken)(null != o ? o : i.tokens.colors.BACKGROUND_NESTED_FLOATING, d).hex({
    opacity: n
  })
}