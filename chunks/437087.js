var i = {
  "./ggsans-400-normal.woff2": "899626",
  "./ggsans-400-normalitalic.woff2": "722885",
  "./ggsans-500-medium.woff2": "830979",
  "./ggsans-500-mediumitalic.woff2": "224548",
  "./ggsans-600-semibold.woff2": "493126",
  "./ggsans-600-semibolditalic.woff2": "533844",
  "./ggsans-700-bold.woff2": "200683",
  "./ggsans-700-bolditalic.woff2": "764930",
  "./ggsans-800-extrabold.woff2": "839050",
  "./ggsans-800-extrabolditalic.woff2": "991878"
};

function a(e) {
  if (!n.o(i, e)) return Promise.resolve().then(function() {
    var t = Error("Cannot find module '" + e + "'");
    throw t.code = "MODULE_NOT_FOUND", t
  });
  var t = i[e];
  return n.el(t).then(function() {
    return n.t(t, 17)
  })
}
a.keys = function() {
  return Object.keys(i)
}, a.id = "437087", e.exports = a