n.d(t, {
    BV: function () {
        return p;
    },
    Rm: function () {
        return f;
    },
    aO: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(40851),
    o = n(607070),
    l = n(375954),
    u = n(378364),
    c = n(197344),
    d = n(978636),
    _ = n(131333),
    E = n(981631);
let f = i.createContext({
    triggerAnimation: () => {}
});
function h(e) {
    let { children: t } = e,
        { triggerAnimation: n } = i.useContext(f),
        a = (0, s.bp)(),
        o = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    var t, r;
                    a === E.IlC.APP && null != e && null !== (r = null === (t = u.Z.emojiAnimationTriggers) || void 0 === t ? void 0 : t.has(e)) && void 0 !== r && r && n(e);
                }
            }),
            [a, n]
        );
    return (0, r.jsx)(f.Provider, {
        value: o,
        children: t
    });
}
function p(e) {
    let { children: t } = e,
        n = c.Z.useIsEligible(),
        a = i.useCallback((e, t) => {
            if (t === u.O.THROW_EMOJI) return (0, r.jsx)(_.t, { children: e });
        }, []);
    return n && null != u.Z.emojiAnimationType ? a((0, r.jsx)(h, { children: t }), u.Z.emojiAnimationType) : (0, r.jsx)(r.Fragment, { children: t });
}
function I(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        o = (0, a.e7)([l.Z], () => l.Z.getMessage(n, r)),
        { triggerAnimation: c } = i.useContext(f);
    return (
        i.useEffect(() => {
            if (!u.Z.triggerEmojiAnimationFromSentMessage || (null == o ? void 0 : o.state) !== E.yb.SENT || (0, d.JL)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            if (!!(e >= 0 && n <= window.innerHeight)) c(s), (0, d.i9)(r);
        }, [s, t, null == o ? void 0 : o.state, r, c]),
        null
    );
}
function m(e) {
    var t, n;
    let { channelId: i, messageId: l, emojiName: d, disable: _, emojiRef: f } = e,
        h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        p = c.Z.useIsEligible(),
        m = null != d && null !== (n = null === (t = u.Z.emojiAnimationTriggers) || void 0 === t ? void 0 : t.has(d)) && void 0 !== n && n,
        T = (0, s.bp)();
    return _ || T !== E.IlC.APP || !p || !m || null == l || null == i || h || null == f
        ? null
        : (0, r.jsx)(I, {
              emojiRef: f,
              channelId: i,
              messageId: l,
              emojiName: d
          });
}
