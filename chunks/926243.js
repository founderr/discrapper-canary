n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(607070),
    d = n(339085),
    f = n(906411),
    _ = n(633302),
    h = n(691251),
    p = n(536442),
    m = n(912893),
    g = n(430824),
    E = n(358085),
    v = n(288406),
    I = n(388032),
    S = n(949235);
let T = (e, t) => ''.concat(e, ':').concat(t),
    b = i.forwardRef(function (e, t) {
        let n,
            { emoji: i, isFavorite: a, isLargeSize: u, isMediumSize: c, isInspected: d, isDisabled: _, showPulse: p, columnIndex: m, rowIndex: E, size: T, surrogateCodePoint: b, allowAnimatedEmoji: y, selectedItemClassName: A, inNitroLockedSection: N, ...C } = e,
            R = (0, o.e7)([g.Z], () => (i.type === f.B.GUILD ? g.Z.getGuild(i.guildId) : void 0), [i]);
        return (0, r.jsx)(l.FocusRing, {
            children: (0, r.jsx)('button', {
                ...C,
                className: s()(S.emojiItem, {
                    [S.emojiItemLarge]: u,
                    [S.emojiItemMedium]: c,
                    [S.emojiItemSelected]: d,
                    [null != A ? A : '']: d,
                    [S.showPulse]: p
                }),
                'data-type': h.S.EMOJI,
                'data-id': i.id,
                'data-name': i.name,
                'data-surrogates': 'surrogates' in i ? i.surrogates : null,
                'data-animated': i.animated ? 'true' : null,
                ref: t,
                children: (0, r.jsx)(v.Z, {
                    'aria-label':
                        ((n = i.allNamesString),
                        ((null == R ? void 0 : R.name) != null &&
                            (n = I.intl.formatToPlainString(I.t['nXv4/P'], {
                                names: n,
                                guildName: R.name
                            })),
                        a)
                            ? I.intl.formatToPlainString(I.t['9FI9Z2'], { names: n })
                            : n),
                    columnIndex: m,
                    rowIndex: E,
                    emoji: i,
                    size: T,
                    surrogateCodePoint: b,
                    allowAnimatedEmoji: y,
                    isLocked: _ && !N
                })
            })
        });
    });
function y(e) {
    let { descriptor: t, emojiItemKey: a, isInspected: s, rowIndex: f, channelGuildId: h, onInspect: g, onSelect: v, isScrolling: S, isUsingKeyboardNavigation: y, showEmojiFavoriteTooltip: A, surrogateCodePoint: N, selectedItemClassName: C, getEmojiItemProps: R, isMediumSize: O, isLargeSize: D, pulseItemKey: L, allowAnimatedEmoji: x, setPulseItemKey: w, messageId: M, isBurstReaction: P, rowPosition: k, inNitroLockedSection: U } = e,
        [G, B] = i.useState(''),
        Z = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        F = (0, o.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(h), [h]),
        V = i.useRef(null),
        { emoji: H, size: j, isDisabled: Y, columnIndex: W } = t,
        K = (e) => {
            if ((e.stopPropagation(), S.current || y.current)) return;
            let n = e.altKey;
            n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && w(a),
                (0, p.Kw)(p.v6.FAVORITE_EMOJI_TOOLTIP),
                v(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n
                });
        },
        z = () => {
            !S.current && !y.current && g(t);
        },
        q = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        Q = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { ref: o, tabIndex: l, onFocus: u, ...c } = null !== (e = R(W, f)) && void 0 !== e ? e : {};
            return (0, i.createElement)(
                'li',
                {
                    ...c,
                    key: a,
                    ref: V
                },
                G !== T(W, f) &&
                    (0, r.jsx)(b, {
                        ref: o,
                        emoji: H,
                        isFavorite: F.isFavoriteEmojiWithoutFetchingLatest(H),
                        isLargeSize: D,
                        isMediumSize: O,
                        isInspected: s,
                        isDisabled: Y,
                        showPulse: L === a,
                        allowAnimatedEmoji: x,
                        onFocus: null != u ? u : z,
                        onMouseMove: z,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (null != V.current && null != k && null != M && !e.shiftKey && null != H.name && P && !Z && x) {
                                let e = null == H.id ? _.ZP.convertNameToSurrogate(H.name) : H.name,
                                    t = V.current.getBoundingClientRect();
                                (t.x = k.x + (W + 1) * j), B(T(W, f)), (0, m.U)(M, e, H.id, t);
                            }
                            K(e);
                        },
                        onContextMenu: q,
                        tabIndex: l,
                        columnIndex: W,
                        rowIndex: f,
                        size: j,
                        surrogateCodePoint: N,
                        selectedItemClassName: C,
                        inNitroLockedSection: U
                    })
            );
        };
    return A
        ? (0, r.jsx)(
              l.Tooltip,
              {
                  text: I.intl.formatToPlainString(I.t.glqNsb, { key: (0, E.isMac)() ? 'Opt' : 'Alt' }),
                  position: 'top',
                  delay: 200,
                  children: (e) => Q(e)
              },
              a
          )
        : Q();
}
