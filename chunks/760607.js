let r;
n.d(t, {
    UL: function () {
        return o;
    }
}),
    n(470079);
class i {
    copy() {
        let e = new i(this.type, this.key, this.rect.copy());
        return (e.estimatedSize = this.estimatedSize), (e.opacity = this.opacity), (e.transform = this.transform), (e.parentKey = this.parentKey), (e.isSticky = this.isSticky), (e.zIndex = this.zIndex), (e.allowOverflow = this.allowOverflow), e;
    }
    constructor(e, t, n) {
        (this.type = e), (this.key = t), (this.parentKey = null), (this.rect = n), (this.estimatedSize = !1), (this.isSticky = !1), (this.opacity = 1), (this.transform = null), (this.zIndex = 0), (this.allowOverflow = !1);
    }
}
class a {
    copy() {
        return new a(this.x, this.y);
    }
    equals(e) {
        return this.x === e.x && this.y === e.y;
    }
    isOrigin() {
        return 0 === this.x && 0 === this.y;
    }
    constructor(e = 0, t = 0) {
        (this.x = e), (this.y = t);
    }
}
class o {
    get maxX() {
        return this.x + this.width;
    }
    get maxY() {
        return this.y + this.height;
    }
    get area() {
        return this.width * this.height;
    }
    get topLeft() {
        return new a(this.x, this.y);
    }
    get topRight() {
        return new a(this.maxX, this.y);
    }
    get bottomLeft() {
        return new a(this.x, this.maxY);
    }
    get bottomRight() {
        return new a(this.maxX, this.maxY);
    }
    intersects(e) {
        return this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
    }
    containsRect(e) {
        return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
    }
    containsPoint(e) {
        return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
    }
    getCornerInRect(e) {
        for (let t of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']) if (e.containsPoint(this[t])) return t;
        return null;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
    }
    pointEquals(e) {
        return this.x === e.x && this.y === e.y;
    }
    sizeEquals(e) {
        return this.width === e.width && this.height === e.height;
    }
    union(e) {
        let t = Math.min(this.x, e.x),
            n = Math.min(this.y, e.y),
            r = Math.max(this.maxX, e.maxX) - t,
            i = Math.max(this.maxY, e.maxY) - n;
        return new o(t, n, r, i);
    }
    intersection(e) {
        if (!this.intersects(e)) return new o(0, 0, 0, 0);
        let t = Math.max(this.x, e.x),
            n = Math.max(this.y, e.y);
        return new o(t, n, Math.min(this.maxX, e.maxX) - t, Math.min(this.maxY, e.maxY) - n);
    }
    copy() {
        return new o(this.x, this.y, this.width, this.height);
    }
    constructor(e = 0, t = 0, n = 0, r = 0) {
        (this.x = e), (this.y = t), (this.width = n), (this.height = r);
    }
}
class s {
    copy() {
        return new s(this.width, this.height);
    }
    equals(e) {
        return this.width === e.width && this.height === e.height;
    }
    get area() {
        return this.width * this.height;
    }
    constructor(e = 0, t = 0) {
        (this.width = e), (this.height = t);
    }
}
let l = 0;
class u {
    prepareForReuse() {
        (this.content = null), (this.rendered = null), (this.layoutInfo = null);
    }
    constructor(e) {
        (this.virtualizer = e), (this.key = ++l);
    }
}
let c = 'undefined' != typeof window ? window.performance : null,
    d = c && (c.now || c.webkitNow || c.msNow || c.mozNow),
    _ = d
        ? d.bind(c)
        : function () {
              return Date.now ? Date.now() : new Date().getTime();
          };
function E(e, t, n, i, o) {
    let s,
        l = !1,
        u = new Promise((u) => {
            let c = _(),
                d = t.x - e.x,
                E = t.y - e.y;
            s = requestAnimationFrame(function f(h) {
                null == r && (r = h > 1000000000000 != _() > 1000000000000), r && (h = _());
                let p = h - c;
                p > n ? (o(t), u()) : !1 !== o(new a(e.x + d * i(p / n), e.y + E * i(p / n))) && !l && (s = requestAnimationFrame(f));
            });
        });
    return (
        (u.cancel = function () {
            (l = !0), cancelAnimationFrame(s);
        }),
        u
    );
}
function f(e) {
    return Math.sin((e * Math.PI) / 2);
}
function h(e, t) {
    let n = new Set();
    for (let r of e.keys()) !t.has(r) && n.add(r);
    return n;
}
function p(e, t) {
    let n = h(e, t),
        r = h(t, e),
        i = new Set();
    for (let n of e.keys()) t.has(n) && i.add(n);
    return {
        toRemove: n,
        toAdd: r,
        toUpdate: i
    };
}
function* m(...e) {
    for (let t of e) yield* t;
}
function I(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
class T {
    addSample(e) {
        this.count++, (this.value += (e - this.value) / this.count);
    }
    constructor() {
        (this.count = 0), (this.value = 0);
    }
}
class g {
    setVisibleRect(e) {
        let t = performance.now() - this.startTime;
        t < 500 && (this.averageTime.addSample(t), e.x !== this.visibleRect.x && t > 0 && (this.velocity.x = (e.x - this.visibleRect.x) / t), e.y !== this.visibleRect.y && t > 0 && (this.velocity.y = (e.y - this.visibleRect.y) / t)), (this.startTime = performance.now()), (this.visibleRect = e);
    }
    collectMetrics() {
        let e = performance.now() - this.startTime;
        if ((e < 500 && this.averagePerf.addSample(e), this.visibleRect.height > 0)) {
            let e = Math.abs(this.velocity.y * (this.averageTime.value + this.averagePerf.value));
            this.overscanY.addSample(e);
        }
        if (this.visibleRect.width > 0) {
            let e = Math.abs(this.velocity.x * (this.averageTime.value + this.averagePerf.value));
            this.overscanX.addSample(e);
        }
    }
    getOverscannedRect() {
        let e = this.visibleRect.copy(),
            t = 100 * Math.round(Math.min(2 * this.visibleRect.height, this.overscanY.value) / 100);
        this.velocity.y > 0 ? (e.y -= 0.2 * t) : (e.y -= t), (e.height += t + 0.2 * t);
        let n = 100 * Math.round(Math.min(2 * this.visibleRect.width, this.overscanX.value) / 100);
        return this.velocity.x > 0 ? (e.x -= 0.2 * n) : (e.x -= n), (e.width += n + 0.2 * n), e;
    }
    constructor() {
        (this.startTime = 0), (this.averagePerf = new T()), (this.averageTime = new T()), (this.velocity = new a(5, 5)), (this.overscanX = new T()), (this.overscanY = new T()), (this.visibleRect = new o());
    }
}
class S {
    constructor() {
        (this.level = 0), (this.actions = []), (this.animated = !0), (this.initialMap = new Map()), (this.finalMap = new Map()), (this.initialLayoutInfo = new Map()), (this.finalLayoutInfo = new Map()), (this.removed = new Map()), (this.toRemove = new Map());
    }
}
class A {
    _setContentSize(e) {
        (this._contentSize = e), this.delegate.setContentSize(e);
    }
    _setContentOffset(e) {
        let t = new o(e.x, e.y, this._visibleRect.width, this._visibleRect.height);
        this.delegate.setVisibleRect(t);
    }
    get contentSize() {
        return this._contentSize;
    }
    get visibleRect() {
        return this._visibleRect;
    }
    set visibleRect(e) {
        this._setVisibleRect(e);
    }
    _setVisibleRect(e, t = !1) {
        let n = this._visibleRect;
        if (e.equals(n)) return;
        this.shouldOverscan && this._overscanManager.setVisibleRect(e);
        let r = this.layout && this.layout.shouldInvalidate(e, this._visibleRect);
        this._resetAnimatedContentOffset(),
            (this._visibleRect = e),
            r
                ? this.relayoutNow({
                      offsetChanged: !e.pointEquals(n),
                      sizeChanged: !e.sizeEquals(n)
                  })
                : this.updateSubviews(t);
    }
    get collection() {
        return this._collection;
    }
    set collection(e) {
        this._setData(e);
    }
    _setData(e) {
        e !== this._collection &&
            (this._collection
                ? this._runTransaction(() => {
                      this._collection = e;
                  }, this.transitionDuration > 0)
                : ((this._collection = e), this.reloadData()));
    }
    reloadData() {
        this.relayout({ contentChanged: !0 });
    }
    getItem(e) {
        return this._collection ? this._collection.getItem(e) : null;
    }
    get persistedKeys() {
        return this._persistedKeys;
    }
    set persistedKeys(e) {
        !I(e, this._persistedKeys) && ((this._persistedKeys = e), this.updateSubviews());
    }
    isPersistedKey(e) {
        if (this._persistedKeys.has(e)) return !0;
        for (let t of this._persistedKeys)
            for (; null != t; ) {
                let n = this.layout.getLayoutInfo(t);
                if (!n) break;
                if ((t = n.parentKey) === e) return !0;
            }
        return !1;
    }
    get layout() {
        return this._layout;
    }
    set layout(e) {
        this.setLayout(e);
    }
    setLayout(e, t = !1) {
        if (e === this._layout) return;
        let n = () => {
            this._layout && (this._layout.virtualizer = null), (e.virtualizer = this), (this._layout = e);
        };
        t ? this._runTransaction(n) : (n(), this.relayout());
    }
    _getReuseType(e, t) {
        if ('item' === e.type && t) {
            let n = this.delegate.getType ? this.delegate.getType(t) : 'item',
                r = 'item' === n ? 'item' : e.type + '_' + n;
            return {
                type: n,
                reuseType: r
            };
        }
        return {
            type: e.type,
            reuseType: e.type
        };
    }
    getReusableView(e) {
        let t = this.getItem(e.key),
            { reuseType: n } = this._getReuseType(e, t);
        !this._reusableViews[n] && (this._reusableViews[n] = []);
        let r = this._reusableViews[n],
            i = r.length > 0 ? r.pop() : new u(this);
        return (i.viewType = n), !this._animatedContentOffset.isOrigin() && ((e = e.copy()), (e.rect.x += this._animatedContentOffset.x), (e.rect.y += this._animatedContentOffset.y)), (i.layoutInfo = e), this._renderView(i), i;
    }
    _renderView(e) {
        let { type: t, key: n } = e.layoutInfo;
        (e.content = this.getItem(n)), (e.rendered = this._renderContent(t, e.content));
    }
    _renderContent(e, t) {
        let n = this._renderedContent.get(t);
        if (null != n) return n;
        let r = this.delegate.renderView(e, t);
        return t && this._renderedContent.set(t, r), r;
    }
    get visibleViews() {
        return Array.from(this._visibleViews.values());
    }
    getView(e) {
        return this._visibleViews.get(e) || null;
    }
    getViewsOfType(e) {
        return this.visibleViews.filter((t) => t.layoutInfo && t.layoutInfo.type === e);
    }
    keyForView(e) {
        return e && e.layoutInfo ? e.layoutInfo.key : null;
    }
    keyAtPoint(e) {
        let t = new o(e.x, e.y, 1, 1);
        for (let e of this.layout.getVisibleLayoutInfos(t)) if (e.rect.intersects(t)) return e.key;
        return null;
    }
    willUnmount() {
        cancelAnimationFrame(this._relayoutRaf);
    }
    relayout(e = {}) {
        if (!this._scrollAnimation && 'undefined' != typeof requestAnimationFrame) {
            if (this._invalidationContext) {
                Object.assign(this._invalidationContext, e);
                return;
            }
            this._invalidationContext = e;
        }
    }
    relayoutNow(e = this._invalidationContext || {}) {
        if (
            (this._relayoutRaf &&
                (cancelAnimationFrame(this._relayoutRaf),
                (this._relayoutRaf = null),
                (e = {
                    ...this._invalidationContext,
                    ...e
                })),
            (this._invalidationContext = null),
            !this.layout || !this._collection || this._scrollAnimation)
        )
            return;
        let t = this._getScrollAnchor();
        'function' == typeof e.beforeLayout && e.beforeLayout(), this.layout.validate(e), this._setContentSize(this.layout.getContentSize()), 'function' == typeof e.afterLayout && e.afterLayout();
        let n = this.getVisibleRect(),
            r = this._restoreScrollAnchor(t, e),
            i = e.contentChanged ? 0 : r.x,
            o = e.contentChanged ? 0 : r.y;
        (i = Math.max(0, Math.min(this.contentSize.width - n.width, i))), (o = Math.max(0, Math.min(this.contentSize.height - n.height, o)));
        let s = !1;
        if ((i !== n.x || o !== n.y ? (e.animated || !this._animatedContentOffset.isOrigin() ? ((this._animatedContentOffset.x += n.x - i), (this._animatedContentOffset.y += n.y - o), (s = this.updateSubviews(e.contentChanged))) : this._setContentOffset(new a(i, o))) : (s = this.updateSubviews(e.contentChanged)), !(e.transaction && e.animated) && this._applyLayoutInfos(), e.animated && s)) {
            this._enableTransitions(),
                setTimeout(() => {
                    if ((this._disableTransitions(), !this._animatedContentOffset.isOrigin())) {
                        let { x: e, y: t } = this.getVisibleRect();
                        this._resetAnimatedContentOffset(), this._setContentOffset(new a(e, t));
                    }
                    'function' == typeof e.afterAnimation && e.afterAnimation();
                }, this.transitionDuration + 100);
            return;
        }
        'function' == typeof e.afterAnimation && e.afterAnimation();
    }
    _correctItemOrder() {
        if (!this._isScrolling && !this._transaction)
            for (let e of this._visibleLayoutInfos.keys()) {
                let t = this._visibleViews.get(e);
                this._children.delete(t), this._children.add(t);
            }
    }
    _enableTransitions() {
        this.delegate.beginAnimations();
    }
    _disableTransitions() {
        this.delegate.endAnimations();
    }
    _getScrollAnchor() {
        if (!this.anchorScrollPosition) return null;
        let e = this.getVisibleRect();
        if (this.delegate.getScrollAnchor) {
            let t = this.delegate.getScrollAnchor(e);
            if (null != t) {
                let n = this.layout.getLayoutInfo(t),
                    r = n.rect.getCornerInRect(e);
                if (r) {
                    let t = n.key,
                        i = n.rect[r].y - e.y;
                    return {
                        key: t,
                        layoutInfo: n,
                        corner: r,
                        offset: i
                    };
                }
            }
        }
        if (0 === e.y && !this.anchorScrollPositionAtTop) return null;
        let t = null;
        for (let [n, r] of this._visibleViews) {
            let i = r.layoutInfo;
            if (i && i.rect.area > 0) {
                let r = i.rect.getCornerInRect(e);
                if (r) {
                    let a = i.rect[r].y - e.y;
                    (!t || a < t.offset) &&
                        (t = {
                            key: n,
                            layoutInfo: i,
                            corner: r,
                            offset: a
                        });
                }
            }
        }
        return t;
    }
    _restoreScrollAnchor(e, t) {
        let n = this.getVisibleRect();
        if (e) {
            var r;
            let i = (null === (r = t.transaction) || void 0 === r ? void 0 : r.animated) ? t.transaction.finalMap.get(e.key) : this.layout.getLayoutInfo(e.layoutInfo.key);
            if (i) {
                let t = i.rect[e.corner].y - n.y - e.offset;
                n.y += t;
            }
        }
        return n;
    }
    getVisibleRect() {
        let e = this.visibleRect;
        return new o(e.x - this._animatedContentOffset.x, e.y - this._animatedContentOffset.y, e.width, e.height);
    }
    getVisibleLayoutInfos() {
        let e = this.shouldOverscan ? this._overscanManager.getOverscannedRect() : this.getVisibleRect();
        return (this._visibleLayoutInfos = this._getLayoutInfoMap(e)), this._visibleLayoutInfos;
    }
    _getLayoutInfoMap(e, t = !1) {
        let n = this.layout.getVisibleLayoutInfos(e),
            r = new Map();
        for (let e of n) t && (e = e.copy()), r.set(e.key, e);
        return r;
    }
    updateSubviews(e = !1) {
        let t, n, r;
        if (!this._collection) return;
        let i = this.getVisibleLayoutInfos(),
            a = this._visibleViews;
        if (e) (t = i), (n = a), (r = new Set());
        else {
            for (let e of (({ toAdd: t, toRemove: n, toUpdate: r } = p(a, i)), r)) {
                let o = a.get(e);
                if (!o || !o.layoutInfo) continue;
                let s = this.getItem(i.get(e).key);
                if (o.content === s) r.delete(e);
                else {
                    let { reuseType: i } = this._getReuseType(o.layoutInfo, s);
                    o.viewType !== i && (r.delete(e), t.add(e), n.add(e));
                }
            }
            if (0 === t.size && 0 === n.size && 0 === r.size) {
                this._transaction && this._applyLayoutInfos();
                return;
            }
        }
        let o = new Set();
        for (let e of n.keys()) {
            let t = this._visibleViews.get(e);
            t && (o.add(t), this._visibleViews.delete(e), this._transaction ? this._transaction.toRemove.set(e, t) : this.reuseView(t));
        }
        for (let e of t.keys()) {
            let t,
                n = i.get(e);
            this._transaction && (this._transaction.initialLayoutInfo.has(e) && (n = this._transaction.initialLayoutInfo.get(e)), (t = this._transaction.toRemove.get(e)) && (this._transaction.toRemove.delete(e), this._applyLayoutInfo(t, n))), !t && ((t = this.getReusableView(n)), !o.has(t) && this._children.add(t)), this._visibleViews.set(e, t), o.delete(t);
        }
        for (let e of r) {
            let t = a.get(e);
            this._renderedContent.delete(e), this._renderView(t);
        }
        !this._transaction && this.removeViews(o), this._correctItemOrder(), this._flushVisibleViews();
        let s = this._transaction && (t.size > 0 || n.size > 0 || this._hasLayoutUpdates());
        return (
            s &&
                requestAnimationFrame(() => {
                    this._transaction && requestAnimationFrame(() => this._applyLayoutInfos());
                }),
            s
        );
    }
    afterRender() {
        this._transactionQueue.length > 0 ? this._processTransactionQueue() : this._invalidationContext && this.relayoutNow(), this.shouldOverscan && this._overscanManager.collectMetrics();
    }
    _flushVisibleViews() {
        let e = new Map([[null, []]]);
        for (let o of this._children) {
            var t, n, r, i, a;
            (null === (t = o.layoutInfo) || void 0 === t ? void 0 : t.parentKey) != null && !e.has(o.layoutInfo.parentKey) && e.set(o.layoutInfo.parentKey, []), null === (n = e.get(null === (r = o.layoutInfo) || void 0 === r ? void 0 : r.parentKey)) || void 0 === n || n.push(o), !e.has(null === (i = o.layoutInfo) || void 0 === i ? void 0 : i.key) && e.set(null === (a = o.layoutInfo) || void 0 === a ? void 0 : a.key, []);
        }
        let o = (t, n) =>
                n.map((n) => {
                    let r = e.get(n.layoutInfo.key);
                    return this.delegate.renderWrapper(t, n, r, (e) => o(n, e));
                }),
            s = o(null, e.get(null));
        this.delegate.setVisibleViews(s);
    }
    _applyLayoutInfo(e, t) {
        return e.layoutInfo !== t && ((e.layoutInfo = t), !0);
    }
    _applyLayoutInfos() {
        let e = !1;
        for (let t of this._visibleViews.values()) {
            let n = t.layoutInfo;
            if ((null == n ? void 0 : n.key) != null) {
                let r = this.layout.getLayoutInfo(n.key);
                this._applyLayoutInfo(t, r) && (e = !0);
            }
        }
        if (this._transaction) {
            for (let t of this._transaction.toRemove.values()) {
                let n = t.layoutInfo;
                if ((null == n ? void 0 : n.key) != null) {
                    let r = this.layout.getLayoutInfo(n.key);
                    this._applyLayoutInfo(t, r) && (e = !0);
                }
            }
            for (let t of this._transaction.removed.values()) {
                let n = t.layoutInfo,
                    r = this._transaction.finalLayoutInfo.get(n.key) || n;
                (r = this.layout.getFinalLayoutInfo(r.copy())), this._applyLayoutInfo(t, r) && (e = !0);
            }
        }
        e && this._flushVisibleViews();
    }
    _hasLayoutUpdates() {
        if (!this._transaction) return !1;
        for (let e of this._visibleViews.values()) {
            let t = e.layoutInfo;
            if (!t) return !0;
            let n = this.layout.getLayoutInfo(t.key);
            if (!t.rect.equals(n.rect) || t.opacity !== n.opacity || t.transform !== n.transform) return !0;
        }
        return !1;
    }
    reuseView(e) {
        e.prepareForReuse(), this._reusableViews[e.viewType].push(e);
    }
    removeViews(e) {
        for (let t of e) this._children.delete(t);
    }
    updateItemSize(e, t) {
        if (!!this.layout.updateItemSize) {
            if (this._scrollAnimation) {
                this._sizeUpdateQueue.set(e, t);
                return;
            }
            this.layout.updateItemSize(e, t) && this.relayout();
        }
    }
    startScrolling() {
        this._isScrolling = !0;
    }
    endScrolling() {
        (this._isScrolling = !1), this._correctItemOrder(), this._flushVisibleViews();
    }
    _resetAnimatedContentOffset() {
        !this._animatedContentOffset.isOrigin() && ((this._animatedContentOffset = new a(0, 0)), this._applyLayoutInfos());
    }
    scrollToItem(e, t) {
        if (null == e) return;
        let n = this.layout.getLayoutInfo(e);
        if (!n) return;
        let { duration: r = 300, shouldScrollX: i = !0, shouldScrollY: o = !0, offsetX: s = 0, offsetY: l = 0 } = t,
            u = this.visibleRect.x,
            c = this.visibleRect.y,
            d = n.rect.x - s,
            _ = n.rect.y - l,
            E = u + this.visibleRect.width,
            f = c + this.visibleRect.height;
        return i && (d <= u || 0 === E ? (u = d) : n.rect.maxX > E && (u += n.rect.maxX - E)), o && (_ <= c || 0 === f ? (c = _) : n.rect.maxY > f && (c += n.rect.maxY - f)), this.scrollTo(new a(u, c), r);
    }
    scrollTo(e, t = 300) {
        return (this._scrollAnimation && (this._scrollAnimation.cancel(), (this._scrollAnimation = null)), t <= 0 || this.visibleRect.pointEquals(e))
            ? (this._setContentOffset(e), Promise.resolve())
            : (this.startScrolling(),
              (this._scrollAnimation = E(this.visibleRect, e, t, f, (e) => {
                  this._setContentOffset(e);
              })),
              this._scrollAnimation.then(() => {
                  for (let [e, t] of ((this._scrollAnimation = null), this._sizeUpdateQueue)) this.updateItemSize(e, t);
                  this._sizeUpdateQueue.clear(), this.relayout(), this._processTransactionQueue(), this.endScrolling();
              }),
              this._scrollAnimation);
    }
    _runTransaction(e, t) {
        this._startTransaction(), this._nextTransaction && this._nextTransaction.actions.push(e), this._endTransaction(t);
    }
    _startTransaction() {
        !this._nextTransaction && (this._nextTransaction = new S()), this._nextTransaction.level++;
    }
    _endTransaction(e) {
        return !!this._nextTransaction && (null != e && (this._nextTransaction.animated = e), !(--this._nextTransaction.level > 0) && (0 === this._nextTransaction.actions.length ? ((this._nextTransaction = null), !1) : (null == this._nextTransaction.animated && (this._nextTransaction.animated = !0), this._transactionQueue.push(this._nextTransaction), (this._nextTransaction = null), !0)));
    }
    _processTransactionQueue() {
        if (this._transaction || this._scrollAnimation) return;
        let e = this._transactionQueue.shift();
        e && this._performTransaction(e);
    }
    _getContentRect() {
        return new o(0, 0, this.contentSize.width, this.contentSize.height);
    }
    _performTransaction(e) {
        (this._transaction = e),
            this.relayoutNow({
                transaction: e,
                animated: e.animated,
                beforeLayout: () => {
                    for (let t of (e.animated && (e.initialMap = this._getLayoutInfoMap(this._getContentRect(), !0)), e.actions)) t();
                },
                afterLayout: () => {
                    e.animated ? ((e.finalMap = this._getLayoutInfoMap(this._getContentRect())), this._setupTransactionAnimations(e)) : (this._transaction = null);
                },
                afterAnimation: () => {
                    if (e.toRemove.size > 0 || e.removed.size > 0) for (let t of m(e.toRemove.values(), e.removed.values())) this._children.delete(t), this.reuseView(t);
                    (this._transaction = null), this._correctItemOrder(), this._flushVisibleViews(), this._processTransactionQueue();
                }
            });
    }
    _setupTransactionAnimations(e) {
        let { initialMap: t, finalMap: n } = e;
        for (let [r, i] of t) n.has(r) ? e.initialLayoutInfo.set(r, i) : e.finalLayoutInfo.set(i.key, i);
        for (let [r, i] of n)
            if (!t.has(r)) {
                let t = this.layout.getInitialLayoutInfo(i.copy());
                e.initialLayoutInfo.set(r, t);
            }
        for (let [t, r] of this._visibleViews) !n.has(t) && r.layoutInfo.rect.width > 0 && (e.removed.set(t, r), this._visibleViews.delete(t), r.layoutInfo && !e.finalLayoutInfo.has(r.layoutInfo.key) && e.finalLayoutInfo.set(r.layoutInfo.key, r.layoutInfo));
    }
    constructor(e = {}) {
        var t;
        for (let n of ((this._contentSize = new s()), (this._visibleRect = new o()), (this._reusableViews = {}), (this._visibleLayoutInfos = new Map()), (this._visibleViews = new Map()), (this._renderedContent = new WeakMap()), (this._children = new Set()), (this._invalidationContext = null), (this._overscanManager = new g()), (this._persistedKeys = new Set()), (this._scrollAnimation = null), (this._isScrolling = !1), (this._sizeUpdateQueue = new Map()), (this._animatedContentOffset = new a(0, 0)), (this._transaction = null), (this._nextTransaction = null), (this._transactionQueue = []), (this.transitionDuration = null !== (t = e.transitionDuration) && void 0 !== t ? t : 500), (this.anchorScrollPosition = e.anchorScrollPosition || !1), (this.anchorScrollPositionAtTop = e.anchorScrollPositionAtTop || !1), (this.shouldOverscan = !1 !== e.shouldOverscan), ['delegate', 'size', 'layout', 'collection'])) e[n] && (this[n] = e[n]);
    }
}
