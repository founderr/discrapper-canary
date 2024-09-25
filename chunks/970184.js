n.d(t, {
    CJ: function () {
        return U;
    },
    Ee: function () {
        return P;
    },
    Il: function () {
        return M;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(512722),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(911969),
    _ = n(71619),
    E = n(282397),
    f = n(622449),
    h = n(188597),
    p = n(41776),
    m = n(665906),
    I = n(592125),
    T = n(271383),
    g = n(607744),
    S = n(594174),
    A = n(280501),
    v = n(892902),
    N = n(359232);
let O = (e) => {
        switch (e.type) {
            case d.re.BUTTON:
                return e.style !== d.ZJ.LINK;
            case d.re.STRING_SELECT:
            case d.re.USER_SELECT:
            case d.re.ROLE_SELECT:
            case d.re.MENTIONABLE_SELECT:
            case d.re.CHANNEL_SELECT:
                return !0;
            case d.re.ACTION_ROW:
            case d.re.INPUT_TEXT:
                return !1;
        }
    },
    R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = A.gH.NORMAL;
        return null != e && e.state !== f.F.FAILED && (e.data.interactionType === d.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (r = A.gH.LOADING) : O(t) && (r = A.gH.DISABLED)), n && (r = A.gH.DISABLED), r;
    },
    C = (e) => {
        let t = I.Z.getChannel(e),
            n = (0, u.e7)([g.Z], () => (null == t ? void 0 : t.guild_id) == null || g.Z.canChatInGuild(t.guild_id), [t]),
            r = (0, u.e7)([p.Z], () => (null == t ? void 0 : t.guild_id) != null && p.Z.isLurking(t.guild_id), [t]),
            i = (0, u.e7)([T.ZP, S.default], () => {
                var e, n;
                let r = S.default.getCurrentUser();
                return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != r ? (null === (e = T.ZP.getMember(null == t ? void 0 : t.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
            }),
            [, a] = (0, _.AB)(null == t ? void 0 : t.guild_id),
            o = (0, m.tc)(t);
        return !!(!n || r || i || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !o)) || !!a || !1;
    };
function y(e, t) {
    let n = o.useContext(D),
        [r, i] = o.useState(null),
        a = o.useCallback(
            (t) => {
                let n = (0, N.Z)(e, t);
                return i(n), null == n;
            },
            [e]
        );
    return (
        o.useEffect(() => {
            var e;
            let r = () => a(t);
            return (
                null === (e = n.validators) || void 0 === e || e.add(r),
                () => {
                    var e;
                    null === (e = n.validators) || void 0 === e || e.delete(r);
                }
            );
        }, [n.validators, a, t]),
        {
            error: r,
            validate: a
        }
    );
}
function b(e, t, n) {
    var r;
    let i = (0, u.e7)([v.Z], () => v.Z.getInteractionComponentState(e.id, t.id)),
        a = (0, u.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
        s = C(e.channel_id),
        { error: l, validate: c } = y(t, i),
        d = null !== (r = e.applicationId) && void 0 !== r ? r : e.author.id;
    return {
        state: i,
        executeStateUpdate: o.useCallback(
            (n) => {
                if (!c(n)) return !1;
                let r = I.Z.getChannel(e.channel_id);
                return (
                    null != r &&
                        null != t.customId &&
                        (0, h.tM)({
                            componentType: t.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: t.customId,
                            componentId: t.id,
                            applicationId: d,
                            channelId: r.id,
                            guildId: r.guild_id,
                            localState: n
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, d, c]
        ),
        isDisabled: s,
        visualState: R(a, t),
        error: l
    };
}
function L(e, t, n) {
    let r = (0, u.e7)([v.Z], () => v.Z.getInteractionComponentState(e.customId, t.id)),
        { error: i, validate: a } = y(t, r),
        s = o.useCallback(
            (n) =>
                null == n ||
                (c.Z.dispatch({
                    type: 'SET_INTERACTION_COMPONENT_STATE',
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n
                }),
                !!a(n) || !1),
            [e.customId, t.id, a]
        );
    return (
        o.useEffect(() => {
            s(n);
        }, []),
        {
            state: r,
            executeStateUpdate: s,
            isDisabled: !1,
            visualState: A.gH.NORMAL,
            error: i
        }
    );
}
let D = o.createContext(null);
function M(e) {
    let { children: t, message: n, modal: r, validators: i } = e,
        s = o.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: b.bind(null, n),
                          channelId: n.channel_id,
                          message: n,
                          validators: i
                      }
                    : (l()(null != r, 'modal is present if message is not'),
                      {
                          useComponentState: L.bind(null, r),
                          channelId: r.channelId,
                          modal: r,
                          validators: i
                      }),
            [n, r, i]
        );
    return (0, a.jsx)(D.Provider, {
        value: s,
        children: t
    });
}
function P(e, t) {
    return o.useContext(D).useComponentState(e, t);
}
function U() {
    return o.useContext(D);
}
