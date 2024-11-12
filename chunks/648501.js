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
    v = n(355363),
    x = n(687352),
    I = n(135724),
    b = n(25601),
    S = n(981631),
    E = n(490897),
    N = n(388032),
    Z = n(718317);
function y(e) {
    var t;
    let { channel: n, isChannelSelected: y, isChannelCollapsed: T, voiceStates: j, enableConnectedUserLimit: A, enableActivities: P, isSubscriptionGated: M, needSubscriptionToAccess: R, isNewChannel: L, muted: w, resolvedUnreadSetting: D } = e,
        O = (0, l.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
        k = (0, o.ZP)(n),
        U = (0, l.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)),
        G = (0, l.e7)([m.Z], () => m.Z.hasVideo(n.id)),
        B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
        H = (0, v.ZP)({
            channel: n,
            locked: U,
            video: G || B,
            selected: y
        }),
        V = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
        F = (0, s.n2)(n.guild_id, n.id),
        W = (0, l.e7)([h.Z], () => {
            var e, t;
            return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) && void 0 !== t && t;
        });
    if ((0, _.Z)(O)) return (0, i.jsx)(b.Z, { mentionsCount: O });
    if ((0, c.O)(M)) return (0, i.jsx)(c.Z, { locked: R });
    if (L)
        return (0, i.jsx)(a.TextBadge, {
            text: N.intl.string(N.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: Z.newChannel
        });
    if (!w && D === E.i.ALL_MESSAGES && n.isForumLikeChannel() && null != V && V > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-brand',
            children: N.intl.format(N.t.GkAbqa, { count: (0, a.getBadgeCountString)(V) })
        });
    if (!w && n.isForumLikeChannel() && null != F && F > 0)
        return (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: (0, a.getBadgeCountString)(F)
        });
    let z = null !== (t = null == j ? void 0 : j.length) && void 0 !== t ? t : 0;
    return null != A && A && H
        ? (0, i.jsx)(I.Z, {
              userCount: z,
              video: G || B,
              channel: n
          })
        : T && (0, g.a)(j) && W
          ? (0, i.jsx)(a.TextBadge, {
                text: N.intl.string(N.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css
            })
          : null != P && P && (0, C.u)(k)
            ? (0, i.jsx)(x.Z, {
                  embeddedApps: k,
                  muted: w
              })
            : null;
}
