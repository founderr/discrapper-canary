t.d(n, {
    Z: function () {
        return R;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(906732),
    d = t(979264),
    u = t(252618),
    m = t(693546),
    x = t(328977),
    h = t(666233),
    b = t(360328),
    C = t(171368),
    j = t(598077),
    g = t(430824),
    f = t(51144),
    v = t(384433),
    N = t(981631),
    _ = t(308083),
    E = t(388032),
    T = t(861683),
    I = t(125712);
function S(e) {
    let { icon: n, label: t, onClick: i, disabled: r } = e;
    return (0, l.jsxs)(o.Clickable, {
        className: a()(T.actionButton, { [T.disabled]: r }),
        onClick: r ? N.dG4 : i,
        'aria-label': t,
        children: [
            (0, l.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function p(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { analyticsLocations: r } = (0, c.ZP)(),
        s = () => {
            (0, C.openUserProfileModal)({
                userId: n.id,
                joinRequestId: i.joinRequestId,
                sourceAnalyticsLocations: r,
                analyticsLocation: {
                    section: N.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: N.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, l.jsxs)('div', {
        className: T.infoContainer,
        children: [
            (0, l.jsxs)('div', {
                className: I.memberNameContainer,
                children: [
                    (0, l.jsx)(o.Clickable, {
                        onClick: s,
                        className: a()(T.clickable, I.memberAvatar),
                        children: (0, l.jsx)(o.Avatar, {
                            src: n.getAvatarURL(t, 48),
                            'aria-label': n.username,
                            size: o.AvatarSizes.SIZE_48
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: I.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: I.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(o.Clickable, {
                                        onClick: s,
                                        className: T.clickable,
                                        children: (0, l.jsx)(o.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == n ? void 0 : n.globalName
                                        })
                                    }),
                                    (0, l.jsx)(d.ZP, {
                                        clan: null == n ? void 0 : n.clan,
                                        userId: null == n ? void 0 : n.id,
                                        contextGuildId: t,
                                        badgeSize: _.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: I.memberClanTag,
                                        containerClassName: I.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, l.jsx)(o.Clickable, {
                                onClick: s,
                                className: T.clickable,
                                children: (0, l.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: f.ZP.getUserTag(n)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(o.Clickable, {
                className: I.closeAction,
                onClick: () => m.Z.setSelectedGuildJoinRequest(t, null),
                children: (0, l.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function M(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { approveRequest: r, rejectRequest: a, handleOpenInterview: s, submitting: c } = (0, b.s)(t, n.id, i.joinRequestId, i.interviewChannelId);
    return (0, l.jsxs)('div', {
        className: T.actionRow,
        children: [
            (0, l.jsx)(S, {
                icon: o.CircleCheckIcon,
                label: E.intl.string(E.t.BzjDQE),
                onClick: r,
                disabled: c
            }),
            (0, l.jsx)(S, {
                icon: o.CircleXIcon,
                label: E.intl.string(E.t.hDtbs7),
                onClick: a,
                disabled: c
            }),
            (0, l.jsx)(S, {
                icon: o.ChatIcon,
                label: E.intl.string(E.t.KQeYoK),
                onClick: s,
                disabled: c
            })
        ]
    });
}
function R(e) {
    let { guildId: n, currentTab: t } = e,
        r = (0, x.L)({ guildId: n }),
        { user: c } = null != r ? r : {},
        d = i.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.formResponses) && void 0 !== e ? e : [];
        }, [null == r ? void 0 : r.formResponses]),
        m = i.useMemo(() => (null != c ? new j.Z(c) : null), [c]),
        b = (0, s.e7)([g.Z], () => g.Z.getGuild(n), [n]);
    return ((0, u.Tt)({
        subsection: E.intl.string(E.t.nqrK8f),
        location: null == b ? void 0 : b.name
    }),
    null != r && null != b && null != m && null != c)
        ? (0, l.jsx)('section', {
              className: T.sidebar,
              children: (0, l.jsx)(o.Scroller, {
                  children: (0, l.jsxs)('div', {
                      className: T.innerContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: T.cardContainer,
                              children: [
                                  (0, l.jsx)(p, {
                                      user: m,
                                      guildId: n,
                                      joinRequest: r
                                  }),
                                  t === v.e.PENDING &&
                                      (0, l.jsx)(M, {
                                          user: m,
                                          guildId: n,
                                          joinRequest: r
                                      })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: a()(T.cardContainer, T.responsesContainer),
                              children: (0, l.jsx)(h.Z, {
                                  guildId: b.id,
                                  formFields: d,
                                  user: m
                              })
                          })
                      ]
                  })
              })
          })
        : null;
}
