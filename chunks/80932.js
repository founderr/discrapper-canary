n.d(t, {
    $K: function () {
        return L;
    },
    OQ: function () {
        return v;
    },
    RE: function () {
        return O;
    },
    Xe: function () {
        return b;
    },
    dv: function () {
        return R;
    },
    rS: function () {
        return N;
    },
    t0: function () {
        return A;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(544891),
    l = n(381499),
    u = n(570140),
    c = n(479531),
    d = n(339085),
    _ = n(633302),
    E = n(347374),
    f = n(38618),
    h = n(675478),
    p = n(486472),
    m = n(823379),
    I = n(668781),
    T = n(981631),
    g = n(526761),
    S = n(689938);
function A(e) {
    h.hW.updateAsync(
        'textAndImages',
        (t) => {
            (t.diversitySurrogate = l.Gm.create()), (t.diversitySurrogate.value = e);
        },
        g.fy.FREQUENT_USER_ACTION
    );
}
function v(e) {
    u.Z.dispatch({
        type: 'EMOJI_FETCH',
        guildId: e
    }),
        s.tn
            .get({
                url: T.ANM.GUILD_EMOJIS(e),
                oldFormErrors: !0
            })
            .then(
                (t) =>
                    u.Z.dispatch({
                        type: 'EMOJI_FETCH_SUCCESS',
                        guildId: e,
                        emojis: t.body
                    }),
                () =>
                    u.Z.dispatch({
                        type: 'EMOJI_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function N(e) {
    let { guildId: t, image: n, name: r, roles: i } = e;
    return (
        u.Z.dispatch({
            type: 'EMOJI_UPLOAD_START',
            guildId: t
        }),
        s.tn
            .post({
                url: T.ANM.GUILD_EMOJIS(t),
                body: {
                    image: n,
                    name: r,
                    roles: i
                },
                oldFormErrors: !0
            })
            .then(
                () =>
                    u.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: t
                    }),
                (e) => (
                    u.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: t
                    }),
                    Promise.reject(e)
                )
            )
    );
}
function O(e, t) {
    return (
        u.Z.dispatch({
            type: 'EMOJI_DELETE',
            guildId: e,
            emojiId: t
        }),
        s.tn.del({
            url: T.ANM.GUILD_EMOJI(e, t),
            oldFormErrors: !0
        })
    );
}
async function R(e) {
    let { guildId: t, emojiId: n, name: r, roles: i } = e;
    try {
        return await s.tn.patch({
            url: T.ANM.GUILD_EMOJI(t, n),
            body: {
                name: r,
                roles: i
            },
            oldFormErrors: !0
        });
    } catch (e) {
        throw new c.Z(e);
    }
}
function C(e) {
    if (p.Z.totalUnavailableGuilds > 0 || !f.Z.isConnected()) return e;
    let t = e
        .map((e) => {
            var t;
            return null !== (t = d.ZP.getCustomEmojiById(e)) && void 0 !== t ? t : _.ZP.getByName(e);
        })
        .filter(m.lm);
    return [...(0, E.Z)(t).keys()];
}
function y(e) {
    var t, n, r;
    return null == e ? null : null !== (r = null !== (n = e.id) && void 0 !== n ? n : null === (t = _.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : e.name;
}
function L(e) {
    let t = y(e);
    if (null != t)
        h.DZ.updateAsync(
            'favoriteEmojis',
            (e) =>
                ((e.emojis = C(e.emojis)), o().size(e.emojis) >= g.oX)
                    ? (I.Z.show({
                          title: S.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                          body: S.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({ count: g.oX })
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            g.fy.INFREQUENT_USER_ACTION
        );
}
function b(e) {
    let t = y(e);
    if (null != t)
        h.DZ.updateAsync(
            'favoriteEmojis',
            (e) => {
                if (((e.emojis = C(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            g.fy.INFREQUENT_USER_ACTION
        );
}
