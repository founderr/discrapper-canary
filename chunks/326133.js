"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("924826"),
  l = n("442837"),
  u = n("481060"),
  d = n("867176"),
  _ = n("317381"),
  c = n("30465"),
  E = n("430824"),
  I = n("156361"),
  T = n("153124"),
  f = n("153850"),
  S = n("482207"),
  h = n("436896"),
  A = n("590921"),
  m = n("606992"),
  N = n("51062"),
  p = n("918559"),
  O = n("583901");
t.default = r.forwardRef(function(e, t) {
  var n, s, C, R, g;
  let {
    channel: L,
    type: v,
    editorHeight: D,
    onVisibilityChange: M
  } = e, y = (0, T.useUID)(), P = (0, l.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = E.default.getGuild(L.guild_id)) && void 0 !== e ? e : null
  }, [L.guild_id]), U = r.useRef(), [b, G, w] = (0, N.default)({
    ...e,
    guild: P
  }, t, U), k = (null === (n = v.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? S.default : f.default, B = (0, I.getAutocompleteRowId)(b.selectedIndex);
  (0, c.useChannelEditorPopup)(y, b.isVisible, B), h.default.trackExposure({
    location: "6e9811_1"
  });
  let {
    usePopoutAutocomplete: x
  } = h.default.useExperiment({
    location: "6e9811_2"
  }, {
    autoTrackExposure: !1
  }), V = (0, m.useChannelAutocompleteLayerPosition)({
    editorHeight: D,
    type: v,
    state: b,
    isInPopoutExperiment: x
  }), F = (0, l.useStateFromStores)([_.default], () => {
    let e = _.default.getSelfEmbeddedActivityForChannel(L.id),
      t = _.default.getActivityPanelMode();
    return (0, d.isActivityInTextSupportedForChannel)(L) && null != e && e.channelId === L.id && t === p.ActivityPanelModes.PANEL
  }, [L]), H = r.useMemo(() => null == V ? "" : String(Date.now()), [null == V ? void 0 : V.top, null == V ? void 0 : V.left, null == V ? void 0 : V.bottom, null == V ? void 0 : V.right]);
  if (r.useEffect(() => {
      M(b.isVisible)
    }, [M, b.isVisible]), !b.isVisible || null == b.query || void 0 === V) return null;
  let Y = null !== (s = b.query.typeInfo.renderResults({
    results: b.query.results,
    selectedIndex: b.selectedIndex,
    channel: L,
    guild: P,
    query: b.query.queryText,
    options: b.query.options,
    onHover: e => G.onResultHover(e),
    onClick: e => G.onResultClick(e)
  })) && void 0 !== s ? s : null;
  if (null == Y) return null;
  let j = {
      [O.autocompleteAttached]: null == V,
      [O.autocompletePopout]: null != V,
      [O.bottom]: null == V && "bottom" === e.position,
      [O.autocompleteTop]: F
    },
    W = 490;
  null != V && (W = (null === (C = v.autocomplete) || void 0 === C ? void 0 : C.small) ? 200 : (null === (R = b.query) || void 0 === R ? void 0 : R.type) === A.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), W = Math.min(window.innerHeight - 175, W);
  let K = (0, i.jsx)(I.default, {
    id: y,
    className: a()(O.autocomplete, j),
    innerClassName: O.autocompleteInner,
    onMouseDown: e => e.preventDefault(),
    children: (0, i.jsx)(o.ListNavigatorProvider, {
      navigator: w,
      children: (0, i.jsx)(o.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...n
          } = e;
          return (0, i.jsx)(u.AdvancedScrollerThin, {
            id: y,
            ref: e => {
              var n;
              t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, U.current = e
            },
            ...n,
            className: O.scroller,
            style: {
              maxHeight: W
            },
            role: "listbox",
            "aria-labelledby": (0, I.getAutocompleteTitleId)(y),
            children: Y
          })
        }
      })
    })
  });
  return null != V ? (0, i.jsx)(k, {
    children: (0, i.jsx)(u.ReferencePositionLayer, {
      targetRef: e.targetRef,
      overrideTargetRect: V,
      positionKey: H,
      position: null !== (g = e.position) && void 0 !== g ? g : "top",
      align: "left",
      spacing: 8,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      children: () => K
    })
  }) : K
})