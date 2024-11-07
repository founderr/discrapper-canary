n.d(t, {
    $3: function () {
        return G;
    },
    Go: function () {
        return U;
    },
    JC: function () {
        return R;
    },
    NU: function () {
        return O;
    },
    Nk: function () {
        return Z;
    },
    R9: function () {
        return P;
    },
    RN: function () {
        return D;
    },
    Wl: function () {
        return j;
    },
    XO: function () {
        return b;
    },
    Xn: function () {
        return V;
    },
    bb: function () {
        return F;
    },
    qo: function () {
        return M;
    },
    rY: function () {
        return y;
    },
    sR: function () {
        return B;
    },
    tn: function () {
        return w;
    },
    wq: function () {
        return k;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(668781),
    a = n(239091),
    o = n(904245),
    s = n(144144),
    c = n(40851),
    u = n(407477),
    d = n(675478),
    m = n(592125),
    h = n(323873),
    f = n(375954),
    p = n(594174),
    _ = n(585483),
    g = n(5967),
    E = n(630388),
    C = n(358085),
    I = n(51144),
    x = n(91047),
    N = n(50284),
    v = n(981631),
    T = n(388032);
function S(e, t, n) {
    return r.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function A(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = p.default.getUser(e);
            if (null == r) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let l = '@'.concat(I.ZP.getUserTag(r, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            _.S.dispatchToLastSubscribed(v.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                s.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function b(e, t, n, i) {
    let r = S('usernameProfile', n, i);
    return A(e.author.id, t.id, r);
}
function j(e, t, n, i) {
    let r = S('referencedUsernameProfile', n, i);
    return A(null == e ? void 0 : e.author.id, t.id, r);
}
function Z(e, t, n, i) {
    let r = S('interactionUsernameProfile', n, i);
    return A(null == e ? void 0 : e.user.id, t.id, r);
}
function R(e, t, n, i) {
    let r = S('referencedUsernameProfile', n, i);
    return A(e, t.id, r);
}
function L(e) {
    return r.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function P(e, t) {
    return L(S('avatarProfile', e, t));
}
function y(e, t) {
    return L(S('referencedAvatarProfile', e, t));
}
function O(e, t) {
    return L(S('interactionAvatarProfile', e, t));
}
function M(e, t, l, o) {
    let { id: s } = t,
        { id: u, flags: d } = e,
        p = (0, E.yE)(d, v.iLy.EPHEMERAL),
        _ = (0, c.bp)();
    return r.useCallback(
        (e, t) => {
            if (p) return;
            if (!C.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let r = m.Z.getChannel(s),
                c = f.Z.getMessage(s, u),
                d = h.Z.isEditing(s, u);
            if (null != r && null != c && !d)
                l({ contextMenu: !0 }),
                    (0, a.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('33862'), n.e('93375'), n.e('37220'), n.e('43332')]).then(n.bind(n, 225138));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: c,
                                    channel: r,
                                    mediaItem: t,
                                    shouldHideMediaOptions: o
                                });
                        },
                        {
                            onClose: () => l({ contextMenu: !1 }),
                            context: _
                        }
                    );
        },
        [p, s, u, l, _, o]
    );
}
function k(e, t) {
    return r.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                r = m.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, x.Pv)(n, i, r));
        },
        [e, t]
    );
}
function D(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = p.default.getUser(e),
                l = m.Z.getChannel(t);
            null != r &&
                null != l &&
                (i.stopPropagation(),
                (0, x._j)(i, {
                    user: r,
                    channel: l,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return r.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                r = m.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, x.xS)(n, i, r.guild_id));
        },
        [e, t]
    );
}
function U(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return r.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, N.Z)(i, n));
        },
        [i, n]
    );
}
function w(e, t, n) {
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        l = ''.concat(e, ':').concat(t),
        a = r.useRef(n),
        [o, s] = r.useState(n);
    a.current = o || a.current;
    let c = r.useCallback(() => {
            i && (0, d.T6)(), !o && (_.S.dispatchKeyed(v.LPv.ANIMATE_CHAT_AVATAR, l, !0), s(!0));
        }, [o, l, i]),
        m = r.useCallback(() => {
            _.S.dispatchKeyed(v.LPv.ANIMATE_CHAT_AVATAR, l, !1), s(!1);
        }, [l]);
    return {
        hasHovered: a.current,
        isHovered: o,
        handleMouseEnter: c,
        handleMouseLeave: m
    };
}
function F(e, t) {
    let [n, i] = r.useState(!1),
        [l, a] = r.useState(!1),
        o = r.useCallback(
            (t) => {
                var n, r;
                let l = null !== (r = null === (n = (0, g.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: o,
        handleBlur: r.useCallback(
            (e) => {
                var n, r;
                let l = null !== (r = null === (n = (0, g.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(l)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: l
    };
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return r.useCallback(() => {
        null != t &&
            (n
                ? l.Z.show({
                      title: T.intl.string(T.t['j7eA/v']),
                      body: T.intl.formatToPlainString(T.t.dTNNgo, { name: t.author.username }),
                      confirmText: T.intl.string(T.t.BddRzc)
                  })
                : o.Z.jumpToMessage({
                      channelId: t.channel_id,
                      messageId: t.id,
                      flash: !0,
                      returnMessageId: e.id
                  }));
    }, [n, e.id, t]);
}
function V(e, t) {
    let n = S('interactionData', e, t);
    return r.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
