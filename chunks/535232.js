n.d(t, {
    QL: function () {
        return u;
    }
});
var r = n(83914),
    i = n(591734);
n(192379);
let a = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'],
    s = a.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let o = a.join(':not([hidden]):not([tabindex="-1"]),');
function l(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function u(e, t, n) {
    let a = (null == t ? void 0 : t.tabbable) ? o : s,
        u = (0, i.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == t ? void 0 : null === (i = t.from) || void 0 === i ? void 0 : i.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(a) && (0, r.J)(e) && (!n || l(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        });
    return (null == t ? void 0 : t.from) && (u.currentNode = t.from), u;
}
class c {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new d({ scopeRef: e });
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
        for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && l(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new c();
        for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new d({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class d {
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
new c();
