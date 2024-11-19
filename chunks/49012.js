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
    p = n(772096),
    h = n(982806),
    m = n(540709),
    g = n(881706),
    E = n(592125),
    v = n(430824),
    b = n(20303),
    I = n(902676),
    S = n(375954),
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
        T = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: y, onClick: R, onConfirm: O, shouldConfirm: D, messageId: L, channelId: x } = e,
        w = i().sanitizeUrl(e.href);
    if (null == w) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gam),
                body: C.intl.format(C.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: T
            });
        return;
    }
    let M = w;
    try {
        decodeURI(w);
    } catch (e) {
        M = encodeURI(w);
    }
    let P = null,
        k = !1,
        U = L,
        G = x,
        B = null;
    if (null != L && null != x) {
        var Z, F, V;
        let e = S.Z.getMessage(x, L),
            t = E.Z.getBasicChannel(x);
        P = null !== (V = null == t ? void 0 : t.guild_id) && void 0 !== V ? V : null;
        let n = v.Z.getGuild(P),
            r = (null == e ? void 0 : null === (Z = e.messageReference) || void 0 === Z ? void 0 : Z.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != P;
        r && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? ((U = e.messageReference.message_id), (G = e.messageReference.channel_id), (B = e.messageReference.guild_id)) : (B = P);
        let i = (null == t ? void 0 : t.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(N.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        k = null != e && !a && (r || i);
    }
    if (null != x) {
        let e = E.Z.getChannel(x),
            t = v.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(N.oNc.DISCOVERABLE) &&
            A.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, I.F)(M),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(x) &&
                A.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: M
                });
    }
    if ((_.Z.trackLinkClicked(M), null != R)) {
        if (R(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let j = () => {
        if (
            (k &&
                _.Z.trackAnnouncementMessageLinkClicked({
                    messageId: U,
                    channelId: x,
                    guildId: P,
                    sourceChannelId: G,
                    sourceGuildId: B
                }),
            null != O)
        ) {
            O();
            return;
        }
        (0, o.Z)(M);
    };
    if (null !== u.Z.isBlockedDomain(M)) {
        null == t || t.preventDefault(), l.Z.show(M);
        return;
    }
    if (null != (0, g.v)(M)) {
        null == t || t.preventDefault(), m.Z.show(M);
        return;
    }
    if ((0, f.I)(M)) {
        null == t || t.preventDefault(), d.Z.show(M);
        return;
    }
    let H = 'function' == typeof y ? y() : y,
        Y = (0, I.E)(M),
        W = !('http:' === Y || 'https:' === Y);
    if ((!W && (H || b.Z.isTrustedDomain(M))) || (W && b.Z.isTrustedProtocol(M))) {
        null == t || (null != D && D)
            ? j()
            : k &&
              _.Z.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: x,
                  guildId: P,
                  sourceChannelId: G,
                  sourceGuildId: B
              });
        return;
    }
    if ((null != t && t.preventDefault(), W))
        h.Z.show({
            url: M,
            trustUrl: s.u,
            onConfirm: j,
            isProtocol: !0,
            contextKey: T
        });
    else {
        let e = (0, p.yw)(M),
            t = null != e ? e.displayTarget : M;
        h.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: j,
            isProtocol: !1,
            contextKey: T
        });
    }
}
