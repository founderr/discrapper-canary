var r = n(566885),
    i = n(470592),
    a = n(339718),
    o = n(49693),
    s = function (e) {
        var t = 1 === e;
        return function (n, s, l) {
            for (var u, c = a(n), d = i(c), _ = r(s, l), E = o(d); E-- > 0; )
                if (_((u = d[E]), E, c))
                    switch (e) {
                        case 0:
                            return u;
                        case 1:
                            return E;
                    }
            return t ? -1 : void 0;
        };
    };
e.exports = {
    findLast: s(0),
    findLastIndex: s(1)
};
