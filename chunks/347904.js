n.d(t, {
    s4: function () {
        return s;
    },
    vJ: function () {
        return l;
    }
});
var r,
    i = n(757143);
var a = n(392711);
var o = n(302221);
!(function (e) {
    e.OUT_OF_BURSTS = 'out of burst reactions modal';
})(r || (r = {}));
let s = (e, t) => {
        let n = (0, o.WY)([t.r, t.g, t.b], 2);
        return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            '['
                .concat(n[0][0] / 255, ',')
                .concat(n[0][1] / 255, ',')
                .concat(n[0][2] / 255, ',')
        )).replace(
            /\[0,0,1,/g,
            '['
                .concat(n[1][0] / 255, ',')
                .concat(n[1][1] / 255, ',')
                .concat(n[1][2] / 255, ',')
        ));
    },
    l = (0, a.memoize)((e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
        return Math.abs(t);
    });
