n.d(t, {
    Cm: function () {
        return W;
    },
    HH: function () {
        return w;
    },
    Hc: function () {
        return H;
    },
    IV: function () {
        return Y;
    },
    KP: function () {
        return G;
    },
    OP: function () {
        return V;
    },
    Pq: function () {
        return o;
    },
    Sv: function () {
        return B;
    },
    Tw: function () {
        return k;
    },
    UU: function () {
        return a;
    },
    Yy: function () {
        return i;
    },
    aP: function () {
        return Z;
    },
    bR: function () {
        return q;
    },
    l4: function () {
        return P;
    },
    lJ: function () {
        return r;
    },
    oh: function () {
        return F;
    },
    tG: function () {
        return b;
    },
    vx: function () {
        return U;
    },
    xx: function () {
        return j;
    },
    zj: function () {
        return x;
    }
});
var r,
    i,
    a,
    o,
    s = n(789020);
var l = n(286379),
    u = n(524437),
    c = n(432877),
    d = n(768494),
    _ = n(797614),
    E = n(182274),
    f = n(695346),
    h = n(592125),
    p = n(699516),
    m = n(594174),
    I = n(626135),
    T = n(630388),
    g = n(948561),
    S = n(651530),
    A = n(719548),
    v = n(981631),
    N = n(973005);
n(689938);
let O = {
        [N.TI.DISABLED.valueOf()]: u.Q4.SHOW,
        [N.TI.NON_FRIENDS.valueOf()]: u.Q4.SHOW,
        [N.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: u.Q4.BLOCK
    },
    R = {
        [N.TI.DISABLED.valueOf()]: u.Q4.SHOW,
        [N.TI.NON_FRIENDS.valueOf()]: u.Q4.BLOCK,
        [N.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: u.Q4.BLOCK
    },
    C = {
        [N.TI.DISABLED.valueOf()]: u.Q4.BLUR,
        [N.TI.NON_FRIENDS.valueOf()]: u.Q4.BLUR,
        [N.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: u.Q4.BLOCK
    },
    y = {
        [N.TI.DISABLED.valueOf()]: u.Q4.BLUR,
        [N.TI.NON_FRIENDS.valueOf()]: u.Q4.BLOCK,
        [N.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: u.Q4.BLOCK
    },
    L = 1,
    b = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== u.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let i = m.default.getCurrentUser();
        return (null == i ? void 0 : i.nsfwAllowed) === !1
            ? M({
                  isDm: n,
                  isFriend: r
              })
            : D({
                  isDm: n,
                  isFriend: r
              });
    },
    D = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return u.Q4.SHOW;
        let r = f.UP.getSetting();
        return n ? O[r] : R[r];
    },
    M = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return u.Q4.BLUR;
        let r = f.UP.getSetting();
        return n ? C[r] : y[r];
    },
    P = () => {
        let e = f.Sh.getSetting();
        return {
            explicitContentGuilds: b({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: b({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: b({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
function U(e) {
    return e === u.Q4.BLUR || e === u.Q4.BLOCK;
}
function w(e) {
    var t;
    if (!(0, S.Kh)()) return !1;
    let n = m.default.getCurrentUser();
    if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: a } = P(),
        o = h.Z.getChannel(e.channel_id);
    if (null == o) return !1;
    if (o.isDM() || o.isGroupDM()) return null != e.author && p.Z.getFriendIDs().includes(e.author.id) ? U(i) : U(a);
    return U(r);
}
let x = (e) => {
    let t = P();
    f.Sh.updateSetting({
        ...t,
        ...e
    });
};
function G(e, t) {
    var n, r, i, a;
    if (!t) return !1;
    if (c.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, T.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, v.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, T.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, v.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, T.yE)(null !== (a = null === (i = e.media.contentScanMetadata) || void 0 === i ? void 0 : i.contentScanFlags) && void 0 !== a ? a : 0, d.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function k(e) {
    return w(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  G(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  G(
                      {
                          type: 1,
                          media: e
                      },
                      !0
                  )
              )
          }
        : {
              obscuredAttachments: [],
              obscuredEmbeds: []
          };
}
!(function (e) {
    (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia');
})(r || (r = {}));
function B(e) {
    return !c.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function F(e) {
    return !c.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function Z(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = h.Z.getChannel(n);
    I.default.track(v.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, E.U)(),
        context: i
    });
}
function V(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    _.Z.increment({
        name: l.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(L)]
    });
}
function H(e) {
    var t, n, r, i;
    let { channelId: a, messageId: o, attachmentIds: s, embedIds: u } = e;
    if (null == a || null == o || ((null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == u ? void 0 : u.length) && void 0 !== n ? n : 0) === 0)) return;
    let c = h.Z.getChannel(a);
    I.default.track(v.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: a,
        guild_id: null == c ? void 0 : c.guild_id,
        message_id: o,
        embed_ids: u,
        user_is_underage: (0, E.U)(),
        scan_timeout_duration: g.b2,
        attachment_ids_v2: s
    }),
        _.Z.increment({
            name: l.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(L)]
        }),
        _.Z.distribution({ name: l.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (r = null == s ? void 0 : s.length) && void 0 !== r ? r : 0) + (null !== (i = null == u ? void 0 : u.length) && void 0 !== i ? i : 0));
}
function Y(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: r, numOfEmbeds: i, numOfEmbedsPendingScan: a } = e;
    if (null == t) return;
    let o = h.Z.getChannel(t);
    I.default.track(v.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == o ? void 0 : o.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: i,
        num_of_embeds_pending_scan: a
    });
    let s = r + a;
    s > 0 && _.Z.distribution({ name: l.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, s);
}
function j(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: a, numOfExplicitEmbeds: o } = e;
    if (null == n) return;
    let s = h.Z.getChannel(n);
    I.default.track(v.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == s ? void 0 : s.type,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: o
    });
}
function W(e) {
    let { attachments: t, embeds: n } = K(e),
        r = z(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function K(e) {
    let t = e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e));
    return {
        attachments: t,
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function z(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = K(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
!(function (e) {
    (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent');
})(i || (i = {})),
    !(function (e) {
        (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked');
    })(a || (a = {})),
    !(function (e) {
        (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout');
    })(o || (o = {}));
let q = (e, t) => null != e && null != t && (e <= A.LN || t <= A.iE);
