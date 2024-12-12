r.d(n, {
    $p: function () {
        return b;
    },
    FQ: function () {
        return T;
    },
    Il: function () {
        return y;
    },
    Jf: function () {
        return C;
    },
    SA: function () {
        return L;
    },
    Um: function () {
        return A;
    },
    eu: function () {
        return R;
    },
    hW: function () {
        return x;
    },
    lY: function () {
        return N;
    },
    pk: function () {
        return S;
    },
    qB: function () {
        return O;
    }
});
var i = r(653041);
var a = r(392711),
    s = r.n(a),
    o = r(544891),
    l = r(570140),
    u = r(668781),
    c = r(38618),
    d = r(706454),
    f = r(675478),
    _ = r(598077),
    h = r(486472),
    p = r(594174),
    m = r(73346),
    g = r(926491),
    E = r(981631),
    v = r(526761),
    I = r(388032);
let T = async (e, n) => {
        let { body: r } = await (0, m.Kb)({
            url: E.ANM.STICKER_PACK(e),
            rejectWithError: !1
        });
        return (
            l.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: r,
                ingestStickers: n
            }),
            r
        );
    },
    b = async function () {
        let { locale: e = d.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (g.Z.isFetchingStickerPacks || g.Z.hasLoadedStickerPacks) return;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: n }
        } = await o.tn.get({
            url: E.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: n
        });
    },
    y = async (e) => {
        let { body: n } = await o.tn.get({
            url: E.ANM.STICKER(e),
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: n
        });
    },
    S = async (e) => {
        let { body: n } = await o.tn.get({
            url: E.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: n.map((e) =>
                null != e.user
                    ? {
                          ...e,
                          user: new _.Z(e.user)
                      }
                    : e
            )
        });
    },
    A = async (e) => {
        await o.tn.del({
            url: E.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1
        });
    },
    N = async (e, n) => {
        let r = await o.tn.post({
            url: E.ANM.GUILD_STICKER_PACKS(e),
            body: n,
            rejectWithError: !1
        });
        return (
            l.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: {
                    ...r.body,
                    user: p.default.getCurrentUser()
                }
            }),
            r.body
        );
    },
    C = async (e, n, r) =>
        (
            await o.tn.patch({
                url: E.ANM.GUILD_STICKER(e, n),
                body: r,
                rejectWithError: !1
            })
        ).body;
function R(e, n, r) {
    l.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: n,
        draftType: r
    });
}
function O(e, n) {
    l.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: n
    });
}
function D(e) {
    return h.Z.totalUnavailableGuilds > 0 || !c.Z.isConnected() ? e : e.filter((e) => null != g.Z.getStickerById(e));
}
function L(e) {
    f.DZ.updateAsync(
        'favoriteStickers',
        (n) =>
            ((n.stickerIds = D(n.stickerIds)), s().size(n.stickerIds) >= v.oX)
                ? (u.Z.show({
                      title: I.intl.string(I.t['+XYXtb']),
                      body: I.intl.formatToPlainString(I.t.JaIyFh, { count: v.oX })
                  }),
                  !1)
                : !n.stickerIds.includes(e) && void n.stickerIds.push(e),
        v.fy.INFREQUENT_USER_ACTION
    );
}
function x(e) {
    f.DZ.updateAsync(
        'favoriteStickers',
        (n) => {
            (n.stickerIds = n.stickerIds.filter((n) => n !== e)), (n.stickerIds = D(n.stickerIds));
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
