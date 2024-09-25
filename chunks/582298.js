n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(430824),
    o = n(646504),
    s = n(834129),
    l = n(981631),
    u = n(689938),
    c = n(657480);
function d(e) {
    let t,
        { compact: d, isOwner: _, channel: E } = e,
        f = () => {
            let e = a.Z.getGuild(E.getGuildId());
            null != e &&
                ((0, i.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('1187'), n.e('90761')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, r.jsx)(t, {
                            ...n,
                            guild: e,
                            channel: E,
                            source: l.t4x.INVITE_SYSTEM_MESSAGE
                        });
                }),
                (0, o.w)());
        },
        h = (e, t) =>
            (0, r.jsx)(
                i.Anchor,
                {
                    className: c.inviteLink,
                    onClick: f,
                    children: e
                },
                t
            );
    return (
        (t = d
            ? (0, r.jsx)('div', {
                  className: c.inviteContent,
                  children: _ ? u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({ inviteHook: h }) : u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({ inviteHook: h })
              })
            : (0, r.jsxs)('div', {
                  className: c.content,
                  children: [
                      (0, r.jsx)('div', {
                          className: c.inviteHeader,
                          children: _ ? u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS
                      }),
                      (0, r.jsx)('div', {
                          className: c.inviteContent,
                          children: _ ? u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
                      }),
                      (0, r.jsx)(i.Button, {
                          onClick: f,
                          size: i.Button.Sizes.SMALL,
                          className: c.inviteButton,
                          children: u.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
                      })
                  ]
              })),
        (0, r.jsx)(s.Z, {
            className: d ? c.compact : c.inviteContent,
            iconNode: d
                ? null
                : (0, r.jsx)('img', {
                      alt: '',
                      src: n(826926),
                      width: 40,
                      height: 40
                  }),
            iconContainerClassName: c.iconContainer,
            compact: d,
            children: t
        })
    );
}
