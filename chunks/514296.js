"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
}), r("808653"), r("424973");
var n, l = r("407788"),
  i = r("792382");
n = class e extends i.default {
  static fromServer(t) {
    let {
      products: r,
      logo: n,
      ...i
    } = t;
    return new e({
      ...super.fromServer(i),
      products: r.reduce((e, t) => {
        let r = l.default.fromServer(t);
        return 0 === r.items.length ? e : (e.push(r), e)
      }, []),
      logo: n
    })
  }
  constructor(e) {
    super(e), this.products = e.products, this.logo = e.logo
  }
}