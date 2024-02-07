"use strict";
n.r(t), n.d(t, {
  useChannelAutocompleteLayerPosition: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  i = n("244201"),
  a = n("851745");

function s(e) {
  let {
    editorHeight: t,
    type: n,
    state: s,
    isInPopoutExperiment: r = !1
  } = e, [o, u] = l.useState(void 0), d = null == s ? void 0 : s.query, c = null == s ? void 0 : s.isVisible, {
    renderWindow: f
  } = l.useContext(i.default), p = l.useCallback(() => {
    var e, t, l, i;
    if (null != s && (null == d || !c)) {
      u(void 0);
      return
    }
    if ((null == d ? void 0 : d.type) === a.AutocompleteOptionTypes.GIFS || null != n && !r && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
      u(null);
      return
    }
    let o = f.document.getSelection(),
      p = null != o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
    if (null == p) return;
    let m = p.startContainer,
      h = p.startOffset;
    for (; null != m;) {
      if (m.nodeType !== Node.TEXT_NODE || null == m.nodeValue) {
        u(null);
        return
      }
      if ((null === (t = m.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
        h = null !== (i = null == (m = m.previousSibling) ? void 0 : null === (l = m.nodeValue) || void 0 === l ? void 0 : l.length) && void 0 !== i ? i : 0;
        continue
      }
      null != d && (h >= d.queryText.length ? h -= d.queryText.length : h = 0);
      break
    }
    if (null == m) return;
    let E = f.document.createRange();
    E.setStart(m, h), E.setEnd(m, h);
    let g = E.getBoundingClientRect();
    (null == g ? void 0 : g.height) !== 0 && u(null != g ? g : null)
  }, [r, f.document, s, c, d, n]);
  return l.useEffect(() => (f.document.addEventListener("selectionchange", p), () => f.document.removeEventListener("selectionchange", p)), [f.document, p]), l.useEffect(() => {
    p()
  }, [p, t]), o
}