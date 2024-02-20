"use strict";
n.r(t), n.d(t, {
  useTabListState: function() {
    return o
  }
}), n("222007");
var r = n("884691"),
  a = n("880523");

function o(e) {
  var t;
  let n = (0, a.useSingleSelectListState)({
      ...e,
      suppressTextValueWarning: !0,
      defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : i(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set)
    }),
    {
      selectionManager: o,
      collection: s,
      selectedKey: c
    } = n,
    l = (0, r.useRef)(c);
  return (0, r.useEffect)(() => {
    let e = c;
    (o.isEmpty || !s.getItem(e)) && null != (e = i(s, n.disabledKeys)) && o.setSelectedKeys([e]), (null != e && null == o.focusedKey || !o.isFocused && e !== l.current) && o.setFocusedKey(e), l.current = e
  }), {
    ...n,
    isDisabled: e.isDisabled || !1
  }
}

function i(e, t) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey();) n = e.getKeyAfter(n);
    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey())
  }
  return n
}