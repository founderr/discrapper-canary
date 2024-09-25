n.d(t, {
    GL: function () {
        return p;
    },
    oy: function () {
        return T;
    }
});
var r = n(648709),
    i = n(470079),
    a = n(466324);
function o(e) {
    return null != e && (!isNaN(e) || null !== String(e).match(/^(\d+)(?=%$)/));
}
function s(e) {
    if (!e) return 1;
    let t = e.match(/^(.+)(?=fr$)/);
    return t ? parseFloat(t[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function l(e, t) {
    if ('string' == typeof e) {
        let n = e.match(/^(\d+)(?=%$)/);
        if (!n) throw Error('Only percentages or numbers are supported for static column widths');
        return t * (parseFloat(n[0]) / 100);
    }
    return e;
}
function u(e, t) {
    return null != e ? l(e, t) : Number.MAX_SAFE_INTEGER;
}
function c(e, t) {
    return null != e ? l(e, t) : 0;
}
function d(e, t, n, r, i) {
    let a = !1,
        d = t.map((t, d) => {
            var _, E, f, h, p;
            let m = null != n.get(t.key) ? n.get(t.key) : null !== (f = null !== (E = null !== (_ = t.width) && void 0 !== _ ? _ : t.defaultWidth) && void 0 !== E ? E : null == r ? void 0 : r(d)) && void 0 !== f ? f : '1fr',
                I = !1,
                T = 0,
                g = 0,
                S = null;
            o(m) ? ((T = l(m, e)), (I = !0)) : (g = s(m)) <= 0 && (I = !0);
            let A = c(null !== (p = null !== (h = t.minWidth) && void 0 !== h ? h : null == i ? void 0 : i(d)) && void 0 !== p ? p : 0, e),
                v = u(t.maxWidth, e),
                N = Math.max(A, Math.min(T, v));
            return (
                I ? (S = N) : T > N && ((I = !0), (S = N)),
                !I && (a = !0),
                {
                    frozen: I,
                    baseSize: T,
                    hypotheticalMainSize: N,
                    min: A,
                    max: v,
                    flex: g,
                    targetMainSize: S,
                    violation: 0
                }
            );
        });
    for (; a; ) {
        let t = 0,
            n = 0;
        d.forEach((e) => {
            e.frozen ? (t += e.targetMainSize) : ((t += e.baseSize), (n += e.flex));
        });
        let r = e - t;
        r > 0 &&
            d.forEach((e) => {
                if (!e.frozen) {
                    let t = e.flex / n;
                    e.targetMainSize = e.baseSize + t * r;
                }
            });
        let i = 0;
        d.forEach((e) => {
            if (((e.violation = 0), !e.frozen)) {
                let { min: t, max: n, targetMainSize: r } = e;
                (e.targetMainSize = Math.max(t, Math.min(r, n))), (e.violation = e.targetMainSize - r), (i += e.violation);
            }
        }),
            (a = !1),
            d.forEach((e) => {
                0 === i || Math.sign(i) === Math.sign(e.violation) ? (e.frozen = !0) : !e.frozen && (a = !0);
            });
    }
    return _(d);
}
function _(e) {
    let t = 0,
        n = 0,
        r = [];
    return (
        e.forEach(function (e) {
            let i = e.targetMainSize,
                a = Math.round(i + t) - n;
            (t += i), (n += a), r.push(a);
        }),
        r
    );
}
class E {
    splitColumnsIntoControlledAndUncontrolled(e) {
        return e.reduce((e, t) => (null != t.props.width ? e[0].set(t.key, t) : e[1].set(t.key, t), e), [new Map(), new Map()]);
    }
    recombineColumns(e, t, n, r) {
        return new Map(e.map((e) => (n.has(e.key) ? [e.key, t.get(e.key)] : [e.key, r.get(e.key).props.width])));
    }
    getInitialUncontrolledWidths(e) {
        var t, n;
        return new Map(
            Array.from(e).map(([e, r]) => {
                var i, a;
                return [e, null !== (n = null !== (t = r.props.defaultWidth) && void 0 !== t ? t : null === (a = (i = this).getDefaultWidth) || void 0 === a ? void 0 : a.call(i, r)) && void 0 !== n ? n : '1fr'];
            })
        );
    }
    getColumnWidth(e) {
        var t;
        return null !== (t = this.columnWidths.get(e)) && void 0 !== t ? t : 0;
    }
    getColumnMinWidth(e) {
        return this.columnMinWidths.get(e);
    }
    getColumnMaxWidth(e) {
        return this.columnMaxWidths.get(e);
    }
    resizeColumnWidth(e, t, n, r, i = null, a) {
        let l = this.columnWidths,
            u = 1 / 0,
            c = new Map([...n, ...r]),
            _ = new Map(),
            E = new Map(),
            f = new Map();
        t.columns.forEach((e, n) => {
            var d, h;
            let p, m;
            if ((f.set(e.key, this.getDefaultMinWidth(t.columns[n])), i === e.key || e.props.width || o(r.get(e.key)) ? (i === e.key || o(e.props.width) || r.get(e.key) ? i !== e.key && (null === (d = e.props.width) || void 0 === d ? void 0 : null === (h = d.endsWith) || void 0 === h ? void 0 : h.call(d, '%')) && _.set(e.key, e.props.width) : ((p = e.key), (m = s(e.props.width)))) : ((p = e.key), (m = s(r.get(e.key)))), u < n)) {
                p && E.set(p, m);
                return;
            }
            if (e.key === i) {
                (u = n), c.set(e.key, Math.floor(a));
                return;
            }
            c.set(e.key, l.get(e.key));
        });
        let h = d(
                e,
                t.columns.map((e) => ({
                    ...e.props,
                    key: e.key
                })),
                c,
                (e) => this.getDefaultWidth(t.columns[e]),
                (e) => this.getDefaultMinWidth(t.columns[e])
            ),
            p = new Map();
        return (
            h.forEach((e, n) => {
                let r = t.columns[n].key;
                p.set(r, e);
            }),
            Array.from(E).forEach(([e]) => {
                p.set(e, `${E.get(e)}fr`);
            }),
            Array.from(_).forEach(([e, t]) => {
                e !== i && p.set(e, t);
            }),
            p
        );
    }
    buildColumnWidths(e, t, n) {
        return (
            (this.columnWidths = new Map()),
            (this.columnMinWidths = new Map()),
            (this.columnMaxWidths = new Map()),
            d(
                e,
                t.columns.map((e) => ({
                    ...e.props,
                    key: e.key
                })),
                n,
                (e) => this.getDefaultWidth(t.columns[e]),
                (e) => this.getDefaultMinWidth(t.columns[e])
            ).forEach((n, r) => {
                var i;
                let a = t.columns[r].key,
                    o = t.columns[r];
                this.columnWidths.set(a, n), this.columnMinWidths.set(a, c(null !== (i = o.props.minWidth) && void 0 !== i ? i : this.getDefaultMinWidth(o), e)), this.columnMaxWidths.set(a, u(o.props.maxWidth, e));
            }),
            this.columnWidths
        );
    }
    constructor(e) {
        var t, n;
        (this.columnWidths = new Map()), (this.columnMinWidths = new Map()), (this.columnMaxWidths = new Map()), (this.getDefaultWidth = null !== (t = null == e ? void 0 : e.getDefaultWidth) && void 0 !== t ? t : () => '1fr'), (this.getDefaultMinWidth = null !== (n = null == e ? void 0 : e.getDefaultMinWidth) && void 0 !== n ? n : () => 75);
    }
}
let f = 'row-header-column-' + Math.random().toString(36).slice(2),
    h = 'row-header-column-' + Math.random().toString(36).slice(2);
for (; f === h; ) h = 'row-header-column-' + Math.random().toString(36).slice(2);
function p(e, t) {
    if (0 === t.length) return [];
    let n = [],
        r = new Map();
    for (let i of t) {
        let t = i.parentKey,
            a = [i];
        for (; t; ) {
            let n = e.get(t);
            if (!n) break;
            if (r.has(n)) {
                n.colspan++;
                let { column: e, index: t } = r.get(n);
                if (t > a.length) break;
                for (let n = t; n < a.length; n++) e.splice(n, 0, null);
                for (let t = a.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
            } else
                (n.colspan = 1),
                    a.push(n),
                    r.set(n, {
                        column: a,
                        index: a.length - 1
                    });
            t = n.parentKey;
        }
        n.push(a), (i.index = n.length - 1);
    }
    let i = Math.max(...n.map((e) => e.length)),
        a = Array(i)
            .fill(0)
            .map(() => []),
        o = 0;
    for (let e of n) {
        let t = i - 1;
        for (let n of e) {
            if (n) {
                let e = a[t],
                    r = e.reduce((e, t) => e + t.colspan, 0);
                if (r < o) {
                    let i = {
                        type: 'placeholder',
                        key: 'placeholder-' + n.key,
                        colspan: o - r,
                        index: r,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: null
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = i.key), (i.prevKey = e[e.length - 1].key)), e.push(i);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = n.key), (n.prevKey = e[e.length - 1].key)), (n.level = t), (n.colIndex = o), e.push(n);
            }
            t--;
        }
        o++;
    }
    let s = 0;
    for (let e of a) {
        let n = e.reduce((e, t) => e + t.colspan, 0);
        if (n < t.length) {
            let r = {
                type: 'placeholder',
                key: 'placeholder-' + e[e.length - 1].key,
                colspan: t.length - n,
                index: n,
                value: null,
                rendered: null,
                level: s,
                hasChildNodes: !1,
                childNodes: [],
                textValue: null,
                prevKey: e[e.length - 1].key
            };
            e.push(r);
        }
        s++;
    }
    return a.map((e, t) => ({
        type: 'headerrow',
        key: 'headerrow-' + t,
        index: t,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: null
    }));
}
class m extends a.V {
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        return t ? t.prevKey : null;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        return t ? t.nextKey : null;
    }
    getFirstKey() {
        var e;
        return null === (e = (0, r.l8)(this.body.childNodes)) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        return null === (e = (0, r.s)(this.body.childNodes)) || void 0 === e ? void 0 : e.key;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return '';
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys;
        if (n) {
            let e = [];
            for (let r of t.childNodes) {
                let t = this.columns[r.index];
                if ((n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size)) break;
            }
            return e.join(' ');
        }
        return '';
    }
    constructor(e, t, n) {
        let r,
            i = new Set(),
            a = [];
        if (null == n ? void 0 : n.showSelectionCheckboxes) {
            let e = {
                type: 'column',
                key: f,
                value: null,
                textValue: '',
                level: 0,
                index: (null == n ? void 0 : n.showDragButtons) ? 1 : 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 }
            };
            a.unshift(e);
        }
        if (null == n ? void 0 : n.showDragButtons) {
            let e = {
                type: 'column',
                key: h,
                value: null,
                textValue: '',
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 }
            };
            a.unshift(e);
        }
        let o = [],
            s = new Map(),
            l = (e) => {
                switch (e.type) {
                    case 'body':
                        r = e;
                        break;
                    case 'column':
                        s.set(e.key, e), !e.hasChildNodes && (a.push(e), e.props.isRowHeader && i.add(e.key));
                        break;
                    case 'item':
                        o.push(e);
                        return;
                }
                for (let t of e.childNodes) l(t);
            };
        for (let t of e) l(t);
        let u = p(s, a);
        u.forEach((e, t) => o.splice(t, 0, e)),
            super({
                columnCount: a.length,
                items: o,
                visitNode: (e) => ((e.column = a[e.index]), e)
            }),
            (this._size = 0),
            (this.columns = a),
            (this.rowHeaderColumnKeys = i),
            (this.body = r),
            (this.headerRows = u),
            (this._size = [...r.childNodes].length),
            0 === this.rowHeaderColumnKeys.size && ((null == n ? void 0 : n.showSelectionCheckboxes) ? ((null == n ? void 0 : n.showDragButtons) ? this.rowHeaderColumnKeys.add(this.columns[2].key) : this.rowHeaderColumnKeys.add(this.columns[1].key)) : this.rowHeaderColumnKeys.add(this.columns[0].key));
    }
}
let I = {
    ascending: 'descending',
    descending: 'ascending'
};
function T(e) {
    let [t, n] = (0, i.useState)(!1),
        { selectionMode: o = 'none', showSelectionCheckboxes: s, showDragButtons: l } = e,
        u = (0, i.useMemo)(
            () => ({
                showSelectionCheckboxes: s && 'none' !== o,
                showDragButtons: l,
                selectionMode: o,
                columns: []
            }),
            [e.children, s, o, l]
        ),
        c = (0, r.Kx)(
            e,
            (0, i.useCallback)((e) => new m(e, null, u), [u]),
            u
        ),
        { disabledKeys: d, selectionManager: _ } = (0, a.S)({
            ...e,
            collection: c,
            disabledBehavior: e.disabledBehavior || 'selection'
        });
    return {
        collection: c,
        disabledKeys: d,
        selectionManager: _,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: e.sortDescriptor,
        isKeyboardNavigationDisabled: 0 === c.size || t,
        setKeyboardNavigationDisabled: n,
        sort(t, n) {
            var r;
            e.onSortChange({
                column: t,
                direction: null != n ? n : (null === (r = e.sortDescriptor) || void 0 === r ? void 0 : r.column) === t ? I[e.sortDescriptor.direction] : 'ascending'
            });
        }
    };
}
(function e(e) {
    return null;
}).getCollectionNode = function* (e, t) {
    let { children: n, columns: r } = e;
    if (((t.columns = []), 'function' == typeof n)) {
        if (!r) throw Error('props.children was a function but props.columns is missing');
        for (let e of r)
            yield {
                type: 'column',
                value: e,
                renderer: n
            };
    } else {
        let e = [];
        i.Children.forEach(n, (t) => {
            e.push({
                type: 'column',
                element: t
            });
        }),
            yield* e;
    }
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: t, items: n } = e;
    yield {
        type: 'body',
        hasChildNodes: !0,
        props: e,
        *childNodes() {
            if ('function' == typeof t) {
                if (!n) throw Error('props.children was a function but props.items is missing');
                for (let e of n)
                    yield {
                        type: 'item',
                        value: e,
                        renderer: t
                    };
            } else {
                let e = [];
                i.Children.forEach(t, (t) => {
                    e.push({
                        type: 'item',
                        element: t
                    });
                }),
                    yield* e;
            }
        }
    };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e, t) {
    let { title: n, children: r, childColumns: a } = e,
        o = n || r,
        s = e.textValue || ('string' == typeof o ? o : '') || e['aria-label'],
        l = yield {
            type: 'column',
            hasChildNodes: !!a || (n && i.Children.count(r) > 0),
            rendered: o,
            textValue: s,
            props: e,
            *childNodes() {
                if (a)
                    for (let e of a)
                        yield {
                            type: 'column',
                            value: e
                        };
                else if (n) {
                    let e = [];
                    i.Children.forEach(r, (t) => {
                        e.push({
                            type: 'column',
                            element: t
                        });
                    }),
                        yield* e;
                }
            },
            shouldInvalidate: (e) => (u(e), !1)
        },
        u = (e) => {
            for (let t of l) !t.hasChildNodes && e.columns.push(t);
        };
    u(t);
};
function g(e) {
    return null;
}
g.getCollectionNode = function* (e, t) {
    let { children: n, textValue: r, UNSTABLE_childItems: a } = e;
    yield {
        type: 'item',
        props: e,
        textValue: r,
        'aria-label': e['aria-label'],
        hasChildNodes: !0,
        *childNodes() {
            if (
                (t.showDragButtons &&
                    (yield {
                        type: 'cell',
                        key: 'header-drag',
                        props: { isDragButtonCell: !0 }
                    }),
                t.showSelectionCheckboxes &&
                    'none' !== t.selectionMode &&
                    (yield {
                        type: 'cell',
                        key: 'header',
                        props: { isSelectionCell: !0 }
                    }),
                'function' == typeof n)
            ) {
                for (let e of t.columns)
                    yield {
                        type: 'cell',
                        element: n(e.key),
                        key: e.key
                    };
                if (a)
                    for (let e of a)
                        yield {
                            type: 'item',
                            value: e
                        };
            } else {
                let e = [],
                    r = [];
                if (
                    (i.Children.forEach(n, (n) => {
                        if (n.type === g) {
                            if (e.length < t.columns.length) throw Error("All of a Row's child Cells must be positioned before any child Rows.");
                            r.push({
                                type: 'item',
                                element: n
                            });
                        } else
                            e.push({
                                type: 'cell',
                                element: n
                            });
                    }),
                    e.length !== t.columns.length)
                )
                    throw Error(`Cell count must match column count. Found ${e.length} cells and ${t.columns.length} columns.`);
                yield* e, yield* r;
            }
        },
        shouldInvalidate: (e) => e.columns.length !== t.columns.length || e.columns.some((e, n) => e.key !== t.columns[n].key) || e.showSelectionCheckboxes !== t.showSelectionCheckboxes || e.showDragButtons !== t.showDragButtons || e.selectionMode !== t.selectionMode
    };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: t } = e,
        n = e.textValue || ('string' == typeof t ? t : '') || e['aria-label'] || '';
    yield {
        type: 'cell',
        props: e,
        rendered: t,
        textValue: n,
        'aria-label': e['aria-label'],
        hasChildNodes: !1
    };
};
function S(e, t, n) {
    let r;
    return 'all' === e ? (r = new Set(n.flattenedRows.filter((e) => e.props.UNSTABLE_childItems || e.props.children.length > n.userColumnCount).map((e) => e.key))).delete(t) : (r = new Set(e)).has(t) ? r.delete(t) : r.add(t), r;
}
function A(e) {
    return e ? ('all' === e ? 'all' : new Set(e)) : new Set();
}
function v(e, t) {
    let n,
        r,
        { expandedKeys: i = new Set() } = t,
        a = [],
        o = 0,
        s = 0,
        l = [],
        u = new Map();
    (null == t ? void 0 : t.showSelectionCheckboxes) && o++, (null == t ? void 0 : t.showDragButtons) && o++;
    let c = [],
        d = (e) => {
            switch (e.type) {
                case 'body':
                    (n = e), u.set(n.key, n);
                    break;
                case 'column':
                    !e.hasChildNodes && s++;
                    break;
                case 'item':
                    c.push(e);
                    return;
            }
            for (let t of e.childNodes) d(t);
        };
    for (let t of e) 'column' === t.type && l.push(t), d(t);
    o += s;
    let _ = 0,
        E = (e, t) => {
            let r;
            if ('item' === e.type) {
                let t = [];
                for (let n of e.childNodes)
                    if ('cell' === n.type) {
                        let e = { ...n };
                        e.index + 1 === o && (e.nextKey = null), t.push({ ...e });
                    }
                let r = {
                    ...e,
                    childNodes: t,
                    parentKey: n.key,
                    level: 1,
                    index: _++
                };
                a.push(r);
            }
            let s = {};
            'placeholder' !== e.type && 'column' !== e.type && (s.indexOfType = t), Object.assign(e, s), u.set(e.key, e);
            let l = 0;
            for (let t of e.childNodes) !('item' === t.type && 'all' !== i && !i.has(e.key)) && (null == t.parentKey && (t.parentKey = e.key), r ? ((r.nextKey = t.key), (t.prevKey = r.key)) : (t.prevKey = null), 'item' === t.type ? E(t, l++) : E(t, t.index), (r = t));
            r && (r.nextKey = null);
        };
    return (
        c.forEach((e, t) => {
            E(e, t), r ? ((r.nextKey = e.key), (e.prevKey = r.key)) : (e.prevKey = null), (r = e);
        }),
        r && (r.nextKey = null),
        {
            keyMap: u,
            userColumnCount: s,
            flattenedRows: a,
            tableNodes: [
                ...l,
                {
                    ...n,
                    childNodes: a
                }
            ]
        }
    );
}
