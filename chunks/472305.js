"use strict";
s.r(t), s.d(t, {
  EXAMPLE_DOMAIN: function() {
    return o
  },
  getDnsName: function() {
    return n
  },
  getHttpName: function() {
    return l
  }
});
let o = "example.com",
  n = e => "_discord.".concat(e),
  l = e => "https://".concat(e, "/.well-known/discord")