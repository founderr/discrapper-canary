var n = r(161581),
    a = r(824232),
    o = r(957833),
    i = r(996173),
    _ = r(251069),
    E = r(641236),
    s = E('iterator'),
    c = E('toStringTag'),
    I = i.values,
    u = function (e, t) {
        if (e) {
            if (e[s] !== I)
                try {
                    _(e, s, I);
                } catch (t) {
                    e[s] = I;
                }
            if ((!e[c] && _(e, c, t), a[t])) {
                for (var r in i)
                    if (e[r] !== i[r])
                        try {
                            _(e, r, i[r]);
                        } catch (t) {
                            e[r] = i[r];
                        }
            }
        }
    };
for (var l in a) u(n[l] && n[l].prototype, l);
u(o, 'DOMTokenList');
