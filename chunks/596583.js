r(47120);
var i = r(200651);
r(192379);
var s = r(120356),
    a = r.n(s),
    n = r(512722),
    l = r.n(n),
    o = r(442837),
    C = r(780384),
    d = r(481060),
    c = r(493683),
    x = r(37234),
    p = r(410030),
    h = r(518950),
    f = r(819640),
    u = r(63063),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    g = r(792451),
    L = r(814667),
    S = r(981631),
    v = r(388032),
    y = r(790877);
let N = (e, t) => {
        f.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel(e), t();
    },
    w = (e) => {
        let { user: t, trialCreationResult: r, onClose: s } = e,
            { avatarSrc: n, eventHandlers: l } = (0, h.Z)({
                user: t,
                size: d.AvatarSizes.SIZE_56
            }),
            o = m.ZP.getName(t),
            C = t.username !== o && r === _.Fz.SUCCESS,
            c = r === _.Fz.FAIL;
        return (0, i.jsxs)('div', {
            className: y.referredUserRowContainer,
            children: [
                (0, i.jsx)(d.Avatar, {
                    imageClassName: a()({ [y.erroredAvatar]: c }),
                    src: n,
                    'aria-label': o,
                    size: d.AvatarSizes.SIZE_56,
                    ...l
                }),
                (0, i.jsxs)('div', {
                    className: y.referredUserRowBody,
                    children: [
                        c
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Text, {
                                          className: y.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: o
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-md/medium',
                                          className: y.userName,
                                          children: v.intl.format(v.t.RO3T4O, { userName: o })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(d.Tooltip, {
                                  text: v.intl.string(v.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: a } = e;
                                      return (0, i.jsx)(d.Clickable, {
                                          onClick: () => N(t.id, s),
                                          className: y.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: a,
                                          children: (0, i.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              className: y.displayName,
                                              children: o
                                          })
                                      });
                                  }
                              }),
                        C &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                className: y.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    };
t.Z = (e) => {
    let { selectedUsers: t, trialCreationResult: r, onClose: s } = e,
        a = [...t].map((e) =>
            (0, i.jsx)(
                w,
                {
                    user: e,
                    trialCreationResult: r.get(e.id),
                    onClose: s
                },
                e.id
            )
        ),
        n = (0, o.e7)([j.Z], () => j.Z.getReferralsRemaining());
    l()(null !== n, 'Referrals remaining should not be null');
    let c = (0, p.Fg)(),
        x = (0, C.ap)(c) ? L.Z : g.Z,
        h = v.intl.string(v.t.Pcb7KC),
        f = [...r.values()].filter((e) => e === _.Fz.SUCCESS).length;
    return (
        n > 0 && (h = v.intl.formatToPlainString(v.t.iWtOfH, { numReferrals: f })),
        0 === f && (h = v.intl.string(v.t['7VBEub'])),
        (0, i.jsxs)('div', {
            className: y.confrimationContainer,
            children: [
                (0, i.jsx)(d.Clickable, {
                    onClick: s,
                    className: y.closeButtonContainer,
                    children: (0, i.jsx)(d.XSmallIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20
                    })
                }),
                (0, i.jsx)(x, { className: y.headerIcon }),
                (0, i.jsx)(d.Heading, {
                    variant: 'heading-lg/bold',
                    className: y.heading,
                    children: h
                }),
                (0, i.jsx)('div', {
                    className: y.confirmedUserContainer,
                    children: a
                }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/medium',
                    children: v.intl.format(v.t.CZaMHh, {
                        days: 10,
                        helpdeskArticle: u.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM)
                    })
                })
            ]
        })
    );
};
