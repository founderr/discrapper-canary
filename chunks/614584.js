n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(25209),
    a = n(39154),
    o = n(35125),
    c = n(905405),
    u = n(628238),
    d = n(499401),
    h = n(693912),
    m = n(869765),
    p = n(699516),
    f = n(352736),
    g = n(937889),
    C = n(739566),
    x = n(267128),
    v = n(507418),
    _ = n(348238),
    I = n(981631),
    E = n(388032);
let b = l.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: b, channel: S, compact: Z = !1, referencedUsernameProfile: T, referencedAvatarProfile: N, setPopout: j, isReplySpineClickable: A, showReplySpine: y } = e,
        P = b.state === m.Y.LOADED ? b.message : void 0,
        M = (0, C.Uj)(P),
        R = (0, c.p)(),
        L = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        k = l.useMemo(() => {
            if (null == P) return null;
            let e = (0, a.Z)(P);
            if (e.type === I.uaV.USER_JOIN) {
                let t = f.Z.getWelcomeMessageKind(S.guild_id);
                return (0, s.Rp)(
                    E.intl.formatToParts(f.Z.getSystemMessageUserJoin(e.id, t), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === I.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, s.Rp)(
                    (0, o.PA)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: null == S ? void 0 : S.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === I.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, s.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, s.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, s.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : E.intl.string(E.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: R
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
                              allowHeading: L,
                              allowList: L
                          };
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [P, M, S, L, R]),
        O = (0, r.e7)([p.Z], () => null != P && p.Z.isBlockedForMessage(P), [P]),
        w = (0, _.wq)(null == P ? void 0 : P.author.id, S.id),
        D = (0, _.$3)(n, P, O),
        U = (0, _.Wl)(P, S, T, j),
        B = (0, _.rY)(N, j),
        H = l.useCallback(
            () =>
                j({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [j]
        ),
        F = (0, C.Uj)(n);
    return (0, i.jsx)(x.Z, {
        repliedAuthor: M,
        baseMessage: n,
        channel: S,
        baseAuthor: F,
        referencedMessage: b,
        content: k,
        compact: Z,
        isReplyAuthorBlocked: O,
        showAvatarPopout: N,
        showUsernamePopout: T,
        renderPopout: v.Z,
        onClickAvatar: B,
        onClickUsername: U,
        onClickReply: D,
        onContextMenu: w,
        onPopoutRequestClose: H,
        isReplySpineClickable: A,
        showReplySpine: y
    });
});
function S(e) {
    let { message: t, channel: n, compact: l, setPopout: r, referencedUsernameProfile: s, referencedAvatarProfile: a, replyReference: o, replyMessage: c, isReplySpineClickable: u, showReplySpine: d = !0 } = e,
        h =
            null != o &&
            (0, i.jsx)(b, {
                baseMessage: t,
                replyReference: o,
                referencedMessage: c,
                channel: n,
                compact: l,
                setPopout: r,
                referencedUsernameProfile: s,
                referencedAvatarProfile: a,
                isReplySpineClickable: u,
                showReplySpine: d
            });
    return (0, i.jsx)(i.Fragment, { children: h });
}
