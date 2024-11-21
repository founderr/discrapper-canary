n.d(t, {
    p: function () {
        return s;
    }
});
var r = n(535232),
    i = n(346110),
    a = n(192379);
function s(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [s, o] = (0, a.useState)(!1);
    return (
        (0, i.b)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && o(!!(0, r.QL)(e.current, { tabbable: !0 }).nextNode());
                };
                t();
                let n = new MutationObserver(t);
                return (
                    n.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ['tabIndex', 'disabled']
                    }),
                    () => {
                        n.disconnect();
                    }
                );
            }
        }),
        !n && s
    );
}
