n.d(t, {
    $p: function () {
        return S;
    },
    FQ: function () {
        return g;
    },
    Il: function () {
        return A;
    },
    Jf: function () {
        return R;
    },
    SA: function () {
        return L;
    },
    Um: function () {
        return N;
    },
    eu: function () {
        return C;
    },
    hW: function () {
        return D;
    },
    lY: function () {
        return O;
    },
    pk: function () {
        return v;
    },
    qB: function () {
        return y;
    }
});
var r = n(653041);
var i = n(392711),
    a = n.n(i),
    o = n(544891),
    s = n(570140),
    l = n(668781),
    u = n(38618),
    c = n(706454),
    d = n(675478),
    _ = n(598077),
    E = n(486472),
    f = n(594174),
    h = n(73346),
    p = n(926491),
    m = n(981631),
    I = n(526761),
    T = n(689938);
let g = async (e, t) => {
        let { body: n } = await (0, h.Kb)(m.ANM.STICKER_PACK(e));
        return (
            s.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: n,
                ingestStickers: t
            }),
            n
        );
    },
    S = async function () {
        let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p.Z.isFetchingStickerPacks || p.Z.hasLoadedStickerPacks) return;
        s.Z.wait(() => {
            s.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: t }
        } = await o.tn.get({
            url: m.ANM.STICKER_PACKS,
            query: { locale: e }
        });
        s.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: t
        });
    },
    A = async (e) => {
        let { body: t } = await o.tn.get({ url: m.ANM.STICKER(e) });
        s.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: t
        });
    },
    v = async (e) => {
        let { body: t } = await o.tn.get({ url: m.ANM.GUILD_STICKER_PACKS(e) });
        s.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: t.map((e) =>
                null != e.user
                    ? {
                          ...e,
                          user: new _.Z(e.user)
                      }
                    : e
            )
        });
    },
    N = async (e) => {
        await o.tn.del({ url: m.ANM.GUILD_STICKER(e.guild_id, e.id) });
    },
    O = async (e, t) => {
        let n = await o.tn.post({
            url: m.ANM.GUILD_STICKER_PACKS(e),
            body: t
        });
        return (
            s.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: {
                    ...n.body,
                    user: f.default.getCurrentUser()
                }
            }),
            n.body
        );
    },
    R = async (e, t, n) =>
        (
            await o.tn.patch({
                url: m.ANM.GUILD_STICKER(e, t),
                body: n
            })
        ).body;
function C(e, t, n) {
    s.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: t,
        draftType: n
    });
}
function y(e, t) {
    s.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: t
    });
}
function b(e) {
    return E.Z.totalUnavailableGuilds > 0 || !u.Z.isConnected() ? e : e.filter((e) => null != p.Z.getStickerById(e));
}
function L(e) {
    d.DZ.updateAsync(
        'favoriteStickers',
        (t) =>
            ((t.stickerIds = b(t.stickerIds)), a().size(t.stickerIds) >= I.oX)
                ? (l.Z.show({
                      title: T.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                      body: T.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({ count: I.oX })
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        I.fy.INFREQUENT_USER_ACTION
    );
}
function D(e) {
    d.DZ.updateAsync(
        'favoriteStickers',
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = b(t.stickerIds));
        },
        I.fy.INFREQUENT_USER_ACTION
    );
}
