n.d(t, {
    $3: function () {
        return Y;
    },
    Go: function () {
        return Z;
    },
    JC: function () {
        return M;
    },
    NU: function () {
        return x;
    },
    Nk: function () {
        return D;
    },
    R9: function () {
        return U;
    },
    RN: function () {
        return B;
    },
    Wl: function () {
        return L;
    },
    XO: function () {
        return b;
    },
    Xn: function () {
        return j;
    },
    bb: function () {
        return H;
    },
    qo: function () {
        return G;
    },
    rY: function () {
        return w;
    },
    sR: function () {
        return F;
    },
    tn: function () {
        return V;
    },
    wq: function () {
        return k;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(668781),
    l = n(239091),
    u = n(904245),
    c = n(144144),
    d = n(40851),
    _ = n(407477),
    E = n(675478),
    f = n(592125),
    h = n(323873),
    p = n(375954),
    m = n(594174),
    I = n(585483),
    T = n(5967),
    g = n(630388),
    S = n(358085),
    A = n(51144),
    v = n(91047),
    N = n(50284),
    O = n(981631),
    R = n(689938);
function C(e, t, n) {
    return o.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function y(e, t, n) {
    return o.useCallback(
        (r) => {
            let i = m.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) {
                n();
                return;
            }
            let a = '@'.concat(A.ZP.getUserTag(i, { decoration: 'never' })),
                o = '<@'.concat(e, '>');
            I.S.dispatchToLastSubscribed(O.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o
            }),
                c.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function b(e, t, n, r) {
    let i = C('usernameProfile', n, r);
    return y(e.author.id, t.id, i);
}
function L(e, t, n, r) {
    let i = C('referencedUsernameProfile', n, r);
    return y(null == e ? void 0 : e.author.id, t.id, i);
}
function D(e, t, n, r) {
    let i = C('interactionUsernameProfile', n, r);
    return y(null == e ? void 0 : e.user.id, t.id, i);
}
function M(e, t, n, r) {
    let i = C('referencedUsernameProfile', n, r);
    return y(e, t.id, i);
}
function P(e) {
    return o.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function U(e, t) {
    return P(C('avatarProfile', e, t));
}
function w(e, t) {
    return P(C('referencedAvatarProfile', e, t));
}
function x(e, t) {
    return P(C('interactionAvatarProfile', e, t));
}
function G(e, t, r, i) {
    let { id: s } = t,
        { id: u, flags: c } = e,
        _ = (0, g.yE)(c, O.iLy.EPHEMERAL),
        E = (0, d.bp)();
    return o.useCallback(
        (e, t) => {
            if (_) return;
            if (!S.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let o = f.Z.getChannel(s),
                c = p.Z.getMessage(s, u),
                d = h.Z.isEditing(s, u);
            if (null != o && null != c && !d)
                r({ contextMenu: !0 }),
                    (0, l.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('92557'), n.e('37220'), n.e('90042')]).then(n.bind(n, 225138));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    ...n,
                                    message: c,
                                    channel: o,
                                    mediaItem: t,
                                    shouldHideMediaOptions: i
                                });
                        },
                        {
                            onClose: () => r({ contextMenu: !1 }),
                            context: E
                        }
                    );
        },
        [_, s, u, r, E, i]
    );
}
function k(e, t) {
    return o.useCallback(
        (n) => {
            let r = m.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, v.Pv)(n, r, i));
        },
        [e, t]
    );
}
function B(e, t, n) {
    return o.useCallback(
        (r) => {
            let i = m.default.getUser(e),
                a = f.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, v._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function F(e, t) {
    return o.useCallback(
        (n) => {
            let r = m.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, v.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function Z(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return o.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, N.Z)(r, n));
        },
        [r, n]
    );
}
function V(e, t, n) {
    let { canShowReactionsOnMessageHover: r } = _.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        i = ''.concat(e, ':').concat(t),
        a = o.useRef(n),
        [s, l] = o.useState(n);
    a.current = s || a.current;
    let u = o.useCallback(() => {
            r && (0, E.T6)(), !s && (I.S.dispatchKeyed(O.LPv.ANIMATE_CHAT_AVATAR, i, !0), l(!0));
        }, [s, i, r]),
        c = o.useCallback(() => {
            I.S.dispatchKeyed(O.LPv.ANIMATE_CHAT_AVATAR, i, !1), l(!1);
        }, [i]);
    return {
        hasHovered: a.current,
        isHovered: s,
        handleMouseEnter: u,
        handleMouseLeave: c
    };
}
function H(e, t) {
    let [n, r] = o.useState(!1),
        [i, a] = o.useState(!1),
        s = o.useCallback(
            (t) => {
                var n, i;
                let o = null !== (i = null === (n = (0, T.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
                (t.target === t.currentTarget || t.currentTarget.contains(o)) && (a(!0), r(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: s,
        handleBlur: o.useCallback(
            (e) => {
                var n, i;
                let a = null !== (i = null === (n = (0, T.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(a)) && r(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: i
    };
}
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return o.useCallback(() => {
        null != t &&
            (n
                ? s.Z.show({
                      title: R.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                      body: R.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: t.author.username }),
                      confirmText: R.Z.Messages.OKAY
                  })
                : u.Z.jumpToMessage({
                      channelId: t.channel_id,
                      messageId: t.id,
                      flash: !0,
                      returnMessageId: e.id
                  }));
    }, [n, e.id, t]);
}
function j(e, t) {
    let n = C('interactionData', e, t);
    return o.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
