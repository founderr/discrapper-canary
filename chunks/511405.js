n.d(t, {
    G: function () {
        return I;
    },
    H: function () {
        return T;
    }
});
var r = n(309749);
var i = n(518263);
var a = n(970173);
var o = n(520712);
var s = n(268111);
var l = n(941497);
var u = n(32026);
var c = n(480839);
var d = n(744285);
var _ = n(492257);
var E = n(873817);
var f = n(392711),
    h = n.n(f),
    p = n(149765),
    m = n(915486);
function I(e) {
    return h().cloneDeepWith(e, (e) =>
        (0, p.Bw)(e)
            ? {
                  __tag__: 'bigflag',
                  data: e.toJSON()
              }
            : (0, m.lq)(e)
              ? {
                    __tag__: 'uint8array',
                    data: Array.from(e)
                }
              : void 0
    );
}
function T(e) {
    return h().cloneDeepWith(e, (e) => (null != e && 'object' == typeof e && '__tag__' in e && 'bigflag' === e.__tag__ ? p.vB(e.data) : (0, m.Bx)(e) ? new Uint8Array(e.data) : void 0));
}
