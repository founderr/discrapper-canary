n.d(t, {
    Z: function () {
        return L;
    },
    z: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n(212433),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(904245),
    m = n(372900),
    _ = n(905405),
    f = n(937889),
    E = n(739566),
    g = n(267128),
    C = n(378233),
    I = n(419922),
    T = n(375954),
    x = n(699516),
    v = n(768581),
    S = n(70956),
    N = n(823379),
    A = n(981631),
    Z = n(217702),
    M = n(837161);
let b = 10 * S.Z.Millis.SECOND;
function R(e) {
    var t;
    let { message: n } = e,
        a = (0, c.e7)([x.Z], () => x.Z.isBlockedForMessage(n)),
        r = (0, E.Uj)(n),
        o = s.useContext(m.Z),
        [d, T] = s.useState(!1),
        S = (0, _.p)(),
        N = s.useCallback(
            (e) => {
                if ('A' !== e.target.nodeName)
                    h.Z.updateChatOpen(n.channel_id, !0),
                        p.Z.jumpToMessage({
                            channelId: n.channel_id,
                            messageId: n.id,
                            flash: !0
                        });
            },
            [n.channel_id, n.id]
        ),
        A =
            null != n.content && '' !== n.content
                ? (0, f.ZP)(n, {
                      isInteracting: d,
                      shouldFilterKeywords: S
                  }).content
                : null,
        {
            contentPlaceholder: b,
            renderedContent: R,
            trailingIcon: L,
            leadingIcon: P
        } = (0, g.f)(n, A, a, M.messageContent, {
            trailingIconClass: M.messageContentTrailingIcon,
            leadingIconClass: M.messageContentLeadingIcon,
            iconSize: Z.WW
        }),
        j = (0, C.cv)(n),
        O =
            j.length > 0
                ? j.map((e) =>
                      (0, i.jsx)(
                          I.ZP,
                          {
                              className: M.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: d
                          },
                          e.id
                      )
                  )
                : null;
    return (0, i.jsxs)(u.Clickable, {
        className: M.toast,
        onMouseEnter: () => {
            T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        onClick: N,
        children: [
            (0, i.jsxs)('div', {
                className: l()(M.messageContentWrapper, { [M.mentioned]: n.mentioned }),
                children: [null != O ? null : P, null !== (t = null != R ? R : O) && void 0 !== t ? t : (0, i.jsx)('span', { children: b }), null != O ? null : L]
            }),
            (0, i.jsx)('img', {
                alt: '',
                src:
                    (null == r ? void 0 : r.guildMemberAvatar) != null && null != o
                        ? (0, v.JM)({
                              guildId: o,
                              userId: n.author.id,
                              avatar: r.guildMemberAvatar
                          })
                        : n.author.getAvatarURL(o, 32),
                className: M.avatar
            })
        ]
    });
}
function L(e) {
    let { channelId: t, className: n } = e,
        [a, h] = s.useState(!1),
        { toastsHidden: p, toastMessages: m } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: a, lingerMs: l } = e,
                [r, o] = s.useState([]),
                [u, h] = s.useState(!1),
                p = s.useRef(null),
                m = s.useRef(),
                _ = s.useCallback(() => {
                    o([]), h(!0);
                }, []);
            s.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: i } = e;
                    if (t === n && i.type !== A.uaV.STAGE_START && i.type !== A.uaV.STAGE_END && i.type !== A.uaV.STAGE_TOPIC && i.type !== A.uaV.STAGE_SPEAKER && i.type !== A.uaV.STAGE_RAISE_HAND) clearTimeout(m.current), (m.current = setTimeout(_, l)), o((e) => [...e, i.id]);
                }
                return (
                    d.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        d.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, _, a, l]),
                s.useEffect(
                    () => () => {
                        clearTimeout(m.current);
                    },
                    []
                ),
                s.useEffect(() => {
                    r.length > 3 &&
                        o((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [r]),
                i && null == p.current ? (p.current = r) : !i && null != p.current && (p.current = null);
            let f = null !== (t = p.current) && void 0 !== t ? t : r;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([T.Z], () => f.map((e) => T.Z.getMessage(n, e)), [n, f]).filter(N.lm)
            };
        })({
            channelId: t,
            isFrozen: a,
            count: 3,
            lingerMs: b
        }),
        _ = s.useRef({}),
        [f, E] = s.useState({}),
        g = s.useCallback((e, t) => {
            null == t ? delete _.current[e] : (_.current[e] = t);
        }, []);
    s.useLayoutEffect(() => {
        let e = {},
            t = 0;
        for (let i of m) {
            var n;
            let s = null !== (n = _.current[i.id]) && void 0 !== n ? n : 0;
            (e[i.id] = t), (t += s + 8);
        }
        !(0, r.isEqual)(e, f) && E(e);
    }, [m]);
    let C = m.map((e) => ({
            message: e,
            height: _.current[e.id],
            y: f[e.id]
        })),
        I = (0, u.useTransition)(C, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return {
                    opacity: 1,
                    translateY: t
                };
            },
            update: (e) => {
                let { y: t } = e;
                return { translateY: t };
            },
            leave: (e) => {
                let { height: t, y: n } = e;
                return {
                    opacity: 0,
                    translateY: p ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: 'none'
                };
            }
        });
    return (0, i.jsx)(u.ThemeProvider, {
        theme: A.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: l()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: I((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => g(t.message.id, null != e ? e.offsetHeight : null),
                        className: M.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(R, { message: t.message })
                    })
                )
            })
    });
}
