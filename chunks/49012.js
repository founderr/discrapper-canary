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
    I = n(20303),
    b = n(902676),
    T = n(375954),
    S = n(699516),
    y = n(944486),
    A = n(626135),
    N = n(981631),
    C = n(388032);
function R(e, t) {
    var n;
    let r = E.Z.getChannel(y.Z.getChannelId());
    return !!(null == r || r.type !== N.d4z.DM || S.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function O(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: y, onClick: R, onConfirm: O, onCancel: D, shouldConfirm: L, messageId: x, channelId: w } = e,
        M = i().sanitizeUrl(e.href);
    if (null == M) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gam),
                body: C.intl.format(C.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: S
            });
        return;
    }
    let P = M;
    try {
        decodeURI(M);
    } catch (e) {
        P = encodeURI(M);
    }
    let k = null,
        U = !1,
        B = x,
        G = w,
        Z = null;
    if (null != x && null != w) {
        var F, V, j;
        let e = T.Z.getMessage(w, x),
            t = E.Z.getBasicChannel(w);
        k = null !== (j = null == t ? void 0 : t.guild_id) && void 0 !== j ? j : null;
        let n = v.Z.getGuild(k),
            r = (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != k;
        r && (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null ? ((B = e.messageReference.message_id), (G = e.messageReference.channel_id), (Z = e.messageReference.guild_id)) : (Z = k);
        let i = (null == t ? void 0 : t.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(N.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        U = null != e && !a && (r || i);
    }
    if (null != w) {
        let e = E.Z.getChannel(w),
            t = v.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(N.oNc.DISCOVERABLE) &&
            A.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, b.F)(P),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(w) &&
                A.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: P
                });
    }
    if ((_.Z.trackLinkClicked(P), null != R)) {
        if (R(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(P, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
            if (
                (U &&
                    _.Z.trackAnnouncementMessageLinkClicked({
                        messageId: B,
                        channelId: w,
                        guildId: k,
                        sourceChannelId: G,
                        sourceGuildId: Z
                    }),
                null != O)
            ) {
                O();
                return;
            }
            (0, o.Z)(P);
        },
        Y = null != D ? D : () => {};
    if (null !== u.Z.isBlockedDomain(P)) {
        null == t || t.preventDefault(), l.Z.show(P);
        return;
    }
    if (null != (0, g.v)(P)) {
        null == t || t.preventDefault(), m.Z.show(P);
        return;
    }
    if ((0, f.I)(P)) {
        null == t || t.preventDefault(), d.Z.show(P);
        return;
    }
    let W = 'function' == typeof y ? y() : y,
        K = (0, b.E)(P),
        z = !('http:' === K || 'https:' === K);
    if ((!z && (W || I.Z.isTrustedDomain(P))) || (z && I.Z.isTrustedProtocol(P))) {
        null == t || (null != L && L)
            ? H()
            : U &&
              _.Z.trackAnnouncementMessageLinkClicked({
                  messageId: B,
                  channelId: w,
                  guildId: k,
                  sourceChannelId: G,
                  sourceGuildId: Z
              });
        return;
    }
    if ((null != t && t.preventDefault(), z))
        h.Z.show({
            url: P,
            trustUrl: s.u,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !0,
            contextKey: S
        });
    else {
        let e = (0, p.yw)(P),
            t = null != e ? e.displayTarget : P;
        h.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !1,
            contextKey: S
        });
    }
}
