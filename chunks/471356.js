let i = r(423906);
class a extends Error {
    constructor(e) {
        super(e), (this.name = 'TimeoutError');
    }
}
let s = (e, n, r) =>
    new Promise((s, o) => {
        if ('number' != typeof n || n < 0) throw TypeError('Expected `milliseconds` to be a positive number');
        if (n === 1 / 0) {
            s(e);
            return;
        }
        let l = setTimeout(() => {
            if ('function' == typeof r) {
                try {
                    s(r());
                } catch (e) {
                    o(e);
                }
                return;
            }
            let i = 'string' == typeof r ? r : `Promise timed out after ${n} milliseconds`,
                l = r instanceof Error ? r : new a(i);
            'function' == typeof e.cancel && e.cancel(), o(l);
        }, n);
        i(e.then(s, o), () => {
            clearTimeout(l);
        });
    });
(e.exports = s), (e.exports.default = s), (e.exports.TimeoutError = a);
