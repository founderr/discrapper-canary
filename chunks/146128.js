r.d(n, {
    BV: function () {
        return T;
    },
    Rm: function () {
        return v;
    },
    aO: function () {
        return y;
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
    p = r(643420),
    m = r(131333),
    g = r(981631);
function E(e) {
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
let v = s.createContext({
    triggerAnimation: () => {},
    untriggerAnimation: () => {}
});
function I(e) {
    let { children: n } = e,
        { triggerAnimation: r, untriggerAnimation: i } = s.useContext(v),
        o = (0, l.bp)(),
        u = s.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    o !== g.IlC.OVERLAY && E(e) && r(e);
                },
                untriggerAnimation: (e) => {
                    o !== g.IlC.OVERLAY && E(e) && i(e);
                }
            }),
            [o, r, i]
        );
    return (0, a.jsx)(v.Provider, {
        value: u,
        children: n
    });
}
function T(e) {
    let { children: n } = e,
        r = _.Z.useIsEligible(),
        i = s.useCallback((e, n) => {
            switch (n) {
                case f.O.THROW_EMOJI:
                    return (0, a.jsx)(m.t, { children: e });
                case f.O.SNOW:
                    return (0, a.jsx)(p.k, { children: e });
            }
        }, []);
    return r && null != f.Z.emojiAnimationType ? i((0, a.jsx)(I, { children: n }), f.Z.emojiAnimationType) : (0, a.jsx)(a.Fragment, { children: n });
}
function b(e) {
    let { emojiRef: n, channelId: r, messageId: i, emojiName: a } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getMessage(r, i)),
        { triggerAnimation: u } = s.useContext(v);
    return (
        s.useEffect(() => {
            if (!f.Z.triggerEmojiAnimationFromSentMessage || (null == l ? void 0 : l.state) !== g.yb.SENT || (0, h.JL)(i)) return;
            let { top: e, bottom: r } = n.getBoundingClientRect();
            if (!!(e >= 0 && r <= window.innerHeight)) u(a), (0, h.i9)(i);
        }, [a, n, null == l ? void 0 : l.state, i, u]),
        null
    );
}
function y(e) {
    let { channelId: n, messageId: r, emojiName: i, disable: s, emojiRef: c } = e,
        d = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        f = _.Z.useIsEligible(),
        h = (0, l.bp)();
    return s || h === g.IlC.OVERLAY || !f || null == r || null == n || d || null == c || !E(i)
        ? null
        : (0, a.jsx)(b, {
              emojiRef: c,
              channelId: n,
              messageId: r,
              emojiName: i
          });
}
