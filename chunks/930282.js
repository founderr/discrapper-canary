n.d(t, {
    HR: function () {
        return g;
    },
    L5: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(653603),
    l = n.n(o),
    u = n(902704),
    c = n(453687),
    d = n(318713),
    f = n(981631),
    _ = n(388032),
    p = n(507304),
    h = n(665162);
function m(e, t) {
    return e.type === f.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgS0) : t;
}
function g(e, t) {
    var n, r;
    let { message: i } = t,
        { message: a } = e;
    return (0, u.Z)(e, t, ['message']) && i.content === a.content && i.state === a.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = a.editedTimestamp) || void 0 === r ? void 0 : r.toString());
}
t.ZP = i.memo(function (e) {
    var t;
    let { className: n, message: a, children: o, content: u, onUpdate: g, contentRef: E } = e,
        v = a.isEdited(),
        I = a.state === f.yb.SEND_FAILED,
        b = a.state === f.yb.SENDING,
        T = a.isCommandType(),
        S = null === (t = a.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        y = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            y.current ? null != g && g() : (y.current = !0);
        }, [g, a.content, u, S, o]),
        (0, r.jsxs)('div', {
            id: (0, c.ut)(a),
            ref: E,
            className: s()(n, h.markup, {
                [p.messageContent]: !0,
                [p.isSending]: b && !T,
                [p.markupRtl]: 'rtl' === l()(a.content),
                [p.isFailed]: I,
                [p.isUnsupported]: a.isUnsupported
            }),
            children: [
                null != o ? o : m(a, u),
                v &&
                    null != a.editedTimestamp &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            ' ',
                            (0, r.jsx)(d.Z, {
                                timestamp: a.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, r.jsxs)('span', {
                                    className: p.edited,
                                    children: ['(', _.intl.string(_.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, g);
