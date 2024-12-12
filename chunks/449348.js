var i = r(21841);
function a(e) {
    (this.options = e), (this.type = this.options.type), (this.blockSize = 8), this._init(), (this.buffer = Array(this.blockSize)), (this.bufferOff = 0), (this.padding = !1 !== e.padding);
}
(e.exports = a),
    (a.prototype._init = function () {}),
    (a.prototype.update = function (e) {
        return 0 === e.length ? [] : 'decrypt' === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e);
    }),
    (a.prototype._buffer = function (e, n) {
        for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - n), i = 0; i < r; i++) this.buffer[this.bufferOff + i] = e[n + i];
        return (this.bufferOff += r), r;
    }),
    (a.prototype._flushBuffer = function (e, n) {
        return this._update(this.buffer, 0, e, n), (this.bufferOff = 0), this.blockSize;
    }),
    (a.prototype._updateEncrypt = function (e) {
        var n = 0,
            r = 0,
            i = Array((((this.bufferOff + e.length) / this.blockSize) | 0) * this.blockSize);
        0 !== this.bufferOff && ((n += this._buffer(e, n)), this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
        for (var a = e.length - ((e.length - n) % this.blockSize); n < a; n += this.blockSize) this._update(e, n, i, r), (r += this.blockSize);
        for (; n < e.length; n++, this.bufferOff++) this.buffer[this.bufferOff] = e[n];
        return i;
    }),
    (a.prototype._updateDecrypt = function (e) {
        for (var n = 0, r = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, a = Array(i * this.blockSize); i > 0; i--) (n += this._buffer(e, n)), (r += this._flushBuffer(a, r));
        return (n += this._buffer(e, n)), a;
    }),
    (a.prototype.final = function (e) {
        var n, r;
        return (e && (n = this.update(e)), (r = 'encrypt' === this.type ? this._finalEncrypt() : this._finalDecrypt()), n) ? n.concat(r) : r;
    }),
    (a.prototype._pad = function (e, n) {
        if (0 === n) return !1;
        for (; n < e.length; ) e[n++] = 0;
        return !0;
    }),
    (a.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var e = Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0), e;
    }),
    (a.prototype._unpad = function (e) {
        return e;
    }),
    (a.prototype._finalDecrypt = function () {
        i.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
        var e = Array(this.blockSize);
        return this._flushBuffer(e, 0), this._unpad(e);
    });
