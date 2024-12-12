r.d(n, {
    BV: function () {
        return I;
    },
    Rm: function () {
        return E;
    },
    aO: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(40851),
    u = r(607070),
    c = r(633302),
    d = r(375954),
    f = r(378364),
    _ = r(197344),
    h = r(978636),
    p = r(131333),
    m = r(981631);
function g(e) {
    if (null == e || null == f.Z.emojiAnimationTriggers) return !1;
    for (let n of f.Z.emojiAnimationTriggers) {
        let r = c.ZP.getByName(n);
        if (null != r) {
            if (':'.concat(r.uniqueName, ':') === e) return !0;
            for (let n in r.diversityChildren) {
                let i = r.diversityChildren[n];
                if (':'.concat(i.uniqueName, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let E = s.createContext({
    triggerAnimation: () => {}
});
function v(e) {
    let { children: n } = e,
        { triggerAnimation: r } = s.useContext(E),
        i = (0, l.bp)(),
        o = s.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    i === m.IlC.APP && g(e) && r(e);
                }
            }),
            [i, r]
        );
    return (0, a.jsx)(E.Provider, {
        value: o,
        children: n
    });
}
function I(e) {
    let { children: n } = e,
        r = _.Z.useIsEligible(),
        i = s.useCallback((e, n) => {
            if (n === f.O.THROW_EMOJI) return (0, a.jsx)(p.t, { children: e });
        }, []);
    return r && null != f.Z.emojiAnimationType ? i((0, a.jsx)(v, { children: n }), f.Z.emojiAnimationType) : (0, a.jsx)(a.Fragment, { children: n });
}
function T(e) {
    let { emojiRef: n, channelId: r, messageId: i, emojiName: a } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getMessage(r, i)),
        { triggerAnimation: u } = s.useContext(E);
    return (
        s.useEffect(() => {
            if (!f.Z.triggerEmojiAnimationFromSentMessage || (null == l ? void 0 : l.state) !== m.yb.SENT || (0, h.JL)(i)) return;
            let { top: e, bottom: r } = n.getBoundingClientRect();
            if (!!(e >= 0 && r <= window.innerHeight)) u(a), (0, h.i9)(i);
        }, [a, n, null == l ? void 0 : l.state, i, u]),
        null
    );
}
function b(e) {
    let { channelId: n, messageId: r, emojiName: i, disable: s, emojiRef: c } = e,
        d = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        f = _.Z.useIsEligible(),
        h = (0, l.bp)();
    return s || h !== m.IlC.APP || !f || null == r || null == n || d || null == c || !g(i)
        ? null
        : (0, a.jsx)(T, {
              emojiRef: c,
              channelId: n,
              messageId: r,
              emojiName: i
          });
}
