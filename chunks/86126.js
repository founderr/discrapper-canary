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
    p = n(517194),
    f = n(79489);
function C(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: C, guildId: I, groupListingId: _ } = (0, m.N)(),
        N = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListing(C)),
        v = null == N ? void 0 : N.id,
        T = (0, h.Z)(I),
        j = r.useMemo(() => {
            var e;
            return null != T && null != N && (null !== (e = T[N.role_id]) && void 0 !== e ? e : 0);
        }, [T, N]),
        S = 0 === j,
        b = null == v,
        E = null !== (t = null == N ? void 0 : N.archived) && void 0 !== t && t,
        { deleteSubscriptionListing: R, submitting: Z } = (0, d.r4)(),
        { archiveSubscriptionListing: A, submitting: L } = (0, d._1)(),
        y = () => {
            let e = async () => {
                if (!!b || (s()(null != _, 'group listing doesnt exist'), s()(null != v, 'subscription listing doesnt exist'), !!(await R(I, _, v)))) null == l || l();
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
        { allowSelfRemoveMonetization: D } = (0, c.gX)(I);
    return null == N
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
                                shouldShow: !S,
                                text: x.intl.formatToPlainString(x.t.ABeonZ, { listingMemberCount: j }),
                                children: (e) =>
                                    (0, i.jsx)(o.Button, {
                                        ...e,
                                        wrapperClassName: f.deleteListingButton,
                                        color: o.Button.Colors.RED,
                                        onClick: y,
                                        submitting: Z,
                                        disabled: !D || !S,
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
                                    s()(null != _, 'group listing doesnt exist'),
                                        s()(null != v, 'subscription listing doesnt exist'),
                                        (0, o.openModalLazy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    header: x.intl.string(x.t['8ZRTsr']),
                                                    confirmText: x.intl.string(x.t.RL0wjo),
                                                    cancelText: x.intl.string(x.t['ETE/oK']),
                                                    onConfirm: () => {
                                                        A(I, _, v);
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
                                submitting: L,
                                disabled: !D,
                                children: x.intl.string(x.t.RL0wjo)
                            })
                        ]
                    })
          });
}
