n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(595519),
    d = n(317381),
    f = n(588468),
    _ = n(30465),
    p = n(313201),
    h = n(314910),
    m = n(549006),
    g = n(430824),
    E = n(436896),
    v = n(590921),
    I = n(606992),
    b = n(51062),
    T = n(918559),
    S = n(144685);
t.Z = i.forwardRef(function (e, t) {
    var n, a, y, A, N;
    let { channel: C, type: R, editorHeight: O, onVisibilityChange: D } = e,
        L = (0, p.Dt)(),
        x = (0, l.e7)(
            [g.Z],
            () => {
                var e;
                return null !== (e = g.Z.getGuild(C.guild_id)) && void 0 !== e ? e : null;
            },
            [C.guild_id]
        ),
        w = i.useRef(),
        [M, P, k] = (0, b.Z)(
            {
                ...e,
                guild: x
            },
            t,
            w
        ),
        U = (null === (n = R.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? m.ZP : h.ZP,
        B = (0, f.DJ)(M.selectedIndex);
    (0, _.KR)(L, M.isVisible, B), E.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: G } = E.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        Z = (0, I.Z)({
            editorHeight: O,
            type: R,
            state: M,
            isInPopoutExperiment: G
        }),
        F = (0, l.e7)(
            [d.ZP],
            () => {
                let e = d.ZP.getSelfEmbeddedActivityForChannel(C.id),
                    t = d.ZP.getActivityPanelMode();
                return (0, c.l5)(C) && null != e && e.channelId === C.id && t === T.Ez.PANEL;
            },
            [C]
        ),
        V = i.useMemo(() => (null == Z ? '' : String(Date.now())), [null == Z ? void 0 : Z.top, null == Z ? void 0 : Z.left, null == Z ? void 0 : Z.bottom, null == Z ? void 0 : Z.right]);
    if (
        (i.useEffect(() => {
            D(M.isVisible);
        }, [D, M.isVisible]),
        !M.isVisible || null == M.query || void 0 === Z)
    )
        return null;
    let j =
        null !==
            (a = M.query.typeInfo.renderResults({
                results: M.query.results,
                selectedIndex: M.selectedIndex,
                channel: C,
                guild: x,
                query: M.query.queryText,
                options: M.query.options,
                onHover: (e) => P.onResultHover(e),
                onClick: (e) => P.onResultClick(e)
            })) && void 0 !== a
            ? a
            : null;
    if (null == j) return null;
    let H = {
            [S.autocompleteAttached]: null == Z,
            [S.autocompletePopout]: null != Z,
            [S.bottom]: null == Z && 'bottom' === e.position,
            [S.autocompleteTop]: F
        },
        Y = 490;
    null != Z && (Y = (null === (y = R.autocomplete) || void 0 === y ? void 0 : y.small) ? 200 : (null === (A = M.query) || void 0 === A ? void 0 : A.type) === v.eq.EMOJIS_AND_STICKERS ? 490 : 245), (Y = Math.min(window.innerHeight - 175, Y));
    let W = (0, r.jsx)(f.ZP, {
        id: L,
        className: s()(S.autocomplete, H),
        innerClassName: S.autocompleteInner,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, r.jsx)(o.bG, {
            navigator: k,
            children: (0, r.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, r.jsx)(u.AdvancedScrollerThin, {
                        id: L,
                        ref: (e) => {
                            var n;
                            (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null), (w.current = e);
                        },
                        ...n,
                        className: S.scroller,
                        style: { maxHeight: Y },
                        role: 'listbox',
                        'aria-labelledby': (0, f.rp)(L),
                        children: j
                    });
                }
            })
        })
    });
    return null != Z
        ? (0, r.jsx)(U, {
              children: (0, r.jsx)(u.ReferencePositionLayer, {
                  targetRef: e.targetRef,
                  overrideTargetRect: Z,
                  positionKey: V,
                  position: null !== (N = e.position) && void 0 !== N ? N : 'top',
                  align: 'left',
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => W
              })
          })
        : W;
});
