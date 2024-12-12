var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(442837),
    d = r(481060),
    f = r(595519),
    _ = r(317381),
    h = r(588468),
    p = r(30465),
    m = r(313201),
    g = r(314910),
    E = r(549006),
    v = r(430824),
    I = r(436896),
    T = r(590921),
    b = r(606992),
    y = r(51062),
    S = r(918559),
    A = r(144685);
let N = 490,
    C = 490,
    R = 245,
    O = 200,
    D = 175;
n.Z = s.forwardRef(function (e, n) {
    var r, i, o, L, x;
    let { channel: w, type: P, editorHeight: M, onVisibilityChange: k } = e,
        U = (0, m.Dt)(),
        B = (0, c.e7)(
            [v.Z],
            () => {
                var e;
                return null !== (e = v.Z.getGuild(w.guild_id)) && void 0 !== e ? e : null;
            },
            [w.guild_id]
        ),
        G = s.useRef(),
        [Z, F, V] = (0, y.Z)(
            {
                ...e,
                guild: B
            },
            n,
            G
        ),
        j = (null === (r = P.autocomplete) || void 0 === r ? void 0 : r.forceChatLayer) ? E.ZP : g.ZP,
        H = (0, h.DJ)(Z.selectedIndex);
    (0, p.KR)(U, Z.isVisible, H), I.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: Y } = I.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        W = (0, b.Z)({
            editorHeight: M,
            type: P,
            state: Z,
            isInPopoutExperiment: Y
        }),
        K = (0, c.e7)(
            [_.ZP],
            () => {
                let e = _.ZP.getSelfEmbeddedActivityForChannel(w.id),
                    n = _.ZP.getActivityPanelMode();
                return (0, f.l5)(w) && null != e && e.channelId === w.id && n === S.Ez.PANEL;
            },
            [w]
        ),
        z = s.useMemo(() => (null == W ? '' : String(Date.now())), [null == W ? void 0 : W.top, null == W ? void 0 : W.left, null == W ? void 0 : W.bottom, null == W ? void 0 : W.right]);
    if (
        (s.useEffect(() => {
            k(Z.isVisible);
        }, [k, Z.isVisible]),
        !Z.isVisible || null == Z.query || void 0 === W)
    )
        return null;
    let q =
        null !==
            (i = Z.query.typeInfo.renderResults({
                results: Z.query.results,
                selectedIndex: Z.selectedIndex,
                channel: w,
                guild: B,
                query: Z.query.queryText,
                options: Z.query.options,
                onHover: (e) => F.onResultHover(e),
                onClick: (e) => F.onResultClick(e)
            })) && void 0 !== i
            ? i
            : null;
    if (null == q) return null;
    let Q = {
            [A.autocompleteAttached]: null == W,
            [A.autocompletePopout]: null != W,
            [A.bottom]: null == W && 'bottom' === e.position,
            [A.autocompleteTop]: K
        },
        X = N;
    null != W && (X = (null === (o = P.autocomplete) || void 0 === o ? void 0 : o.small) ? O : (null === (L = Z.query) || void 0 === L ? void 0 : L.type) === T.eq.EMOJIS_AND_STICKERS ? C : R), (X = Math.min(window.innerHeight - D, X));
    let J = (0, a.jsx)(h.ZP, {
        id: U,
        className: l()(A.autocomplete, Q),
        innerClassName: A.autocompleteInner,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsx)(u.bG, {
            navigator: V,
            children: (0, a.jsx)(u.SJ, {
                children: (e) => {
                    let { ref: n, ...r } = e;
                    return (0, a.jsx)(d.AdvancedScrollerThin, {
                        id: U,
                        ref: (e) => {
                            var r;
                            (n.current = null !== (r = null == e ? void 0 : e.getScrollerNode()) && void 0 !== r ? r : null), (G.current = e);
                        },
                        ...r,
                        className: A.scroller,
                        style: { maxHeight: X },
                        role: 'listbox',
                        'aria-labelledby': (0, h.rp)(U),
                        children: q
                    });
                }
            })
        })
    });
    return null != W
        ? (0, a.jsx)(j, {
              children: (0, a.jsx)(d.ReferencePositionLayer, {
                  targetRef: e.targetRef,
                  overrideTargetRect: W,
                  positionKey: z,
                  position: null !== (x = e.position) && void 0 !== x ? x : 'top',
                  align: 'left',
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => J
              })
          })
        : J;
});
