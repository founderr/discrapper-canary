n.d(t, {
    E7: function () {
        return M;
    },
    Fx: function () {
        return G;
    },
    MT: function () {
        return _;
    },
    QL: function () {
        return D;
    },
    cW: function () {
        return v;
    },
    ex: function () {
        return o;
    },
    kc: function () {
        return F;
    },
    pu: function () {
        return Z;
    }
});
var r = n(182823),
    i = n(470079),
    a = n(612001);
function o(e) {
    let t = (0, r.r3)(e);
    if ('virtual' === (0, a.Jz)()) {
        let n = t.activeElement;
        (0, r.QB)(() => {
            t.activeElement === n && e.isConnected && (0, r.Ao)(e);
        });
    } else (0, r.Ao)(e);
}
function s(e) {
    let t = (0, r.kR)(e);
    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
    let { display: n, visibility: i } = e.style,
        a = 'none' !== n && 'hidden' !== i && 'collapse' !== i;
    if (a) {
        let { getComputedStyle: t } = e.ownerDocument.defaultView,
            { display: n, visibility: r } = t(e);
        a = 'none' !== n && 'hidden' !== r && 'collapse' !== r;
    }
    return a;
}
function l(e, t) {
    return !e.hasAttribute('hidden') && ('DETAILS' !== e.nodeName || !t || 'SUMMARY' === t.nodeName || e.hasAttribute('open'));
}
function u(e, t) {
    return '#comment' !== e.nodeName && s(e) && l(e, t) && (!e.parentElement || u(e.parentElement, e));
}
n(867330);
let c = i.createContext(null),
    d = null;
