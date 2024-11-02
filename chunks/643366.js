n.d(e, {
    Y: function () {
        return l;
    }
});
var a = n(192379),
    r = n(110924),
    o = n(626135),
    i = n(497350),
    s = n(981631);
function l(t) {
    let e = (0, r.Z)(t);
    a.useEffect(() => {
        if (t === e) return;
        let n = null;
        'user-code-input' !== t.type && (n = (0, i.B)(t.userCodeData.clientId)),
            o.default.track(s.rMx.DEVICE_LINK_STEP, {
                previous_step: null == e ? void 0 : e.type,
                current_step: t.type,
                platform_type: n
            });
    }, [e, t]);
}
