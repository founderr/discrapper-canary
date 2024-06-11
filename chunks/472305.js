"use strict";
t.r(s), t.d(s, {
  EXAMPLE_DOMAIN: function() {
    return o
  },
  getDnsName: function() {
    return l
  },
  getHttpName: function() {
    return n
  }
});
let o = "example.com",
  l = e => "_discord.".concat(e),
  n = e => "https://".concat(e, "/.well-known/discord")