n.d(t, {
    Z: function () {
        return y;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    o = n(619915),
    s = n(456269),
    c = n(921711),
    u = n(368442),
    d = n(601070),
    h = n(430824),
    p = n(496675),
    f = n(306680),
    m = n(979651),
    g = n(968358),
    C = n(790901),
    _ = n(714794),
    x = n(355363),
    v = n(687352),
    I = n(135724),
    b = n(25601),
    S = n(981631),
    Z = n(490897),
    N = n(388032),
    E = n(360110);
function y(e) {
    var t;
    let { channel: n, isChannelSelected: y, isChannelCollapsed: j, voiceStates: T, enableConnectedUserLimit: P, enableActivities: A, isSubscriptionGated: M, needSubscriptionToAccess: w, isNewChannel: L, muted: R, resolvedUnreadSetting: D } = e,
        O = (0, l.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        k = (0, o.ZP)(n),
        U = (0, l.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)),
        G = (0, l.e7)([m.Z], () => m.Z.hasVideo(n.id)),
        B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        V = (0, x.ZP)({
            channel: n,
            locked: U,
            video: G || B,
            selected: y
        }),
        H = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        F = (0, s.n2)(n.guild_id, n.id),
        W = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, _.Z)(O)) return (0, i.jsx)(b.Z, { mentionsCount: O });
    if ((0, c.O)(M)) return (0, i.jsx)(c.Z, { locked: w });
    if (L)
        return (0, i.jsx)(a.TextBadge, {
            text: N.intl.string(N.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: E.newChannel
        });
    if (!R && D === Z.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: N.intl.format(N.t.GkAbqa, { count: (0, a.getBadgeCountString)(H) })
        });
    if (!R && n.isForumLikeChannel() && null != F && F > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.getBadgeCountString)(F)
        });
    let z = null !== (t = null == T ? void 0 : T.length) && void 0 !== t ? t : 0;
    return null != P && P && V
        ? (0, i.jsx)(I.Z, {
              userCount: z,
              video: G || B,
              channel: n
          })
        : j && (0, g.a)(T) && W
          ? (0, i.jsx)(a.TextBadge, {
                text: N.intl.string(N.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css
            })
          : null != A && A && (0, C.u)(k)
            ? (0, i.jsx)(v.Z, {
                  embeddedApps: k,
                  muted: R
              })
            : null;
}
