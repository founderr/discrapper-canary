"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(470079),
  r = n(924826),
  s = n(536895),
  o = n(40851),
  a = n(590921);

function l(e) {
  var t, n, l;
  let {
    navId: u,
    scrollerRef: _,
    state: c,
    onFocus: d
  } = e, {
    renderWindow: E
  } = i.useContext(o.ZP), I = (e, t) => {
    var n;
    if (null === (n = _.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
      let e = c.query.typeInfo.focusMode,
        n = !(e === a.QZ.MANUAL || e === a.QZ.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
      c.isVisible && (!0 !== t || !1 !== n) ? (h.setFocus("0"), null == d || d(0)) : (h.setFocus(null), null == d || d(null))
    }
  }, T = e => {
    var t;
    if (null === (t = _.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
      let e = c.query.resultCount - 1;
      h.setFocus(e.toString()), null == d || d(e)
    }
  }, h = (0, r.ZP)({
    id: u,
    isEnabled: c.isVisible,
    orientation: s.hy.VERTICAL,
    useVirtualFocus: !0,
    setFocus: (e, t) => {
      let n = E.document.querySelector(e);
      if (null != n) {
        var i;
        null === (i = _.current) || void 0 === i || i.scrollIntoViewNode({
          node: n
        })
      }
      null == d || d(+t)
    },
    onNavigateNextAtEnd: () => I(!0),
    onNavigatePreviousAtStart: () => T(!0),
    scrollToStart: () => (I(!1, !1), Promise.resolve()),
    scrollToEnd: () => (T(!1), Promise.resolve())
  });
  return i.useEffect(() => {
    I(!0, !0)
  }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (l = c.query) || void 0 === l ? void 0 : l.isLoading, c.isVisible]), h
}