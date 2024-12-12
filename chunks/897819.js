var i = r(546299),
    a = r(585741);
function s() {
    if (!(this instanceof s)) return new s();
    a.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
}
i.inherits(s, a),
    (e.exports = s),
    (s.blockSize = 512),
    (s.outSize = 224),
    (s.hmacStrength = 192),
    (s.padLength = 64),
    (s.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h.slice(0, 7), 'big') : i.split32(this.h.slice(0, 7), 'big');
    });
