n.d(t, {
    k: function () {
        return D;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(607070),
    u = n(339085),
    c = n(906411),
    d = n(438332),
    f = n(664437),
    _ = n(806966),
    p = n(65029),
    h = n(210887),
    m = n(695346),
    g = n(430824),
    E = n(451478),
    v = n(768581),
    I = n(392552),
    T = n(543241),
    b = n(199257),
    S = n(880949),
    y = n(784222),
    A = n(149203),
    N = n(388032),
    C = n(598263);
function R(e) {
    return 'animated' in e;
}
let O = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = R(t);
        return null != n && r ? N.intl.format(N.t.KFW2aW, { guildName: n.name }) : null;
    },
    D = i.memo(function (e) {
        let t,
            D,
            L,
            { className: x, emojiGrid: w, guildId: P, pickerIntention: M, channel: k } = e,
            { enabled: U } = I.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            B = _.kJ.useStore((e) => e.inspectedExpressionPosition),
            G = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = B;
                return null === (e = w[t]) || void 0 === e ? void 0 : e[n];
            }, [w, B]);
        switch (null == G ? void 0 : G.type) {
            case y.ld.EMOJI:
                t = null == G ? void 0 : G.emoji;
                break;
            case y.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == G ? void 0 : G.guildId,
                    allNamesString: null == G ? void 0 : G.name
                };
                break;
            case y.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == G ? void 0 : G.guildId,
                    allNamesString: null == G ? void 0 : G.name
                };
        }
        let Z = (0, a.e7)([g.Z], () => (null !== t && t.type === c.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            F = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            V = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            j = m.Yk.useSetting(),
            H = (0, T.C1)(P, R(t) ? t : null),
            Y = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: W } = (0, b.Z)(P, M),
            K = t.id,
            z = (null == G ? void 0 : G.type) === y.ld.EMOJI ? G.subCategory : A.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= 250 &&
                        R(t) &&
                        z !== A.t0.NONE &&
                        (z === A.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, f.Zg)(t.guildId, W[0].id),
                        null != B.source &&
                            (0, T.Gn)({
                                emoji: t,
                                subCategory: z,
                                position: G.columnIndex + 1,
                                newlyAddedHighlight: z === A.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(P, K)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let q = h.Z.theme;
        if (R(t)) {
            var Q;
            let e =
                null != t.id
                    ? v.ZP.getEmojiURL({
                          id: t.id,
                          animated: j && t.animated,
                          size: 28
                      })
                    : t.url;
            D =
                '' === e
                    ? (0, r.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          className: C.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, r.jsx)('img', {
                          alt: null !== (Q = t.allNamesString) && void 0 !== Q ? Q : '',
                          src: e,
                          className: C.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            D = (0, r.jsx)(o.CirclePlusIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.icon,
                colorClass: C.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = n(187119),
                i = n(39874),
                a = n(853871),
                o = n(63149);
            D = Y.has(t.guildId)
                ? (0, r.jsx)('img', {
                      className: C.icon,
                      src: (0, s.wj)(q) ? a : o,
                      alt: ''
                  })
                : (0, r.jsx)('img', {
                      className: C.icon,
                      src: (0, s.wj)(q) ? e : i,
                      alt: ''
                  });
        }
        let X =
            null != Z
                ? (0, r.jsx)(S.Z, {
                      className: C.__invalid_guildIcon,
                      guild: Z,
                      shouldAnimate: !V && F
                  })
                : null;
        L = U && 'CREATE_EMOJI' === t.type ? N.intl.string(N.t.XCmLfH) : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (Y.has(t.guildId) ? N.intl.string(N.t['/K2RDA']) : N.intl.string(N.t.NZI2Zm)) : t.allNamesString;
        let J =
            U && 'CREATE_EMOJI' === t.type
                ? N.intl.string(N.t['Z/r7IS'])
                : O({
                      inspectedEmoji: t,
                      channel: k,
                      guildId: P,
                      intention: M,
                      guild: Z
                  });
        return (0, r.jsx)(p.Z, {
            className: x,
            graphicPrimary: D,
            graphicSecondary: X,
            titlePrimary: L,
            titleSecondary: J,
            isFavorite: H,
            emojiSubCategory: z
        });
    });
