n.d(t, {
    k: function () {
        return L;
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
    b = n(111846),
    I = n(392552),
    S = n(543241),
    T = n(199257),
    y = n(880949),
    A = n(784222),
    N = n(149203),
    C = n(388032),
    R = n(345687);
function O(e) {
    return 'animated' in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = O(t);
        return null != n && r ? C.intl.format(C.t.KFW2aW, { guildName: n.name }) : null;
    },
    L = i.memo(function (e) {
        let t,
            L,
            x,
            { className: w, emojiGrid: M, guildId: P, pickerIntention: k, channel: U } = e,
            { enabled: G } = I.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            B = _.kJ.useStore((e) => e.inspectedExpressionPosition),
            Z = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = B;
                return null === (e = M[t]) || void 0 === e ? void 0 : e[n];
            }, [M, B]);
        switch (null == Z ? void 0 : Z.type) {
            case A.ld.EMOJI:
                t = null == Z ? void 0 : Z.emoji;
                break;
            case A.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
                break;
            case A.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
        }
        let F = (0, a.e7)([g.Z], () => (null !== t && t.type === c.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            { useTransparentIcons: V } = b.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            j = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            H = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            Y = m.Yk.useSetting(),
            W = (0, S.C1)(P, O(t) ? t : null),
            K = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: z } = (0, T.Z)(P, k),
            q = t.id,
            Q = (null == Z ? void 0 : Z.type) === A.ld.EMOJI ? Z.subCategory : N.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= 250 &&
                        O(t) &&
                        Q !== N.t0.NONE &&
                        (Q === N.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, f.Zg)(t.guildId, z[0].id),
                        null != B.source &&
                            (0, S.Gn)({
                                emoji: t,
                                subCategory: Q,
                                position: Z.columnIndex + 1,
                                newlyAddedHighlight: Q === N.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(P, q)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let X = h.Z.theme;
        if (O(t)) {
            var J;
            let e =
                null != t.id
                    ? v.ZP.getEmojiURL({
                          id: t.id,
                          animated: Y && t.animated,
                          size: 28
                      })
                    : t.url;
            L =
                '' === e
                    ? (0, r.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          className: R.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, r.jsx)('img', {
                          alt: null !== (J = t.allNamesString) && void 0 !== J ? J : '',
                          src: e,
                          className: R.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            L = (0, r.jsx)(o.CirclePlusIcon, {
                size: 'md',
                color: 'currentColor',
                className: R.icon,
                colorClass: R.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = V ? n(187119) : n(137321),
                i = V ? n(39874) : n(233892),
                a = V ? n(853871) : n(942315),
                o = V ? n(63149) : n(636626);
            L = K.has(t.guildId)
                ? (0, r.jsx)('img', {
                      className: R.icon,
                      src: (0, s.wj)(X) ? a : o,
                      alt: ''
                  })
                : (0, r.jsx)('img', {
                      className: R.icon,
                      src: (0, s.wj)(X) ? e : i,
                      alt: ''
                  });
        }
        let $ =
            null != F
                ? (0, r.jsx)(y.Z, {
                      className: R.__invalid_guildIcon,
                      guild: F,
                      shouldAnimate: !H && j
                  })
                : null;
        x = G && 'CREATE_EMOJI' === t.type ? C.intl.string(C.t.XCmLfH) : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (K.has(t.guildId) ? C.intl.string(C.t['/K2RDA']) : C.intl.string(C.t.NZI2Zm)) : t.allNamesString;
        let ee =
            G && 'CREATE_EMOJI' === t.type
                ? C.intl.string(C.t['Z/r7IS'])
                : D({
                      inspectedEmoji: t,
                      channel: U,
                      guildId: P,
                      intention: k,
                      guild: F
                  });
        return (0, r.jsx)(p.Z, {
            className: w,
            graphicPrimary: L,
            graphicSecondary: $,
            titlePrimary: x,
            titleSecondary: ee,
            isFavorite: W,
            emojiSubCategory: Q
        });
    });
