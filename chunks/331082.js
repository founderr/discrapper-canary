"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, i = n("666038");
r = class e extends i.default {
  static createFromServer(t) {
    return new e(t)
  }
  constructor(e) {
    super(), this.id = e.id, this.name = e.name
  }
}