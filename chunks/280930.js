n.d(t, {
    Z: function () {
        return g;
    },
    m: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(954955),
    a = n.n(i),
    s = n(442837),
    o = n(285651),
    l = n(268350),
    u = n(453070),
    c = n(926491),
    d = n(594174),
    f = n(483360),
    _ = n(251625),
    h = n(606301),
    p = n(549058);
let m = (0, _.ad)(l.$p, p.J7),
    g = (e, t, n) => {
        let i = (0, u.fQ)(n),
            a = (0, s.e7)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = (0, h.wN)(e);
            if (t || null == e || '' === e || r.length > p.t7 || !i) return [];
            let s = [],
                l = [],
                u = (0, h.kT)(e),
                c = u === r[0] ? r : [u, ...r];
            f.ZP.queryStickers(c, !1).forEach((e) => {
                let { sticker: t } = e,
                    r = (0, o.cO)(t, a, n),
                    i = {
                        sticker: t,
                        sendability: r
                    };
                r === o.eb.SENDABLE ? s.push(i) : r === o.eb.SENDABLE_WITH_PREMIUM && l.push(i);
            });
            let d = [];
            return s.length > 0 && ((d = s.slice(0, p.qm)), 0 !== l.length && (d.length === p.qm && d.pop(), d.push(l[0]))), d;
        }, [e, n, i, t, a]);
    },
    E = (e) => {
        let { setTextInputValue: t, setHasDismissed: n, setHasSelection: i, setFocusedSuggestionType: s, delayBeforeSuggestions: o } = e,
            l = r.useRef(null),
            u = r.useRef(!1),
            d = r.useRef(!1),
            f = r.useMemo(() => a()(t, null != o ? o : p.gf), [t, o]);
        return {
            handleTextChange: async (e) => {
                var r;
                if (null == e || '' === e) f.cancel(), null == t || t(''), null == n || n(!1), null == i || i(!1), null == s || s(null), (l.current = null), (u.current = !1);
                else if (!u.current && e.trim() !== (null === (r = l.current) || void 0 === r ? void 0 : r.trim())) {
                    if (((l.current = e), (0, h.wN)(e).length > p.t7)) {
                        (u.current = !0), f.cancel(), t('');
                        return;
                    }
                    if (!0 === d.current) return;
                    !c.Z.hasLoadedStickerPacks && ((d.current = !0), await m(), (d.current = !1)), f(l.current);
                }
            },
            debouncedSetTextInputValue: f
        };
    };
