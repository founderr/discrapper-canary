n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(25209),
    r = n(39154),
    o = n(35125),
    c = n(905405),
    u = n(628238),
    d = n(499401),
    h = n(693912),
    m = n(869765),
    p = n(699516),
    _ = n(352736),
    f = n(937889),
    E = n(739566),
    g = n(267128),
    C = n(507418),
    I = n(348238),
    T = n(981631),
    x = n(689938);
let v = s.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: v, channel: S, compact: N = !1, referencedUsernameProfile: A, referencedAvatarProfile: Z, setPopout: M } = e,
        b = v.state === m.Y.LOADED ? v.message : void 0,
        R = (0, E.Uj)(b),
        L = (0, c.p)(),
        j = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        P = s.useMemo(() => {
            if (null == b) return null;
            let e = (0, r.Z)(b);
            if (e.type === T.uaV.USER_JOIN) {
                let t = _.Z.getWelcomeMessageKind(S.guild_id);
                return (0, l.Rp)(
                    _.Z.getSystemMessageUserJoin(e.id, t).astFormat({
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, l.Rp)(
                    (0, o.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == S ? void 0 : S.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === T.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, l.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === T.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, l.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : x.Z.Messages.DEADCHAT_PROMPT_1;
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: L
                    },
                    n = e.isFirstMessageInForumPost(S)
                        ? {
                              ...t,
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          }
                        : {
                              ...t,
                              formatInline: !0,
                              allowHeading: j,
                              allowList: j
                          };
                return (0, f.ZP)(e, n).content;
            }
            return null;
        }, [b, R, S, j, L]),
        O = (0, a.e7)([p.Z], () => null != b && p.Z.isBlockedForMessage(b), [b]),
        y = (0, I.wq)(null == b ? void 0 : b.author.id, S.id),
        D = (0, I.$3)(n, b, O),
        U = (0, I.Wl)(b, S, A, M),
        k = (0, I.rY)(Z, M),
        w = s.useCallback(
            () =>
                M({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [M]
        ),
        B = (0, E.Uj)(n);
    return (0, i.jsx)(g.Z, {
        repliedAuthor: R,
        baseMessage: n,
        channel: S,
        baseAuthor: B,
        referencedMessage: v,
        content: P,
        compact: N,
        isReplyAuthorBlocked: O,
        showAvatarPopout: Z,
        showUsernamePopout: A,
        renderPopout: C.Z,
        onClickAvatar: k,
        onClickUsername: U,
        onClickReply: D,
        onContextMenu: y,
        onPopoutRequestClose: w
    });
});
function S(e, t, n, s, a) {
    let { message: l, channel: r, compact: o } = e,
        { referencedUsernameProfile: c, referencedAvatarProfile: u } = n,
        d =
            null != s &&
            (0, i.jsx)(v, {
                baseMessage: l,
                replyReference: s,
                referencedMessage: a,
                channel: r,
                compact: o,
                setPopout: t,
                referencedUsernameProfile: c,
                referencedAvatarProfile: u
            });
    return (0, i.jsx)(i.Fragment, { children: d });
}
