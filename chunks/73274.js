n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(924826),
    a = n(459273),
    r = n(585483),
    s = n(534091),
    o = n(959517),
    c = n(981631);
function d(e) {
    let { scrollerRef: t, ...n } = e,
        d = i.useCallback(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }, []),
        u = i.useCallback(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }, []),
        h = i.useCallback(
            (e) => {
                var i, l, a;
                if (!n.keyboardModeEnabled) return;
                let r = null === (l = t.current) || void 0 === l ? void 0 : null === (i = l.getScrollerNode()) || void 0 === i ? void 0 : i.ownerDocument,
                    s = null == r ? void 0 : r.querySelector(e);
                null != s &&
                    (null === (a = t.current) ||
                        void 0 === a ||
                        a.scrollIntoViewNode({
                            node: s,
                            padding: 4 * o.kQ,
                            callback: () => (null == s ? void 0 : s.focus())
                        }));
            },
            [n.keyboardModeEnabled]
        ),
        p = i.useCallback(() => {
            !n.hasMoreAfter && r.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        m = (0, l.ZP)({
            id: s.W,
            preserveFocusPosition: !1,
            setFocus: h,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: u,
            scrollToEnd: d,
            onNavigateNextAtEnd: p
        }),
        f = i.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem();
            },
            [m]
        );
    return (
        (0, a.yp)({
            event: c.CkL.FOCUS_MESSAGES,
            handler: f
        }),
        m
    );
}
