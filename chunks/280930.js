n.d(t, {
    Z: function () {
        return T;
    },
    m: function () {
        return g;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(954955),
    s = n.n(o),
    l = n(442837),
    u = n(285651),
    c = n(268350),
    d = n(453070),
    _ = n(926491),
    E = n(594174),
    f = n(483360),
    h = n(251625),
    p = n(606301),
    m = n(549058);
let I = (0, h.ad)(c.$p, m.J7),
    T = (e, t, n) => {
        let r = (0, d.fQ)(n),
            i = (0, l.e7)([E.default], () => E.default.getCurrentUser());
        return a.useMemo(() => {
            let a = (0, p.wN)(e);
            if (t || null == e || '' === e || a.length > m.t7 || !r) return [];
            let o = [],
                s = [],
                l = (0, p.kT)(e),
                c = l === a[0] ? a : [l, ...a];
            f.ZP.queryStickers(c, !1).forEach((e) => {
                let { sticker: t } = e,
                    r = (0, u.cO)(t, i, n),
                    a = {
                        sticker: t,
                        sendability: r
                    };
                r === u.eb.SENDABLE ? o.push(a) : r === u.eb.SENDABLE_WITH_PREMIUM && s.push(a);
            });
            let d = [];
            return o.length > 0 && ((d = o.slice(0, m.qm)), 0 !== s.length && (d.length === m.qm && d.pop(), d.push(s[0]))), d;
        }, [e, n, r, t, i]);
    },
    g = (e) => {
        let { setTextInputValue: t, setHasDismissed: n, setHasSelection: r, setFocusedSuggestionType: i, delayBeforeSuggestions: o } = e,
            l = a.useRef(null),
            u = a.useRef(!1),
            c = a.useRef(!1),
            d = a.useMemo(() => s()(t, null != o ? o : m.gf), [t, o]);
        return {
            handleTextChange: async (e) => {
                var a;
                if (null == e || '' === e) d.cancel(), null == t || t(''), null == n || n(!1), null == r || r(!1), null == i || i(null), (l.current = null), (u.current = !1);
                else if (!u.current && e.trim() !== (null === (a = l.current) || void 0 === a ? void 0 : a.trim())) {
                    if (((l.current = e), (0, p.wN)(e).length > m.t7)) {
                        (u.current = !0), d.cancel(), t('');
                        return;
                    }
                    if (!0 === c.current) return;
                    !_.Z.hasLoadedStickerPacks && ((c.current = !0), await I(), (c.current = !1)), d(l.current);
                }
            },
            debouncedSetTextInputValue: d
        };
    };
