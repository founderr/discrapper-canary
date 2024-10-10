r.d(t, {
    R: function () {
        return function e(t, r, i, E = 0) {
            return new n.cW((n, c) => {
                let s = t[E];
                if (null === r || 'function' != typeof s) n(r);
                else {
                    let I = s({ ...r }, i);
                    o.X && s.id && null === I && a.kg.log(`Event processor "${s.id}" dropped event`),
                        (0, _.J8)(I)
                            ? I.then((r) => e(t, r, i, E + 1).then(n)).then(null, c)
                            : e(t, I, i, E + 1)
                                  .then(n)
                                  .then(null, c);
                }
            });
        };
    }
});
var n = r(928541),
    a = r(622916),
    _ = r(573736),
    o = r(255768);
