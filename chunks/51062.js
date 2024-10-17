n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(470079),
    i = n(718922),
    a = n(442837),
    s = n(456007),
    o = n(998698),
    l = n(541716),
    u = n(797610),
    c = n(271383),
    d = n(496675),
    _ = n(246946),
    E = n(594174),
    f = n(106824),
    h = n(691841),
    p = n(981631),
    I = n(377668),
    m = n(185923);
function T(e, t, n) {
    var T, S, g, A, N, R, O;
    let { channel: v, type: C } = e,
        [L, D] = r.useState(() => (0, f.P)()),
        y = (0, i.Z)(),
        b = (0, a.e7)([c.ZP], () => {
            if (null != e.guild) {
                var t;
                return null != c.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, I.fL);
            }
            return !1;
        }),
        M = (0, u.Ib)(e.guild, e.channel) && !b && !(0, u.g0)(e.guild),
        P = (0, a.e7)([c.ZP, E.default], () => {
            var e, t;
            let n = E.default.getCurrentUser();
            return null !== (t = null != v.guild_id && null != n ? (null === (e = c.ZP.getMember(v.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canMentionEveryone: U, hidePersonalInformation: w } = (0, a.cj)(
            [d.Z, _.Z],
            () => ({
                canMentionEveryone: v.isPrivate() || P || C === l.I.RULES_INPUT || d.Z.can(p.Plq.MENTION_EVERYONE, v),
                hidePersonalInformation: _.Z.hidePersonalInformation
            }),
            [v, C, P]
        ),
        { activeCommand: x, activeCommandOption: G } = (0, a.cj)([o.Z], () => ({
            activeCommand: o.Z.getActiveCommand(v.id),
            activeCommandOption: o.Z.getActiveOption(v.id)
        })),
        k = (0, h.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: L,
            onFocus: (e) => V.setSelectedIndex(e)
        }),
        B = null === (T = e.editorRef.current) || void 0 === T ? void 0 : T.getCurrentWord(),
        F = {
            ...e,
            navigator: k,
            activeCommand: x,
            activeCommandOption: G,
            canMentionUsers: null !== (N = null === (S = C.users) || void 0 === S ? void 0 : S.allowMentioning) && void 0 !== N && N,
            canMentionEveryone: U,
            canMentionClyde: M,
            hidePersonalInformation: w,
            hideMentionDescription: C === l.I.RULES_INPUT,
            emojiIntention: C === l.I.RULES_INPUT ? m.Hz.COMMUNITY_CONTENT : m.Hz.CHAT,
            currentWord: null !== (R = null == B ? void 0 : B.word) && void 0 !== R ? R : '',
            currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
            optionText: null != G ? (0, s.KF)({ [G.name]: null !== (O = null === (g = e.editorRef.current) || void 0 === g ? void 0 : g.getCurrentCommandOptionValue()) && void 0 !== O ? O : [] }, G.name) : ''
        },
        [V] = r.useState(() => new f.Z(F));
    return (
        r.useEffect(() => {
            V.updateProps(F);
        }),
        r.useImperativeHandle(t, () => V, [V]),
        r.useEffect(() => {
            let e = (e) => D(e);
            return (
                V.on('change', e),
                V.on('update', y),
                () => {
                    V.off('change', e), V.off('update', y);
                }
            );
        }, [y, V]),
        r.useEffect(() => {
            var e;
            let t = null === (e = L.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => V.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [V, null === (A = L.query) || void 0 === A ? void 0 : A.typeInfo]),
        [L, V, k]
    );
}
