"use strict";
n.d(t, {
  Z: function() {
    return S
  },
  m: function() {
    return f
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(954955),
  s = n.n(r),
  o = n(442837),
  a = n(285651),
  l = n(268350),
  u = n(453070),
  _ = n(926491),
  c = n(594174),
  d = n(483360),
  E = n(251625),
  I = n(606301),
  T = n(549058);
let h = (0, E.ad)(l.$p, T.J7),
  S = (e, t, n) => {
    let r = (0, u.fQ)(n),
      s = (0, o.e7)([c.default], () => c.default.getCurrentUser());
    return i.useMemo(() => {
      let i = (0, I.wN)(e);
      if (t || null == e || "" === e || i.length > T.t7 || !r) return [];
      let o = [],
        l = [],
        u = (0, I.kT)(e),
        _ = u === i[0] ? i : [u, ...i];
      d.ZP.queryStickers(_, !1).forEach(e => {
        let {
          sticker: t
        } = e, i = (0, a.cO)(t, s, n), r = {
          sticker: t,
          sendability: i
        };
        i === a.eb.SENDABLE ? o.push(r) : i === a.eb.SENDABLE_WITH_PREMIUM && l.push(r)
      });
      let c = [];
      return o.length > 0 && (c = o.slice(0, T.qm), 0 !== l.length && (c.length === T.qm && c.pop(), c.push(l[0]))), c
    }, [e, n, r, t, s])
  },
  f = e => {
    let {
      setTextInputValue: t,
      setHasDismissed: n,
      setHasSelection: r,
      setFocusedSuggestionType: o,
      delayBeforeSuggestions: a
    } = e, l = i.useRef(null), u = i.useRef(!1), c = i.useRef(!1), d = i.useMemo(() => s()(t, null != a ? a : T.gf), [t, a]);
    return {
      handleTextChange: async e => {
        var i;
        if (null == e || "" === e) d.cancel(), null == t || t(""), null == n || n(!1), null == r || r(!1), null == o || o(null), l.current = null, u.current = !1;
        else if (!u.current && e.trim() !== (null === (i = l.current) || void 0 === i ? void 0 : i.trim())) {
          if (l.current = e, (0, I.wN)(e).length > T.t7) {
            u.current = !0, d.cancel(), t("");
            return
          }
          if (!0 === c.current) return;
          !_.Z.hasLoadedStickerPacks && (c.current = !0, await h(), c.current = !1), d(l.current)
        }
      },
      debouncedSetTextInputValue: d
    }
  }