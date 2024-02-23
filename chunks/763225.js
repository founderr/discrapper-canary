"use strict";
n.r(t), n.d(t, {
  useProfileThemedPanelBackground: function() {
    return u
  }
});
var l = n("446674"),
  a = n("77078"),
  s = n("217513"),
  i = n("906889"),
  r = n("697218");

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
    u = arguments.length > 3 ? arguments[3] : void 0,
    o = function(e, t) {
      let n = (0, l.useStateFromStores)([r.default], () => r.default.getUser(e), [e]),
        a = (0, s.default)(e, t),
        {
          profileTheme: u
        } = (0, i.default)(n, a, {
          isPreview: !0
        });
      return u
    }(e, t);
  return (0, a.useToken)(null != u ? u : a.tokens.colors.BACKGROUND_NESTED_FLOATING, o).hex({
    opacity: n
  })
}