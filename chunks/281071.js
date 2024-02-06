"use strict";

function u(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    u = window.getSelection(),
    i = document.createElement("textarea");
  i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == u || u.removeAllRanges(), null == u || u.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
  let a = document.execCommand("copy");
  return t.removeChild(i), a
}
n.r(t), n.d(t, {
  copy: function() {
    return u
  }
}), n("70102")