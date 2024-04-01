"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
}), t("47120");
var r = t("735250"),
  l = t("470079"),
  o = t("846519"),
  a = t("481060"),
  u = t("903958"),
  i = t("776980"),
  s = t("641826"),
  c = t("89509"),
  d = t("232700"),
  m = t("362895");
let p = t("991740"),
  f = t("588687"),
  x = t("500302");

function v(e) {
  let {
    onClose: n,
    transitionState: t
  } = e, [v, b] = l.useState(!1), [g, S] = l.useState(!1), [E, h] = l.useState(null), [k, I] = l.useState(!1), [C, A] = l.useState(d.BoxAnimationScenes.ENTRY), N = l.useMemo(() => (0, d.getLootboxes)(), []), T = null != E ? N[E.openedItem] : null, B = l.useRef(null), D = l.useRef(null), w = l.useRef(null), j = l.useRef(null), y = (0, c.default)(D.current, 0), L = t === a.ModalTransitionState.EXITING || t === a.ModalTransitionState.EXITED, O = l.useCallback(() => {
    let e = C === d.BoxAnimationScenes.IDLE ? B.current : w.current;
    if (null == e) return 0;
    let n = C === d.BoxAnimationScenes.IDLE ? .3 : .9,
      t = e.duration * n,
      r = e.duration - t;
    return Math.min(1, Math.max(0, (C === d.BoxAnimationScenes.IDLE ? e.currentTime - t : e.currentTime) / r))
  }, [C]), P = l.useCallback(async () => {
    var e;
    S(!0);
    let n = await (0, i.openLootbox)(),
      t = null != n ? N[n.openedItem] : null,
      r = document.getElementsByClassName("lootbox-animation-item-image")[0],
      l = null == r ? void 0 : r.children[0];
    null == l || l.setAttribute("href", null !== (e = null == t ? void 0 : t.image) && void 0 !== e ? e : ""), h(n), A(d.BoxAnimationScenes.OPEN)
  }, [N]), R = l.useCallback(e => {
    var n, t, r;
    switch (e) {
      case d.BoxAnimationScenes.ENTRY:
        null === (n = B.current) || void 0 === n || n.play(), A(d.BoxAnimationScenes.IDLE);
        break;
      case d.BoxAnimationScenes.OPEN:
        null === (t = w.current) || void 0 === t || t.play(), y(0, {
          getPercent: O
        }), A(d.BoxAnimationScenes.OPENED);
        break;
      case d.BoxAnimationScenes.OPENED:
        if (null != j.current && !v) {
          let e = (null == E ? void 0 : E.openedItem) != null ? N[E.openedItem] : null;
          j.current.src = null !== (r = null == e ? void 0 : e.sound) && void 0 !== r ? r : "", j.current.play()
        }
        b(!0), S(!1)
    }
  }, [y, O, v, null == E ? void 0 : E.openedItem, N]), M = l.useCallback((e, t) => {
    e === d.BoxAnimationScenes.OPENED && t.currentTime >= t.totalTime - 1 && (I(!0), n(), null != E && (0, i.reportFinishedOpeningLootbox)(E.userLootboxData, E.openedItem))
  }, [n, E]);
  return l.useEffect(() => {
    let e = new o.Interval;
    return e.start(50, () => {
      if (null == B.current || null == D.current) return;
      let n = B.current.currentTime / B.current.duration;
      D.current.paused && n >= .3 && (y(1, {
        getPercent: O
      }), D.current.play(), e.stop())
    }), () => e.stop()
  }, [O, y]), (0, r.jsx)("div", {
    className: L ? m.backdropClosing : m.backdrop,
    children: (0, r.jsxs)("div", {
      className: L ? m.wrapperClosing : m.wrapper,
      children: [(0, r.jsx)(a.Heading, {
        className: v ? m.openedItemTextOpened : m.openedItemTextUnopened,
        variant: "heading-lg/normal",
        color: "always-white",
        children: null == T ? void 0 : T.receivedCopy.format({
          item: null == T ? void 0 : T.name
        })
      }), (0, r.jsx)(a.Clickable, {
        className: g || v ? m.animationClickableOpening : m.animationClickableWaiting,
        onClick: g || v ? void 0 : P,
        children: (0, r.jsx)(u.default, {
          className: m.animation,
          importData: s.importLootboxAnimationData,
          nextScene: C,
          sceneSegments: d.BoxAnimationSceneSegments,
          onScenePlay: R,
          onEnterFrame: M,
          pause: k
        })
      }), (0, r.jsx)("audio", {
        ref: B,
        src: p,
        preload: "auto"
      }), (0, r.jsx)("audio", {
        ref: D,
        src: f,
        preload: "auto",
        loop: !0
      }), (0, r.jsx)("audio", {
        ref: w,
        src: x,
        preload: "auto"
      }), (0, r.jsx)("audio", {
        ref: j
      })]
    })
  })
}