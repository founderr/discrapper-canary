n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(607070),
    _ = n(339085),
    E = n(906411),
    f = n(633302),
    h = n(691251),
    p = n(536442),
    m = n(912893),
    I = n(430824),
    T = n(358085),
    g = n(288406),
    S = n(689938),
    A = n(886028);
let v = (e, t) => ''.concat(e, ':').concat(t),
    N = a.forwardRef(function (e, t) {
        let { emoji: n, isFavorite: r, isLargeSize: a, isMediumSize: o, isInspected: c, isDisabled: d, showPulse: _, columnIndex: f, rowIndex: p, size: m, surrogateCodePoint: T, allowAnimatedEmoji: v, selectedItemClassName: N, inNitroLockedSection: O, ...R } = e,
            C = (0, l.e7)([I.Z], () => (n.type === E.B.GUILD ? I.Z.getGuild(n.guildId) : void 0), [n]),
            y = () => {
                let e = n.allNamesString;
                return ((null == C ? void 0 : C.name) != null &&
                    (e = S.Z.Messages.EMOJI_FROM_GUILD_LABEL.format({
                        names: e,
                        guildName: C.name
                    })),
                r)
                    ? S.Z.Messages.EMOJI_NAMES_WITH_FAVORITED.format({ names: e })
                    : e;
            },
            b = d && !O;
        return (0, i.jsx)(u.FocusRing, {
            children: (0, i.jsx)('button', {
                ...R,
                className: s()(A.emojiItem, {
                    [A.emojiItemLarge]: a,
                    [A.emojiItemMedium]: o,
                    [A.emojiItemSelected]: c,
                    [null != N ? N : '']: c,
                    [A.showPulse]: _
                }),
                'data-type': h.S.EMOJI,
                'data-id': n.id,
                'data-name': n.name,
                'data-surrogates': 'surrogates' in n ? n.surrogates : null,
                'data-animated': n.animated ? 'true' : null,
                ref: t,
                children: (0, i.jsx)(g.Z, {
                    'aria-label': y(),
                    columnIndex: f,
                    rowIndex: p,
                    emoji: n,
                    size: m,
                    surrogateCodePoint: T,
                    allowAnimatedEmoji: v,
                    isLocked: b
                })
            })
        });
    });
function O(e) {
    let { descriptor: t, emojiItemKey: r, isInspected: o, rowIndex: s, channelGuildId: E, onInspect: h, onSelect: I, isScrolling: g, isUsingKeyboardNavigation: A, showEmojiFavoriteTooltip: O, surrogateCodePoint: R, selectedItemClassName: C, getEmojiItemProps: y, isMediumSize: b, isLargeSize: L, pulseItemKey: D, allowAnimatedEmoji: M, setPulseItemKey: P, messageId: U, isBurstReaction: w, rowPosition: x, inNitroLockedSection: G } = e,
        [k, B] = a.useState(''),
        F = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, l.e7)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(E), [E]),
        V = a.useRef(null),
        { emoji: H, size: Y, isDisabled: j, columnIndex: W } = t,
        K = (e) => {
            if ((e.stopPropagation(), g.current || A.current)) return;
            let n = e.altKey;
            n && !_.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && P(r),
                (0, p.Kw)(p.v6.FAVORITE_EMOJI_TOOLTIP),
                I(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n
                });
        },
        z = () => {
            !g.current && !A.current && h(t);
        },
        q = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        Q = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { ref: l, tabIndex: u, onFocus: c, ...d } = null !== (e = y(W, s)) && void 0 !== e ? e : {};
            return (0, a.createElement)(
                'li',
                {
                    ...d,
                    key: r,
                    ref: V
                },
                k !== v(W, s) &&
                    (0, i.jsx)(N, {
                        ref: l,
                        emoji: H,
                        isFavorite: Z.isFavoriteEmojiWithoutFetchingLatest(H),
                        isLargeSize: L,
                        isMediumSize: b,
                        isInspected: o,
                        isDisabled: j,
                        showPulse: D === r,
                        allowAnimatedEmoji: M,
                        onFocus: null != c ? c : z,
                        onMouseMove: z,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (null != V.current && null != x && null != U && !e.shiftKey && null != H.name && w && !F && M) {
                                let e = null == H.id ? f.ZP.convertNameToSurrogate(H.name) : H.name,
                                    t = V.current.getBoundingClientRect();
                                (t.x = x.x + (W + 1) * Y), B(v(W, s)), (0, m.U)(U, e, H.id, t);
                            }
                            K(e);
                        },
                        onContextMenu: q,
                        tabIndex: u,
                        columnIndex: W,
                        rowIndex: s,
                        size: Y,
                        surrogateCodePoint: R,
                        selectedItemClassName: C,
                        inNitroLockedSection: G
                    })
            );
        };
    return O
        ? (0, i.jsx)(
              u.Tooltip,
              {
                  text: S.Z.Messages.EMOJI_FAVORITE_TOOLTIP.format({ key: (0, T.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => Q(e)
              },
              r
          )
        : Q();
}
