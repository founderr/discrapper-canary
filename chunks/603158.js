"use strict";
n.r(t), n.d(t, {
  normalize: function() {
    return l
  }
});
let i = {
    "|": " "
  },
  r = {
    "[": " ",
    "]": " ",
    "(": " ",
    ")": " ",
    "|": " ",
    "~": " "
  },
  s = {
    "-": "-",
    " ": " "
  },
  a = {
    "​": "",
    "‌": "",
    "‍": "",
    "‎": "",
    "\uFEFF": ""
  },
  o = {
    ...s,
    ...r,
    ...a,
    ...i
  };

function l(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    null != o[i] ? t += o[i] : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(i) ? t += " " : t += i
  }
  return t.toLowerCase()
}