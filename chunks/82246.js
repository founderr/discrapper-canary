var r = n(566885),
    i = n(470592),
    a = n(339718),
    s = n(49693),
    o = function (e) {
        var t = 1 === e;
        return function (n, o, l) {
            for (var u, c = a(n), d = i(c), _ = r(o, l), E = s(d); E-- > 0; )
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
    findLast: o(0),
    findLastIndex: o(1)
};
