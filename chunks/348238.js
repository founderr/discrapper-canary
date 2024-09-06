n.d(t, {
    $3: function () {
        return w;
    },
    Go: function () {
        return k;
    },
    NU: function () {
        return D;
    },
    Nk: function () {
        return L;
    },
    R9: function () {
        return P;
    },
    RN: function () {
        return y;
    },
    Wl: function () {
        return v;
    },
    XO: function () {
        return M;
    },
    Xn: function () {
        return V;
    },
    bb: function () {
        return G;
    },
    qo: function () {
        return j;
    },
    rY: function () {
        return b;
    },
    sR: function () {
        return B;
    },
    tn: function () {
        return F;
    },
    wq: function () {
        return U;
    }
}),
    n(789020),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(668781),
    r = n(239091),
    l = n(904245),
    o = n(144144),
    c = n(40851),
    u = n(407477),
    d = n(675478),
    _ = n(592125),
    E = n(323873),
    I = n(375954),
    m = n(594174),
    T = n(585483),
    h = n(5967),
    N = n(630388),
    f = n(358085),
    C = n(51144),
    p = n(91047),
    g = n(901461),
    S = n(50284),
    A = n(981631),
    R = n(689938);
function O(e, t, n) {
    return a.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function x(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = m.default.getUser(e);
            if (null == a) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let s = '@'.concat(C.ZP.getUserTag(a, { decoration: 'never' })),
                r = '<@'.concat(e, '>');
            T.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
                plainText: s,
                rawText: r
            }),
                o.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function M(e, t, n, i) {
    let a = O('usernameProfile', n, i);
    return x(e.author.id, t.id, a);
}
function v(e, t, n, i) {
    let a = O('referencedUsernameProfile', n, i);
    return x(null == e ? void 0 : e.author.id, t.id, a);
}
function L(e, t, n, i) {
    let a = O('interactionUsernameProfile', n, i);
    return x(null == e ? void 0 : e.user.id, t.id, a);
}
function Z(e) {
    return a.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function P(e, t) {
    return Z(O('avatarProfile', e, t));
}
function b(e, t) {
    return Z(O('referencedAvatarProfile', e, t));
}
function D(e, t) {
    return Z(O('interactionAvatarProfile', e, t));
}
function j(e, t, s, l) {
    let { id: o } = t,
        { id: u, flags: d } = e,
        m = (0, N.yE)(d, A.iLy.EPHEMERAL),
        T = (0, g.Z)(e),
        h = (0, c.bp)();
    return a.useCallback(
        (e, t) => {
            if (m) return;
            if (!f.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let a = _.Z.getChannel(o),
                c = I.Z.getMessage(o, u),
                d = E.Z.isEditing(o, u);
            if (null != a && null != c && !d)
                s({ contextMenu: !0 }),
                    (0, r.jW)(
                        e,
                        async () => {
                            if (T) {
                                let { default: e } = await Promise.all([n.e('29975'), n.e('38626')]).then(n.bind(n, 240678));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        message: c,
                                        channel: a,
                                        mediaItem: t
                                    });
                            }
                            {
                                let { default: e } = await Promise.all([n.e('92557'), n.e('29975'), n.e('37220'), n.e('31766')]).then(n.bind(n, 225138));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        message: c,
                                        channel: a,
                                        mediaItem: t,
                                        shouldHideMediaOptions: l
                                    });
                            }
                        },
                        {
                            onClose: () => s({ contextMenu: !1 }),
                            context: h
                        }
                    );
        },
        [m, o, u, s, h, T, l]
    );
}
function U(e, t) {
    return a.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                a = _.Z.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, p.Pv)(n, i, a));
        },
        [e, t]
    );
}
function y(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = m.default.getUser(e),
                s = _.Z.getChannel(t);
            null != a &&
                null != s &&
                (i.stopPropagation(),
                (0, p._j)(i, {
                    user: a,
                    channel: s,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return a.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                a = _.Z.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, p.xS)(n, i, a.guild_id));
        },
        [e, t]
    );
}
function k(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return a.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, S.Z)(i, n));
        },
        [i, n]
    );
}
function F(e, t, n) {
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        s = ''.concat(e, ':').concat(t),
        r = a.useRef(n),
        [l, o] = a.useState(n);
    r.current = l || r.current;
    let c = a.useCallback(() => {
            i && (0, d.T6)(), !l && (T.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, !0), o(!0));
        }, [l, s, i]),
        _ = a.useCallback(() => {
            T.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, !1), o(!1);
        }, [s]);
    return {
        hasHovered: r.current,
        isHovered: l,
        handleMouseEnter: c,
        handleMouseLeave: _
    };
}
function G(e, t) {
    let [n, i] = a.useState(!1),
        [s, r] = a.useState(!1),
        l = a.useCallback(
            (t) => {
                var n, a;
                let s = null !== (a = null === (n = (0, h.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
                (t.target === t.currentTarget || t.currentTarget.contains(s)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: l,
        handleBlur: a.useCallback(
            (e) => {
                var n, a;
                let s = null !== (a = null === (n = (0, h.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(s)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: s
    };
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.useCallback(() => {
        null != t &&
            (n
                ? s.Z.show({
                      title: R.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                      body: R.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: t.author.username }),
                      confirmText: R.Z.Messages.OKAY
                  })
                : l.Z.jumpToMessage({
                      channelId: t.channel_id,
                      messageId: t.id,
                      flash: !0,
                      returnMessageId: e.id
                  }));
    }, [n, e.id, t]);
}
function V(e, t) {
    let n = O('interactionData', e, t);
    return a.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
