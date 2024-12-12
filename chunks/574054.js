r.d(t, {
    R: function () {
        return function e(t, r, E, i = 0) {
            return new a.cW((a, c) => {
                let s = t[i];
                if (null === r || 'function' != typeof s) a(r);
                else {
                    let l = s({ ...r }, E);
                    o.X && s.id && null === l && n.kg.log(`Event processor "${s.id}" dropped event`),
                        (0, _.J8)(l)
                            ? l.then((r) => e(t, r, E, i + 1).then(a)).then(null, c)
                            : e(t, l, E, i + 1)
                                  .then(a)
                                  .then(null, c);
                }
            });
        };
    }
});
var a = r(928541),
    n = r(622916),
    _ = r(573736),
    o = r(255768);
