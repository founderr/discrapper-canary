n.d(t, {
    B: function () {
        return m;
    },
    b: function () {
        return c;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(893776),
    o = n(489813),
    a = n(388032),
    d = n(119866);
function u() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        [u, c] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    o(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                await r.Z.verifyResend(), o(!0), c(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, l.jsx)(s.Text, {
              className: d.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: a.intl.string(a.t.H3Q7U1)
          })
        : (0, l.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              submitting: e,
              onClick: m,
              children: u ? a.intl.string(a.t.WnX4Jy) : a.intl.string(a.t['13ofGh'])
          });
}
function c() {
    return (0, l.jsx)(o.PU, {
        icon: s.EnvelopeIcon,
        text: a.intl.string(a.t.c6EUJC),
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, l.jsx)(s.Tooltip, {
            text: a.intl.string(a.t.mGlP39),
            children: (e) =>
                (0, l.jsx)(s.Button, {
                    ...e,
                    size: s.Button.Sizes.SMALL,
                    disabled: !0,
                    children: a.intl.string(a.t['13ofGh'])
                })
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? a.intl.string(a.t.qY1jHB) : a.intl.string(a.t.c6EUJC);
    return (0, l.jsx)(o.PU, {
        icon: s.EnvelopeIcon,
        text: n,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, l.jsx)(u, {})
    });
}
