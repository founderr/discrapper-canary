t.d(n, {
    Km: function () {
        return i;
    },
    bC: function () {
        return s;
    },
    md: function () {
        return o;
    }
});
var r = t(192379),
    a = t(772848);
let i = 262,
    o = 100;
function s(e, n) {
    let t = r.useMemo(() => 'clan-banner-container-'.concat((0, a.Z)()), []);
    return {
        styleContent: r.useMemo(() => {
            let r = e.map((e, n) => '--primary-'.concat(n, ': ').concat(e, ';')).join('\n'),
                a = n.map((e, n) => '--secondary-'.concat(n, ': ').concat(e, ';')).join('\n');
            return '#'.concat(t, ' {\n        ').concat(r, '\n        ').concat(a, '\n      }');
        }, [t, e, n]),
        containerId: t
    };
}
