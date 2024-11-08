n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(788307),
    u = n(43267),
    d = n(933557),
    m = n(471445),
    h = n(790145),
    f = n(313201),
    p = n(565138),
    _ = n(199902),
    g = n(592125),
    E = n(430824),
    C = n(158776),
    I = n(594174),
    x = n(388032),
    N = n(590781);
let v = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function T(e) {
    let { channel: t, children: n, gotoChannel: r, mentionCount: l, channelState: o, toggleCollapsed: c } = e,
        u = (0, a.JA)('recents-header-'.concat(t.id, '-').concat((0, f.Dt)()));
    return (0, i.jsx)(s.FocusRing, {
        offset: v,
        children: (0, i.jsxs)('div', {
            className: N.channelHeader,
            ...u,
            tabIndex: 0,
            'data-recents-channel': t.id,
            onKeyDown: function (e) {
                null != c && null != o && (('ArrowRight' === e.key && o.collapsed) || ('ArrowLeft' === e.key && !o.collapsed)) && (null == c || c(o));
            },
            children: [
                (0, i.jsx)(S, {
                    channel: t,
                    gotoChannel: r
                }),
                (0, i.jsx)(j, {
                    channel: t,
                    gotoChannel: r,
                    mentionCount: l
                }),
                n
            ]
        })
    });
}
function S(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(A, {
              channel: t,
              gotoChannel: n
          })
        : (0, i.jsx)(b, {
              channel: t,
              gotoChannel: n
          });
}
function A(e) {
    let { channel: t, gotoChannel: n } = e,
        r = (0, o.e7)([I.default], () => (t.isDM() ? I.default.getUser(t.getRecipientId()) : null)),
        l = null == r ? (0, u.x)(t) : r.getAvatarURL(void 0, 40);
    return (0, i.jsx)(s.Clickable, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)('img', {
            className: N.dmIcon,
            src: l,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function b(e) {
    let { channel: t, gotoChannel: n } = e,
        r = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id));
    return null == r
        ? null
        : (0, i.jsx)(p.Z, {
              'aria-hidden': !0,
              className: N.guildIcon,
              guild: r,
              size: p.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function j(e) {
    let { channel: t, gotoChannel: n, mentionCount: r } = e,
        a = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id)),
        c = (0, o.e7)([g.Z], () => g.Z.getChannel(t.parent_id)),
        u = (0, m.KS)(t, a),
        f = (0, d.ZP)(t, !1),
        p = null == c ? (null == a ? void 0 : a.name) : ''.concat(null == a ? void 0 : a.name, ' \u203A ').concat(c.name),
        _ = t.isMultiUserDM()
            ? x.intl.formatToPlainString(x.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(Z, { channel: t })
              : (0, i.jsx)(s.Clickable, {
                    className: l()(N.subtext, N.guildName),
                    onClick: n,
                    children: p
                });
    return (0, i.jsxs)('div', {
        className: N.channelNameSection,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-md/semibold',
                className: N.channelNameHeader,
                children: (0, i.jsxs)(s.Clickable, {
                    className: N.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == u
                            ? null
                            : (0, i.jsx)(u, {
                                  className: t.isForumLikeChannel() ? N.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, i.jsx)('span', {
                            className: N.channelNameSpan,
                            children: f
                        }),
                        null != r && r > 0
                            ? (0, i.jsx)(h.Z, {
                                  value: r,
                                  className: N.badge
                              })
                            : null
                    ]
                })
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: N.subtextContainer,
                children: _
            })
        ]
    });
}
function Z(e) {
    let { channel: t } = e,
        {
            user: n,
            activities: r,
            applicationStream: l
        } = (0, o.cj)([I.default, C.Z, _.Z], () => {
            let e = I.default.getUser(t.getRecipientId());
            return {
                user: e,
                activities: null != e ? C.Z.getActivities(e.id) : null,
                applicationStream: null != e ? _.Z.getAnyStreamForUser(e.id) : null
            };
        });
    return null == r
        ? null
        : (0, i.jsx)(c.ZP, {
              className: N.activityStatus,
              emojiClassName: N.activityEmoji,
              activities: r,
              applicationStream: l,
              hideTooltip: !0,
              user: n
          });
}
