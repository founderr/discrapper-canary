var r = n(47120);
var i = n(735250);
n(470079);
var a = n(392711);
var o = n(481060),
    s = n(689938),
    l = n(508483);
let u = (e) => {
    let t = (0, a.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: r
            } = e,
            i = [null, null],
            a = Object.values(null !== (t = null == r ? void 0 : r.state) && void 0 !== t ? t : {});
        return a.length > 0 && (i[0] = a.join(', ')), '' !== n && (i[1] = n), i;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: l.container,
              children: [
                  (0, i.jsx)(o.Heading, {
                      className: l.breadcrumbsHeader,
                      color: 'header-secondary',
                      variant: 'heading-sm/semibold',
                      children: s.Z.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
                  }),
                  t.map((e, t) =>
                      (0, i.jsxs)(
                          'div',
                          {
                              className: l.breadcrumbContainer,
                              children: [
                                  (0, i.jsx)('div', { className: l.breadcrumbDot }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      className: l.breadcrumbText,
                                      children: e
                                  })
                              ]
                          },
                          ''.concat(e, '+').concat(t)
                      )
                  )
              ]
          });
};
t.Z = u;
