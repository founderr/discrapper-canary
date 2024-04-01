"use strict";
t.a(n, async function(r, i) {
  try {
    var u = t("463281"),
      a = r([u]),
      [u] = a.then ? (await a)() : a;
    await t.v(e, n.id, "86bc7c782512945d", {
      "./index_bg.js": {
        __wbindgen_string_new: u.__wbindgen_string_new,
        __wbindgen_rethrow: u.__wbindgen_rethrow
      }
    }), i()
  } catch (n) {
    i(n)
  }
}, 1)