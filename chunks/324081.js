n.d(t, {
    Z: function () {
        return N;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(91192),
    s = n(442837),
    l = n(481060),
    u = n(788307),
    c = n(43267),
    d = n(933557),
    _ = n(471445),
    E = n(790145),
    f = n(313201),
    h = n(565138),
    p = n(199902),
    m = n(592125),
    I = n(430824),
    T = n(158776),
    g = n(594174),
    S = n(689938),
    A = n(699420);
let v = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function N(e) {
    let { channel: t, children: n, gotoChannel: i, mentionCount: a, channelState: s, toggleCollapsed: u } = e,
        c = (0, o.JA)('recents-header-'.concat(t.id, '-').concat((0, f.Dt)()));
    function d(e) {
        null != u && null != s && (('ArrowRight' === e.key && s.collapsed) || ('ArrowLeft' === e.key && !s.collapsed)) && (null == u || u(s));
    }
    return (0, r.jsx)(l.FocusRing, {
        offset: v,
        children: (0, r.jsxs)('div', {
            className: A.channelHeader,
            ...c,
            tabIndex: 0,
            'data-recents-channel': t.id,
            onKeyDown: d,
            children: [
                (0, r.jsx)(O, {
                    channel: t,
                    gotoChannel: i
                }),
                (0, r.jsx)(y, {
                    channel: t,
                    gotoChannel: i,
                    mentionCount: a
                }),
                n
            ]
        })
    });
}
function O(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(R, {
              channel: t,
              gotoChannel: n
          })
        : (0, r.jsx)(C, {
              channel: t,
              gotoChannel: n
          });
}
function R(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, s.e7)([g.default], () => (t.isDM() ? g.default.getUser(t.getRecipientId()) : null)),
        a = null == i ? (0, c.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(l.Clickable, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)('img', {
            className: A.dmIcon,
            src: a,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function C(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, s.e7)([I.Z], () => I.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(h.Z, {
              'aria-hidden': !0,
              className: A.guildIcon,
              guild: i,
              size: h.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function y(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        o = (0, s.e7)([I.Z], () => I.Z.getGuild(t.guild_id)),
        u = (0, s.e7)([m.Z], () => m.Z.getChannel(t.parent_id)),
        c = (0, _.KS)(t, o),
        f = (0, d.ZP)(t, !1),
        h = null == u ? (null == o ? void 0 : o.name) : ''.concat(null == o ? void 0 : o.name, ' \u203A ').concat(u.name),
        p = t.isMultiUserDM()
            ? S.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(b, { channel: t })
              : (0, r.jsx)(l.Clickable, {
                    className: a()(A.subtext, A.guildName),
                    onClick: n,
                    children: h
                });
    return (0, r.jsxs)('div', {
        className: A.channelNameSection,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: 'heading-md/semibold',
                className: A.channelNameHeader,
                children: (0, r.jsxs)(l.Clickable, {
                    className: A.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == c
                            ? null
                            : (0, r.jsx)(c, {
                                  className: t.isForumLikeChannel() ? A.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, r.jsx)('span', {
                            className: A.channelNameSpan,
                            children: f
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)(E.Z, {
                                  value: i,
                                  className: A.badge
                              })
                            : null
                    ]
                })
            }),
            (0, r.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: A.subtextContainer,
                children: p
            })
        ]
    });
}
function b(e) {
    let { channel: t } = e,
        {
            user: n,
            activities: i,
            applicationStream: a
        } = (0, s.cj)([g.default, T.Z, p.Z], () => {
            let e = g.default.getUser(t.getRecipientId());
            return {
                user: e,
                activities: null != e ? T.Z.getActivities(e.id) : null,
                applicationStream: null != e ? p.Z.getAnyStreamForUser(e.id) : null
            };
        });
    return null == i
        ? null
        : (0, r.jsx)(u.Z, {
              className: A.activityStatus,
              emojiClassName: A.activityEmoji,
              activities: i,
              applicationStream: a,
              hideTooltip: !0,
              user: n
          });
}
