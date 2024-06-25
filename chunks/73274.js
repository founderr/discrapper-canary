n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(470079),
  i = n(924826),
  s = n(459273),
  a = n(585483),
  r = n(534091),
  o = n(959517),
  c = n(981631);

function u(e) {
  let {
    scrollerRef: t,
    ...n
  } = e, u = l.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToBottom({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), d = l.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToTop({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), h = l.useCallback(e => {
    var l, i, s;
    if (!n.keyboardModeEnabled) return;
    let a = null === (i = t.current) || void 0 === i ? void 0 : null === (l = i.getScrollerNode()) || void 0 === l ? void 0 : l.ownerDocument,
      r = null == a ? void 0 : a.querySelector(e);
    null != r && (null === (s = t.current) || void 0 === s || s.scrollIntoViewNode({
      node: r,
      padding: 4 * o.kQ,
      callback: () => null == r ? void 0 : r.focus()
    }))
  }, [n.keyboardModeEnabled]), m = l.useCallback(() => {
    !n.hasMoreAfter && a.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS)
  }, [n.hasMoreAfter]), E = (0, i.ZP)({
    id: r.W,
    preserveFocusPosition: !1,
    setFocus: h,
    isEnabled: n.keyboardModeEnabled && !n.isEditing,
    scrollToStart: d,
    scrollToEnd: u,
    onNavigateNextAtEnd: m
  }), p = l.useCallback(e => {
    let {
      atEnd: t = !1
    } = e;
    t ? E.focusLastVisibleItem() : E.focusFirstVisibleItem()
  }, [E]);
  return (0, s.yp)({
    event: c.CkL.FOCUS_MESSAGES,
    handler: p
  }), E
}