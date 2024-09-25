var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(91192),
    u = n(442837),
    c = n(481060),
    d = n(595519),
    _ = n(317381),
    E = n(588468),
    f = n(30465),
    h = n(313201),
    p = n(314910),
    m = n(549006),
    I = n(430824),
    T = n(436896),
    g = n(590921),
    S = n(606992),
    A = n(51062),
    v = n(918559),
    N = n(828021);
let O = 490,
    R = 490,
    C = 245,
    y = 200,
    b = 175;
t.Z = a.forwardRef(function (e, t) {
    var n, r, o, L, D;
    let { channel: M, type: P, editorHeight: U, onVisibilityChange: w } = e,
        x = (0, h.Dt)(),
        G = (0, u.e7)(
            [I.Z],
            () => {
                var e;
                return null !== (e = I.Z.getGuild(M.guild_id)) && void 0 !== e ? e : null;
            },
            [M.guild_id]
        ),
        k = a.useRef(),
        [B, F, Z] = (0, A.Z)(
            {
                ...e,
                guild: G
            },
            t,
            k
        ),
        V = (null === (n = P.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? m.ZP : p.ZP,
        H = (0, E.DJ)(B.selectedIndex);
    (0, f.KR)(x, B.isVisible, H), T.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: Y } = T.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        j = (0, S.Z)({
            editorHeight: U,
            type: P,
            state: B,
            isInPopoutExperiment: Y
        }),
        W = (0, u.e7)(
            [_.ZP],
            () => {
                let e = _.ZP.getSelfEmbeddedActivityForChannel(M.id),
                    t = _.ZP.getActivityPanelMode();
                return (0, d.l5)(M) && null != e && e.channelId === M.id && t === v.Ez.PANEL;
            },
            [M]
        ),
        K = a.useMemo(() => (null == j ? '' : String(Date.now())), [null == j ? void 0 : j.top, null == j ? void 0 : j.left, null == j ? void 0 : j.bottom, null == j ? void 0 : j.right]);
    if (
        (a.useEffect(() => {
            w(B.isVisible);
        }, [w, B.isVisible]),
        !B.isVisible || null == B.query || void 0 === j)
    )
        return null;
    let z =
        null !==
            (r = B.query.typeInfo.renderResults({
                results: B.query.results,
                selectedIndex: B.selectedIndex,
                channel: M,
                guild: G,
                query: B.query.queryText,
                options: B.query.options,
                onHover: (e) => F.onResultHover(e),
                onClick: (e) => F.onResultClick(e)
            })) && void 0 !== r
            ? r
            : null;
    if (null == z) return null;
    let q = {
            [N.autocompleteAttached]: null == j,
            [N.autocompletePopout]: null != j,
            [N.bottom]: null == j && 'bottom' === e.position,
            [N.autocompleteTop]: W
        },
        Q = O;
    null != j && (Q = (null === (o = P.autocomplete) || void 0 === o ? void 0 : o.small) ? y : (null === (L = B.query) || void 0 === L ? void 0 : L.type) === g.eq.EMOJIS_AND_STICKERS ? R : C), (Q = Math.min(window.innerHeight - b, Q));
    let X = (0, i.jsx)(E.ZP, {
        id: x,
        className: s()(N.autocomplete, q),
        innerClassName: N.autocompleteInner,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(l.bG, {
            navigator: Z,
            children: (0, i.jsx)(l.SJ, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, i.jsx)(c.AdvancedScrollerThin, {
                        id: x,
                        ref: (e) => {
                            var n;
                            (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null), (k.current = e);
                        },
                        ...n,
                        className: N.scroller,
                        style: { maxHeight: Q },
                        role: 'listbox',
                        'aria-labelledby': (0, E.rp)(x),
                        children: z
                    });
                }
            })
        })
    });
    return null != j
        ? (0, i.jsx)(V, {
              children: (0, i.jsx)(c.ReferencePositionLayer, {
                  targetRef: e.targetRef,
                  overrideTargetRect: j,
                  positionKey: K,
                  position: null !== (D = e.position) && void 0 !== D ? D : 'top',
                  align: 'left',
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => X
              })
          })
        : X;
});
