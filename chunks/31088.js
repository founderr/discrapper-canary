"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
}), t("47120");
var r = t("735250"),
  u = t("470079"),
  l = t("846519"),
  o = t("481060"),
  a = t("903958"),
  i = t("776980"),
  c = t("641826"),
  s = t("89509"),
  d = t("232700"),
  m = t("362895");
let p = t("991740"),
  f = t("588687"),
  x = t("500302");

function v(e) {
  let {
    onClose: n,
    transitionState: t
  } = e, [v, b] = u.useState(!1), [g, S] = u.useState(!1), [E, h] = u.useState(null), k = u.useRef(null), [I, C] = u.useState(!1), [A, N] = u.useState(d.BoxAnimationScenes.ENTRY), T = u.useMemo(() => (0, d.getLootboxes)(), []), B = null != E ? T[E.openedItem] : null, D = u.useRef(null), R = u.useRef(null), w = u.useRef(null), y = u.useRef(null), L = u.useRef(null);
  (0, o.useFocusLock)(L);
  let j = (0, s.default)(R.current, 0),
    O = t === o.ModalTransitionState.EXITING || t === o.ModalTransitionState.EXITED,
    P = u.useCallback(() => {
      let e = A === d.BoxAnimationScenes.IDLE ? D.current : w.current;
      if (null == e) return 0;
      let n = A === d.BoxAnimationScenes.IDLE ? .3 : .9,
        t = e.duration * n,
        r = e.duration - t;
      return Math.min(1, Math.max(0, (A === d.BoxAnimationScenes.IDLE ? e.currentTime - t : e.currentTime) / r))
    }, [A]),
    M = u.useCallback(async () => {
      S(!0);
      try {
        var e;
        let n = await (0, i.openLootbox)(),
          t = null != n ? T[n.openedItem] : null,
          r = document.getElementsByClassName("lootbox-animation-item-image")[0],
          u = null == r ? void 0 : r.children[0];
        null == u || u.setAttribute("href", null !== (e = null == t ? void 0 : t.image) && void 0 !== e ? e : ""), h(n), k.current = n, N(d.BoxAnimationScenes.OPEN)
      } catch (e) {
        S(!1)
      }
    }, [T]),
    F = u.useCallback(e => {
      var n, t, r;
      switch (e) {
        case d.BoxAnimationScenes.ENTRY:
          null === (n = D.current) || void 0 === n || n.play(), N(d.BoxAnimationScenes.IDLE);
          break;
        case d.BoxAnimationScenes.OPEN:
          null === (t = w.current) || void 0 === t || t.play(), j(0, {
            getPercent: P
          }), N(d.BoxAnimationScenes.OPENED);
          break;
        case d.BoxAnimationScenes.OPENED:
          if (null != y.current && !v) {
            let e = (null == E ? void 0 : E.openedItem) != null ? T[E.openedItem] : null;
            y.current.src = null !== (r = null == e ? void 0 : e.sound) && void 0 !== r ? r : "", y.current.play()
          }
          b(!0), S(!1)
      }
    }, [j, P, v, null == E ? void 0 : E.openedItem, T]),
    X = u.useCallback((e, t) => {
      e === d.BoxAnimationScenes.OPENED && t.currentTime >= t.totalTime - 1 && (C(!0), n())
    }, [n]);
  return u.useEffect(() => {
    let e = new l.Interval;
    return e.start(50, () => {
      if (null == D.current || null == R.current) return;
      let n = D.current.currentTime / D.current.duration;
      R.current.paused && n >= .3 && (j(1, {
        getPercent: P
      }), R.current.play(), e.stop())
    }), () => e.stop()
  }, [P, j]), u.useEffect(() => () => {
    null != k.current && (0, i.reportFinishedOpeningLootbox)(k.current.userLootboxData, k.current.openedItem)
  }, []), (0, r.jsx)("div", {
    ref: L,
    className: O ? m.backdropClosing : m.backdrop,
    children: (0, r.jsxs)("div", {
      className: O ? m.wrapperClosing : m.wrapper,
      children: [(0, r.jsx)(o.Heading, {
        className: v ? m.openedItemTextOpened : m.openedItemTextUnopened,
        variant: "heading-lg/normal",
        color: "always-white",
        children: null == B ? void 0 : B.receivedCopy.format({
          item: null == B ? void 0 : B.name
        })
      }), (0, r.jsx)(o.Clickable, {
        className: g || v ? m.animationClickableOpening : m.animationClickableWaiting,
        onClick: g || v ? void 0 : M,
        children: (0, r.jsx)(a.default, {
          className: m.animation,
          importData: c.importLootboxAnimationData,
          ignoreReducedMotion: !0,
          nextScene: A,
          sceneSegments: d.BoxAnimationSceneSegments,
          onScenePlay: F,
          onEnterFrame: X,
          pause: I
        })
      }), (0, r.jsx)("audio", {
        ref: D,
        src: p,
        preload: "auto"
      }), (0, r.jsx)("audio", {
        ref: R,
        src: f,
        preload: "auto",
        loop: !0
      }), (0, r.jsx)("audio", {
        ref: w,
        src: x,
        preload: "auto"
      }), (0, r.jsx)("audio", {
        ref: y
      })]
    })
  })
}