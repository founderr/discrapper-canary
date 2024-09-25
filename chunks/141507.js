n.d(t, {
    k: function () {
        return M;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    l = n(607070),
    u = n(339085),
    c = n(906411),
    d = n(438332),
    _ = n(664437),
    E = n(806966),
    f = n(65029),
    h = n(210887),
    p = n(695346),
    m = n(430824),
    I = n(451478),
    T = n(768581),
    g = n(111846),
    S = n(392552),
    A = n(543241),
    v = n(199257),
    N = n(880949),
    O = n(784222),
    R = n(149203),
    C = n(689938),
    y = n(5772);
let b = 250;
function L(e) {
    return 'animated' in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = L(t);
        return null != n && r ? C.Z.Messages.EMOJI_FROM_GUILD.format({ guildName: n.name }) : null;
    },
    M = i.memo(function (e) {
        let t,
            M,
            P,
            { className: U, emojiGrid: w, guildId: x, pickerIntention: G, channel: k } = e,
            { enabled: B } = S.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            F = E.kJ.useStore((e) => e.inspectedExpressionPosition),
            Z = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = F;
                return null === (e = w[t]) || void 0 === e ? void 0 : e[n];
            }, [w, F]);
        switch (null == Z ? void 0 : Z.type) {
            case O.ld.EMOJI:
                t = null == Z ? void 0 : Z.emoji;
                break;
            case O.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
                break;
            case O.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
        }
        let V = (0, a.e7)([m.Z], () => (null !== t && t.type === c.B.GUILD ? m.Z.getGuild(t.guildId) : null), [t]),
            { useTransparentIcons: H } = g.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            Y = (0, a.e7)([I.Z], () => I.Z.isFocused()),
            j = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            W = p.Yk.useSetting(),
            K = (0, A.C1)(x, L(t) ? t : null),
            z = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: q } = (0, v.Z)(x, G),
            Q = t.id,
            X = (null == Z ? void 0 : Z.type) === O.ld.EMOJI ? Z.subCategory : R.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= b &&
                        L(t) &&
                        X !== R.t0.NONE &&
                        (X === R.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, _.Zg)(t.guildId, q[0].id),
                        null != F.source &&
                            (0, A.Gn)({
                                emoji: t,
                                subCategory: X,
                                position: Z.columnIndex + 1,
                                newlyAddedHighlight: X === R.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(x, Q)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let $ = h.Z.theme;
        if (L(t)) {
            var J;
            let e =
                null != t.id
                    ? T.ZP.getEmojiURL({
                          id: t.id,
                          animated: W && t.animated,
                          size: 28
                      })
                    : t.url;
            M =
                '' === e
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          className: y.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, r.jsx)('img', {
                          alt: null !== (J = t.allNamesString) && void 0 !== J ? J : '',
                          src: e,
                          className: y.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            M = (0, r.jsx)(s.CirclePlusIcon, {
                size: 'md',
                color: 'currentColor',
                className: y.icon,
                colorClass: y.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = H ? n(187119) : n(137321),
                i = H ? n(39874) : n(233892),
                a = H ? n(853871) : n(942315),
                s = H ? n(63149) : n(636626);
            M = z.has(t.guildId)
                ? (0, r.jsx)('img', {
                      className: y.icon,
                      src: (0, o.wj)($) ? a : s,
                      alt: ''
                  })
                : (0, r.jsx)('img', {
                      className: y.icon,
                      src: (0, o.wj)($) ? e : i,
                      alt: ''
                  });
        }
        let ee =
            null != V
                ? (0, r.jsx)(N.Z, {
                      className: y.__invalid_guildIcon,
                      guild: V,
                      shouldAnimate: !j && Y
                  })
                : null;
        P = B && 'CREATE_EMOJI' === t.type ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (z.has(t.guildId) ? C.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION : C.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION) : t.allNamesString;
        let et =
            B && 'CREATE_EMOJI' === t.type
                ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
                : D({
                      inspectedEmoji: t,
                      channel: k,
                      guildId: x,
                      intention: G,
                      guild: V
                  });
        return (0, r.jsx)(f.Z, {
            className: U,
            graphicPrimary: M,
            graphicSecondary: ee,
            titlePrimary: P,
            titleSecondary: et,
            isFavorite: K,
            emojiSubCategory: X
        });
    });
