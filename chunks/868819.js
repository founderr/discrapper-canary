n.d(t, {
    c4: function () {
        return m;
    },
    st: function () {
        return T;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(718922),
    l = n(442837),
    u = n(481060),
    c = n(292419),
    d = n(282397),
    _ = n(188597),
    E = n(981631),
    f = n(689938),
    h = n(875418);
function p(e) {
    return {
        text: e,
        icon: (0, r.jsx)(u.Dots, {
            className: h.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function m(e) {
    return {
        text: null != e ? e : f.Z.Messages.APPLICATION_COMMAND_FAILED,
        color: 'text-danger',
        icon: (0, r.jsx)(u.CircleWarningIcon, {
            size: 'xs',
            color: 'currentColor',
            className: o()(h.icon, h.errorIcon)
        })
    };
}
function I(e, t) {
    switch ((0, _.t$)(t, e)) {
        case _.rQ.SENDING:
            return p(f.Z.Messages.APPLICATION_COMMAND_SENDING);
        case _.rQ.CREATED:
            return p(f.Z.Messages.APPLICATION_COMMAND_WAITING.format({ applicationName: t.author.username }));
        case _.rQ.TIMED_OUT:
            return m(f.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
        case _.rQ.FAILED:
            return m(t.interactionError);
    }
}
function T(e) {
    let { className: t, icon: n, text: i, color: a } = e;
    return (0, r.jsxs)('div', {
        className: o()(h.wrapper, t),
        children: [
            n,
            (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: a,
                scaleFontToUserSetting: !0,
                children: i
            })
        ]
    });
}
function g(e) {
    let { message: t, className: n, component: a } = e,
        o = (0, s.Z)(),
        u = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(E.iLy.LOADING) && null != u) {
            let n = (0, _.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => o(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [o, u, t]);
    let f = null;
    if (null == a) f = I(u, t);
    else {
        let e = (0, c.SD)(u, t, a);
        null != e && (f = m(e));
    }
    if (null == f) return null;
    let { text: h, icon: p, color: g } = f;
    return (0, r.jsx)(T, {
        icon: p,
        text: h,
        className: n,
        color: g
    });
}
t.ZP = i.memo(g);
