"use strict";
s.r(t);
var n = s("570140");
t.default = {
  addKeybind(e) {
    n.default.dispatch({
      type: "KEYBINDS_ADD_KEYBIND",
      keybind: e
    })
  },
  setKeybind(e) {
    n.default.dispatch({
      type: "KEYBINDS_SET_KEYBIND",
      keybind: e
    })
  },
  deleteKeybind(e) {
    n.default.dispatch({
      type: "KEYBINDS_DELETE_KEYBIND",
      id: e
    })
  },
  enableAll(e) {
    n.default.dispatch({
      type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
      enable: e
    })
  }
}