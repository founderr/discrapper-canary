n.d(t, {
    i: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(800530),
    u = n(689938),
    c = n(375675);
let d = (e) => a()().diff(a().unix(e), 'days');
function _(e) {
    var t, i, a, _, E;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        h = null !== (a = null === (t = f.fields) || void 0 === t ? void 0 : t.find((e) => e.rawName === l.Cg.CLASSIFICATION_ID)) && void 0 !== a ? a : void 0,
        p = null !== (_ = null == h ? void 0 : h.rawValue) && void 0 !== _ ? _ : void 0,
        m = null !== (E = null === (i = f.fields) || void 0 === i ? void 0 : i.find((e) => e.rawName === l.Cg.INCIDENT_TIMESTAMP)) && void 0 !== E ? E : void 0,
        I = null == m || null == m.rawValue ? void 0 : parseFloat(m.rawValue);
    if (null == p || null == I) return null;
    let T = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('25183'), n.e('18831'), n.e('45945')]).then(n.bind(n, 41164));
            return (t) =>
                (0, r.jsx)(e, {
                    classificationId: p,
                    source: l.s.SystemDM,
                    transitionState: t.transitionState,
                    onClose: t.onClose
                });
        });
    };
    return (0, r.jsxs)(s.Clickable, {
        onClick: T,
        className: c.safetyPolicyNoticeContainer,
        children: [
            (0, r.jsxs)('div', {
                className: c.noticeContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.headerRow,
                        children: [
                            (0, r.jsx)(s.WarningIcon, {
                                className: c.warningIcon,
                                color: o.Z.colors.STATUS_DANGER
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: u.Z.Messages.SAFETY_POLICY_NOTICE_HEADER
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: c.incidentTiming,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            children: u.Z.Messages.SAFETY_POLICY_NOTICE_DAYS_AGO.format({ daysAgo: d(I) })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: c.noticeBody,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: u.Z.Messages.SAFETY_POLICY_NOTICE_BODY
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: c.footerContainer,
                children: (0, r.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    className: c.detailsButton,
                    color: s.Button.Colors.WHITE,
                    children: u.Z.Messages.SAFETY_POLICY_NOTICE_BUTTON
                })
            })
        ]
    });
}
