t.d(i, {
    s: function () {
        return r;
    }
});
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(621145),
    o = t(388032),
    s = t(246697);
let r = (e) => {
    let { flaggedContent: i } = e;
    return 0 === i.length
        ? null
        : (0, n.jsxs)('div', {
              className: s.classificationEvidenceContainer,
              children: [
                  (0, n.jsx)(a.Text, {
                      variant: 'eyebrow',
                      color: 'text-muted',
                      children: o.intl.string(o.t.s64CMj)
                  }),
                  (0, n.jsx)(l.Z, { flaggedContent: i })
              ]
          });
};
