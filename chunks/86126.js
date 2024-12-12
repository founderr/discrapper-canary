n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(674180),
    d = n(584825),
    u = n(289393),
    m = n(727843),
    h = n(14263),
    g = n(783454),
    x = n(388032),
    p = n(83701),
    f = n(338188);
function C(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: C, guildId: _, groupListingId: I } = (0, m.N)(),
        v = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListing(C)),
        N = null == v ? void 0 : v.id,
        T = (0, h.Z)(_),
        b = r.useMemo(() => {
            var e;
            return null != T && null != v && (null !== (e = T[v.role_id]) && void 0 !== e ? e : 0);
        }, [T, v]),
        j = 0 === b,
        S = null == N,
        E = null !== (t = null == v ? void 0 : v.archived) && void 0 !== t && t,
        { deleteSubscriptionListing: R, submitting: y } = (0, d.r4)(),
        { archiveSubscriptionListing: Z, submitting: A } = (0, d._1)(),
        L = () => {
            let e = async () => {
                if (!!S || (s()(null != I, 'group listing doesnt exist'), s()(null != N, 'subscription listing doesnt exist'), !!(await R(_, I, N)))) null == l || l();
            };
            (0, o.openModalLazy)(async () => {
                let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                return (n) =>
                    (0, i.jsx)(t, {
                        header: x.intl.string(x.t['8ZRTsr']),
                        confirmText: x.intl.string(x.t.GMtG6u),
                        cancelText: x.intl.string(x.t['ETE/oK']),
                        onConfirm: () => {
                            e();
                        },
                        confirmButtonColor: o.Button.Colors.RED,
                        ...n,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: x.intl.string(x.t.Y4KjUF)
                        })
                    });
            });
        },
        { allowSelfRemoveMonetization: D } = (0, c.gX)(_);
    return null == v
        ? null
        : (0, i.jsx)(g.Z, {
              title: x.intl.string(x.t['7Si8Ul']),
              children: E
                  ? (0, i.jsxs)(o.FormSection, {
                        title: x.intl.string(x.t['2D14T0']),
                        disabled: !D,
                        children: [
                            (0, i.jsx)(o.FormText, {
                                type: o.FormText.Types.DESCRIPTION,
                                className: p.formDescription,
                                disabled: !D,
                                children: x.intl.string(x.t.Y4KjUF)
                            }),
                            (0, i.jsx)(o.Tooltip, {
                                shouldShow: !j,
                                text: x.intl.formatToPlainString(x.t.ABeonZ, { listingMemberCount: b }),
                                children: (e) =>
                                    (0, i.jsx)(o.Button, {
                                        ...e,
                                        wrapperClassName: f.deleteListingButton,
                                        color: o.Button.Colors.RED,
                                        onClick: L,
                                        submitting: y,
                                        disabled: !D || !j,
                                        children: x.intl.string(x.t.GMtG6u)
                                    })
                            })
                        ]
                    })
                  : (0, i.jsxs)(o.FormSection, {
                        title: x.intl.string(x.t['MS/4U1']),
                        disabled: !D,
                        children: [
                            (0, i.jsx)(o.FormText, {
                                type: o.FormText.Types.DESCRIPTION,
                                className: p.formDescription,
                                disabled: !D,
                                children: x.intl.string(x.t['5/Jeg4'])
                            }),
                            (0, i.jsx)(o.Button, {
                                wrapperClassName: f.deleteListingButton,
                                color: o.Button.Colors.RED,
                                onClick: () => {
                                    s()(null != I, 'group listing doesnt exist'),
                                        s()(null != N, 'subscription listing doesnt exist'),
                                        (0, o.openModalLazy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    header: x.intl.string(x.t['8ZRTsr']),
                                                    confirmText: x.intl.string(x.t.RL0wjo),
                                                    cancelText: x.intl.string(x.t['ETE/oK']),
                                                    onConfirm: () => {
                                                        Z(_, I, N);
                                                    },
                                                    confirmButtonColor: o.Button.Colors.RED,
                                                    ...t,
                                                    children: (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/normal',
                                                        children: x.intl.string(x.t['5/Jeg4'])
                                                    })
                                                });
                                        });
                                },
                                submitting: A,
                                disabled: !D,
                                children: x.intl.string(x.t.RL0wjo)
                            })
                        ]
                    })
          });
}
