n.d(t, {
    Go: function () {
        return M;
    },
    LZ: function () {
        return w;
    },
    Pq: function () {
        return O;
    },
    RJ: function () {
        return P;
    },
    Sd: function () {
        return k;
    },
    XW: function () {
        return G;
    },
    el: function () {
        return C;
    },
    fP: function () {
        return L;
    },
    fQ: function () {
        return y;
    },
    t$: function () {
        return R;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(733860);
var o = n(470079),
    s = n(442837),
    l = n(357156),
    u = n(695346),
    c = n(516373),
    d = n(430824),
    _ = n(914010),
    E = n(771845),
    f = n(594174),
    h = n(267642),
    p = n(700785),
    m = n(285651),
    I = n(268350),
    T = n(822179),
    g = n(926491),
    S = n(373228),
    A = n(378233),
    v = n(981631),
    N = n(689938);
let O = (e) => {
        L();
        let t = (0, s.e7)([g.Z], () => g.Z.hasLoadedStickerPacks);
        o.useEffect(() => {
            t && null == g.Z.getStickerPack(e) && (0, I.FQ)(e);
        }, [e, t]);
    },
    R = (e) => {
        let t = u.Wp.useSetting();
        return (0, A.WD)(t, e);
    },
    C = (e) => {
        let { collapsedStickersCategories: t, filteredStickers: n, listPaddingRight: r = 0, listWidth: i = 0, stickerNodeMargin: a = 0, stickerNodeWidth: s, stickersCategories: u } = e;
        return o.useMemo(() => {
            let e = Math.floor((i - r + a) / (s + a)),
                o = Math.floor(Math.max(a, (i - r - s * e) / (e - 1))),
                c = [],
                E = [],
                f = [],
                p = 0,
                m = 0,
                I = 0;
            if (0 !== i) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, A.J8)(t[0]) ? d.Z.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: a } = (0, l.Gw)(i),
                        o = _.Z.getGuildId(),
                        s = u.findIndex((e) => e.type === S.Ih.FAVORITE),
                        T = u.findIndex((e) => e.type === S.Ih.RECENT),
                        g = t.length;
                    null != i && o === i.id && a && t.length < (0, h.A3)(i.premiumTier) && g++;
                    let v = Math.ceil(g / e);
                    E[m] = r ? 0 : v;
                    for (let a = 0; a < v; a++) {
                        let o = a * e,
                            l = o + e,
                            u = t.slice(o, l).map((e, t) => ({
                                type: S.al.STICKER,
                                sticker: e,
                                packId: (0, A.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: m,
                                rowIndex: p,
                                columnIndex: t,
                                visibleRowIndex: I,
                                category: n
                            }));
                        m > T &&
                            m > s &&
                            null != i &&
                            g > t.length &&
                            u.push({
                                type: S.al.CREATE_STICKER,
                                guild_id: i.id,
                                name: N.Z.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: m,
                                rowIndex: p,
                                columnIndex: u.length,
                                visibleRowIndex: I
                            }),
                            !r && (I++, f.push(u), c.push(u.length)),
                            p++;
                    }
                    m++;
                };
                if (null == n) for (let e of u) e.stickers.length > 0 ? (p++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === S.Ih.EMPTY_GUILD_UPSELL && ((E[m] = 0), m++);
                else n.sendable.length > 0 && r(n.sendable, S.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, S.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: p,
                rowCountBySection: E,
                stickersGrid: f,
                gutterWidth: o,
                columnCounts: c
            };
        }, [t, n, r, i, a, s, u]);
    },
    y = (e) => {
        let t = (0, s.e7)([f.default], () => f.default.getCurrentUser());
        return (0, s.e7)(
            [g.Z],
            () => {
                for (let n of g.Z.getAllStickersIterator()) if ((0, m.kl)(n, t, e)) return !0;
                return !1;
            },
            [t, e]
        );
    },
    L = () => {
        o.useEffect(() => {
            (0, I.$p)();
        }, []);
    },
    b = (e) => {
        let t = (0, s.e7)([g.Z], () => g.Z.getAllGuildStickers()),
            n = (0, s.Wu)(
                [E.ZP, d.Z],
                () => {
                    let e = E.ZP.getFlattenedGuildIds(),
                        t = [];
                    return (
                        e.forEach((e) => {
                            let n = d.Z.getGuild(e);
                            null != n && t.push(n);
                        }),
                        t
                    );
                },
                []
            ),
            r = (0, s.e7)([f.default], () => f.default.getCurrentUser());
        return o.useMemo(() => {
            let i = [];
            for (let { name: e, id: r } of n) {
                let n = t.get(r);
                if (null != n && 0 !== n.length)
                    i.push({
                        type: S.Ih.GUILD,
                        id: r,
                        name: e,
                        stickers: n
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let t = d.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, l.Gw)(t),
                    a = i.findIndex((t) => t.id === e.getGuildId());
                a >= 1
                    ? i.unshift(i.splice(a, 1)[0])
                    : -1 === a &&
                      null != t &&
                      n &&
                      i.unshift({
                          type: S.Ih.EMPTY_GUILD_UPSELL,
                          id: t.id,
                          name: t.name,
                          stickers: []
                      }),
                    null != r &&
                        !p.BT({
                            permission: v.Plq.USE_EXTERNAL_EMOJIS,
                            user: r,
                            context: e
                        }) &&
                        (i = i.filter((t) => t.id === e.getGuildId()));
            }
            return i;
        }, [t, n, r, e]);
    },
    D = [];
function M() {
    var e, t;
    return null !== (t = null === (e = (0, c.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : D;
}
function P() {
    let e = M();
    return (0, s.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => null != e && (!(0, A.J8)(e) || (0, A.V9)(e))), [e]);
}
function U() {
    var e, t;
    let n = (0, c.D)(),
        r = D;
    return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r;
}
function w() {
    let e = U();
    return (0, s.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let x = (e) => {
        let t = P(),
            { packs: n, frequentlyUsedStickers: r } = (0, s.cj)(
                [g.Z, T.Z],
                () => ({
                    packs: g.Z.getPremiumPacks(),
                    frequentlyUsedStickers: T.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            i = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            a = b(e);
        return o.useMemo(() => {
            var o;
            let s = n.map(A.z),
                l = {
                    type: S.Ih.FAVORITE,
                    id: S.Ih.FAVORITE,
                    name: N.Z.Messages.CATEGORY_FAVORITE,
                    stickers: t
                };
            return [
                l,
                {
                    type: S.Ih.RECENT,
                    id: S.Ih.RECENT,
                    name: N.Z.Messages.STICKER_CATEGORY_RECENT,
                    stickers:
                        null !==
                            (o =
                                null == r
                                    ? void 0
                                    : r.filter((t) => {
                                          if ((0, A.J8)(t)) {
                                              var r, a;
                                              return null !== (a = null === (r = g.Z.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some((e) => e.id === t.id)) && void 0 !== a && a && (0, m.cO)(t, i, e) !== m.eb.NONSENDABLE;
                                          }
                                          if ((0, A.jl)(t)) return n.some((e) => e.id === t.pack_id);
                                      })) && void 0 !== o
                            ? o
                            : []
                },
                ...a,
                ...s
            ];
        }, [n, t, r, a, i, e]);
    },
    G = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, s.e7)([g.Z], () => g.Z.getStickerById(e.id)),
            [r, i] = o.useState(!0),
            [a, l] = o.useState(!1),
            u = (0, A.J8)(e) || (0, A.jl)(e);
        return (o.useEffect(() => {
            (async () => {
                if (t && !u && null == n && r && !a) {
                    i(!1);
                    try {
                        await (0, I.Il)(e.id);
                    } catch {}
                    l(!0);
                }
            })();
        }, [t]),
        u)
            ? [e, a]
            : [null != n ? n : null, a];
    },
    k = (e) => {
        let t = x(e);
        return o.useMemo(() => t.filter((e) => e.type === S.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
