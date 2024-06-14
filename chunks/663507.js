"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  getMasonryListSectionHeaderKey: function() {
    return s
  },
  getMasonryListSectionIndex: function() {
    return a
  }
}), n("757143"), n("724458"), n("47120"), n("653041"), n("733860"), n("411104");
let r = e => "__section__".concat(e),
  s = e => "__section_header__".concat(e),
  a = e => parseInt(e.replace(/^__section__/, ""), 10),
  o = () => 0;
class l {
  getPadding() {
    return null != this.padding ? this.padding : this.itemGutter
  }
  getPaddingVertical() {
    return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
  }
  getPaddingHorizontal() {
    return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
  }
  getSectionGutter() {
    return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
  }
  mergeProps(e) {
    let {
      sections: t = this.sections,
      columns: n = this.columns,
      itemGutter: i = this.itemGutter,
      removeEdgeItemGutters: r = this.removeEdgeItemGutters,
      getItemKey: s = this.getItemKey,
      getItemHeight: a = this.getItemHeight,
      getSectionHeight: o = this.getSectionHeight,
      bufferWidth: l = this.bufferWidth,
      padding: u = this.padding,
      paddingVertical: d = this.paddingVertical,
      paddingHorizontal: _ = this.paddingHorizontal,
      marginLeft: c = this.marginLeft,
      sectionGutter: E = this.sectionGutter,
      dir: I = this.dir
    } = e;
    (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== s || this.getSectionHeight !== o || this.getItemHeight !== a || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== d || this.paddingHorizontal !== _ || this.marginLeft !== c || this.sectionGutter !== E || this.dir !== I) && (this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = s, this.getSectionHeight = o, this.getItemHeight = a, this.bufferWidth = l, this.padding = u, this.paddingVertical = d, this.paddingHorizontal = _, this.marginLeft = c, this.sectionGutter = E, this.dir = I)
  }
  computeFullCoords() {
    var e, t, n;
    if (!this.needsFullCompute) return;
    let {
      columns: i,
      getItemKey: a,
      getItemHeight: o,
      itemGutter: l,
      getSectionHeight: u,
      bufferWidth: d,
      removeEdgeItemGutters: _
    } = this, c = "rtl" === this.dir ? "right" : "left";
    this.coordsMap = {}, this.gridData = {
      boundaries: [],
      coordinates: {}
    }, this.currentRow = 0, this.lastColumnIndex = 0;
    let E = this.getPaddingHorizontal(),
      I = this.getPaddingVertical(),
      T = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
    this.columnHeights = Array(i).fill(I), this.columnWidth = (d - 2 * E - l * (i - 1) - (_ ? l : 0)) / i, this.itemGrid = [];
    let f = 0;
    for (; f < this.sections.length;) {
      this.gridData.boundaries[f] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
      let e = this.sections[f],
        d = 0,
        _ = u(f),
        I = this.getMaxColumnHeight(this.columnHeights);
      f > 0 && (I = I - l + this.getSectionGutter());
      let S = _ > 0 ? _ + l : 0;
      for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = I + S;
      for (; d < e;) {
        ;
        let e = a(f, d);
        if (null == e) {
          d++;
          continue
        }
        let [i, r] = (n = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [n[0], 0]);
        r < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = r;
        let s = o(f, d, this.columnWidth),
          u = {
            position: "absolute",
            [c]: this.columnWidth * r + l * (r + 1) - l,
            width: this.columnWidth,
            top: i - I,
            height: s
          },
          _ = {
            section: f,
            row: this.currentRow,
            column: r
          };
        this.coordsMap[e] = u, this.gridData.coordinates[e] = _, this.columnHeights[r] = i + s + l, this.itemGrid[r] = null !== (t = this.itemGrid[r]) && void 0 !== t ? t : [], this.itemGrid[r].push(e), d++
      }
      _ > 0 && (this.coordsMap[s(f)] = {
        position: "sticky",
        [c]: 0,
        width: this.columnWidth * i + l * i,
        top: 0,
        height: _
      }), this.coordsMap[r(f)] = {
        position: "absolute",
        [c]: T + E,
        width: this.columnWidth * i + l * (i - 1),
        top: I,
        height: this.getMaxColumnHeight(this.columnHeights) - I - l
      }, f++
    }
    this.columnHeights = this.columnHeights.map(e => e - l + I), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
  }
  computeVisibleSections(e, t) {
    this.computeFullCoords();
    let {
      getItemKey: n,
      coordsMap: i
    } = this;
    this.visibleSections = {};
    let s = 0;
    for (; s < this.sections.length;) {
      let a = this.sections[s],
        o = r(s),
        l = i[o];
      if (null == l) {
        s++;
        continue
      }
      let {
        top: u
      } = l, d = u + l.height;
      if (u > t) break;
      if (d < e) {
        s++;
        continue
      }
      let _ = 0,
        c = 1;
      for (d < t && d > e && (_ = a - 1, c = -1), this.visibleSections[o] = []; _ >= 0 && _ < a;) {
        let r = n(s, _),
          a = null != r ? i[r] : null;
        if (null == r || null == a) {
          _ += c;
          continue
        }
        let {
          top: l,
          height: d
        } = a;
        l + u > e - d && l + u < t && (-1 === c ? this.visibleSections[o].unshift([r, s, _]) : this.visibleSections[o].push([r, s, _])), _ += c
      }
      if (u < e && d > t) break;
      s++
    }
  }
  getMaxColumnHeight() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
    return e.reduce((e, t) => Math.max(e, t), 0)
  }
  getState() {
    return {
      coordsMap: this.coordsMap,
      gridData: this.gridData,
      visibleSections: this.visibleSections,
      totalHeight: this.totalHeight
    }
  }
  constructor() {
    i(this, "visibleSections", {}), i(this, "gridData", {
      coordinates: {},
      boundaries: []
    }), i(this, "coordsMap", {}), i(this, "columnHeights", []), i(this, "columnWidth", 0), i(this, "totalHeight", 0), i(this, "itemGrid", []), i(this, "currentRow", 0), i(this, "lastColumnIndex", 0), i(this, "needsFullCompute", !0), i(this, "bufferWidth", 0), i(this, "sections", []), i(this, "columns", 0), i(this, "itemGutter", 0), i(this, "removeEdgeItemGutters", !1), i(this, "sectionGutter", null), i(this, "padding", null), i(this, "paddingVertical", null), i(this, "paddingHorizontal", null), i(this, "marginLeft", null), i(this, "dir", "ltr"), i(this, "getItemKey", () => {
      throw Error("MasonryListComputer: getItemKey has not been implemented")
    }), i(this, "getItemHeight", () => {
      throw Error("MasonryListComputer: getItemHeight has not been implemented")
    }), i(this, "getSectionHeight", o)
  }
}