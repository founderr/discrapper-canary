"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("374470");

function r(e, t) {
  if ("horizontal" === t) {
    let {
      scrollLeft: t,
      scrollWidth: n,
      offsetWidth: i
    } = e;
    return {
      scrollPosition: t,
      scrollSize: n,
      offsetSize: i
    }
  }
  let {
    scrollTop: n,
    scrollHeight: i,
    offsetHeight: r
  } = e;
  return {
    scrollPosition: n,
    scrollSize: i,
    offsetSize: r
  }
}

function s(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
    a = e => {
      let {
        to: i,
        animate: a,
        callback: o
      } = e, {
        scrollPosition: l,
        scrollSize: u,
        offsetSize: d
      } = r(t(), s);
      n.to({
        to: function(e, t, n) {
          let i = t - n + 1;
          return e >= i - 1 ? i : Math.max(0, e)
        }(i, u, d),
        from: l,
        animate: a,
        callback: o
      })
    },
    o = e => {
      let {
        start: n,
        end: i,
        shouldScrollToStart: o = !1,
        padding: l = 0,
        animate: u,
        callback: d
      } = e, {
        scrollPosition: _,
        offsetSize: c
      } = r(t(), s);
      n -= l, i += l, n >= _ && i <= _ + c ? null != d && d() : n < _ || o ? a({
        to: n,
        animate: u,
        callback: d
      }) : a({
        to: i - c,
        animate: u,
        callback: d
      })
    };
  return {
    spring: n,
    scrollTo: a,
    mergeTo: n.mergeTo,
    scrollIntoViewRect: o,
    scrollIntoViewNode(t) {
      let {
        node: n,
        shouldScrollToStart: r = !1,
        padding: a = 0,
        animate: l = !1,
        callback: u
      } = t, {
        current: d
      } = e;
      if (null == d) return;
      let {
        offset: _,
        offsetSize: c
      } = function(e, t, n) {
        let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
          s = "horizontal" === t ? e.offsetLeft : e.offsetTop,
          a = e.offsetParent;
        for (; null != a && a !== n;)(0, i.isElement)(a, HTMLElement) ? (s += "horizontal" === t ? a.offsetLeft : a.offsetTop, a = a.offsetParent) : a = a.parentNode;
        return {
          offset: s,
          offsetSize: r
        }
      }(n, s, d);
      o({
        start: _,
        end: _ + c,
        shouldScrollToStart: r,
        padding: a,
        animate: l,
        callback: u
      })
    },
    scrollPageUp() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: o
      } = r(t(), s);
      a({
        to: i - .9 * o,
        animate: e,
        callback: n
      })
    },
    scrollPageDown() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: o
      } = r(t(), s);
      a({
        to: i + .9 * o,
        animate: e,
        callback: n
      })
    },
    scrollToTop() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      a({
        to: 0,
        animate: e,
        callback: t
      })
    },
    scrollToBottom() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      a({
        to: Number.MAX_SAFE_INTEGER,
        animate: e,
        callback: t
      })
    },
    isScrolledToTop: () => 0 === r(t(), s).scrollPosition,
    isScrolledToBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = r(t(), s);
      return e >= n - i
    }
  }
}