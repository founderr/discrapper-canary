n.d(t, {
    q: function () {
        return O;
    },
    r: function () {
        return R;
    }
});
var r = n(302454),
    i = n.n(r),
    a = n(668781),
    s = n(45986),
    o = n(782568),
    l = n(704133),
    u = n(139674),
    c = n(702321),
    d = n(900460),
    f = n(627714),
    _ = n(364640),
    h = n(772096),
    p = n(982806),
    m = n(540709),
    g = n(881706),
    E = n(592125),
    v = n(430824),
    I = n(20303),
    S = n(902676),
    b = n(375954),
    T = n(699516),
    y = n(944486),
    A = n(626135),
    N = n(981631),
    C = n(388032);
function R(e, t) {
    var n;
    let r = E.Z.getChannel(y.Z.getChannelId());
    return !!(null == r || r.type !== N.d4z.DM || T.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function O(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        { trusted: T, onClick: y, onConfirm: R, shouldConfirm: O, messageId: D, channelId: L } = e,
        x = i().sanitizeUrl(e.href);
    if (null == x) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gam),
                body: C.intl.format(C.t['9rqRws'], { url: e.href }),
                isDismissable: !0
            });
        return;
    }
    let w = x;
    try {
        decodeURI(x);
    } catch (e) {
        w = encodeURI(x);
    }
    let M = null,
        P = !1,
        k = D,
        U = L,
        G = null;
    if (null != D && null != L) {
        var B, Z, F;
        let e = b.Z.getMessage(L, D),
            t = E.Z.getBasicChannel(L);
        M = null !== (F = null == t ? void 0 : t.guild_id) && void 0 !== F ? F : null;
        let n = v.Z.getGuild(M),
            r = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != M;
        r && (null == e ? void 0 : null === (Z = e.messageReference) || void 0 === Z ? void 0 : Z.guild_id) != null ? ((k = e.messageReference.message_id), (U = e.messageReference.channel_id), (G = e.messageReference.guild_id)) : (G = M);
        let i = (null == t ? void 0 : t.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(N.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        P = null != e && !a && (r || i);
    }
    if (null != L) {
        let e = E.Z.getChannel(L),
            t = v.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(N.oNc.DISCOVERABLE) &&
            A.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, S.F)(w),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(L) &&
                A.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: w
                });
    }
    if ((_.Z.trackLinkClicked(w), null != y)) {
        if (y(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(w, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let V = () => {
        if (
            (P &&
                _.Z.trackAnnouncementMessageLinkClicked({
                    messageId: k,
                    channelId: L,
                    guildId: M,
                    sourceChannelId: U,
                    sourceGuildId: G
                }),
            null != R)
        ) {
            R();
            return;
        }
        (0, o.Z)(w);
    };
    if (null !== u.Z.isBlockedDomain(w)) {
        null == t || t.preventDefault(), l.Z.show(w);
        return;
    }
    if (null != (0, g.v)(w)) {
        null == t || t.preventDefault(), m.Z.show(w);
        return;
    }
    if ((0, f.I)(w)) {
        null == t || t.preventDefault(), d.Z.show(w);
        return;
    }
    let H = 'function' == typeof T ? T() : T,
        j = (0, S.E)(w),
        Y = !('http:' === j || 'https:' === j);
    if ((!Y && (H || I.Z.isTrustedDomain(w))) || (Y && I.Z.isTrustedProtocol(w))) {
        null == t || (null != O && O)
            ? V()
            : P &&
              _.Z.trackAnnouncementMessageLinkClicked({
                  messageId: k,
                  channelId: L,
                  guildId: M,
                  sourceChannelId: U,
                  sourceGuildId: G
              });
        return;
    }
    if ((null != t && t.preventDefault(), Y))
        p.Z.show({
            url: w,
            trustUrl: s.u,
            onConfirm: V,
            isProtocol: !0
        });
    else {
        let e = (0, h.yw)(w),
            t = null != e ? e.displayTarget : w;
        p.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: V,
            isProtocol: !1
        });
    }
}
