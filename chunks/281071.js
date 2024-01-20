"use strict";

function l(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    l = window.getSelection(),
    r = document.createElement("textarea");
  r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == l || l.removeAllRanges(), null == l || l.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
  let o = document.execCommand("copy");
  return t.removeChild(r), o
}
n.r(t), n.d(t, {
  copy: function() {
    return l
  }
}), n("70102")