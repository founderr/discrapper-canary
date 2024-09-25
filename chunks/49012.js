n.d(t, {
    q: function () {
        return b;
    },
    r: function () {
        return y;
    }
});
var r = n(302454),
    i = n.n(r),
    a = n(668781),
    o = n(45986),
    s = n(782568),
    l = n(704133),
    u = n(139674),
    c = n(702321),
    d = n(900460),
    _ = n(627714),
    E = n(364640),
    f = n(772096),
    h = n(982806),
    p = n(540709),
    m = n(881706),
    I = n(592125),
    T = n(430824),
    g = n(20303),
    S = n(902676),
    A = n(375954),
    v = n(699516),
    N = n(944486),
    O = n(626135),
    R = n(981631),
    C = n(689938);
function y(e, t) {
    var n;
    let r = I.Z.getChannel(N.Z.getChannelId());
    return !!(null == r || r.type !== R.d4z.DM || v.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function b(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        { trusted: v, onClick: N, onConfirm: y, shouldConfirm: b, messageId: L, channelId: D } = e,
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
    let P = M;
    try {
        decodeURI(M);
    } catch (e) {
        P = encodeURI(M);
    }
    let U = null,
        w = !1,
        x = L,
        G = D,
        k = null;
    if (null != L && null != D) {
        var B, F, Z;
        let e = A.Z.getMessage(D, L),
            t = I.Z.getBasicChannel(D);
        U = null !== (Z = null == t ? void 0 : t.guild_id) && void 0 !== Z ? Z : null;
        let n = T.Z.getGuild(U),
            r = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(R.iLy.IS_CROSSPOST)) && null != U;
        r && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? ((x = e.messageReference.message_id), (G = e.messageReference.channel_id), (k = e.messageReference.guild_id)) : (k = U);
        let i = (null == t ? void 0 : t.type) === R.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(R.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(R.iLy.EPHEMERAL)) === !0;
        w = null != e && !a && (r || i);
    }
    if (null != D) {
        let e = I.Z.getChannel(D),
            t = T.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(R.oNc.DISCOVERABLE) &&
            O.default.track(R.rMx.URL_CLICKED, {
                url_domain: (0, S.F)(P),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(D) &&
                O.default.track(R.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: P
                });
    }
    if ((E.Z.trackLinkClicked(P), null != N)) {
        if (N(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(P, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let V = () => {
        if (
            (w &&
                E.Z.trackAnnouncementMessageLinkClicked({
                    messageId: x,
                    channelId: D,
                    guildId: U,
                    sourceChannelId: G,
                    sourceGuildId: k
                }),
            null != y)
        ) {
            y();
            return;
        }
        (0, s.Z)(P);
    };
    if (null !== u.Z.isBlockedDomain(P)) {
        null == t || t.preventDefault(), l.Z.show(P);
        return;
    }
    if (null != (0, m.v)(P)) {
        null == t || t.preventDefault(), p.Z.show(P);
        return;
    }
    if ((0, _.I)(P)) {
        null == t || t.preventDefault(), d.Z.show(P);
        return;
    }
    let H = 'function' == typeof v ? v() : v,
        Y = (0, S.E)(P),
        j = !('http:' === Y || 'https:' === Y);
    if ((!j && (H || g.Z.isTrustedDomain(P))) || (j && g.Z.isTrustedProtocol(P))) {
        null == t || (null != b && b)
            ? V()
            : w &&
              E.Z.trackAnnouncementMessageLinkClicked({
                  messageId: x,
                  channelId: D,
                  guildId: U,
                  sourceChannelId: G,
                  sourceGuildId: k
              });
        return;
    }
    if ((null != t && t.preventDefault(), j))
        h.Z.show({
            url: P,
            trustUrl: o.u,
            onConfirm: V,
            isProtocol: !0
        });
    else {
        let e = (0, f.yw)(P),
            t = null != e ? e.displayTarget : P;
        h.Z.show({
            url: t,
            trustUrl: o.o,
            onConfirm: V,
            isProtocol: !1
        });
    }
}
