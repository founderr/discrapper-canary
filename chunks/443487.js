l.d(n, {
    F9: function () {
        return _;
    },
    Zb: function () {
        return f;
    },
    cA: function () {
        return j;
    },
    e$: function () {
        return g;
    },
    ll: function () {
        return E;
    }
});
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(442837),
    s = l(481060),
    d = l(686546),
    u = l(271383),
    c = l(430824),
    o = l(594174),
    h = l(5192),
    m = l(192918),
    x = l(689938),
    v = l(494399);
function j() {
    return (0, t.jsx)('div', {
        className: v.container,
        'aria-hidden': !0
    });
}
function f(e) {
    let { children: n, selected: l } = e;
    return (0, t.jsx)('div', {
        className: r()(v.container, v.openOnHover, { [v.selected]: l }),
        children: n
    });
}
function g(e) {
    let { children: n } = e;
    return (0, t.jsx)('div', {
        className: v.infoSection,
        children: n
    });
}
function N(e) {
    let { users: n, guildId: l, 'aria-hidden': i } = e;
    return (0, t.jsx)('div', {
        className: v.facePile,
        children: n.map((e, r) => {
            let a = (0, t.jsx)(s.Avatar, {
                src: e.getAvatarURL(l, 80),
                size: s.AvatarSizes.SIZE_16,
                'aria-label': i ? void 0 : e.username,
                'aria-hidden': i
            });
            return r === n.length - 1
                ? (0, t.jsx)(
                      'div',
                      {
                          className: v.facePileItem,
                          children: a
                      },
                      e.id
                  )
                : (0, t.jsx)(
                      d.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: v.facePileItem,
                          mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a
                      },
                      e.id
                  );
        })
    });
}
function _(e) {
    let { guildId: n, channelId: l, entry: i, maxAvatars: r = 3 } = e,
        d = i.author_id,
        j = (0, a.e7)([o.default], () => o.default.getUser(d)),
        { displayParticipants: f, participant1: g, participant2: _, numOtherParticipants: E } = (0, m.Z)(i, r),
        p = (0, a.e7)([u.ZP], () => u.ZP.getMember(n, d)),
        Z = (0, a.e7)(
            [c.Z],
            () => {
                var e;
                return (null == p ? void 0 : p.colorRoleId) != null ? (null === (e = c.Z.getRole(n, p.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [n, p]
        );
    if (null == j) return null;
    let I = null == p ? void 0 : p.colorString,
        A = h.ZP.getName(n, l, j);
    return (0, t.jsxs)('div', {
        className: v.userSection,
        children: [
            (0, t.jsx)(N, {
                users: f,
                guildId: n,
                'aria-hidden': !0
            }),
            (0, t.jsx)(s.NameWithRole, {
                color: null != I ? I : void 0,
                roleName: Z,
                name: A,
                className: v.userName,
                'aria-hidden': !0
            }),
            E > 0
                ? (0, t.jsx)('div', {
                      className: v.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, t.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: v.additionalParticipantBadgeText,
                          children: ['+', E]
                      })
                  })
                : null,
            (0, t.jsx)(s.HiddenVisually, {
                children: x.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: h.ZP.getName(n, l, g),
                    user1: h.ZP.getName(n, l, _),
                    countOthers: E,
                    name0Hook: (e, n) => (0, t.jsx)('span', { children: e }, n),
                    name1Hook: (e, n) => (0, t.jsx)('span', { children: e }, n),
                    countOthersHook: (e, n) => (0, t.jsx)('span', { children: e }, n)
                })
            })
        ]
    });
}
function E(e) {
    let { children: n } = e;
    return (0, t.jsx)(s.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: v.contentTitle,
        lineClamp: 1,
        children: n
    });
}
