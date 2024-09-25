n.d(t, {
    F9: function () {
        return g;
    },
    Zb: function () {
        return m;
    },
    cA: function () {
        return p;
    },
    e$: function () {
        return I;
    },
    ll: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(686546),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    _ = n(5192),
    E = n(192918),
    f = n(689938),
    h = n(494399);
function p() {
    return (0, r.jsx)('div', {
        className: h.container,
        'aria-hidden': !0
    });
}
function m(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: a()(h.container, h.openOnHover, { [h.selected]: n }),
        children: t
    });
}
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: h.infoSection,
        children: t
    });
}
function T(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: h.facePile,
        children: t.map((e, a) => {
            let o = (0, r.jsx)(s.Avatar, {
                src: e.getAvatarURL(n, 80),
                size: s.AvatarSizes.SIZE_16,
                'aria-label': i ? void 0 : e.username,
                'aria-hidden': i
            });
            return a === t.length - 1
                ? (0, r.jsx)(
                      'div',
                      {
                          className: h.facePileItem,
                          children: o
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: h.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: o
                      },
                      e.id
                  );
        })
    });
}
function g(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: a = 3 } = e,
        l = i.author_id,
        p = (0, o.e7)([d.default], () => d.default.getUser(l)),
        { displayParticipants: m, participant1: I, participant2: g, numOtherParticipants: S } = (0, E.Z)(i, a),
        A = (0, o.e7)([u.ZP], () => u.ZP.getMember(t, l)),
        v = (0, o.e7)(
            [c.Z],
            () => {
                var e;
                return (null == A ? void 0 : A.colorRoleId) != null ? (null === (e = c.Z.getRole(t, A.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [t, A]
        );
    if (null == p) return null;
    let N = null == A ? void 0 : A.colorString,
        O = _.ZP.getName(t, n, p);
    return (0, r.jsxs)('div', {
        className: h.userSection,
        children: [
            (0, r.jsx)(T, {
                users: m,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.NameWithRole, {
                color: null != N ? N : void 0,
                roleName: v,
                name: O,
                className: h.userName,
                'aria-hidden': !0
            }),
            S > 0
                ? (0, r.jsx)('div', {
                      className: h.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: h.additionalParticipantBadgeText,
                          children: ['+', S]
                      })
                  })
                : null,
            (0, r.jsx)(s.HiddenVisually, {
                children: f.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: _.ZP.getName(t, n, I),
                    user1: _.ZP.getName(t, n, g),
                    countOthers: S,
                    name0Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: h.contentTitle,
        lineClamp: 1,
        children: t
    });
}
