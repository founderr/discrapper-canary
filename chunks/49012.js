n.d(t, {
    q: function () {
        return L;
    },
    r: function () {
        return y;
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
    _ = n(627714),
    E = n(364640),
    f = n(772096),
    h = n(982806),
    p = n(540709),
    I = n(881706),
    m = n(592125),
    T = n(430824),
    S = n(20303),
    g = n(902676),
    A = n(375954),
    N = n(699516),
    O = n(944486),
    R = n(626135),
    v = n(981631),
    C = n(689938);
function y(e, t) {
    var n;
    let r = m.Z.getChannel(O.Z.getChannelId());
    return !!(null == r || r.type !== v.d4z.DM || N.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function L(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        { trusted: N, onClick: O, onConfirm: y, shouldConfirm: L, messageId: D, channelId: b } = e,
        M = i().sanitizeUrl(e.href);
    if (null == M) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.Z.Messages.HOLD_UP,
                body: C.Z.Messages.MALFORMED_LINK_BODY.format({ url: e.href }),
                isDismissable: !0
            });
        return;
    }
    let P = null,
        U = !1,
        w = D,
        x = b,
        G = null;
    if (null != D && null != b) {
        var k, B, F;
        let e = A.Z.getMessage(b, D),
            t = m.Z.getBasicChannel(b);
        P = null !== (F = null == t ? void 0 : t.guild_id) && void 0 !== F ? F : null;
        let n = T.Z.getGuild(P),
            r = (null == e ? void 0 : null === (k = e.messageReference) || void 0 === k ? void 0 : k.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(v.iLy.IS_CROSSPOST)) && null != P;
        r && (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null ? ((w = e.messageReference.message_id), (x = e.messageReference.channel_id), (G = e.messageReference.guild_id)) : (G = P);
        let i = (null == t ? void 0 : t.type) === v.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(v.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(v.iLy.EPHEMERAL)) === !0;
        U = null != e && !a && (r || i);
    }
    if (null != b) {
        let e = m.Z.getChannel(b),
            t = T.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(v.oNc.DISCOVERABLE) &&
            R.default.track(v.rMx.URL_CLICKED, {
                url_domain: (0, g.F)(M),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(b) &&
                R.default.track(v.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: M
                });
    }
    if ((E.Z.trackLinkClicked(M), null != O)) {
        if (O(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let V = () => {
        if (
            (U &&
                E.Z.trackAnnouncementMessageLinkClicked({
                    messageId: w,
                    channelId: b,
                    guildId: P,
                    sourceChannelId: x,
                    sourceGuildId: G
                }),
            null != y)
        ) {
            y();
            return;
        }
        (0, o.Z)(M);
    };
    if (null !== u.Z.isBlockedDomain(M)) {
        null == t || t.preventDefault(), l.Z.show(M);
        return;
    }
    if (null != (0, I.v)(M)) {
        null == t || t.preventDefault(), p.Z.show(M);
        return;
    }
    if ((0, _.I)(M)) {
        null == t || t.preventDefault(), d.Z.show(M);
        return;
    }
    let H = 'function' == typeof N ? N() : N,
        Z = (0, g.E)(M),
        Y = !('http:' === Z || 'https:' === Z);
    if ((!Y && (H || S.Z.isTrustedDomain(M))) || (Y && S.Z.isTrustedProtocol(M))) {
        null == t || (null != L && L)
            ? V()
            : U &&
              E.Z.trackAnnouncementMessageLinkClicked({
                  messageId: w,
                  channelId: b,
                  guildId: P,
                  sourceChannelId: x,
                  sourceGuildId: G
              });
        return;
    }
    if ((null != t && t.preventDefault(), Y))
        h.Z.show({
            url: M,
            trustUrl: s.u,
            onConfirm: V,
            isProtocol: !0
        });
    else {
        let e = (0, f.yw)(M),
            t = null != e ? e.displayTarget : M;
        h.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: V,
            isProtocol: !1
        });
    }
}
