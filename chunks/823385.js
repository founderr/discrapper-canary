let r;
n(653041), n(47120), n(733860), n(724458);
var i,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(212819),
    d = n(938078),
    f = n(220444),
    _ = n(601070),
    p = n(210887),
    h = n(314897),
    m = n(592125),
    g = n(703558),
    E = n(984933),
    v = n(271383),
    I = n(430824),
    T = n(496675),
    b = n(306680),
    S = n(944486),
    y = n(914010),
    A = n(9156),
    N = n(483360),
    C = n(823379),
    R = n(981631),
    O = n(388032);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let L = 'seenQSTutorial',
    x = [c.h8.USER, c.h8.GROUP_DM, c.h8.TEXT_CHANNEL, c.h8.GUILD, c.h8.APPLICATION, c.h8.LINK, c.h8.IN_APP_NAVIGATION],
    w = 0,
    P = !1,
    M = !1,
    k = null,
    U = [],
    B = null,
    G = 0,
    Z = [],
    F = [];
function V() {
    (M = I.Z.getGuildCount() >= 3 || s().size(m.Z.getMutablePrivateChannels()) >= 20), (Z = []);
}
function j(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != k && k !== t.type) ? null : t;
}
function H(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : void 0,
        s = new Set(['user:'.concat(h.default.getId())]);
    null != a && s.add('guild:'.concat(a)),
        (r =
            null != r
                ? r
                : new c.ZP(Y, x, null != i ? 100 : 5, {
                      frecencyBoosters: !0,
                      blacklist: s
                  })),
        (B = null),
        (G = n.length),
        (k = i),
        r.search(n);
}
function Y(e, t) {
    if (
        !(function (e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) {
                let r = e[n],
                    i = t[n];
                if (r.record.id !== i.record.id) return !1;
            }
            return !0;
        })(
            (e =
                '' === (t = t.trim()).trim()
                    ? (function () {
                          var e, t;
                          let n = null !== (e = y.Z.getGuildId()) && void 0 !== e ? e : void 0,
                              r = null !== (t = S.Z.getChannelId()) && void 0 !== t ? t : void 0;
                          switch (k) {
                              case c.h8.USER: {
                                  let e = h.default.getId();
                                  return N.ZP.getRecentlyTalked(r, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case c.h8.APPLICATION:
                                  return N.ZP.queryApplications({
                                      query: '',
                                      limit: 100,
                                      fuzzy: !0
                                  });
                              case c.h8.GUILD:
                                  return N.ZP.queryGuilds({
                                      query: '',
                                      limit: 100,
                                      fuzzy: !0
                                  });
                              case c.h8.TEXT_CHANNEL:
                                  return N.ZP.queryChannels({
                                      query: '',
                                      guildId: y.Z.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0
                                  });
                              case c.h8.VOICE_CHANNEL:
                                  return N.ZP.queryChannels({
                                      query: '',
                                      guildId: y.Z.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: E.Zb
                                  });
                          }
                          let i = [],
                              a = [];
                          for (let e = 1; e < F.length; e += 1) {
                              let t = j(F[e]);
                              if (null != t) ((t.type !== c.h8.TEXT_CHANNEL && t.type !== c.h8.VOICE_CHANNEL) || T.Z.can(R.Plq.VIEW_CHANNEL, t.record)) && a.push(t);
                          }
                          a.length > 0 && i.push((0, c.o6)(O.intl.string(O.t['80lOZ2'])), ...a);
                          let o = (function (e) {
                              let t = [];
                              return (
                                  g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((n) => {
                                      let { channelId: r } = n;
                                      if (e(r)) return;
                                      let i = j(r);
                                      null != i && t.push(i);
                                  }),
                                  t
                              );
                          })((e) => e === r || F.includes(e));
                          o.length > 0 && i.push((0, c.o6)(O.intl.string(O.t['4B63jY'])), ...o);
                          let l = b.ZP.getMentionChannelIds()
                              .filter((e) => e !== r && !F.includes(e))
                              .map((e) => j(e))
                              .filter(C.lm)
                              .reverse();
                          if ((l.length > 0 && (i.push((0, c.o6)(O.intl.string(O.t['61Df19']))), (i = i.concat(l))), null != n)) {
                              let e = E.ZP.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = m.Z.getChannel(e);
                                      return !(null == t || e === r || F.includes(e) || A.ZP.isChannelMuted(t.guild_id, e) || (null != t.parent_id && A.ZP.isChannelMuted(t.guild_id, t.parent_id))) && (0, f.d)(t);
                                  })
                                  .map((e) => j(e))
                                  .filter((e) => e);
                              Object.values(_.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = j(n);
                                      null != t && e.push(t);
                                  }
                              }),
                                  e.length > 0 && (i.push((0, c.o6)(O.intl.string(O.t.ieCAhI))), (i = i.concat(e)));
                          }
                          return s()(i)
                              .uniqBy((e) => e.record.id)
                              .value();
                      })()
                    : e),
            Z
        )
    )
        (Z = e),
            !(function (e, t) {
                switch (k) {
                    case c.h8.USER: {
                        let t = I.Z.getGuild(y.Z.getGuildId());
                        e.unshift((0, c.o6)(null != t ? O.intl.formatToPlainString(O.t.FREzQk, { name: t.name }) : O.intl.string(O.t.XFYW1t))), (U = e);
                        break;
                    }
                    case c.h8.TEXT_CHANNEL:
                        e.unshift((0, c.o6)(O.intl.string(O.t.W26k4e))), (U = e);
                        break;
                    case c.h8.VOICE_CHANNEL:
                        e.unshift((0, c.o6)(O.intl.string(O.t.zUoI5O))), (U = e);
                        break;
                    case c.h8.GUILD:
                        e.unshift((0, c.o6)(O.intl.string(O.t.olADPj))), (U = e);
                        break;
                    case c.h8.APPLICATION:
                        e.unshift((0, c.o6)(O.intl.string(O.t.VwK1lZ))), (U = e);
                        break;
                    default:
                        U = e;
                }
                if (t !== B) (B = t), (G = Math.max(t.length, G)), (w = (0, c.gJ)(c.a8.DOWN, -1, U));
                else {
                    let e = U[w];
                    null != e && e.type === c.h8.HEADER && (w = (0, c.gJ)(c.a8.DOWN, w, U));
                }
                z.emitChange();
            })(e, t);
}
function W() {
    (B = null), (G = 0), (Z = []), null != r && (r.destroy(), (r = null));
}
class K extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(v.ZP, I.Z, m.Z), this.syncWith([p.Z], () => !0), (P = l.K.get(L) || !1), (F = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []);
    }
    getState() {
        return { channelHistory: F };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r ? 0 : null == e ? r.results.reduce((e, t) => (t.type !== c.h8.HEADER ? e + 1 : e), 0) : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= R.Hqc;
        return M && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds('', 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds('', 100).length : 0;
    }
    getChannelHistory() {
        return F;
    }
    getProps() {
        return {
            theme: p.Z.theme,
            query: null != r ? r.query : '',
            queryMode: k,
            results: U,
            selectedIndex: w,
            seenTutorial: P,
            maxQueryLength: G
        };
    }
}
D(K, 'displayName', 'QuickSwitcherStore'), D(K, 'persistKey', 'QuickSwitcherStore');
let z = new K(u.Z, {
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    QUICKSWITCHER_SHOW: H,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: H,
    QUICKSWITCHER_HIDE: W,
    OVERLAY_SET_INPUT_LOCKED: W,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: W,
    QUICKSWITCHER_SEARCH: function (e) {
        var t, n;
        let { query: i, queryMode: a } = e;
        if (null == r) return !1;
        let s = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : null;
        if (k !== a) {
            r.setResultTypes(null != a ? [a] : x), r.setLimit(null != a ? 100 : 5);
            let e = null !== (n = y.Z.getGuildId()) && void 0 !== n ? n : void 0;
            a === c.h8.USER && null != e
                ? r.setOptions(
                      {
                          userFilters: {
                              guild: e,
                              friends: !0
                          }
                      },
                      !0
                  )
                : a === c.h8.VOICE_CHANNEL
                  ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
                  : r.setOptions(
                        {
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        },
                        !0
                    );
        }
        (k = a), r.search(i, k === c.h8.USER ? s : void 0);
    },
    QUICKSWITCHER_SELECT: function (e) {
        w = e.selectedIndex;
    },
    QUICKSWITCHER_SWITCH_TO: function () {
        if (P) return !1;
        (P = !0), l.K.set(L, !0);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        (F = F.filter((e) => e !== t)).unshift(t), F.length > 4 && (F.length = 4);
    }
});
t.Z = z;
