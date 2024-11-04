n.d(t, {
    Q: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(740903),
    l = n(426434),
    s = n(112824),
    a = n(181339),
    o = n(195189),
    c = n(122051),
    d = n(3896),
    u = n(981631),
    m = n(388032);
let h = (e) => ({
    [r.u.CAPTCHA_AND_RAID_PROTECTION]: [
        {
            renderComponent: () => (0, i.jsx)(a.Z, { guild: e }, 'raid-alerts'),
            enabled: !e.hasFeature(u.oNc.RAID_ALERTS_DISABLED)
        },
        {
            renderComponent: () => (0, i.jsx)(o.Z, { title: m.intl.string(m.t.gOkFfH) }, 'captcha-suspicious-joins'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(o.Z, { title: m.intl.string(m.t.r3esyM) }, 'captcha-raid-joins'),
            enabled: !0
        }
    ],
    [r.u.DM_AND_SPAM_PROTECTION]: [
        {
            renderComponent: () => (0, i.jsx)(d.Z, { guild: e }, 'verification-level'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(c.Z, { guild: e }, 'member-verification'),
            enabled: e.hasVerificationGate()
        },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    o.Z,
                    {
                        title: m.intl.string(m.t.QiONLy),
                        details: m.intl.string(m.t.dSRTMD)
                    },
                    'hide-suspicious-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    o.Z,
                    {
                        title: m.intl.string(m.t['f+8F8P']),
                        details: m.intl.string(m.t.qChrIy)
                    },
                    'filter-unknown-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(o.Z, { title: m.intl.string(m.t.EkSAHR) }, 'outbound-links-warn'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(o.Z, { title: m.intl.string(m.t['7cAQmp']) }, 'delete-spam'),
            enabled: !0
        }
    ],
    [r.u.PERMISSIONS]: [
        {
            renderComponent: () => (0, i.jsx)(l.Z, { guild: e }, 'guild-mfa'),
            enabled: e.mfaLevel === u.BpS.ELEVATED
        },
        {
            renderComponent: () => (0, i.jsx)(s.Z, { guild: e }, 'disable-risky-perms'),
            enabled: 0 === (0, s.R)(e).length
        }
    ]
});
