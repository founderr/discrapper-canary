var i = r(302454),
    a = r.n(i),
    s = r(840498);
function o(e, n, r, i, a) {
    let o;
    return (
        !r && (n += '\n\n'),
        (o = e(n, {
            inline: r,
            ...i
        })),
        (o = (0, s.ge)(o)),
        (o = (0, s.RA)(o)),
        null != a && (o = a(o, r)),
        o
    );
}
n.Z = {
    reactParserFor(e) {
        let n = a().parserFor(e),
            r = a().reactFor(a().ruleOutput(e, 'react'));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return r(o(n, e, i, a, s), a);
        };
    },
    astParserFor(e) {
        let n = a().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return o(n, e, r, i, a);
        };
    }
};