function _(e) {
    let { children: t, contain: n, restoreFocus: a, autoFocus: o } = e,
        s = (0, i.useRef)(null),
        l = (0, i.useRef)(null),
        u = (0, i.useRef)([]),
        { parentNode: _ } = (0, i.useContext)(c) || {},
        f = (0, i.useMemo)(() => new w({ scopeRef: u }), [u]);
    (0, r.bt)(() => {
        let e = _ || x.root;
        if (x.getTreeNode(e.scopeRef) && d && !N(d, e.scopeRef)) {
            let t = x.getTreeNode(d);
            t && (e = t);
        }
        e.addChild(f), x.addNode(f);
    }, [f, _]),
        (0, r.bt)(() => {
            let e = x.getTreeNode(u);
            e && (e.contain = !!n);
        }, [n]),
        (0, r.bt)(() => {
            var e;
            let t = null === (e = s.current) || void 0 === e ? void 0 : e.nextSibling,
                n = [];
            for (; t && t !== l.current; ) n.push(t), (t = t.nextSibling);
            u.current = n;
        }, [t]),
        y(u, a, n),
        T(u, n),
        b(u, a, n),
        C(u, o),
        (0, i.useEffect)(() => {
            let e = (0, r.r3)(u.current ? u.current[0] : void 0).activeElement,
                t = null;
            if (S(e, u.current)) {
                for (let n of x.traverse()) n.scopeRef && S(e, n.scopeRef.current) && (t = n);
                t === x.getTreeNode(u) && (d = t.scopeRef);
            }
        }, [u]),
        (0, r.bt)(
            () => () => {
                var e, t, n;
                let r = null !== (n = null === (t = x.getTreeNode(u)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
                (u === d || N(u, d)) && (!r || x.getTreeNode(r)) && (d = r), x.removeTreeNode(u);
            },
            [u]
        );
    let h = (0, i.useMemo)(() => E(u), []),
        p = (0, i.useMemo)(
            () => ({
                focusManager: h,
                parentNode: f
            }),
            [f, h]
        );
    return i.createElement(
        c.Provider,
        { value: p },
        i.createElement('span', {
            'data-focus-scope-start': !0,
            hidden: !0,
            ref: s
        }),
        t,
        i.createElement('span', {
            'data-focus-scope-end': !0,
            hidden: !0,
            ref: l
        })
    );
}
function E(e) {
    return {
        focusNext(t = {}) {
            let n = e.current,
                { from: i, tabbable: a, wrap: o, accept: s } = t,
                l = i || (0, r.r3)(n[0]).activeElement,
                u = n[0].previousElementSibling,
                c = D(
                    m(n),
                    {
                        tabbable: a,
                        accept: s
                    },
                    n
                );
            c.currentNode = S(l, n) ? l : u;
            let d = c.nextNode();
            return !d && o && ((c.currentNode = u), (d = c.nextNode())), d && O(d, !0), d;
        },
        focusPrevious(t = {}) {
            let n = e.current,
                { from: i, tabbable: a, wrap: o, accept: s } = t,
                l = i || (0, r.r3)(n[0]).activeElement,
                u = n[n.length - 1].nextElementSibling,
                c = D(
                    m(n),
                    {
                        tabbable: a,
                        accept: s
                    },
                    n
                );
            c.currentNode = S(l, n) ? l : u;
            let d = c.previousNode();
            return !d && o && ((c.currentNode = u), (d = c.previousNode())), d && O(d, !0), d;
        },
        focusFirst(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = D(
                    m(n),
                    {
                        tabbable: r,
                        accept: i
                    },
                    n
                );
            a.currentNode = n[0].previousElementSibling;
            let o = a.nextNode();
            return o && O(o, !0), o;
        },
        focusLast(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = D(
                    m(n),
                    {
                        tabbable: r,
                        accept: i
                    },
                    n
                );
            a.currentNode = n[n.length - 1].nextElementSibling;
            let o = a.previousNode();
            return o && O(o, !0), o;
        }
    };
}
let f = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'],
    h = f.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
f.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let p = f.join(':not([hidden]):not([tabindex="-1"]),');
function m(e) {
    return e[0].parentElement;
}
function I(e) {
    let t = x.getTreeNode(d);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function T(e, t) {
    let n = (0, i.useRef)(),
        a = (0, i.useRef)();
    (0, r.bt)(() => {
        let i = e.current;
        if (!t) {
            a.current && (cancelAnimationFrame(a.current), (a.current = void 0));
            return;
        }
        let o = (0, r.r3)(i ? i[0] : void 0),
            s = (t) => {
                if ('Tab' !== t.key || t.altKey || t.ctrlKey || t.metaKey || !I(e)) return;
                let n = o.activeElement,
                    r = e.current;
                if (!r || !S(n, r)) return;
                let i = D(m(r), { tabbable: !0 }, r);
                if (!n) return;
                i.currentNode = n;
                let a = t.shiftKey ? i.previousNode() : i.nextNode();
                !a && ((i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling), (a = t.shiftKey ? i.previousNode() : i.nextNode())), t.preventDefault(), a && O(a, !0);
            },
            l = (t) => {
                (!d || N(d, e)) && S(t.target, e.current) ? ((d = e), (n.current = t.target)) : I(e) && !A(t.target, e) ? (n.current ? n.current.focus() : d && d.current && R(d.current)) : I(e) && (n.current = t.target);
            },
            u = (t) => {
                a.current && cancelAnimationFrame(a.current),
                    (a.current = requestAnimationFrame(() => {
                        if (o.activeElement && I(e) && !A(o.activeElement, e)) {
                            if (((d = e), o.body.contains(t.target))) {
                                var r;
                                (n.current = t.target), null === (r = n.current) || void 0 === r || r.focus();
                            } else d.current && R(d.current);
                        }
                    }));
            };
        return (
            o.addEventListener('keydown', s, !1),
            o.addEventListener('focusin', l, !1),
            null == i || i.forEach((e) => e.addEventListener('focusin', l, !1)),
            null == i || i.forEach((e) => e.addEventListener('focusout', u, !1)),
            () => {
                o.removeEventListener('keydown', s, !1), o.removeEventListener('focusin', l, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', l, !1)), null == i || i.forEach((e) => e.removeEventListener('focusout', u, !1));
            }
        );
    }, [e, t]),
        (0, r.bt)(
            () => () => {
                a.current && cancelAnimationFrame(a.current);
            },
            [a]
        );
}
function g(e) {
    return A(e);
}
function S(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function A(e, t = null) {
    if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
    for (let { scopeRef: n } of x.traverse(x.getTreeNode(t))) if (n && S(e, n.current)) return !0;
    return !1;
}
function v(e) {
    return A(e, d);
}
function N(e, t) {
    var n;
    let r = null === (n = x.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function O(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch (e) {}
    } else
        try {
            o(e);
        } catch (e) {}
}
function R(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = m(e),
        i = D(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    t && !a && (((i = D((r = m(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), O(a);
}
function C(e, t) {
    let n = i.useRef(t);
    (0, i.useEffect)(() => {
        n.current && ((d = e), !S((0, r.r3)(e.current ? e.current[0] : void 0).activeElement, d.current) && e.current && R(e.current)), (n.current = !1);
    }, [e]);
}
function y(e, t, n) {
    (0, r.bt)(() => {
        if (t || n) return;
        let i = e.current,
            a = (0, r.r3)(i ? i[0] : void 0),
            o = (t) => {
                let n = t.target;
                S(n, e.current) ? (d = e) : !g(n) && (d = null);
            };
        return (
            a.addEventListener('focusin', o, !1),
            null == i || i.forEach((e) => e.addEventListener('focusin', o, !1)),
            () => {
                a.removeEventListener('focusin', o, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', o, !1));
            }
        );
    }, [e, t, n]);
}
function L(e) {
    let t = x.getTreeNode(d);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function b(e, t, n) {
    let a = (0, i.useRef)('undefined' != typeof document ? (0, r.r3)(e.current ? e.current[0] : void 0).activeElement : null);
    (0, r.bt)(() => {
        let i = e.current,
            a = (0, r.r3)(i ? i[0] : void 0);
        if (!t || n) return;
        let o = () => {
            (!d || N(d, e)) && S(a.activeElement, e.current) && (d = e);
        };
        return (
            a.addEventListener('focusin', o, !1),
            null == i || i.forEach((e) => e.addEventListener('focusin', o, !1)),
            () => {
                a.removeEventListener('focusin', o, !1), null == i || i.forEach((e) => e.removeEventListener('focusin', o, !1));
            }
        );
    }, [e, n]),
        (0, r.bt)(() => {
            let i = (0, r.r3)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let a = (t) => {
                if ('Tab' !== t.key || t.altKey || t.ctrlKey || t.metaKey || !I(e)) return;
                let n = i.activeElement;
                if (!S(n, e.current)) return;
                let r = x.getTreeNode(e);
                if (!r) return;
                let a = r.nodeToRestore,
                    o = D(i.body, { tabbable: !0 });
                o.currentNode = n;
                let s = t.shiftKey ? o.previousNode() : o.nextNode();
                if (((!a || !i.body.contains(a) || a === i.body) && ((a = void 0), (r.nodeToRestore = void 0)), (!s || !S(s, e.current)) && a)) {
                    o.currentNode = a;
                    do s = t.shiftKey ? o.previousNode() : o.nextNode();
                    while (S(s, e.current));
                    t.preventDefault(), t.stopPropagation(), s ? O(s, !0) : g(a) ? O(a, !0) : n.blur();
                }
            };
            return (
                !n && i.addEventListener('keydown', a, !0),
                () => {
                    !n && i.removeEventListener('keydown', a, !0);
                }
            );
        }, [e, t, n]),
        (0, r.bt)(() => {
            var n;
            let i = (0, r.r3)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let o = x.getTreeNode(e);
            if (o)
                return (
                    (o.nodeToRestore = null !== (n = a.current) && void 0 !== n ? n : void 0),
                    () => {
                        let n = x.getTreeNode(e);
                        if (!n) return;
                        let r = n.nodeToRestore;
                        if (t && r && (S(i.activeElement, e.current) || (i.activeElement === i.body && L(e)))) {
                            let t = x.clone();
                            requestAnimationFrame(() => {
                                if (i.activeElement === i.body) {
                                    let n = t.getTreeNode(e);
                                    for (; n; ) {
                                        if (n.nodeToRestore && n.nodeToRestore.isConnected) {
                                            O(n.nodeToRestore);
                                            return;
                                        }
                                        n = n.parent;
                                    }
                                    for (n = t.getTreeNode(e); n; ) {
                                        if (n.scopeRef && n.scopeRef.current && x.getTreeNode(n.scopeRef)) {
                                            R(n.scopeRef.current, !0);
                                            return;
                                        }
                                        n = n.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [e, t]);
}
function D(e, t, n) {
    let i = (null == t ? void 0 : t.tabbable) ? p : h,
        a = (0, r.r3)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var r;
                return (null == t ? void 0 : null === (r = t.from) || void 0 === r ? void 0 : r.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(i) && u(e) && (!n || S(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        });
    return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a;
}
function M(e, t = {}) {
    return {
        focusNext(n = {}) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: s = t.wrap, accept: l = t.accept } = n,
                u = a || (0, r.r3)(i).activeElement,
                c = D(i, {
                    tabbable: o,
                    accept: l
                });
            i.contains(u) && (c.currentNode = u);
            let d = c.nextNode();
            return !d && s && ((c.currentNode = i), (d = c.nextNode())), d && O(d, !0), d;
        },
        focusPrevious(n = t) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: s = t.wrap, accept: l = t.accept } = n,
                u = a || (0, r.r3)(i).activeElement,
                c = D(i, {
                    tabbable: o,
                    accept: l
                });
            if (i.contains(u)) c.currentNode = u;
            else {
                let e = P(c);
                return e && O(e, !0), null != e ? e : null;
            }
            let d = c.previousNode();
            if (!d && s) {
                c.currentNode = i;
                let e = P(c);
                if (!e) return null;
                d = e;
            }
            return d && O(d, !0), null != d ? d : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = D(r, {
                    tabbable: i,
                    accept: a
                }).nextNode();
            return o && O(o, !0), o;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = P(
                    D(r, {
                        tabbable: i,
                        accept: a
                    })
                );
            return o && O(o, !0), null != o ? o : null;
        }
    };
}
function P(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class U {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new w({ scopeRef: e });
        r.addChild(i), (i.parent = r), this.fastMap.set(e, i), n && (i.nodeToRestore = n);
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e);
    }
    removeTreeNode(e) {
        if (null === e) return;
        let t = this.fastMap.get(e);
        if (!t) return;
        let n = t.parent;
        for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && S(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new U();
        for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new w({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class w {
    addChild(e) {
        this.children.add(e), (e.parent = this);
    }
    removeChild(e) {
        this.children.delete(e), (e.parent = void 0);
    }
    constructor(e) {
        (this.children = new Set()), (this.contain = !1), (this.scopeRef = e.scopeRef);
    }
}
let x = new U();
function G(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: r } = e,
        o = (0, i.useRef)({
            isFocused: !1,
            isFocusVisible: t || (0, a.E)()
        }),
        [s, l] = (0, i.useState)(!1),
        [u, c] = (0, i.useState)(() => o.current.isFocused && o.current.isFocusVisible),
        d = (0, i.useCallback)(() => c(o.current.isFocused && o.current.isFocusVisible), []),
        _ = (0, i.useCallback)(
            (e) => {
                (o.current.isFocused = e), l(e), d();
            },
            [d]
        );
    (0, a.mG)(
        (e) => {
            (o.current.isFocusVisible = e), d();
        },
        [],
        { isTextInput: n }
    );
    let { focusProps: E } = (0, a.KK)({
            isDisabled: r,
            onFocusChange: _
        }),
        { focusWithinProps: f } = (0, a.L_)({
            isDisabled: !r,
            onFocusWithinChange: _
        });
    return {
        isFocused: s,
        isFocusVisible: u,
        focusProps: r ? f : E
    };
}
let k = i.createContext(null);
function B(e) {
    let t = (0, i.useContext)(k) || {};
    (0, r.lE)(t, e);
    let { ref: n, ...a } = t;
    return a;
}
function F(e, t) {
    let { focusProps: n } = (0, a.KK)(e),
        { keyboardProps: s } = (0, a.v5)(e),
        l = (0, r.dG)(n, s),
        u = B(t),
        c = e.isDisabled ? {} : u,
        d = (0, i.useRef)(e.autoFocus);
    return (
        (0, i.useEffect)(() => {
            d.current && t.current && o(t.current), (d.current = !1);
        }, [t]),
        {
            focusableProps: (0, r.dG)(
                {
                    ...l,
                    tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                },
                c
            )
        }
    );
}
function Z(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [a, o] = (0, i.useState)(!1);
    return (
        (0, r.bt)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && o(!!D(e.current, { tabbable: !0 }).nextNode());
                };
                t();
                let n = new MutationObserver(t);
                return (
                    n.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ['tabIndex', 'disabled']
                    }),
                    () => {
                        n.disconnect();
                    }
                );
            }
        }),
        !n && a
    );
}
