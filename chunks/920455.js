n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(239091),
    u = n(688465),
    c = n(63063),
    d = n(689079),
    f = n(981631),
    _ = n(388032),
    h = n(412825);
function p(e) {
    var t;
    let { className: a, activeCommand: p } = e,
        m = i.useCallback(
            (e) => {
                var t;
                let i = null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == i) {
                    e.preventDefault();
                    return;
                }
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: i,
                            label: _.intl.string(_.t.oJ1Mu7)
                        });
                });
            },
            [null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id]
        );
    return null == p
        ? null
        : (0, r.jsxs)('div', {
              className: s()(a, h.bar),
              onContextMenu: m,
              children: [
                  (0, r.jsx)(u.Z, {}),
                  (0, r.jsxs)(o.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      children: [_.intl.format(_.t.AlCInJ, { betaUserLimit: d.um }), _.intl.format(_.t.U1zEqq, { learnMoreUrl: c.Z.getArticleURL(f.BhN.USING_APPS_FAQ) })]
                  })
              ]
          });
}
