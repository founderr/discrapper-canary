r.d(n, {
    p: function () {
        return s;
    }
});
var i = r(192379),
    a = r(155263);
function s(e) {
    var n;
    let r = (0, a.BA)({
            ...e,
            suppressTextValueWarning: !0,
            defaultSelectedKey: null !== (n = e.defaultSelectedKey) && void 0 !== n ? n : o(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set())
        }),
        { selectionManager: s, collection: l, selectedKey: u } = r,
        c = (0, i.useRef)(u);
    return (
        (0, i.useEffect)(() => {
            let e = u;
            (s.isEmpty || !l.getItem(e)) && null != (e = o(l, r.disabledKeys)) && s.setSelectedKeys([e]), ((null != e && null == s.focusedKey) || (!s.isFocused && e !== c.current)) && s.setFocusedKey(e), (c.current = e);
        }),
        {
            ...r,
            isDisabled: e.isDisabled || !1
        }
    );
}
function o(e, n) {
    let r = null;
    if (e) {
        for (r = e.getFirstKey(); n.has(r) && r !== e.getLastKey(); ) r = e.getKeyAfter(r);
        n.has(r) && r === e.getLastKey() && (r = e.getFirstKey());
    }
    return r;
}
