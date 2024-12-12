r.d(n, {
    ZP: function () {
        return o;
    }
});
let i = Object.freeze({
        overflowY: 'scroll',
        overflowX: 'hidden'
    }),
    a = Object.freeze({
        overflowX: 'scroll',
        overflowY: 'hidden'
    }),
    s = Object.freeze({ overflow: 'auto' });
function o(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        r = 'vertical' === n ? i : 'horizontal' === n ? a : s;
    return null != e
        ? {
              ...r,
              ...e
          }
        : r;
}
