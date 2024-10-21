n.d(t, {
    BV: function () {
        return h;
    },
    Rm: function () {
        return E;
    },
    aO: function () {
        return I;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(607070),
    o = n(375954),
    l = n(378364),
    u = n(197344),
    c = n(978636),
    d = n(131333),
    _ = n(981631);
let E = i.createContext({
    triggerAnimation: () => {}
});
function f(e) {
    let { children: t } = e,
        { triggerAnimation: n } = i.useContext(E),
        a = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    var t, r;
                    null != e && null !== (r = null === (t = l.Z.emojiAnimationTriggers) || void 0 === t ? void 0 : t.has(e)) && void 0 !== r && r && n(e);
                }
            }),
            [n]
        );
    return (0, r.jsx)(E.Provider, {
        value: a,
        children: t
    });
}
function h(e) {
    let { children: t } = e,
        n = u.Z.useIsEligible(),
        a = i.useCallback((e, t) => {
            if (t === l.O.THROW_EMOJI) return (0, r.jsx)(d.t, { children: e });
        }, []);
    return n && null != l.Z.emojiAnimationType ? a((0, r.jsx)(f, { children: t }), l.Z.emojiAnimationType) : (0, r.jsx)(r.Fragment, { children: t });
}
function p(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        u = (0, a.e7)([o.Z], () => o.Z.getMessage(n, r)),
        { triggerAnimation: d } = i.useContext(E);
    return (
        i.useEffect(() => {
            if (!l.Z.triggerEmojiAnimationFromSentMessage || (null == u ? void 0 : u.state) !== _.yb.SENT || (0, c.JL)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            if (!!(e >= 0 && n <= window.innerHeight)) d(s), (0, c.i9)(r);
        }, [s, t, null == u ? void 0 : u.state, r, d]),
        null
    );
}
function I(e) {
    var t, n;
    let { channelId: i, messageId: o, emojiName: c, disable: d, emojiRef: _ } = e,
        E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        f = u.Z.useIsEligible(),
        h = null != c && null !== (n = null === (t = l.Z.emojiAnimationTriggers) || void 0 === t ? void 0 : t.has(c)) && void 0 !== n && n;
    return d || !f || !h || null == o || null == i || E || null == _
        ? null
        : (0, r.jsx)(p, {
              emojiRef: _,
              channelId: i,
              messageId: o,
              emojiName: c
          });
}
