t.d(s, {
  M: function() {
    return i
  }
}), t(757143), t(653041);
let n = /[^0-9/]/g;

function i(e) {
  let s = e.replace(n, "").split("/"),
    t = s[0],
    i = s[1],
    a = [];
  return parseInt(t, 10) > 12 && (t = t.substring(0, 1)), a.push(t), (parseInt(t, 10) > 1 || 2 === t.length || null != i && "" !== i) && a.push("/"), null != i && "" !== i && parseInt(i, 10) > 99 && (i = (i + "").substring(0, 2)), a.push(i), a.join("")
}