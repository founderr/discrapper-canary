n.d(t, {
    RM: function () {
        return tz;
    },
    X2: function () {
        return tq;
    },
    bL: function () {
        return tQ;
    },
    iA: function () {
        return tH;
    },
    sg: function () {
        return tK;
    },
    xD: function () {
        return tW;
    }
});
var r = n(198453),
    i = n(473275),
    a = n(921336),
    s = n(662845),
    o = n(661763),
    l = n(237745),
    u = n(448446),
    c = n(649859),
    d = n(366889),
    f = n(867824),
    _ = n(591361),
    p = n(566022),
    h = n(46670),
    m = n(766203),
    g = n(726983),
    E = n(311300),
    v = n(563947),
    I = n(738279),
    T = n(92828),
    b = n(184495),
    S = n(918629),
    y = n(149901),
    A = n(508833),
    N = n(583620),
    C = n(756817),
    R = n(799441),
    O = n(407018),
    D = n(780471),
    L = n(743498),
    x = n(516515),
    w = n(298397),
    P = n(147223),
    M = n(599542),
    k = n(192379),
    U = n(430370),
    B = n(995295),
    G = n(969710),
    Z = n(254942),
    F = n(328199),
    V = n(554373),
    j = n(959125),
    H = n(760683),
    Y = n(354647),
    W = n(868965),
    K = n(943877),
    z = n(906421),
    q = n(656692),
    Q = n(865242),
    X = n(540020),
    J = n(33216),
    $ = n(574869),
    ee = n(635798),
    et = n(980008),
    en = n(990881),
    er = n(87149);
