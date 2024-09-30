n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250);
n(470079);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    s = n(619915),
    o = n(456269),
    c = n(921711),
    u = n(71275),
    d = n(601070),
    h = n(430824),
    p = n(496675),
    f = n(306680),
    _ = n(979651),
    m = n(968358),
    g = n(790901),
    C = n(714794),
    I = n(355363),
    E = n(687352),
    N = n(135724),
    S = n(25601),
    x = n(981631),
    v = n(490897),
    Z = n(689938),
    T = n(718317);
function b(e) {
    var t;
    let { channel: n, isChannelSelected: b, isChannelCollapsed: A, voiceStates: M, enableConnectedUserLimit: R, enableActivities: L, isSubscriptionGated: y, needSubscriptionToAccess: P, isNewChannel: O, muted: j, resolvedUnreadSetting: D } = e,
        w = (0, l.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        G = (0, s.ZP)(n),
        U = (0, l.e7)([p.Z], () => !p.Z.can(x.Plq.CONNECT, n)),
        k = (0, l.e7)([_.Z], () => _.Z.hasVideo(n.id)),
        B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        V = (0, I.ZP)({
            channel: n,
            locked: U,
            video: k || B,
            selected: b
        }),
        H = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        F = (0, o.n2)(n.guild_id, n.id),
        W = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(x.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, C.Z)(w)) return (0, i.jsx)(S.Z, { mentionsCount: w });
    if ((0, c.O)(y)) return (0, i.jsx)(c.Z, { locked: P });
    if (O)
        return (0, i.jsx)(a.TextBadge, {
            text: Z.Z.Messages.NEW,
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: T.newChannel
        });
    if (!j && D === v.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: Z.Z.Messages.CHANNEL_NEW_POSTS_LABEL.format({ count: (0, a.getBadgeCountString)(H) })
        });
    if (!j && n.isForumLikeChannel() && null != F && F > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.getBadgeCountString)(F)
        });
    let z = null !== (t = null == M ? void 0 : M.length) && void 0 !== t ? t : 0;
    return null != R && R && V
        ? (0, i.jsx)(N.Z, {
              userCount: z,
              video: k || B,
              channel: n
          })
        : A && (0, m.a)(M) && W
          ? (0, i.jsx)(a.TextBadge, {
                text: Z.Z.Messages.LIVE,
                color: r.Z.unsafe_rawColors.RED_400.css
            })
          : null != L && L && (0, g.u)(G)
            ? (0, i.jsx)(E.Z, {
                  embeddedApps: G,
                  muted: j
              })
            : null;
}
