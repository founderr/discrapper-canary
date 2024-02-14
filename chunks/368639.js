"use strict";
n.r(t), n.d(t, {
  parseBioReact: function() {
    return m
  },
  parseBioReactWithoutScrolling: function() {
    return p
  }
});
var l = n("917351"),
  i = n.n(l),
  a = n("693566"),
  s = n.n(a);
n("404828");
var r = n("933805"),
  o = n("52140"),
  u = n("888198"),
  d = n("367376"),
  c = n("788554");
let f = (0, c.default)([u.default.PROFILE_BIO_RULES, (0, o.default)({
  enableBuildOverrides: !1
})]);
new s({
  max: 2e3
});
let m = r.reactParserFor(f);
d.default.astParserFor(f);
let p = r.reactParserFor((0, c.default)([i.omit(f, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), {
  emoji: {
    react: () => null
  }
}]))