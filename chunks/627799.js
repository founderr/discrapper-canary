n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(653041);
var i = n(735250);
n(470079);
var a = n(243814),
    o = n(993365),
    s = n(481060),
    l = n(63063),
    u = n(981631),
    c = n(689938),
    d = n(702245);
function _(e) {
    let t,
        { accountScopes: n } = e,
        r = [];
    return (n.includes(a.x.SDK_SOCIAL_LAYER) &&
        ((t = c.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_HEADING.format({ learnMoreURL: l.Z.getArticleURL(u.BhN.SOCIAL_LAYER_CONNECTIONS) })),
        r.push(
            {
                icon: s.FriendsIcon,
                text: c.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_FRIENDS.format({ maxFriends: u.L4X })
            },
            {
                icon: s.ChatSmileIcon,
                text: c.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_MESSAGING
            },
            {
                icon: s.GameControllerIcon,
                text: c.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_ACTIVITY
            },
            {
                icon: s.SettingsIcon,
                text: c.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_PROMOTIONS
            }
        )),
    0 === r.length)
        ? null
        : (0, i.jsxs)('div', {
              className: d.applicationEducation,
              children: [
                  null != t && t.length > 0
                      ? (0, i.jsx)(s.Heading, {
                            variant: 'heading-sm/normal',
                            className: d.sectionLabel,
                            children: t
                        })
                      : null,
                  r.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(
                          E,
                          {
                              icon: n,
                              text: r
                          },
                          t
                      );
                  })
              ]
          });
}
function E(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)('div', {
        className: d.entry,
        children: [
            (0, i.jsx)(t, {
                className: d.entryIcon,
                color: 'currentColor'
            }),
            (0, i.jsx)(o.x, {
                variant: 'text-md/normal',
                className: d.entryText,
                children: n
            })
        ]
    });
}
