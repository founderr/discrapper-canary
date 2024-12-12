var i = r(21841),
    a = r(689118),
    s = r(449348),
    o = r(922689);
function l(e, n) {
    i.equal(n.length, 24, 'Invalid key length');
    var r = n.slice(0, 8),
        a = n.slice(8, 16),
        s = n.slice(16, 24);
    'encrypt' === e
        ? (this.ciphers = [
              o.create({
                  type: 'encrypt',
                  key: r
              }),
              o.create({
                  type: 'decrypt',
                  key: a
              }),
              o.create({
                  type: 'encrypt',
                  key: s
              })
          ])
        : (this.ciphers = [
              o.create({
                  type: 'decrypt',
                  key: s
              }),
              o.create({
                  type: 'encrypt',
                  key: a
              }),
              o.create({
                  type: 'decrypt',
                  key: r
              })
          ]);
}
function u(e) {
    s.call(this, e);
    var n = new l(this.type, this.options.key);
    this._edeState = n;
}
a(u, s),
    (e.exports = u),
    (u.create = function (e) {
        return new u(e);
    }),
    (u.prototype._update = function (e, n, r, i) {
        var a = this._edeState;
        a.ciphers[0]._update(e, n, r, i), a.ciphers[1]._update(r, i, r, i), a.ciphers[2]._update(r, i, r, i);
    }),
    (u.prototype._pad = o.prototype._pad),
    (u.prototype._unpad = o.prototype._unpad);
