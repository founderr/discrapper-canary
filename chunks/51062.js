n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var r = n(192379),
    i = n(931609),
    a = n(442837),
    s = n(456007),
    o = n(998698),
    l = n(541716),
    u = n(797610),
    c = n(271383),
    d = n(496675),
    f = n(246946),
    _ = n(594174),
    p = n(106824),
    h = n(691841),
    m = n(981631),
    g = n(377668),
    E = n(185923);
function v(e, t, n) {
    var v, I, T, b, S, y, A;
    let { channel: N, type: C } = e,
        [R, O] = r.useState(() => (0, p.P)()),
        D = (0, i.Z)(),
        L = (0, a.e7)([c.ZP], () => {
            if (null != e.guild) {
                var t;
                return null != c.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, g.fL);
            }
            return !1;
        }),
        x = (0, u.Ib)(e.guild, e.channel) && !L && !(0, u.g0)(e.guild),
        w = (0, a.e7)([c.ZP, _.default], () => {
            var e, t;
            let n = _.default.getCurrentUser();
            return null !== (t = null != N.guild_id && null != n ? (null === (e = c.ZP.getMember(N.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canMentionEveryone: P, hidePersonalInformation: M } = (0, a.cj)(
            [d.Z, f.Z],
            () => ({
                canMentionEveryone: N.isPrivate() || w || C === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, N),
                hidePersonalInformation: f.Z.hidePersonalInformation
            }),
            [N, C, w]
        ),
        { activeCommand: k, activeCommandOption: U } = (0, a.cj)([o.Z], () => ({
            activeCommand: o.Z.getActiveCommand(N.id),
            activeCommandOption: o.Z.getActiveOption(N.id)
        })),
        B = (0, h.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: R,
            onFocus: (e) => F.setSelectedIndex(e)
        }),
        G = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentWord(),
        Z = {
            ...e,
            navigator: B,
            activeCommand: k,
            activeCommandOption: U,
            canMentionUsers: null !== (S = null === (I = C.users) || void 0 === I ? void 0 : I.allowMentioning) && void 0 !== S && S,
            canMentionEveryone: P,
            canMentionClyde: x,
            hidePersonalInformation: M,
            hideMentionDescription: C === l.Ie.RULES_INPUT,
            emojiIntention: C === l.Ie.RULES_INPUT ? E.Hz.COMMUNITY_CONTENT : E.Hz.CHAT,
            currentWord: null !== (y = null == G ? void 0 : G.word) && void 0 !== y ? y : '',
            currentWordIsAtStart: (null == G ? void 0 : G.isAtStart) === !0,
            optionText: null != U ? (0, s.KF)({ [U.name]: null !== (A = null === (T = e.editorRef.current) || void 0 === T ? void 0 : T.getCurrentCommandOptionValue()) && void 0 !== A ? A : [] }, U.name) : ''
        },
        [F] = r.useState(() => new p.Z(Z));
    return (
        r.useEffect(() => {
            F.updateProps(Z);
        }),
        r.useImperativeHandle(t, () => F, [F]),
        r.useEffect(() => {
            let e = (e) => O(e);
            return (
                F.on('change', e),
                F.on('update', D),
                () => {
                    F.off('change', e), F.off('update', D);
                }
            );
        }, [D, F]),
        r.useEffect(() => {
            var e;
            let t = null === (e = R.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => F.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [F, null === (b = R.query) || void 0 === b ? void 0 : b.typeInfo]),
        [R, F, B]
    );
}
