n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    _ = n(131704),
    E = n(823379),
    f = n(5192),
    h = n(51144),
    p = n(785717),
    I = n(448197),
    m = n(698305),
    T = n(510659),
    S = n(810097),
    g = n(652853),
    A = n(228168),
    N = n(420212),
    R = n(689938),
    O = n(639899);
let v = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case A.n_.ACTIVITY:
                let a = R.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(S.jd).concat(a, '*\n').concat(t);
            case A.n_.AVATAR:
                let s = R.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(S.jd).concat(s, '*\n').concat(t);
            case A.n_.STATUS:
                let o = R.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? ''.concat(S.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(S.jd).concat(o, '*\n').concat(t);
            default:
                (0, E.vE)(r);
        }
    },
    L = (e) => {
        switch (e) {
            case A.n_.ACTIVITY:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case A.n_.AVATAR:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case A.n_.STATUS:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, E.vE)(e);
        }
    };
function D(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: E, setPopoutRef: S, modalKey: R, onClose: D } = e,
        { trackUserProfileAction: y } = (0, p.KZ)(),
        { sendReply: b } = (0, I.Q)(_),
        { resetInteraction: M, setInteractionToast: P } = (0, T.Xo)(),
        { primaryColor: U } = (0, g.z)(),
        [w, x] = i.useState(''),
        [G, k] = i.useState((0, c.JM)(w)),
        B = i.useRef(!1),
        F = i.useRef(null),
        V = i.useCallback(
            (e) => {
                e.key === N.vn.ESCAPE && (e.stopPropagation(), M());
            },
            [M]
        );
    i.useEffect(() => {
        null == S || S(null == F ? void 0 : F.current);
    }, [F, S]);
    let H = async (e) => {
            if (null == e) return;
            y({ action: b });
            let n = C({
                input: e,
                username: h.ZP.getName(t),
                sourceType: _,
                sourceDetails: E
            });
            P(null);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            P(A.P.REPLY);
        },
        Z = {
            [O.biteSize]: o === A.y0.BITE_SIZE,
            [O.panel]: o === A.y0.PANEL,
            [O.fullSize]: o === A.y0.FULL_SIZE
        },
        Y = {
            [O.status]: _ === A.n_.STATUS,
            [O.avatar]: _ === A.n_.AVATAR,
            [O.activity]: _ === A.n_.ACTIVITY
        };
    return (0, r.jsx)(l.V, {
        ref: F,
        onKeyDown: V,
        children: (0, r.jsx)('div', {
            className: s()(O.container, Z, Y, { [O.customProfileTheme]: null != U }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: R,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: O.inner,
                editorClassName: O.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: L(_).format({ username: f.ZP.getName(n, a, t) }),
                channel: v,
                textValue: w,
                richValue: G,
                onChange: (e, t, n) => {
                    if (t !== w) x(t), k(n);
                },
                focused: B.current,
                onFocus: () => {
                    B.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await H(n),
                            M(),
                            null == D || D(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    }
                }
            })
        })
    });
}
