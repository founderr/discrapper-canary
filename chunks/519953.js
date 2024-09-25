n.d(t, {
    BU: function () {
        return tQ;
    },
    CX: function () {
        return tb;
    },
    F3: function () {
        return eg;
    },
    UE: function () {
        return tx;
    },
    _7: function () {
        return eP;
    },
    mH: function () {
        return tH;
    },
    vt: function () {
        return ej;
    }
});
var r = n(653603),
    i = n.n(r),
    a = n(889678),
    o = n.n(a),
    s = n(123763),
    l = n.n(s),
    u = n(470079),
    c = n(367989),
    d = n(327432),
    _ = n(690096),
    E = n(247187),
    f = n(699581);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) {
            if (((n = a[r]), !(t.indexOf(n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
    }
    return i;
}
var I = 0;
class T {
    constructor() {
        this.id = ''.concat(I++);
    }
}
var g = new WeakMap(),
    S = new WeakMap(),
    A = new WeakMap(),
    v = new WeakMap(),
    N = new WeakMap(),
    O = new WeakMap(),
    R = new WeakMap(),
    C = new WeakMap(),
    y = new WeakMap(),
    b = new WeakMap(),
    L = new WeakMap(),
    D = new WeakMap(),
    M = new WeakMap(),
    P = new WeakMap(),
    U = new WeakMap(),
    w = new WeakMap(),
    x = new WeakMap(),
    G = new WeakMap(),
    k = new WeakMap(),
    B = new WeakMap(),
    F = new WeakMap(),
    Z = Symbol('placeholder'),
    V = Symbol('mark-placeholder'),
    H = globalThis.Text,
    Y = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    j = (e) => K(e) && 8 === e.nodeType,
    W = (e) => K(e) && 1 === e.nodeType,
    K = (e) => {
        var t = Y(e);
        return !!t && e instanceof t.Node;
    },
    z = (e) => {
        var t = e && e.anchorNode && Y(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    q = (e) => K(e) && 3 === e.nodeType,
    Q = (e) => e.clipboardData && '' !== e.clipboardData.getData('text/plain') && 1 === e.clipboardData.types.length,
    X = (e) => {
        var [t, n] = e;
        if (W(t) && t.childNodes.length) {
            var r = n === t.childNodes.length,
                i = r ? n - 1 : n;
            for ([t, i] = J(t, i, r ? 'backward' : 'forward'), r = i < n; W(t) && t.childNodes.length; ) {
                var a = r ? t.childNodes.length - 1 : 0;
                t = ee(t, a, r ? 'backward' : 'forward');
            }
            n = r && null != t.textContent ? t.textContent.length : 0;
        }
        return [t, n];
    },
    $ = (e) => {
        for (var t = e && e.parentNode; t; ) {
            if ('[object ShadowRoot]' === t.toString()) return !0;
            t = t.parentNode;
        }
        return !1;
    },
    J = (e, t, n) => {
        for (var { childNodes: r } = e, i = r[t], a = t, o = !1, s = !1; (j(i) || (W(i) && 0 === i.childNodes.length) || (W(i) && 'false' === i.getAttribute('contenteditable'))) && (!o || !s); ) {
            if (a >= r.length) {
                (o = !0), (a = t - 1), (n = 'backward');
                continue;
            }
            if (a < 0) {
                (s = !0), (a = t + 1), (n = 'forward');
                continue;
            }
            (i = r[a]), (t = a), (a += 'forward' === n ? 1 : -1);
        }
        return [i, t];
    },
    ee = (e, t, n) => {
        var [r] = J(e, t, n);
        return r;
    },
    et = (e) => {
        var t = '';
        if (q(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += et(n);
            var r = getComputedStyle(e).getPropertyValue('display');
            ('block' === r || 'list' === r || 'BR' === e.tagName) && (t += '\n');
        }
        return t;
    },
    en = /data-slate-fragment="(.+?)"/m,
    er = (e) => {
        var [, t] = e.getData('text/html').match(en) || [];
        return t;
    },
    ei = (e, t, n) => {
        var { target: r } = t;
        if (W(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = eg.getWindow(e);
        if (i.contains(r)) return eg.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && ei(e, a, n);
    },
    ea = parseInt(u.version.split('.')[0], 10) >= 17,
    eo = 'undefined' != typeof navigator && 'undefined' != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    es = 'undefined' != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    el = 'undefined' != typeof navigator && /Android/.test(navigator.userAgent),
    eu = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ec = 'undefined' != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ed = 'undefined' != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e_ = 'undefined' != typeof navigator && /Chrome/i.test(navigator.userAgent),
    eE = 'undefined' != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ef = el && 'undefined' != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    eh = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ep = 'undefined' != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    em = 'undefined' != typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eI = !!('undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
    eT = (!eE || !ef) && !ed && 'undefined' != typeof globalThis && globalThis.InputEvent && 'function' == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eg = {
        isComposing: (e) => !!D.get(e),
        getWindow(e) {
            var t = A.get(e);
            if (!t) throw Error('Unable to find a host window element for this editor');
            return t;
        },
        findKey(e, t) {
            var n = C.get(t);
            return !n && ((n = new T()), C.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = S.get(r);
                if (null == i) {
                    if (d.ML.isEditor(r)) return n;
                    break;
                }
                var a = g.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error('Unable to find the path for Slate node: '.concat(d.o4.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = eg.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!L.get(e),
        isReadOnly: (e) => !!b.get(e),
        blur(e) {
            var t = eg.toDOMNode(e, e),
                n = eg.findDocumentOrShadowRoot(e);
            L.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = eg.toDOMNode(e, e),
                n = eg.findDocumentOrShadowRoot(e);
            L.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = eg.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = eg.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return !!n && n.closest('[data-slate-editor]') === a && (!i || !!n.isContentEditable || ('boolean' == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) || !!n.getAttribute('data-slate-zero-width'));
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
        },
        toDOMNode(e, t) {
            var n = y.get(e),
                r = d.ML.isEditor(t) ? v.get(e) : null == n ? void 0 : n.get(eg.findKey(e, t));
            if (!r) throw Error('Cannot resolve a DOM node from Slate node: '.concat(d.o4.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.ML.node(e, t.path),
                r = eg.toDOMNode(e, n);
            d.ML.void(e, { at: t }) &&
                (t = {
                    path: t.path,
                    offset: 0
                });
            for (var i = '[data-slate-string], [data-slate-zero-width]', a = Array.from(r.querySelectorAll(i)), o = 0, s = 0; s < a.length; s++) {
                var l = a[s],
                    u = l.childNodes[0];
                if (null != u && null != u.textContent) {
                    var { length: c } = u.textContent,
                        _ = l.getAttribute('data-slate-length'),
                        E = o + (null == _ ? c : parseInt(_, 10)),
                        f = a[s + 1];
                    if (t.offset === E && null != f && f.hasAttribute('data-slate-mark-placeholder')) {
                        var h,
                            p,
                            m = f.childNodes[0];
                        h = [m instanceof H ? m : f, null !== (p = f.textContent) && void 0 !== p && p.startsWith('\uFEFF') ? 1 : 0];
                        break;
                    }
                    if (t.offset <= E) {
                        h = [u, Math.min(c, Math.max(0, t.offset - o))];
                        break;
                    }
                    o = E;
                }
            }
            if (!h) throw Error('Cannot resolve a DOM point from Slate point: '.concat(d.o4.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.e6.isBackward(t),
                a = eg.toDOMPoint(e, n),
                o = d.e6.isCollapsed(t) ? a : eg.toDOMPoint(e, r),
                s = eg.getWindow(e).document.createRange(),
                [l, u] = i ? o : a,
                [c, _] = i ? a : o,
                E = !!(W(l) ? l : l.parentElement).getAttribute('data-slate-zero-width'),
                f = !!(W(c) ? c : c.parentElement).getAttribute('data-slate-zero-width');
            return s.setStart(l, E ? 1 : u), s.setEnd(c, f ? 1 : _), s;
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute('data-slate-node') && (n = n.closest('[data-slate-node]'));
            var r = n ? O.get(n) : null;
            if (!r) throw Error('Cannot resolve a Slate node from DOM node: '.concat(n));
            return r;
        },
        findEventRange(e, t) {
            'nativeEvent' in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            var o = eg.toSlateNode(e, t.target),
                s = eg.findPath(e, o);
            if (d.W_.isElement(o) && d.ML.isVoid(e, o)) {
                var l = a.getBoundingClientRect(),
                    u = e.isInline(o) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    c = d.ML.point(e, s, { edge: u ? 'start' : 'end' }),
                    _ = u ? d.ML.before(e, c) : d.ML.after(e, c);
                if (_) return d.ML.range(e, _);
            }
            var { document: E } = eg.getWindow(e);
            if (E.caretRangeFromPoint) n = E.caretRangeFromPoint(r, i);
            else {
                var f = E.caretPositionFromPoint(r, i);
                f && ((n = E.createRange()).setStart(f.offsetNode, f.offset), n.setEnd(f.offsetNode, f.offset));
            }
            if (!n) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            return eg.toSlateRange(e, n, {
                exactMatch: !1,
                suppressThrow: !1
            });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, o] = r ? t : X(t),
                s = a.parentNode,
                l = null,
                u = 0;
            if (s) {
                var c,
                    _,
                    E = eg.toDOMNode(e, e),
                    f = s.closest('[data-slate-void="true"]'),
                    h = f && E.contains(f) ? f : null,
                    p = s.closest('[data-slate-leaf]'),
                    m = null;
                if (p) {
                    if ((l = p.closest('[data-slate-node="text"]'))) {
                        var I = eg.getWindow(e).document.createRange();
                        I.setStart(l, 0), I.setEnd(a, o);
                        var T = I.cloneContents();
                        [...Array.prototype.slice.call(T.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(T.querySelectorAll('[contenteditable=false]'))].forEach((e) => {
                            if (el && !r && e.hasAttribute('data-slate-zero-width') && e.textContent.length > 0 && '\uFEFF' !== e.textContext) {
                                e.textContent.startsWith('\uFEFF') && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = T.textContent.length),
                            (m = l);
                    }
                } else if (h) {
                    for (var g = h.querySelectorAll('[data-slate-leaf]'), S = 0; S < g.length; S++) {
                        var A = g[S];
                        if (eg.hasDOMNode(e, A)) {
                            p = A;
                            break;
                        }
                    }
                    p
                        ? ((l = p.closest('[data-slate-node="text"]')),
                          (u = (m = p).textContent.length),
                          m.querySelectorAll('[data-slate-zero-width]').forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                m && u === m.textContent.length && el && 'z' === m.getAttribute('data-slate-zero-width') && null !== (c = m.textContent) && void 0 !== c && c.startsWith('\uFEFF') && (s.hasAttribute('data-slate-zero-width') || (eu && null !== (_ = m.textContent) && void 0 !== _ && _.endsWith('\n\n'))) && u--;
            }
            if (el && !l && !r) {
                var v = s.hasAttribute('data-slate-node') ? s : s.closest('[data-slate-node]');
                if (v && eg.hasDOMNode(e, v, { editable: !0 })) {
                    var N = eg.toSlateNode(e, v),
                        { path: O, offset: R } = d.ML.start(e, eg.findPath(e, N));
                    return (
                        !v.querySelector('[data-slate-leaf]') && (R = o),
                        {
                            path: O,
                            offset: R
                        }
                    );
                }
            }
            if (!l) {
                if (i) return null;
                throw Error('Cannot resolve a Slate point from DOM point: '.concat(t));
            }
            var C = eg.toSlateNode(e, l);
            return {
                path: eg.findPath(e, C),
                offset: u
            };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                o,
                s,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (((z(t) ? t.anchorNode : t.startContainer) && (z(t) ? ((r = t.anchorNode), (i = t.anchorOffset), (a = t.focusNode), (o = t.focusOffset), (s = e_ && $(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed)) : ((r = t.startContainer), (i = t.startOffset), (a = t.endContainer), (o = t.endOffset), (s = t.collapsed))), null == r || null == a || null == i || null == o)) throw Error('Cannot resolve a Slate range from DOM range: '.concat(t));
            'getAttribute' in a && 'false' === a.getAttribute('contenteditable') && ((a = r), (o = (null === (l = r.textContent) || void 0 === l ? void 0 : l.length) || 0));
            var _ = eg.toSlatePoint(e, [r, i], {
                exactMatch: u,
                suppressThrow: c
            });
            if (!_) return null;
            var E = s
                ? _
                : eg.toSlatePoint(e, [a, o], {
                      exactMatch: u,
                      suppressThrow: c
                  });
            if (!E) return null;
            if (eu && !s && r !== a) {
                var f = d.ML.isEnd(e, _, _.path),
                    h = d.ML.isStart(e, E, E.path);
                f && (_ = d.ML.after(e, _) || _), h && (E = d.ML.before(e, E) || E);
            }
            var p = {
                anchor: _,
                focus: E
            };
            return (
                d.e6.isExpanded(p) &&
                    d.e6.isForward(p) &&
                    W(a) &&
                    d.ML.void(e, {
                        at: p.focus,
                        mode: 'highest'
                    }) &&
                    (p = d.ML.unhangRange(e, p, { voids: !0 })),
                p
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path);
        },
        hasTarget: (e, t) => K(t) && eg.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => K(t) && eg.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => eg.hasEditableTarget(e, t) || eg.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (b.get(e)) return !1;
            var n = eg.hasTarget(e, t) && eg.toSlateNode(e, t);
            return d.W_.isElement(n) && d.ML.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null === (t = U.get(e)) || void 0 === t || t();
        },
        androidPendingDiffs: (e) => G.get(e)
    },
    eS = ['anchor', 'focus'],
    eA = ['anchor', 'focus'],
    ev = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    eN = (e, t) => {
        var n = m(e, eS),
            r = m(t, eA);
        return e[Z] === t[Z] && ev(n, r);
    },
    eO = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (!d.e6.equals(r, i) || !eN(r, i)) return !1;
        }
        return !0;
    },
    eR = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eN(r, i)) return !1;
        }
        return !0;
    },
    eC = eI ? u.useLayoutEffect : u.useEffect,
    ey = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = eP(),
            o = eg.findPath(a, i),
            s = d.y$.parent(o),
            l = !0 === n[V];
        return a.isVoid(r)
            ? u.createElement(eD, { length: d.NB.string(r).length })
            : '' !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || '' !== d.ML.string(a, s)
              ? '' === n.text
                  ? u.createElement(eD, { isMarkPlaceholder: l })
                  : t && '\n' === n.text.slice(-1)
                    ? u.createElement(eb, {
                          isTrailing: !0,
                          text: n.text
                      })
                    : u.createElement(eb, { text: n.text })
              : u.createElement(eD, {
                    isLineBreak: !0,
                    isMarkPlaceholder: l
                });
    },
    eb = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, u.useRef)(null),
            i = () => ''.concat(null != t ? t : '').concat(n ? '\n' : ''),
            [a] = (0, u.useState)(i);
        return (
            eC(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            u.createElement(eL, { ref: r }, a)
        );
    },
    eL = (0, u.memo)(
        (0, u.forwardRef)((e, t) =>
            u.createElement(
                'span',
                {
                    'data-slate-string': !0,
                    ref: t
                },
                e.children
            )
        )
    ),
    eD = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = {
                'data-slate-zero-width': n ? 'n' : 'z',
                'data-slate-length': t
            };
        return r && (i['data-slate-mark-placeholder'] = !0), u.createElement('span', Object.assign({}, i), el && n ? null : '\uFEFF', n ? u.createElement('br', null) : null);
    },
    eM = (0, u.createContext)(null),
    eP = () => {
        var e = (0, u.useContext)(eM);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eU = (e) => {
        var { leaf: t, isLast: n, text: r, parent: i, renderPlaceholder: a, renderLeaf: o = (e) => u.createElement(ex, Object.assign({}, e)) } = e,
            s = (0, u.useRef)(null),
            l = (0, u.useRef)(null),
            c = eP(),
            d = (0, u.useRef)(null);
        (0, u.useEffect)(
            () => () => {
                d.current && d.current.disconnect();
            },
            []
        ),
            (0, u.useEffect)(() => {
                var e = null == l ? void 0 : l.current;
                if ((e ? N.set(c, e) : N.delete(c), d.current)) d.current.disconnect(), e && d.current.observe(e);
                else if (e) {
                    var t = window.ResizeObserver || _.do;
                    (d.current = new t(() => {
                        var e = F.get(c);
                        null == e || e();
                    })),
                        d.current.observe(e);
                }
                if (!e && s.current) {
                    var n = F.get(c);
                    null == n || n();
                }
                return (
                    (s.current = l.current),
                    () => {
                        N.delete(c);
                    }
                );
            }, [l, t]);
        var E = u.createElement(ey, {
            isLast: n,
            leaf: t,
            parent: i,
            text: r
        });
        if (t[Z]) {
            var f = {
                children: t.placeholder,
                attributes: {
                    'data-slate-placeholder': !0,
                    style: {
                        position: 'absolute',
                        pointerEvents: 'none',
                        width: '100%',
                        maxWidth: '100%',
                        display: 'block',
                        opacity: '0.333',
                        userSelect: 'none',
                        textDecoration: 'none'
                    },
                    contentEditable: !1,
                    ref: l
                }
            };
            E = u.createElement(u.Fragment, null, a(f), E);
        }
        return o({
            attributes: { 'data-slate-leaf': !0 },
            children: E,
            leaf: t,
            text: r
        });
    },
    ew = u.memo(eU, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[Z] === e.leaf[Z]),
    ex = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n);
    },
    eG = (e) => {
        for (var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: o } = e, s = eP(), l = (0, u.useRef)(null), c = d.xv.decorations(o, t), _ = eg.findKey(s, o), E = [], f = 0; f < c.length; f++) {
            var h = c[f];
            E.push(
                u.createElement(ew, {
                    isLast: n && f === c.length - 1,
                    key: ''.concat(_.id, '-').concat(f),
                    renderPlaceholder: i,
                    leaf: h,
                    text: o,
                    parent: r,
                    renderLeaf: a
                })
            );
        }
        var p = (0, u.useCallback)(
            (e) => {
                var t = y.get(s);
                e ? (null == t || t.set(_, e), R.set(o, e), O.set(e, o)) : (null == t || t.delete(_), R.delete(o), l.current && O.delete(l.current)), (l.current = e);
            },
            [l, s, _, o]
        );
        return u.createElement(
            'span',
            {
                'data-slate-node': 'text',
                ref: p
            },
            E
        );
    },
    ek = u.memo(eG, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eR(t.decorations, e.decorations)),
    eB = (e) => {
        var { decorations: t, element: n, renderElement: r = (e) => u.createElement(eZ, Object.assign({}, e)), renderPlaceholder: a, renderLeaf: o, selection: s } = e,
            l = eP(),
            c = ez(),
            _ = l.isInline(n),
            E = eg.findKey(l, n),
            f = (0, u.useCallback)(
                (e) => {
                    var t = y.get(l);
                    e ? (null == t || t.set(E, e), R.set(n, e), O.set(e, n)) : (null == t || t.delete(E), R.delete(n));
                },
                [l, E, n]
            ),
            h = eW({
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: a,
                renderLeaf: o,
                selection: s
            }),
            p = {
                'data-slate-node': 'element',
                ref: f
            };
        if ((_ && (p['data-slate-inline'] = !0), !_ && d.ML.hasInlines(l, n))) {
            var m = d.NB.string(n),
                I = i()(m);
            'rtl' === I && (p.dir = I);
        }
        if (d.ML.isVoid(l, n)) {
            (p['data-slate-void'] = !0), !c && _ && (p.contentEditable = !1);
            var T = _ ? 'span' : 'div',
                [[A]] = d.NB.texts(n);
            (h = u.createElement(
                T,
                {
                    'data-slate-spacer': !0,
                    style: {
                        height: '0',
                        color: 'transparent',
                        outline: 'none',
                        position: 'absolute'
                    }
                },
                u.createElement(ek, {
                    renderPlaceholder: a,
                    decorations: [],
                    isLast: !1,
                    parent: n,
                    text: A
                })
            )),
                g.set(A, 0),
                S.set(A, n);
        }
        return r({
            attributes: p,
            children: h,
            element: n,
            decorations: t
        });
    },
    eF = u.memo(eB, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eO(e.decorations, t.decorations) && (e.selection === t.selection || (!!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection)))),
    eZ = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = eP().isInline(r) ? 'span' : 'div';
        return u.createElement(i, Object.assign({}, t, { style: { position: 'relative' } }), n);
    },
    eV = (0, u.createContext)(() => []),
    eH = () => (0, u.useContext)(eV),
    eY = (0, u.createContext)(!1),
    ej = () => (0, u.useContext)(eY),
    eW = (e) => {
        for (var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: o } = e, s = eH(), l = eP(), c = eg.findPath(l, n), _ = [], E = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n), f = 0; f < n.children.length; f++) {
            var h = c.concat(f),
                p = n.children[f],
                m = eg.findKey(l, p),
                I = d.ML.range(l, h),
                T = o && d.e6.intersection(I, o),
                A = s([p, h]);
            for (var v of t) {
                var N = d.e6.intersection(v, I);
                N && A.push(N);
            }
            d.W_.isElement(p)
                ? _.push(
                      u.createElement(
                          eY.Provider,
                          {
                              key: 'provider-'.concat(m.id),
                              value: !!T
                          },
                          u.createElement(eF, {
                              decorations: A,
                              element: p,
                              key: m.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: T
                          })
                      )
                  )
                : _.push(
                      u.createElement(ek, {
                          decorations: A,
                          key: m.id,
                          isLast: E && f === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: p
                      })
                  ),
                g.set(p, f),
                S.set(p, n);
        }
        return _;
    },
    eK = (0, u.createContext)(!1),
    ez = () => (0, u.useContext)(eK),
    eq = (0, u.createContext)(null),
    eQ = () => {
        var e = (0, u.useContext)(eq);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eX = 3,
    e$ = {
        bold: 'mod+b',
        compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
        moveBackward: 'left',
        moveForward: 'right',
        moveWordBackward: 'ctrl+left',
        moveWordForward: 'ctrl+right',
        deleteBackward: 'shift?+backspace',
        deleteForward: 'shift?+delete',
        extendBackward: 'shift+left',
        extendForward: 'shift+right',
        italic: 'mod+i',
        insertSoftBreak: 'shift+enter',
        splitBlock: 'enter',
        undo: 'mod+z'
    },
    eJ = {
        moveLineBackward: 'opt+up',
        moveLineForward: 'opt+down',
        moveWordBackward: 'opt+left',
        moveWordForward: 'opt+right',
        deleteBackward: ['ctrl+backspace', 'ctrl+h'],
        deleteForward: ['ctrl+delete', 'ctrl+d'],
        deleteLineBackward: 'cmd+shift?+backspace',
        deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
        deleteWordBackward: 'opt+shift?+backspace',
        deleteWordForward: 'opt+shift?+delete',
        extendLineBackward: 'opt+shift+up',
        extendLineForward: 'opt+shift+down',
        redo: 'cmd+shift+z',
        transposeCharacter: 'ctrl+t'
    },
    e0 = {
        deleteWordBackward: 'ctrl+shift?+backspace',
        deleteWordForward: 'ctrl+shift?+delete',
        redo: ['ctrl+y', 'ctrl+shift+z']
    },
    e1 = (e) => {
        var t = e$[e],
            n = eJ[e],
            r = e0[e],
            i = t && (0, E.isKeyHotkey)(t),
            a = n && (0, E.isKeyHotkey)(n),
            o = r && (0, E.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (es && a && a(e)) || (!es && o && o(e))) || !1;
    },
    e2 = {
        isBold: e1('bold'),
        isCompose: e1('compose'),
        isMoveBackward: e1('moveBackward'),
        isMoveForward: e1('moveForward'),
        isDeleteBackward: e1('deleteBackward'),
        isDeleteForward: e1('deleteForward'),
        isDeleteLineBackward: e1('deleteLineBackward'),
        isDeleteLineForward: e1('deleteLineForward'),
        isDeleteWordBackward: e1('deleteWordBackward'),
        isDeleteWordForward: e1('deleteWordForward'),
        isExtendBackward: e1('extendBackward'),
        isExtendForward: e1('extendForward'),
        isExtendLineBackward: e1('extendLineBackward'),
        isExtendLineForward: e1('extendLineForward'),
        isItalic: e1('italic'),
        isMoveLineBackward: e1('moveLineBackward'),
        isMoveLineForward: e1('moveLineForward'),
        isMoveWordBackward: e1('moveWordBackward'),
        isMoveWordForward: e1('moveWordForward'),
        isRedo: e1('redo'),
        isSoftBreak: e1('insertSoftBreak'),
        isSplitBlock: e1('splitBlock'),
        isTransposeCharacter: e1('transposeCharacter'),
        isUndo: e1('undo')
    },
    e3 = (e, t) => {
        var n = [],
            r = () => {
                n = [];
            };
        return {
            registerMutations: (r) => {
                if (!!t.current) {
                    var i = r.filter((t) => ei(e, t, r));
                    n.push(...i);
                }
            },
            restoreDOM: function e() {
                n.length > 0 &&
                    (n.reverse().forEach((e) => {
                        if ('characterData' !== e.type)
                            e.removedNodes.forEach((t) => {
                                e.target.insertBefore(t, e.nextSibling);
                            }),
                                e.addedNodes.forEach((t) => {
                                    e.target.removeChild(t);
                                });
                    }),
                    r());
            },
            clear: r
        };
    },
    e4 = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0
    };
class e5 extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
        null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e4);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            t = this.context;
        (this.manager = e3(t, e)), (this.mutationObserver = new MutationObserver(this.manager.registerMutations)), this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            r,
            i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
        return null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null;
    }
    componentDidUpdate() {
        var e;
        null === (e = this.manager) || void 0 === e || e.clear(), this.observe();
    }
    componentWillUnmount() {
        var e;
        null === (e = this.mutationObserver) || void 0 === e || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
e5.contextType = eM;
var e6 = el
    ? e5
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function e7(e, t) {
    var { path: n, diff: r } = t;
    if (!d.ML.hasPath(e, n)) return !1;
    var i = d.NB.get(e, n);
    if (!d.xv.isText(i)) return !1;
    if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
    var a = d.y$.next(n);
    if (!d.ML.hasPath(e, a)) return !1;
    var o = d.NB.get(e, a);
    return d.xv.isText(o) && o.text.startsWith(r.text);
}
function e8(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e9(e, t) {
    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
    return n;
}
function te(e, t, n) {
    for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++) if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
    return r;
}
function tt(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        o = e9(a, i),
        s = Math.min(a.length - o, i.length - o),
        l = te(a, i, s),
        u = {
            start: n + o,
            end: r - l,
            text: i.slice(o, i.length - l)
        };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tn(e, t, n) {
    var r = Math.min(t.start, n.start),
        i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
        a = e8(e, t, n),
        o = Math.max(n.start + n.text.length, t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i),
        s = a.slice(r, o);
    return tt(e, {
        start: r,
        end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)),
        text: s
    });
}
function tr(e) {
    var { path: t, diff: n } = e;
    return {
        anchor: {
            path: t,
            offset: n.start
        },
        focus: {
            path: t,
            offset: n.end
        }
    };
}
function ti(e, t) {
    var { path: n, offset: r } = t;
    if (!d.ML.hasPath(e, n)) return null;
    var i = d.NB.get(e, n);
    if (!d.xv.isText(i)) return null;
    var a = d.ML.above(e, {
        match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
        at: n
    });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var o = d.ML.next(e, {
            at: n,
            match: d.xv.isText
        });
        if (!o || !d.y$.isDescendant(o[1], a[1])) return null;
        (r -= i.text.length), (i = o[0]), (n = o[1]);
    }
    return {
        path: n,
        offset: r
    };
}
function ta(e, t) {
    var n = ti(e, t.anchor);
    if (!n) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: n,
            focus: n
        };
    var r = ti(e, t.focus);
    return r
        ? {
              anchor: n,
              focus: r
          }
        : null;
}
function to(e, t, n) {
    var r = G.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.y$.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, { affinity: 'backward' });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var o = {
                path: t.path,
                offset: a.start
            },
            s = d.E9.transform(o, n, { affinity: 'backward' });
        return s
            ? {
                  path: s.path,
                  offset: s.offset + t.offset - a.start
              }
            : null;
    }
    var l = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start
        },
        u = d.E9.transform(l, n, { affinity: 'backward' });
    return u
        ? 'split_node' === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
            ? u
            : {
                  path: u.path,
                  offset: u.offset + a.text.length - a.end + a.start
              }
        : null;
}
function ts(e, t, n) {
    var r = to(e, t.anchor, n);
    if (!r) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: r,
            focus: r
        };
    var i = to(e, t.focus, n);
    return i
        ? {
              anchor: r,
              focus: i
          }
        : null;
}
function tl(e, t) {
    var { path: n, diff: r, id: i } = e;
    switch (t.type) {
        case 'insert_text':
            if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
            if (t.offset <= r.start)
                return {
                    diff: {
                        start: t.text.length + r.start,
                        end: t.text.length + r.end,
                        text: r.text
                    },
                    id: i,
                    path: n
                };
            return {
                diff: {
                    start: r.start,
                    end: r.end + t.text.length,
                    text: r.text
                },
                id: i,
                path: n
            };
        case 'remove_text':
            if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
            if (t.offset + t.text.length <= r.start)
                return {
                    diff: {
                        start: r.start - t.text.length,
                        end: r.end - t.text.length,
                        text: r.text
                    },
                    id: i,
                    path: n
                };
            return {
                diff: {
                    start: r.start,
                    end: r.end - t.text.length,
                    text: r.text
                },
                id: i,
                path: n
            };
        case 'split_node':
            if (!d.y$.equals(t.path, n) || t.position >= r.end)
                return {
                    diff: r,
                    id: i,
                    path: d.y$.transform(n, t, { affinity: 'backward' })
                };
            if (t.position > r.start)
                return {
                    diff: {
                        start: r.start,
                        end: Math.min(t.position, r.end),
                        text: r.text
                    },
                    id: i,
                    path: n
                };
            return {
                diff: {
                    start: r.start - t.position,
                    end: r.end - t.position,
                    text: r.text
                },
                id: i,
                path: d.y$.transform(n, t, { affinity: 'forward' })
            };
        case 'merge_node':
            if (!d.y$.equals(t.path, n))
                return {
                    diff: r,
                    id: i,
                    path: d.y$.transform(n, t)
                };
            return {
                diff: {
                    start: r.start + t.position,
                    end: r.end + t.position,
                    text: r.text
                },
                id: i,
                path: d.y$.transform(n, t)
            };
    }
    var a = d.y$.transform(n, t);
    return a
        ? {
              diff: r,
              path: a,
              id: i
          }
        : null;
}
function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tu(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tu(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var td = 25,
    t_ = 200,
    tE = function () {},
    tf = (e) => (null == e ? void 0 : e.constructor.name) === 'DataTransfer';
function th(e) {
    var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
        i = !1,
        a = null,
        o = null,
        s = null,
        l = 0,
        u = !1,
        c = () => {
            var e = B.get(t);
            if ((B.delete(t), e)) {
                var { selection: n } = t,
                    r = ta(t, e);
                r && (!n || !d.e6.equals(r, n)) && d.YR.select(t, r);
            }
        },
        _ = () => {
            var e = k.get(t);
            if ((k.delete(t), !!e)) {
                if (e.at) {
                    var n = d.E9.isPoint(e.at) ? ti(t, e.at) : ta(t, e.at);
                    if (!n) return;
                    var r = d.ML.range(t, n);
                    (!t.selection || !d.e6.equals(t.selection, r)) && d.YR.select(t, n);
                }
                e.run();
            }
        },
        E = () => {
            if ((o && (clearTimeout(o), (o = null)), s && (clearTimeout(s), (s = null)), !g() && !T())) {
                c();
                return;
            }
            !i && ((i = !0), setTimeout(() => (i = !1))), T() && (i = 'action');
            var e = t.selection && d.ML.rangeRef(t, t.selection, { affinity: 'forward' });
            x.set(t, t.marks), tE('flush', k.get(t), G.get(t));
            for (var a = g(); (l = null === (E = G.get(t)) || void 0 === E ? void 0 : E[0]); ) {
                var l,
                    E,
                    f,
                    h = w.get(t);
                void 0 !== h && (w.delete(t), (t.marks = h)), h && !1 === u && (u = null);
                var p = tr(l);
                (!t.selection || !d.e6.equals(t.selection, p)) && d.YR.select(t, p),
                    l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t),
                    G.set(
                        t,
                        null === (f = G.get(t)) || void 0 === f
                            ? void 0
                            : f.filter((e) => {
                                  var { id: t } = e;
                                  return t !== l.id;
                              })
                    ),
                    !e7(t, l) && ((a = !1), k.delete(t), x.delete(t), (i = 'action'), B.delete(t), n.cancel(), r.cancel(), null == e || e.unref());
            }
            var m = null == e ? void 0 : e.unref();
            if ((m && !B.get(t) && (!t.selection || !d.e6.equals(m, t.selection)) && d.YR.select(t, m), T())) {
                _();
                return;
            }
            a && n(), n.flush(), r.flush(), c();
            var I = x.get(t);
            x.delete(t), void 0 !== I && ((t.marks = I), t.onChange());
        },
        f = (e) => {
            a && clearTimeout(a),
                (a = setTimeout(() => {
                    D.set(t, !1), E();
                }, td));
        },
        h = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = N.get(t);
            if (!!n) {
                if (g() || e) {
                    n.style.display = 'none';
                    return;
                }
                n.style.removeProperty('display');
            }
        },
        p = (e, n) => {
            var r,
                i = null !== (r = G.get(t)) && void 0 !== r ? r : [];
            G.set(t, i);
            var a = d.NB.leaf(t, e),
                o = i.findIndex((t) => d.y$.equals(t.path, e));
            if (o < 0) {
                tt(a.text, n) &&
                    i.push({
                        path: e,
                        diff: n,
                        id: l++
                    }),
                    h();
                return;
            }
            var s = tn(a.text, i[o].diff, n);
            if (!s) {
                i.splice(o, 1), h();
                return;
            }
            i[o] = tc(tc({}, i[o]), {}, { diff: s });
        },
        m = function (e) {
            var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (u = !1),
                B.delete(t),
                n.cancel(),
                r.cancel(),
                T() && E(),
                k.set(t, {
                    at: i,
                    run: e
                }),
                (s = setTimeout(E));
        },
        I = (e) => {
            o && (clearTimeout(o), (o = null));
            var { inputType: n } = e,
                r = null,
                i = e.dataTransfer || e.data || void 0;
            !1 !== u && 'insertText' !== n && 'insertCompositionText' !== n && (u = !1);
            var [a] = e.getTargetRanges();
            a &&
                (r = eg.toSlateRange(t, a, {
                    exactMatch: !1,
                    suppressThrow: !0
                }));
            var s = eg.getWindow(t).getSelection();
            if (
                (!r &&
                    s &&
                    ((a = s),
                    (r = eg.toSlateRange(t, s, {
                        exactMatch: !1,
                        suppressThrow: !0
                    }))),
                !!(r = null !== (L = r) && void 0 !== L ? L : t.selection))
            ) {
                var l = !0;
                if (n.startsWith('delete')) {
                    if (d.e6.isExpanded(r)) {
                        var [c, _] = d.e6.edges(r);
                        if (d.NB.leaf(t, c.path).text.length === c.offset && 0 === _.offset) {
                            var E = d.ML.next(t, {
                                at: c.path,
                                match: d.xv.isText
                            });
                            E &&
                                d.y$.equals(E[1], _.path) &&
                                (r = {
                                    anchor: _,
                                    focus: _
                                });
                        }
                    }
                    var f = n.endsWith('Backward') ? 'backward' : 'forward',
                        [h, I] = d.e6.edges(r),
                        [T, g] = d.ML.leaf(t, h.path),
                        S = {
                            text: '',
                            start: h.offset,
                            end: I.offset
                        },
                        v = G.get(t),
                        N = null == v ? void 0 : v.find((e) => d.y$.equals(e.path, g)),
                        O = N ? [N.diff, S] : [S];
                    if ((0 === e8(T.text, ...O).length && (l = !1), d.e6.isExpanded(r))) {
                        if (l && d.y$.equals(r.anchor.path, r.focus.path)) {
                            var C = {
                                path: r.anchor.path,
                                offset: h.offset
                            };
                            return (
                                A(d.ML.range(t, C, C)),
                                p(r.anchor.path, {
                                    text: '',
                                    end: I.offset,
                                    start: h.offset
                                })
                            );
                        }
                        return m(() => d.ML.deleteFragment(t, { direction: f }), { at: r });
                    }
                }
                switch (n) {
                    case 'deleteByComposition':
                    case 'deleteByCut':
                    case 'deleteByDrag':
                        return m(() => d.ML.deleteFragment(t), { at: r });
                    case 'deleteContent':
                    case 'deleteContentForward':
                        var { anchor: y } = r;
                        if (l && d.e6.isCollapsed(r)) {
                            var b = d.NB.leaf(t, y.path);
                            if (y.offset < b.text.length)
                                return p(y.path, {
                                    text: '',
                                    start: y.offset,
                                    end: y.offset + 1
                                });
                        }
                        return m(() => d.ML.deleteForward(t), { at: r });
                    case 'deleteContentBackward':
                        var L,
                            D,
                            { anchor: M } = r,
                            P = z(a) ? a.isCollapsed : !!(null !== (D = a) && void 0 !== D && D.collapsed);
                        if (l && P && d.e6.isCollapsed(r) && M.offset > 0)
                            return p(M.path, {
                                text: '',
                                start: M.offset - 1,
                                end: M.offset
                            });
                        return m(() => d.ML.deleteBackward(t), { at: r });
                    case 'deleteEntireSoftLine':
                        return m(
                            () => {
                                d.ML.deleteBackward(t, { unit: 'line' }), d.ML.deleteForward(t, { unit: 'line' });
                            },
                            { at: r }
                        );
                    case 'deleteHardLineBackward':
                        return m(() => d.ML.deleteBackward(t, { unit: 'block' }), { at: r });
                    case 'deleteSoftLineBackward':
                        return m(() => d.ML.deleteBackward(t, { unit: 'line' }), { at: r });
                    case 'deleteHardLineForward':
                        return m(() => d.ML.deleteForward(t, { unit: 'block' }), { at: r });
                    case 'deleteSoftLineForward':
                        return m(() => d.ML.deleteForward(t, { unit: 'line' }), { at: r });
                    case 'deleteWordBackward':
                        return m(() => d.ML.deleteBackward(t, { unit: 'word' }), { at: r });
                    case 'deleteWordForward':
                        return m(() => d.ML.deleteForward(t, { unit: 'word' }), { at: r });
                    case 'insertLineBreak':
                        return m(() => d.ML.insertSoftBreak(t), { at: r });
                    case 'insertParagraph':
                        return m(() => d.ML.insertBreak(t), { at: r });
                    case 'insertCompositionText':
                    case 'deleteCompositionText':
                    case 'insertFromComposition':
                    case 'insertFromDrop':
                    case 'insertFromPaste':
                    case 'insertFromYank':
                    case 'insertReplacementText':
                    case 'insertText':
                        if (tf(i)) return m(() => eg.insertData(t, i), { at: r });
                        var U = null != i ? i : '';
                        if ((w.get(t) && (U = U.replace('\uFEFF', '')), 'insertText' === n && /.*\n.*\n$/.test(U) && (U = U.slice(0, -1)), U.includes('\n')))
                            return m(
                                () => {
                                    var e = U.split('\n');
                                    e.forEach((n, r) => {
                                        n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t);
                                    });
                                },
                                { at: r }
                            );
                        if (d.y$.equals(r.anchor.path, r.focus.path)) {
                            var [x, k] = d.e6.edges(r),
                                B = {
                                    start: x.offset,
                                    end: k.offset,
                                    text: U
                                };
                            if (U && u && 'insertCompositionText' === n) {
                                var F = u.start + u.text.search(/\S|$/);
                                B.start + B.text.search(/\S|$/) === F + 1 && B.end === u.start + u.text.length ? ((B.start -= 1), (u = null), R()) : (u = !1);
                            } else u = 'insertText' === n && (null === u ? B : !!(u && d.e6.isCollapsed(r)) && u.end + u.text.length === x.offset && tc(tc({}, u), {}, { text: u.text + U }));
                            if (l) {
                                p(x.path, B);
                                return;
                            }
                        }
                        return m(() => d.ML.insertText(t, U), { at: r });
                }
            }
        },
        T = () => !!k.get(t),
        g = () => {
            var e;
            return !!(null !== (e = G.get(t)) && void 0 !== e && e.length);
        },
        S = () => T() || g(),
        A = (e) => {
            B.set(t, e), o && (clearTimeout(o), (o = null));
            var { selection: n } = t;
            if (!!e) {
                var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
                    i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((r && u) || i) && (u = !1), (r || g()) && (o = setTimeout(E, t_));
            }
        },
        v = () => {
            (T() || !g()) && E();
        },
        O = (e) => {
            !g() && (h(!0), setTimeout(h));
        },
        R = () => {
            !T() && (s = setTimeout(E));
        },
        C = (e) => {
            if (!(g() || T())) {
                if (e.some((n) => ei(t, n, e))) {
                    var n;
                    null === (n = F.get(t)) || void 0 === n || n();
                }
            }
        };
    return {
        flush: E,
        scheduleFlush: R,
        hasPendingDiffs: g,
        hasPendingAction: T,
        hasPendingChanges: S,
        isFlushing: () => i,
        handleUserSelect: A,
        handleCompositionEnd: f,
        handleCompositionStart: (e) => {
            D.set(t, !0), a && (clearTimeout(a), (a = null));
        },
        handleDOMBeforeInput: I,
        handleKeyDown: O,
        handleDomMutations: C,
        handleInput: v
    };
}
function tp() {
    var e = (0, u.useRef)(!1);
    return (
        (0, u.useEffect)(
            () => (
                (e.current = !0),
                () => {
                    e.current = !1;
                }
            ),
            []
        ),
        e.current
    );
}
function tm(e, t, n) {
    var [r] = (0, u.useState)(() => new MutationObserver(t));
    eC(() => {
        r.takeRecords();
    }),
        (0, u.useEffect)(() => {
            if (!e.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
            return r.observe(e.current, n), () => r.disconnect();
        }, []);
}
var tI = ['node'];
function tT(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tT(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tT(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tS = {
    subtree: !0,
    childList: !0,
    characterData: !0
};
function tA(e) {
    var { node: t } = e,
        n = m(e, tI);
    if (!el) return null;
    var r = eP(),
        i = tp(),
        [a] = (0, u.useState)(() => th(tg({ editor: r }, n)));
    return tm(t, a.handleDomMutations, tS), U.set(r, a.scheduleFlush), i && a.flush(), a;
}
function tv() {
    var e = eP(),
        t = (0, u.useRef)(!1),
        n = (0, u.useRef)(0),
        r = (0, u.useCallback)(() => {
            if (!t.current) {
                t.current = !0;
                var r = eg.getWindow(e);
                r.cancelAnimationFrame(n.current),
                    (n.current = r.requestAnimationFrame(() => {
                        t.current = !1;
                    }));
            }
        }, []);
    return (
        (0, u.useEffect)(() => () => cancelAnimationFrame(n.current), []),
        {
            receivedUserInput: t,
            onUserInput: r
        }
    );
}
var tN = ['autoFocus', 'decorate', 'onDOMBeforeInput', 'placeholder', 'readOnly', 'renderElement', 'renderLeaf', 'renderPlaceholder', 'scrollSelectionIntoView', 'style', 'as', 'disableDefaultStyles'],
    tO = ['text'];
function tR(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tR(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tR(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ty = (e) => u.createElement(u.Fragment, null, eW(e)),
    tb = (e) => {
        var t,
            n,
            r = (0, u.useCallback)((e) => u.createElement(tL, Object.assign({}, e)), []),
            { autoFocus: a, decorate: s = tD, onDOMBeforeInput: c, placeholder: _, readOnly: E = !1, renderElement: f, renderLeaf: h, renderPlaceholder: p = r, scrollSelectionIntoView: I = tM, style: T = {}, as: g = 'div', disableDefaultStyles: S = !1 } = e,
            C = m(e, tN),
            y = eQ(),
            [P, U] = (0, u.useState)(!1),
            G = (0, u.useRef)(null),
            k = (0, u.useRef)([]),
            { onUserInput: B, receivedUserInput: H } = tv(),
            [, j] = (0, u.useReducer)((e) => e + 1, 0);
        F.set(y, j), b.set(y, E);
        var z = (0, u.useMemo)(
            () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }),
            []
        );
        (0, u.useLayoutEffect)(
            () => () => {
                if (null != z && null != z.latestElement) z.latestElement.remove(), (z.latestElement = null);
            },
            []
        ),
            (0, u.useEffect)(() => {
                G.current && a && G.current.focus();
            }, [a]);
        var q = (0, u.useCallback)(
                l()(() => {
                    if ((el || !eg.isComposing(y)) && (!z.isUpdatingSelection || (null != $ && $.isFlushing())) && !z.isDraggingInternally) {
                        var e = eg.findDocumentOrShadowRoot(y),
                            { activeElement: t } = e,
                            n = eg.toDOMNode(y, y),
                            r = e.getSelection();
                        if ((t === n ? ((z.latestElement = t), L.set(y, !0)) : L.delete(y), !r)) return d.YR.deselect(y);
                        var { anchorNode: i, focusNode: a } = r,
                            o = eg.hasEditableTarget(y, i) || eg.isTargetInsideNonReadonlyVoid(y, i),
                            s = eg.hasEditableTarget(y, a) || eg.isTargetInsideNonReadonlyVoid(y, a);
                        if (o && s) {
                            var l = eg.toSlateRange(y, r, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            l && (eg.isComposing(y) || (null != $ && $.hasPendingChanges()) || (null != $ && $.isFlushing()) ? null == $ || $.handleUserSelect(l) : d.YR.select(y, l));
                        }
                        E && (!o || !s) && d.YR.deselect(y);
                    }
                }, 100),
                [E]
            ),
            X = (0, u.useMemo)(() => o()(q, 0), [q]),
            $ = tA({
                node: G,
                onDOMSelectionChange: q,
                scheduleOnDOMSelectionChange: X
            });
        eC(() => {
            G.current && (e = Y(G.current)) ? (A.set(y, e), v.set(y, G.current), R.set(y, G.current), O.set(G.current, y)) : R.delete(y);
            var e,
                { selection: t } = y,
                n = eg.findDocumentOrShadowRoot(y).getSelection();
            if (!(!n || !eg.isFocused(y) || (null != $ && $.hasPendingAction()))) {
                var r = (e) => {
                        var r = 'None' !== n.type;
                        if (!!t || !!r) {
                            var i = v.get(y),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var o = eg.toSlateRange(y, n, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                });
                                if (o && d.e6.equals(o, t)) {
                                    if (!z.hasMarkPlaceholder) return;
                                    var s,
                                        { anchorNode: l } = n;
                                    if (null != l && null !== (s = l.parentElement) && void 0 !== s && s.hasAttribute('data-slate-mark-placeholder')) return;
                                }
                            }
                            if (t && !eg.hasRange(y, t)) {
                                y.selection = eg.toSlateRange(y, n, {
                                    exactMatch: !1,
                                    suppressThrow: !0
                                });
                                return;
                            }
                            z.isUpdatingSelection = !0;
                            var u = t && eg.toDOMRange(y, t);
                            return u ? (d.e6.isBackward(t) ? n.setBaseAndExtent(u.endContainer, u.endOffset, u.startContainer, u.startOffset) : n.setBaseAndExtent(u.startContainer, u.startOffset, u.endContainer, u.endOffset), I(y, u)) : n.removeAllRanges(), u;
                        }
                    },
                    i = r(),
                    a = (null == $ ? void 0 : $.isFlushing()) === 'action';
                if (!el || !a) {
                    setTimeout(() => {
                        i && eu && eg.toDOMNode(y, y).focus(), (z.isUpdatingSelection = !1);
                    });
                    return;
                }
                var o = null,
                    s = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    eg.toDOMNode(y, y).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (o = setTimeout(() => {
                                    e(!0), (z.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(s), o && clearTimeout(o);
                };
            }
        });
        var J = (0, u.useCallback)(
                (e) => {
                    if ((B(), !E && eg.hasEditableTarget(y, e.target) && !tU(e, c))) {
                        if ($) return $.handleDOMBeforeInput(e);
                        X.flush(), q.flush();
                        var { selection: t } = y,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = 'insertCompositionText' === n || 'deleteCompositionText' === n;
                        if (i && eg.isComposing(y)) return;
                        var a = !1;
                        if ('insertText' === n && t && d.e6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                            (a = !0), y.marks && (a = !1);
                            var { anchor: o } = t,
                                [s, l] = eg.toDOMPoint(y, o),
                                u = null === (h = s.parentElement) || void 0 === h ? void 0 : h.closest('a'),
                                _ = eg.getWindow(y);
                            if (a && u && eg.hasDOMNode(y, u)) {
                                var f,
                                    h,
                                    p,
                                    m,
                                    I = null == _ ? void 0 : _.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                I === s && (null === (m = I.textContent) || void 0 === m ? void 0 : m.length) === l && (a = !1);
                            }
                            if (a && s.parentElement && (null == _ ? void 0 : null === (p = _.getComputedStyle(s.parentElement)) || void 0 === p ? void 0 : p.whiteSpace) === 'pre') {
                                var T = d.ML.above(y, {
                                    at: o.path,
                                    match: (e) => d.W_.isElement(e) && d.ML.isBlock(y, e)
                                });
                                T && d.NB.string(T[0]).includes('\t') && (a = !1);
                            }
                        }
                        if (!n.startsWith('delete') || n.startsWith('deleteBy')) {
                            var [g] = e.getTargetRanges();
                            if (g) {
                                var S = eg.toSlateRange(y, g, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                if (!t || !d.e6.equals(t, S)) {
                                    a = !1;
                                    var A = !i && y.selection && d.ML.rangeRef(y, y.selection);
                                    d.YR.select(y, S), A && M.set(y, A);
                                }
                            }
                        }
                        if (!i) {
                            if ((!a && e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith('delete'))) {
                                var v = n.endsWith('Backward') ? 'backward' : 'forward';
                                d.ML.deleteFragment(y, { direction: v });
                                return;
                            }
                            switch (n) {
                                case 'deleteByComposition':
                                case 'deleteByCut':
                                case 'deleteByDrag':
                                    d.ML.deleteFragment(y);
                                    break;
                                case 'deleteContent':
                                case 'deleteContentForward':
                                    d.ML.deleteForward(y);
                                    break;
                                case 'deleteContentBackward':
                                    d.ML.deleteBackward(y);
                                    break;
                                case 'deleteEntireSoftLine':
                                    d.ML.deleteBackward(y, { unit: 'line' }), d.ML.deleteForward(y, { unit: 'line' });
                                    break;
                                case 'deleteHardLineBackward':
                                    d.ML.deleteBackward(y, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineBackward':
                                    d.ML.deleteBackward(y, { unit: 'line' });
                                    break;
                                case 'deleteHardLineForward':
                                    d.ML.deleteForward(y, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineForward':
                                    d.ML.deleteForward(y, { unit: 'line' });
                                    break;
                                case 'deleteWordBackward':
                                    d.ML.deleteBackward(y, { unit: 'word' });
                                    break;
                                case 'deleteWordForward':
                                    d.ML.deleteForward(y, { unit: 'word' });
                                    break;
                                case 'insertLineBreak':
                                    d.ML.insertSoftBreak(y);
                                    break;
                                case 'insertParagraph':
                                    d.ML.insertBreak(y);
                                    break;
                                case 'insertFromComposition':
                                case 'insertFromDrop':
                                case 'insertFromPaste':
                                case 'insertFromYank':
                                case 'insertReplacementText':
                                case 'insertText':
                                    'insertFromComposition' === n && eg.isComposing(y) && (U(!1), D.set(y, !1)), (null == r ? void 0 : r.constructor.name) === 'DataTransfer' ? eg.insertData(y, r) : 'string' == typeof r && (a ? k.current.push(() => d.ML.insertText(y, r)) : d.ML.insertText(y, r));
                            }
                            var N = null === (f = M.get(y)) || void 0 === f ? void 0 : f.unref();
                            M.delete(y), N && (!y.selection || !d.e6.equals(y.selection, N)) && d.YR.select(y, N);
                        }
                    }
                },
                [E, c]
            ),
            ee = (0, u.useCallback)(
                (e) => {
                    null == e ? (q.cancel(), X.cancel(), v.delete(y), R.delete(y), G.current && eT && G.current.removeEventListener('beforeinput', J)) : eT && e.addEventListener('beforeinput', J), (G.current = e);
                },
                [G, J, q, X]
            );
        eC(() => {
            var e = eg.getWindow(y);
            return (
                e.document.addEventListener('selectionchange', X),
                () => {
                    e.document.removeEventListener('selectionchange', X);
                }
            );
        }, [X]);
        var et = s([y, []]);
        if (_ && 1 === y.children.length && 1 === Array.from(d.NB.texts(y)).length && '' === d.NB.string(y) && !P) {
            var en = d.ML.start(y, []);
            et.push({
                [Z]: !0,
                placeholder: _,
                anchor: en,
                focus: en
            });
        }
        var { marks: er } = y;
        if (((z.hasMarkPlaceholder = !1), y.selection && d.e6.isCollapsed(y.selection) && er)) {
            var { anchor: ei } = y.selection,
                ea = d.NB.leaf(y, ei.path),
                es = m(ea, tO);
            if (!d.xv.equals(ea, er, { loose: !0 })) {
                z.hasMarkPlaceholder = !0;
                var ed = Object.fromEntries(Object.keys(es).map((e) => [e, null]));
                et.push(
                    tC(
                        tC(tC({ [V]: !0 }, ed), er),
                        {},
                        {
                            anchor: ei,
                            focus: ei
                        }
                    )
                );
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = y;
                if (e) {
                    var { anchor: t } = e,
                        n = d.NB.leaf(y, t.path);
                    if (er && !d.xv.equals(n, er, { loose: !0 })) {
                        w.set(y, er);
                        return;
                    }
                }
                w.delete(y);
            });
        });
        var eE = null === (t = N.get(y)) || void 0 === t ? void 0 : null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height;
        return u.createElement(
            eK.Provider,
            { value: E },
            u.createElement(
                eV.Provider,
                { value: s },
                u.createElement(
                    e6,
                    {
                        node: G,
                        receivedUserInput: H
                    },
                    u.createElement(
                        g,
                        Object.assign(
                            {
                                role: E ? void 0 : 'textbox',
                                'aria-multiline': !E || void 0
                            },
                            C,
                            {
                                spellCheck: (!!eT || !eI) && C.spellCheck,
                                autoCorrect: eT || !eI ? C.autoCorrect : 'false',
                                autoCapitalize: eT || !eI ? C.autoCapitalize : 'false',
                                'data-slate-editor': !0,
                                'data-slate-node': 'value',
                                contentEditable: !E,
                                zindex: -1,
                                suppressContentEditableWarning: !0,
                                ref: ee,
                                style: tC(
                                    tC(
                                        {},
                                        S
                                            ? {}
                                            : tC(
                                                  {
                                                      position: 'relative',
                                                      outline: 'none',
                                                      whiteSpace: 'pre-wrap',
                                                      wordWrap: 'break-word'
                                                  },
                                                  eE ? { minHeight: eE } : {}
                                              )
                                    ),
                                    T
                                ),
                                onBeforeInput: (0, u.useCallback)(
                                    (e) => {
                                        if (!eT && !E && !tP(e, C.onBeforeInput) && eg.hasSelectableTarget(y, e.target) && (e.preventDefault(), !eg.isComposing(y))) {
                                            var t = e.data;
                                            d.ML.insertText(y, t);
                                        }
                                    },
                                    [E]
                                ),
                                onInput: (0, u.useCallback)((e) => {
                                    if (!tP(e, C.onInput)) {
                                        if ($) {
                                            $.handleInput();
                                            return;
                                        }
                                        for (var t of k.current) t();
                                        k.current = [];
                                    }
                                }, []),
                                onBlur: (0, u.useCallback)(
                                    (e) => {
                                        if (E || z.isUpdatingSelection || !eg.hasSelectableTarget(y, e.target) || tP(e, C.onBlur)) return;
                                        var t = eg.findDocumentOrShadowRoot(y);
                                        if (z.latestElement === t.activeElement) return;
                                        var { relatedTarget: n } = e;
                                        if (!(n === eg.toDOMNode(y, y) || (W(n) && n.hasAttribute('data-slate-spacer')))) {
                                            if (null != n && K(n) && eg.hasDOMNode(y, n)) {
                                                var r = eg.toSlateNode(y, n);
                                                if (d.W_.isElement(r) && !y.isVoid(r)) return;
                                            }
                                            if (ec) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            L.delete(y);
                                        }
                                    },
                                    [E, C.onBlur]
                                ),
                                onClick: (0, u.useCallback)(
                                    (e) => {
                                        if (eg.hasTarget(y, e.target) && !tP(e, C.onClick) && K(e.target)) {
                                            var t = eg.toSlateNode(y, e.target),
                                                n = eg.findPath(y, t);
                                            if (!d.ML.hasPath(y, n) || d.NB.get(y, n) !== t) return;
                                            if (e.detail === eX && n.length >= 1) {
                                                var r = n;
                                                if (!(d.W_.isElement(t) && d.ML.isBlock(y, t))) {
                                                    var i,
                                                        a = d.ML.above(y, {
                                                            match: (e) => d.W_.isElement(e) && d.ML.isBlock(y, e),
                                                            at: n
                                                        });
                                                    r = null !== (i = null == a ? void 0 : a[1]) && void 0 !== i ? i : n.slice(0, 1);
                                                }
                                                var o = d.ML.range(y, r);
                                                d.YR.select(y, o);
                                                return;
                                            }
                                            if (!E) {
                                                var s = d.ML.start(y, n),
                                                    l = d.ML.end(y, n),
                                                    u = d.ML.void(y, { at: s }),
                                                    c = d.ML.void(y, { at: l });
                                                if (u && c && d.y$.equals(u[1], c[1])) {
                                                    var _ = d.ML.range(y, s);
                                                    d.YR.select(y, _);
                                                }
                                            }
                                        }
                                    },
                                    [E, C.onClick]
                                ),
                                onCompositionEnd: (0, u.useCallback)(
                                    (e) => {
                                        if (eg.hasSelectableTarget(y, e.target)) {
                                            if ((eg.isComposing(y) && (U(!1), D.set(y, !1)), null == $ || $.handleCompositionEnd(e), !tP(e, C.onCompositionEnd) && !el)) {
                                                if (!ec && !eh && !eo && !em && !ep && e.data) {
                                                    var t = w.get(y);
                                                    w.delete(y), void 0 !== t && (x.set(y, y.marks), (y.marks = t)), d.ML.insertText(y, e.data);
                                                    var n = x.get(y);
                                                    x.delete(y), void 0 !== n && (y.marks = n);
                                                }
                                            }
                                        }
                                    },
                                    [C.onCompositionEnd]
                                ),
                                onCompositionUpdate: (0, u.useCallback)(
                                    (e) => {
                                        eg.hasSelectableTarget(y, e.target) && !tP(e, C.onCompositionUpdate) && !eg.isComposing(y) && (U(!0), D.set(y, !0));
                                    },
                                    [C.onCompositionUpdate]
                                ),
                                onCompositionStart: (0, u.useCallback)(
                                    (e) => {
                                        if (eg.hasSelectableTarget(y, e.target)) {
                                            if ((null == $ || $.handleCompositionStart(e), !tP(e, C.onCompositionStart) && !el)) {
                                                U(!0);
                                                var { selection: t } = y;
                                                if (t) {
                                                    if (d.e6.isExpanded(t)) {
                                                        d.ML.deleteFragment(y);
                                                        return;
                                                    }
                                                    var n = d.ML.above(y, {
                                                        match: (e) => d.W_.isElement(e) && d.ML.isInline(y, e),
                                                        mode: 'highest'
                                                    });
                                                    if (n) {
                                                        var [, r] = n;
                                                        if (d.ML.isEnd(y, t.anchor, r)) {
                                                            var i = d.ML.after(y, r);
                                                            d.YR.setSelection(y, {
                                                                anchor: i,
                                                                focus: i
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [C.onCompositionStart]
                                ),
                                onCopy: (0, u.useCallback)(
                                    (e) => {
                                        eg.hasSelectableTarget(y, e.target) && !tP(e, C.onCopy) && (e.preventDefault(), eg.setFragmentData(y, e.clipboardData, 'copy'));
                                    },
                                    [C.onCopy]
                                ),
                                onCut: (0, u.useCallback)(
                                    (e) => {
                                        if (!E && eg.hasSelectableTarget(y, e.target) && !tP(e, C.onCut)) {
                                            e.preventDefault(), eg.setFragmentData(y, e.clipboardData, 'cut');
                                            var { selection: t } = y;
                                            if (t) {
                                                if (d.e6.isExpanded(t)) d.ML.deleteFragment(y);
                                                else {
                                                    var n = d.NB.parent(y, t.anchor.path);
                                                    d.ML.isVoid(y, n) && d.YR.delete(y);
                                                }
                                            }
                                        }
                                    },
                                    [E, C.onCut]
                                ),
                                onDragOver: (0, u.useCallback)(
                                    (e) => {
                                        if (eg.hasTarget(y, e.target) && !tP(e, C.onDragOver)) {
                                            var t = eg.toSlateNode(y, e.target);
                                            d.W_.isElement(t) && d.ML.isVoid(y, t) && e.preventDefault();
                                        }
                                    },
                                    [C.onDragOver]
                                ),
                                onDragStart: (0, u.useCallback)(
                                    (e) => {
                                        if (!E && eg.hasTarget(y, e.target) && !tP(e, C.onDragStart)) {
                                            var t = eg.toSlateNode(y, e.target),
                                                n = eg.findPath(y, t);
                                            if (
                                                (d.W_.isElement(t) && d.ML.isVoid(y, t)) ||
                                                d.ML.void(y, {
                                                    at: n,
                                                    voids: !0
                                                })
                                            ) {
                                                var r = d.ML.range(y, n);
                                                d.YR.select(y, r);
                                            }
                                            (z.isDraggingInternally = !0), eg.setFragmentData(y, e.dataTransfer, 'drag');
                                        }
                                    },
                                    [E, C.onDragStart]
                                ),
                                onDrop: (0, u.useCallback)(
                                    (e) => {
                                        if (!E && eg.hasTarget(y, e.target) && !tP(e, C.onDrop)) {
                                            e.preventDefault();
                                            var t = y.selection,
                                                n = eg.findEventRange(y, e),
                                                r = e.dataTransfer;
                                            d.YR.select(y, n),
                                                z.isDraggingInternally &&
                                                    t &&
                                                    !d.e6.equals(t, n) &&
                                                    !d.ML.void(y, {
                                                        at: n,
                                                        voids: !0
                                                    }) &&
                                                    d.YR.delete(y, { at: t }),
                                                eg.insertData(y, r),
                                                !eg.isFocused(y) && eg.focus(y);
                                        }
                                        z.isDraggingInternally = !1;
                                    },
                                    [E, C.onDrop]
                                ),
                                onDragEnd: (0, u.useCallback)(
                                    (e) => {
                                        !E && z.isDraggingInternally && C.onDragEnd && eg.hasTarget(y, e.target) && C.onDragEnd(e), (z.isDraggingInternally = !1);
                                    },
                                    [E, C.onDragEnd]
                                ),
                                onFocus: (0, u.useCallback)(
                                    (e) => {
                                        if (!E && !z.isUpdatingSelection && eg.hasEditableTarget(y, e.target) && !tP(e, C.onFocus)) {
                                            var t = eg.toDOMNode(y, y),
                                                n = eg.findDocumentOrShadowRoot(y);
                                            if (((z.latestElement = n.activeElement), eu && e.target !== t)) {
                                                t.focus();
                                                return;
                                            }
                                            L.set(y, !0);
                                        }
                                    },
                                    [E, C.onFocus]
                                ),
                                onKeyDown: (0, u.useCallback)(
                                    (e) => {
                                        if (!E && eg.hasEditableTarget(y, e.target)) {
                                            null == $ || $.handleKeyDown(e);
                                            var { nativeEvent: t } = e;
                                            if ((eg.isComposing(y) && !1 === t.isComposing && (D.set(y, !1), U(!1)), !(tP(e, C.onKeyDown) || eg.isComposing(y)))) {
                                                var { selection: n } = y,
                                                    r = y.children[null !== n ? n.focus.path[0] : 0],
                                                    a = 'rtl' === i()(d.NB.string(r));
                                                if (e2.isRedo(t)) {
                                                    e.preventDefault();
                                                    var o = y;
                                                    'function' == typeof o.redo && o.redo();
                                                    return;
                                                }
                                                if (e2.isUndo(t)) {
                                                    e.preventDefault();
                                                    var s = y;
                                                    'function' == typeof s.undo && s.undo();
                                                    return;
                                                }
                                                if (e2.isMoveLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(y, {
                                                            unit: 'line',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveLineForward(t)) {
                                                    e.preventDefault(), d.YR.move(y, { unit: 'line' });
                                                    return;
                                                }
                                                if (e2.isExtendLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(y, {
                                                            unit: 'line',
                                                            edge: 'focus',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e2.isExtendLineForward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(y, {
                                                            unit: 'line',
                                                            edge: 'focus'
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveBackward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(y, { reverse: !a }) : d.YR.collapse(y, { edge: 'start' });
                                                    return;
                                                }
                                                if (e2.isMoveForward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(y, { reverse: a }) : d.YR.collapse(y, { edge: 'end' });
                                                    return;
                                                }
                                                if (e2.isMoveWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(y, { edge: 'focus' }),
                                                        d.YR.move(y, {
                                                            unit: 'word',
                                                            reverse: !a
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(y, { edge: 'focus' }),
                                                        d.YR.move(y, {
                                                            unit: 'word',
                                                            reverse: a
                                                        });
                                                    return;
                                                }
                                                if (eT) {
                                                    if ((e_ || ec) && n && (e2.isDeleteBackward(t) || e2.isDeleteForward(t)) && d.e6.isCollapsed(n)) {
                                                        var l = d.NB.parent(y, n.anchor.path);
                                                        if (d.W_.isElement(l) && d.ML.isVoid(y, l) && (d.ML.isInline(y, l) || d.ML.isBlock(y, l))) {
                                                            e.preventDefault(), d.ML.deleteBackward(y, { unit: 'block' });
                                                            return;
                                                        }
                                                    }
                                                } else {
                                                    if (e2.isBold(t) || e2.isItalic(t) || e2.isTransposeCharacter(t)) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                    if (e2.isSoftBreak(t)) {
                                                        e.preventDefault(), d.ML.insertSoftBreak(y);
                                                        return;
                                                    }
                                                    if (e2.isSplitBlock(t)) {
                                                        e.preventDefault(), d.ML.insertBreak(y);
                                                        return;
                                                    }
                                                    if (e2.isDeleteBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'backward' }) : d.ML.deleteBackward(y);
                                                        return;
                                                    }
                                                    if (e2.isDeleteForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'forward' }) : d.ML.deleteForward(y);
                                                        return;
                                                    }
                                                    if (e2.isDeleteLineBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'backward' }) : d.ML.deleteBackward(y, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteLineForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'forward' }) : d.ML.deleteForward(y, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteWordBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'backward' }) : d.ML.deleteBackward(y, { unit: 'word' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteWordForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(y, { direction: 'forward' }) : d.ML.deleteForward(y, { unit: 'word' });
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [E, C.onKeyDown]
                                ),
                                onPaste: (0, u.useCallback)(
                                    (e) => {
                                        !E && eg.hasEditableTarget(y, e.target) && !tP(e, C.onPaste) && (!eT || Q(e.nativeEvent) || ec) && (e.preventDefault(), eg.insertData(y, e.clipboardData));
                                    },
                                    [E, C.onPaste]
                                )
                            }
                        ),
                        u.createElement(ty, {
                            decorations: et,
                            node: y,
                            renderElement: f,
                            renderPlaceholder: p,
                            renderLeaf: h,
                            selection: y.selection
                        })
                    )
                )
            )
        );
    },
    tL = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n, el && u.createElement('br', null));
    },
    tD = () => [],
    tM = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.e6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)), (0, c.Z)(n, { scrollMode: 'if-needed' }), delete n.getBoundingClientRect;
        }
    },
    tP = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tU = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    tw = (0, u.createContext)(!1),
    tx = () => (0, u.useContext)(tw);
function tG(e) {
    return e instanceof Error;
}
var tk = (0, u.createContext)({}),
    tB = (e, t) => e === t;
function tF(e) {
    var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tB,
        [, r] = useReducer((e) => e + 1, 0),
        i = useContext(tk);
    if (!i) throw Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
    var { getSlate: a, addEventListener: o } = i,
        s = useRef(),
        l = useRef(() => null),
        u = useRef(null);
    try {
        t = e !== l.current || s.current ? e(a()) : u.current;
    } catch (e) {
        throw (s.current && tG(e) && (e.message += '\nThe error may be correlated with this previous error:\n'.concat(s.current.stack, '\n\n')), e);
    }
    return (
        eC(() => {
            (l.current = e), (u.current = t), (s.current = void 0);
        }),
        eC(() => {
            function e() {
                try {
                    var e = l.current(a());
                    if (n(e, u.current)) return;
                    u.current = e;
                } catch (e) {
                    s.current = e;
                }
                r();
            }
            var t = o(e);
            return e(), () => t();
        }, [o, a]),
        t
    );
}
function tZ(e) {
    var t = (0, u.useRef)([]).current,
        n = (0, u.useRef)({ editor: e }).current,
        r = (0, u.useCallback)((e) => {
            (n.editor = e), t.forEach((t) => t(e));
        }, []);
    return {
        selectorContext: (0, u.useMemo)(
            () => ({
                getSlate: () => n.editor,
                addEventListener: (e) => (
                    t.push(e),
                    () => {
                        t.splice(t.indexOf(e), 1);
                    }
                )
            }),
            [t, n]
        ),
        onChange: r
    };
}
var tV = ['editor', 'children', 'onChange', 'value'],
    tH = (e) => {
        var { editor: t, children: n, onChange: r, value: i } = e,
            a = m(e, tV),
            o = (0, u.useRef)(!1),
            [s, l] = u.useState(() => {
                if (!d.NB.isNodeList(i)) throw Error('[Slate] value is invalid! Expected a list of elements but got: '.concat(d.o4.stringify(i)));
                if (!d.ML.isEditor(t)) throw Error('[Slate] editor is invalid! You passed: '.concat(d.o4.stringify(t)));
                return (
                    (t.children = i),
                    Object.assign(t, a),
                    {
                        v: 0,
                        editor: t
                    }
                );
            }),
            { selectorContext: c, onChange: _ } = tZ(t),
            E = (0, u.useCallback)(() => {
                r && r(t.children),
                    l((e) => ({
                        v: e.v + 1,
                        editor: t
                    })),
                    _(t);
            }, [r]);
        (0, u.useEffect)(
            () => (
                P.set(t, E),
                () => {
                    P.set(t, () => {}), (o.current = !0);
                }
            ),
            [E]
        );
        var [f, h] = (0, u.useState)(eg.isFocused(t));
        return (
            (0, u.useEffect)(() => {
                h(eg.isFocused(t));
            }),
            eC(() => {
                var e = () => h(eg.isFocused(t));
                return ea
                    ? (document.addEventListener('focusin', e),
                      document.addEventListener('focusout', e),
                      () => {
                          document.removeEventListener('focusin', e), document.removeEventListener('focusout', e);
                      })
                    : (document.addEventListener('focus', e, !0),
                      document.addEventListener('blur', e, !0),
                      () => {
                          document.removeEventListener('focus', e, !0), document.removeEventListener('blur', e, !0);
                      });
            }, []),
            u.createElement(tk.Provider, { value: c }, u.createElement(eq.Provider, { value: s }, u.createElement(eM.Provider, { value: s.editor }, u.createElement(tw.Provider, { value: f }, n))))
        );
    },
    tY = (e, t) => (!e && !t) || (!!e && !!t && Range.equals(e, t)),
    tj = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tW = (e, t, n) => {
        var r = eg.toDOMRange(e, t).getBoundingClientRect(),
            i = eg.toDOMRange(e, n).getBoundingClientRect();
        return tj(r, i) && tj(i, r);
    },
    tK = (e, t) => {
        var n = d.ML.range(e, d.e6.end(t)),
            r = Array.from(d.ML.positions(e, { at: t })),
            i = 0,
            a = r.length,
            o = Math.floor(a / 2);
        if (tW(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
        if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
        for (; o !== r.length && o !== i; ) tW(e, d.ML.range(e, r[o]), n) ? (a = o) : (i = o), (o = Math.floor((i + a) / 2));
        return d.ML.range(e, r[a], n);
    };
function tz(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tq(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tz(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tz(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tQ = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x-slate-fragment',
            n = e,
            { apply: r, onChange: i, deleteBackward: a, addMark: o, removeMark: s } = n;
        return (
            y.set(n, new WeakMap()),
            (n.addMark = (e, t) => {
                var r, i;
                null === (r = U.get(n)) || void 0 === r || r(), !w.get(n) && null !== (i = G.get(n)) && void 0 !== i && i.length && w.set(n, null), x.delete(n), o(e, t);
            }),
            (n.removeMark = (e) => {
                var t;
                !w.get(n) && null !== (t = G.get(n)) && void 0 !== t && t.length && w.set(n, null), x.delete(n), s(e);
            }),
            (n.deleteBackward = (e) => {
                if ('line' !== e) return a(e);
                if (n.selection && d.e6.isCollapsed(n.selection)) {
                    var t = d.ML.above(n, {
                        match: (e) => d.W_.isElement(e) && d.ML.isBlock(n, e),
                        at: n.selection
                    });
                    if (t) {
                        var [, r] = t,
                            i = d.ML.range(n, r, n.selection.anchor),
                            o = tK(n, i);
                        !d.e6.isCollapsed(o) && d.YR.delete(n, { at: o });
                    }
                }
            }),
            (n.apply = (e) => {
                var t,
                    i = [],
                    a = G.get(n);
                if (null != a && a.length) {
                    var o = a.map((t) => tl(t, e)).filter(Boolean);
                    G.set(n, o);
                }
                var s = B.get(n);
                s && B.set(n, ts(n, s, e));
                var l = k.get(n);
                if (null != l && l.at) {
                    var u = d.E9.isPoint(null == l ? void 0 : l.at) ? to(n, l.at, e) : ts(n, l.at, e);
                    k.set(n, u ? tq(tq({}, l), {}, { at: u }) : null);
                }
                switch (e.type) {
                    case 'insert_text':
                    case 'remove_text':
                    case 'set_node':
                    case 'split_node':
                        i.push(...tX(n, e.path));
                        break;
                    case 'set_selection':
                        null === (t = M.get(n)) || void 0 === t || t.unref(), M.delete(n);
                        break;
                    case 'insert_node':
                    case 'remove_node':
                        i.push(...tX(n, d.y$.parent(e.path)));
                        break;
                    case 'merge_node':
                        i.push(...tX(n, d.y$.previous(e.path)));
                        break;
                    case 'move_node':
                        i.push(...tX(n, d.y$.common(d.y$.parent(e.path), d.y$.parent(e.newPath))));
                }
                for (var [c, _] of (r(e), i)) {
                    var [E] = d.ML.node(n, c);
                    C.set(E, _);
                }
            }),
            (n.setFragmentData = (e) => {
                var { selection: r } = n;
                if (!r) return;
                var [i, a] = d.e6.edges(r),
                    o = d.ML.void(n, { at: i.path }),
                    s = d.ML.void(n, { at: a.path });
                if (!d.e6.isCollapsed(r) || !!o) {
                    var l = eg.toDOMRange(n, r),
                        u = l.cloneContents(),
                        c = u.childNodes[0];
                    if (
                        (u.childNodes.forEach((e) => {
                            e.textContent && '' !== e.textContent.trim() && (c = e);
                        }),
                        s)
                    ) {
                        var [_] = s,
                            E = l.cloneRange(),
                            f = eg.toDOMNode(n, _);
                        E.setEndAfter(f), (u = E.cloneContents());
                    }
                    if (
                        (o && (c = u.querySelector('[data-slate-spacer]')),
                        Array.from(u.querySelectorAll('[data-slate-zero-width]')).forEach((e) => {
                            var t = 'n' === e.getAttribute('data-slate-zero-width');
                            e.textContent = t ? '\n' : '';
                        }),
                        q(c))
                    ) {
                        var h = c.ownerDocument.createElement('span');
                        (h.style.whiteSpace = 'pre'), h.appendChild(c), u.appendChild(h), (c = h);
                    }
                    var p = JSON.stringify(n.getFragment()),
                        m = window.btoa(encodeURIComponent(p));
                    c.setAttribute('data-slate-fragment', m), e.setData('application/'.concat(t), m);
                    var I = u.ownerDocument.createElement('div');
                    return I.appendChild(u), I.setAttribute('hidden', 'true'), u.ownerDocument.body.appendChild(I), e.setData('text/html', I.innerHTML), e.setData('text/plain', et(I)), u.ownerDocument.body.removeChild(I), e;
                }
            }),
            (n.insertData = (e) => {
                !n.insertFragmentData(e) && n.insertTextData(e);
            }),
            (n.insertFragmentData = (e) => {
                var r = e.getData('application/'.concat(t)) || er(e);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return n.insertFragment(i), !0;
                }
                return !1;
            }),
            (n.insertTextData = (e) => {
                var t = e.getData('text/plain');
                if (t) {
                    var r = t.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && d.YR.splitNodes(n, { always: !0 }), n.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (n.onChange = (e) => {
                f.unstable_batchedUpdates(() => {
                    var t = P.get(n);
                    t && t(), i(e);
                });
            }),
            n
        );
    },
    tX = (e, t) => {
        var n = [];
        for (var [r, i] of d.ML.levels(e, { at: t })) {
            var a = eg.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
