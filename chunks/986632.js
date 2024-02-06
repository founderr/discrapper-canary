"use strict";
i.r(t), i.d(t, {
  INACTIVE_CATEGORY_INDEX: function() {
    return s
  },
  EmojiPickerStore: function() {
    return a
  },
  StickerPickerStore: function() {
    return o
  },
  SoundboardPickerStore: function() {
    return u
  },
  ApplicationCommandDiscoveryPickerStore: function() {
    return c
  }
});
var n = i("308503");
let s = -1,
  l = Object.freeze({
    inspectedExpressionPosition: {
      rowIndex: 0,
      columnIndex: 0
    },
    activeCategoryIndex: 0,
    searchPlaceholder: null
  });

function r() {
  let e = (0, n.default)(e => l);
  return {
    useStore: e,
    getState: () => e.getState(),
    setInspectedExpressionPosition: (t, i, n) => {
      e.setState({
        inspectedExpressionPosition: {
          rowIndex: i,
          columnIndex: t,
          source: n
        }
      })
    },
    setActiveCategoryIndex: t => {
      e.setState({
        activeCategoryIndex: t
      })
    },
    setSearchPlaceholder: t => {
      e.setState({
        searchPlaceholder: t
      })
    },
    resetStoreState: () => {
      e.setState(l)
    }
  }
}
let a = r(),
  o = r(),
  u = r(),
  c = r()