"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("808653"), n("424973");
var r, l = n("407788"),
  i = n("792382");
r = class e extends i.default {
  static fromServer(t) {
    let {
      products: n,
      logo: r,
      ...i
    } = t;
    return new e({
      ...super.fromServer(i),
      products: n.reduce((e, t) => {
        let n = l.default.fromServer(t);
        return 0 === n.items.length ? e : (e.push(n), e)
      }, []),
      logo: r
    })
  }
  constructor(e) {
    super(e), this.products = e.products, this.logo = e.logo
  }
}