class ei {
    get childNodes() {
        throw Error('childNodes is not supported');
    }
    clone() {
        let e = new ei(this.type, this.key);
        return (e.value = this.value), (e.level = this.level), (e.hasChildNodes = this.hasChildNodes), (e.rendered = this.rendered), (e.textValue = this.textValue), (e['aria-label'] = this['aria-label']), (e.index = this.index), (e.parentKey = this.parentKey), (e.prevKey = this.prevKey), (e.nextKey = this.nextKey), (e.firstChildKey = this.firstChildKey), (e.lastChildKey = this.lastChildKey), (e.props = this.props), e;
    }
    constructor(e, t) {
        (0, U._)(this, 'value', null), (0, U._)(this, 'level', 0), (0, U._)(this, 'hasChildNodes', !1), (0, U._)(this, 'rendered', null), (0, U._)(this, 'textValue', ''), (0, U._)(this, 'aria-label', void 0), (0, U._)(this, 'index', 0), (0, U._)(this, 'parentKey', null), (0, U._)(this, 'prevKey', null), (0, U._)(this, 'nextKey', null), (0, U._)(this, 'firstChildKey', null), (0, U._)(this, 'lastChildKey', null), (0, U._)(this, 'props', {}), (this.type = e), (this.key = t);
    }
}
let ea = Symbol.iterator;
class es {
    *[ea]() {
        let e = this.firstChild;
        for (; e; ) yield e, (e = e.nextSibling);
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(e) {
        (this._firstChild = e), this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(e) {
        (this._lastChild = e), this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(e) {
        (this._previousSibling = e), this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(e) {
        (this._nextSibling = e), this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(e) {
        (this._parentNode = e), this.ownerDocument.markDirty(this);
    }
    appendChild(e) {
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? ((this.lastChild.nextSibling = e), (e.index = this.lastChild.index + 1), (e.previousSibling = this.lastChild)) : ((e.previousSibling = null), (e.index = 0)), (e.parentNode = this), (e.nextSibling = null), (this.lastChild = e), this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    insertBefore(e, t) {
        if (null == t) return this.appendChild(e);
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), (e.nextSibling = t), (e.previousSibling = t.previousSibling), (e.index = t.index), this.firstChild === t ? (this.firstChild = e) : t.previousSibling && (t.previousSibling.nextSibling = e), (t.previousSibling = e), (e.parentNode = t.parentNode);
        let n = t;
        for (; n; ) n.index++, (n = n.nextSibling);
        e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    removeChild(e) {
        if (e.parentNode !== this) return;
        this.ownerDocument.startTransaction();
        let t = e.nextSibling;
        for (; t; ) t.index--, (t = t.nextSibling);
        e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), (e.parentNode = null), (e.nextSibling = null), (e.previousSibling = null), (e.index = 0), this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(e) {
        (0, U._)(this, '_firstChild', null), (0, U._)(this, '_lastChild', null), (0, U._)(this, '_previousSibling', null), (0, U._)(this, '_nextSibling', null), (0, U._)(this, '_parentNode', null), (this.ownerDocument = e);
    }
}
let eo = 0;
class el extends es {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        return this.parentNode instanceof el ? this.parentNode.level + ('item' === this.node.type ? 1 : 0) : 0;
    }
    updateNode() {
        var e, t, n, r, i, a, s, o;
        let l = this.ownerDocument.getMutableNode(this);
        (l.index = this.index), (l.level = this.level), (l.parentKey = this.parentNode instanceof el ? this.parentNode.node.key : null), (l.prevKey = null !== (i = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== i ? i : null), (l.nextKey = null !== (a = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== a ? a : null), (l.hasChildNodes = !!this.firstChild), (l.firstChildKey = null !== (s = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== s ? s : null), (l.lastChildKey = null !== (o = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== o ? o : null);
    }
    setProps(e, t, n) {
        let r = this.ownerDocument.getMutableNode(this),
            { value: i, textValue: a, id: s, ...o } = e;
        if (((o.ref = t), (r.props = o), (r.rendered = n), (r.value = i), (r.textValue = a || ('string' == typeof n ? n : '') || e['aria-label'] || ''), null != s && s !== r.key)) {
            if (this.hasSetProps) throw Error('Cannot change the id of an item');
            r.key = s;
        }
        !this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), (this.hasSetProps = !0)), this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(e, t) {
        super(t), (0, U._)(this, 'nodeType', 8), (0, U._)(this, '_index', 0), (0, U._)(this, 'hasSetProps', !1), (this.node = new ei(e, `react-aria-${++eo}`)), this.ownerDocument.startTransaction();
    }
}
let eu = Symbol.iterator;
class ec {
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[eu]() {
        let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
        for (; e; ) yield e, (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
    }
    getChildren(e) {
        let t = this.keyMap;
        return {
            *[Symbol.iterator]() {
                let n = t.get(e),
                    r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
                for (; r; ) yield r, (r = null != r.nextKey ? t.get(r.nextKey) : void 0);
            }
        };
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if (null != t.prevKey) {
            var n;
            for (t = this.keyMap.get(t.prevKey); t && 'item' !== t.type && null != t.lastChildKey; ) t = this.keyMap.get(t.lastChildKey);
            return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null;
        }
        return t.parentKey;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if ('item' !== t.type && null != t.firstChildKey) return t.firstChildKey;
        for (; t; ) {
            if (null != t.nextKey) return t.nextKey;
            if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
            else break;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        var e;
        let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; (null == t ? void 0 : t.lastChildKey) != null; ) t = this.keyMap.get(t.lastChildKey);
        return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null;
    }
    getItem(e) {
        var t;
        return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null;
    }
    at() {
        throw Error('Not implemented');
    }
    clone() {
        let e = new this.constructor();
        return (e.keyMap = new Map(this.keyMap)), (e.firstKey = this.firstKey), (e.lastKey = this.lastKey), e;
    }
    addNode(e) {
        if (this.frozen) throw Error('Cannot add a node to a frozen collection');
        this.keyMap.set(e.key, e);
    }
    removeNode(e) {
        if (this.frozen) throw Error('Cannot remove a node to a frozen collection');
        this.keyMap.delete(e);
    }
    commit(e, t) {
        if (this.frozen) throw Error('Cannot commit a frozen collection');
        (this.firstKey = e), (this.lastKey = t), (this.frozen = !0);
    }
    constructor() {
        (0, U._)(this, 'keyMap', new Map()), (0, U._)(this, 'firstKey', null), (0, U._)(this, 'lastKey', null), (0, U._)(this, 'frozen', !1);
    }
}
class ed extends es {
    createElement(e) {
        return new el(e, this);
    }
    getMutableNode(e) {
        let t = e.node;
        return !this.mutatedNodes.has(e) && ((t = e.node.clone()), this.mutatedNodes.add(e), (e.node = t)), this.markDirty(e), t;
    }
    getMutableCollection() {
        return !this.collectionMutated && ((this.collection = this.collection.clone()), (this.collectionMutated = !0)), this.collection;
    }
    markDirty(e) {
        this.dirtyNodes.add(e);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(e) {
        let t = this.getMutableCollection();
        if (!t.getItem(e.node.key)) for (let n of (t.addNode(e.node), e)) this.addNode(n);
        this.markDirty(e);
    }
    removeNode(e) {
        for (let t of e) (t.parentNode = null), this.removeNode(t);
        this.getMutableCollection().removeNode(e.node.key), this.markDirty(e);
    }
    getCollection() {
        if (this.transactionCount > 0) return this.collection;
        for (let e of this.dirtyNodes) e instanceof el && e.parentNode && e.updateNode();
        if ((this.dirtyNodes.clear(), this.mutatedNodes.size)) {
            var e, t, n, r;
            let i = this.getMutableCollection();
            for (let e of this.mutatedNodes) e.parentNode && i.addNode(e.node);
            i.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear();
        }
        return (this.collectionMutated = !1), this.collection;
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0)) for (let e of this.subscriptions) e();
    }
    subscribe(e) {
        return this.subscriptions.add(e), () => this.subscriptions.delete(e);
    }
    constructor(e) {
        super(null), (0, U._)(this, 'nodeType', 11), (0, U._)(this, 'ownerDocument', this), (0, U._)(this, 'dirtyNodes', new Set()), (0, U._)(this, 'mutatedNodes', new Set()), (0, U._)(this, 'subscriptions', new Set()), (0, U._)(this, 'transactionCount', 0), (this.collection = e), (this.collectionMutated = !0);
    }
}
function ef(e) {
    let { children: t, items: n, idScope: r, addIdAndValue: i } = e,
        a = (0, k.useMemo)(() => new WeakMap(), []);
    return (0, k.useMemo)(() => {
        if (!n || 'function' != typeof t) return t;
        {
            let o = [];
            for (let l of n) {
                let n = a.get(l);
                if (!n) {
                    if (null == (n = t(l)).key) {
                        var e, s;
                        let t = null !== (s = null !== (e = n.props.id) && void 0 !== e ? e : l.key) && void 0 !== s ? s : l.id;
                        if (null == t) throw Error('Could not determine key for item');
                        r && (t = r + ':' + t),
                            (n = (0, k.cloneElement)(
                                n,
                                i
                                    ? {
                                          key: t,
                                          id: t,
                                          value: l
                                      }
                                    : { key: t }
                            ));
                    }
                    a.set(l, n);
                }
                o.push(n);
            }
            return o;
        }
    }, [t, n, a, r, i]);
}
function e_(e) {
    return ef({
        ...e,
        addIdAndValue: !0
    });
}
let ep = (0, k.createContext)(!1);
function eh(e, t) {
    let n = (0, k.useMemo)(() => new ed(t || new ec()), [t]),
        i = (0, k.useCallback)((e) => n.subscribe(e), [n]),
        a = (0, k.useCallback)(() => n.getCollection(), [n]),
        s = (0, G.useSyncExternalStore)(i, a, a),
        o = e_(e),
        l = (0, k.useMemo)(() => k.createElement(ep.Provider, { value: !0 }, o), [o]);
    return {
        portal: (0, r.Av)() ? null : (0, B.createPortal)(l, n),
        collection: s
    };
}
function em(e, t, n) {
    let r = (0, k.useContext)(ep);
    return ((n = eg(t, n, t.children)), r) ? k.createElement(e, { ref: n }) : null;
}
function eg(e, t, n) {
    return (0, k.useCallback)(
        (r) => {
            null == r || r.setProps(e, t, n);
        },
        [e, t, n]
    );
}
let eE = (0, k.forwardRef)(function (e, t) {
        return k.createElement('item', { ref: eg(e, t, e.children) });
    }),
    ev = (0, k.createContext)(null),
    eI = (0, k.createContext)(null),
    eT = Symbol('callback'),
    eb = Symbol('default');
function eS({ values: e, children: t }) {
    for (let [n, r] of e) t = k.createElement(n.Provider, { value: r }, t);
    return t;
}
function ey(e) {
    let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: a, values: s } = e;
    return (0, k.useMemo)(() => {
        let e, o, l;
        return (
            (e = 'function' == typeof t ? t(s) : t),
            (o = 'function' == typeof n ? n(s) : n),
            {
                className: null != e ? e : i,
                style: o,
                children: (l = 'function' == typeof r ? r(s) : null == r ? a : r)
            }
        );
    }, [t, n, r, i, a, s]);
}
function eA(e, t, n) {
    let r = (0, k.useContext)(n) || {};
    if ('slots' in r && r.slots) {
        if (!e.slot && !r.slots[eb]) throw Error('A slot prop is required');
        let t = e.slot || eb;
        if (!r.slots[t]) throw Error(`Invalid slot "${e.slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(r.slots).map((e) => `"${e}"`)) + '.');
        r = r.slots[t];
    }
    let { ref: i, [eT]: a, ...s } = r,
        o = (0, M.B3)((0, M.lq)(t, i)),
        l = (0, M.dG)(s, e);
    return (
        (0, k.useEffect)(() => {
            a && a(e);
        }, [a, e]),
        [l, o]
    );
}
function eN() {
    let [e, t] = (0, k.useState)(!0),
        n = (0, k.useRef)(!1),
        r = (0, k.useCallback)((e) => {
            (n.current = !0), t(!!e);
        }, []);
    return (
        (0, M.bt)(() => {
            !n.current && t(!1);
        }, []),
        [r, e]
    );
}
function eC(e, t = !0) {
    let [n, r] = (0, k.useState)(!0);
    return (
        eO(
            e,
            n && t,
            (0, k.useCallback)(() => r(!1), [])
        ),
        n && t
    );
}
function eR(e, t) {
    let [n, r] = (0, k.useState)(!1),
        i = (0, k.useRef)('idle');
    return (
        !t && e.current && 'idle' === i.current && ((n = !0), r(!0), (i.current = 'exiting')),
        !e.current && 'exited' === i.current && (i.current = 'idle'),
        eO(
            e,
            n,
            (0, k.useCallback)(() => {
                (i.current = 'exited'), r(!1);
            }, [])
        ),
        n
    );
}
function eO(e, t, n) {
    let r = (0, k.useRef)(null);
    t && e.current && (r.current = window.getComputedStyle(e.current).animation),
        (0, M.bt)(() => {
            if (t && e.current) {
                let t = window.getComputedStyle(e.current);
                if ('none' !== t.animationName && t.animation !== r.current) {
                    let t = (i) => {
                            i.target === e.current &&
                                (r.removeEventListener('animationend', t),
                                B.flushSync(() => {
                                    n();
                                }));
                        },
                        r = e.current;
                    return (
                        r.addEventListener('animationend', t),
                        () => {
                            r.removeEventListener('animationend', t);
                        }
                    );
                }
                n();
            }
        }, [e, t, n]);
}
let eD = (0, k.createContext)(!1),
    eL = (0, k.createContext)({}),
    ex = (0, k.createContext)(null),
    ew = (0, k.createContext)(null);
function eP({ node: e, isCurrent: t, isDisabled: n }) {
    var r;
    return k.createElement(
        'li',
        {
            ...(0, M.zL)(e.props),
            style: e.props.style,
            className: null !== (r = e.props.className) && void 0 !== r ? r : 'react-aria-Item'
        },
        k.createElement(
            eS,
            {
                values: [
                    [
                        ex,
                        {
                            'aria-current': t ? 'page' : null,
                            isDisabled: n || t
                        }
                    ],
                    [eL, t ? { 'aria-current': 'page' } : null]
                ]
            },
            e.rendered
        )
    );
}
let eM = new Set(['form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'value']),
    ek = (0, k.createContext)({}),
    eU = (0, k.createContext)({}),
    eB = (0, k.createContext)({}),
    eG = (0, k.createContext)({}),
    eZ = (0, k.createContext)(null),
    eF = (0, k.createContext)(null),
    eV = (0, k.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e,
            { headerProps: a, weekDays: s } = (0, k.useContext)(eF);
        return k.createElement(
            'thead',
            {
                ...(0, M.zL)(e),
                ...a,
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarGridHeader'
            },
            k.createElement(
                'tr',
                null,
                s.map((e, t) => k.cloneElement(n(e), { key: t }))
            )
        );
    }),
    ej = (0, k.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e;
        return k.createElement(
            'th',
            {
                ...(0, M.zL)(e),
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarHeaderCell'
            },
            n
        );
    }),
    eH = (0, k.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e,
            a = (0, k.useContext)(eZ),
            { startDate: s } = (0, k.useContext)(eF),
            { locale: o } = (0, c.bU)(),
            l = (0, F.Rn)(s, o);
        return k.createElement(
            'tbody',
            {
                ...(0, M.zL)(e),
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarGridBody'
            },
            [...Array(l).keys()].map((e) =>
                k.createElement(
                    'tr',
                    { key: e },
                    a.getDatesInWeek(e, s).map((e, t) => (e ? k.cloneElement(n(e), { key: t }) : k.createElement('td', { key: t })))
                )
            )
        );
    }),
    eY = (0, k.createContext)({}),
    eW = (0, k.createContext)(null),
    eK = (0, k.createContext)(null),
    ez = (0, k.createContext)(null),
    eq = (0, k.createContext)({}),
    eQ = (0, k.createContext)(null),
    eX = (0, k.forwardRef)(function (e, t) {
        let { render: n } = (0, k.useContext)(eQ);
        return k.createElement(k.Fragment, null, n(e, t));
    }),
    eJ = (0, k.createContext)({}),
    e$ = (0, k.forwardRef)(function (e, t) {
        [e, t] = eA(e, t, eJ);
        let n = em('header', e, t);
        return n
            ? n
            : k.createElement(
                  'header',
                  {
                      className: 'react-aria-Header',
                      ...e,
                      ref: t
                  },
                  e.children
              );
    }),
    e0 = (0, k.createContext)({}),
    e1 = (0, k.forwardRef)(function (e, t) {
        [e, t] = eA(e, t, e0);
        let { elementType: n, orientation: r, style: i, className: a } = e,
            s = n || 'hr';
        'hr' === s && 'vertical' === r && (s = 'div');
        let { separatorProps: o } = (0, p.z)({
                elementType: n,
                orientation: r
            }),
            l = em('separator', e, t);
        return l
            ? l
            : k.createElement(s, {
                  ...(0, M.zL)(e),
                  ...o,
                  style: i,
                  className: null != a ? a : 'react-aria-Separator',
                  ref: t,
                  slot: e.slot
              });
    }),
    e2 = (0, k.createContext)(null),
    e3 = (0, k.createContext)(null);
function e4({ props: e, listBoxRef: t }) {
    let { portal: n, collection: r } = eh(e);
    e = {
        ...e,
        collection: r,
        children: null,
        items: null
    };
    let i = (0, Y.n_)(e);
    return k.createElement(
        k.Fragment,
        null,
        n,
        k.createElement(e6, {
            state: i,
            props: e,
            listBoxRef: t
        })
    );
}
function e6({ state: e, props: t, listBoxRef: n }) {
    let r,
        i,
        a,
        { dragAndDropHooks: l } = t,
        { collection: u, selectionManager: c } = e,
        d = !!(null == l ? void 0 : l.useDraggableCollectionState),
        f = !!(null == l ? void 0 : l.useDroppableCollectionState),
        { listBoxProps: _ } = (0, h.co)(
            {
                ...t,
                shouldSelectOnPressUp: d || t.shouldSelectOnPressUp
            },
            e,
            n
        ),
        p = ef({
            items: u,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return k.createElement(e5, { section: e });
                    case 'separator':
                        return k.createElement(e1, e.props);
                    case 'item':
                        return k.createElement(e7, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        }),
        g = (0, k.useRef)(d),
        E = (0, k.useRef)(f);
    g.current !== d && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), E.current !== f && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    let v = !1,
        I = null,
        T = (0, k.useRef)(null);
    if (d && l) {
        (r = l.useDraggableCollectionState({
            collection: u,
            selectionManager: c,
            preview: l.renderDragPreview ? T : void 0
        })),
            l.useDraggableCollection({}, r, n);
        let e = l.DragPreview;
        I = l.renderDragPreview ? k.createElement(e, { ref: T }, l.renderDragPreview) : null;
    }
    if (f && l) {
        i = l.useDroppableCollectionState({
            collection: u,
            selectionManager: c
        });
        let e = t.keyboardDelegate || new m.dp(u, 'selection' === c.disabledBehavior ? new Set() : c.disabledKeys, n),
            r = l.dropTargetDelegate || new l.ListDropTargetDelegate(u, n);
        (a = l.useDroppableCollection(
            {
                keyboardDelegate: e,
                dropTargetDelegate: r
            },
            i,
            n
        )),
            (v = i.isDropTarget({ type: 'root' }));
    }
    let { focusProps: b, isFocused: S, isFocusVisible: y } = (0, s.Fx)(),
        A = ey({
            className: t.className,
            style: t.style,
            defaultClassName: 'react-aria-ListBox',
            values: {
                isDropTarget: v,
                isEmpty: 0 === e.collection.size,
                isFocused: S,
                isFocusVisible: y
            }
        }),
        N = null;
    return (
        0 === e.collection.size &&
            t.renderEmptyState &&
            (N = k.createElement(
                'div',
                {
                    role: 'option',
                    style: { display: 'contents' }
                },
                t.renderEmptyState()
            )),
        k.createElement(
            s.MT,
            null,
            k.createElement(
                'div',
                {
                    ...(0, M.zL)(t),
                    ...(0, o.dG)(_, b, null == a ? void 0 : a.collectionProps),
                    ...A,
                    ref: n,
                    slot: t.slot,
                    'data-drop-target': v || void 0,
                    'data-empty': 0 === e.collection.size || void 0,
                    'data-focused': S || void 0,
                    'data-focus-visible': y || void 0
                },
                k.createElement(
                    eS,
                    {
                        values: [
                            [
                                e3,
                                {
                                    state: e,
                                    shouldFocusOnHover: t.shouldFocusOnHover,
                                    dragAndDropHooks: l,
                                    dragState: r,
                                    dropState: i
                                }
                            ],
                            [e0, { elementType: 'li' }],
                            [eQ, { render: e8 }]
                        ]
                    },
                    p
                ),
                N,
                I
            )
        )
    );
}
function e5({ section: e, className: t, style: n, ...r }) {
    var i, a, s;
    let { state: o } = (0, k.useContext)(e3),
        [l, u] = eN(),
        { headingProps: c, groupProps: d } = (0, h.TV)({
            heading: u,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        f = ef({
            items: o.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: t, ...n } = e.props;
                        return k.createElement(
                            e$,
                            {
                                ...c,
                                ...n,
                                ref: (0, M.lq)(l, t)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return k.createElement(e7, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return k.createElement(
        'section',
        {
            ...(0, M.zL)(r),
            ...d,
            className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || 'react-aria-Section',
            style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
            ref: e.props.ref
        },
        f
    );
}
function e7({ item: e }) {
    let t = (0, M.B3)(e.props.ref),
        { state: n, shouldFocusOnHover: r, dragAndDropHooks: i, dragState: s, dropState: l } = (0, k.useContext)(e3),
        { optionProps: u, labelProps: c, descriptionProps: d, ...f } = (0, h.Fv)({ key: e.key }, n, t),
        { hoverProps: _, isHovered: p } = (0, a.XI)({ isDisabled: r || (!f.allowsSelection && !f.hasAction) });
    r && ((_ = {}), (p = f.isFocused));
    let m = null;
    s && i && (m = i.useDraggableItem({ key: e.key }, s));
    let g = null;
    l &&
        i &&
        (g = i.useDroppableItem(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            l,
            t
        ));
    let E = e.props,
        v = s && s.isDragging(e.key),
        I = ey({
            ...E,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...f,
                isHovered: p,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior,
                allowsDragging: !!s,
                isDragging: v,
                isDropTarget: null == g ? void 0 : g.isDropTarget
            }
        }),
        T = (null == i ? void 0 : i.renderDropIndicator) || ((e) => k.createElement(eX, { target: e }));
    return (
        (0, k.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        k.createElement(
            k.Fragment,
            null,
            (null == i ? void 0 : i.useDropIndicator) &&
                T({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            k.createElement(
                'div',
                {
                    ...(0, o.dG)((0, M.zL)(E), u, _, null == m ? void 0 : m.dragProps, null == g ? void 0 : g.dropProps),
                    ...I,
                    ref: t,
                    'data-hovered': p || void 0,
                    'data-focused': f.isFocused || void 0,
                    'data-focus-visible': f.isFocusVisible || void 0,
                    'data-pressed': f.isPressed || void 0,
                    'data-dragging': v || void 0,
                    'data-drop-target': (null == g ? void 0 : g.isDropTarget) || void 0
                },
                k.createElement(
                    eS,
                    {
                        values: [
                            [
                                eU,
                                {
                                    slots: {
                                        label: c,
                                        description: d
                                    }
                                }
                            ]
                        ]
                    },
                    I.children
                )
            ),
            (null == i ? void 0 : i.useDropIndicator) &&
                null == n.collection.getKeyAfter(e.key) &&
                T({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function e8(e, t) {
    t = (0, M.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, k.useContext)(e3),
        { dropIndicatorProps: i, isHidden: a, isDropTarget: s } = n.useDropIndicator(e, r, t);
    return a
        ? null
        : k.createElement(e9, {
              ...e,
              dropIndicatorProps: i,
              isDropTarget: s,
              ref: t
          });
}
let e9 = (0, k.forwardRef)(function (e, t) {
        let { dropIndicatorProps: n, isDropTarget: r, ...i } = e,
            a = ey({
                ...i,
                defaultClassName: 'react-aria-DropIndicator',
                values: { isDropTarget: r }
            });
        return k.createElement('div', {
            ...n,
            ...a,
            role: 'option',
            ref: t,
            'data-drop-target': r || void 0
        });
    }),
    te = (0, k.createContext)(null),
    tt = (0, k.createContext)(null);
function tn({ state: e, isExiting: t, ...n }) {
    var r;
    let {
            popoverProps: i,
            underlayProps: a,
            arrowProps: s,
            placement: o
        } = (0, g.Sv)(
            {
                ...n,
                offset: null !== (r = n.offset) && void 0 !== r ? r : 8
            },
            e
        ),
        l = n.popoverRef,
        u = eC(l, !!o),
        c = ey({
            ...n,
            defaultClassName: 'react-aria-Popover',
            values: {
                placement: o,
                isEntering: u,
                isExiting: t
            }
        }),
        d = {
            ...c.style,
            ...i.style
        };
    return k.createElement(
        g.aV,
        null,
        !n.isNonModal &&
            k.createElement('div', {
                ...a,
                style: {
                    position: 'fixed',
                    inset: 0
                }
            }),
        k.createElement(
            'div',
            {
                ...(0, M.dG)((0, M.zL)(n), i),
                ...c,
                ref: l,
                slot: n.slot,
                style: d,
                'data-placement': o,
                'data-entering': u || void 0,
                'data-exiting': t || void 0
            },
            !n.isNonModal && k.createElement(g.U4, { onDismiss: e.close }),
            k.createElement(
                te.Provider,
                {
                    value: {
                        arrowProps: s,
                        placement: o
                    }
                },
                c.children
            ),
            k.createElement(g.U4, { onDismiss: e.close })
        )
    );
}
let tr = (0, k.createContext)(null),
    ti = (0, k.createContext)(null),
    ta = (0, k.createContext)(null),
    ts = (0, k.createContext)(null),
    to = (0, k.createContext)(null),
    tl = (0, k.createContext)(null),
    tu = (0, k.createContext)(null),
    tc = (0, k.forwardRef)((e, t) => {
        var n;
        let r = (0, k.useContext)(tl),
            i = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, z.d)(e),
            a = (0, M.B3)(t),
            s = (0, k.useRef)(null),
            o = eR(a, i.isOpen),
            l = eR(s, i.isOpen),
            u = o || l;
        return i.isOpen || u
            ? k.createElement(td, {
                  ...e,
                  state: i,
                  isExiting: u,
                  overlayRef: a,
                  modalRef: s
              })
            : null;
    });
function td(e) {
    let t = e.modalRef,
        { state: n } = e,
        { modalProps: r, underlayProps: i } = (0, g.NE)(e, n, t),
        a = eC(e.overlayRef),
        s = ey({
            ...e,
            defaultClassName: 'react-aria-ModalOverlay',
            values: {
                isEntering: a,
                isExiting: e.isExiting
            }
        }),
        o = (0, M.nP)(),
        l = {
            ...s.style,
            '--visual-viewport-height': o.height + 'px'
        };
    return k.createElement(
        g.aV,
        null,
        k.createElement(
            'div',
            {
                ...(0, M.dG)((0, M.zL)(e), i),
                ...s,
                style: l,
                ref: e.overlayRef,
                'data-entering': a || void 0,
                'data-exiting': e.isExiting || void 0
            },
            k.createElement(
                tu.Provider,
                {
                    value: {
                        modalProps: r,
                        modalRef: t,
                        state: n,
                        isExiting: e.isExiting,
                        isDismissable: e.isDismissable
                    }
                },
                s.children
            )
        )
    );
}
function tf(e) {
    let { modalProps: t, modalRef: n, isExiting: r, isDismissable: i, state: a } = (0, k.useContext)(tu),
        s = (0, k.useMemo)(() => (0, M.lq)(e.modalRef, n), [e.modalRef, n]),
        o = (0, M.B3)(s),
        l = eC(o),
        u = ey({
            ...e,
            defaultClassName: 'react-aria-Modal',
            values: {
                isEntering: l,
                isExiting: r
            }
        });
    return k.createElement(
        'div',
        {
            ...(0, M.dG)((0, M.zL)(e), t),
            ...u,
            ref: o,
            'data-entering': l || void 0,
            'data-exiting': r || void 0
        },
        i && k.createElement(g.U4, { onDismiss: a.close }),
        u.children
    );
}
let t_ = (0, k.createContext)(null),
    tp = (0, k.createContext)({}),
    th = (0, k.createContext)(null),
    tm = (0, k.createContext)(null),
    tg = (0, k.createContext)(null),
    tE = (0, k.createContext)(null);
function tv({ item: e }) {
    let { state: t, dragAndDropHooks: n, dragState: r, dropState: i } = (0, k.useContext)(tE),
        l = (0, M.B3)(e.props.ref),
        {
            rowProps: u,
            gridCellProps: c,
            descriptionProps: d,
            ..._
        } = (0, T.Fb)(
            {
                node: e,
                shouldSelectOnPressUp: !!r
            },
            t,
            l
        ),
        { hoverProps: p, isHovered: h } = (0, a.XI)({ isDisabled: !_.allowsSelection && !_.hasAction }),
        { isFocusVisible: m, focusProps: g } = (0, s.Fx)(),
        { checkboxProps: E } = (0, T.fQ)({ key: e.key }, t),
        v = null;
    r &&
        n &&
        (v = n.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            r
        ));
    let I = null,
        b = (0, k.useRef)(null),
        { visuallyHiddenProps: S } = (0, f.S)();
    i &&
        n &&
        (I = n.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            i,
            b
        ));
    let y = e.props,
        A = r && r.isDragging(e.key),
        N = ey({
            ...y,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ..._,
                isHovered: h,
                isFocusVisible: m,
                selectionMode: t.selectionManager.selectionMode,
                selectionBehavior: t.selectionManager.selectionBehavior,
                allowsDragging: !!r,
                isDragging: A,
                isDropTarget: null == I ? void 0 : I.isDropTarget
            }
        }),
        C = (null == n ? void 0 : n.renderDropIndicator) || ((e) => k.createElement(eX, { target: e })),
        R = (0, k.useRef)(null);
    return (
        (0, k.useEffect)(() => {
            r && !R.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
        }, []),
        (0, k.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        k.createElement(
            k.Fragment,
            null,
            (null == n ? void 0 : n.useDropIndicator) &&
                C({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            I &&
                !I.isHidden &&
                k.createElement(
                    'div',
                    {
                        role: 'row',
                        style: { position: 'absolute' }
                    },
                    k.createElement(
                        'div',
                        { role: 'gridcell' },
                        k.createElement('div', {
                            role: 'button',
                            ...S,
                            ...(null == I ? void 0 : I.dropIndicatorProps),
                            ref: b
                        })
                    )
                ),
            k.createElement(
                'div',
                {
                    ...(0, o.dG)((0, M.zL)(y), u, g, p, null == v ? void 0 : v.dragProps),
                    ...N,
                    ref: l,
                    'data-hovered': h || void 0,
                    'data-focused': _.isFocused || void 0,
                    'data-focus-visible': m || void 0,
                    'data-pressed': _.isPressed || void 0,
                    'data-dragging': A || void 0,
                    'data-drop-target': (null == I ? void 0 : I.isDropTarget) || void 0
                },
                k.createElement(
                    'div',
                    c,
                    k.createElement(
                        eS,
                        {
                            values: [
                                [ez, E],
                                [
                                    ek,
                                    {
                                        slots: {
                                            [eb]: {},
                                            drag: {
                                                ...(null == v ? void 0 : v.dragButtonProps),
                                                ref: R,
                                                style: { pointerEvents: 'none' }
                                            }
                                        }
                                    }
                                ],
                                [eU, { slots: { description: d } }]
                            ]
                        },
                        N.children
                    )
                )
            ),
            (null == n ? void 0 : n.useDropIndicator) &&
                null == t.collection.getKeyAfter(e.key) &&
                C({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function tI(e, t) {
    t = (0, M.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, k.useContext)(tE),
        i = (0, k.useRef)(null),
        { dropIndicatorProps: a, isHidden: s, isDropTarget: o } = n.useDropIndicator(e, r, i);
    return s
        ? null
        : k.createElement(tT, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: o,
              buttonRef: i,
              ref: t
          });
}
let tT = (0, k.forwardRef)(function (e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        { visuallyHiddenProps: s } = (0, f.S)(),
        o = ey({
            ...a,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: r }
        });
    return k.createElement(
        'div',
        {
            ...o,
            role: 'row',
            ref: t,
            'data-drop-target': r || void 0
        },
        k.createElement(
            'div',
            { role: 'gridcell' },
            k.createElement('div', {
                ...s,
                role: 'button',
                ...n,
                ref: i
            })
        )
    );
});
function tb() {
    let { dragAndDropHooks: e, dropState: t } = (0, k.useContext)(tE),
        n = (0, k.useRef)(null),
        { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: 'root' } }, t, n),
        i = t.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: a } = (0, f.S)();
    return !i && r['aria-hidden']
        ? null
        : k.createElement(
              'div',
              {
                  role: 'row',
                  'aria-hidden': r['aria-hidden'],
                  style: { position: 'absolute' }
              },
              k.createElement(
                  'div',
                  { role: 'gridcell' },
                  k.createElement('div', {
                      role: 'button',
                      ...a,
                      ...r,
                      ref: n
                  })
              )
          );
}
let tS = (0, k.createContext)({}),
    ty = (0, k.createContext)(null),
    tA = (0, k.createContext)(null);
function tN({ props: e, collection: t, menuRef: n }) {
    var r;
    let i = (0, q.D)({
            ...e,
            collection: t,
            children: void 0
        }),
        { menuProps: a } = (0, b.H9)(e, i, n),
        s = ef({
            items: i.collection,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return k.createElement(tC, { section: e });
                    case 'separator':
                        return k.createElement(e1, e.props);
                    case 'item':
                        return k.createElement(tR, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        });
    return k.createElement(
        'div',
        {
            ...(0, M.zL)(e),
            ...a,
            ref: n,
            slot: e.slot,
            style: e.style,
            className: null !== (r = e.className) && void 0 !== r ? r : 'react-aria-Menu'
        },
        k.createElement(
            eS,
            {
                values: [
                    [tA, i],
                    [e0, { elementType: 'div' }]
                ]
            },
            s
        )
    );
}
function tC({ section: e, className: t, style: n, ...r }) {
    var i, a, s;
    let o = (0, k.useContext)(tA),
        [l, u] = eN(),
        { headingProps: c, groupProps: d } = (0, b.x7)({
            heading: u,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        f = ef({
            items: o.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: t, ...n } = e.props;
                        return k.createElement(
                            e$,
                            {
                                ...c,
                                ...n,
                                ref: (0, M.lq)(l, t)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return k.createElement(tR, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return k.createElement(
        'section',
        {
            ...(0, M.zL)(r),
            ...d,
            className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || 'react-aria-Section',
            style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
            ref: e.props.ref
        },
        f
    );
}
function tR({ item: e }) {
    let t = (0, k.useContext)(tA),
        n = (0, M.B3)(e.props.ref),
        { menuItemProps: r, labelProps: i, descriptionProps: a, keyboardShortcutProps: l, ...u } = (0, b.iX)({ key: e.key }, t, n),
        c = e.props,
        { isFocusVisible: d, focusProps: f } = (0, s.Fx)(),
        _ = ey({
            ...c,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...u,
                isHovered: u.isFocused,
                isFocusVisible: d,
                selectionMode: t.selectionManager.selectionMode,
                selectionBehavior: t.selectionManager.selectionBehavior
            }
        }),
        p = (0, M.zL)(c);
    return (
        delete p.id,
        k.createElement(
            'div',
            {
                ...(0, o.dG)(p, r, f),
                ..._,
                ref: n,
                'data-hovered': u.isFocused || void 0,
                'data-focused': u.isFocused || void 0,
                'data-focus-visible': d || void 0,
                'data-pressed': u.isPressed || void 0
            },
            k.createElement(
                eS,
                {
                    values: [
                        [
                            eU,
                            {
                                slots: {
                                    label: i,
                                    description: a
                                }
                            }
                        ],
                        [tS, l]
                    ]
                },
                _.children
            )
        )
    );
}
let tO = (0, k.createContext)(null),
    tD = (0, k.createContext)(null),
    tL = (0, k.createContext)(null),
    tx = (0, k.createContext)(null),
    tw = (0, k.createContext)(null),
    tP = (0, k.createContext)(null),
    tM = (0, k.createContext)(null),
    tk = (0, k.createContext)(null),
    tU = (0, k.createContext)(null),
    tB = (0, k.createContext)(null),
    tG = (0, k.createContext)(null),
    tZ = Symbol.iterator;
class tF extends ec {
    addNode(e) {
        super.addNode(e), this.columnsDirty || (this.columnsDirty = 'column' === e.type), 'tableheader' === e.type && (this.head = e), 'tablebody' === e.type && (this.body = e);
    }
    commit(e, t) {
        this.updateColumns(), super.commit(e, t);
    }
    updateColumns() {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let e = new Map(),
            t = (n) => {
                if ('column' === n.type) e.set(n.key, n), !n.hasChildNodes && ((n.index = this.columns.length), this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
                for (let e of this.getChildren(n.key)) t(e);
            };
        for (let e of this.getChildren(this.head.key)) t(e);
        if (((this.headerRows = (0, er.GL)(e, this.columns)), (this.columnsDirty = !1), 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0)) throw Error('A table must have at least one Column with the isRowHeader prop set to true');
    }
    get columnCount() {
        return this.columns.length;
    }
    get rows() {
        return [...this.getChildren(this.body.key)];
    }
    *[tZ]() {
        yield* this.getChildren(this.body.key);
    }
    get size() {
        return [...this.getChildren(this.body.key)].length;
    }
    getFirstKey() {
        var e;
        return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let t = [...this.getChildren(this.body.key)];
        return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key;
    }
    getKeyAfter(e) {
        var t;
        let n = this.getItem(e);
        return (null == n ? void 0 : n.type) === 'column' ? (null !== (t = n.nextKey) && void 0 !== t ? t : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var t, n;
        let r = this.getItem(e);
        if ((null == r ? void 0 : r.type) === 'column') return null !== (n = r.prevKey) && void 0 !== n ? n : null;
        let i = super.getKeyBefore(e);
        return null != i && (null === (t = this.getItem(i)) || void 0 === t ? void 0 : t.type) === 'tablebody' ? null : i;
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let t of this.headerRows) if (t.key === e) return t.childNodes;
        }
        return super.getChildren(e);
    }
    clone() {
        let e = super.clone();
        return (e.headerRows = this.headerRows), (e.columns = this.columns), (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys), (e.head = this.head), (e.body = this.body), e;
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return '';
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys,
            r = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if ((n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size)) break;
        }
        return r.join(' ');
    }
    constructor(...e) {
        super(...e), (0, U._)(this, 'headerRows', []), (0, U._)(this, 'columns', []), (0, U._)(this, 'rowHeaderColumnKeys', new Set()), (0, U._)(this, 'head', new ei('tableheader', -1)), (0, U._)(this, 'body', new ei('tablebody', -2)), (0, U._)(this, 'columnsDirty', !0);
    }
}
let tV = (0, k.createContext)(null),
    tj = (0, k.createContext)(null),
    tH = (0, k.forwardRef)(function (e, t) {
        let n, r, i;
        [e, t] = eA(e, t, tV);
        let { portal: a, collection: l } = eh(
                e,
                (0, k.useMemo)(() => new tF(), [])
            ),
            u = (0, et.oy)({
                ...e,
                collection: l,
                children: void 0
            }),
            { gridProps: c } = (0, L.x6)(e, u, t),
            { dragAndDropHooks: d } = e,
            f = u.selectionManager,
            _ = !!(null == d ? void 0 : d.useDraggableCollectionState),
            p = !!(null == d ? void 0 : d.useDroppableCollectionState),
            h = (0, k.useRef)(_),
            g = (0, k.useRef)(p);
        h.current !== _ && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), g.current !== p && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        let E = !1,
            v = null,
            I = (0, k.useRef)(null);
        if (_ && d) {
            (n = d.useDraggableCollectionState({
                collection: l,
                selectionManager: f,
                preview: d.renderDragPreview ? I : void 0
            })),
                d.useDraggableCollection({}, n, t);
            let e = d.DragPreview;
            v = d.renderDragPreview ? k.createElement(e, { ref: I }, d.renderDragPreview) : null;
        }
        if (p && d) {
            r = d.useDroppableCollectionState({
                collection: l,
                selectionManager: f
            });
            let e = new m.dp(l, 'selection' === f.disabledBehavior ? new Set() : f.disabledKeys, t),
                n = d.dropTargetDelegate || new d.ListDropTargetDelegate(l, t);
            (i = d.useDroppableCollection(
                {
                    keyboardDelegate: e,
                    dropTargetDelegate: n
                },
                r,
                t
            )),
                (E = r.isDropTarget({ type: 'root' }));
        }
        let { focusProps: T, isFocused: b, isFocusVisible: S } = (0, s.Fx)(),
            y = ey({
                className: e.className,
                style: e.style,
                defaultClassName: 'react-aria-Table',
                values: {
                    isDropTarget: E,
                    isFocused: b,
                    isFocusVisible: S
                }
            }),
            { selectionBehavior: A, selectionMode: N, disallowEmptySelection: C } = u.selectionManager,
            R = (0, k.useMemo)(
                () => ({
                    selectionBehavior: 'none' === N ? null : A,
                    selectionMode: N,
                    disallowEmptySelection: C,
                    allowsDragging: _
                }),
                [A, N, C, _]
            );
        return k.createElement(
            k.Fragment,
            null,
            k.createElement(
                eS,
                {
                    values: [
                        [
                            tj,
                            {
                                state: u,
                                dragAndDropHooks: d,
                                dragState: n,
                                dropState: r
                            }
                        ],
                        [eQ, { render: t3 }]
                    ]
                },
                k.createElement(
                    s.MT,
                    null,
                    k.createElement(
                        'table',
                        {
                            ...(0, M.zL)(e),
                            ...y,
                            ...(0, o.dG)(c, T, null == i ? void 0 : i.collectionProps),
                            ref: t,
                            slot: e.slot,
                            'data-drop-target': E || void 0,
                            'data-focused': b || void 0,
                            'data-focus-visible': S || void 0
                        },
                        k.createElement(tX, { collection: l }),
                        k.createElement(tJ, {
                            collection: l,
                            isDroppable: p
                        })
                    )
                ),
                v
            ),
            k.createElement(tY.Provider, { value: R }, a)
        );
    }),
    tY = (0, k.createContext)(null),
    tW = (0, k.forwardRef)(function (e, t) {
        let n = e_({
                children: e.children,
                items: e.columns
            }),
            r = 'function' == typeof e.children ? e.children : null;
        return k.createElement(eI.Provider, { value: r }, k.createElement('tableheader', { ref: eg(e, t) }, n));
    }),
    tK = (0, k.forwardRef)(function (e, t) {
        var n;
        let r = (0, k.useContext)(eI),
            i = 'function' == typeof r ? r : e.children,
            a = e_({
                children: e.title || e.childColumns ? i : null,
                items: e.childColumns
            });
        return k.createElement('column', { ref: eg(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children) }, a);
    }),
    tz = (0, k.forwardRef)(function (e, t) {
        let n = e_(e);
        return k.createElement('tablebody', { ref: eg(e, t) }, n);
    }),
    tq = (0, k.forwardRef)(function (e, t) {
        let n = e_({
                children: e.children,
                items: e.columns,
                idScope: e.id
            }),
            r = (0, k.useMemo)(() => ({ idScope: e.id }), [e.id]);
        return k.createElement('item', { ref: eg(e, t) }, k.createElement(ev.Provider, { value: r }, n));
    }),
    tQ = (0, k.forwardRef)(function (e, t) {
        return k.createElement('cell', { ref: eg(e, t, e.children) });
    });
function tX({ collection: e }) {
    var t;
    let n = ef({
            items: e.headerRows,
            children: (0, k.useCallback)((e) => {
                if ('headerrow' === e.type) return k.createElement(t$, { item: e });
                throw Error('Unsupported node type in TableHeader: ' + e.type);
            }, [])
        }),
        { rowGroupProps: r } = (0, L.LA)();
    return k.createElement(
        'thead',
        {
            ...(0, M.zL)(e.head.props),
            ...r,
            ref: e.head.props.ref,
            className: null !== (t = e.head.props.className) && void 0 !== t ? t : 'react-aria-TableHeader',
            style: e.head.props.style
        },
        n
    );
}
function tJ({ collection: e, isDroppable: t }) {
    let n,
        r = ef({
            items: e.rows,
            children: (0, k.useCallback)((e) => {
                if ('item' === e.type) return k.createElement(t1, { item: e });
                throw Error('Unsupported node type in TableBody: ' + e.type);
            }, [])
        }),
        i = e.body.props,
        a = ey({
            ...i,
            id: void 0,
            children: void 0,
            defaultClassName: 'react-aria-TableBody',
            values: { isEmpty: 0 === e.size }
        });
    0 === e.size &&
        i.renderEmptyState &&
        (n = k.createElement(
            'tr',
            { role: 'row' },
            k.createElement(
                'td',
                {
                    role: 'gridcell',
                    colSpan: e.columnCount
                },
                i.renderEmptyState()
            )
        ));
    let { rowGroupProps: s } = (0, L.LA)();
    return k.createElement(
        'tbody',
        {
            ...(0, o.dG)((0, M.zL)(i), s),
            ...a,
            ref: e.body.props.ref,
            'data-empty': 0 === e.size || void 0
        },
        t && k.createElement(t6, null),
        r,
        n
    );
}
function t$({ item: e }) {
    let t = (0, k.useRef)(null),
        { state: n } = (0, k.useContext)(tj),
        { rowProps: r } = (0, L.Qm)({ node: e }, n, t),
        { checkboxProps: i } = (0, L.jp)(n),
        a = ef({
            items: n.collection.getChildren(e.key),
            children: (e) => {
                if ('column' === e.type) return k.createElement(t0, { column: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return k.createElement(
        'tr',
        {
            ...r,
            ref: t
        },
        k.createElement(
            eS,
            {
                values: [[ez, { slots: { selection: i } }]]
            },
            a
        )
    );
}
function t0({ column: e }) {
    var t;
    let n = (0, M.B3)(e.props.ref),
        { state: r } = (0, k.useContext)(tj),
        { columnHeaderProps: i } = (0, L.WY)({ node: e }, r, n),
        { isFocused: a, isFocusVisible: l, focusProps: u } = (0, s.Fx)(),
        c = e.props,
        d = ey({
            ...c,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Column',
            values: {
                isFocused: a,
                isFocusVisible: l,
                allowsSorting: e.props.allowsSorting,
                sortDirection: (null === (t = r.sortDescriptor) || void 0 === t ? void 0 : t.column) === e.key ? r.sortDescriptor.direction : void 0
            }
        });
    return k.createElement(
        'th',
        {
            ...(0, o.dG)((0, M.zL)(c), i, u),
            ...d,
            colSpan: e.colspan,
            ref: n,
            'data-focused': a || void 0,
            'data-focus-visible': l || void 0
        },
        d.children
    );
}
function t1({ item: e }) {
    let t,
        n,
        r = (0, M.B3)(e.props.ref),
        { state: i, dragAndDropHooks: l, dragState: u, dropState: c } = (0, k.useContext)(tj),
        { rowProps: d, ..._ } = (0, L.U)(
            {
                node: e,
                shouldSelectOnPressUp: !!u
            },
            i,
            r
        ),
        { isFocused: p, isFocusVisible: h, focusProps: m } = (0, s.Fx)(),
        { hoverProps: g, isHovered: E } = (0, a.XI)({ isDisabled: !_.allowsSelection && !_.hasAction }),
        { checkboxProps: v } = (0, L.M$)({ key: e.key }, i);
    u &&
        l &&
        (t = l.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            u
        ));
    let I = (0, k.useRef)(null),
        { visuallyHiddenProps: T } = (0, f.S)();
    c &&
        l &&
        (n = l.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            c,
            I
        ));
    let b = (null == l ? void 0 : l.renderDropIndicator) || ((e) => k.createElement(eX, { target: e })),
        S = (0, k.useRef)(null);
    (0, k.useEffect)(() => {
        u && !S.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    }, []);
    let y = e.props,
        A = u && u.isDragging(e.key),
        N = ey({
            ...y,
            id: void 0,
            defaultClassName: 'react-aria-Row',
            values: {
                ..._,
                isHovered: E,
                isFocused: p,
                isFocusVisible: h,
                selectionMode: i.selectionManager.selectionMode,
                selectionBehavior: i.selectionManager.selectionBehavior,
                isDragging: A,
                isDropTarget: null == n ? void 0 : n.isDropTarget
            }
        }),
        C = ef({
            items: i.collection.getChildren(e.key),
            children: (e) => {
                if ('cell' === e.type) return k.createElement(t2, { cell: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return k.createElement(
        k.Fragment,
        null,
        (null == l ? void 0 : l.useDropIndicator) &&
            b({
                type: 'item',
                key: e.key,
                dropPosition: 'before'
            }),
        n &&
            !n.isHidden &&
            k.createElement(
                'tr',
                {
                    role: 'row',
                    style: { height: 0 }
                },
                k.createElement(
                    'td',
                    {
                        role: 'gridcell',
                        colSpan: i.collection.columnCount,
                        style: { padding: 0 }
                    },
                    k.createElement('div', {
                        role: 'button',
                        ...T,
                        ...n.dropIndicatorProps,
                        ref: I
                    })
                )
            ),
        k.createElement(
            'tr',
            {
                ...(0, o.dG)((0, M.zL)(y), d, m, g, null == t ? void 0 : t.dragProps),
                ...N,
                ref: r,
                'data-hovered': E || void 0,
                'data-focused': _.isFocused || void 0,
                'data-focus-visible': h || void 0,
                'data-pressed': _.isPressed || void 0,
                'data-dragging': A || void 0,
                'data-drop-target': (null == n ? void 0 : n.isDropTarget) || void 0
            },
            k.createElement(
                eS,
                {
                    values: [
                        [ez, { slots: { selection: v } }],
                        [
                            ek,
                            {
                                slots: {
                                    [eb]: {},
                                    drag: {
                                        ...(null == t ? void 0 : t.dragButtonProps),
                                        ref: S,
                                        style: { pointerEvents: 'none' }
                                    }
                                }
                            }
                        ]
                    ]
                },
                C
            )
        ),
        (null == l ? void 0 : l.useDropIndicator) &&
            null == i.collection.getKeyAfter(e.key) &&
            b({
                type: 'item',
                key: e.key,
                dropPosition: 'after'
            })
    );
}
function t2({ cell: e }) {
    let t = (0, M.B3)(e.props.ref),
        { state: n, dragState: r } = (0, k.useContext)(tj);
    e.column = n.collection.columns[e.index];
    let { gridCellProps: i, isPressed: a } = (0, L.fs)(
            {
                node: e,
                shouldSelectOnPressUp: !!r
            },
            n,
            t
        ),
        { isFocused: l, isFocusVisible: u, focusProps: c } = (0, s.Fx)(),
        d = e.props,
        f = ey({
            ...d,
            id: void 0,
            defaultClassName: 'react-aria-Cell',
            values: {
                isFocused: l,
                isFocusVisible: u,
                isPressed: a
            }
        });
    return k.createElement(
        'td',
        {
            ...(0, o.dG)((0, M.zL)(d), i, c),
            ...f,
            ref: t,
            'data-focused': l || void 0,
            'data-focus-visible': u || void 0,
            'data-pressed': a || void 0
        },
        f.children
    );
}
function t3(e, t) {
    t = (0, M.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, k.useContext)(tj),
        i = (0, k.useRef)(null),
        { dropIndicatorProps: a, isHidden: s, isDropTarget: o } = n.useDropIndicator(e, r, i);
    return s
        ? null
        : k.createElement(t4, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: o,
              buttonRef: i,
              ref: t
          });
}
let t4 = (0, k.forwardRef)(function (e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        { state: s } = (0, k.useContext)(tj),
        { visuallyHiddenProps: o } = (0, f.S)(),
        l = ey({
            ...a,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: r }
        });
    return k.createElement(
        'tr',
        {
            ...(0, M.zL)(e),
            ...l,
            role: 'row',
            ref: t,
            'data-drop-target': r || void 0
        },
        k.createElement(
            'td',
            {
                role: 'gridcell',
                colSpan: s.collection.columnCount,
                style: { padding: 0 }
            },
            k.createElement('div', {
                ...o,
                role: 'button',
                ...n,
                ref: i
            })
        )
    );
});
function t6() {
    let { state: e, dragAndDropHooks: t, dropState: n } = (0, k.useContext)(tj),
        r = (0, k.useRef)(null),
        { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: 'root' } }, n, r),
        a = n.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: s } = (0, f.S)();
    return !a && i['aria-hidden']
        ? null
        : k.createElement(
              'tr',
              {
                  role: 'row',
                  'aria-hidden': i['aria-hidden'],
                  style: { height: 0 }
              },
              k.createElement(
                  'td',
                  {
                      role: 'gridcell',
                      colSpan: e.collection.columnCount,
                      style: { padding: 0 }
                  },
                  k.createElement('div', {
                      role: 'button',
                      ...s,
                      ...i,
                      ref: r
                  })
              )
          );
}
let t5 = (0, k.createContext)(null),
    t7 = (0, k.createContext)(null);
function t8({ item: e, state: t }) {
    let { key: n } = e,
        r = (0, M.B3)(e.props.ref),
        { tabProps: i, isSelected: l, isDisabled: u, isPressed: c } = (0, x.xD)({ key: n }, t, r),
        { focusProps: d, isFocused: f, isFocusVisible: _ } = (0, s.Fx)(),
        { hoverProps: p, isHovered: h } = (0, a.XI)({ isDisabled: u }),
        m = ey({
            ...e.props,
            children: e.rendered,
            defaultClassName: 'react-aria-Tab',
            values: {
                isSelected: l,
                isDisabled: u,
                isFocused: f,
                isFocusVisible: _,
                isPressed: c,
                isHovered: h
            }
        }),
        g = (0, M.zL)(e.props);
    return (
        delete g.id,
        k.createElement('div', {
            ...(0, o.dG)(g, i, d, p, m),
            ref: r,
            'data-focus-visible': _ || void 0,
            'data-pressed': c || void 0,
            'data-hovered': h || void 0
        })
    );
}
let t9 = (0, k.createContext)(null),
    ne = (0, k.createContext)({}),
    nt = (0, k.createContext)(null);
function nn(e) {
    let { state: t, triggerRef: n, tooltipProps: r } = (0, k.useContext)(nt),
        i = (0, k.useRef)(null),
        {
            overlayProps: a,
            arrowProps: s,
            placement: l
        } = (0, g.tN)({
            placement: e.placement || 'top',
            targetRef: n,
            overlayRef: i,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: t.isOpen
        }),
        u = eC(i, !!l),
        c = ey({
            ...e,
            defaultClassName: 'react-aria-Tooltip',
            values: {
                placement: l,
                isEntering: u,
                isExiting: e.isExiting
            }
        });
    e = (0, o.dG)(e, a);
    let { tooltipProps: d } = (0, P.l)(e, t);
    return k.createElement(
        'div',
        {
            ...(0, o.dG)(r, d),
            ref: (0, M.lq)(i, e.tooltipRef),
            ...c,
            style: {
                ...c.style,
                ...a.style
            },
            'data-placement': l,
            'data-entering': u || void 0,
            'data-exiting': e.isExiting || void 0
        },
        k.createElement(
            te.Provider,
            {
                value: {
                    arrowProps: s,
                    placement: l
                }
            },
            c.children
        )
    );
}
