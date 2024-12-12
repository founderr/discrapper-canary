var i = r(977791),
    a = SyntaxError,
    s = 'object' == typeof StopIteration ? StopIteration : null;
e.exports = function (e) {
    if (!s) throw new a('this environment lacks StopIteration');
    i.set(e, '[[Done]]', !1);
    var n = {
        next: function () {
            var e = i.get(this, '[[Iterator]]'),
                n = i.get(e, '[[Done]]');
            try {
                return {
                    done: n,
                    value: n ? void 0 : e.next()
                };
            } catch (n) {
                if ((i.set(e, '[[Done]]', !0), n !== s)) throw n;
                return {
                    done: !0,
                    value: void 0
                };
            }
        }
    };
    return i.set(n, '[[Iterator]]', e), n;
};
