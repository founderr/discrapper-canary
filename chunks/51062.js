n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(718922),
    o = n(442837),
    s = n(456007),
    l = n(998698),
    u = n(541716),
    c = n(797610),
    d = n(271383),
    _ = n(496675),
    E = n(246946),
    f = n(594174),
    h = n(106824),
    p = n(691841),
    m = n(981631),
    I = n(377668),
    T = n(185923);
function g(e, t, n) {
    var r, g, S, A, v, N, O;
    let { channel: R, type: C } = e,
        [y, L] = i.useState(() => (0, h.P)()),
        b = (0, a.Z)(),
        D = (0, o.e7)([d.ZP], () => {
            if (null != e.guild) {
                var t;
                return null != d.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, I.fL);
            }
            return !1;
        }),
        M = (0, c.Ib)(e.guild, e.channel) && !D && !(0, c.g0)(e.guild),
        P = (0, o.e7)([d.ZP, f.default], () => {
            var e, t;
            let n = f.default.getCurrentUser();
            return null !== (t = null != R.guild_id && null != n ? (null === (e = d.ZP.getMember(R.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canMentionEveryone: U, hidePersonalInformation: w } = (0, o.cj)(
            [_.Z, E.Z],
            () => ({
                canMentionEveryone: R.isPrivate() || P || C === u.I.RULES_INPUT || _.Z.can(m.Plq.MENTION_EVERYONE, R),
                hidePersonalInformation: E.Z.hidePersonalInformation
            }),
            [R, C, P]
        ),
        { activeCommand: x, activeCommandOption: G } = (0, o.cj)([l.Z], () => ({
            activeCommand: l.Z.getActiveCommand(R.id),
            activeCommandOption: l.Z.getActiveOption(R.id)
        })),
        k = (0, p.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: y,
            onFocus: (e) => Z.setSelectedIndex(e)
        }),
        B = null === (r = e.editorRef.current) || void 0 === r ? void 0 : r.getCurrentWord(),
        F = {
            ...e,
            navigator: k,
            activeCommand: x,
            activeCommandOption: G,
            canMentionUsers: null !== (v = null === (g = C.users) || void 0 === g ? void 0 : g.allowMentioning) && void 0 !== v && v,
            canMentionEveryone: U,
            canMentionClyde: M,
            hidePersonalInformation: w,
            hideMentionDescription: C === u.I.RULES_INPUT,
            emojiIntention: C === u.I.RULES_INPUT ? T.Hz.COMMUNITY_CONTENT : T.Hz.CHAT,
            currentWord: null !== (N = null == B ? void 0 : B.word) && void 0 !== N ? N : '',
            currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
            optionText: null != G ? (0, s.KF)({ [G.name]: null !== (O = null === (S = e.editorRef.current) || void 0 === S ? void 0 : S.getCurrentCommandOptionValue()) && void 0 !== O ? O : [] }, G.name) : ''
        },
        [Z] = i.useState(() => new h.Z(F));
    return (
        i.useEffect(() => {
            Z.updateProps(F);
        }),
        i.useImperativeHandle(t, () => Z, [Z]),
        i.useEffect(() => {
            let e = (e) => L(e);
            return (
                Z.on('change', e),
                Z.on('update', b),
                () => {
                    Z.off('change', e), Z.off('update', b);
                }
            );
        }, [b, Z]),
        i.useEffect(() => {
            var e;
            let t = null === (e = y.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => Z.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [Z, null === (A = y.query) || void 0 === A ? void 0 : A.typeInfo]),
        [y, Z, k]
    );
}
