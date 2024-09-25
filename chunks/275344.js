n.d(t, {
    Z: function () {
        return f;
    },
    v: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(904245),
    u = n(375954),
    c = n(918088);
let d = i.createContext(void 0);
function _(e) {
    var t;
    let n = null !== (t = i.useContext(d)) && void 0 !== t ? t : e;
    return o()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function E(e) {
    let { message: t, children: n } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        o = null != a;
    return (
        i.useEffect(() => {
            !o &&
                l.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [o, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != a ? a : t,
            children: n
        })
    );
}
function f(e) {
    let { message: t, children: n } = e;
    return (0, c.r8)(t)
        ? (0, r.jsx)(r.Fragment, { children: n })
        : (0, r.jsx)(E, {
              message: t,
              children: n
          });
}
