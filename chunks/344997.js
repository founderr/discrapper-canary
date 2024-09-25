n.d(t, {
    g: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(788080),
    u = n(800530),
    c = n(689938),
    d = n(494729);
let _ = (e) => a()().diff(a().unix(e), 'days');
function E(e) {
    let { classificationId: t } = e,
        i = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('25183'), n.e('18831'), n.e('45945')]).then(n.bind(n, 41164));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: u.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose
                    });
            });
        };
    return (0, r.jsx)(s.Anchor, {
        onClick: i,
        className: d.detailsButton,
        children: c.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_SEE_DETAILS_BUTTON
    });
}
function f(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(s.Anchor, {
        className: d.detailsButton,
        href: t,
        children: c.Z.Messages.SAFETY_SYSTEM_NOTIFICATION_LEARN_MORE_BUTTON
    });
}
function h(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case u.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(E, { classificationId: n });
        case u.wo.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(f, { learnMoreLink: i });
        default:
            return null;
    }
}
function p(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(s.AnnouncementsIcon, {
                size: 'xs',
                color: o.Z.colors.TEXT_LINK.css
            }),
            danger: (0, r.jsx)(s.WarningIcon, { color: o.Z.colors.STATUS_DANGER })
        };
    return null != t && t in n
        ? (0, r.jsx)('div', {
              className: d.icon,
              children: n[t]
          })
        : null;
}
function m(e) {
    let { children: t, theme: n } = e,
        i = {
            default: d.defaultFooterContainer,
            danger: d.dangerFooterContainer
        };
    return (0, r.jsx)('div', {
        className: i[null != n ? n : 'default'],
        children: t
    });
}
function I(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let i = (0, l.fr)(e.embed);
    return null == i
        ? null
        : (0, r.jsxs)(s.Clickable, {
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: d.noticeContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.headerRow,
                              children: [
                                  (0, r.jsx)(p, { iconType: i.icon }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/semibold',
                                      children: i.header
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: c.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({ daysAgo: _(null !== (n = i.timestamp) && void 0 !== n ? n : 0) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: i.body
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(m, {
                      theme: i.theme,
                      children:
                          null === (t = i.ctas) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                    (0, r.jsx)(
                                        h,
                                        {
                                            ctaType: e,
                                            classificationId: i.classification_id,
                                            learnMoreLink: i.learn_more_link
                                        },
                                        e
                                    )
                                )
                  })
              ]
          });
}
