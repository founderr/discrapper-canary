var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(457926),
    l = n(388032),
    u = n(400357);
t.Z = function (e) {
    let { iconType: t, children: n } = e,
        i = null;
    switch (t) {
        case 'voice':
            i = (0, r.jsx)(s.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.BVZqJi)
            });
            break;
        case 'voice-locked':
            i = (0, r.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.aa0FYm)
            });
            break;
        case 'stage':
            i = (0, r.jsx)(s.StageIcon, {
                size: 'lg',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.EErMzM)
            });
            break;
        case 'stage-locked':
            i = (0, r.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.pKZ4Iy)
            });
            break;
        case 'thread':
            i = (0, r.jsx)(s.ThreadIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t['7Xm5QE'])
            });
            break;
        case 'text':
            i = (0, r.jsx)(s.TextIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.GK18KC)
            });
            break;
        case 'forum':
            i = (0, r.jsx)(s.ForumIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.GbryDQ)
            });
            break;
        case 'post':
            i = (0, r.jsx)(s.ChatIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.Y4REmJ)
            });
            break;
        case 'home':
        case 'guide':
            i = (0, r.jsx)(s.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.VbpLyc)
            });
            break;
        case 'browse':
        case 'customize':
            i = (0, r.jsx)(s.ChannelListMagnifyingGlassIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.et6wam)
            });
            break;
        case 'message':
            i = (0, r.jsx)(s.ChatIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.BAB0yM)
            });
            break;
        case 'locked':
            i = (0, r.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t['/YzI6+'])
            });
            break;
        case 'media':
            i = (0, r.jsx)(s.ImageIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.seKITE)
            });
            break;
        case 'linked-roles':
            i = (0, r.jsx)(s.LinkIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.ghtnsr)
            });
    }
    return (0, r.jsxs)('span', {
        className: a()('channelWithIcon', { [u.iconMentionText]: 'text' === t }),
        children: [
            (0, r.jsx)(o.Z, { children: i }),
            null != n && '' !== n
                ? (0, r.jsx)('span', {
                      className: u.name,
                      children: n
                  })
                : null
        ]
    });
};
