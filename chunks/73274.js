n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(924826),
    r = n(459273),
    a = n(585483),
    s = n(534091),
    o = n(959517),
    c = n(981631);
function u(e) {
    let { scrollerRef: t, ...n } = e,
        u = i.useCallback(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }, []),
        d = i.useCallback(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }, []),
        h = i.useCallback(
            (e) => {
                var i, l, r;
                if (!n.keyboardModeEnabled) return;
                let a = null === (l = t.current) || void 0 === l ? void 0 : null === (i = l.getScrollerNode()) || void 0 === i ? void 0 : i.ownerDocument,
                    s = null == a ? void 0 : a.querySelector(e);
                null != s &&
                    (null === (r = t.current) ||
                        void 0 === r ||
                        r.scrollIntoViewNode({
                            node: s,
                            padding: 4 * o.kQ,
                            callback: () => (null == s ? void 0 : s.focus())
                        }));
            },
            [n.keyboardModeEnabled]
        ),
        m = i.useCallback(() => {
            !n.hasMoreAfter && a.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        p = (0, l.ZP)({
            id: s.W,
            preserveFocusPosition: !1,
            setFocus: h,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: d,
            scrollToEnd: u,
            onNavigateNextAtEnd: m
        }),
        f = i.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? p.focusLastVisibleItem() : p.focusFirstVisibleItem();
            },
            [p]
        );
    return (
        (0, r.yp)({
            event: c.CkL.FOCUS_MESSAGES,
            handler: f
        }),
        p
    );
}
