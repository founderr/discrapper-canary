var i = r(546299),
    a = r(740245);
function s() {
    if (!(this instanceof s)) return new s();
    a.call(this), (this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
}
i.inherits(s, a),
    (e.exports = s),
    (s.blockSize = 1024),
    (s.outSize = 384),
    (s.hmacStrength = 192),
    (s.padLength = 128),
    (s.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h.slice(0, 12), 'big') : i.split32(this.h.slice(0, 12), 'big');
    });
