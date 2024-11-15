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
        return p;
    }
});
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(442837),
    d = l(481060),
    s = l(686546),
    u = l(271383),
    c = l(430824),
    o = l(594174),
    h = l(5192),
    m = l(192918),
    x = l(388032),
    v = l(404720);
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
            let a = (0, t.jsx)(d.Avatar, {
                src: e.getAvatarURL(l, 80),
                size: d.AvatarSizes.SIZE_16,
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
                      s.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: v.facePileItem,
                          mask: s.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a
                      },
                      e.id
                  );
        })
    });
}
function _(e) {
    let { guildId: n, channelId: l, entry: i, maxAvatars: r = 3 } = e,
        s = i.author_id,
        j = (0, a.e7)([o.default], () => o.default.getUser(s)),
        { displayParticipants: f, participant1: g, participant2: _, numOtherParticipants: p } = (0, m.Z)(i, r),
        E = (0, a.e7)([u.ZP], () => u.ZP.getMember(n, s)),
        Z = (0, a.e7)(
            [c.Z],
            () => {
                var e;
                return (null == E ? void 0 : E.colorRoleId) != null ? (null === (e = c.Z.getRole(n, E.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [n, E]
        );
    if (null == j) return null;
    let A = null == E ? void 0 : E.colorString,
        I = h.ZP.getName(n, l, j);
    return (0, t.jsxs)('div', {
        className: v.userSection,
        children: [
            (0, t.jsx)(N, {
                users: f,
                guildId: n,
                'aria-hidden': !0
            }),
            (0, t.jsx)(d.NameWithRole, {
                color: null != A ? A : void 0,
                roleName: Z,
                name: I,
                className: v.userName,
                'aria-hidden': !0
            }),
            p > 0
                ? (0, t.jsx)('div', {
                      className: v.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, t.jsxs)(d.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: v.additionalParticipantBadgeText,
                          children: ['+', p]
                      })
                  })
                : null,
            (0, t.jsx)(d.HiddenVisually, {
                children: x.intl.format(x.t.rH95Gh, {
                    user0: h.ZP.getName(n, l, g),
                    user1: h.ZP.getName(n, l, _),
                    countOthers: p,
                    name0Hook: (e, n) => (0, t.jsx)('span', { children: e }, n),
                    name1Hook: (e, n) => (0, t.jsx)('span', { children: e }, n),
                    countOthersHook: (e, n) => (0, t.jsx)('span', { children: e }, n)
                })
            })
        ]
    });
}
function p(e) {
    let { children: n } = e;
    return (0, t.jsx)(d.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: v.contentTitle,
        lineClamp: 1,
        children: n
    });
}
