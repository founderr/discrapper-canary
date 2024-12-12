var i = r(957578).Buffer;
function a(e, n) {
    (this._block = i.alloc(e)), (this._finalSize = n), (this._blockSize = e), (this._len = 0);
}
(a.prototype.update = function (e, n) {
    'string' == typeof e && ((n = n || 'utf8'), (e = i.from(e, n)));
    for (var r = this._block, a = this._blockSize, s = e.length, o = this._len, l = 0; l < s; ) {
        for (var u = o % a, c = Math.min(s - l, a - u), d = 0; d < c; d++) r[u + d] = e[l + d];
        (o += c), (l += c), o % a == 0 && this._update(r);
    }
    return (this._len += s), this;
}),
    (a.prototype.digest = function (e) {
        var n = this._len % this._blockSize;
        (this._block[n] = 128), this._block.fill(0, n + 1), n >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var i = (4294967295 & r) >>> 0,
                a = (r - i) / 4294967296;
            this._block.writeUInt32BE(a, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4);
        }
        this._update(this._block);
        var s = this._hash();
        return e ? s.toString(e) : s;
    }),
    (a.prototype._update = function () {
        throw Error('_update must be implemented by subclass');
    }),
    (e.exports = a);
