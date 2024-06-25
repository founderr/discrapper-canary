"use strict";
n.d(t, {
  Bg: function() {
    return s
  },
  Ni: function() {
    return x
  },
  YH: function() {
    return G
  },
  ld: function() {
    return i
  },
  rf: function() {
    return w
  }
}), n(47120), n(653041);
var i, r, s, o, a, l, u = n(470079),
  _ = n(392711),
  c = n.n(_),
  d = n(772848),
  E = n(442837),
  I = n(80932),
  T = n(339085),
  h = n(906411),
  f = n(633302),
  S = n(806966),
  A = n(28546),
  N = n(889161),
  m = n(984933),
  O = n(430824),
  p = n(914010),
  R = n(771845),
  g = n(594174),
  C = n(176354),
  v = n(111361),
  L = n(392552),
  D = n(543241),
  M = n(304852),
  P = n(199257),
  y = n(149203),
  U = n(185923),
  b = n(689938);
(o = i || (i = {}))[o.EMOJI = 0] = "EMOJI", o[o.CREATE_EMOJI = 1] = "CREATE_EMOJI", (a = r || (r = {}))[a.SECTION_HEADING = 0] = "SECTION_HEADING", a[a.SECTION_ROW = 1] = "SECTION_ROW";
let G = e => {
  let {
    channel: t,
    collapsedSections: n,
    includeCreateEmojiButton: i = !0,
    pickerIntention: r,
    emojiSearchResults: s,
    gridWidth: o,
    emojiPaddingHorizontal: a,
    emojiSpriteSize: l
  } = e, _ = (0, E.e7)([T.Z], () => T.Z.categories), I = (0, E.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]), S = null == t ? null : t.getGuildId(), A = (0, E.e7)([T.Z], () => T.Z.getDisambiguatedEmojiContext(S), [S]), G = (0, D.NJ)(S), w = (0, D.wC)(S), {
    topEmojis: x,
    newlyAddedEmojis: B
  } = (0, P.Z)(S, r), k = (0, E.Wu)([R.ZP], () => R.ZP.getFlattenedGuildIds(), []), {
    canCreateExpressions: V
  } = (0, N.XJ)(I), Z = (0, E.e7)([g.default], () => g.default.getCurrentUser()), H = (0, v.I5)(Z), F = A.getCustomEmoji(), Y = e => {
    if (e.type === h.B.GUILD) return e.guildId
  }, j = u.useMemo(() => c().groupBy(F, Y), [F]), {
    enabled: W,
    treatment: K
  } = L.Z.useExperiment({
    location: "EmojiPicker"
  }, {
    autoTrackExposure: !0,
    disable: !V
  });
  return u.useMemo(() => {
    let e = [],
      u = [],
      E = [],
      T = [],
      h = 0,
      S = 0;
    if (null != A && null != o) {
      let A = Math.floor(o / (l + 2 * a)),
        N = (s, o) => {
          let a = new Map,
            _ = n.has(o.sectionId),
            [d, I] = c().partition(s, e => {
              let n = C.ZP.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: r
              });
              return a.set(e, n), !n
            }),
            f = d.concat(I),
            N = o.guild,
            m = p.Z.getGuildId(),
            O = o.sectionId === y.En.TOP_GUILD_EMOJI,
            R = !O && null != N && m === N.id && f.length < N.getMaxEmojiSlots(),
            g = O && f.length < A && !W,
            v = null != N && O && W && K === L.B.WITH_TOP_LIST && j[N.id].length < N.getMaxEmojiSlots(),
            M = i && V && null != N && (R || g || v);
          M && v && f.length === A && f.shift();
          let P = W && M && !_,
            U = Math.ceil((M ? f.length + 1 : f.length) / A),
            G = [];
          for (let e = 0; e < U; e++) {
            let t = 0 === e,
              n = e * A - (P && e > 0 ? 1 : 0),
              i = n + A - (P && t ? 1 : 0),
              r = f.slice(n, i).map((e, n) => {
                var i, r;
                return {
                  type: 0,
                  emoji: e,
                  size: l,
                  isDisabled: a.get(e),
                  rowIndex: S,
                  columnIndex: P && t ? n + 1 : n,
                  visibleRowIndex: h,
                  category: o.type,
                  subCategory: o.sectionId === y.En.TOP_GUILD_EMOJI ? (0, D.IP)(x, B, null !== (r = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== r ? r : e.name) : y.t0.NONE
                }
              });
            if (P && t && !_ && (r = [{
                type: 1,
                guildId: N.id,
                name: b.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                size: l,
                rowIndex: S,
                columnIndex: 0,
                visibleRowIndex: h
              }, ...r]), G.push(r), !_) {
              if (!W && M && e === U - 1) {
                let t = G[e];
                t.push({
                  type: 1,
                  guildId: N.id,
                  name: b.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: l,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: h
                })
              }
              T.push(r.length), E.push(r), h++
            }
            S++
          }
          let w = {
            ...o,
            count: s.length
          };
          u.push(w), e.push(_ ? 0 : U)
        };
      if (null != s) 0 !== s.unlocked.length && N(s.unlocked, {
        type: y.En.SEARCH_RESULTS,
        sectionId: y.En.SEARCH_RESULTS,
        count: s.unlocked.length,
        isNitroLocked: !1
      }), 0 !== s.locked.length && N(s.locked, {
        type: y.En.PREMIUM_UPSELL,
        categoryId: y.UX.PREMIUM_UPSELL,
        sectionId: y.En.PREMIUM_UPSELL,
        count: s.locked.length,
        isNitroLocked: !H
      });
      else
        for (let e of _)
          if (e === y.UX.CUSTOM) {
            let n = n => {
              let i = j[n];
              if (null == i) return;
              let s = i.filter(e => C.ZP.getEmojiUnavailableReason({
                emoji: e,
                channel: null != t ? t : m.ZP.getDefaultChannel(n),
                intention: r
              }) !== U.Z5.DISALLOW_EXTERNAL);
              if (0 === s.length) return;
              let o = O.Z.getGuild(n),
                a = !H && C.ZP.isEmojiCategoryNitroLocked({
                  categoryEmojis: s,
                  channel: t,
                  intention: r
                });
              N(s, {
                categoryId: e,
                guild: o,
                type: y.En.GUILD,
                sectionId: null != o ? o.id : (0, d.Z)(),
                count: s.length,
                isNitroLocked: a
              })
            };
            if (null != I && n(I.id), (0, U.Gt)(r))
              for (let e of k)(null == I || I.id !== e) && n(e)
          } else if (e === y.UX.TOP_GUILD_EMOJI) {
        if (null != I) {
          let {
            allEmojis: t
          } = (0, M.J)({
            topEmojis: x,
            newlyAddedEmojis: B
          });
          t.length > 0 && N(t, {
            categoryId: e,
            guild: O.Z.getGuild(I.id),
            type: y.En.TOP_GUILD_EMOJI,
            sectionId: y.En.TOP_GUILD_EMOJI,
            count: t.length,
            isNitroLocked: !1
          })
        }
      } else if (e === y.UX.RECENT) {
        let n = w.filter(e => !C.ZP.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: r
        }));
        N(n, {
          categoryId: e,
          type: y.En.RECENT,
          sectionId: y.En.RECENT,
          count: n.length,
          isNitroLocked: !1
        })
      } else if (e === y.UX.FAVORITES) {
        let n = G.filter(e => !C.ZP.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: r
        }));
        0 !== n.length && N(n, {
          categoryId: e,
          type: y.En.FAVORITES,
          sectionId: y.En.FAVORITES,
          count: n.length,
          isNitroLocked: !1
        })
      } else {
        let t = f.ZP.getByCategory(e);
        null != t && N(t, {
          categoryId: e,
          type: y.En.UNICODE,
          sectionId: e,
          count: t.length,
          isNitroLocked: !1
        })
      }
    }
    return {
      columnCounts: T,
      emojiGrid: E,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [A, o, l, a, s, n, t, r, _, I, j, k, B, x, w, G, V, i, H, W, K])
};
(l = s || (s = {}))[l.PREMIUM = 0] = "PREMIUM", l[l.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let w = e => {
    let {
      pickerIntention: t,
      selectedChannel: n,
      onSelectEmoji: i,
      setUpsellConfigs: r,
      emojiSelectAnalytics: s,
      trackEmojiFavorited: o
    } = e, a = (0, E.e7)([T.Z], () => T.Z.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
    return u.useCallback((e, l) => {
      switch (e.type) {
        case 1:
          i(void 0, l.isFinalSelection, l.isBurst);
          return;
        case 0: {
          let {
            emoji: u
          } = e;
          if (null == u) return;
          let _ = C.ZP.getEmojiUnavailableReason({
            emoji: u,
            channel: n,
            intention: t
          });
          if (l.toggleFavorite) {
            a.isFavoriteEmojiWithoutFetchingLatest(u) || null != _ ? (0, I.Xe)(u) : (null == o || o(e), (0, I.$K)(u));
            return
          }
          if (_ === U.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (_ === U.Z5.PREMIUM_LOCKED) {
            r({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (_ === U.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === h.B.GUILD) {
            r({
              type: 1,
              guildId: u.guildId,
              emojiId: u.id
            });
            return
          }
          if (_ === U.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == s || s(e), i(u, l.isFinalSelection, l.isBurst)
        }
      }
    }, [n, t, i, r, a, s, o])
  },
  x = e => {
    let {
      emojiListRef: t
    } = e, n = (0, A.Iu)(e => e.searchQuery), i = u.useCallback(e => {
      var n;
      return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
    }, [t]);
    return u.useCallback(e => {
      "" !== n ? ((0, A.ql)(""), S.kJ.setActiveCategoryIndex(e)) : i(e)
    }, [i, n])
  }