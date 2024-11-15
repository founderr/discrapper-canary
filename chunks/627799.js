n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(981631),
    l = n(388032),
    u = n(819736);
function c(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(i.x.SDK_SOCIAL_LAYER) &&
        ((t = l.intl.string(l.t.ex4sMT)),
        a.push(
            {
                icon: s.FriendsIcon,
                text: l.intl.formatToPlainString(l.t.WNKzo6, { maxFriends: o.L4X })
            },
            {
                icon: s.ChatSmileIcon,
                text: l.intl.string(l.t.j7peBg)
            },
            {
                icon: s.GameControllerIcon,
                text: l.intl.string(l.t['feD3+v'])
            },
            {
                icon: s.SettingsIcon,
                text: l.intl.string(l.t.YFFVMz)
            }
        )),
    0 === a.length)
        ? null
        : (0, r.jsxs)('div', {
              className: u.applicationEducation,
              children: [
                  null != t && t.length > 0
                      ? (0, r.jsx)(s.Heading, {
                            variant: 'heading-sm/normal',
                            className: u.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          d,
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
function d(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: u.entry,
        children: [
            (0, r.jsx)(t, {
                className: u.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-md/normal',
                className: u.entryText,
                children: n
            })
        ]
    });
}
