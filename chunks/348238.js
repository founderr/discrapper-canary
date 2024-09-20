n.d(t, {
    $3: function () {
        return w;
    },
    Go: function () {
        return k;
    },
    JC: function () {
        return L;
    },
    NU: function () {
        return b;
    },
    Nk: function () {
        return v;
    },
    R9: function () {
        return P;
    },
    RN: function () {
        return y;
    },
    Wl: function () {
        return M;
    },
    XO: function () {
        return x;
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
        return D;
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
    s = n(470079),
    a = n(668781),
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
    g = n(50284),
    S = n(981631),
    A = n(689938);
function R(e, t, n) {
    return s.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function O(e, t, n) {
    return s.useCallback(
        (i) => {
            let s = m.default.getUser(e);
            if (null == s) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let a = '@'.concat(C.ZP.getUserTag(s, { decoration: 'never' })),
                r = '<@'.concat(e, '>');
            T.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: r
            }),
                o.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function x(e, t, n, i) {
    let s = R('usernameProfile', n, i);
    return O(e.author.id, t.id, s);
}
function M(e, t, n, i) {
    let s = R('referencedUsernameProfile', n, i);
    return O(null == e ? void 0 : e.author.id, t.id, s);
}
function v(e, t, n, i) {
    let s = R('interactionUsernameProfile', n, i);
    return O(null == e ? void 0 : e.user.id, t.id, s);
}
function L(e, t, n, i) {
    let s = R('referencedUsernameProfile', n, i);
    return O(e, t.id, s);
}
function Z(e) {
    return s.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function P(e, t) {
    return Z(R('avatarProfile', e, t));
}
function D(e, t) {
    return Z(R('referencedAvatarProfile', e, t));
}
function b(e, t) {
    return Z(R('interactionAvatarProfile', e, t));
}
function j(e, t, a, l) {
    let { id: o } = t,
        { id: u, flags: d } = e,
        m = (0, N.yE)(d, S.iLy.EPHEMERAL),
        T = (0, c.bp)();
    return s.useCallback(
        (e, t) => {
            if (m) return;
            if (!f.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let s = _.Z.getChannel(o),
                c = I.Z.getMessage(o, u),
                d = E.Z.isEditing(o, u);
            if (null != s && null != c && !d)
                a({ contextMenu: !0 }),
                    (0, r.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('92557'), n.e('37220'), n.e('68342')]).then(n.bind(n, 225138));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: c,
                                    channel: s,
                                    mediaItem: t,
                                    shouldHideMediaOptions: l
                                });
                        },
                        {
                            onClose: () => a({ contextMenu: !1 }),
                            context: T
                        }
                    );
        },
        [m, o, u, a, T, l]
    );
}
function U(e, t) {
    return s.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                s = _.Z.getChannel(t);
            null != i && null != s && (n.stopPropagation(), (0, p.Pv)(n, i, s));
        },
        [e, t]
    );
}
function y(e, t, n) {
    return s.useCallback(
        (i) => {
            let s = m.default.getUser(e),
                a = _.Z.getChannel(t);
            null != s &&
                null != a &&
                (i.stopPropagation(),
                (0, p._j)(i, {
                    user: s,
                    channel: a,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return s.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                s = _.Z.getChannel(t);
            null != i && null != s && (n.stopPropagation(), (0, p.xS)(n, i, s.guild_id));
        },
        [e, t]
    );
}
function k(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return s.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, g.Z)(i, n));
        },
        [i, n]
    );
}
function F(e, t, n) {
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        a = ''.concat(e, ':').concat(t),
        r = s.useRef(n),
        [l, o] = s.useState(n);
    r.current = l || r.current;
    let c = s.useCallback(() => {
            i && (0, d.T6)(), !l && (T.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, a, !0), o(!0));
        }, [l, a, i]),
        _ = s.useCallback(() => {
            T.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, a, !1), o(!1);
        }, [a]);
    return {
        hasHovered: r.current,
        isHovered: l,
        handleMouseEnter: c,
        handleMouseLeave: _
    };
}
function G(e, t) {
    let [n, i] = s.useState(!1),
        [a, r] = s.useState(!1),
        l = s.useCallback(
            (t) => {
                var n, s;
                let a = null !== (s = null === (n = (0, h.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
                (t.target === t.currentTarget || t.currentTarget.contains(a)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: l,
        handleBlur: s.useCallback(
            (e) => {
                var n, s;
                let a = null !== (s = null === (n = (0, h.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(a)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: a
    };
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return s.useCallback(() => {
        null != t &&
            (n
                ? a.Z.show({
                      title: A.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                      body: A.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: t.author.username }),
                      confirmText: A.Z.Messages.OKAY
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
    let n = R('interactionData', e, t);
    return s.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
