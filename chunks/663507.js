n.d(t, {
    DP: function () {
        return d;
    },
    ZI: function () {
        return p;
    },
    ZP: function () {
        return h;
    },
    t$: function () {
        return _;
    }
});
var r = n(757143);
var i = n(724458);
var a = n(47120);
var o = n(653041);
var s = n(733860);
var l = n(411104);
function u(e, t, n) {
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
let c = (e) => '__section__'.concat(e),
    d = (e) => '__section_header__'.concat(e),
    _ = (e) => parseInt(e.replace(/^__section__/, ''), 10);
function E(e) {
    return e.reduce((e, t, n) => (t < e[0] ? [t, n] : e), [e[0], 0]);
}
let f = () => 0;
class h {
    getPadding(e) {
        var t;
        return null == this.padding ? this.itemGutter : 'number' == typeof this.padding ? this.padding : null !== (t = this.padding[e]) && void 0 !== t ? t : this.itemGutter;
    }
    getPaddingLeft() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('left');
    }
    getPaddingRight() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('right');
    }
    getPaddingTop() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('top');
    }
    getPaddingBottom() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('bottom');
    }
    getSectionGutter() {
        return null != this.sectionGutter ? this.sectionGutter : this.itemGutter;
    }
    mergeProps(e) {
        let { sections: t = this.sections, columns: n = this.columns, itemGutter: r = this.itemGutter, removeEdgeItemGutters: i = this.removeEdgeItemGutters, getItemKey: a = this.getItemKey, getItemHeight: o = this.getItemHeight, getSectionHeight: s = this.getSectionHeight, bufferWidth: l = this.bufferWidth, padding: u = this.padding, paddingVertical: c = this.paddingVertical, paddingHorizontal: d = this.paddingHorizontal, marginLeft: _ = this.marginLeft, sectionGutter: E = this.sectionGutter, dir: f = this.dir } = e;
        if (this.sections !== t || this.columns !== n || this.itemGutter !== r || this.removeEdgeItemGutters !== i || this.getItemKey !== a || this.getSectionHeight !== s || this.getItemHeight !== o || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== c || this.paddingHorizontal !== d || this.marginLeft !== _ || this.sectionGutter !== E || this.dir !== f) (this.needsFullCompute = !0), (this.sections = t), (this.columns = n), (this.itemGutter = r), (this.getItemKey = a), (this.getSectionHeight = s), (this.getItemHeight = o), (this.bufferWidth = l), (this.padding = u), (this.paddingVertical = c), (this.paddingHorizontal = d), (this.marginLeft = _), (this.sectionGutter = E), (this.dir = f);
    }
    computeFullCoords() {
        var e, t;
        if (!this.needsFullCompute) return;
        let { columns: n, getItemKey: r, getItemHeight: i, itemGutter: a, getSectionHeight: o, bufferWidth: s, removeEdgeItemGutters: l } = this,
            u = 'rtl' === this.dir ? 'right' : 'left';
        (this.coordsMap = {}),
            (this.gridData = {
                boundaries: [],
                coordinates: {}
            }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let _ = this.getPaddingTop(),
            f = this.getPaddingBottom(),
            h = this.getPaddingLeft(),
            p = this.getPaddingRight(),
            m = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
        (this.columnHeights = Array(n).fill(_)), (this.columnWidth = (s - p - h - a * (n - 1) - (l ? a : 0)) / n), (this.itemGrid = []);
        let I = 0;
        for (; I < this.sections.length; ) {
            (this.gridData.boundaries[I] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let e = this.sections[I],
                s = 0,
                l = o(I),
                _ = this.getMaxColumnHeight(this.columnHeights);
            I > 0 && (_ = _ - a + this.getSectionGutter());
            let f = l > 0 ? l + a : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = _ + f;
            for (; s < e; ) {
                let e = r(I, s);
                if (null == e) {
                    s++;
                    continue;
                }
                let [n, o] = E(this.columnHeights);
                o < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = o);
                let l = i(I, s, this.columnWidth),
                    c = {
                        position: 'absolute',
                        [u]: this.columnWidth * o + a * (o + 1) - a + h,
                        width: this.columnWidth,
                        top: n - _,
                        height: l
                    },
                    d = {
                        section: I,
                        row: this.currentRow,
                        column: o
                    };
                (this.coordsMap[e] = c), (this.gridData.coordinates[e] = d), (this.columnHeights[o] = n + l + a), (this.itemGrid[o] = null !== (t = this.itemGrid[o]) && void 0 !== t ? t : []), this.itemGrid[o].push(e), s++;
            }
            l > 0 &&
                (this.coordsMap[d(I)] = {
                    position: 'sticky',
                    [u]: h,
                    width: this.columnWidth * n + a * n,
                    top: 0,
                    height: l
                }),
                (this.coordsMap[c(I)] = {
                    position: 'absolute',
                    [u]: m,
                    width: this.columnWidth * n + a * (n - 1) + h + p,
                    top: _,
                    height: this.getMaxColumnHeight(this.columnHeights) - _
                }),
                I++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - a + f)), (this.totalHeight = this.getMaxColumnHeight()), (this.visibleSections = {}), (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, t) {
        this.computeFullCoords();
        let { getItemKey: n, coordsMap: r } = this;
        this.visibleSections = {};
        let i = 0;
        for (; i < this.sections.length; ) {
            let a = this.sections[i],
                o = c(i),
                s = r[o];
            if (null == s) {
                i++;
                continue;
            }
            let { top: l } = s,
                u = l + s.height;
            if (l > t) break;
            if (u < e) {
                i++;
                continue;
            }
            let d = 0,
                _ = 1;
            for (u < t && u > e && ((d = a - 1), (_ = -1)), this.visibleSections[o] = []; d >= 0 && d < a; ) {
                let a = n(i, d),
                    s = null != a ? r[a] : null;
                if (null == a || null == s) {
                    d += _;
                    continue;
                }
                let { top: u, height: c } = s;
                u + l > e - c && u + l < t && (-1 === _ ? this.visibleSections[o].unshift([a, i, d]) : this.visibleSections[o].push([a, i, d])), (d += _);
            }
            if (l < e && u > t) break;
            i++;
        }
    }
    getMaxColumnHeight() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return e.reduce((e, t) => Math.max(e, t), 0);
    }
    getState() {
        return {
            coordsMap: this.coordsMap,
            gridData: this.gridData,
            visibleSections: this.visibleSections,
            totalHeight: this.totalHeight
        };
    }
    constructor() {
        u(this, 'visibleSections', {}),
            u(this, 'gridData', {
                coordinates: {},
                boundaries: []
            }),
            u(this, 'coordsMap', {}),
            u(this, 'columnHeights', []),
            u(this, 'columnWidth', 0),
            u(this, 'totalHeight', 0),
            u(this, 'itemGrid', []),
            u(this, 'currentRow', 0),
            u(this, 'lastColumnIndex', 0),
            u(this, 'needsFullCompute', !0),
            u(this, 'bufferWidth', 0),
            u(this, 'sections', []),
            u(this, 'columns', 0),
            u(this, 'itemGutter', 0),
            u(this, 'removeEdgeItemGutters', !1),
            u(this, 'sectionGutter', null),
            u(this, 'padding', null),
            u(this, 'paddingVertical', null),
            u(this, 'paddingHorizontal', null),
            u(this, 'marginLeft', null),
            u(this, 'dir', 'ltr'),
            u(this, 'getItemKey', () => {
                throw Error('MasonryListComputer: getItemKey has not been implemented');
            }),
            u(this, 'getItemHeight', () => {
                throw Error('MasonryListComputer: getItemHeight has not been implemented');
            }),
            u(this, 'getSectionHeight', f);
    }
}
function p(e, t, n) {
    let r = {},
        i = {};
    for (let i in e)
        if (null == t[i]) r[i] = e[i];
        else {
            let r = e[i],
                a = t[i];
            for (let e = 0; e < r.length; e++) {
                let [t] = r[e];
                !a.some((e) => {
                    let [n] = e;
                    return t === n;
                }) && n(r[e][1], r[e][2], !0);
            }
        }
    for (let r in t)
        if (null == e[r]) i[r] = t[r];
        else {
            let i = e[r],
                a = t[r];
            for (let e = 0; e < a.length; e++) {
                let [t] = a[e];
                !i.some((e) => {
                    let [n] = e;
                    return n === t;
                }) && n(a[e][1], a[e][2], !1);
            }
        }
}
