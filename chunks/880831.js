n.d(t, {
    Z: function () {
        return P;
    },
    z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n(100621),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    m = n(904245),
    p = n(372900),
    f = n(905405),
    g = n(937889),
    C = n(739566),
    x = n(267128),
    v = n(378233),
    _ = n(419922),
    I = n(375954),
    E = n(699516),
    b = n(768581),
    S = n(70956),
    Z = n(823379),
    T = n(981631),
    N = n(217702),
    j = n(837161);
let A = 10 * S.Z.Millis.SECOND;
function y(e) {
    var t;
    let { message: n } = e,
        r = (0, c.e7)([E.Z], () => E.Z.isBlockedForMessage(n)),
        a = (0, C.Uj)(n),
        o = l.useContext(p.Z),
        [d, I] = l.useState(!1),
        S = (0, f.p)(),
        Z = l.useCallback(
            (e) => {
                if ('A' !== e.target.nodeName)
                    h.Z.updateChatOpen(n.channel_id, !0),
                        m.Z.jumpToMessage({
                            channelId: n.channel_id,
                            messageId: n.id,
                            flash: !0
                        });
            },
            [n.channel_id, n.id]
        ),
        T =
            null != n.content && '' !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: d,
                      shouldFilterKeywords: S
                  }).content
                : null,
        {
            contentPlaceholder: A,
            renderedContent: y,
            trailingIcon: P,
            leadingIcon: M
        } = (0, x.f)(n, T, r, j.messageContent, {
            trailingIconClass: j.messageContentTrailingIcon,
            leadingIconClass: j.messageContentLeadingIcon,
            iconSize: N.WW
        }),
        R = (0, v.cv)(n),
        L =
            R.length > 0
                ? R.map((e) =>
                      (0, i.jsx)(
                          _.ZP,
                          {
                              className: j.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: d
                          },
                          e.id
                      )
                  )
                : null;
    return (0, i.jsxs)(u.Clickable, {
        className: j.toast,
        onMouseEnter: () => {
            I(!0);
        },
        onMouseLeave: () => {
            I(!1);
        },
        onClick: Z,
        children: [
            (0, i.jsxs)('div', {
                className: s()(j.messageContentWrapper, { [j.mentioned]: n.mentioned }),
                children: [null != L ? null : M, null !== (t = null != y ? y : L) && void 0 !== t ? t : (0, i.jsx)('span', { children: A }), null != L ? null : P]
            }),
            (0, i.jsx)('img', {
                alt: '',
                src:
                    (null == a ? void 0 : a.guildMemberAvatar) != null && null != o
                        ? (0, b.JM)({
                              guildId: o,
                              userId: n.author.id,
                              avatar: a.guildMemberAvatar
                          })
                        : n.author.getAvatarURL(o, 32),
                className: j.avatar
            })
        ]
    });
}
function P(e) {
    let { channelId: t, className: n } = e,
        [r, h] = l.useState(!1),
        { toastsHidden: m, toastMessages: p } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: r, lingerMs: s } = e,
                [a, o] = l.useState([]),
                [u, h] = l.useState(!1),
                m = l.useRef(null),
                p = l.useRef(),
                f = l.useCallback(() => {
                    o([]), h(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: i } = e;
                    if (t === n && i.type !== T.uaV.STAGE_START && i.type !== T.uaV.STAGE_END && i.type !== T.uaV.STAGE_TOPIC && i.type !== T.uaV.STAGE_SPEAKER && i.type !== T.uaV.STAGE_RAISE_HAND) clearTimeout(p.current), (p.current = setTimeout(f, s)), o((e) => [...e, i.id]);
                }
                return (
                    d.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        d.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, f, r, s]),
                l.useEffect(
                    () => () => {
                        clearTimeout(p.current);
                    },
                    []
                ),
                l.useEffect(() => {
                    a.length > 3 &&
                        o((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                i && null == m.current ? (m.current = a) : !i && null != m.current && (m.current = null);
            let g = null !== (t = m.current) && void 0 !== t ? t : a;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([I.Z], () => g.map((e) => I.Z.getMessage(n, e)), [n, g]).filter(Z.lm)
            };
        })({
            channelId: t,
            isFrozen: r,
            count: 3,
            lingerMs: A
        }),
        f = l.useRef({}),
        [g, C] = l.useState({}),
        x = l.useCallback((e, t) => {
            null == t ? delete f.current[e] : (f.current[e] = t);
        }, []);
    l.useLayoutEffect(() => {
        let e = {},
            t = 0;
        for (let i of p) {
            var n;
            let l = null !== (n = f.current[i.id]) && void 0 !== n ? n : 0;
            (e[i.id] = t), (t += l + 8);
        }
        !(0, a.isEqual)(e, g) && C(e);
    }, [p]);
    let v = p.map((e) => ({
            message: e,
            height: f.current[e.id],
            y: g[e.id]
        })),
        _ = (0, u.useTransition)(v, {
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
                    translateY: m ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: 'none'
                };
            }
        });
    return (0, i.jsx)(u.ThemeProvider, {
        theme: T.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: _((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => x(t.message.id, null != e ? e.offsetHeight : null),
                        className: j.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(y, { message: t.message })
                    })
                )
            })
    });
}
