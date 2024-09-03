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
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n(180081),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(904245),
    m = n(372900),
    _ = n(905405),
    f = n(937889),
    E = n(739566),
    C = n(267128),
    g = n(378233),
    I = n(419922),
    x = n(375954),
    T = n(699516),
    N = n(768581),
    S = n(70956),
    v = n(823379),
    Z = n(981631),
    A = n(217702),
    M = n(118465);
let b = 10 * S.Z.Millis.SECOND;
function R(e) {
    var t;
    let { message: n } = e,
        s = (0, c.e7)([T.Z], () => T.Z.isBlockedForMessage(n)),
        r = (0, E.Uj)(n),
        o = a.useContext(m.Z),
        [d, x] = a.useState(!1),
        S = (0, _.p)(),
        v = a.useCallback(
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
        Z =
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
            leadingIcon: j
        } = (0, C.f)(n, Z, s, M.messageContent, {
            trailingIconClass: M.messageContentTrailingIcon,
            leadingIconClass: M.messageContentLeadingIcon,
            iconSize: A.WW
        }),
        O = (0, g.cv)(n),
        P =
            O.length > 0
                ? O.map((e) =>
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
            x(!0);
        },
        onMouseLeave: () => {
            x(!1);
        },
        onClick: v,
        children: [
            (0, i.jsxs)('div', {
                className: l()(M.messageContentWrapper, { [M.mentioned]: n.mentioned }),
                children: [null != P ? null : j, null !== (t = null != R ? R : P) && void 0 !== t ? t : (0, i.jsx)('span', { children: b }), null != P ? null : L]
            }),
            (0, i.jsx)('img', {
                alt: '',
                src:
                    (null == r ? void 0 : r.guildMemberAvatar) != null && null != o
                        ? (0, N.JM)({
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
        [s, h] = a.useState(!1),
        { toastsHidden: p, toastMessages: m } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: s, lingerMs: l } = e,
                [r, o] = a.useState([]),
                [u, h] = a.useState(!1),
                p = a.useRef(null),
                m = a.useRef(),
                _ = a.useCallback(() => {
                    o([]), h(!0);
                }, []);
            a.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: i } = e;
                    if (t === n && i.type !== Z.uaV.STAGE_START && i.type !== Z.uaV.STAGE_END && i.type !== Z.uaV.STAGE_TOPIC && i.type !== Z.uaV.STAGE_SPEAKER && i.type !== Z.uaV.STAGE_RAISE_HAND) clearTimeout(m.current), (m.current = setTimeout(_, l)), o((e) => [...e, i.id]);
                }
                return (
                    d.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        d.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, _, s, l]),
                a.useEffect(
                    () => () => {
                        clearTimeout(m.current);
                    },
                    []
                ),
                a.useEffect(() => {
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
                toastMessages: (0, c.Wu)([x.Z], () => f.map((e) => x.Z.getMessage(n, e)), [n, f]).filter(v.lm)
            };
        })({
            channelId: t,
            isFrozen: s,
            count: 3,
            lingerMs: b
        }),
        _ = a.useRef({}),
        [f, E] = a.useState({}),
        C = a.useCallback((e, t) => {
            null == t ? delete _.current[e] : (_.current[e] = t);
        }, []);
    a.useLayoutEffect(() => {
        let e = {},
            t = 0;
        for (let i of m) {
            var n;
            let a = null !== (n = _.current[i.id]) && void 0 !== n ? n : 0;
            (e[i.id] = t), (t += a + 8);
        }
        !(0, r.isEqual)(e, f) && E(e);
    }, [m]);
    let g = m.map((e) => ({
            message: e,
            height: _.current[e.id],
            y: f[e.id]
        })),
        I = (0, u.useTransition)(g, {
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
        theme: Z.BRd.DARK,
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
                        ref: (e) => C(t.message.id, null != e ? e.offsetHeight : null),
                        className: M.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(R, { message: t.message })
                    })
                )
            })
    });
}
