n.d(t, {
  ZP: function() {
    return Z
  }
}), n(47120), n(653041);
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  a = n(374470),
  r = n(925549),
  o = n(904245),
  c = n(45114),
  u = n(40851),
  d = n(607070),
  h = n(703656),
  m = n(479313),
  p = n(796974),
  E = n(709054),
  g = n(534469),
  f = n(173033),
  C = n(959517),
  _ = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: l,
    jumpTargetOffset: i
  } = e;
  if (e.has(l) || !e.hasMoreBefore && l === E.default.castChannelIdAsMessageId(e.channelId)) {
    if (0 === i) return l;
    let n = e.getByIndex(e.indexOf(l) + i);
    return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : l
  }
  let s = [l, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(E.default.compare),
    a = s.indexOf(l),
    r = null !== (n = s[a + (Math.abs(i) > 0 ? i : 1)]) && void 0 !== n ? n : s[a - 1];
  return null != r ? r : null
}
let T = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class N {
  isReady() {
    return this.props.messages.ready
  }
  isLoading() {
    return this.loading || this.props.messages.loadingMore
  }
  isPinned() {
    return this.pinned
  }
  isJumping() {
    return this.jumping
  }
  isDragging() {
    return this.dragging
  }
  isInitialized() {
    return void 0 === this.initialScrollTop
  }
  isScrollLoadingDisabled() {
    return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
  }
  isActivelyScrolling() {
    return this.scrollCounter >= 5
  }
  getDocument() {
    var e, t;
    return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument
  }
  getElementFromMessageId(e) {
    let t = this.getDocument(),
      {
        channel: {
          id: n
        }
      } = this.props;
    return null == t ? null : (0, g.AP)(t, n, e)
  }
  isScrolledToBottom() {
    let {
      scrollTop: e,
      scrollHeight: t,
      offsetHeight: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
    return e >= t - n - C.kQ && !this.props.messages.hasMoreAfter
  }
  mergePropsAndUpdate(e) {
    this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
  }
  mergePropsAndUpdate_(e) {
    let t = this.props.messages,
      n = this.props.focusId;
    this.props = {
      ...e
    };
    let {
      offsetHeight: l,
      scrollHeight: i
    } = this.getScrollerState(), s = this.isHeightChange(l, i);
    if (this.offsetHeightCache = l, this.scrollHeightCache = i, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) {
        this.restoreScroll();
        return
      }
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = x(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) {
          null != n ? this.scrollToMessage(n, !0) : this.jumping = !1;
          return
        }
      } else {
        let l;
        let i = t.first();
        null != i && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (l = E.default.extractTimestamp(i.id)), this.scrollToMessage(n, !0, l);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
      return
    }
    let a = e.messages.last(),
      r = t.last();
    if (null != a && a.state === _.yb.SENDING && (null == r ? void 0 : r.id) !== a.id) {
      this.setScrollToBottom();
      return
    }
    let {
      focusId: o
    } = this.props;
    if (null != o && n !== o) {
      let e = this.getElementFromMessageId(o);
      if (null != e) {
        var c;
        null === (c = this.ref.current) || void 0 === c || c.scrollIntoViewNode({
          node: e,
          padding: C.kQ,
          callback: this.handleScroll
        });
        return
      }
    }
    s && this.fixScrollPosition(l, i)
  }
  getAnchorData(e, t, n) {
    var l;
    let i = this.getElementFromMessageId(e),
      s = null === (l = this.ref.current) || void 0 === l ? void 0 : l.getScrollerNode();
    if (!(0, a.k)(i) || null == s) return null;
    let {
      offsetHeight: r
    } = i, o = (0, f.Z)(i, s), c = o - t;
    return null != n && (c = Math.max(-r, Math.min(n, c))), {
      id: e,
      offsetFromTop: c,
      offsetTop: o,
      offsetHeight: r,
      clamped: null != c
    }
  }
  cleanAutomaticAnchor() {
    this.setAutomaticAnchor(null)
  }
  newMessageBarBuffer() {
    return this.props.channel.isForumPost() ? C.R4 : C.Eo
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, l = this.getScrollerState(), {
      scrollTop: i
    } = l, s = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, a = null, r = t => {
      var l;
      return -1 === t ? E.default.castChannelIdAsMessageId(n.id) : null === (l = e._array[t]) || void 0 === l ? void 0 : l.id
    }, o = -1, c = !1;
    for (;;) {
      let t = r(o);
      if (null == t) break;
      let n = this.getAnchorData(t, i);
      if (this._bottomAnchor = n, c && null != n && n.offsetTop > i + s + l.offsetHeight) break;
      if (c) {
        o++;
        continue
      }
      null != n && (n.offsetTop >= i + s || o === e.length - 1) && (a = n, c = !0), o++
    }
    return a
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), l = e ? -1 : 1, i = null, s = t._array.length - 1;
    for (let a = e ? s : 0; null != t._array[a]; a += l) {
      let e = t._array[a],
        l = this.getAnchorData(e.id, n);
      if (null != l) {
        i = l;
        break
      }
    }
    return i
  }
  getAnchorFixData() {
    for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
      if (null == e) continue;
      let t = this.getElementFromMessageId(e.id);
      if (!(0, a.k)(t)) continue;
      let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
      return {
        node: t,
        fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
      }
    }
    return null
  }
  fixAnchorScrollPosition() {
    let e = this.getAnchorFixData();
    if (null == e) {
      this.handleScroll();
      return
    }
    let {
      node: t,
      fixedScrollTop: n
    } = e;
    if (null != this.focusAnchor) {
      var l;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (l = this.ref.current) || void 0 === l || l.scrollIntoViewNode({
        node: t,
        padding: C.kQ,
        callback: this.handleScroll
      })
    } else this.mergeTo(n, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let l = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var l;
    let i = null === (l = this.ref.current) || void 0 === l ? void 0 : l.getScrollerNode();
    null != this.messageFetchAnchor && null != i && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : void 0))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      l = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
    if (null == this.automaticAnchor || null == l) return;
    let i = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != i && null != this.automaticAnchor && (i.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(i)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id)
  }
  getScrollerState() {
    var e, t;
    return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : T
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      messages: i,
      placeholderHeight: s
    } = this.props;
    return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - s ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      messages: i
    } = this.props;
    return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n ? 1 : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      prevScrollTop: i,
      props: {
        placeholderHeight: s
      }
    } = this;
    if (this.prevScrollTop = t, null == i) return;
    let a = this.isInPlaceholderRegion(e),
      r = t - i;
    0 !== a && (1 === a && t + r <= 0 ? (this.mergeTo(s - n), this.prevScrollTop = s - n) : 2 === a && t + r >= l - n && (this.mergeTo(l - s), this.prevScrollTop = l - s))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
      (0, c.CZ)(this.props.channel.id, this.props.windowId)
    }))
  }
  fixScrollPosition(e, t) {
    this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition()
  }
  fixJumpTarget() {
    if (!this.isJumping()) return;
    let {
      messages: e,
      hasUnreads: t
    } = this.props;
    if (null != e.jumpTargetId) {
      let n = x(e);
      if (null == n) return;
      let l = this.getElementFromMessageId(n);
      (0, a.k)(l) ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : C.kQ), !0): this.scrollToNewMessages(!0, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      l = arguments.length > 2 ? arguments[2] : void 0,
      i = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(C.j1),
      s = () => {
        this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != l && l(), this.handleScroll()
      };
    this.pinned = !1, this.jumping = t, null != i ? this.scrollTo(this.getOffsetOrientationFromNode(i, n, this.newMessageBarBuffer()), t, s) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, s)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
    if (null == i) return 0;
    let s = this.getScrollerState(),
      a = (0, f.Z)(e, i);
    return "middle" === t ? Math.min(a - .5 * s.offsetHeight + .5 * e.offsetHeight + -8, a - l) : a - l
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = void 0;
    let t = x(this.props.messages);
    null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== _.d4z.GUILD_VOICE && this.props.channel.type !== _.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      l = arguments.length > 2 ? arguments[2] : void 0;
    null === (t = this.ref.current) || void 0 === t || t.scrollTo({
      to: e,
      animate: !d.Z.useReducedMotion && n,
      callback: l
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  mergeTo(e, t) {
    var n;
    null === (n = this.ref.current) || void 0 === n || n.mergeTo({
      to: e,
      callback: t
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  setScrollToBottom() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        messages: t,
        channel: n
      } = this.props;
    if (t.hasMoreAfter) {
      var l, i;
      l = n, o.Z.jumpToPresent(l.id, _.AQB), (0, h.XU)(null !== (i = l.getGuildId()) && void 0 !== i ? i : _.ME, l.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
      this.jumping = !1, this.handleScroll()
    })
  }
  updateStoreDimensions(e) {
    if (this.isJumping() || !this.isInitialized()) return;
    let {
      channel: t
    } = this.props;
    if (this.isPinned()) r.Z.clearChannelDimensions(t.id, e);
    else {
      let {
        placeholderHeight: n
      } = this.props, {
        scrollTop: l,
        scrollHeight: i,
        offsetHeight: s
      } = this.getScrollerState();
      r.Z.updateChannelDimensions(t.id, l - n, i - n, s, e)
    }
  }
  scrollIntoViewRect() {}
  scrollPageUp() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({
      animate: t
    })
  }
  scrollPageDown() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({
      animate: t
    })
  }
  scrollToMessage(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == this.ref.current) return;
    if (e === this.props.channel.id) {
      this.scrollTo(0);
      return
    }
    let l = this.getElementFromMessageId(e);
    !this.isJumping() && t && null != n && !d.Z.useReducedMotion && (E.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = !1, this.jumping = !0;
    let i = () => {
      this.jumping = !1, (0, a.k)(l) && d.Z.keyboardModeEnabled && l.focus({
        preventScroll: !0
      }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, a.k)(l) ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : C.kQ), t, i): this.scrollToNewMessages(t, "middle", i)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: l
    } = t, {
      messages: i,
      hasUnreads: s,
      placeholderHeight: a
    } = this.props;
    if ("top" === e) return i.hasMoreBefore ? s ? a - C.D4 - 2 : a + 500 : 0;
    return i.hasMoreAfter ? n - l - a - 500 : n - l
  }
  getOffsetToPreventLoading(e) {
    let {
      messages: t
    } = this.props, n = 0;
    return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
  }
  getSnapshotBeforeUpdate(e) {
    if (this.hasAnchor() || null != e) {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: l
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t)
    }
  }
  addAutomaticAnchorCallback(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = s().uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor())
  }
  removeAutomaticAnchorCallback(e) {
    this._automaticAnchorCallbacks = s().without(this._automaticAnchorCallbacks, e)
  }
  addScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = s().uniq(this._scrollCompleteCallbacks)
  }
  removeScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks = s().without(this._scrollCompleteCallbacks, e)
  }
  cleanup() {
    this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n = this;
    I(this, "props", void 0), I(this, "ref", l.createRef()), I(this, "automaticAnchor", null), I(this, "messageFetchAnchor", null), I(this, "focusAnchor", null), I(this, "loading", void 0), I(this, "jumping", !1), I(this, "pinned", void 0), I(this, "dragging", !1), I(this, "isAtBottom", !1), I(this, "prevScrollTop", null), I(this, "anchorTimeout", null), I(this, "initialScrollTop", null), I(this, "acking", !1), I(this, "scrollCounter", 0), I(this, "offsetHeightCache", 0), I(this, "scrollHeightCache", 0), I(this, "scrollTopCache", -1), I(this, "_bottomAnchor", null), I(this, "_automaticAnchorCallbacks", []), I(this, "_scrollCompleteCallbacks", []), I(this, "updateVisibleMessagesDebounced", s().debounce(m.JR, 300)), I(this, "handleScroll", e => {
      var t;
      if (!this.isInitialized()) return;
      let n = this.getScrollerState(),
        l = this.isScrolledToBottom(n);
      if (l !== this.isAtBottom && (l ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
      else {
        if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
        this.scrollTopCache !== n.scrollTop && (this.pinned = l, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
          this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
          let {
            scrollHeight: e,
            offsetHeight: t
          } = this.getScrollerState();
          this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()))
        }, 35))
      }
      if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
      let i = this.isInScrollTriggerLoadingRegion(n);
      1 === i ? this.loadMore() : 2 === i ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
    }), I(this, "handleResize", (e, t) => {
      let {
        offsetHeightCache: n,
        scrollHeightCache: l
      } = this;
      "container" === t ? n = e.contentRect.height : "content" === t && (l = e.contentRect.height), this.isHeightChange(n, l) && this.fixScrollPosition(n, l)
    }), I(this, "handleMouseDown", e => {
      e.target === e.currentTarget && (this.dragging = !0)
    }), I(this, "handleMouseUp", () => {
      this.dragging = !1, this.handleScroll()
    }), I(this, "loadMore", function() {
      let e, t, l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          messages: i
        } = n.props;
      if (l) {
        let e = i.last();
        null != e && (t = e.id)
      } else {
        let t = i.first();
        null != t && (e = t.id)
      }
      n.messageFetchAnchor = n.findFetchAnchor(l), n.loading = !0, o.Z.fetchMessages({
        channelId: n.props.channel.id,
        before: e,
        after: t,
        limit: _.AQB,
        truncate: !0
      })
    }), I(this, "updateStoreDimensionsDebounced", s().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore;
    let i = p.Z.getChannelDimensions(e.channel.id);
    null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == i ? void 0 : i.scrollTop) && void 0 !== t ? t : null, this.pinned = null == i)
  }
}

function Z(e) {
  let {
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: s,
    focusId: a,
    placeholderHeight: r,
    canLoadMore: o = !0,
    handleScrollToBottom: c,
    handleScrollFromBottom: d
  } = e, {
    windowId: h
  } = l.useContext(u.ZP), [m] = l.useState(() => new N({
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: s,
    focusId: a,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: h,
    handleScrollToBottom: c,
    handleScrollFromBottom: d
  }));
  return m.getSnapshotBeforeUpdate(a), l.useLayoutEffect(() => m.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: s,
    focusId: a,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: h,
    handleScrollToBottom: c,
    handleScrollFromBottom: d
  })), l.useLayoutEffect(() => () => m.cleanup(), [m]), m
}