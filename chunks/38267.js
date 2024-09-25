n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(585483),
    o = n(981631);
function s(e) {
    return Object.keys(e).some((t) => e[t]);
}
function l(e, t) {
    let [n, r] = i.useState(t),
        [l, u] = i.useState(s(n)),
        c = i.useRef(l),
        d = i.useRef(null),
        _ = i.useCallback((e) => {
            r((t) => {
                let n = {
                        ...t,
                        ...e
                    },
                    r = s(n);
                return r !== c.current && ((c.current = r), null != d.current && (cancelAnimationFrame(d.current), (d.current = null)), r ? u(!0) : (d.current = requestAnimationFrame(() => u(!1)))), n;
            });
        }, []);
    return (
        i.useEffect(() => {
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return _({
                    emojiPicker: t,
                    emojiBurstPicker: n
                });
            };
            return a.S.subscribeKeyed(o.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void a.S.unsubscribeKeyed(o.LPv.TOGGLE_REACTION_POPOUT, e, t);
        }, [e, _]),
        {
            popouts: n,
            setPopout: _,
            selected: l
        }
    );
}
