n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(63063),
    l = n(981631),
    u = n(388032),
    c = n(702245);
function d(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(i.x.SDK_SOCIAL_LAYER) &&
        ((t = u.intl.formatToPlainString(u.t.DfBeUl, { learnMoreURL: o.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
        a.push(
            {
                icon: s.FriendsIcon,
                text: u.intl.formatToPlainString(u.t.WNKzo6, { maxFriends: l.L4X })
            },
            {
                icon: s.ChatSmileIcon,
                text: u.intl.string(u.t.j7peBg)
            },
            {
                icon: s.GameControllerIcon,
                text: u.intl.string(u.t['feD3+v'])
            },
            {
                icon: s.SettingsIcon,
                text: u.intl.string(u.t.YFFVMz)
            }
        )),
    0 === a.length)
        ? null
        : (0, r.jsxs)('div', {
              className: c.applicationEducation,
              children: [
                  null != t && t.length > 0
                      ? (0, r.jsx)(s.Heading, {
                            variant: 'heading-sm/normal',
                            className: c.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          f,
                          {
                              icon: n,
                              text: i
                          },
                          t
                      );
                  })
              ]
          });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: c.entry,
        children: [
            (0, r.jsx)(t, {
                className: c.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-md/normal',
                className: c.entryText,
                children: n
            })
        ]
    });
}
