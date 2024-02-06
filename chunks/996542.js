var n = {
  "./spritesheet-emoji-32.png": "61469",
  "./spritesheet-emoji-40.png": "642437",
  "./spritesheet-emoji-48.png": "958327"
};

function s(e) {
  return i(l(e))
}

function l(e) {
  if (!i.o(n, e)) {
    var t = Error("Cannot find module '" + e + "'");
    throw t.code = "MODULE_NOT_FOUND", t
  }
  return n[e]
}
s.id = '"996542"', s.keys = function() {
  return Object.keys(n)
}, s.resolve = l, e.exports = s