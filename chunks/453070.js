n.d(t, {
    Go: function () {
        return O;
    },
    LZ: function () {
        return L;
    },
    Pq: function () {
        return b;
    },
    RJ: function () {
        return D;
    },
    Sd: function () {
        return P;
    },
    XW: function () {
        return w;
    },
    el: function () {
        return y;
    },
    fP: function () {
        return N;
    },
    fQ: function () {
        return A;
    },
    t$: function () {
        return S;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var r = n(192379),
    i = n(442837),
    a = n(357156),
    s = n(695346),
    o = n(516373),
    l = n(430824),
    u = n(914010),
    c = n(771845),
    d = n(594174),
    f = n(267642),
    _ = n(700785),
    p = n(285651),
    h = n(268350),
    m = n(822179),
    g = n(926491),
    E = n(373228),
    v = n(378233),
    I = n(981631),
    T = n(388032);
let b = (e) => {
        N();
        let t = (0, i.e7)([g.Z], () => g.Z.hasLoadedStickerPacks);
        r.useEffect(() => {
            t && null == g.Z.getStickerPack(e) && (0, h.FQ)(e);
        }, [e, t]);
    },
    S = (e) => {
        let t = s.Wp.useSetting();
        return (0, v.WD)(t, e);
    },
    y = (e) => {
        let { collapsedStickersCategories: t, filteredStickers: n, listPaddingRight: i = 0, listWidth: s = 0, stickerNodeMargin: o = 0, stickerNodeWidth: c, stickersCategories: d } = e;
        return r.useMemo(() => {
            let e = Math.floor((s - i + o) / (c + o)),
                r = Math.floor(Math.max(o, (s - i - c * e) / (e - 1))),
                _ = [],
                p = [],
                h = [],
                m = 0,
                g = 0,
                I = 0;
            if (0 !== s) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, v.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: s } = (0, a.Gw)(i),
                        o = u.Z.getGuildId(),
                        c = d.findIndex((e) => e.type === E.Ih.FAVORITE),
                        b = d.findIndex((e) => e.type === E.Ih.RECENT),
                        S = t.length;
                    null != i && o === i.id && s && t.length < (0, f.A3)(i.premiumTier) && S++;
                    let y = Math.ceil(S / e);
                    p[g] = r ? 0 : y;
                    for (let a = 0; a < y; a++) {
                        let s = a * e,
                            o = s + e,
                            l = t.slice(s, o).map((e, t) => ({
                                type: E.al.STICKER,
                                sticker: e,
                                packId: (0, v.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: t,
                                visibleRowIndex: I,
                                category: n
                            }));
                        g > b &&
                            g > c &&
                            null != i &&
                            S > t.length &&
                            l.push({
                                type: E.al.CREATE_STICKER,
                                guild_id: i.id,
                                name: T.intl.string(T.t['UwF+Cw']),
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: l.length,
                                visibleRowIndex: I
                            }),
                            !r && (I++, h.push(l), _.push(l.length)),
                            m++;
                    }
                    g++;
                };
                if (null == n) for (let e of d) e.stickers.length > 0 ? (m++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.Ih.EMPTY_GUILD_UPSELL && ((p[g] = 0), g++);
                else n.sendable.length > 0 && r(n.sendable, E.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: m,
                rowCountBySection: p,
                stickersGrid: h,
                gutterWidth: r,
                columnCounts: _
            };
        }, [t, n, i, s, o, c, d]);
    },
    A = (e) => {
        let t = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        return (0, i.e7)(
            [g.Z],
            () => {
                for (let n of g.Z.getAllStickersIterator()) if ((0, p.kl)(n, t, e)) return !0;
                return !1;
            },
            [t, e]
        );
    },
    N = () => {
        r.useEffect(() => {
            (0, h.$p)();
        }, []);
    },
    C = (e) => {
        let t = (0, i.e7)([g.Z], () => g.Z.getAllGuildStickers()),
            n = (0, i.Wu)(
                [c.ZP, l.Z],
                () => {
                    let e = c.ZP.getFlattenedGuildIds(),
                        t = [];
                    return (
                        e.forEach((e) => {
                            let n = l.Z.getGuild(e);
                            null != n && t.push(n);
                        }),
                        t
                    );
                },
                []
            ),
            s = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = [];
            for (let { name: e, id: i } of n) {
                let n = t.get(i);
                if (null != n && 0 !== n.length)
                    r.push({
                        type: E.Ih.GUILD,
                        id: i,
                        name: e,
                        stickers: n
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let t = l.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, a.Gw)(t),
                    i = r.findIndex((t) => t.id === e.getGuildId());
                i >= 1
                    ? r.unshift(r.splice(i, 1)[0])
                    : -1 === i &&
                      null != t &&
                      n &&
                      r.unshift({
                          type: E.Ih.EMPTY_GUILD_UPSELL,
                          id: t.id,
                          name: t.name,
                          stickers: []
                      }),
                    null != s &&
                        !_.BT({
                            permission: I.Plq.USE_EXTERNAL_EMOJIS,
                            user: s,
                            context: e
                        }) &&
                        (r = r.filter((t) => t.id === e.getGuildId()));
            }
            return r;
        }, [t, n, s, e]);
    },
    R = [];
function O() {
    var e, t;
    return null !== (t = null === (e = (0, o.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : R;
}
function D() {
    let e = O();
    return (0, i.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => null != e && (!(0, v.J8)(e) || (0, v.V9)(e))), [e]);
}
function L() {
    let e = (function () {
        var e, t;
        let n = (0, o.D)(),
            r = R;
        return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r;
    })();
    return (0, i.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let x = (e) => {
        let t = D(),
            { packs: n, frequentlyUsedStickers: a } = (0, i.cj)(
                [g.Z, m.Z],
                () => ({
                    packs: g.Z.getPremiumPacks(),
                    frequentlyUsedStickers: m.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            s = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
            o = C(e);
        return r.useMemo(() => {
            var r;
            let i = n.map(v.z),
                l = {
                    type: E.Ih.FAVORITE,
                    id: E.Ih.FAVORITE,
                    name: T.intl.string(T.t.y3LQCA),
                    stickers: t
                };
            return [
                l,
                {
                    type: E.Ih.RECENT,
                    id: E.Ih.RECENT,
                    name: T.intl.string(T.t['6hjpXV']),
                    stickers:
                        null !==
                            (r =
                                null == a
                                    ? void 0
                                    : a.filter((t) => {
                                          if ((0, v.J8)(t)) {
                                              var r, i;
                                              return null !== (i = null === (r = g.Z.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some((e) => e.id === t.id)) && void 0 !== i && i && (0, p.cO)(t, s, e) !== p.eb.NONSENDABLE;
                                          }
                                          if ((0, v.jl)(t)) return n.some((e) => e.id === t.pack_id);
                                      })) && void 0 !== r
                            ? r
                            : []
                },
                ...o,
                ...i
            ];
        }, [n, t, a, o, s, e]);
    },
    w = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.e7)([g.Z], () => g.Z.getStickerById(e.id)),
            [a, s] = r.useState(!0),
            [o, l] = r.useState(!1),
            u = (0, v.J8)(e) || (0, v.jl)(e);
        return (r.useEffect(() => {
            (async () => {
                if (t && !u && null == n && a && !o) {
                    s(!1);
                    try {
                        await (0, h.Il)(e.id);
                    } catch {}
                    l(!0);
                }
            })();
        }, [t]),
        u)
            ? [e, o]
            : [null != n ? n : null, o];
    },
    P = (e) => {
        let t = x(e);
        return r.useMemo(() => t.filter((e) => e.type === E.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
