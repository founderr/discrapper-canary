n.d(t, {
    BV: function () {
        return m;
    },
    Rm: function () {
        return p;
    },
    aO: function () {
        return S;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(40851),
    o = n(607070),
    l = n(633302),
    u = n(375954),
    c = n(378364),
    d = n(197344),
    _ = n(978636),
    E = n(131333),
    f = n(981631);
function h(e) {
    if (null == e || null == c.Z.emojiAnimationTriggers) return !1;
    for (let t of c.Z.emojiAnimationTriggers) {
        let n = l.ZP.getByName(t);
        if (null != n) {
            if (':'.concat(n.name, ':') === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (':'.concat(r.name, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let p = i.createContext({
    triggerAnimation: () => {}
});
function I(e) {
    let { children: t } = e,
        { triggerAnimation: n } = i.useContext(p),
        a = (0, s.bp)(),
        o = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a === f.IlC.APP && h(e) && n(e);
                }
            }),
            [a, n]
        );
    return (0, r.jsx)(p.Provider, {
        value: o,
        children: t
    });
}
function m(e) {
    let { children: t } = e,
        n = d.Z.useIsEligible(),
        a = i.useCallback((e, t) => {
            if (t === c.O.THROW_EMOJI) return (0, r.jsx)(E.t, { children: e });
        }, []);
    return n && null != c.Z.emojiAnimationType ? a((0, r.jsx)(I, { children: t }), c.Z.emojiAnimationType) : (0, r.jsx)(r.Fragment, { children: t });
}
function T(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        o = (0, a.e7)([u.Z], () => u.Z.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(p);
    return (
        i.useEffect(() => {
            if (!c.Z.triggerEmojiAnimationFromSentMessage || (null == o ? void 0 : o.state) !== f.yb.SENT || (0, _.JL)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            if (!!(e >= 0 && n <= window.innerHeight)) l(s), (0, _.i9)(r);
        }, [s, t, null == o ? void 0 : o.state, r, l]),
        null
    );
}
function S(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: l, emojiRef: u } = e,
        c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = d.Z.useIsEligible(),
        E = (0, s.bp)();
    return l || E !== f.IlC.APP || !_ || null == n || null == t || c || null == u || !h(i)
        ? null
        : (0, r.jsx)(T, {
              emojiRef: u,
              channelId: t,
              messageId: n,
              emojiName: i
          });
}
