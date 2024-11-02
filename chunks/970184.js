n.d(t, {
    CJ: function () {
        return b;
    },
    Ee: function () {
        return M;
    },
    Il: function () {
        return y;
    }
}),
    n(47120),
    n(789020);
var l = n(200651),
    u = n(192379),
    i = n(512722),
    r = n.n(i),
    a = n(442837),
    o = n(570140),
    d = n(911969),
    c = n(71619),
    s = n(282397),
    E = n(622449),
    T = n(188597),
    I = n(41776),
    f = n(665906),
    p = n(592125),
    m = n(271383),
    S = n(607744),
    C = n(594174),
    _ = n(280501),
    g = n(892902),
    N = n(359232);
let h = (e) => {
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
    v = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = _.gH.NORMAL;
        return null != e && e.state !== E.F.FAILED && (e.data.interactionType === d.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (l = _.gH.LOADING) : h(t) && (l = _.gH.DISABLED)), n && (l = _.gH.DISABLED), l;
    },
    O = (e) => {
        let t = p.Z.getChannel(e),
            n = (0, a.e7)([S.Z], () => (null == t ? void 0 : t.guild_id) == null || S.Z.canChatInGuild(t.guild_id), [t]),
            l = (0, a.e7)([I.Z], () => (null == t ? void 0 : t.guild_id) != null && I.Z.isLurking(t.guild_id), [t]),
            u = (0, a.e7)([m.ZP, C.default], () => {
                var e, n;
                let l = C.default.getCurrentUser();
                return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != l ? (null === (e = m.ZP.getMember(null == t ? void 0 : t.guild_id, l.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
            }),
            [, i] = (0, c.AB)(null == t ? void 0 : t.guild_id),
            r = (0, f.tc)(t);
        return !!(!n || l || u || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !r)) || !!i || !1;
    };
function A(e, t) {
    let n = u.useContext(Z),
        [l, i] = u.useState(null),
        r = u.useCallback(
            (t) => {
                let n = (0, N.Z)(e, t);
                return i(n), null == n;
            },
            [e]
        );
    return (
        u.useEffect(() => {
            var e;
            let l = () => r(t);
            return (
                null === (e = n.validators) || void 0 === e || e.add(l),
                () => {
                    var e;
                    null === (e = n.validators) || void 0 === e || e.delete(l);
                }
            );
        }, [n.validators, r, t]),
        {
            error: l,
            validate: r
        }
    );
}
function L(e, t, n) {
    var l;
    let i = (0, a.e7)([g.Z], () => g.Z.getInteractionComponentState(e.id, t.id)),
        r = (0, a.e7)([s.ZP], () => s.ZP.getInteraction(e), [e]),
        o = O(e.channel_id),
        { error: d, validate: c } = A(t, i),
        E = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
    return {
        state: i,
        executeStateUpdate: u.useCallback(
            (n) => {
                if (!c(n)) return !1;
                let l = p.Z.getChannel(e.channel_id);
                return (
                    null != l &&
                        null != t.customId &&
                        (0, T.tM)({
                            componentType: t.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: t.customId,
                            componentId: t.id,
                            applicationId: E,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: n
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, E, c]
        ),
        isDisabled: o,
        visualState: v(r, t),
        error: d
    };
}
function R(e, t, n) {
    let l = (0, a.e7)([g.Z], () => g.Z.getInteractionComponentState(e.customId, t.id)),
        { error: i, validate: r } = A(t, l),
        d = u.useCallback(
            (n) =>
                null == n ||
                (o.Z.dispatch({
                    type: 'SET_INTERACTION_COMPONENT_STATE',
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n
                }),
                !!r(n) || !1),
            [e.customId, t.id, r]
        );
    return (
        u.useEffect(() => {
            d(n);
        }, []),
        {
            state: l,
            executeStateUpdate: d,
            isDisabled: !1,
            visualState: _.gH.NORMAL,
            error: i
        }
    );
}
let Z = u.createContext(null);
function y(e) {
    let { children: t, message: n, modal: i, validators: a } = e,
        o = u.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: L.bind(null, n),
                          channelId: n.channel_id,
                          message: n,
                          validators: a
                      }
                    : (r()(null != i, 'modal is present if message is not'),
                      {
                          useComponentState: R.bind(null, i),
                          channelId: i.channelId,
                          modal: i,
                          validators: a
                      }),
            [n, i, a]
        );
    return (0, l.jsx)(Z.Provider, {
        value: o,
        children: t
    });
}
function M(e, t) {
    return u.useContext(Z).useComponentState(e, t);
}
function b() {
    return u.useContext(Z);
}
