let i = r(689118),
    a = r(988324).Buffer,
    s = r(1199);
function o(e) {
    s.call(this, e), (this.enc = 'pem');
}
i(o, s),
    (e.exports = o),
    (o.prototype.decode = function (e, n) {
        let r = e.toString().split(/[\r\n]+/g),
            i = n.label.toUpperCase(),
            o = /^-----(BEGIN|END) ([^-]+)-----$/,
            l = -1,
            u = -1;
        for (let e = 0; e < r.length; e++) {
            let n = r[e].match(o);
            if (null !== n) {
                if (n[2] === i) {
                    if (-1 === l) {
                        if ('BEGIN' !== n[1]) break;
                        l = e;
                    } else {
                        if ('END' !== n[1]) break;
                        u = e;
                        break;
                    }
                }
            }
        }
        if (-1 === l || -1 === u) throw Error('PEM section not found for: ' + i);
        let c = r.slice(l + 1, u).join('');
        c.replace(/[^a-z0-9+/=]+/gi, '');
        let d = a.from(c, 'base64');
        return s.prototype.decode.call(this, d, n);
    });
