n.d(i, {
    s: function () {
        return r;
    }
});
var t = n(200651);
n(192379);
var a = n(481060),
    l = n(621145),
    s = n(689938),
    o = n(246697);
let r = (e) => {
    let { flaggedContent: i } = e;
    return 0 === i.length
        ? null
        : (0, t.jsxs)('div', {
              className: o.classificationEvidenceContainer,
              children: [
                  (0, t.jsx)(a.Text, {
                      variant: 'eyebrow',
                      color: 'text-muted',
                      children: s.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
                  }),
                  (0, t.jsx)(l.Z, { flaggedContent: i })
              ]
          });
};
